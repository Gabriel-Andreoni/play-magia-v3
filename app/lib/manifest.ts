import Manifest from "@mnfst/sdk";

const apiURL = `${process.env.API_URL}/api` || "http://localhost:1111";

export const manifest = new Manifest(apiURL);