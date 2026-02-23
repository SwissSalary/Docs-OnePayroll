---
title: About pay cycles
description: Learn how pay cycles define when and how often employees are paid, and how OnePayroll calculates payroll periods.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: overview
ms.date: 02/23/2026
---

# About pay cycles

Pay cycles define when employees are paid—the frequency and dates of payroll processing.

## What is a pay cycle?

A pay cycle specifies:
- **Frequency** - How often employees are paid (weekly, biweekly, semi-monthly, monthly)
- **Period dates** - When each payroll period starts and ends
- **Payment dates** - When payroll checks/deposits are issued

OnePayroll uses the pay cycle to automatically calculate payroll period dates and control payroll scheduling.

### Key concepts

**Pay Cycle**
The overall frequency definition (e.g., "Biweekly" = every two weeks)

**Pay Period**
A specific payroll period for that cycle (e.g., 1/1/2026-1/14/2026)

**Period Number**
The sequential period number within the year (Period 1 = first period of year, Period 2 = second, etc.)

**Payment Date**
When employees receive their payroll (might be different from period end date)

## Common pay frequencies

| Frequency | Periods/Year | Common Use | Example Period |
|-----------|------------|-----------|-----------------|
| **Weekly** | 52 | Hourly, retail, hospitality | Mon-Sun each week |
| **Biweekly** | 26 | Most common | Mon-Sun, two-week intervals |
| **Semi-Monthly** | 24 | Salary, professional | 1st-15th, 16th-last day |
| **Monthly** | 12 | Executive, finance | 1st-last day of month |

### Choosing a frequency

Consider:
- **Industry norms** - What's standard in your industry?
- **Employee expectations** - When do employees expect to be paid?
- **Administrative burden** - More frequent payroll = more processing
- **Compliance** - Some regions require minimum payment frequency
- **Business operations** - Align with billing cycles, cash flow patterns

## Pay groups

**Pay Groups** organize employees who share the same pay cycle. For example:

- Pay Group "Weekly" - All weekly-paid employees
- Pay Group "Biweekly" - All biweekly-paid employees
- Pay Group "Monthly" - All monthly-paid employees

Each employee is assigned to one pay group, which determines when they're paid.

### Why use pay groups?

Pay groups:
- Organize payroll processing by frequency (process weekly employees separately from monthly)
- Control GL posting rules (specify which accounts each group posts to)
- Enable parallel payroll processing (process multiple groups simultaneously)
- Simplify payroll scheduling

## Payroll period calculations

OnePayroll automatically calculates period dates based on your pay cycle setup.

### Period start and end dates

The pay cycle specifies rules for when periods start and end:

**Weekly**
- Periods are 7-day blocks (usually Mon-Sun)
- Example: 1/1/2026 (Wed) starts first partial week, then full weeks

**Biweekly**
- Periods are 14-day blocks
- Example: 1/1/2026 - 1/14/2026 (first period), 1/15/2026 - 1/28/2026 (second period)

**Semi-Monthly**
- Two periods per month (1st-15th, 16th-last day)
- Example: 1/1/2026 - 1/15/2026, 1/16/2026 - 1/31/2026

**Monthly**
- Periods align with calendar months
- Example: 1/1/2026 - 1/31/2026

### Period cutoff rules

You can customize when periods end. For example:

- "Pay period ends on Friday" - Even if your frequency is biweekly, always end on Friday
- "Pay period ends on 15th and last day" - For semi-monthly
- "Pay period ends last day of month" - For monthly

Period cutoff rules ensure consistency across years and handle month-end edge cases.

## Payment dates vs. period dates

**Period dates** = When the employee worked (1/1/2026-1/14/2026)

**Payment date** = When the employee is paid (1/20/2026)

The payment date might be different from the period end date for administrative reasons:
- Extra time for calculation and review
- Bank processing time for direct deposit
- Check printing
- Compliance with "regular pay schedule" laws

Typical payment schedule:
- Period ends: Friday 1/15
- Payment issued: Next Friday 1/22 (one week later)

## Period-to-period carry-forward

OnePayroll tracks what happens at period boundaries:

- **Hours worked** - Carryover to next period
- **Accrual balances** - YTD and current period totals
- **Benefits** - Effective through period, then recalculate
- **Changing pay groups** - Employee moves to different pay cycle mid-year

When an employee changes pay groups (e.g., hourly to salary), OnePayroll recalculates future periods using the new cycle.

## Special periods

Beyond regular payroll cycles, OnePayroll supports special periods for:

- **Off-cycle payroll** - Bonuses, severance (any date)
- **Year-end adjustment** - Final payroll of fiscal year
- **Partial period** - Employee hired mid-period (1st part of period only)
- **Catch-up payroll** - Correcting previous period error

## Next steps

Learn how to set up pay cycles:

- **[Set up pay cycles](pay-cycles-setup.md)** - Define frequencies and periods
- **[Process payroll runs](payroll-runs-process.md)** - Use pay cycles in payroll
- **[Employee setup](employee-setup.md)** - Assign employees to pay groups
