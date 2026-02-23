---
title: Set up direct deposit
description: Learn how to configure and process direct deposit (ACH) payments in OnePayroll.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Set up direct deposit

Direct deposit electronically transfers employee pay to bank accounts. This guide covers setup and processing.

## Direct deposit overview

**How it works:**
1. OnePayroll calculates payroll (wages, deductions, taxes)
2. Creates ACH (Automated Clearing House) file with employee bank details
3. You transmit file to your bank
4. Bank processes deposits to employees' accounts (1-3 business days)
5. Employees see funds in their accounts

**Requirements:**
- Employee bank account information (account number, routing)
- Valid bank relationship with ACH capability
- ACH origination number from bank
- Secure transmission method to bank

## Configuration steps

### 1. Bank setup

Coordinate with your bank:
- Confirm ACH capability
- Obtain ACH origination ID (identifies your company)
- Review ACH file format requirements
- Establish transmission method (secure upload, SFTP, etc.)

### 2. Employee bank accounts

Ensure employees have bank accounts set up (see [Employee bank accounts](employee-bank-accounts.md)):
- Account number
- Routing number
- Account type (Checking/Savings)
- Primary vs. secondary designation

### 3. Payment methods

Create Direct Deposit payment method(s) (see [Payment methods setup](payment-methods-setup.md)):
- Payment Type: Direct Deposit
- Allocation: Primary, Fixed Amount, or Percentage

### 4. Assign to employees

Assign payment method to employees:
1. Open employee
2. Payment Method = Direct Deposit method
3. Save

## Processing direct deposit payroll

**Step 1: Process payroll normally**
- Create payroll run
- Calculate wages, deductions, taxes
- Review and approve
- Post to GL

**Step 2: Generate ACH file**
- In Payroll Run, select **Generate ACH File**
- OnePayroll creates ACH file with:
  - Employee bank details
  - Deposit amounts
  - Company information
  - Settlement date

**Step 3: Review ACH file**
- Download ACH file
- Verify:
  - All employees present
  - Correct amounts
  - Correct bank accounts
  - No errors

**Step 4: Transmit to bank**
- Log into bank's secure portal
- Upload ACH file
- Confirm transmission
- Note transaction ID

**Step 5: Reconcile**
- Bank confirms processing (typically next day)
- Verify deposits post to employees' accounts (1-3 business days)
- Track any failures/rejections
- Reconcile GL cash account

## ACH file details

**ACH file contains:**
- Company/payroll originator information
- Employee names and bank information
- Deposit amounts per employee
- Settlement date
- Batch information

**File format**: Standard ACH format (NACHA rules)

**Transmission**: Secure method to bank:
- Secure online portal
- SFTP
- Specialized payroll processor

## Multiple deposits per employee

For split deposits (e.g., Checking + Savings):

1. Create separate payment methods for each account
2. Assign both to employee with positions:
   - Position 1: $2,000 to Checking
   - Position 2: Remainder to Savings
3. OnePayroll generates ACH entries for both accounts
4. Bank processes both deposits

## Failed deposits

If an ACH deposit fails (wrong account, closed account, etc.):

1. **Identify failure** - Bank notifies of rejection
2. **Determine cause** - Wrong account? Closed account? Incorrect routing?
3. **Correct employee record** - Update bank account information
4. **Reprocess** - Create adjustment payroll run or contact bank about resubmission
5. **Notify employee** - Inform employee of issue and resolution

## Timing and deadlines

**ACH processing timeline:**
- Payroll processed Friday → ACH submitted Friday evening
- Settlement date Monday → Funds in accounts Monday-Wednesday
- Standard: 1-3 business days

**Plan ahead:**
- Submit ACH file day before payment date
- Account for bank processing time
- Earlier submission = earlier deposits (typically)

## Setup validation

Before processing production direct deposit:

1. Test with small group of employees
2. Verify deposits process correctly
3. Check employee accounts receive funds
4. Confirm GL cash account updated
5. Reconcile totals

## Troubleshooting

**"Invalid bank account" error**
- Verify routing and account numbers
- Check account number length/format
- Confirm with employee/bank

**"ACH transmission failed"**
- Check file format (must meet NACHA standards)
- Verify bank credentials/permissions
- Contact bank support

**Deposits not appearing**
- Check settlement date (allow 1-3 business days)
- Verify bank received transmission
- Contact bank to trace deposit

**Wrong amount deposited**
- Verify payroll amounts (were they correct?)
- Check ACH file amounts
- Contact bank if discrepancy found

## Best practices

- **Verify all accounts** - Test new accounts before processing
- **Plan timing** - Submit ACH with adequate lead time
- **Monitor processing** - Track deposits to employee accounts
- **Maintain records** - Keep ACH transmission confirmations
- **Have backup** - Keep check printing as backup if direct deposit fails
- **Secure transmission** - Use bank's secure method always
- **Reconcile** - Match GL cash to deposits processed

## What's next

- **[Payment methods](payment-methods-overview.md)** - Payment configuration overview
- **[Employee bank accounts](employee-bank-accounts.md)** - Bank account setup
- **[Process payroll runs](payroll-runs-process.md)** - Payroll processing with direct deposit
