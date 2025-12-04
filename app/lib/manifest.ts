import Manifest from "@mnfst/sdk";

const apiURL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://lw0kc8owc0oo0w0ssokco884.147.93.71.68.sslip.io";

export const manifest = new Manifest(apiURL);
