import Manifest from "@mnfst/sdk";

const apiURL = "http://localhost:1111" || `${process.env.API_URL}/api`;

export const manifest = new Manifest(apiURL);