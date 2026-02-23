---
title: Set up payment methods
description: Learn how to configure payment methods for direct deposit and check payment delivery.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Set up payment methods

Payment methods determine how employees are paid. Configure direct deposit, checks, or a combination.

## Create a payment method

**To create a payment method:**

1. Search for **Payment Methods**
2. Select **New**
3. Enter payment method details:
   - **Code** - Identifier (e.g., "DD1", "CHECK1")
   - **Description** - Name (e.g., "Direct Deposit - Checking")
   - **Payment Type** - Direct Deposit or Check
4. Configure allocation:
   - **Allocation Type** - Primary, Fixed Amount, or Percentage
   - **Bank Account** (for Direct Deposit) - Select employee's account
   - **Position** - Ordering (1 = first, 2 = second, etc.)
5. Save

### Direct Deposit setup

**To set up direct deposit:**

1. Create Payment Method with:
   - **Payment Type** = Direct Deposit
   - **Bank Account** = Employee's bank account
   - **Allocation Type** = Primary (for single account) or Fixed/Percentage (for splits)
2. Save

### Check payment setup

**To set up check payment:**

1. Create Payment Method with:
   - **Payment Type** = Check
   - **Check Delivery** = Physical or Electronic
   - **Allocation Type** = Primary (check receives full pay or portion)
2. Configure check printing settings (see [Check printing](check-printing.md))
3. Save

### Multiple allocations

For employees receiving pay across multiple accounts/methods:

1. Create first Payment Method (Position 1)
   - Example: $500 by check
2. Create second Payment Method (Position 2)
   - Example: Remainder by direct deposit to Checking
3. OnePayroll processes by position order

## Assigning payment methods to employees

**To assign payment method to employee:**

1. Search for **Employees**
2. Open employee
3. On **OnePayroll** tab: **Payment Method** = Select configured method
4. Save

Employee now receives pay using that method.

## Modifying payment methods

**To change how employee is paid:**

1. Open employee
2. Change **Payment Method** to new method
3. Set **Effective Date** (when change takes effect)
4. Save

Change takes effect on specified date.

## Validating setup

Before payroll processing:
- All active employees have payment method assigned
- Direct Deposit: Bank accounts are valid
- Check: Check printing configured (if using checks)
- Allocation: Multiple methods ordered correctly (position 1, 2, etc.)

## Next steps

- **[Set up direct deposit](direct-deposit-setup.md)** - Details on ACH processing
- **[Check printing](check-printing.md)** - Check configuration and printing
- **[Employees](employee-setup.md)** - Employee configuration
