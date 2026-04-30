# OnePayroll Learn

Source repository for [learn.onepayroll.com](https://learn.onepayroll.com) — the documentation site for OnePayroll, a payroll management extension for Microsoft Dynamics 365 Business Central.

## Repository structure

```
onepayroll/          Documentation articles (Markdown)
  media/             Screenshots and images
templates/           Article templates (overview, setup, how-to)
  custom/            DocFX template overrides (CSS, JS)
docfx.json           DocFX build configuration
toc.yml              Site table of contents
CONTRIBUTING.md      Contributor guide
```

## Getting started

1. Clone the repository with [GitHub Desktop](https://desktop.github.com)
2. Open the folder in [VS Code](https://code.visualstudio.com)
3. Read [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow — branching, editing, committing, and creating pull requests

## Local preview
1. Install the required tools.
```bash
dotnet tool install -g docfx; winget install OpenJS.NodeJS.LTS;
```

2. Run the app locally
```bash
docfx docfx.json; npx @azure/static-web-apps-cli start _site --swa-config-location . --ssl --open;
```
One the site is built, it should automatically open up in your default browser.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for everything you need: prerequisites, Markdown reference, DocFX conventions, screenshot guidelines, article templates, and writing style.

## Deployment

The site deploys automatically to Azure Static Web Apps when changes are merged to `main` (via GitHub Actions).

---

© SwissSalary Ltd. | OnePayroll for Microsoft Dynamics 365 Business Central
