# detsis-paidiatros

Rebuild of detsis-paidiatros.gr (Dr Marios Detsis, pediatrician) as a static HTML/CSS/JS site.
See [PLAN.md](PLAN.md) for sitemap, content blueprint, article inventory, real clinic data.

`site-mirror/` = full httrack copy of the old WordPress site (content + images source).

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
