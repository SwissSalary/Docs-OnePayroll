---
title: Set up pay cycles
description: Learn how to create pay cycles, define schedule lines, and configure pay groups in OnePayroll.
author: zeande
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Set up pay cycles

This article explains how to create pay cycles with schedule lines and set up pay groups to organize employees by payroll frequency.

## Prerequisites

Before setting up pay cycles, make sure you have:

- [Pay units](pay-units-conversions.md) configured for the units of measurement you plan to use (for example, hourly, annual).
- A [general journal template and batch](gl-posting-setup.md) ready for payroll posting.

## Create a pay cycle

1. Search for **Pay Cycles** and open the page.
2. Enter a **Code** and **Description** for the pay cycle (for example, `BIWEEKLY` and "Biweekly Pay Cycle").
3. Set **Periods per Year** to the number of pay periods. Common values: 52 (weekly), 26 (biweekly), 24 (semi-monthly), 12 (monthly).
4. Optionally, set the **Pay Unit** to associate a unit of measurement with this cycle.

### Add schedule lines

After creating the pay cycle, add one or more schedule lines in the **Schedule Lines** part at the bottom of the page. Schedule lines use date formulas to define when periods start, end, and when payment occurs.

For each schedule line, fill in:

| Field | Value example | Description |
|---|---|---|
| **Period Start** | `-CW` | Date formula for the start of the pay period. `-CW` means "beginning of current week." |
| **Period End** | `CW` | Date formula for the end of the pay period. `CW` means "end of current week." |
| **Payment Date** | `CW` | Date formula for the payment date. If left blank, defaults to the Period End formula. |

### Date formula examples

| Scenario | Period Start | Period End | Payment Date |
|---|---|---|---|
| **Weekly** (Mon-Sun, paid same week) | `-CW` | `CW` | `CW` |
| **Monthly** (1st-last, paid on last day) | `-CM` | `CM` | `CM` |
| **Monthly** (1st-last, paid 5 days later) | `-CM` | `CM` | `CM+5D` |
| **Semi-monthly 1st half** (1st-15th) | `-CM` | `-CM+14D` | `-CM+14D` |
| **Semi-monthly 2nd half** (16th-last) | `-CM+15D` | `CM` | `CM` |

> [!TIP]
> For semi-monthly pay cycles, you typically create two schedule lines: one for the first half of the month and one for the second half. OnePayroll selects the appropriate schedule line based on the reference date.

## Create a pay group

Pay groups link employees to a pay cycle and specify the GL posting configuration.

1. Search for **Pay Groups** and open the page.
2. Enter a **Code** and **Description** (for example, `BIWK` and "Biweekly Employees").
3. Set **Pay Cycle** to the pay cycle you created.
4. Optionally, set **Pay Group Owner** to the employee responsible for this group.
5. Set **Gen. Journal Template** and **Gen. Journal Batch** to the journal where payroll entries are posted.

## Assign employees to pay groups

1. Open the **Employee Card** for the employee.
2. Set the **Pay Group** field to the appropriate pay group.

The pay group determines the employee's payroll frequency and which journal is used for posting.

## View upcoming pay periods

The **Pay Group Details** FactBox on the pay group page shows the current period dates. You can also view upcoming pay periods by selecting the related action on the pay group page.

## Best practices

- Create one pay cycle per frequency (weekly, biweekly, monthly) and reuse it across multiple pay groups if needed.
- Always test schedule line date formulas by reviewing the calculated period dates before processing payroll.
- Configure the **Gen. Journal Template** and **Gen. Journal Batch** on each pay group to control where payroll entries are posted.
- Keep schedule lines simple. Most payroll frequencies need only one or two schedule lines.

## Related information

- [About pay cycles](pay-cycles-overview.md)
- [Set up GL posting for payroll](gl-posting-setup.md)
- [Employee setup](employee-setup.md)
- [Payroll journal entries](payroll-journal.md)

[!INCLUDE[footer-banner](../includes/footer-banner.md)]
