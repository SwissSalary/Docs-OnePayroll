---
title: Employee payables
description: Learn how employee payables define compensation in OnePayroll, including pay rates, employment percentage, and department allocation.
author: zeande
sws.service: onepayroll
sws.topic: concept
sws.date: 02/23/2026
---

# Employee payables

Employee payables define an employee's compensation — what they are paid and how much. Each payable links an employee to an earnings pay type with a specific amount, and optionally assigns the compensation to a department and job title. Payables are the primary input for payroll calculation.

## What is a payable?

A payable is a record that connects:

- An **employee** to a **pay type** (for example, Regular Pay, Hourly Wages)
- A specific **amount** that represents the compensation rate
- An optional **employment percentage** for part-time employees
- An optional **department** and **job title** for cost allocation

When you create a payroll run, OnePayroll reads each employee's payables to determine what earnings to calculate and at what rate.

### Payable fields

| Field | Description |
|-------|-------------|
| **Employee No.** | The employee this payable belongs to |
| **Pay Type No.** | The earnings pay type (only pay types with the Earnings category can be selected) |
| **Amount** | The compensation amount, expressed in the employee's pay unit (for example, annual salary, hourly rate) |
| **Employment Percentage** | A percentage from 0 to 100 for part-time employees (default: 100). Only editable for Regular compensation method. |
| **Department** | The department to allocate the cost to |
| **Job Title** | The job title associated with this compensation |

### How pay rate is calculated

The **Amount** on a payable is expressed in the employee's configured pay unit (for example, yearly, monthly, hourly). During payroll calculation, OnePayroll converts this amount to the appropriate rate for the pay period using the pay unit's conversion factor.

For example, if an employee has:
- Pay Unit: Yearly
- Amount: $52,000
- Pay Cycle: Biweekly (26 periods per year)

The per-period rate is calculated as: $52,000 ÷ 260 working days × 10 working days per biweekly period = $2,000 per pay period.

## View and manage payables

### On the Employee Card

The Employee Card shows payables in the **Job & Compensation** section. If the employee has a single payable, it appears inline as a part. If the employee has multiple payables, a list part shows all payable lines.

### On the Payables page

For a detailed view:

1. Open the **Employee Card**
2. Select **View Payables** from the actions, or select the payable part
3. The **Payables** page opens showing all payable lines for the employee

From this page, you can also manage dimensions for each payable (see [Employee dimensions](employee-dimensions.md)).

## Multiple payables

An employee can have multiple payable lines. This is useful when:

- An employee works in **multiple departments** and their compensation should be split across them
- An employee has **multiple compensation types** (for example, a base salary plus a separate stipend)
- An employee holds **multiple job titles** with different pay rates

Each payable line is calculated independently during payroll and generates its own payroll entries.

## Payable dimensions

Each payable can have its own set of dimensions, which flow through to payroll entries and GL postings. This allows you to track payroll costs by cost center, project, or other dimension values.

To manage dimensions for a payable:

1. Open the **Payables** page
2. Select the payable line
3. Choose **Dimensions** from the actions
4. Add or modify dimension values

See [Employee dimensions](employee-dimensions.md) for details on how dimensions work with payroll.

## Related information

- [Set up employees](employee-setup.md)
- [About pay types](pay-types-overview.md)
- [Employee pay units](employee-pay-units.md)
- [Employee dimensions](employee-dimensions.md)
- [Departments and work locations](departments-work-locations.md)
