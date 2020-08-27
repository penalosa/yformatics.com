import { promises } from "fs";
import yaml from "js-yaml";
export async function get(req, res, next) {
  const { level } = req.params;

  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  const structure = yaml
    .safeLoad(await promises.readFile(`./src/notes/structure.yaml`, "utf-8"))
    .filter((s) => s.visible);
  res.end(
    JSON.stringify({
      levels: structure,
      level: structure.find((l) => l.slug === level),
      subjects: await Promise.all(
        yaml
          .safeLoad(
            await promises.readFile(
              `./src/notes/${level}/structure.yaml`,
              "utf-8"
            )
          )
          .filter((s) => s.visible)
          .map(async (s) => ({
            ...s,
            units: yaml.safeLoad(
              await promises.readFile(
                `./src/notes/${level}/${s.slug}/structure.yaml`,
                "utf-8"
              )
            )
          }))
      )
    })
  );
}
