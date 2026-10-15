// One-time Spotify login: run `node scripts/spotify-auth.mjs`, log in, and the
// refresh token is written to .env.local as SPOTIFY_REFRESH_TOKEN.
import http from "node:http";
import fs from "node:fs";
import { exec } from "node:child_process";

const ENV_FILE = new URL("../.env.local", import.meta.url);
const REDIRECT_URI = "http://127.0.0.1:8888/callback";
const SCOPES = "user-top-read user-read-recently-played";

const env = Object.fromEntries(
  fs.readFileSync(ENV_FILE, "utf8")
    .split("\n")
    .filter((line) => line.includes("=") && !line.trim().startsWith("#"))
    .map((line) => [line.slice(0, line.indexOf("=")).trim(), line.slice(line.indexOf("=") + 1).trim()]),
);
const { SPOTIFY_CLIENT_ID: clientId, SPOTIFY_CLIENT_SECRET: clientSecret } = env;
if (!clientId || !clientSecret) {
  console.error("Add SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET to .env.local first.");
  process.exit(1);
}

const authUrl = `https://accounts.spotify.com/authorize?${new URLSearchParams({
  client_id: clientId,
  response_type: "code",
  redirect_uri: REDIRECT_URI,
  scope: SCOPES,
  show_dialog: "true",
})}`;

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, REDIRECT_URI);
  if (url.pathname !== "/callback") return res.end();
  const code = url.searchParams.get("code");
  if (!code) {
    console.error(`Spotify login failed: ${url.searchParams.get("error") ?? "no code returned"}`);
    res.end("Spotify login was cancelled. You can close this tab.");
    server.close();
    return;
  }
  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "authorization_code", code, redirect_uri: REDIRECT_URI }),
  });
  const data = await tokenRes.json();
  if (!data.refresh_token) {
    res.end("Spotify didn't return a token. Check the terminal.");
    console.error(data);
    server.close();
    return;
  }
  const current = fs.readFileSync(ENV_FILE, "utf8").replace(/^SPOTIFY_REFRESH_TOKEN=.*\n?/m, "");
  fs.writeFileSync(ENV_FILE, `${current.trimEnd()}\nSPOTIFY_REFRESH_TOKEN=${data.refresh_token}\n`);
  res.end("Connected to Spotify. You can close this tab.");
  console.log("Saved SPOTIFY_REFRESH_TOKEN to .env.local");
  server.close();
});

server.listen(8888, "127.0.0.1", () => {
  console.log("Opening Spotify login...");
  exec(`open "${authUrl}"`);
});
