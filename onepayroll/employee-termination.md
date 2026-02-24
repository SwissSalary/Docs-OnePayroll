---
title: Employee termination
description: Learn how to terminate an employee in OnePayroll, including the termination dialog, employee lifecycle statuses, and how garnishments are handled.
author: zeande
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Employee termination

When an employee leaves your organization, you use the termination process to record their departure date and reason. OnePayroll uses the termination date to manage employee lifecycle status and determine payroll eligibility.

## Employee lifecycle statuses

OnePayroll tracks employees through four lifecycle statuses:

| Status | Description |
|--------|-------------|
| **Onboarding** | Employment date is in the future — employee has been set up but has not yet started |
| **Active** | Employee is currently employed and eligible for payroll |
| **Offboarding** | Termination date is set in the future — employee is still active but will be leaving |
| **Resigned** | Termination date is in the past — employee has left the organization |

These statuses are calculated automatically based on the employee's **Employment Date** and **Termination Date** fields. They are not set manually.

> [!NOTE]
> The Payroll Manager Role Center shows activity cues with counts for each lifecycle status, allowing you to quickly see how many employees are in each stage.

## Terminate an employee

### To terminate an employee

1. Open the **Employee Card** for the employee
2. Select **Terminate** from the actions
3. In the **Termination** dialog, fill in the fields:
   - **Termination Date** — the employee's last day of employment
   - **Grounds for Term. Code** — select the reason for termination from the lookup (for example, resignation, layoff, retirement)
   - **Rehirable** — turn on if the employee is eligible for rehire
4. Select **OK**

The employee record is updated with the termination date and reason.

### What happens after termination

- If the termination date is in the future, the employee status automatically changes to **Offboarding**. They remain eligible for payroll until the termination date passes.
- If the termination date is today or in the past, the employee status changes to **Resigned**. They no longer appear in payroll runs created after their termination date.
- The Role Center headlines highlight upcoming terminations so you can prepare final paychecks.

## Terminate a garnishment

Garnishments have their own termination process separate from employee termination.

### To terminate a garnishment

1. Open the employee's garnishment lines
2. Select **Terminate** on the garnishment line
3. Set the **Termination Date** (defaults to the current work date)
4. Select **OK**

The garnishment's end date is set, and it stops being included in future payroll calculations after that date.

## Final paycheck considerations

When an employee is terminated, consider whether you need to:

1. **Process remaining regular payroll** — if the termination date falls within an upcoming pay period, the employee is included in the standard payroll run for that period
2. **Create a manual payment** — for any final payments such as unused vacation payout, severance, or other one-time amounts (see [Manual payments](manual-payments.md))
3. **Review benefits** — benefit assignments may need end dates set to align with the termination date
4. **Archive documents** — use the employee dossier to save final paychecks and termination-related documents (see [Employee dossier](employee-dossier.md))

## Related information

- [Set up employees](employee-setup.md)
- [Manual payments](manual-payments.md)
- [Employee dossier and documents](employee-dossier.md)
- [Payroll Manager Role Center](role-center.md)
