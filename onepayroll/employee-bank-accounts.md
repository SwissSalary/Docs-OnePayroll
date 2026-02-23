---
title: Employee bank accounts
description: Learn how to set up and manage employee bank accounts for direct deposit payments.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Employee bank accounts

Direct deposit requires employee bank account information. Learn how to set up and manage bank accounts in OnePayroll.

## About employee bank accounts

An **employee bank account** record stores an employee's banking details for direct deposit:

- Account holder name
- Bank name and routing number
- Account number
- Account type (Checking, Savings)
- Primary vs. secondary designation

Bank account information is:
- Secure (encrypted storage)
- Reusable (shared across payment methods if needed)
- Validated (format and routing checks)
- Historical (changes tracked for audit)

## Adding employee bank accounts

**To add a bank account to an employee:**

1. Search for **Employees**
2. Open the employee
3. On the **OnePayroll** tab, select **Bank Accounts**
4. Select **New**
5. Enter account details:
   - **Account Number** - The actual account number (or last 4 digits for display)
   - **Bank Name** - Institution name (e.g., "First National Bank")
   - **Routing Number** - Bank routing number (9 digits for US)
   - **Account Type** - Checking or Savings
6. Indicate if this is:
   - **Primary Account** - Main direct deposit account (mark as Yes)
   - **Secondary Account** - Additional account for portion of pay (mark as No if secondary)
7. Save

### Multiple bank accounts

An employee can have multiple bank accounts for allocation:

**Example: Split direct deposit**
```
Primary Account: Checking - $2,000 (main account, most of pay)
Secondary Account: Savings - $300 (secondary, remainder)
```

When setting up multiple accounts:
1. Mark the main account as **Primary**
2. Mark additional accounts as secondary (not primary)
3. Configure payment allocation method to specify how pay is split
4. OnePayroll deposits specified amounts to each account

See [Payment methods](payment-methods-overview.md) for configuring split deposits.

### Account type considerations

**Checking**
- Standard for direct deposit
- Immediate access to funds
- Most common for payroll

**Savings**
- Secondary account (typically)
- For automatic saving portions of paycheck
- May have daily transaction limits (per bank)

## Bank information validation

OnePayroll validates bank account information to prevent posting to wrong accounts:

### Routing number validation

The 9-digit routing number identifies the bank:
- Format validated for correctness
- Can be verified against ABA database
- OnePayroll alerts if invalid

**To verify a routing number:**
1. Check with employee's bank
2. Look on employee's check if available
3. Find through ABA routing number lookup
4. Contact bank directly if unsure

### Account number format

Account number format varies by bank:
- Typically 8-17 digits
- OnePayroll validates format (doesn't allow special characters)
- Can be stored with or without dashes

**For security:**
- Consider storing only last 4 digits for display
- Full account number stored securely for processing
- Masked on standard reports

## Managing bank account changes

**When an employee changes banks:**

1. Open the employee
2. On the **Bank Accounts** tab
3. **Deactivate** the old account:
   - Mark as **Inactive**
   - Don't delete (maintains historical record)
4. **Add new account:**
   - Select **New**
   - Enter new bank details
   - Mark as **Primary**
4. Save

**Timing:** Update before payroll processing with new account to ensure deposits go to correct bank.

## Validating bank accounts before payroll

Before processing direct deposit payroll:

**Check account completeness:**
1. Open each employee with direct deposit
2. Verify **Bank Accounts** tab has entries
3. Confirm primary account marked (for single account)
4. Verify routing and account numbers are filled in

**Test direct deposit:**
1. Create test payroll run with direct deposit employees
2. Review proposed ACH file (before posting)
3. Verify account numbers in ACH file match records
4. Confirm routing numbers are correct
5. Check bank routing/account integrity

**Production payroll:**
1. Process payroll through calculation and review
2. Generate ACH file for transmission to bank
3. Verify account information in ACH file
4. Submit to bank for processing
5. Reconcile actual deposits to payroll

## Special considerations

### Correcting wrong account information

If payroll was deposited to wrong account:

1. Contact the bank immediately
2. Request return of erroneous deposit
3. Update employee's correct account
4. Create correcting payroll entry
5. Document the incident for compliance

### Account testing

Some banks offer test accounts for payroll validation:
1. Set up test account with bank
2. Run small deposit for validation
3. Confirm banking relationship (some banks require this before payroll)
4. Switch to production when confirmed

### Account security

Best practices for account data:

- **Storage** - Keep encrypted, access controlled
- **Transmission** - Use secure ACH processing
- **Display** - Show only last 4 digits on general reports
- **Audits** - Log all account changes for compliance
- **Verification** - Verify employee owns account before processing

### Voided checks

If an employee requests direct deposit after receiving checks:

1. Establish that previous check method will stop
2. Add new bank account for direct deposit
3. Process payroll via direct deposit starting next period
4. Ensure double-payment doesn't occur (coordinate timing with bank)

## ACH file generation

When creating an ACH file for direct deposit payroll:

OnePayroll uses bank account information to generate:
- ACH file with account details
- Bank routing numbers
- Account numbers
- Transaction amounts
- Settlement date

The ACH file is transmitted to your bank who:
- Validates account information
- Routes to appropriate banks
- Processes deposits
- Provides settlement confirmation

## Troubleshooting

### "Invalid routing number" error
- Verify routing number with employee or bank
- Check 9-digit format (no dashes)
- Confirm routing number matches bank

### "Account number not validating"
- Verify account number format (no special characters)
- Check with bank for correct account number length
- Confirm employee's actual account number (not prior account)

### Direct deposit went to wrong account
- Verify account number in system matches employee's confirmed account
- Check ACH file generated correctly
- Contact bank to trace deposit
- Coordinate with employee's receiving bank to return funds

### Multiple primary accounts error
- Mark only ONE account as primary per employee
- Mark additional accounts as secondary
- Configure payment allocation method for splitdeposits

## Best practices

- **Verify employee owns account** - Confirm employee actually owns account before processing
- **Validate before payroll** - Always validate account information before payroll processing
- **Track changes** - Document all account changes for compliance
- **Test ACH file** - Review ACH file before transmission to verify accounts
- **Coordinate timing** - Ensure adequate lead time for bank processing (typically 2-3 business days)
- **Backup payment method** - Have check printing as backup if direct deposit fails
- **Document instructions** - Provide clear instructions to employees for account setup

## What's next

- **[Employee setup](employee-setup.md)** - Overall employee configuration
- **[Payment methods](payment-methods-overview.md)** - Configuring direct deposit payment methods
- **[Direct deposit setup](direct-deposit-setup.md)** - Payment processing configuration
