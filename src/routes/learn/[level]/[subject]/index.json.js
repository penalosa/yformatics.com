import { promises } from "fs";
import yaml from "js-yaml";
export async function get(req, res, next) {
  const { level, subject } = req.params;

  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  const structure = yaml.safeLoad(
    await promises.readFile(`./src/notes/${level}/structure.yaml`, "utf-8")
  );
  res.end(
    JSON.stringify({
      subjects: structure,
      subject: structure.find((l) => l.slug === subject),
      units: yaml.safeLoad(
        await promises.readFile(
          `./src/notes/${level}/${subject}/structure.yaml`,
          "utf-8"
        )
      )
    })
  );
}
