---
title: Tax compliance
description: Learn how OnePayroll supports tax reporting and compliance, including W-2 generation and payroll data for tax filings.
author: zeande
ms.topic: concept
ms.date: 02/23/2026
---

# Tax compliance

OnePayroll calculates tax withholding during payroll processing and provides data you need for tax compliance. This article describes what OnePayroll provides for tax reporting and how to use payroll data for your tax filing obligations.

## What OnePayroll provides

### Employee W-2 Statements

OnePayroll generates **Employee W-2 Statements** for annual employee tax reporting. The W-2 report produces the standard IRS form output with all required boxes populated from payroll entry data.

See [Tax statements and W-2 reporting](tax-statements.md) for details on configuring W-2 box mappings and generating W-2 statements.

### Payroll data for tax filings

OnePayroll maintains detailed payroll entry records that contain the data needed for tax compliance:

- **Federal income tax withheld** — tracked per employee per pay period
- **Social Security and Medicare (FICA)** — employee and employer portions tracked separately
- **State and local income tax** — tracked per jurisdiction when applicable
- **Gross wages** — broken down by pay type

You can extract this data using the **Payroll Register** and **Cost of Labor** reports, or by viewing payroll entries directly.

## Tax filing responsibilities

OnePayroll calculates and tracks tax withholding amounts, but **does not file tax returns with government agencies**. Your organization is responsible for:

### Quarterly filings

- **IRS Form 941** (Employer's Quarterly Federal Tax Return) — report federal income tax, Social Security, and Medicare taxes. Use OnePayroll's payroll entry data to populate the form.
- **State quarterly returns** — requirements vary by state. Filter payroll data by state jurisdiction as needed.

### Annual filings

- **W-2 / W-3** — OnePayroll generates W-2 statements. The W-3 transmittal summarizes all W-2s for filing with the SSA.
- **IRS Form 940** (FUTA) — report federal unemployment tax. Use payroll wage data filtered by the FUTA wage base.
- **State unemployment** — requirements vary by state.

### Tax deposits

- Make federal tax deposits on schedule (semi-weekly or monthly depending on your deposit schedule) using EFTPS or your bank
- Make state tax deposits per state requirements

## Using payroll data for tax filings

### To gather quarterly totals

1. Run the **Payroll Register** report filtered to the quarter's date range
2. Review totals by tax-related pay types:
   - Total wages subject to federal income tax
   - Total federal income tax withheld
   - Total Social Security wages and tax
   - Total Medicare wages and tax
3. Use these totals to populate Form 941 or equivalent state forms

### To reconcile year-end data

1. Run the **Payroll Register** report for the full calendar year
2. Compare totals to W-2 amounts
3. Verify that the sum of quarterly 941 totals matches annual W-2 totals
4. Investigate and resolve any discrepancies before filing W-2s

## Related information

- [Tax statements and W-2 reporting](tax-statements.md)
- [About tax calculations](tax-calculation-overview.md)
- [Set up tax calculations](tax-calculation-setup.md)
- [Payroll reports](payroll-reports.md)
