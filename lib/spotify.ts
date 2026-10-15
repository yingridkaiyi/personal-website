// Server-only helpers for reading Ingrid's Spotify listening.
// Needs SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET and SPOTIFY_REFRESH_TOKEN
// (run `node scripts/spotify-auth.mjs` once to get the refresh token).

export interface TopSong {
  id: string;
  name: string;
  artists: string;
  albumArt: string;
  url: string;
}

interface SpotifyTrack {
  id: string;
  name: string;
  artists: { name: string }[];
  album: { images: { url: string; width: number }[] };
  external_urls: { spotify: string };
}

const REVALIDATE_SECONDS = 60 * 60;

// Tolerates values pasted into a host's dashboard with stray spaces or quotes.
function env(name: string) {
  return process.env[name]?.trim().replace(/^["']|["']$/g, "") || undefined;
}

async function getAccessToken() {
  const SPOTIFY_CLIENT_ID = env("SPOTIFY_CLIENT_ID");
  const SPOTIFY_CLIENT_SECRET = env("SPOTIFY_CLIENT_SECRET");
  const SPOTIFY_REFRESH_TOKEN = env("SPOTIFY_REFRESH_TOKEN");
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
    const missing = ["SPOTIFY_CLIENT_ID", "SPOTIFY_CLIENT_SECRET", "SPOTIFY_REFRESH_TOKEN"].filter((n) => !env(n));
    console.error(`[spotify] missing env: ${missing.join(", ")}`);
    return null;
  }

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: SPOTIFY_REFRESH_TOKEN }),
    next: { revalidate: REVALIDATE_SECONDS },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error(`[spotify] token refresh failed: ${res.status} ${data.error ?? ""} ${data.error_description ?? ""}`);
    return null;
  }
  return data.access_token ?? null;
}

function toTopSong(track: SpotifyTrack): TopSong {
  const images = [...track.album.images].sort((a, b) => b.width - a.width);
  return {
    id: track.id,
    name: track.name,
    artists: track.artists.map((a) => a.name).join(", "),
    albumArt: images[0]?.url ?? "",
    url: track.external_urls.spotify,
  };
}

// My #1 track on Spotify's own short-term chart (roughly the last 4 weeks of listening).
export async function getOnRepeatSong() {
  try {
    const token = await getAccessToken();
    if (!token) return null;
    const res = await fetch("https://api.spotify.com/v1/me/top/tracks?" + new URLSearchParams({ time_range: "short_term", limit: "1" }), {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) {
      console.error(`[spotify] top tracks request failed: ${res.status}`);
      return null;
    }
    const data: { items: SpotifyTrack[] } = await res.json();
    return data.items[0] ? toTopSong(data.items[0]) : null;
  } catch (err) {
    console.error("[spotify] request error:", err instanceof Error ? err.message : err);
    return null;
  }
}
