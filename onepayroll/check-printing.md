---
title: Check printing and management
description: Learn how to configure, print, and manage employee paychecks in OnePayroll.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Check printing and management

OnePayroll integrates with Business Central's check printing capabilities for employee paychecks.

## Check payment overview

**Check payments include:**
- Employee paycheck report with earnings, deductions, taxes
- Paycheck date and period covered
- Employee net pay amount
- Company information
- Payment method and check reference information

**Supported check types:**
- Physical checks (printed and mailed to employees)
- Electronic distribution of check report (PDF)

## Setting up check payments

### 1. Configure payment method for checks

Create a payment method designated for check payments:

1. Search for **Payment Methods** in Business Central
2. Create new payment method or edit existing one
3. Set the **Default Bank Payment Type** to an appropriate type for checks

See [Payment methods setup](payment-methods-setup.md) for complete instructions.

### 2. Assign payment method to employees

1. Open employee record
2. In the **Payment** section, set **Payment Method** to your check payment method

## Processing check payroll

**Step 1: Prepare payroll**
- Create payroll run
- Calculate wages, deductions, taxes
- Review payroll entries to verify accuracy
- Approve the payroll run

**Step 2: Post to general ledger**
- In Payroll Run, select **Post**
- Verify posting completes successfully

**Step 3: Preview/Print paychecks**
- In the Posted payroll run, select **Paycheck**
- Opens paycheck report
- Review paycheck details:
  - Employee name and information
  - Gross pay amount
  - All deductions (taxes, benefits, etc.)
  - Net pay amount
- Print paychecks on check stock

**Step 4: Export payment information**
- In Published payroll run, select **Pay**
- Select **Computer Check** as the payment type
- OnePayroll prepares payment information
- This creates journal entries for the bank account reconciliation

**Step 5: Distribute checks**
- Deliver printed checks to employees
- Or mail if using remote distribution
- Obtain signed receipts if required for your process

## Check processing considerations

### Payment method selection

OnePayroll determines whether to use check printing based on:
- Employee's assigned payment method
- Payment method's bank payment type setting
- Your selection when exporting payments (Computer Check option)

### Preview before printing

Always preview paychecks using the **Paycheck** action before printing:
- Verify all earnings and deductions
- Check calculations are correct
- Ensure employee information is accurate
- Review GL account assignments for posting

### Printing options

OnePayroll integrates with Business Central's printing infrastructure:
- Print to paper (using standard printer with check stock)
- Print to PDF (for archival or electronic distribution)
- Print preview (before committing to paper)

### Verification

After printing paychecks:
- Visually verify check printing quality
- Confirm alignment on check stock
- Verify amounts are legible
- Review check references

## Managing check issues

### Lost or damaged checks

If a check is lost, damaged, or given in error:

1. Identify the check/employee affected
2. Create correction entry or reversal if needed
3. Reissue payment via new payroll or manual adjustment
4. Update records to reflect correction

### Voiding checks

If you must void a check after issuance:

1. Physically void the check (mark as VOID)
2. Adjust employee payment records if needed
3. Create reversal entry if already posted to GL
4. Reconcile GL cash account for the voided amount

