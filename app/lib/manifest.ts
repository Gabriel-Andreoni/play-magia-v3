import Manifest from "@mnfst/sdk";

const apiURL = process.env.API_URL || "https://api-play-magia-production.up.railway.app";

export const manifest = new Manifest(apiURL);