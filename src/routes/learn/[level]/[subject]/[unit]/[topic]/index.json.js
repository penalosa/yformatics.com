import { promises } from "fs";
import yaml from "js-yaml";
import md from "markdown-it";
import anchor from "markdown-it-anchor";
import toc from "markdown-it-toc-done-right";
import mk from "@neilsustc/markdown-it-katex";
let mark = md({ typographer: true, html: true });
mark
  .use(mk)
  .use(anchor)
  .use(toc, { listType: "ul", itemClass: "toc-link", linkClass: "toc-link-a" });

// double backslash is required for javascript strings, but not html input
export async function get(req, res, next) {
  const { level, subject, unit, topic } = req.params;

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  const markdown = await promises.readFile(
    `./src/notes/${level}/${subject}/${unit}/${topic}/notes.md`,
    "utf-8"
  );
  const structure = yaml.safeLoad(
    await promises.readFile(
      `./src/notes/${level}/${subject}/${unit}/structure.yaml`,
      "utf-8"
    )
  );
  res.end(
    JSON.stringify({
      content: mark.render(`[[toc]]\n${markdown}`),
      structure: structure.find((s) => s.slug === topic)
    })
  );
}
