---
title: Set up tax calculations
description: Learn how to configure Income Tax Jurisdictions, calculation methods, and tax rates in OnePayroll.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 02/23/2026
---

# Set up tax calculations

Configure Income Tax Jurisdictions to define how OnePayroll calculates federal, state, and local income tax withholding.

## Set up Income Tax Jurisdictions

Income Tax Jurisdictions define the taxing authorities and their calculation rules. Each jurisdiction has a level (National, Regional, or Local), a calculation method, and a linked pay type for posting withholding entries.

**To create or edit jurisdictions:**

1. Search for **Income Tax Jurisdictions** to open the list page.
2. Select a jurisdiction or choose **New** to create one.
3. On the **General** group, fill in:
   - **Code** — identifier for the jurisdiction (for example, `US` for federal, `CA` for California)
   - **Description** — display name
   - **Level** — National, Regional, or Local
   - **Report-to Jurisdiction** — the parent jurisdiction (for example, states report to the federal jurisdiction)
   - **Withholding Definition** — controls which W-4 fields appear and how values propagate (US)
   - **Form Name** — the tax form used (for example, `W-4` for federal, `DE-4` for California) (US)
4. On the **Calculation** group, fill in:
   - **Calculation Method** — Standard, Simplified, or None
   - **Pay Type No.** — the pay type used to create withholding entries
   - **Rounding Method** — how to round calculated amounts
5. Close the page.

### Calculation methods

| Method | Description | Typical use |
|--------|-------------|-------------|
| **Standard** | Full W-4 calculation with annualization, deductions, bracket tax, credits, and allowances | Federal (W-4), states with their own forms |
| **Simplified** | Bracket-based lookup using annualized wages | States that inherit from federal and use simple rate tables |
| **None** | No tax calculation | Jurisdictions without income tax |

### Withholding definitions (US)

The **Withholding Definition** field controls which W-4 fields the employee sees and whether values propagate from a parent jurisdiction:

| Definition | Behavior |
|------------|----------|
| **Standard form** | Employee fills in all applicable fields (Filing Status, Credits, Deductions, etc.) independently |
| **Standard form with inherited filing status** | Same as Standard form, but Filing Status is inherited from the parent (federal) jurisdiction |
| **Inherited from parent** | All withholding values are inherited from the parent jurisdiction; employee doesn't enter separate state W-4 data |

### Example jurisdiction setup

A typical US configuration includes:

| Code | Level | Calculation Method | Withholding Definition | Form |
|------|-------|--------------------|------------------------|------|
| US | National | Standard | Standard form | W-4 |
| CA | Regional | Standard | Standard form | DE-4 |
| ND | Regional | Simplified | Inherited from parent | — |

## Set up Income Tax Rates

Tax rate brackets determine how withholding amounts are calculated for each jurisdiction and filing profile.

**To configure tax rates:**

1. Search for **Income Tax Rates** to open the list page.
2. Create entries with:
   - **Tax Year** — the calendar year
   - **Jurisdiction ID** — the jurisdiction these rates apply to
   - **Income Tax Profile** — the filing profile (matches employee filing status)
   - **Income From** — the lower bound of the bracket
   - **Tax Rate** — the marginal rate for income in this bracket
   - **Base Tax Amount** — the cumulative tax from lower brackets
3. Close the page.

Rates are typically configured per tax year, per jurisdiction, and per Income Tax Profile. The Standard and Simplified calculators both use these rate tables.

## Set up Income Tax Setup

Income Tax Setup stores supplementary calculation parameters per jurisdiction and filing profile.

**To configure:**

1. Search for **Income Tax Setup** to open the list page.
2. Create entries with:
   - **Tax Year** — the calendar year
   - **Jurisdiction ID** — the jurisdiction
   - **Income Tax Profile** — the filing profile
   - **Standard Deduction** — the annual standard deduction amount
   - **Per-Allowance Amount** — the reduction per allowance claimed
3. Close the page.

The Standard calculator uses these values during the calculation sequence (gross → subtract Standard Deduction → bracket tax → subtract credits → subtract per-allowance reductions → add additional withholding).

## Set up Pay Type W-2 mapping

Each pay type can be mapped to a W-2 box so that earnings, deductions, and taxes are correctly reported on the Employee W-2 Statement.

**To assign W-2 boxes:**

1. Open a **Pay Type** card.
2. In the **Tax Statement** group, set:
   - **W-2 Box** — the W-2 box this pay type maps to (for example, *1 - Wages Tips Other Compensation*, *2 - Federal Income Tax Withheld*)
   - **W-2 Box Code** — additional code for boxes that require one (Box 12 Codes and Box 14 Other)

For the full list of W-2 box options, see [Tax statements and reporting](tax-statements.md).

## Verify the setup

Before processing payroll with income tax withholding:

1. Confirm each jurisdiction has the correct **Calculation Method** and **Pay Type No.** assigned.
2. Verify that **Income Tax Rates** and **Income Tax Setup** entries exist for the current tax year and all applicable filing profiles.
3. Open an employee's **Withholding Information** to confirm that withholding records were created for the expected jurisdictions.
4. Process a sample payroll run to verify that the withholding amounts are reasonable.

## Troubleshooting

### No income tax calculated

- Verify the jurisdiction's **Calculation Method** is not set to **None**.
- Confirm the jurisdiction has a **Pay Type No.** assigned.
- Check that **Income Tax Rates** exist for the current tax year and the employee's resolved Income Tax Profile.
- Open the employee's **Withholding Information** and confirm the record is not marked as exempt.

### Withholding amount seems incorrect

- Review the employee's Filing Status, Withholding Credits, Other Income, and Deductions on the Withholding Information page.
- Confirm the correct **Standard Deduction** and **Per-Allowance Amount** are configured in Income Tax Setup.
- Verify that the correct tax brackets are entered in Income Tax Rates.

### State withholding not appearing

- Confirm the state jurisdiction exists with Calculation Method set to Standard or Simplified.
- Verify the employee's work location or home state is correctly assigned.
- One of these must differ from `None` for the jurisdiction to be assigned automatically.

## Next steps

- [Set up income tax withholding](income-tax-setup.md) — employee W-4 and filing information
- [Tax statements and reporting](tax-statements.md) — W-2 preparation
- [About tax calculations](tax-calculation-overview.md) — tax calculation concepts
