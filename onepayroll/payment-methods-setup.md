---
title: Set up payment methods
description: Learn how to create and configure Employee Payment Methods for direct deposit and check payments in OnePayroll.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 02/23/2026
---

# Set up payment methods

Employee Payment Methods control how each employee's net pay is allocated and where it is deposited. You create them on the Employee Card via the **Payment Methods** action.

## Prerequisites

Before creating Employee Payment Methods:

- An employee record exists.
- Standard Business Central **Payment Method** codes are configured with the correct employer bank account and default payment type (see [Set up standard BC Payment Methods](#set-up-standard-bc-payment-methods) below).

## Create an Employee Payment Method

1. Open the **Employee Card** for the employee.
2. Choose the **Payment Methods** action.
3. On the **Employee Payment Methods** list, choose the **New** action to open the card.
4. Fill in the **General** group:
   - **Name** — a descriptive label (for example, "Main Checking" or "Savings").
   - **Priority** — the processing order. Each employee's payment methods must have unique priorities.
   - **Allocation Type** — choose **Primary**, **Fixed Amount**, or **Percentage**.
   - **Allocation** — enter the dollar amount or percentage (required for Fixed Amount and Percentage types).
5. Fill in the **Transfer** group:
   - **Payment Method** — select a Business Central payment method code.
   - **Bank Account No.** — the employee's bank account number.
   - **Bank Identifier Code** — the routing number (ABA) or SWIFT code.
6. Optionally fill in the **Communication** group with address details.
7. Close the card.

The first Employee Payment Method created for an employee is automatically set to **Primary** allocation type.

## Set up a single direct deposit

For an employee paid entirely to one bank account:

1. Open the **Employee Card** and choose the **Payment Methods** action.
2. Create one Employee Payment Method with:
   - **Allocation Type** = Primary
   - **Bank Account No.** and **Bank Identifier Code** filled in

All net pay goes to this account.

## Set up split direct deposit

To split pay across multiple accounts, create multiple Employee Payment Methods:

1. **Primary method** (Priority 1):
   - Allocation Type = Primary
   - Bank Account No. = main checking account
   - This method receives the remainder after other allocations

2. **Additional method** (Priority 2):
   - Allocation Type = Fixed Amount, Allocation = 500.00 (or Percentage, Allocation = 20)
   - Bank Account No. = savings account

Fixed and percentage amounts are applied first. The primary method receives whatever is left.

## Modify an Employee Payment Method

1. Open the **Employee Card** and choose the **Payment Methods** action.
2. Open the payment method to edit.
3. Update the fields (bank details, allocation, priority).
4. Close the card.

To deactivate a payment method without deleting it, set an **End Date**.

## Set up standard BC Payment Methods

Each Employee Payment Method references a standard Business Central **Payment Method** code. The Payment Method code determines the **employer bank account** used for payment processing.

### Create Payment Method codes

1. Choose the ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Payment Methods** (the standard BC page, not the Employee Payment Methods list), and then choose the related link.
2. Choose the **New** action to create a code.
3. Fill in the fields:
   - **Code** — a short identifier (for example, `ELEC-PMT`).
   - **Description** — a descriptive name (for example, "Electronic Payment - Main Bank").
   - **Bal. Account Type** — select **Bank Account**.
   - **Bal. Account No.** — select the employer bank account that payments will be drawn from.
   - **Default Bank Payment Type** — select the appropriate type:
     - **Electronic Payment** — for direct deposit / ACH
     - **Computer Check** — for printed checks
     - **Manual Check** — for manually written checks
4. Repeat for each combination of payment type and employer bank account you need.

### When to create multiple codes

Create separate Payment Method codes when:

- You pay employees by **different methods** (electronic payment vs. check) — each needs its own code.
- You pay employees from **different employer bank accounts** — each bank account needs its own code per payment type.

For example, if you have two employer bank accounts and use both electronic payments and checks:

| Code | Description | Bal. Account No. | Default Bank Payment Type |
|------|-------------|-------------------|---------------------------|
| `ELEC-MAIN` | Electronic - Main Bank | `BANK-MAIN` | Electronic Payment |
| `CHECK-MAIN` | Check - Main Bank | `BANK-MAIN` | Computer Check |
| `ELEC-BRANCH` | Electronic - Branch Bank | `BANK-BRANCH` | Electronic Payment |
| `CHECK-BRANCH` | Check - Branch Bank | `BANK-BRANCH` | Computer Check |

> [!IMPORTANT]
> The employer bank account on the Payment Method code determines which bank account is debited when payments are processed. Employees assigned to different Payment Method codes with different bank accounts will have their payments drawn from the respective employer bank accounts. For electronic payments, a **separate payment file is generated for each employer bank account**.

## Validate setup before payroll

Before processing payroll:

- Every active employee has at least one Employee Payment Method.
- Exactly one method per employee has Allocation Type = Primary.
- **Bank Account No.** and **Bank Identifier Code** are filled in for all direct deposit methods.
- Priority values are unique per employee.
- Each Employee Payment Method references a **Payment Method** code with the correct Bal. Account No. and Default Bank Payment Type.

## Related information

- [About payment methods](payment-methods-overview.md)
- [Set up direct deposit](direct-deposit-setup.md)
- [Check printing](check-printing.md)
- [Employee setup](employee-setup.md)
