---
title: Set up payment methods
description: Learn how to create and configure Employee Payment Methods for direct deposit and check payments in OnePayroll.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Set up payment methods

Employee Payment Methods control how each employee's net pay is allocated and where it is deposited. You create them on the Employee Card via the **Payment Methods** action.

## Prerequisites

Before creating Employee Payment Methods:

- An employee record exists.
- At least one standard Business Central **Payment Method** code is configured (for example, a code linked to a bank account for electronic payments).

## Create an Employee Payment Method

1. Open the **Employee Card** for the employee.
2. Select the **Payment Methods** action.
3. On the **Employee Payment Methods** list, select **New** to open the card.
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

1. Open the **Employee Card** and select **Payment Methods**.
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

1. Open the **Employee Card** and select **Payment Methods**.
2. Open the payment method to edit.
3. Update the fields (bank details, allocation, priority).
4. Close the card.

To deactivate a payment method without deleting it, set an **End Date**.

## Validate setup before payroll

Before processing payroll:

- Every active employee has at least one Employee Payment Method.
- Exactly one method per employee has Allocation Type = Primary.
- **Bank Account No.** and **Bank Identifier Code** are filled in for all direct deposit methods.
- Priority values are unique per employee.

## Related information

- [About payment methods](payment-methods-overview.md)
- [Set up direct deposit](direct-deposit-setup.md)
- [Check printing](check-printing.md)
- [Employee setup](employee-setup.md)
