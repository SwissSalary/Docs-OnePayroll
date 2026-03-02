---
title: Configure payroll settings
description: Learn how to review and customize pay types, pay cycles, pay groups, employee types, and benefits after generating setup data.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 02/23/2026
---

# Configure payroll settings

After [generating setup data](setup-install.md), review and customize the pre-configured payroll settings to match your organization's needs.

## Configure GL accounts

OnePayroll needs properly configured general ledger accounts for:

- Payroll expenses (salary, wages, overtime)
- Tax liabilities (federal, state, local)
- Benefit deductions (insurance, retirement)
- Employee advance/loan accounts (if used)

Set up GL accounts following your company's chart of accounts structure. OnePayroll uses these accounts when posting payroll entries to the general ledger.

## Review and customize pay groups

The setup data creates three pay groups: ALL, HOURLY, and SALARY. Review these and adjust as needed.

**To review pay groups:**

1. Search for **Pay Groups**.
2. Open each pay group and verify:
   - **Pay Cycle** — the pay schedule for this group
   - **Pay Group Owner** — the employee responsible for this group
   - **Gen. Journal Template** and **Gen. Journal Batch** — for GL posting
3. Add, rename, or remove pay groups to match your organization.

For more information, see [Set up pay cycles](pay-cycles-setup.md).

## Review and customize pay types

The setup data creates approximately 95 core pay types (plus ~60 US-specific types) organized by category. Each pay type has a category from the Category enum: Earnings, Employee Deductions, Hypothetical, Employer Contributions, or Heading.

**To review pay types:**

1. Search for **Pay Types**.
2. Review the generated pay types and their categories.
3. Adjust descriptions, GL account assignments, and pay units as needed.
4. Add any organization-specific pay types.
5. Remove or deactivate pay types you don't need.

For more information, see [Set up pay types](pay-types-setup.md).

## Review and customize pay cycles

The setup data creates four pay cycles: Weekly (52 periods), Biweekly (26 periods), Semimonthly (24 periods), and Monthly (12 periods). Each includes schedule lines with date formulas that define pay period boundaries and payment dates.

**To review pay cycles:**

1. Search for **Pay Cycles**.
2. Open each pay cycle and verify:
   - **Periods per Year** — matches your pay frequency
   - **Pay Unit** — the unit of compensation for this cycle
   - **Schedule Lines** — date formulas for period start, period end, and payment date
3. Adjust schedule lines if your payment dates differ from the defaults.

For more information, see [Set up pay cycles](pay-cycles-setup.md).

## Review employee types

The setup data creates four employee types: Contractor, Hourly, Salary Exempt, and Salary Non-Exempt. Each type defines a pay unit and compensation method.

**To review employee types:**

1. Search for **Employee Types**.
2. Review each type's **Pay Unit** and **Compensation Method** (Regular or Work-Based).
3. Add, rename, or remove types to match your organization's employee classifications.

For more information, see [Employee types and pay units](pay-units-employee-types.md).

## Review benefits

With the US localization, the setup data creates pre-configured benefits including Social Security, Medicare, FUTA, SUTA (with limits for all 50 states), 401(k), HSA, and garnishment benefits. Review these and add any additional benefits your organization offers.

**To review benefits:**

1. Search for **Benefit Types**.
2. Review the generated benefit types and their calculation settings.
3. Verify rates and limits are current for the tax year.
4. Add any additional benefits your organization offers (additional health insurance, dental, vision, etc.).

For more information, see [Set up benefits](benefits-setup.md).

## Configure tax settings (US localization)

The setup data creates income tax jurisdictions for Federal, California, and North Dakota. You need to add jurisdictions for any additional states where your employees work.

**To configure tax:**

1. Search for **Income Tax Jurisdictions**.
2. Review the existing jurisdictions and add any additional states.
3. Configure the **Calculation Method** (Standard or Simplified) for each jurisdiction.
4. Set up **Income Tax Rates** and **Income Tax Setup** for each tax year.

> [!NOTE]
> Tax configuration is part of the US country-specific extension. Other localizations may have different tax setup requirements.

For more information, see [Set up tax calculations](tax-calculation-setup.md).

## What's next

Once payroll settings are configured, set up your employees and process your first payroll:

- [Set up employees and process your first payroll](setup-first-payroll.md)

## See also

- [Getting started with OnePayroll](getting-started.md)
- [Set up pay types](pay-types-setup.md)
- [Set up pay cycles](pay-cycles-setup.md)
- [Set up benefits](benefits-setup.md)

[!INCLUDE[footer-banner](../includes/footer-banner.md)]
