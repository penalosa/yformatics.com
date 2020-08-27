import { promises } from "fs";
import yaml from "js-yaml";
export async function get(req, res, next) {
  const { level, subject, unit } = req.params;

  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  const structure = yaml
    .safeLoad(
      await promises.readFile(
        `./src/notes/${level}/${subject}/structure.yaml`,
        "utf-8"
      )
    )
    .filter((s) => s.visible);
  const title = yaml
    .safeLoad(
      await promises.readFile(`./src/notes/${level}/structure.yaml`, "utf-8")
    )
    .find((s) => s.slug === subject);
  res.end(
    JSON.stringify({
      title,
      levels: structure,
      level: structure.find((l) => l.slug === unit),
      subjects: yaml
        .safeLoad(
          await promises.readFile(
            `./src/notes/${level}/${subject}/${unit}/structure.yaml`,
            "utf-8"
          )
        )
        .filter((s) => s.visible)
    })
  );
}
