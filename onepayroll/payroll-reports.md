---
title: Payroll reports
description: Learn how to run payroll analysis and operational reports in OnePayroll.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 02/23/2026
---

# Payroll reports

This article describes each payroll report in OnePayroll, including what it shows and when to use it.

## Paycheck

**Purpose:** Employee pay stub showing all earnings, deductions, taxes, and net pay for a payroll period.

**Output:** Word/PDF

**To run:**

1. On the **Payroll Runs** page, select a payroll run
2. Select **Paycheck** from the Paycheck Actions group
3. On the request page, optionally filter by employee
4. Preview or print

**Shows:**

- Company and employee information
- Earnings section by pay type (description, hours/units, rate, amount)
- Deductions section (benefits, garnishments, taxes)
- Net pay amount
- Year-to-date totals
- Payment distribution showing how net pay is split across payment methods

**Use for:** Distributing pay stubs to employees, verifying individual paycheck details, archiving pay records.

> [!TIP]
> Use the **Save in Dossier** action to batch-save paychecks as PDF documents directly into employee dossiers.

## Payroll Register

**Purpose:** Comprehensive register of all payroll entries for a payroll run.

**Output:** Excel

**To run:**

1. On the **Payroll Runs** page, select a payroll run
2. Select **Payroll Register** from the Reporting group
3. Preview or export to Excel

**Shows per employee:**

- All earnings entries with amounts
- Employee deduction amounts (taxes, benefits, garnishments)
- Employer contribution amounts
- Subtotals by category

**Use for:** Detailed payroll review, reconciliation, audit support, verifying that all pay types and employees are correctly included.

## Payroll Register Difference

**Purpose:** Compares two payroll runs to identify changes between them.

**Output:** Excel

**To run:**

1. Search for **Payroll Register Difference** or select it from the Role Center Reports section
2. On the request page, select:
   - **Payroll 1** — the first payroll run to compare
   - **Payroll 2** — the second payroll run to compare
3. Optionally filter by employee
4. Preview or export to Excel

**Shows per employee and pay type:**

- Amount in Payroll 1
- Amount in Payroll 2
- Difference (amount)
- Percentage change

**Use for:** Identifying pay variances between periods, spotting unusual changes, verifying that expected adjustments (such as raises or new deductions) are reflected correctly.

## Cost of Labor

**Purpose:** Labor cost analysis across employees, departments, and pay types.

**Output:** Excel

**To run:**

1. Search for **Cost of Labor** or select it from the Role Center Reports section
2. On the request page, set:
   - **Date From** and **Date To** — the analysis period
   - Optionally filter by pay type or employee
3. Preview or export to Excel

**Shows:**

- Labor costs broken down by employee
- Department allocation
- Pay type breakdown
- Totals for the selected period

**Use for:** Budgeting, department cost allocation, headcount cost analysis, management reporting.

## Benefit Summary

**Purpose:** Analysis of benefit costs, contributions, and limits.

**Output:** Excel

**To run:**

1. Search for **Benefit Summary** or select it from the Role Center Reports section
2. On the request page, set:
   - **Date From** and **Date To** — the analysis period
   - Optionally filter by benefit type or employee
3. Preview or export to Excel

**Shows per employee and benefit type:**

- Employee contribution amounts
- Employer contribution amounts
- Benefit limits
- Remaining amounts (limit minus contributions)

**Use for:** Benefits cost analysis, tracking contribution limits (such as 401(k) annual maximums), benefits reconciliation.

## Pay Type List

**Purpose:** Cross-employee comparison of pay type amounts.

**Output:** Excel

**To run:**

1. Search for **Pay Type List** or select it from the Role Center Reports section
2. On the request page, select up to five pay types to compare, with output type options for each
3. Optionally filter by employee
4. Preview or export to Excel

**Shows:**

- Selected pay type amounts across all employees
- Side-by-side comparison of up to five pay types

**Use for:** Comparing specific compensation elements across the workforce, bonus analysis, overtime tracking.

## General Ledger Log

**Purpose:** Preview of GL debit and credit entries for a payroll run.

**Output:** Word/PDF

**To run:**

1. On the **Payroll Runs** page, select a payroll run
2. Select **General Ledger Log** from the Reporting group
3. Preview or print

> [!IMPORTANT]
> The General Ledger Log must be run for exactly one payroll run.

**Shows:**

- GL account entries that were (or will be) created during posting
- Debit and credit amounts
- Account descriptions

**Use for:** Reviewing GL entries before posting, verifying correct account assignments, reconciling posted payroll to the general ledger.

## Related information

- [About payroll reports](reports-overview.md)
- [Tax statements and W-2 reporting](tax-statements.md)
- [Process payroll runs](payroll-runs-process.md)
- [About GL integration](gl-integration-overview.md)
