import fs, { promises } from "fs";

import yaml from "js-yaml";
import Fuse from "fuse.js";
const levels = yaml.safeLoad(
  fs.readFileSync("./src/notes/structure.yaml", "utf-8")
);
const subjects = levels
  .map((l) =>
    yaml
      .safeLoad(
        fs.readFileSync(`./src/notes/${l.slug}/structure.yaml`, "utf-8")
      )
      .map((s) => ({ ...s, level: l }))
  )
  .flat();
const units = subjects
  .map((s) =>
    (
      yaml.safeLoad(
        fs.readFileSync(
          `./src/notes/${s.level.slug}/${s.slug}/structure.yaml`,
          "utf-8"
        )
      ) || []
    )
      .filter(Boolean)

      .map((u) => ({ ...u, subject: s }))
  )
  .flat();

const topics = units
  .map((u) =>
    (
      yaml.safeLoad(
        fs.readFileSync(
          `./src/notes/${u.subject.level.slug}/${u.subject.slug}/${u.slug}/structure.yaml`,
          "utf-8"
        )
      ) || []
    )
      .filter(Boolean)
      .map((t) => ({ ...t, unit: u }))
      .map((t) => ({
        ...t,
        text: fs.readFileSync(
          `./src/notes/${t.unit.subject.level.slug}/${t.unit.subject.slug}/${t.unit.slug}/${t.slug}/notes.md`,
          "utf-8"
        )
      }))
      .filter((t) => t.text)
  )
  .flat();

const fuse = new Fuse([...levels, ...subjects, ...units, ...topics], {
  keys: ["name", "text"],
  includeScore: true
});
console.log("Search index generated");
export async function get(req, res, next) {
  const { term } = req.params;

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(
    JSON.stringify({
      term,
      results: fuse.search(term).slice(0, 10)
    })
  );
}
