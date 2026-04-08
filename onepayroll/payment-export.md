---
title: Export payment files
description: Learn how OnePayroll generates electronic payment files and check output when processing payroll payments.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 04/07/2026
---

# Export payment files

When you choose the **Pay** action on a payment batch, OnePayroll generates the appropriate output based on the batch's payment method: an electronic payment file for direct deposit or printed checks for check payments. Generated files are attached to the payment batch and are also visible in the **Attachments** FactBox on the Payroll Runs page.

## Payment output types

### Electronic payment file (direct deposit)

- **Format** &mdash; determined by the configured data exchange definition (for example, NACHA-compliant ACH for US payroll)
- **Contains** &mdash; employee or vendor bank details, deposit amounts, settlement date
- **Recipient** &mdash; your bank, via secure upload
- **Generated when** &mdash; the batch's payment method has **Default Bank Payment Type** = **Electronic Payment**

### Check output

- **Format** &mdash; standard Business Central check report
- **Contains** &mdash; check numbers, payee names, amounts
- **Generated when** &mdash; the batch's payment method has **Default Bank Payment Type** = **Computer Check**

### Payment summary

- **Format** &mdash; report output (PDF or preview)
- **Contains** &mdash; summary of all payments in the batch by payee and amount
- **Generated when** &mdash; you choose the **Report** action on a payment batch

## Generate a payment file

1. Open the **Payroll Payments** page (from the role center cues or by searching for *Payroll Payments*).
2. Select the payment batch to process.
3. Choose the **Pay** action.
4. OnePayroll generates the file or prints checks based on the batch's payment method.
5. For electronic payments, you are prompted to download the file. The file is also attached to the payment batch.

If a payment file has already been generated for this batch, you are prompted to confirm before generating another one.

> [!NOTE]
> OnePayroll generates a **separate payment file for each employer bank account**. If employees or vendors reference different Payment Method codes with different balance accounts, the system creates separate files accordingly.

## File formats and standards

### ACH file format (US localization)

- **Standard** &mdash; NACHA (National Automated Clearing House Association)
- **Structure** &mdash; file header, batches, entries, file trailer
- **Records** &mdash; 94 bytes per record, fixed length
- **Validation** &mdash; checksum and control totals
- **Configuration** &mdash; the US demo data includes a preconfigured data exchange definition ("US EFT PAYROLL"); confirm with your bank that the format meets their requirements

## Transmission security

- Store payment files on an encrypted drive
- Delete files from your local machine after confirmed transmission
- Use your bank's secure portal for file upload
- Do not send payment files by email
- Record the bank's confirmation number for each transmission

> [!WARNING]
> Payment files contain sensitive bank account and payment information. Handle them with the same care as financial credentials.

## Validating exported files

Before transmitting a payment file to your bank:

1. **Count check** &mdash; number of payments matches the batch total
2. **Amount validation** &mdash; file total matches the batch amount
3. **Bank detail check (electronic payments)** &mdash; account numbers and routing numbers are present and valid
4. **Format validation** &mdash; file opens without errors and matches your bank's expected format

## Archiving payment files

Payment files are automatically attached to the payment batch. You can also download them from the **Attachments** FactBox on the Payroll Payments or Payroll Runs page.

Retain payment records per your organization's requirements:

- ACH transmission confirmations (bank receipt date and confirmation number)
- Check registers (for reconciliation)
- Payment summaries (for GL reconciliation and audit)

## Related information

- [Work with payroll payments](payroll-payments.md)
- [Set up direct deposit](direct-deposit-setup.md)
- [Check printing and management](check-printing.md)
- [About payment methods](payment-methods-overview.md)
- [US-specific features](us-localization.md)

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
