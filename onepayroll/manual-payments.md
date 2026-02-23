---
title: Manual payments
description: Learn how to create individual ad-hoc payments outside of scheduled payroll runs using the Manual Payment Journal in OnePayroll.
author: zeande
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Manual payments

Manual payments let you create individual ad-hoc payroll entries outside of your scheduled payroll runs. Use manual payments when you need to process a one-time payment for a specific employee — for example, a bonus, a final paycheck, or a correction — without running a full payroll for the entire pay group.

## How manual payments work

Manual payments use the **Manual Payment Journal** page, which provides a worksheet where you enter pay type lines for a specific employee. When you run the journal, OnePayroll creates a payroll run with the type **Manual** and calculates the entries using the same payroll engine as a standard payroll run.

Key differences from standard payroll runs:

- You enter specific pay type lines manually rather than having all employee payables calculated automatically
- Manual payments bypass the check that prevents creating a new payroll run when an Open run already exists for the pay group
- The resulting payroll run has the type **Manual** instead of **Standard**
- You can initiate a manual payment directly from the **Employee Card**

## Create a manual payment

### To create a manual payment from Employee Card

1. Open the **Employee Card** for the employee
2. Select **Manual Payments** from the actions
3. The **Manual Payment Journal** opens, filtered for that employee with the journal batch pre-configured for the employee's pay group

### To create a manual payment from the journal

1. Search for **Manual Payment Journal**
2. Select or create a journal batch for the appropriate pay group
3. Enter the fields for each line:
   - **Employee No.** — the employee to pay
   - **Pay Type** — the pay type (for example, Bonus, Regular Pay)
   - **Description** — description of the payment
   - **Quantity** — hours or units, if applicable
   - **Rate** — the pay rate
   - **Line Amount** — the total amount for the line (calculated from Quantity × Rate, or entered directly)
4. Add additional lines as needed for other pay types or deductions
5. Select **Run Payroll** to create and calculate the manual payroll run

### What happens when you run the journal

1. A new payroll run is created with **Type = Manual**
2. The journal lines are used as input for the payroll calculation engine
3. All standard calculations apply — taxes, benefits, and deductions are computed normally based on the entered earnings
4. The payroll run appears on the **Payroll Runs** page where you can review, post, and pay it like any other payroll run

> [!NOTE]
> Manual payments go through the same posting and payment workflow as standard payroll runs. After creating a manual payment, you still need to **Post** and **Pay** it from the Payroll Runs page.

## When to use manual payments

| Scenario | Approach |
|----------|----------|
| One-time bonus for a single employee | Manual payment |
| Final paycheck for a terminated employee | Manual payment |
| Correction to a specific employee's pay | Reverse the original paycheck, then create a manual payment |
| Company-wide bonus for all employees | Standard payroll run (off-cycle) |
| Regular scheduled payroll | Standard payroll run |

## Related information

- [About payroll runs](payroll-runs-overview.md)
- [Process payroll runs](payroll-runs-process.md)
- [Reverse a paycheck](paycheck-reversal.md)
- [About pay types](pay-types-overview.md)
