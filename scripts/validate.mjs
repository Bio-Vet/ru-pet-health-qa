/** Dependency-free validator for data/qa.json (CI runs on every push). */
import { readFileSync } from "node:fs";
const d = JSON.parse(readFileSync(new URL("../data/qa.json", import.meta.url), "utf8"));
const errors = [];
const err = (m) => errors.push(m);
const SPECIES = new Set(["dog", "cat", "rabbit", "rodent", "bird", "reptile", "ferret", "general"]);
const CATS = new Set(["bolezni", "simptomy", "privivki", "porody", "uhod", "services", "voprosy", "other"]);
if (d.meta?.license !== "CC-BY-4.0") err("meta.license must be CC-BY-4.0");
if (d.meta?.language !== "ru") err("meta.language must be ru");
const ids = new Set();
for (const it of d.items ?? []) {
	const at = `item "${it.id ?? "?"}"`;
	if (!it.id) err(`${at}: id missing`);
	if (ids.has(it.id)) err(`${at}: duplicate id`); ids.add(it.id);
	if (!SPECIES.has(it.species)) err(`${at}: bad species "${it.species}"`);
	if (!CATS.has(it.category)) err(`${at}: bad category "${it.category}"`);
	if ((it.question ?? "").length < 10 || !it.question.trim().endsWith("?")) err(`${at}: bad question`);
	if ((it.answer ?? "").length < 40) err(`${at}: answer too short`);
	if (!/^https:\/\/bio\.vet\//.test(it.source_url ?? "")) err(`${at}: bad source_url`);
}
if ((d.items ?? []).length < 3000) err(`only ${(d.items ?? []).length} items (<3000)`);
if (errors.length) {
	console.error("FAILED:\n" + errors.slice(0, 30).map((e) => "  - " + e).join("\n") + (errors.length > 30 ? `\n  …и ещё ${errors.length - 30}` : ""));
	process.exit(1);
}
console.log(`OK: ${d.items.length} Q&A pairs`);