See [Process payroll runs - Corrections](payroll-runs-process.md#step-5-make-corrections-if-needed) for details on adjusting posted payroll.

## GL account reconciliation

Check payments are posted to GL accounts during the payroll posting process:

**GL reconciliation workflow:**
1. Post payroll run (creates GL entries)
2. Create payment using Pay action with Computer Check option
3. Payment creates journal entries for bank account
4. Match GL payroll liability accounts to employees paid
5. Reconcile bank account to check clearing

**Typical GL flow:**
```
Salary Expense (Debit)
    → Payroll Liability (Credit)
    → Individual GL accounts for tax/deduction liabilities
Payable → Bank Account (via payment journal)
```

## Paycheck archival

### Saving paychecks to employee records

To create PDF copies of paychecks for employee records:

1. In the Posted payroll run, select **Save in Dossier**
2. Paychecks are converted to PDF and saved to employee dossiers
3. Documents are available in employee record for future reference
4. Set availability date if needed for document retention policies

### Managing paycheck records

Saved paychecks can be:
- Retrieved from employee dossier
- Downloaded for employee distribution
- Retained for audit/compliance purposes
- Used for employee self-service portal review

## Best practices

- **Always preview** - Use Paycheck action to preview before printing
- **Test setup** - Perform test payroll with check printing before live processing
- **Secure handling** - Protect blank checks and printed paychecks
- **Separate duties** - Ideally, someone other than payroll preparer approves checks
- **Reconcile** - Match GL postings to checks distributed
- **Archive copies** - Save PDFs of paychecks for historical records
- **Verify delivery** - Track which employees received checks

## Troubleshooting

**Paycheck report doesn't show expected data**
- Verify payroll entries exist for employees
- Check that payroll was calculated (not just created)
- Confirm employee information is complete

**Cannot export as Computer Check**
- Verify employee has payment method assigned
- Check payment method configuration
- Ensure bank payment type setting is appropriate

**Printing position/alignment incorrect**
- Verify paper size matches report settings
- Adjust printer settings for check position
- Test with sample paper first

**GL account reconciliation doesn't match**
- Verify all payroll runs were posted
- Confirm no manual GL entries for payroll
- Check for any reversed or adjusted payroll runs**If check must be voided:**

1. Mark check as **Voided** in payroll
2. Don't reissue that check number
3. Create corrected payroll entry
4. Issue replacement check with next number

**GL impact:**
- Original check: Debit (expense), Credit (bank)
- Void: Reverse entries
- New check: Credit (bank) with new check number

### Stopping payment

If employee loses/doesn't deposit check:

1. Contact bank to stop payment
2. Reissue check with new number
3. Update payroll records
4. Note in employee record

### Check reconciliation

When reconciling bank account:
- Match issued checks to bank clearance
- Identify outstanding checks
- Reconcile check amounts
- Update cash in GL

## Check stock and printing supplies

**Check stock:**
- Physical blank checks from bank or third-party supplier
- Format: Standard business check
- Quantity: Order enough for payroll frequency

**Printer:**
- MICR printer (reads check routing/account numbers)
- If using Business Central check printing, ensure compatible printer
- Test alignment before production use

**Supplies:**
- Check stock
- Envelopes (if mailing)
- Ink cartridges
- Backup supplies

## Split payments (checks + direct deposit)

If employee receives part by check, part by direct deposit:

1. Create two payment methods:
   - Check method (Position 1): $500
   - Direct Deposit method (Position 2): Remainder
2. Assign both to employee
3. OnePayroll:
   - Creates check for $500
   - Creates ACH deposit for remainder

## Electronic checks

Alternative to physical checks:

**E-check features:**
- Funds transfer via ACH
- Employee's bank receives like check
- Faster than physical mail
- Requires employee's bank info (like direct deposit)

**Processing:**
- Similar to direct deposit setup
- Generate e-check file
- Transmit to bank
- Employee sees as check deposit

## Compliance and audit trail

**Check controls:**
- Sequential numbering ensures accountability
- Recorded in GL with check reference
- Payroll entries linked to specific checks
- Audit trail for all check transactions

**Internal controls:**
- Dual approval for large checks (if policy)
- Segregation: one person calculates, another signs
- Monthly reconciliation of check register
- Review voided/duplicate checks

## Troubleshooting

### Check printing alignment issues
- Verify check stock is proper size
- Test alignment with sample check
- Adjust margins in printing setup
- Consult printer manual if needed

### Check numbers don't match GL
- Verify check sequence started at correct number
- Confirm all checks in payroll have numbers assigned
- Reconcile payroll to bank statement

### Employee reports missing check
- Verify check was issued (check number in payroll)
- Confirm delivery (if mailed)
- Contact bank to trace if deposited
- Reissue if necessary

## Best practices

- **Sequential numbering** - Maintain check sequence for audit
- **Regular reconciliation** - Monthly bank reconciliation of checks
- **Timely distribution** - Issue checks on promised payment date
- **Secure handling** - Protect blank check stock and printed checks
- **Documentation** - Keep records of issued, voided, outstanding checks
- **Backup plan** - Have contingency if printer fails on payroll day

## What's next

- **[Payment methods](payment-methods-overview.md)** - Payment configuration overview
- **[Process payroll runs](payroll-runs-process.md)** - Payroll processing with checks
- **[Direct deposit](direct-deposit-setup.md)** - Alternative payment method
