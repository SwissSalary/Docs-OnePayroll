# Contributing to OnePayroll Learn

This guide walks you through everything you need to contribute to the OnePayroll documentation site ([learn.onepayroll.com](https://learn.onepayroll.com)). No prior experience with Git, Markdown, or DocFX is required.

## Prerequisites

Before you begin, install these tools:

| Tool | Purpose | Download |
|------|---------|----------|
| **GitHub Desktop** | Manage branches, commit changes, and create pull requests | [desktop.github.com](https://desktop.github.com) |
| **Visual Studio Code** | Edit Markdown files with preview and linting | [code.visualstudio.com](https://code.visualstudio.com) |

### Recommended VS Code extensions

After installing VS Code, add this extension (from the Extensions panel, `Ctrl+Shift+X`):

**Learn Authoring Pack** (Microsoft) — Markdown linting, link validation, template snippets, and Learn Preview

### Repository access

Ask a team lead to add you as a collaborator on the OnePayroll documentation GitHub repository. Once added, clone the repo in GitHub Desktop:

1. Open GitHub Desktop
2. Select **File > Clone repository**
3. Choose the **OnePayroll** documentation repository
4. Set the local path (for example, `C:\Repos\Docs\OnePayroll`)
5. Select **Clone**

## Workflow: Making changes

Every change follows this workflow: **branch → edit → commit → pull request → merge**.

### Step 1: Create a branch

Never edit the `main` branch directly. Always create a branch for your work.

1. In GitHub Desktop, make sure you're on the `main` branch (top-left dropdown)
2. Select **Branch > New branch** (or `Ctrl+Shift+N`)
3. Name your branch descriptively:
   - `screenshots/role-center` — Adding role center screenshots
   - `fix/benefits-setup-corrections` — Fixing content in benefits-setup.md
   - `content/toc-restructure` — Reorganizing the table of contents
4. Select **Create branch**

### Step 2: Edit files

Open the repository folder in VS Code (`Ctrl+Shift+A` in GitHub Desktop, or **Repository > Open in Visual Studio Code**).

All documentation articles are in the `onepayroll/` folder. Edit the `.md` files as needed (see [Markdown reference](#markdown-reference) and [DocFX conventions](#docfx-conventions) below).

### Step 3: Commit your changes

After editing, return to GitHub Desktop:

1. Review the changed files in the left panel — GitHub Desktop highlights additions (green) and deletions (red)
2. Write a short, descriptive **summary** (required): for example, `Add role center screenshot`
3. Add a **description** only if the summary doesn't tell the full story
4. Select **Commit to [branch-name]**

> [!TIP]
> Commit frequently. Small, focused commits are easier to review than one large commit.

### Step 4: Push and create a pull request

1. Select **Push origin** to upload your branch to GitHub
2. Select **Create Pull Request** (or go to the GitHub website)
3. Add a title and description explaining what you changed and why
4. Assign a reviewer
5. Select **Create pull request**

The site automatically rebuilds when changes are merged to `main`.

### Step 5: After the merge

After your pull request is approved and merged:

1. In GitHub Desktop, switch to the `main` branch
2. Select **Fetch origin** to pull the latest changes
3. Delete your old branch: **Branch > Delete** (it's safe, the work is merged)

## Markdown reference

All articles are written in Markdown (`.md` files). Here's what you need to know.

### Headings

Use `#` symbols for headings. Always leave a blank line before and after headings.

```markdown
# Heading 1 (article title — only one per file)
## Heading 2 (major sections)
### Heading 3 (subsections)
```

### Text formatting

| Syntax | Result |
|--------|--------|
| `**bold**` | **bold** |
| `*italic*` | *italic* |
| `` `code` `` | `code` (for field names, values, page names) |

### Links

```markdown
<!-- Link to another article in the same folder -->
[Set up pay types](pay-types-setup.md)

<!-- Link to a specific section -->
[Benefits limits](benefits-limits.md#annual-limits)

<!-- External link -->
[Microsoft Learn](https://learn.microsoft.com/dynamics365/business-central/)
```

### Lists

```markdown
<!-- Bulleted list -->
- First item
- Second item
- Third item

<!-- Numbered list (for steps) -->
1. Do this first.
1. Then do this.
1. Finally, do this.
```

> [!NOTE]
> Use `1.` for every numbered item. Markdown auto-increments the numbers when rendered. This makes reordering steps easier.

### Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|-----------|----------|----------|
| Value     | Value    | Value    |
| Value     | Value    | Value    |
```

### Alerts (callouts)

Use these for important notes, tips, and warnings:

```markdown
> [!NOTE]
> General information the reader should be aware of.

> [!TIP]
> Helpful suggestion that makes the task easier.

> [!IMPORTANT]
> Critical information needed for success.

> [!WARNING]
> Action that could cause data loss or unintended consequences.
```

### Images

```markdown
![Alt text describing the image](media/folder-name/image-file.png)
```

See [Adding screenshots](#adding-screenshots) for the full process.

## DocFX conventions

DocFX converts our Markdown articles into the static website at learn.onepayroll.com. Follow these conventions to ensure articles render correctly.

### File naming

- Use **lowercase with hyphens**: `pay-types-setup.md`, not `PayTypesSetup.md`
- Name pattern: `[feature]-[article-type].md`
  - Overview articles: `pay-types-overview.md`
  - Setup articles: `pay-types-setup.md`
  - How-to articles: `payroll-runs-process.md`

### Metadata header

Every article starts with a YAML metadata block (called "front matter"):

```yaml
---
title: Set up pay types
description: Learn how to configure pay types in OnePayroll for earnings, deductions, and employer contributions.
ms.topic: article
ms.date: 02/24/2026
---
```

| Field | Rules |
|-------|-------|
| `title` | Maximum 60 characters. Sentence case. Must match the `# Heading 1` in the article. |
| `description` | Maximum 160 characters. Starts with "Learn how to..." or "Learn about...". Natural-sounding sentence with search keywords. |
| `ms.topic` | Use `article` for most pages, `overview` for overview articles, `how-to` for task articles. |
| `ms.date` | Date of last meaningful content change (`MM/DD/YYYY`). |

### Table of contents (toc.md)

The file `onepayroll/toc.md` controls the left-side navigation. It uses Markdown headings and links:

```markdown
# [Section heading](optional-link.md)
## [Article title](article-file.md)
### [Sub-article title](sub-article-file.md)
```

**Rules:**

- Every new article MUST be added to `toc.md` or it won't appear in navigation
- The link text should match the article's `# Heading 1`
- Nesting depth: `#` = top section, `##` = article, `###` = sub-article, `####` = sub-sub-article

### Heading conventions (aligned with Microsoft Learn)

Follow these patterns for consistency with Microsoft Business Central documentation:

| Pattern | Example | When to use |
|---------|---------|-------------|
| `X overview` | `Pay types overview` | Overview/concept articles |
| `Set up X` | `Set up pay types` | Setup/configuration articles |
| Verb-first | `Process payroll runs` | Task/how-to articles |

**Avoid:**

- "About X" — Use "X overview" instead
- "Configure X" — Use "Set up X" instead
- Generic sections like "Advanced features" — Place articles in their parent domain

### Cross-references between articles

When referring to another article, always link to it:

```markdown
For more information, see [Set up pay types](pay-types-setup.md).
```

### See also section

Most articles end with a **See also** section linking to related content:

```markdown
## See also

- [Pay types overview](pay-types-overview.md)
- [Set up pay cycles](pay-cycles-setup.md)
```

## Writing style

All documentation **must** follow the [Microsoft Writing Style Guide](https://learn.microsoft.com/style-guide/welcome/). This is a mandatory requirement for all contributors. Key principles:

- **Use second person** — Address the reader as "you," not "the user" or "one."
- **Use active voice** — Write "Select the field" instead of "The field should be selected."
- **Use present tense** — Write "The page shows" instead of "The page will show."
- **Use sentence case for headings** — Capitalize only the first word and proper nouns.
- **Be concise** — Use simple words. Prefer "use" over "utilize," "help" over "facilitate."
- **Use consistent terminology** — Match Business Central UI labels exactly (for example, "Choose" for actions, "Select" for checkboxes and options).

For the full guide, see [Microsoft Writing Style Guide](https://learn.microsoft.com/style-guide/welcome/).

## Adding screenshots

Screenshots make documentation much easier to follow. Here's the complete process.

### Taking screenshots

1. **Use a clean environment** — Use a Business Central sandbox with Contoso Coffee demo data (generated via OnePayroll setup)
2. **Crop to the relevant area** — Show only the page, card, or section the article describes. Don't include the full browser window.
3. **Use a consistent window size** — Resize your browser to a standard width before capturing
4. **Highlight key elements** — If pointing out a specific field or button, use a red rectangle or arrow (use Snagit, ShareX, or the Windows Snipping Tool annotation features)
5. **Remove personal data** — Don't include real employee names, SSNs, or salary amounts. Use demo data.

### File naming and location

Save screenshots following this structure:

```
onepayroll/
  media/
    pay-types-setup/
      pay-type-card.png
      pay-type-list.png
    payroll-runs-process/
      payroll-run-page.png
```

**Rules:**

- Create a subfolder in `media/` matching the article filename (without `.md`)
- Use descriptive, lowercase, hyphenated filenames: `pay-type-card.png`, not `Screenshot1.png`
- Use `.png` format for UI screenshots

### Adding to an article

Reference the image with a descriptive alt text:

```markdown
The following screenshot shows the Pay Type Card page with key fields highlighted.

![Pay Type Card page showing the Category, Tax Code, and GL Account fields.](media/pay-types-setup/pay-type-card.png)
```

**Alt text guidelines:**

- Describe what the image shows, not what the reader should do
- Include the page name and key visible elements
- Keep it under 125 characters

### Tell Me navigation pattern

When directing users to a page, use this standard pattern (matching Microsoft Learn conventions):

```markdown
1. Choose the ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Page Name**, and then choose the related link.
```

The `search_small.png` icon already exists in `onepayroll/media/ui-search/`.

## Previewing your changes

Before pushing changes, you can preview how your article will look. There are two options:

### Option 1: Learn Preview in VS Code (recommended)

The **Learn Authoring Pack** extension (listed in [Recommended VS Code extensions](#recommended-vs-code-extensions)) includes a built-in preview that renders your Markdown the way it appears on a Microsoft Learn site — including alerts, tables, and metadata.

To use it:

1. Open the article you're editing in VS Code
2. Open the Command Palette (`Ctrl+Shift+P`)
3. Type **Learn Preview** and select it

This is the fastest way to check your formatting without leaving VS Code.

### Option 2: Full site build with DocFX

For larger changes — such as TOC restructuring, cross-reference updates, or template changes — you can build the entire site locally. This requires a one-time setup.

**One-time setup:**

1. Install the [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
2. Install DocFX:

   ```powershell
   dotnet tool install -g docfx
   ```

**Build and preview:**

From the repository root folder:

```powershell
docfx --serve
```

This builds the site and opens a local server at `http://localhost:8080`. Open this URL in your browser to preview.

Press `Ctrl+C` in the terminal to stop the server.

> [!TIP]
> If you only changed article content (not the template or docfx.json), the build takes just a few seconds.

## Article templates

Three templates are available in the `templates/` folder to help you start new articles:

| Template | Use for |
|----------|---------|
| `feature-overview.md` | Overview/concept articles introducing a feature |
| `feature-setup.md` | Setup articles explaining how to configure a feature |
| `feature-how.md` | Task articles with step-by-step instructions |

Copy the appropriate template to `onepayroll/`, rename it following the [file naming convention](#file-naming), and fill in the content.

## Quick reference

| Task | Where |
|------|-------|
| Edit an article | `onepayroll/[article].md` in VS Code |
| Add an article to navigation | `onepayroll/toc.md` |
| Add a screenshot | `onepayroll/media/[article-name]/` |
| Change site config | `docfx.json` (ask a dev first) |
| Check article templates | `templates/` folder |
| Preview an article | **Learn Preview** in VS Code (`Ctrl+Shift+P`) |
| Preview the full site | Run `docfx --serve` from repo root |

## Getting help

- **Markdown syntax** — [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
- **DocFX documentation** — [dotnet.github.io/docfx](https://dotnet.github.io/docfx/)
- **Writing style guide** — [Microsoft Writing Style Guide](https://learn.microsoft.com/style-guide/welcome/) (mandatory for all contributions)
- **BC writing guide** — [Microsoft Learn authoring guide](https://learn.microsoft.com/dynamics365/business-central/dev-itpro/help/writing-guide)
- **Questions** — Ask in the team channel or reach out to the documentation lead
