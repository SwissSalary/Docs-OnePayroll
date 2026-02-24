---
title: Reverse a paycheck
description: Learn how to reverse a posted paycheck and cancel a pending reversal in OnePayroll.
author: zeande
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Reverse a paycheck

If an error is discovered after a payroll run is posted, you can reverse individual employee paychecks. Reversal creates negative (offsetting) payroll entries that cancel the original amounts. This preserves the full audit trail while correcting the payroll.

## How paycheck reversal works

When you reverse a paycheck, OnePayroll:

1. Finds all payroll entries for the selected employee in the payroll run
2. Creates a copy of each entry with a **negative amount** (the original amount × -1)
3. Sets the status of the reversed entries to **Reversed**
4. Marks the employee's payroll header as reversed

The original entries remain in the system unchanged. The negative entries offset them, effectively zeroing out the employee's pay for that payroll run.

## Reverse a paycheck

### To reverse a posted paycheck

1. Search for **Payroll Runs**
2. Select the posted payroll run containing the paycheck to reverse
3. Select **Reverse Paycheck** from the actions
4. On the **Paycheck Reversal** request page, fill in the fields:
   - **Payroll No.** — pre-filled, non-editable
   - **Employee No.** — select the employee whose paycheck should be reversed
   - **Payment Date** — shows the original payment date (non-editable)
   - **Reversal Date** — defaults to today's date (non-editable)
   - **Reversal Reason** — enter the reason for the reversal (up to 100 characters)
5. Review the summary amounts:
   - **Gross Amount** — the total earnings being reversed
   - **Employer Refund** — the total of earnings and employer contributions being reversed
   - **Employee Debit** — the total of earnings and employee deductions being reversed
6. Select **OK** to process the reversal

> [!IMPORTANT]
> Paycheck reversal only reverses payroll entries. If the payroll run was posted to the General Ledger, the GL entries from the original posting are not automatically reversed. You must handle GL corrections separately (for example, by posting correcting journal entries).

## Cancel a reversal

If a reversal was created in error, you can cancel it within one day.

### To cancel a pending reversal

1. On the **Payroll Runs** page, select the payroll run
2. Select **Cancel Reversal**
3. A list of reversed payroll headers appears
4. Select the employee's header to cancel
5. Confirm the cancellation

Canceling a reversal deletes the negative reversal entries and resets the employee's payroll header status back to its original state.

> [!WARNING]
> The **Cancel Reversal** action is only available within one day of the reversal. After that period, you cannot cancel the reversal.

## After reversing a paycheck

After reversing a paycheck, you typically need to issue a corrected payment:

1. **Reverse** the incorrect paycheck (as described above)
2. **Correct** the underlying data — fix the employee's payables, pay types, tax setup, or other configuration
3. **Create a manual payment** to issue the corrected pay (see [Manual payments](manual-payments.md))

## Related information

- [Process payroll runs](payroll-runs-process.md)
- [Manual payments](manual-payments.md)
- [About payroll runs](payroll-runs-overview.md)
