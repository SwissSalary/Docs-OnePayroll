---
title: Export payment files
description: Learn how to generate and manage electronic payment files (ACH, check register) for payroll processing.
author: zeande
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

## Creating payroll payments

OnePayroll uses the **Create Payroll Payments** report to generate payments from a posted payroll run. This report creates payment journal lines that can then be exported as electronic payments or printed as checks through standard Business Central payment processing.

**To create payroll payments:**

1. Open the **Payroll Runs** page
2. Select the payroll run to process payments for
3. Select the **Create Payroll Payments** action
4. On the request page:
   - **Payroll No.** is pre-filled with the selected payroll run
   - Select the **Payment Type**: **Electronic Payment** (for direct deposit/ACH) or **Computer Check** (for check payments)
5. Select **OK** to create the payment entries

The report creates payment entries based on each employee's payment method configuration (allocation type, bank details, etc.).

### Processing electronic payments (ACH/direct deposit)

After creating payroll payments with the **Electronic Payment** type:

1. Payment journal lines are created in Business Central
2. Use Business Central's standard payment export functionality to generate the bank file
3. Upload the generated file to your bank's secure portal
4. Confirm receipt and archive the transmitted file

### Processing check payments

After creating payroll payments with the **Computer Check** type:

1. Payment journal lines are created in Business Central
2. Use Business Central's standard check printing process to print checks
3. Review and distribute printed checks

For more details on each payment method, see [Direct deposit setup](direct-deposit-setup.md) and [Check printing](check-printing.md).

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
