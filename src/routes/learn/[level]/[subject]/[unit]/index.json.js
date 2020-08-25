import { promises } from "fs";
import yaml from "js-yaml";
export async function get(req, res, next) {
  const { level, subject, unit } = req.params;

  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  const structure = yaml.safeLoad(
    await promises.readFile(
      `./src/notes/${level}/${subject}/structure.yaml`,
      "utf-8"
    )
  );
  res.end(
    JSON.stringify({
      levels: structure,
      level: structure.find((l) => l.slug === unit),
      subjects: yaml.safeLoad(
        await promises.readFile(
          `./src/notes/${level}/${subject}/${unit}/structure.yaml`,
          "utf-8"
        )
      )
    })
  );
}
