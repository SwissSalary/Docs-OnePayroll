---
title: Export payment files
description: Learn how to generate and manage electronic payment files (ACH, check register) for payroll processing.
author: zeande
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Export payment files

Payment files enable electronic transmission of payroll to banks and financial institutions.

## Payment file types

### ACH file (Direct Deposit)
- Format: NACHA-compliant ACH file
- Contains: Employee bank details, deposit amounts, settlement date
- Recipient: Your bank
- Purpose: Processing direct deposit deposits

### Check register
- Format: Delimited text or PDF
- Contains: Check numbers, employee names, amounts
- Recipient: Accounting/management
- Purpose: Check reconciliation and tracking

### Payment summary
- Format: CSV, Excel, or PDF
- Contains: Summary of all payments by method, amount, GL account
- Recipient: Accounting department
- Purpose: GL reconciliation, management reporting

## Generating ACH file

**To generate ACH file for direct deposit:**

1. In Payroll Run, select **Export ACH File**
2. Select:
   - **Settlement Date** (when deposits should post)
   - **File Format** (typically NACHA standard)
3. OnePayroll generates file with:
   - All employees with direct deposit
   - Bank account info
   - Deposit amounts
   - Batch information
4. Download file to secure location

**Before transmission:**
- Review file contents
- Verify all employees present
- Confirm amounts match payroll
- Check no errors or warnings

**File transmission:**
- Upload to bank's secure portal
- Use bank's specified method
- Confirm receipt/transaction ID
- Archive transmitted file

## Generating check register

**To generate check register:**

1. In Payroll Run, select **Export Check Register**
2. Select output format (PDF, Excel, CSV)
3. OnePayroll generates register with:
   - Check numbers (in sequence)
   - Employee names
   - Amounts
   - Dates
4. Download and print/review

**Use for:**
- Verify checks before printing
- Distribution list
- Reconciliation to bank statement
- Audit trail

## Generating payment summary

**To generate payment summary:**

1. In Payroll Run, select **Payment Summary Report**
2. Review summary by:
   - Payment method (checks, direct deposit, etc.)
   - Amount totals
   - GL account impact
   - Department (if applicable)
3. Send to accounting for GL reconciliation

## File formats and standards

### ACH file format
- **Standard:** NACHA (National Automated Clearing House Association)
- **Structure:** File header → batches → entries → file trailer
- **Records:** 94 bytes per record, fixed length
- **Validation:** Checksum and control totals

### CSV/Excel export
- **Comma-separated** or tab-delimited
- **Headers:** Column names (Check Number, Employee, Amount)
- **Data:** One row per payment
- **Use:** Spreadsheet analysis, manual reconciliation

### PDF export
- **Format:** Human-readable report format
- **Content:** Payment details, summaries, GL accounts
- **Use:** Filing, distribution to management, audit

## Transmission security

**Secure your payment files:**
- Store on encrypted drive
- Delete after transmission confirmed
- Use secure transmission method to bank
- Don't email sensitive files
- Use bank's secure portal when available

## Validating exported files

**Before transmission:**

1. **Count check accuracy:**
   - Number of payments matches payroll
   - All employees with payment method included

2. **Amount validation:**
   - Total payments matches payroll run total
   - Individual amounts reasonable
   - No missing employees

3. **Bank info check (ACH):**
   - Account numbers present and valid
   - Routing numbers correct
   - No test/dummy accounts

4. **Format validation:**
   - File format correct (NACHA, CSV, etc.)
   - No corrupted data
   - File opens without errors

## Archiving payment files

**Keep records for:**
- ACH transmission confirmations (bank receipt date)
- Check registers (supporting payroll posting)
- Payment summaries (GL reconciliation)

**Retention:**
- Minimum: 7 years (US payroll requirement)
- Better: Keep indefinitely (low cost, good for audit)
- Archive to separate storage after year-end close

## Troubleshooting

**"ACH file generation failed"**
- Verify all employees have valid bank accounts
- Check routing numbers are valid
- Ensure settlement date is valid business day
- Review error message for specific issue

**"Check register doesn't match payroll"**
- Verify check numbers haven't duplicated
- Confirm employee count matches
- Review for missing employees

**"File won't open in Excel"**
- Check file format selected (CSV, not proprietary)
- Try opening with different application
- Re-export if file corrupted

**"Bank rejected ACH file"**
- Verify file format (must be NACHA)
- Check for invalid characters
- Confirm settlement date not in past
- Contact bank for specific rejection reason

## Best practices

- **Generate before transmission** - Always create and review file before sending
- **Verify contents** - Spot-check amounts and employee info
- **Secure transmission** - Use bank's secure method always
- **Archive copies** - Retain exported files for audit
- **Test first** - Validate with test payment before production
- **Document transmission** - Note date, time, confirmation ID
- **Monthly reconciliation** - Match payments to GL and bank statement

## What's next

- **[Set up direct deposit](direct-deposit-setup.md)** - ACH payment details
- **[Check printing](check-printing.md)** - Check payment details
- **[Process payroll runs](payroll-runs-process.md)** - Payroll processing overview
