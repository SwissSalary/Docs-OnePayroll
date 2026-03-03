---
title: Error messages and troubleshooting
description: Find solutions to common OnePayroll error messages and issues.
author: zeande
sws.service: onepayroll
sws.topic: troubleshooting
sws.date: 02/23/2026
---

# Error messages and troubleshooting

Explanations and solutions for common OnePayroll errors.

## Employee and setup errors

### "Employee is not active"

**When:** Processing payroll for terminated or inactive employee

**Why:** OnePayroll prevents payroll for employees marked inactive

**Solution:**
1. Open employee
2. Verify **Status** = Active
3. If employee is still employed, change status to Active
4. Retry payroll processing

**Note:** Historically terminated employees should remain Active in system even after termination for payroll processing.

### "Pay Group is required"

**When:** Creating payroll run or employee without pay group

**Why:** Pay group determines payroll frequency and posting rules

**Solution:**
1. Create **Pay Group** if not exists
2. Create **Pay Cycle Schedule** for group
3. Assign to employee or select in payroll run
4. Retry

### "Pay Type not found"

**When:** Creating payroll entry with invalid pay type

**Why:** Pay type doesn't exist or is inactive

**Solution:**
1. Verify **Pay Type** code is correct
2. Check that the pay type exists on the **Pay Types** page
3. Create the pay type if needed
4. Retry

## Compensation and calculation errors

### "Gross pay cannot be negative"

**When:** Payroll processing encounters negative gross (unusual)

**Why:** Deductions or adjustments exceeded gross amount

**Solution:**
1. Review **pay entries** detail
2. Identify unusual deductions/adjustments
3. Correct or remove erroneous entries
4. Recalculate payroll

### "Deduction exceeds net pay"

**When:** Employee deductions too large

**Why:** Employee deductions (benefits, garnishments) exceed calculated net pay

**Solution:**
1. **Reduce deduction amount** for affected deductions
2. **Remove unnecessary deductions**
3. **Adjust garnishment priority** if multiple garnishments
4. **Contact employee** for deduction reduction approval
5. Retry payroll

### "Overtime calculation failed"

**When:** Overtime pay type encounters error

**Why:** Missing hours data, invalid rate, or calculation issue

**Solution:**
1. Verify **hours worked** entered correctly
2. Confirm **hourly rate** assigned
3. Check **overtime multiplier** (1.5, 2.0, etc.) correct
4. Verify employee type supports overtime
5. Review payroll entry detail for discrepancies

## Tax and withholding errors

### "W-4 information missing"

**When:** Federal tax calculation cannot complete

**Why:** Employee W-4 not completed or filled in

**Solution:**
1. Obtain **Form W-4** from employee
2. Enter **filing status** (Single, Married, etc.)
3. Enter **tax credits** (Line 3)
4. Enter **other income** if applicable (Line 4a)
5. Retry tax calculation

### "State residence not configured"

**When:** State tax calculation attempted for state not set up

**Why:** Employee state assigned but state not configured in system

**Solution:**
1. Search for **States Setup** (or similar)
2. Create entry for state if needed
3. Verify **pay rules** for state
4. Assign tax tables/provider for state
5. Assign to employee and retry

## Bank account and payment errors

### "Bank account required for direct deposit"

**When:** Processing direct deposit without valid bank details

**Why:** Employee Payment Method is missing Bank Account No. or Bank Identifier Code

**Solution:**
1. Open the **Employee Card** and select **Payment Methods**
2. Verify the Employee Payment Method has:
   - **Bank Account No.** filled in
   - **Bank Identifier Code** filled in
3. Verify the payment method has Allocation Type set (Primary, Fixed Amount, or Percentage)
4. Retry payment processing

### "Invalid bank routing number"

**When:** ACH file validation fails with bad routing number

**Why:** Routing number format invalid or doesn't exist

**Solution:**
1. Verify **routing number** correct (format: 9 digits)
2. Confirm with employee/bank
3. Update the Employee Payment Method record (Bank Account No. and Bank Identifier Code fields)
4. Regenerate ACH file
5. Resubmit to bank

