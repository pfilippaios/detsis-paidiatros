# detsis-paidiatros

Rebuild of detsis-paidiatros.gr (Dr Marios Detsis, pediatrician) as a static HTML/CSS/JS site.
See [PLAN.md](PLAN.md) for sitemap, content blueprint, article inventory, real clinic data.

`_ref/` (gitignored) = all reference / old-website / scratch material. Notably
`_ref/site-mirror/` = full httrack copy of the old WordPress site (content + images source).

## Running Codex (gpt-5.5, high effort)

The `ask-codex` wrapper hardcodes a small model + read-only sandbox — do NOT use it when you
need 5.5/high or file writes. Call `codex exec` directly:

```bash
# read-only consult (model/effort are also the config.toml defaults, flags shown for clarity)
codex exec -m gpt-5.5 -c model_reasoning_effort="high" "PROMPT"

# let codex write files
codex exec -m gpt-5.5 -c model_reasoning_effort="high" -s workspace-write "PROMPT"
```

For bulk file reading where 5.5/high isn't needed, `ask-codex --paths <files> --question "..."` is fine.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
