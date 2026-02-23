---
title: Set up GL posting for payroll
description: Learn how to configure general ledger accounts and posting rules for payroll in OnePayroll.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Set up GL posting for payroll

OnePayroll posts payroll transactions to the General Ledger based on pay type assignments and GL posting settings.

## Overview of GL posting in OnePayroll

When a payroll run is posted in OnePayroll:

1. Payroll entries (wages, taxes, deductions) are created
2. Based on your **General Ledger Posting** setting in Payroll Setup, entries are either:
   - **No Transfer**: Payroll remains in payroll system only, no GL posting
   - **Manual Posting**: Converted to General Journal Lines for you to post manually
   - **Automatic Posting**: Automatically posted to the General Ledger
   - **Always Ask**: You choose each time whether to auto-post or manual-post

## Required GL accounts

OnePayroll requires GL accounts for:

### Expense accounts
- Regular salary
- Hourly wages
- Overtime compensation
- Bonuses and commissions
- Any other earnings pay types

### Payable/Liability accounts
- Federal income tax payable
- FICA (Social Security and Medicare) payable
- State/local income tax payable
- Other withholdings payable
- Health insurance payable (if employee-funded)
- Retirement plan payable (if employee-funded)
- Other deductions payable
- Garnishment payable

### Employer expense accounts (if applicable)
- Employer FICA matching
- Unemployment insurance
- Employer-funded benefits
- Other employer taxes

## Creating GL accounts for payroll

**To create necessary GL accounts:**

1. Search for **Chart of Accounts**
2. Create accounts by category:
   - **6000-6099** for salary/wage expenses (typically)
   - **2100-2199** for payroll liabilities/payables (typically)
3. For each account:
   - Set **Account Type** to Expense or Liability as appropriate
   - Set posting accounts only (not summary accounts)
   - Enable **Direct Posting**
4. Save

## Assigning GL accounts to pay types

Each pay type must be assigned GL accounts (Account No. and optionally Balance Account No.). When that pay type is posted, its amounts are posted to these accounts.

**To assign GL accounts to pay types:**

1. Search for **Pay Types**
2. Open or create a pay type
3. Go to the **Posting** tab
4. Set **Account No.** to the primary GL account for this pay type
5. Optionally set **Balance Account No.** for balancing/offset posting (usually left blank)

**Example mappings:**

- Pay Type "Regular Pay" → Account No.: 6100 (Salary Expense)
- Pay Type "Federal Tax" → Account No.: 2100 (FIT Payable)
- Pay Type "Health Insurance" → Account No.: 2120 (Benefits Payable)

> [!IMPORTANT]
> All pay types must have GL accounts assigned. Note: This is only critical if **General Ledger Posting** is set to anything other than "No Transfer" in Payroll Setup.

## GL posting workflow

### Step 1: Create and calculate payroll (no GL interaction)
- Create payroll run
- Calculate payroll entries
- Entries created in payroll system only
- No GL impact yet

### Step 2: Approve payroll (no GL interaction)
- Review and approve payroll entries
- Still exists only in payroll system
- No GL posting yet

### Step 3: Post payroll (GL posting occurs based on setting)

When you select **Post** in a payroll run:

**If "No Transfer":**
- Payroll is marked as "Posted" in payroll system
- No GL transfer occurs
- No General Journal Lines created

**If "Manual Posting":**
- General Journal Lines are created with payroll entries
- Lines appear in the General Journal (not posted)
- You must manually post the journal lines
- Once posted, GL entries are permanent

**If "Automatic Posting":**
- General Journal Lines are created from payroll entries
- Lines are immediately posted to GL
- Payroll GL posting is permanent
- No further GL action needed

**If "Always Ask":**
- You are prompted to choose manual or automatic posting
- Select based on your current need
- Different payrols can use different approaches

### Step 4: Verify GL postings
- Review GL accounts to confirm posting
- Payroll entries should aggregate by pay type GL account
- Total debits should equal total credits

