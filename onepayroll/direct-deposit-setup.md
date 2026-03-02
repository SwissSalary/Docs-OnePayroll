---
title: Set up direct deposit
description: Learn how to configure and process electronic payments (direct deposit) in OnePayroll.
author: zeande
ms.topic: how-to
ms.date: 02/23/2026
---

# Set up direct deposit

Direct deposit electronically transfers employee pay to their bank accounts. In OnePayroll, direct deposit is processed by selecting **Electronic Payment** as the payment type when running the **Pay** action on a posted payroll run.

## How it works

1. Each employee has one or more Employee Payment Method records with bank details.
2. You post a payroll run and select **Pay**.
3. On the **Create Payroll Payments** request page, you set **Payment Type** to **Electronic Payment**.
4. OnePayroll generates a payment file and attaches it to the payroll run.
5. You download the file and transmit it to your bank.

## Set up Employee Payment Methods

Bank account information is stored directly on the Employee Payment Method record. There is no separate bank account table — each payment method holds the bank details for that payment destination.

**To set up a direct deposit payment method:**

1. Open the **Employee Card**.
2. Select the **Payment Methods** action to open the **Employee Payment Methods** list.
3. Create a new record and fill in the following fields:

**General group:**

| Field | Description |
|-------|-------------|
| **Name** | A descriptive name for this payment method |
| **Priority** | Determines ordering when the employee has multiple payment methods (lower numbers = higher priority) |
| **Allocation Type** | Primary (receives the remainder), Fixed Amount, or Percentage |
| **Allocation** | The allocation amount (for Fixed Amount or Percentage types; not editable for Primary) |
| **Start Date** | When to start using this payment method (not editable for Primary) |
| **End Date** | When to stop using this payment method (not editable for Primary) |

**Transfer group:**

| Field | Description |
|-------|-------------|
| **Payment Method** | A reference to a standard BC Payment Method code |
| **Bank Account No.** | The employee's bank account number |
| **Bank Identifier Code** | The routing number (ABA, SWIFT, or transit number) |

**Communication group:**

| Field | Description |
|-------|-------------|
| **Address** | Payee address |
| **City**, **Post Code**, **County**, **Country/Region Code** | Address details |

The first payment method created for an employee is automatically set to **Primary** allocation type.

## Split payments (multiple deposits)

To direct an employee's pay to multiple bank accounts:

1. Open the employee's **Payment Methods**.
2. Create multiple records, for example:
   - **Priority 1**: Allocation Type = Primary, Bank Account No. = checking account (receives the remainder)
   - **Priority 2**: Allocation Type = Fixed Amount, Allocation = 500.00, Bank Account No. = savings account
3. During payment processing, the fixed and percentage allocations are applied first, and the primary method receives whatever remains.

## Standard BC Payment Method and employer bank account

The **Payment Method** code assigned to each Employee Payment Method determines which **employer bank account** the funds are drawn from. The Payment Method code's **Bal. Account No.** field specifies this bank account.

For direct deposit, ensure the Payment Method code has:

- **Bal. Account No.** — set to the employer bank account.
- **Default Bank Payment Type** — set to **Electronic Payment**.

If employees are paid from different employer bank accounts, create a separate Payment Method code for each bank account. OnePayroll generates a **separate payment file for each employer bank account**, so each bank receives only the transactions relevant to its account.

## Configure payment export (US localization)

For US-based payroll, the payment export uses a NACHA/ACH file format. The US demo data includes a preconfigured data exchange definition ("US EFT PAYROLL"). For production environments, confirm with your bank that the file format meets their requirements.

## Process direct deposit

### Step 1: Post the payroll

1. Create a payroll run for the pay group.
2. Review payroll entries.
3. Approve (if required) and post the payroll.

### Step 2: Generate payment file

1. On the **Payroll Runs** page, select the posted payroll run.
2. Select **Pay**.
3. On the **Create Payroll Payments** request page, set **Payment Type** to **Electronic Payment**.
4. Select **OK**.

OnePayroll generates a payment file through the configured payment export interface. The file is automatically attached to the payroll run as a document attachment, visible in the **Payment Files** FactBox on the Payroll Runs page. You are also prompted to download the file.

If a payment file has already been generated for this payroll run, you are prompted to confirm before generating another one.

### Step 3: Transmit to bank

1. Download the payment file (from the download prompt or the Payment Files FactBox).
2. Log into your bank's secure portal and upload the file.
3. Note any confirmation number from the bank.

> [!WARNING]
> The payment file contains sensitive employee bank account and payment information. Delete the file from your computer after successful transmission. Always use secure transmission methods.

### Step 4: Reconcile

After the bank confirms processing, verify deposits posted to employees' accounts and reconcile GL payroll liability accounts to actual deposits made.

## Troubleshooting

### "No payment entries to export" error

- Verify payment entries exist for the payroll run (check **Payment Entries** in the navigation actions).
- Confirm employees have Employee Payment Method records with bank details (Bank Account No. and Bank Identifier Code).

### Payment file export fails

- Verify the payment export interface is configured correctly.
- Check that all employees have valid bank details on their Employee Payment Method records.

### Bank rejects payment file

- Confirm the file format matches your bank's requirements.
- Contact your bank to verify file structure expectations.

## Related information

- [Payment methods setup](payment-methods-setup.md)
- [Payment methods overview](payment-methods-overview.md)
- [Process payroll runs](payroll-runs-process.md)
- [Check printing and management](check-printing.md)
