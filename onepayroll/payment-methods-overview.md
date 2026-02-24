---
title: About payment methods
description: Learn how Employee Payment Methods control pay allocation and bank details for direct deposit and check payments in OnePayroll.
author: zeande
ms.service: dynamics-365-business-central
ms.topic: overview
ms.date: 02/23/2026
---

# About payment methods

Employee Payment Methods define how an employee's net pay is allocated across one or more payment destinations. Each record stores both the allocation rule and the bank details for that destination.

## How payment methods work

An **Employee Payment Method** record contains:

- **Name** — a descriptive label for the payment destination
- **Priority** — the processing order (unique per employee)
- **Allocation Type** — Primary, Fixed Amount, or Percentage
- **Allocation** — the dollar amount or percentage (for fixed or percentage types)
- **Payment Method** — a reference to a standard Business Central payment method code
- **Bank Account No.** — the employee's bank account number
- **Bank Identifier Code** — the routing number or SWIFT code

Payment methods are accessed from the **Employee Card** by selecting the **Payment Methods** action.

> [!NOTE]
> The payment type (Computer Check or Electronic Payment) is **not** stored on the Employee Payment Method. Instead, you select it on the **Create Payroll Payments** report dialog when generating payments for a completed payroll run.

## Allocation types

When an employee has multiple payment methods, the allocation type controls how net pay is distributed.

### Primary

One payment method per employee must be set as **Primary**. The primary method receives whatever net pay remains after all fixed and percentage allocations are applied. The first payment method created for an employee is automatically set to Primary.

### Fixed Amount

A specific dollar amount is allocated to this payment method each pay period. For example, $500 to a savings account.

### Percentage

A percentage of net pay is allocated to this payment method. For example, 20% to a savings account.

## Priority

Each Employee Payment Method has a unique **Priority** value per employee. Priority determines the order in which allocations are processed. Fixed and percentage allocations are applied first, and the primary method receives the remainder.

## Common scenarios

**Single account (direct deposit)**

| Priority | Name | Allocation Type | Bank Account No. |
|----------|------|-----------------|-------------------|
| 1 | Main Checking | Primary | 123456789 |

All net pay goes to the single account.

**Split direct deposit (fixed amount to savings)**

| Priority | Name | Allocation Type | Allocation | Bank Account No. |
|----------|------|-----------------|------------|-------------------|
| 1 | Main Checking | Primary | — | 123456789 |
| 2 | Savings | Fixed Amount | 500.00 | 987654321 |

$500 goes to savings; the remainder goes to checking.

**Split direct deposit (percentage to savings)**

| Priority | Name | Allocation Type | Allocation | Bank Account No. |
|----------|------|-----------------|------------|-------------------|
| 1 | Main Checking | Primary | — | 123456789 |
| 2 | Savings | Percentage | 20% | 987654321 |

20% of net pay goes to savings; the remainder goes to checking.

## Standard BC Payment Methods and employer bank accounts

The **Payment Method** field on the Employee Payment Method references a standard Business Central **Payment Method** record. This BC Payment Method is important because its **Bal. Account No.** field determines which **employer bank account** is used when processing payments.

This means:

- If all employees are paid the same way and from the same employer bank account, you need one Payment Method code (for example, `ELEC-PMT` for electronic payments).
- If employees are paid from **different employer bank accounts**, you must create a separate Payment Method code for each bank account and assign the appropriate one to each Employee Payment Method record.

### Recommended Payment Method codes

Set up Payment Method codes to cover the payment types you use:

| Code | Description | Bal. Account Type | Bal. Account No. | Default Bank Payment Type |
|------|-------------|-------------------|-------------------|---------------------------|
| `ELEC-PMT` | Electronic Payment - Main Bank | Bank Account | `BANK-MAIN` | Electronic Payment |
| `CHECK` | Computer Check - Main Bank | Bank Account | `BANK-MAIN` | Computer Check |
| `MANUAL` | Manual Check | Bank Account | `BANK-MAIN` | Manual Check |

If you have a second employer bank account (for example, a separate account for a subsidiary), create additional codes:

| Code | Description | Bal. Account Type | Bal. Account No. | Default Bank Payment Type |
|------|-------------|-------------------|-------------------|---------------------------|
| `ELEC-PMT2` | Electronic Payment - Branch Bank | Bank Account | `BANK-BRANCH` | Electronic Payment |
| `CHECK2` | Computer Check - Branch Bank | Bank Account | `BANK-BRANCH` | Computer Check |

The **Default Bank Payment Type** field is added by OnePayroll and determines how this Payment Method is used during payment processing. Set it to **Electronic Payment** for direct deposit methods and **Computer Check** for check methods.

### Impact on payment processing

- **Electronic payments (ACH)**: OnePayroll generates a **separate payment file for each employer bank account**. If some employees reference a Payment Method with `BANK-MAIN` and others reference one with `BANK-BRANCH`, two separate NACHA/ACH files are created.
- **Computer checks**: The standard BC check printing process prompts you to select the employer bank account. The `Bal. Account No.` on the Payment Method determines which bank account's check stock is used.

## Payment type at pay time

When you run the **Create Payroll Payments** report after a payroll is calculated and posted, the report dialog asks you to select a **Payment Type**:

- **Computer Check** — generates check documents using the standard Business Central check-printing process
- **Electronic Payment** — generates a payment file for direct deposit (ACH)

This selection applies to the entire payment run, not to individual employee payment methods. OnePayroll filters Employee Payment Methods by matching their Payment Method code's **Default Bank Payment Type** against the selected payment type, so only relevant payments are processed.

## Related information

- [Set up payment methods](payment-methods-setup.md)
- [Set up direct deposit](direct-deposit-setup.md)
- [Check printing](check-printing.md)
- [Employee bank account information](employee-bank-accounts.md)
