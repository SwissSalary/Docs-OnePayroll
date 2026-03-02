---
title: Tax statements and W-2 reporting
description: Learn how to configure W-2 box mappings and generate Employee W-2 Statements in OnePayroll.
author: zeande
ms.topic: how-to
ms.date: 02/23/2026
---

# Tax statements and W-2 reporting

OnePayroll generates Employee W-2 Statements from payroll entry data. The W-2 report uses the W-2 Box mapping on pay types and employee-level W-2 fields to produce the standard IRS Form W-2 output.

## W-2 box mapping on pay types

Each pay type can be assigned to a W-2 box that determines where its amounts appear on the W-2 statement. This mapping is configured in the **Tax Statement** group on the Pay Type card.

### Supported W-2 boxes

| W-2 Box | Caption |
|---------|---------|
| 1 | Wages Tips Other Compensation |
| 2 | Federal Income Tax Withheld |
| 3 | Social Security Wages |
| 4 | Social Security Tax Withheld |
| 5 | Medicare Wages and Tips |
| 6 | Medicare Tax Withheld |
| 7 | Social Security Tips |
| 8 | Allocated Tips |
| 9 | Advanced Earned Income Credit Payments |
| 10 | Dependent Care Benefits |
| 11 | Nonqualified Plans |
| 12 | Codes (requires a W-2 Box Code) |
| 14 | Other (requires a W-2 Box Code) |
| 14 | Treasury Tipped Occupation Code (requires a W-2 Box Code) |
| 15 | State |
| 16 | State Wages Tips Etc |
| 17 | State Income Tax |
| 18 | Local Wages Tips Etc |
| 19 | Local Income Tax |
| 20 | Locality Name |

Boxes 12, 14, and 14 (Treasury Tipped Occupation Code) require a **W-2 Box Code** to further identify the specific code or description within the box. W-2 Box Codes are managed through the **W-2 Box Codes** page (accessible from the Tax Statement Code table).

### To assign W-2 boxes

1. Open a **Pay Type** card.
2. In the **Tax Statement** group, set:
   - **W-2 Box** — select the appropriate box from the list above
   - **W-2 Box Code** — required for Box 12 Codes, Box 14 Other, and Box 14 Treasury Tipped Occupation Code

Repeat for each pay type that should appear on the W-2.

## Employee W-2 fields

Additional W-2 information is stored at the employee level. Access these fields through the **W-2 Information** action on the Employee Card.

| Field | W-2 Box | Description |
|-------|---------|-------------|
| Third-Party Sick Pay | Box 13 | Indicates third-party sick pay was reported |
| Statutory Employee | Box 13 | Indicates the employee is a statutory employee |
| Retirement Plan | Box 13 | Indicates the employee participates in a retirement plan |
| Box 14a Miscellaneous | Box 14 | Free-text code for box 14 miscellaneous items |
| Tipped Occupation Code 1 | Box 14 | First tipped occupation code |
| Tipped Occupation Code 2 | Box 14 | Second tipped occupation code |

## Generate the Employee W-2 Statement

The Employee W-2 Statement report calculates W-2 box amounts from payroll entries and produces the W-2 output.

**To run the report:**

1. Open the **Employee Card** for the employee.
2. Choose the **W-2 Statement** action.
3. The **Employee W-2 Statement** report runs and generates the W-2 form.

The report produces four copies per employee:

| Copy | Purpose |
|------|---------|
| Copy 1 | State, City, or Local Tax Department |
| Copy B | Employee's federal tax return filing |
| Copy C | Employee's records |
| Copy 2 | Employee's state, city, or local tax return filing |

### How W-2 amounts are calculated

The W-2 Calculation codeunit aggregates payroll entry amounts by pay type. Each pay type's W-2 Box assignment determines which W-2 box receives the amount. The calculation:

1. Reads all payroll entries for the employee and tax year.
2. Groups amounts by the pay type's W-2 Box mapping.
3. Populates the corresponding W-2 boxes with the totals.

## Before generating W-2s

Before running the Employee W-2 Statement, verify the following:

1. **All payroll runs for the year are posted** — unposted payroll runs are not included in the calculation.
2. **Pay types have correct W-2 Box assignments** — review each pay type's Tax Statement group.
3. **Employee information is current** — name, address, and Social Security number must be accurate.
4. **Employee W-2 fields are set** — verify Box 13 and Box 14 fields through the W-2 Information action.
5. **Review amounts** — compare the W-2 output against payroll register totals.

## Troubleshooting

### W-2 box shows an unexpected amount

- Review the pay types mapped to that W-2 box and verify the mapping is correct.
- Check for payroll adjustments or reversals that may have affected the totals.
- Confirm all payroll runs for the year are posted.

### A pay type's amount doesn't appear on the W-2

- Open the Pay Type card and verify a W-2 Box is assigned in the Tax Statement group.
- If the box requires a W-2 Box Code (Box 12, Box 14), confirm the code is set.

### State boxes are empty

- Verify that state income tax pay types have W-2 Box assignments for boxes 15–20.
- Confirm the employee has state withholding records in the Withholding Information page.

## Next steps

- [Set up income tax withholding](income-tax-setup.md) — employee W-4 and filing information
- [Set up tax calculations](tax-calculation-setup.md) — jurisdiction and rate configuration
- [Payroll processing](payroll-runs-process.md) — payroll run workflow
