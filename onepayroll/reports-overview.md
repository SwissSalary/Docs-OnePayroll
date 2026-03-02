---
title: About payroll reports
description: Learn about the reports available in OnePayroll for payroll analysis, compliance, and management.
author: zeande
ms.topic: overview
ms.date: 02/23/2026
---

# About payroll reports

OnePayroll includes reports for analyzing payroll data, reviewing payroll runs, and managing employee compensation. Reports are available from the **Payroll Manager** Role Center, from the **Payroll Runs** page, and through the Business Central search.

## Available reports

### Employee-facing reports

| Report | Output | Description |
|--------|--------|-------------|
| **Paycheck** | Word/PDF | Individual pay stub showing earnings, deductions, taxes, net pay, and YTD amounts. Includes payment distribution details. |
| **Employee W-2 Statement** | Word/PDF | Annual IRS W-2 tax statement with all standard boxes. Available in the US localization layer. |

### Payroll analysis reports

| Report | Output | Description |
|--------|--------|-------------|
| **Payroll Register** | Excel | Detailed register of all payroll entries for a payroll run, grouped by employee, showing earnings, employee deductions, and employer contributions. |
| **Payroll Register Difference** | Excel | Compares two payroll runs side by side, showing amount differences and percentage changes per pay type and employee. Useful for identifying unexpected variances between periods. |
| **Cost of Labor** | Excel | Analyzes labor costs by employee, department, and pay type over a date range. |
| **Benefit Summary** | Excel | Benefit analysis showing employee and employer contributions, limits, and remaining amounts for a date range. |
| **Pay Type List** | Excel | Cross-employee comparison of up to five selected pay types, showing amounts and quantities. |

### Operational reports

| Report | Output | Description |
|--------|--------|-------------|
| **General Ledger Log** | Word/PDF | Preview of debit and credit GL entries for a payroll run before or after posting. Must be run for exactly one payroll run. |

### Processing reports (no output)

These reports perform actions rather than producing printable output:

| Report | Description |
|--------|-------------|
| **New Payroll** | Creates and calculates a new payroll run |
| **Paycheck Reversal** | Reverses a posted paycheck by creating offsetting entries |
| **Create Payroll Payments** | Generates payment journal entries for direct deposit or check printing |
| **Save to Dossier** | Saves generated report output as PDF documents in employee dossiers |

## Running reports

### From the Payroll Runs page

Most reports are available as actions on the **Payroll Runs** page:

- **Paycheck** — in the Paycheck Actions group
- **Save in Dossier** — in the Paycheck Actions group
- **Payroll Register** — in the Reporting group
- **General Ledger Log** — in the Reporting group
- **Reverse Paycheck** — in the process actions

### From the Role Center

The following reports are available from the **Payroll Manager** Role Center under the Reports section:

- Payroll Register
- Payroll Register Difference
- Cost of Labor
- Benefit Summary
- Pay Type List

### From search

Search for any report by name using the Business Central search (Tell Me).

## Output formats

Reports support standard Business Central output options:

- **Preview** — view on screen
- **Print** — send to a printer
- **Excel** — export to Excel (for reports with Excel layout)
- **PDF** — save as PDF
- **Word** — save as Word document (for reports with Word layout)

## For more information

- [Payroll reports](payroll-reports.md) — detailed guide for each report
- [Tax statements and W-2 reporting](tax-statements.md) — generating W-2 statements
- [Process payroll runs](payroll-runs-process.md) — running payroll

- **GL Reconciliation Report** - Verify GL posting
- **Tax Deposit Report** - Confirm deposits made match calculations
- **Payable Reconciliation** - Track outstanding liabilities

### For Compliance

- **W-2 Report** - Tax filing and employee distribution
- **Quarterly Wage Report** - Quarterly filing support

