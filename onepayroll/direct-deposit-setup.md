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

## Processing direct deposit payroll

**Step 1: Prepare payroll**
- Create payroll run
- Calculate wages, deductions, taxes
- Review payroll entries
- Approve the payroll run

**Step 2: Generate payment file**
- Open the payroll run (can be done before or after posting)
- Select **Pay**
- Select **Electronic Payment** as the payment type
- Select **OK**
- OnePayroll generates a payment export file using the "US EFT PAYROLL" data exchange definition

**Step 3: Download and review file**
- You'll be prompted to download the payment file
- Verify the download (download dialog appears with file details)
- Review file details:
  - Employee count matches payroll
  - Total amount is correct
  - Check bank account information is present
- The file is also automatically attached to the payroll run for audit trail purposes

> [!WARNING]
> The payment file contains sensitive employee payment and bank information. You must handle the file securely and delete it after successful transmission to your bank. Do not store the file in unsecured locations. Always use secure transmission methods to your bank.

**Step 4: Post payroll to GL (if not already posted)**
- If you haven't yet posted the payroll run, select **Post**
- This creates the GL entries and payroll records
- Posting can occur before or after generating the payment file

**Step 5: Transmit to bank**
- Log into your bank's secure portal (ACH/payment file upload area)
- Upload the payment file using secure transmission
- Confirm transmission with the bank
- Note transaction ID or confirmation number from bank

**Step 6: Delete file and reconcile**
- After successful transmission to bank, delete the payment file from your computer
- Do not retain the file longer than necessary
- Bank confirms processing (timing varies by bank and submission time)
- Verify deposits post to employees' accounts (1-3 business days)
- Track any failures or rejections reported by bank
- Reconcile GL payroll liability account to actual deposits made

## Payment file details

**Payment export file contains:**
- Employee bank account information
- Payment amounts per employee
- Payroll run information
- Company payment details

**File format**: Payment files are generated in a format suitable for bank upload. The specific format depends on your bank's requirements (ACH, SEPA, or proprietary formats).

**File location**: Files are attached to the payroll run and can be downloaded from the attachments area.

## Multiple deposits per employee (Split deposits)

OnePayroll supports directing an employee's pay to multiple bank accounts:

1. Create payment methods for each account
2. Assign payment methods to employee with sequence order:
   - First payment method: Primary account
   - Second payment method: Secondary account (fixed amount or percentage)
3. Payment export includes entries for each account
4. Bank processes deposits to all assigned accounts

See [Payment methods setup](payment-methods-setup.md) for instructions on configuring split deposits.

## Failed payments

If a payment deposit fails (invalid account, closed account, etc.):

1. **Identify failure** - Bank typically notifies of rejection
2. **Determine cause** - Work with bank and employee to identify issue
3. **Correct employee record** - Update employee bank account information
4. **Reprocess** - Create fresh payment export with corrected information or request resubmission from bank

## Processing timeline and deadlines

**Payment processing:** Timing varies based on:
- Payment type (electronic vs. check)
- Bank processing time (typically 1-3 business days for electronic)
- Your bank's submission cut-off times
- Weekend/holiday schedule

**Planning recommendations:**
- Process and export payments well before actual payment date
- Account for bank processing delays
- Coordinate with bank on submission timelines
- Have check printing as backup option for electronic payment failures

## Before going live

Test your direct deposit setup:

1. Create small test payroll with 1-2 employees
2. Process complete workflow (create, calculate, approve, post)
3. Use realistic bank account information from test accounts
4. Review generated payment file for accuracy
5. Submit to bank (or use test environment if available)
6. Confirm test payments process
7. Verify GL cash account is updated

## Troubleshooting

**Payment file export fails**
- Verify all employees have valid payment methods assigned
- Check that bank account information is complete
- Ensure all required employee tax/payment information is set up

**"No payments to export" message**
- Verify payment entries exist for the payroll run
- Check that payment methods are assigned to employees
- Verify payment method settings are correct

**Bank cannot process payment file**
- Confirm file format is correct for your bank
- Contact bank to verify file structure assumptions
- May need to use a specialist payroll processor if direct export not supported

## Resources

- [Employee bank accounts setup](employee-bank-accounts.md) - Configure employee payment accounts
- [Payment methods setup](payment-methods-setup.md) - Create payment method configurations
- [Payment export and processing](payment-export.md) - Overview of all payment types

## What's next

- **[Payment methods](payment-methods-overview.md)** - Payment configuration overview
- **[Employee bank accounts](employee-bank-accounts.md)** - Bank account setup
- **[Process payroll runs](payroll-runs-process.md)** - Payroll processing with direct deposit
