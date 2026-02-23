---
title: Check printing and management
description: Learn how to configure, print, and manage employee paychecks in OnePayroll.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Check printing and management

OnePayroll integrates with Business Central check printing for employee paychecks.

## Check payment overview

**Check payments include:**
- Employee name and address
- Gross pay amount
- Deductions itemized
- Net pay amount
- Check date and number
- Company information

**Check types:**
- Physical checks (printed, mailed to employees)
- Electronic checks (ACH sent to employee's bank)

## Setting up check printing

### Configure check printing in Business Central

1. Search for **Check Printing Setup**
2. Configure:
   - **Check format** (blank checks or pre-printed)
   - **Page layout** (check position on page)
   - **Font/appearance** (font size, bold options)
3. Save

### Create payment method for checks

1. Search for **Payment Methods**
2. Create payment method with:
   - **Payment Type** = Check
   - **Description** = "Employee Paychecks"
   - **Check Range** = Starting check number
3. Save

### Assign to employees

1. Open employee
2. **Payment Method** = Check payment method
3. Save

## Processing check payroll

**Step 1: Create and calculate payroll**
- Create payroll run normally
- Calculate wages, deductions, taxes
- Review and approve

**Step 2: Mark for check printing**
- In Payroll Run, select **Print Checks**
- OnePayroll generates check file

**Step 3: Print checks**
- Print on blank check stock
- Verify alignment on checks
- Review check details before distribution

**Step 4: Distribute checks**
- Manually deliver to employees
- Or mail if remote employees
- Collect signed receipts (optional)

**Step 5: Record check numbers**
- Note check numbers issued
- Update check sequence
- Maintain for reconciliation

## Check numbering

OnePayroll manages check numbers automatically:

**Starting check number:**
Set during setup (e.g., 1001, 5000)

**Sequence:**
- Check 1001 = First check printed
- Check 1002 = Second check
- Continues sequentially

**Tracking:**
- OnePayroll records check numbers in payroll entries
- GL posting includes check reference
- Reconciliation uses check numbers

## Managing check issues

### Voiding checks

**If check must be voided:**

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
