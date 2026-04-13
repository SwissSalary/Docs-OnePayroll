---
title: Pay types overview
description: Learn about pay types, how they're organized into categories, and how they control payroll calculations and GL posting in OnePayroll.
author: zeande
sws.service: onepayroll
sws.topic: overview
sws.date: 02/23/2026
---

# Pay types overview

Pay types are the building blocks of payroll. Each pay type represents a single component of compensation — an earning that increases pay, a deduction that decreases it, or a contribution that the employer owes.

## What is a pay type?

A pay type defines how a payroll line item behaves: which category it belongs to, which GL accounts it posts to, and how it interacts with benefits. Every payroll entry is associated with a pay type.

Examples of pay types include regular salary, overtime earnings, health insurance deductions, employer retirement contributions, and garnishment withholdings.

## Categories

Every pay type is assigned to one of five built-in categories. The category determines how the pay type participates in payroll calculations and which totals it contributes to.

| Category | Description |
|---|---|
| **Earnings** | Compensation paid to the employee. Contributes to gross pay and employee payables. Examples: regular pay, overtime, bonuses. |
| **Employee Deductions** | Amounts withheld from the employee's pay. Reduces employee payables. Examples: tax withholdings, benefit premiums, garnishments. |
| **Employer Contributions** | Amounts the employer pays on behalf of the employee. Contributes to employer payables but does not affect the employee's net pay. Examples: employer match for retirement, employer portion of FICA. |
| **Hypothetical** | Calculated values used for reference or as inputs to other calculations, but not actually paid. Does not affect gross or net pay. Examples: imputed income for benefit calculations, hypothetical gross for tax lookups. |
| **Heading** | Used for visual grouping on reports and pages. Does not participate in calculations. |

> [!NOTE]
> Categories are fixed in the system and cannot be modified or extended. Every pay type must belong to exactly one of these five categories.

## Pay type fields

Each pay type record includes the following fields:

| Field | Description |
|---|---|
| **No.** | A unique code (up to 10 characters) that identifies the pay type. |
| **Description** | A text description of the pay type (up to 100 characters). |
| **Category** | The category this pay type belongs to: Earnings, Employee Deductions, Hypothetical, Employer Contributions, or Heading. |
| **Pay Unit** | The pay unit associated with this pay type, which determines the unit of measurement for rates (for example, hourly, annual). |
| **Pay Factor** | A multiplier applied to the base rate. For example, set to 1.5 for overtime at time-and-a-half. |
| **Unit of Measure** | The unit of measure code for the pay type. |
| **Unit Conversion Factor** | The conversion factor from the pay unit, used to convert rates between different units. |
| **Account No.** | The GL account where this pay type's amounts are posted (debit side). |
| **Balance Account No.** | The balancing GL account for this pay type (credit side). |
| **Rounding Method** | The rounding method applied to calculated amounts. |
| **Benefit Type 1–10 Liable** | Ten boolean fields indicating whether this pay type is liable for each of up to ten benefit types. These fields control which benefits apply to earnings calculated with this pay type. |

## GL account mapping

Each pay type specifies an **Account No.** and a **Balance Account No.** for GL posting. When payroll is posted, OnePayroll creates general journal lines using these accounts:

- The **Account No.** receives the debit entry.
- The **Balance Account No.** receives the corresponding credit entry.

For example, a regular pay type might post a debit to a salary expense account and a credit to a payables account. Configuring these accounts correctly ensures that your payroll transactions are reflected accurately in the general ledger.

## Benefit liability

The ten **Benefit Type Liable** fields on the pay type control which benefits are calculated on the pay type's earnings. When a benefit type is marked as liable for a pay type, any earnings calculated with that pay type are included in the benefit's calculation base.

This mechanism allows you to configure which earnings are subject to specific benefits (for example, including regular pay in retirement matching but excluding bonus pay).

## Pay units and pay factors

The **Pay Unit** field links the pay type to a pay unit, which defines the unit of measurement (such as hourly or annual). The **Pay Factor** field is a multiplier applied to the rate. Together, these fields determine how amounts are calculated:

- A regular pay type might use a pay factor of 1.0.
- An overtime pay type might use a pay factor of 1.5 to calculate time-and-a-half.
- A double-time pay type might use a pay factor of 2.0.

## Planning your pay types

When setting up payroll:

1. **Identify all compensation components.** List every type of earning, deduction, and employer contribution your organization uses.
2. **Assign categories.** Determine whether each component is an earning, deduction, employer contribution, or hypothetical.
3. **Configure GL accounts.** Map each pay type to the appropriate GL accounts for accurate financial reporting.
4. **Set benefit liability.** Determine which pay types should be liable for each benefit type.
5. **Define pay units and factors.** Set the appropriate pay unit and factor for rate-based pay types.

## Related information

- [Set up pay types](pay-types-setup.md)
- [Pay cycles overview](pay-cycles-overview.md)
- [Pay unit conversions](pay-units-conversions.md)
- [Benefits overview](benefits-overview.md)