### "Check printing failed"

**When:** Check generation encounters error

**Why:** Printer issue, check stock issue, or data missing

**Solution:**
1. Verify **check stock** loaded correctly
2. Confirm **check number range** valid
3. Test printer (print test page)
4. Verify **GL cash account** created
5. Retry check printing

## GL posting errors

### "GL account not found"

**When:** Payroll posting encounters missing GL account

**Why:** GL account configured in pay type but doesn't exist in chart of accounts

**Solution:**
1. Create missing **GL account** in chart of accounts
2. Verify **account number** matches pay type setup
3. Configure account:
   - Account type (Expense, Liability, Asset)
   - Income/Balance sheet category
4. Retry payroll posting

### "GL posting aborted - entry unbalanced"

**When:** GL entries don't balance (debits ≠ credits)

**Why:** Payroll calculation error or system issue

**Solution:**
1. Cancel payroll posting
2. Review **payroll calculation** detail
3. Verify all **deductions/taxes** entered
4. Recalculate payroll
5. Review GL entry before retry

Example cause: Missing benefit deduction payable account

### "GL batch locked for editing"

**When:** Cannot edit GL batch for payroll

**Why:** Batch already posted or locked by another user

**Solution:**
1. Verify batch not **already posted**
2. Check if another user editing batch
3. Request user close batch
4. Delete and regenerate new batch (if not posted)
5. Retry payroll posting

## Report and export errors

### "Report contains no data"

**When:** Running report with no results

**Why:** Date range has no payroll, or filters exclude all records

**Solution:**
1. Verify **date range** includes payroll
2. Check **filters** not too restrictive
3. Confirm **payroll processed** for period
4. Try expanding date range
5. Run test payroll if needed

### "Excel export failed"

**When:** Exporting report to Excel encounters error

**Why:** File permission issue, Excel not installed, or data issue

**Solution:**
1. Verify **Microsoft Excel** installed
2. Check file **permissions** (not read-only)
3. Close existing Excel file if open
4. Try different **export format** (PDF, CSV)
5. Save to different **location** if permission issue

## Performance and system errors

### "Payroll processing slow"

**When:** Payroll run takes excessive time to calculate

**Why:** Too many employees, complex validation rules, or system resources

**Solution:**
1. Process smaller **batch** of employees
2. Disable/simplify **validation rules** if not critical
3. Check system **resources** (RAM, CPU available)
4. Process during off-hours if possible
5. Contact support if persists

### "Out of memory error"

**When:** System runs out of memory during processing

**Why:** Large payroll with many employees or complex calculations

**Solution:**
1. **Close other applications** to free memory
2. Process smaller **batches** of employees
3. Increase system RAM if frequent issue
4. Contact support for optimization

## Common error combinations

### "Cannot post payroll - multiple errors"

**Typical sequence:**
1. Check **employee records** (status, pay group, tax info)
2. Verify **pay types** assigned correctly
3. Validate **GL accounts** configured
4. Confirm **tax setup** complete
5. Review **payroll entries** detail
6. Identify specific error message
7. Resolve per corresponding solution above

## Getting help with errors

**When troubleshooting doesn't work:**

1. **Note the error message exactly** - Copy full text
2. **Note the action** - What were you doing when error occurred?
3. **Note the data** - Employee/payroll/record involved
4. **Check documentation** - See relevant topics
5. **Contact support** - Provide details above

**Support contact:** Contact your Business Central partner or visit [SwissSalary support](https://www.swisssalary.ch)

## Best practices to avoid errors

- **Test before production** - Test new pay types, rates, processes with sample data
- **Review before posting** - Always preview payroll before final posting
- **Keep data current** - Update tax withholding, bank accounts, and benefits regularly
- **Validate setup** - Periodic review of employee records, GL accounts
- **Document procedures** - Written procedures reduce mistakes
- **Reconcile regularly** - Monthly GL and tax reconciliation catches issues early

## What's next

- **[FAQ](faq.md)** - Common questions
- **[US localization](us-localization.md)** - US-specific features
- **[Contact support](faq.md#getting-additional-help)** - Support options
