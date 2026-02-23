---
title: About payroll runs
description: Learn how payroll runs work, understand the payroll processing workflow, and the statuses that guide your payroll through calculation to posting.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: overview
ms.date: 02/23/2026
---

# About payroll runs

A payroll run is a processing batch that calculates and processes wages for a group of employees for a specific payroll period. Payroll runs are the core of the OnePayroll processing workflow.

## Payroll run overview

### What is a payroll run?

A payroll run represents the complete payroll processing cycle for:
- A specific **pay group** (group of employees paid on the same schedule)
- A specific **payroll period** (pay period start and end dates)
- A defined **payment date** (when employees will be paid)

When you create a payroll run, OnePayroll calculates gross pay, deductions, taxes, and net pay for all employees in that pay group for that period. You then review the results and post them to the general ledger.

### Key characteristics

Each payroll run includes:
- **Pay Group** - The group of employees to be paid (e.g., "Biweekly Employees")
- **Period Dates** - The period start and end dates defining which earnings/deductions to include
- **Payment Date** - When employees will receive their payment
- **Period Number** - The sequential period number for the year
- **Status** - The current state in the payroll processing workflow (Open → Approved → Posted)
- **Description** - Optional notes about the payroll run
- **Type** - Standard vs. Special (e.g., bonus, severance)

### Payroll run types

**Standard Payroll Run**
The regular periodic payroll for a pay group (e.g., "Biweekly employees for the period 2/1/2026 - 2/14/2026").

**Off-Cycle Payroll**
Special payroll runs outside the regular schedule for bonuses, severance, or corrections.

**Manual Payments**
Individual ad-hoc payments created outside of scheduled payroll runs.

## Payroll workflow and statuses

Payroll runs follow a defined workflow to ensure accuracy and control:

```
┌─────────┐      ┌──────────┐      ┌────────┐      ┌────────┐
│  Open   │─────▶│ Approved │─────▶│ Posted │      │ Void   │
└─────────┘      └──────────┘      └────────┘      └────────┘
   Draft           Calculated       To GL
```

### Status workflow

**Open (Draft)**
- Initial status when you create a payroll run
- You can edit most field values
- No calculations have been performed
- Use this status to set up the payroll run details

**Approved**
- Payroll has been calculated and is ready to post
- All calculations are complete and verified
- You can review payroll entries before posting
- Payroll is locked from further edits to ensure data integrity

**Posted**
- Payroll entries have been posted to the general ledger
- The payroll run is final and locked
- You cannot modify posted payroll runs
- Corrections require creating a reversal or adjustment payroll run

### Status transitions

| From | To | Action | Description |
|------|----|----|---|
| Open | Approved | **Calculate** | Run payroll calculations for all employees in the pay group |
| Approved | Open | **Revert** | Return to Open status to make corrections |
| Approved | Posted | **Post** | Post payroll entries to the general ledger |
| Posted | Open | **Void** | Reverse a posted payroll run (creates offsetting entries) |

## Payroll entries

When you calculate a payroll run, OnePayroll creates a **payroll entry** for each pay type on each employee. For example:

**Employee: John Smith, Period: 2/1/2026-2/14/2026**
- Payroll Entry: Regular Pay = $1,000
- Payroll Entry: Federal Income Tax = -$120
- Payroll Entry: FICA = -$76.50
- Payroll Entry: Health Insurance = -$150
- Payroll Entry: Net Pay = $653.50

Each payroll entry records:
- The **employee** and **pay type**
- The **amount** calculated
- The **source table** (where the calculation originated)
- The **GL account** for posting
- **Calculation details** (hours worked, rate, formula, etc.)

### Source table ID

Each payroll entry includes a **Source Table ID** field that tracks where the entry came from:
- **Pay Type table** - Regular earnings and deductions
- **Benefit table** - Benefit deductions
- **Garnishment table** - Wage garnishment deductions
- **Manual entry** - Manually created entries
- **Tax calculation** - Tax withholding amounts

This source tracking maintains an audit trail and enables you to understand and modify entries later.

## Previewing payroll

Before posting, you can review payroll entries in multiple ways:

**Payroll Run Details**
- View all payroll entries for the entire payroll run
- Filter by employee, pay type, or GL account
- See totals by account for GL posting validation

**Employee Details**
- View individual employee gross pay, deductions, and net pay
- See detailed breakdown by pay type
- Compare to previous periods

**Payroll Report**
- Generate formatted payroll summary reports
- Print or export for distribution to management

## Payroll history

After posting, payroll runs are archived in **Payroll History**. You can:
- View completed payroll runs
- Reprint payroll reports
- Review historical payroll data
- Maintain audit trail of all payroll processing

## Common payroll scenarios

### Regular periodic payroll
Create a payroll run for your standard pay group on your regular schedule. Calculate, review, and post each pay period. This is the primary use case.

### Bonus or off-cycle payroll
Create a special payroll run outside your regular schedule. Process bonuses, severance, retroactive pay adjustments, and other irregular payments.

### Payroll corrections
If an error is discovered after posting, create a reversal/adjustment payroll run to correct it. This maintains audit trail through offsetting entries.

### Year-end adjustments
Before year-end, create adjusting payroll runs for gross-up payments, vacation payout, or other annual adjustments.

### Multi-calendar payroll
If your company operates on multiple calendars (e.g., fiscal year vs. calendar year), OnePayroll supports processing on either calendar.

## Next steps

Learn how to work with payroll runs:

- **[Set up payroll runs](payroll-runs-setup.md)** - Configure GL accounts and payroll settings
- **[Process payroll runs](payroll-runs-process.md)** - Create, calculate, and post payroll
- **[About pay types](pay-types-overview.md)** - Define earnings and deductions
- **[About pay cycles](pay-cycles-overview.md)** - Set up pay frequencies and periods
