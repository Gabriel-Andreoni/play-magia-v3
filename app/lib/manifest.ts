import Manifest from "@mnfst/sdk";

let manifest: Manifest | null = null;

export function getManifest() {
  if (!manifest) {
    // 🔑 Se a env não existir, lança erro em produção em vez de cair no localhost
    const apiURL =
      process.env.NEXT_PUBLIC_API_URL ||
      (process.env.NODE_ENV === "development"
        ? "http://localhost:1111"
        : null);

    if (!apiURL) {
      throw new Error(
        "❌ NEXT_PUBLIC_API_URL não foi definido no ambiente de produção."
      );
    }

    manifest = new Manifest(apiURL);
  }

  return manifest;
}
