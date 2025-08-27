import Manifest from "@mnfst/sdk";

const apiURL = process.env.API_URL || "http://localhost:1111";

console.log(apiURL)

export const manifest = new Manifest(apiURL);