---
title: About tax calculations
description: Learn how OnePayroll calculates federal, state, and local income taxes using the Income Tax Jurisdiction and Employee Withholding system.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: overview
ms.date: 02/23/2026
---

# About tax calculations

OnePayroll calculates income tax withholding at federal, state, and local levels using a jurisdiction-based architecture. Each jurisdiction defines its own calculation method, and employee withholding records are automatically maintained based on the employee's location.

## How income tax calculation works

Income tax calculation in OnePayroll is built on three components:

1. **Income Tax Jurisdictions** define the tax rules (calculation method, tax rates, rounding)
2. **Employee Withholding** records store each employee's W-4 information per jurisdiction
3. **Tax Calculation Methods** implement the actual withholding formulas

During payroll processing, OnePayroll iterates each employee's active withholding records, dispatches to the jurisdiction's configured calculator, and produces tax withholding entries that flow into the payroll results.

## Income Tax Jurisdictions

Jurisdictions represent taxing authorities at three levels:

| Level | Description | Example |
|-------|-------------|---------|
| **National** | Federal tax | US (W-4) |
| **Regional** | State tax | CA (DE-4), ND |
| **Local** | City or county tax | (Varies by jurisdiction) |

Each jurisdiction stores:

- **Calculation Method** — which calculator to use (None, Standard, or Simplified)
- **Pay Type No.** — the pay type used for withholding entries
- **Rounding Method** — how to round calculated amounts
- **Report-to Jurisdiction** — parent jurisdiction (states report to federal)
- **Withholding Definition** — controls which W-4 fields appear and how values propagate

Regional jurisdictions can use their own state-specific forms (for example, California uses DE-4) or inherit withholding values from the federal jurisdiction.

## Calculation methods

### Standard

The Standard method performs a detailed W-4-style calculation:

1. Annualizes the employee's gross wages for the pay period
2. Applies Other Income and Deductions adjustments from the W-4
3. Subtracts the Standard Deduction (configured per jurisdiction/profile)
4. Looks up the applicable tax bracket and calculates bracket-based tax
5. Applies Withholding Credits
6. Reduces by Per-Allowance amounts (for jurisdictions that support allowances)
7. Adds any Additional Withholding amount
8. Converts back to the per-period amount

### Simplified

The Simplified method performs a streamlined bracket lookup:

1. Annualizes the employee's gross wages
2. Looks up the tax bracket
3. Calculates bracket-based tax
4. Converts back to the per-period amount

This method is for jurisdictions that inherit all withholding inputs from a parent jurisdiction and use simplified rate tables.

### None

No tax calculation is performed. This is the default for jurisdictions that don't have income tax withholding.

## Employee Withholding

Each employee has withholding records that are **automatically created** when the employee's address or work location changes. OnePayroll determines applicable jurisdictions based on:

- **Federal** — based on the employee's country/region code
- **Work state** — based on the employee's work location
- **Home state** — based on the employee's state/county (only if different from the work state)

Withholding records store the employee's tax filing information per jurisdiction, including filing status, allowances, withholding credits, and additional withholding amounts.

For more information, see [Set up income tax withholding](income-tax-setup.md).

## Income Tax Profiles

Income Tax Profiles use the Rules engine to match tax rate tables to employee withholding records based on attributes like filing status. When an employee's withholding record is created or modified, OnePayroll automatically resolves the correct profile, which determines which Standard Deduction, Per-Allowance Amount, and tax rate brackets apply.

## W-2 box mapping

Each pay type can be mapped to a W-2 box through the **W-2 Box** and **W-2 Box Code** fields. This mapping controls how earnings, deductions, and taxes appear on the Employee W-2 Statement. For the full list of supported W-2 boxes, see [Tax statements and reporting](tax-statements.md).

## Next steps

- [Set up tax calculations](tax-calculation-setup.md) — configure jurisdictions, calculation methods, and tax rates
- [Set up income tax withholding](income-tax-setup.md) — employee W-4 and withholding information
- [Tax statements and reporting](tax-statements.md) — W-2 preparation and reporting
