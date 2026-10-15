"use client";

// Written with createElement (no JSX) so it can be shared as plain text.
import { createElement as h, Fragment, useEffect, useState } from "react";
import Image from "next/image";
import type { TopSong } from "@/lib/spotify";

type EmbedController = {
  togglePlay: () => void;
  addListener: (event: string, cb: (e: { data: { isPaused: boolean } }) => void) => void;
};

type SpotifyIFrameAPI = {
  createController: (
    el: HTMLElement,
    options: { uri: string; width?: string | number; height?: string | number },
    cb: (controller: EmbedController) => void,
  ) => void;
};

type SpotifyWindow = Window & {
  onSpotifyIframeApiReady?: (api: SpotifyIFrameAPI) => void;
  spotifyIframeApi?: SpotifyIFrameAPI;
};

function loadIframeApi(onReady: (api: SpotifyIFrameAPI) => void) {
  const w = window as SpotifyWindow;
  if (w.spotifyIframeApi) return onReady(w.spotifyIframeApi);
  w.onSpotifyIframeApiReady = (api) => {
    w.spotifyIframeApi = api;
    onReady(api);
  };
  if (!document.querySelector("script[data-spotify-iframe-api]")) {
    const s = document.createElement("script");
    s.src = "https://open.spotify.com/embed/iframe-api/v1";
    s.async = true;
    s.dataset.spotifyIframeApi = "true";
    document.body.appendChild(s);
  }
}

const speakerOn = "M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z";
const speakerOff = "M16.5 12A4.5 4.5 0 0 0 14 8v2.2l2.5 2.5V12zM19 12c0 .9-.2 1.8-.5 2.6l1.5 1.5A9 9 0 0 0 14 3.2v2.1A7 7 0 0 1 19 12zM4.3 3 3 4.3 7.7 9H3v6h4l5 5v-6.7l4.3 4.2c-.7.5-1.4.9-2.3 1.2v2.1a9 9 0 0 0 3.7-1.8l2 2 1.3-1.3L4.3 3zM12 4 9.9 6.1 12 8.2V4z";

export default function SpinningRecord({ song }: { song: TopSong | null }) {
  const [embedEl, setEmbedEl] = useState(null as HTMLDivElement | null);
  const [controller, setController] = useState(null as EmbedController | null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!song || !embedEl) return;
    let cancelled = false;
    loadIframeApi((api) => {
      if (cancelled) return;
      api.createController(embedEl, { uri: `spotify:track:${song.id}`, width: "100%", height: 80 }, (c) => {
        c.addListener("playback_update", (e) => setPlaying(!e.data.isPaused));
        setController(c);
      });
    });
    return () => {
      cancelled = true;
    };
  }, [song, embedEl]);

  const label = h(
    "div",
    { className: "record-label" },
    song?.albumArt
      ? h(Image, { src: song.albumArt, alt: "", fill: true, sizes: "160px", className: "record-art" })
      : h("i", null, "IY"),
    h("span"),
  );

  const deck = h(
    "div",
    { className: `deck md:col-start-2 md:row-start-1 ${playing ? "is-playing" : ""}`, "aria-hidden": true },
    h("div", { className: "record" }),
    label,
  );

  const card = song
    ? h(
        "div",
        { className: "now-spinning md:col-start-2 md:row-start-2 self-end justify-self-center max-w-[420px]" },
        h(
          "div",
          { className: "min-w-0" },
          h(
            "div",
            { className: "font-mono-ui text-[11px] uppercase tracking-widest text-neon-cyan" },
            "On repeat lately",
          ),
          h("a", { href: song.url, target: "_blank", rel: "noopener noreferrer", className: "block font-bold truncate hover:underline" }, song.name),
          h("div", { className: "text-dim text-sm truncate" }, song.artists),
        ),
        h(
          "button",
          {
            type: "button",
            onClick: () => controller?.togglePlay(),
            disabled: !controller,
            className: "sound-toggle",
            "aria-pressed": playing,
            "aria-label": playing ? "Mute song" : "Play song with sound",
          },
          h("svg", { viewBox: "0 0 24 24", width: 18, height: 18, fill: "currentColor", "aria-hidden": true }, h("path", { d: playing ? speakerOn : speakerOff })),
          h("span", null, playing ? "Mute" : "Unmute"),
        ),
      )
    : null;

  // Spotify's player does the playback; it sits off-screen so the record is the UI.
  const embed = h("div", { className: "spotify-embed", "aria-hidden": true }, h("div", { ref: setEmbedEl }));

  // Deck and card are placed into the parent hero grid (record beside the name, card beside the shortcuts).
  return h(Fragment, null, deck, card, embed);
}
