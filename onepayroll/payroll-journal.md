---
title: Manage payroll journal entries
description: Learn how to review and manage general ledger journal entries from payroll posting.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Manage payroll journal entries

Review and manage general ledger journal entries created by payroll before final posting.

## GL entry creation

### When entries are created

GL journal entries are created when payroll is **approved**:

1. Payroll Run created and calculated > Pay types, deductions, taxes computed
2. Payroll approved by manager > GL entries generated automatically
3. Entries appear in GL batches (not posted yet)
4. Accountant reviews entries
5. Entries posted to GL (permanent)

### Types of entries generated

**For a typical weekly payroll:**

**Expense entries:**
- Salary Expense (debit) = Gross wages to all employees

**Tax entries:**
- Federal Tax Payable (credit) = Withholding + employer match
- FICA Payable (credit) = Social Security + Medicare withholding/match
- State Tax Payable (credit) = State withholding

**Deduction entries:**
- Benefits Payable (credit) = Employee deductions
- Garnishment Payable (credit) = Wage garnishments

**Cash entry:**
- Bank Account (credit) = Net pay distributed to employees

## Reviewing GL entries

### Accessing GL entries

**To review payroll GL entries:**

1. Search for **General Journal** or **GL Registers**
2. Filter by date range (payroll period)
3. Look for entries with source "Payroll"
4. Review entries before posting

### Entry details to verify

**For each entry, check:**

1. **Account number** - Is it the expected GL account?
2. **Description** - Shows payroll run number and period
3. **Amount** - Matches calculated payroll total
4. **Debit/Credit** - Correct side of entry (expenses debit, liabilities credit)
5. **Date** - Correct posting date
6. **Department** - Correct if allocated by department

### Sample entry review

```
GL Entry for Weekly Payroll (12/15/2025):
Line 1: Debit 6100 Salary Expense     $15,000
Line 2: Credit 2100 Fed Tax Payable    $1,500
Line 3: Credit 2110 FICA Payable       $1,700
Line 4: Credit 2200 Benefits Payable     $500
Line 5: Credit 1000 Cash              $11,300
----------------------------------------
Total Debits = Credits (entry balanced)
```

## Correcting GL entries

### Before posting

**If entry is incorrect before posting:**

1. Identify error in GL entry
2. Option A: **Reverse entry** - Delete and regenerate
   - Delete incorrect GL entry
   - Correct payroll issue
   - Re-approve payroll to generate correct entry
3. Option B: **Manual correction** (if minor)
   - Edit GL entry amount
   - Update description to note correction
   - Continue with posting

### After posting

**If error discovered after posting:**

1. **Do not delete** - Will break audit trail
2. **Create reversing entry:**
   - Create GL journal entry to reverse
   - Example: If wrong amount posted, reverse and repost correct amount
3. **Update payroll records:**
   - Note correction in payroll run
   - Update employee records if needed
4. **Document correction:**
   - Keep copies of both entries
   - Note reason for reversal/reposting

## Posting entries to GL

### Final GL posting process

**To post GL entries:**

1. Review all GL entries are correct
2. Verify total debits = total credits
3. Search for **General Journal Batches**
4. Find payroll batch (usually "PAYROLL" batch)
5. Select **Post** to finalize entries

**After posting:**
- Entries become permanent in GL
- Bank account reflects net pay
- Payable accounts reflect liabilities
- Expenses reflect payroll cost

### Timing recommendations

**Pre-posting checklist:**
- [ ] All payroll runs for period processed
- [ ] All GL entries reviewed for accuracy
- [ ] Amounts reconcile to payroll totals
- [ ] No duplicate entries
- [ ] Accounts are correct (not debit/credit reversed)

**Post immediately after:**
- Accounting period clearly reflects payroll posting
- GL reconciliation easier (less backlog)
- Year-end close preparation starts

## Reconciling to payroll

### Payroll-to-GL reconciliation

**Monthly payroll reconciliation:**

1. **Get payroll summary:**
   - Total gross wages (all employees)
   - Total federal withholding
   - Total FICA withholding
   - Total other deductions
   - Total net pay

2. **Match to GL entries:**
   - GL Salary Expense = Total gross wages
   - GL Fed Tax Payable = Total federal withholding
   - GL FICA Payable = Total FICA withholding
   - GL Cash = Total net pay

3. **Investigate discrepancies:**
   - Missing employees?
   - Duplicate entries?
   - Incorrect account assignment?

**Example reconciliation:**
```
Payroll Summary:
  Total Gross: $15,000
  Total Fed Tax: $1,500
  Total FICA: $1,700
  Total Net: $11,800

GL Entry Check:
  6100 Salary Exp: $15,000 ✓
  2100 Fed Tax: $1,500 ✓
  2110 FICA: $1,700 ✓
  1000 Cash: $11,800 ✓
```

## Liability reconciliation

### Tax liabilities

**Tracking tax payables:**

1. GL tax payable account = taxes withheld + employer match
2. When tax deposit made, reduce payable:
   - Debit: Tax Payable (2100, 2110, etc.)
   - Credit: Cash
3. Account should near zero after deposits made

**Monthly check:**
- Tax deposits = taxes withheld
- Payable account reduced accordingly
- No balance remains if current

### Deduction liabilities

**Benefits deductions:**

1. GL benefits payable = employee deductions withheld
2. When paid to benefits provider:
   - Debit: Benefits Payable (2200)
   - Credit: Cash
3. Balance should match unpaid deductions

## Period-end GL review

### Month-end closing

**Before closing month:**

1. **Verify all payroll posted**
   - All pay periods in month processed
   - All GL entries reviewed and posted
   - No pending payroll

2. **Review account balances**
   - Payable accounts = current liabilities (will be paid)
   - Expense accounts = month's payroll cost
   - Cash = net pay distributed

3. **Reconcile payables**
   - Tax payable = deposit amounts + current withheld
   - Benefits payable = unpaid deductions
   - Garnishment payable = unpaid garnishments

4. **Close month**
   - Finalize all GL postings
   - Run month-end reports
   - Archive GL entries

## Troubleshooting

**"GL entry doesn't balance"**
- Verify all lines included (expenses, taxes, deductions, cash)
- Check debit/credit sides correct
- Recalculate total (should equal)
- If still not balanced, delete and regenerate

**"Amounts don't match payroll summary"**
- Verify correct payroll period
- Check for multiple payroll runs in period
- Spot-check employee amounts
- Confirm no reversed/voided entries

**"Can't find GL entry"**
- Confirm payroll was approved (not just created)
- Check GL entry date (may be different from payroll date)
- Filter GL by payroll run number
- Verify batch hasn't been deleted

## Best practices

- **Post promptly** - Post GL entries within few days of payroll approval
- **Review before posting** - Never post without reviewing GL entries
- **Reconcile monthly** - Monthly payroll-to-GL reconciliation standard
- **Archive entries** - Keep GL entry documentation with payroll records
- **Document reversals** - If reversing entries, document reason and approval
- **Segregate duties** - Different person calculates vs. posts payroll
- **Year-end snap shot** - End of year, reconcile all GL payroll accounts

## What's next

- **[GL integration overview](gl-integration-overview.md)** - GL integration concepts
- **[GL posting setup](gl-posting-setup.md)** - GL account configuration
- **[Process payroll runs](payroll-runs-process.md)** - Payroll processing steps
