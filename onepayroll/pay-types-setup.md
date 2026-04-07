---
title: Set up pay types
description: Learn how to create and configure pay types in OnePayroll, including setting categories, GL accounts, pay factors, and benefit liability.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 02/23/2026
---

# Set up pay types

Pay types define the individual components of an employee's compensation. This article explains how to create and configure pay types in OnePayroll.

> [!TIP]
> If you generated setup data from the Contoso Coffee Payroll Demo Dataset (see [Getting started](getting-started.md)), approximately 95 core pay types are already configured, including common earnings, taxes, deductions, and employer contributions. With the US localization, approximately 60 additional US-specific pay types are included. Review and customize the existing pay types rather than creating them from scratch.

## Prerequisites

Before creating pay types, make sure you have:

- GL accounts set up in your chart of accounts for payroll postings (expense accounts for earnings, liability accounts for deductions and contributions).
- [Pay units](pay-units-conversions.md) configured if you use rate-based pay types.
- An understanding of which [categories](pay-types-overview.md) each pay type belongs to.

## Create a pay type

1. Choose the ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Pay Types**, and then choose the related link.
2. Choose the **New** action to create a new pay type.
3. Fill in the following fields:

| Field | Description |
|---|---|
| **No.** | Enter a unique code (up to 10 characters) for the pay type, such as `REG` for regular pay or `OT15` for overtime at 1.5x. |
| **Description** | Enter a clear description, such as "Regular Pay" or "Overtime 1.5x". |
| **Category** | Select the category: **Earnings**, **Employee Deductions**, **Employer Contributions**, **Hypothetical**, or **Heading**. The category determines how this pay type participates in payroll calculations. |

4. Configure the GL accounts:

| Field | Description |
|---|---|
| **Account No.** | The GL account where the pay type amount is posted (debit). For example, a salary expense account for earnings or a tax payable account for deductions. |
| **Balance Account No.** | The balancing GL account (credit). For example, an employee payables account for earnings or a cash account for deductions. |

5. If the pay type is rate-based, configure the pay unit and factor:

| Field | Description |
|---|---|
| **Pay Unit** | Select the pay unit that determines the unit of measurement for rates (for example, hourly, annual). |
| **Pay Factor** | Enter the multiplier applied to the base rate. Use `1` for standard rates, `1.5` for time-and-a-half, `2` for double-time, and so on. |
| **Unit of Measure** | Select the unit of measure code. |
| **Rounding Method** | Select a rounding method if the calculated amount should be rounded. |

6. Configure benefit liability (see [Benefit liability fields](#benefit-liability-fields) below).

## Benefit liability fields

Each pay type has ten boolean fields labeled **Benefit Type 1 Liable** through **Benefit Type 10 Liable**. These fields determine which benefit types include this pay type's earnings in their calculation base.

For example, if Benefit Type 1 represents health insurance and you want health insurance to be calculated on regular pay, turn on **Benefit Type 1 Liable** on the regular pay type. If you don't want health insurance calculated on bonus pay, leave Benefit Type 1 Liable turned off for the bonus pay type.

## Example pay types

### Earnings

| No. | Description | Category | Pay Factor | Account No. |
|---|---|---|---|---|
| `REG` | Regular Pay | Earnings | 1.0 | Salary Expense |
| `OT15` | Overtime 1.5x | Earnings | 1.5 | Overtime Expense |
| `OT20` | Double Time | Earnings | 2.0 | Overtime Expense |
| `BONUS` | Bonus | Earnings | 1.0 | Bonus Expense |

### Employee deductions

| No. | Description | Category | Account No. |
|---|---|---|---|
| `FIT` | Federal Income Tax | Employee Deductions | Federal Tax Payable |
| `SIT` | State Income Tax | Employee Deductions | State Tax Payable |
| `HLTH` | Health Insurance | Employee Deductions | Benefits Payable |
| `401K` | 401(k) Contribution | Employee Deductions | Retirement Payable |

### Employer contributions

| No. | Description | Category | Account No. |
|---|---|---|---|
| `ERMCH` | Employer 401(k) Match | Employer Contributions | Retirement Expense |
| `ERHLTH` | Employer Health Insurance | Employer Contributions | Benefits Expense |

### Hypothetical

| No. | Description | Category |
|---|---|---|
| `HTGRS` | Hypothetical Gross | Hypothetical |

Hypothetical pay types are calculated but don't affect actual pay. They're used as inputs for other calculations, such as benefit rate lookups.

## Modify a pay type

1. Choose the ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Pay Types**, and then choose the related link.
2. Select the pay type to edit.
3. Update the fields as needed.

> [!IMPORTANT]
> Changing a pay type's **Category** or **GL accounts** after payroll has been processed may affect historical reporting. Make changes with care and consider the impact on previously posted entries.

## Best practices

- **Use clear codes.** Choose meaningful pay type codes (like `REG`, `OT15`, `BONUS`) rather than generic numbers.
- **Use descriptive names.** Write full descriptions so that all users understand each pay type's purpose.
- **Map GL accounts carefully.** Verify that each pay type posts to the correct expense or liability account before processing payroll.
- **Set benefit liability intentionally.** Review which pay types should be included in each benefit type's calculation base.
- **Use pay factors for rate variations.** Rather than creating separate rate calculations, use the pay factor to handle overtime multiples (1.5x, 2.0x).

## Related information

- [About pay types](pay-types-overview.md)
- [Set up GL posting for payroll](gl-posting-setup.md)
- [Pay unit conversions](pay-units-conversions.md)
- [About benefits](benefits-overview.md)