## Understanding GL aggregation

When payroll posts to GL:

- Multiple payroll entries for the same pay type are aggregated by GL account
- One General Journal Line is created per GL account
- Example: 20 employees with "Regular Pay" → 1 journal line to GL Account 6100 (total of all 20)

**GL posting example:**

```
Payroll Entries:
  Employee 001 Regular Pay: $1,000 → GL 6100
  Employee 002 Regular Pay: $1,200 → GL 6100
  Employee 001 FIT: ($120) → GL 2100
  Employee 002 FIT: ($145) → GL 2100

GL General Journal Lines Posted:
  GL 6100 Salary (Debit): $2,200
  GL 2100 FIT Payable (Credit): $265
```

## GL account numbering strategy

**Recommended numbering by function:**

- **6000-6099**: Salary and wage expenses
- **6100-6199**: Overtime and special pay
- **6200-6299**: Benefits expenses
- **2100-2199**: Payroll liability accounts
- **1000-1099**: Cash/bank accounts

Benefits:
- Easy to identify payroll GL activity
- Simplifies reconciliation
- Groups related accounts together

## Testing GL posting

**Before processing production payroll:**

1. Create a test payroll with sample data
2. Approve the test payroll
3. Based on your GL Posting setting:
   - **Manual Posting**: Review General Journal Lines before posting
   - **Automatic Posting**: Review GL accounts after posting
4. Verify:
   - Entries posted to correct GL accounts
   - Amounts seem reasonable (total pay, tax amounts, etc.)
   - Debits = Credits
5. Delete or reverse the test payroll
6. Adjust GL accounts or pay type mappings if needed
7. Process production payroll with confidence

## GL posting timing and period

Each payroll posts using:
- **Posting Date**: Date specified in payroll run
- **Period**: GL posting period (month/year) based on posting date
- **Document No.**: Formatted per Payroll Setup settings

> [!TIP]
> Ensure payroll is posted within the GL period it covers. For example, payroll covering Feb 1-15 should post in February, not March.

## Troubleshooting GL posting

**"GL account not found" error**
- Verify all pay types have GL accounts assigned
- Confirm GL accounts exist in Chart of Accounts
- Check that GL accounts haven't been closed
- Ensure accounts are marked as posting (not summary)

**GL postings don't appear**
- Verify GL Posting setting in Payroll Setup (not "No Transfer")
- If manual posting, check that journal lines were manually posted
- Review GL accounts using GL account filter for payroll dates

**Amounts don't match GL**
- Verify all employees were included in payroll
- Confirm payroll status is "Posted" (not just "Approved")
- Check GL account aggregation (multiple entries per account may aggregate)
- Review payroll GL posting detail in payroll run

**GL entries in wrong period**
- Verify posting date on payroll run matches intended period
- Adjust posting date if needed, post payroll again
- Review GL account period settings

## Year-end GL reconciliation

**At year-end:**

1. Post all remaining payroll for the year
2. Verify GL payroll liability accounts (what's still owed)
3. Compare GL salary expense total to W-2 totals
4. Reconcile tax payable accounts (should be paid out or accrued)
5. Archive posted payroll for records

## Best practices

- **Always assign GL accounts to pay types** - Required for posting
- **Test before production** - Run test payroll to validate GL posting
- **Monthly GL reconciliation** - Review payroll GL transactions monthly
- **Clear GL posting setting** - Decide on manual vs. automatic and stay consistent
- **Maintain chart of accounts** - Keep descriptions current for clarity
- **Document exceptions** - Note any unusual GL postings or adjustments
- **Keep audit trail** - Retain payroll GL posting details for compliance

## What's next

- **[Payroll setup](payroll-setup.md)** - Complete payroll configuration
- **[Pay types overview](pay-types-overview.md)** - Understanding pay types
- **[Process payroll runs](payroll-runs-process.md)** - How to create and post payroll
