# ru-pet-health-qa

**Russian pet-health Q&A corpus with veterinarian-written answers** —
3 678 question–answer pairs extracted from the vet-reviewed knowledge base
of the [BioVet](https://bio.vet) clinic network (Moscow, 21 clinics, 24/7,
in-house laboratory). Every pair carries a species tag, a category and the
source URL of the live article it came from.

> **Status: 1.0 — vet-reviewed.** All source articles passed veterinary review
> at publication; a 70-pair control sample was re-reviewed by licensed
> veterinarians of the BioVet clinic network (Moscow, 21 clinics, 24/7) on
> 25 Aug 2026 — 3 corrections found and applied to both the dataset and the
> source articles.

To our knowledge this is the **first non-synthetic, vet-verified pet-health
Q&A corpus in Russian** (and one of very few in any language): existing
public sets are LLM-generated. Use cases: RAG over veterinary content,
eval sets for Russian LLMs, intent/NER training, research.

## Data

One file — [`data/qa.json`](data/qa.json): `meta` + `items[]` with
`id`, `question`, `answer` (Russian), `species`
(`dog | cat | rabbit | rodent | bird | reptile | ferret | general`),
`category` (`bolezni` diseases · `simptomy` symptoms · `privivki`
vaccination · `porody` breeds · `uhod` care · `services` · `voprosy` misc),
`source_url`, `article`.

Coverage: cat 1 012 · dog 923 · general 794 · rodent 279 · bird 227 ·
rabbit 213 · reptile 188 · ferret 73.

## License

Data: CC BY 4.0 — free to use with attribution
("Data: BioVet veterinary clinic network, bio.vet"). Code: MIT.

## Disclaimer

Educational content — not a substitute for veterinary examination. Answers
describe typical cases; specific diagnosis and treatment are always decided
by a veterinarian in person.

## Related

[pet-food-safety](https://github.com/Bio-Vet/pet-food-safety) ·
pet-vaccination-schedules · pet-vital-signs ·
pet-parasite-prevention-schedules — the BioVet open-data family
([overview](https://bio.vet/open-data/)).
