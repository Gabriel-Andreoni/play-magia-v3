import { TProduto } from "@/app/types/TProduto";
import { manifest } from "../manifest";

export async function getPlaygrounds() {
  return await manifest.from("produtos").find<TProduto>();
}