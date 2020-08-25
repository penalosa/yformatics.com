import { promises } from "fs";
import yaml from "js-yaml";
export async function get(req, res, next) {
  const levels = yaml.safeLoad(
    await promises.readFile(`./src/notes/structure.yaml`, "utf-8")
  );

  res.writeHead(302, {
    "Content-Type": "application/json",
    Location: `/learn/${levels[0].slug}`
  });
  res.end();
}
