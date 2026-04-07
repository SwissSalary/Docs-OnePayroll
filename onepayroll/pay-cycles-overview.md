---
title: About pay cycles
description: Learn how pay cycles and pay groups define when and how often employees are paid in OnePayroll.
author: zeande
sws.service: onepayroll
sws.topic: overview
sws.date: 02/23/2026
---

# About pay cycles

Pay cycles define the frequency and timing of payroll processing. They determine when each pay period starts and ends, and when employees receive payment. Pay groups link employees to a pay cycle and specify the journal configuration for GL posting.

## Pay cycles

A pay cycle defines the payroll frequency through the following fields:

| Field | Description |
|---|---|
| **Code** | A unique identifier for the pay cycle (up to 20 characters). |
| **Description** | A description of the pay cycle. |
| **Periods per Year** | The number of pay periods in a year (1-366). For example, 52 for weekly, 26 for biweekly, 24 for semi-monthly, or 12 for monthly. |
| **Pay Unit** | The pay unit associated with this cycle, which determines the unit of measurement for per-period rates. |

### Schedule lines

Each pay cycle has one or more **schedule lines** that define exactly when periods start, end, and when payment occurs. Schedule lines use **date formulas** rather than fixed dates, which makes them flexible across years.

Each schedule line contains:

| Field | Description |
|---|---|
| **Period Start** | A date formula that calculates when the pay period starts. For example, `-CW` for the start of the current week, or `-CM` for the start of the current month. |
| **Period End** | A date formula that calculates when the pay period ends. For example, `CW` for the end of the current week, or `CM` for the end of the current month. |
| **Payment Date** | A date formula that calculates when employees receive payment. For example, `CM+5D` for five days after the end of the month, or `CW` for the end of the current week. |

If the **Payment Date** is left blank when setting **Period End**, it defaults to the same as the Period End formula.

### Period calculations

Using the schedule lines, OnePayroll can:

- Calculate the start and end dates for any pay period given a reference date.
- Determine the payment date for a period.
- Count the number of periods within a date range.
- Identify the period number within the year for a given payment date.

## Pay groups

A pay group organizes employees who share the same payroll schedule and posting configuration. Each employee is assigned to one pay group.

| Field | Description |
|---|---|
| **Code** | A unique identifier for the pay group (up to 10 characters). |
| **Description** | A description of the pay group. |
| **Pay Cycle** | The pay cycle that determines this group's payroll frequency. |
| **Pay Group Owner** | The employee responsible for managing this pay group. |
| **Gen. Journal Template** | The general journal template used when posting payroll runs for this group. |
| **Gen. Journal Batch** | The general journal batch used when posting payroll runs for this group. |

### Assigning employees

Each employee is assigned to a pay group through the **Pay Group** field on the Employee Card. The pay group determines:

- How often the employee is paid (through the linked pay cycle).
- Which general journal template and batch are used when posting their payroll entries.

## Choosing a frequency

When deciding how many periods per year to use, consider:

- **Industry norms** &mdash; What's standard in your industry?
- **Employee expectations** &mdash; When do employees expect to be paid?
- **Administrative effort** &mdash; More frequent payroll means more processing runs.
- **Compliance** &mdash; Some jurisdictions require a minimum payment frequency.

Common configurations:

| Frequency | Periods per Year |
|---|---|
| Weekly | 52 |
| Biweekly | 26 |
| Semi-monthly | 24 |
| Monthly | 12 |

## Related information

- [Set up pay cycles](pay-cycles-setup.md)
- [Process payroll runs](payroll-runs-process.md)
- [Employee setup](employee-setup.md)
- [Payroll journal entries](payroll-journal.md)
