---
title: Check printing and management
description: Learn how to print employee paychecks using the Computer Check payment type in OnePayroll.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 02/23/2026
---

# Check printing and management

OnePayroll prints employee paychecks by creating General Journal Lines and delegating to the standard Business Central check printing process. You select **Computer Check** as the payment type when running the **Pay** action on a payroll run.

## Check payment workflow

1. Create, review, and (optionally) post a payroll run.
2. Select **Pay** on the payroll run.
3. On the **Create Payroll Payments** request page, set **Payment Type** to **Computer Check**.
4. OnePayroll creates General Journal Lines and runs the BC check printing process.
5. Distribute printed checks to employees.

## Prerequisites

### Employee payment methods

Each employee who should receive a check needs an Employee Payment Method record. Open the Employee Card and select the **Payment Methods** action to manage the employee's payment methods.

On the Employee Payment Method card:

- **Name** — identifies this payment method
- **Priority** — determines the ordering when the employee has multiple payment methods
- **Allocation Type** — Primary, Fixed Amount, or Percentage
- **Allocation** — the allocation amount (for Fixed Amount or Percentage types)
- **Payment Method** — a reference to a standard BC Payment Method code

The **Communication** group on the card contains address fields (Address, City, Post Code, County, Country/Region Code) for the payee.

For check payments, bank account fields (Bank Account No. and Bank Identifier Code) are typically left blank. The check is printed to the name and address specified on the Employee Payment Method.

### Standard BC Payment Method

The **Payment Method** code assigned to the Employee Payment Method must have:

- **Default Bank Payment Type** = **Computer Check** — so that OnePayroll includes these payments when the user selects Computer Check on the Create Payroll Payments report.
- **Bal. Account No.** — set to the employer bank account that checks are drawn from. The standard BC check printing report uses this bank account to determine the check stock and numbering.

If you pay employees from more than one employer bank account, create a separate Payment Method code for each bank account (for example, `CHECK-MAIN` and `CHECK-BRANCH`). The check printing report prompts you to select the bank account.

### Pay group configuration

The pay group must have a **Gen. Journal Template** and **Gen. Journal Batch** configured. OnePayroll uses these to create the General Journal Lines that drive the check printing process.

## Print checks

### Step 1: Post the payroll

1. Create a payroll run for the pay group.
2. Review payroll entries.
3. Approve (if required) and post the payroll.

### Step 2: Run Pay with Computer Check

1. On the **Payroll Runs** page, select the posted payroll run.
2. Select **Pay**.
3. On the **Create Payroll Payments** request page, set **Payment Type** to **Computer Check**.
4. Select **OK**.

OnePayroll creates General Journal Lines for each employee's check payment and runs the Business Central check printing process. Checks print to the configured printer or generate PDF output.

### Step 3: Preview paychecks

To review paycheck details before or after printing:

1. On the **Payroll Runs** page, select the payroll run.
2. Select **Paycheck** to preview paycheck details for each employee.

### Step 4: Archive paychecks (optional)

To save PDF copies to employee dossiers:

1. On the **Payroll Runs** page, select the payroll run.
2. Select **Save in Dossier**.

## Troubleshooting

### No payment entries for Computer Check

- Verify employees have payment methods assigned (Employee Card → **Payment Methods** action).
- Ensure payment entries exist for the payroll run (check **Payment Entries** in the navigation actions).

### Printing alignment issues

- Verify paper size matches the report layout settings.
- Adjust printer settings for check alignment.
- Test with sample paper before production printing.

## Related information

- [Process payroll runs](payroll-runs-process.md)
- [Payment methods setup](payment-methods-setup.md)
- [Set up direct deposit](direct-deposit-setup.md)
