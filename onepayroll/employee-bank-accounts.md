---
title: Employee bank account information
description: Learn how bank account details are stored on Employee Payment Methods for direct deposit in OnePayroll.
author: zeande
ms.service: dynamics-365-business-central
ms.topic: concept
ms.date: 02/23/2026
---

# Employee bank account information

In OnePayroll, bank account details are stored directly on the **Employee Payment Method** record. There is no separate bank account table — each Employee Payment Method holds the bank information for that payment destination.

## Where bank details are stored

Bank details are on the **Transfer** group of the Employee Payment Method card:

| Field | Description |
|-------|-------------|
| **Payment Method** | A reference to a standard BC Payment Method code |
| **Bank Account No.** | The employee's bank account number |
| **Bank Identifier Code** | The routing number (ABA, SWIFT, or transit number) |

These fields are also visible in the **Employee Payment Methods** list page.

## Access Employee Payment Methods

1. Open the **Employee Card**.
2. Select the **Payment Methods** action.
3. The **Employee Payment Methods** list opens, showing all payment methods for that employee.
4. Select a record to open the **Employee Payment Method** card, which shows the Transfer group with bank fields.

## Set up bank details for direct deposit

1. Open the **Employee Card** and select **Payment Methods**.
2. Create a new Employee Payment Method.
3. Fill in the **General** group: Name, Allocation Type (Primary, Fixed Amount, or Percentage), and Allocation amount.
4. Fill in the **Transfer** group: Payment Method code, Bank Account No., and Bank Identifier Code.
5. Close the card.

The first Employee Payment Method created for an employee is automatically set to **Primary** allocation type.

## Multiple bank accounts

To split pay across multiple bank accounts, create multiple Employee Payment Method records:

- **Priority 1**: Allocation Type = Primary, Bank Account No. = main account (receives the remainder)
- **Priority 2**: Allocation Type = Fixed Amount, Allocation = 500.00, Bank Account No. = savings account

The primary method receives whatever is left after fixed and percentage allocations are applied.

## Changing bank information

To update an employee's bank details:

1. Open the employee's **Payment Methods**.
2. Open the payment method that needs updating.
3. Update the **Bank Account No.** and **Bank Identifier Code** fields in the Transfer group.
4. Close the card.

Make bank changes before processing the next payroll run to ensure deposits go to the correct account.

## Troubleshooting

### Direct deposit fails

- Verify **Bank Account No.** and **Bank Identifier Code** are filled in on the Employee Payment Method.
- Confirm the values are correct with the employee or their bank.
- Check that payroll entries exist for the affected employees.

### Employee needs to change banks

- Update the existing Employee Payment Method's bank fields, or create a new payment method and set the old one's End Date.

## Related information

- [Set up direct deposit](direct-deposit-setup.md)
- [Payment methods setup](payment-methods-setup.md)
- [About payment methods](payment-methods-overview.md)
