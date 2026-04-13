---
title: Payroll runs overview
description: Learn how payroll runs work, understand the payroll processing workflow, and the statuses that guide your payroll through calculation to posting.
author: zeande
sws.service: onepayroll
sws.topic: overview
sws.date: 02/23/2026
---

# Payroll runs overview

A payroll run is a processing batch that calculates and processes wages for a group of employees for a specific payroll period. Payroll runs are the core of the OnePayroll processing workflow.

## Payroll run overview

### What is a payroll run?

A payroll run represents the complete payroll processing cycle for:

- A specific **pay group** (group of employees paid on the same schedule)
- A specific **payroll period** (pay period start and end dates)
- A defined **payment date** (when employees are paid)

When you create a payroll run, OnePayroll automatically calculates gross pay, deductions, taxes, and net pay for all employees in that pay group for that period. Creation and calculation happen in a single step — there is no separate "calculate" action.

### Key characteristics

Each payroll run includes:

- **Pay Group** — the group of employees to be paid (for example, "Biweekly Employees")
- **Period Dates** — the period start and end dates defining which earnings and deductions to include
- **Payment Date** — when employees receive their payment
- **Period Number** — the sequential period number for the year
- **Status** — the current state in the payroll processing workflow
- **Type** — Standard or Manual

> [!NOTE]
> Only one Open payroll run can exist per pay group at a time. You must cancel or post the existing run before creating a new one for the same pay group.

### Payroll run types

**Standard**
The regular periodic payroll for a pay group (for example, "Biweekly employees for the period 2/1/2026 - 2/14/2026"). Also used for off-cycle payroll runs such as bonuses, severance, or corrections.

**Manual**
Individual ad-hoc payments created outside of scheduled payroll runs.

## Payroll workflow and statuses

Payroll runs follow a defined workflow. The exact status transitions depend on whether approvals are required in **Payroll Setup**.

### Without approvals (default)

```
┌────────┐             ┌────────┐
│  Open  │────Post────▶│ Posted │
└────────┘             └────────┘
    │
    Cancel
    (deletes)
```

When **Require Approvals** is turned off in Payroll Setup, the **Post** and **Pay** actions are available directly from the Open status. There is no intermediate approval step.

### With approvals

```
┌────────┐            ┌──────────┐             ┌────────┐
│  Open  │──Approve──▶│ Approved │────Post────▶│ Posted │
└────────┘            └──────────┘             └────────┘
    │                      │
    Cancel                 Cancel
    (deletes)              (deletes)
```

When **Require Approvals** is turned on, the **Approve** action appears on Open payroll runs, and **Post** and **Pay** become available only after approval. Approval limits can be configured per user on the **Approval User Setup** page.

### Status descriptions

**Open**

- Initial status when you create a payroll run
- Calculation is already complete — payroll entries exist and can be reviewed
- The payroll run **cannot be edited** directly: the Payroll Runs page is read-only
- If corrections are needed, **Cancel** the run (which deletes it), make your adjustments to employee or payment data, and then create a new payroll run

**Approved**

- Only used when **Require Approvals** is turned on in Payroll Setup
- Indicates the payroll has been reviewed and approved for posting
- You can still **Cancel** an approved payroll run (this deletes it)

**Posted**

- The payroll run is final and cannot be modified or cancelled
- If the **General Ledger Posting** setting in Payroll Setup is configured to transfer entries, General Journal Lines are created and optionally posted during this step
- Corrections to a posted payroll run require creating a reversal

### Status transitions

**Without approvals:**

| From | To | Action | Description |
|------|----|--------|-------------|
| Open | Posted | **Post** | Marks the payroll as final; optionally transfers entries to the General Journal |
| Open | *(deleted)* | **Cancel** | Permanently deletes the payroll run and all its entries |

**With approvals:**

| From | To | Action | Description |
|------|----|--------|-------------|
| Open | Approved | **Approve** | Marks the payroll as reviewed and ready to post |
| Approved | Posted | **Post** | Marks the payroll as final; optionally transfers entries to the General Journal |
| Open or Approved | *(deleted)* | **Cancel** | Permanently deletes the payroll run and all its entries |

### General ledger posting

Whether the **Post** action creates General Journal Lines depends on the **General Ledger Posting** setting in **Payroll Setup**:

| Setting | Transfers to General Journal? | Automatically posts? |
|---------|-------------------------------|----------------------|
| **No Transfer** | No | No |
| **Manual Posting** | Yes | No — you must post the General Journal manually |
| **Automatic Posting** | Yes | Yes — posted automatically without confirmation |
| **Always Ask** | Yes | Yes — with a confirmation dialog |

With **No Transfer**, posting only changes the payroll run status to Posted without creating any General Journal Lines.

## Payroll entries

When you create a payroll run, OnePayroll creates a **payroll entry** for each pay type on each employee. For example:

**Employee: John Smith, Period: 2/1/2026 – 2/14/2026**

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
- Calculation details (hours worked, rate, formula)

### Source table ID

Each payroll entry includes a **Source Table ID** field that tracks where the entry came from:

- **Pay Type table** — regular earnings and deductions
- **Benefit table** — benefit deductions
- **Garnishment table** — wage garnishment deductions
- **Tax calculation** — tax withholding amounts

This source tracking maintains an audit trail and enables you to trace each entry back to its origin.

## Reviewing payroll entries

Before posting, you can review the calculated payroll entries:

**Payroll Entries**
View all payroll entries for the entire payroll run from the **Payroll Entries** action on the Payroll Runs page. Filter by employee, pay type, or GL account.

**Payment Entries**
View payment entries that show how net pay is distributed across Employee Payment Methods.

**Paycheck**
Preview individual employee paychecks showing gross pay, deductions, and net pay from the **Paycheck** action on the Payroll Runs page.

## Preview Payroll (without creating a run)

The **Preview Paycheck** and **Preview Payroll Entries** actions on the **Employee Card** and **Employee List** let you simulate a payroll calculation for selected employees without creating a real payroll run. This feature:

- Runs a full calculation using the same engine as a real payroll
- Shows the resulting paycheck or payroll entries
- **Rolls back all changes** — no payroll run or entries are persisted
- Works even when an Open payroll run already exists for the pay group

Use this to verify employee setup, pay types, or tax configurations before running a real payroll.

## Payroll history

After posting, payroll runs remain on the **Payroll Runs** page with Posted status. You can:

- View completed payroll runs and their entries
- Reprint paychecks
- Review historical payroll data
- Save paychecks to employee dossiers

## Common payroll scenarios

### Regular periodic payroll

Create a payroll run for your standard pay group on your regular schedule. Review entries, post, and process payments. This is the primary use case.

### Bonus or off-cycle payroll

Create a standard payroll run outside your regular schedule for bonuses, severance, retroactive pay adjustments, or other irregular payments.

### Payroll corrections

If an error is discovered after posting, use the **Reverse Paycheck** action to reverse individual employee paychecks. If you discover an error before posting, **Cancel** the payroll run, correct the underlying data, and create a new run.

## Next steps

- [Configure payroll settings](payroll-setup.md) — set up GL posting and approval options
- [Process payroll runs](payroll-runs-process.md) — create, review, and post payroll
- [About pay types](pay-types-overview.md) — define earnings and deductions
- [About pay cycles](pay-cycles-overview.md) — set up pay frequencies and periods
