---
title: Set up GL posting for payroll
description: Learn how to configure general ledger accounts for payroll posting.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Set up GL posting for payroll

Configure general ledger accounts where payroll transactions will post.

## GL account setup overview

**Required accounts:**
1. **Expense accounts** - Where wages/costs post
2. **Payable accounts** - Where tax and deduction liabilities post
3. **Cash account** - Where net pay comes from
4. **Employer tax accounts** - Where employer cost matches post (optional)

## Setting up expense accounts

### Main salary/wage accounts

**To configure wage accounts:**

1. Search for **Chart of Accounts**
2. Find or create accounts:
   - **6100** - Salaries and Wages
   - **6110** - Hourly Wages
   - **6120** - Commission Wages
   - **6130** - Bonus Compensation
3. Mark accounts:
   - **Account Type** = Expense
   - **Income/Balance** = Income Statement
4. Save

### Department-specific accounts (optional)

For department cost tracking:

1. Create sub-accounts by department:
   - **6100.10** - Sales Salaries
   - **6100.20** - Operations Salaries
   - **6100.30** - Admin Salaries
2. Configure in **Department Setup** (if used)
3. Assign employees to departments
4. OnePayroll automatically charges salaries to department account

### Pay type accounts

For detailed pay type tracking:

1. Create accounts by pay type:
   - **6200** - Regular Wages
   - **6210** - Overtime Wages
   - **6220** - Shift Differential
   - **6230** - Bonuses
2. Link pay type to GL account in pay type setup
3. OnePayroll posts each pay type separately

## Setting up payable accounts

### Tax payable accounts

**To create tax liability accounts:**

1. Search for **Chart of Accounts**
2. Create accounts (Income Statement → Liability section):
   - **2100** - Federal Income Tax Payable
   - **2110** - FICA/Social Security Payable
   - **2120** - Medicare Tax Payable
   - **2130** - State Income Tax Payable
   - **2140** - Local Income Tax Payable
3. Mark:
   - **Account Type** = Liability
   - **Income/Balance** = Balance Sheet
4. Save

### Employee deduction payable

**For employee-funded deductions:**

1. Create accounts:
   - **2200** - Health Insurance Payable
   - **2210** - Retirement Plan Payable
   - **2220** - FSA/HSA Payable
   - **2230** - Garnishment Payable
   - **2240** - Other Deductions Payable
2. Mark as Liability accounts
3. Save

## Setting up cash accounts

### Worker net pay account

**For net pay distribution:**

1. Navigate to **Chart of Accounts**
2. Locate **1000** - Cash account (or Bank-specific like 1010, 1020)
3. When payroll posts:
   - Expense accounts (6100) debited (payroll cost)
   - Liability accounts (2100-2240) credited (taxes/deductions)
   - Cash (1000) credited (net pay to employees)

### Multiple bank accounts

If distributing direct deposit to multiple accounts:
- Use primary cash account for main bank
- Secondary accounts optional (if split payments tracking needed)

## Linking accounts in payroll setup

### Payroll Setup GL configuration

1. Search for **Payroll Setup**
2. On **GL Posting** tab, configure:
   - **Default Salary Expense Account** = 6100 (or specific)
   - **Default FICA Payable Account** = 2110
   - **Default Federal Tax Payable** = 2100
   - **Default State Tax Payable** = 2130
   - **Default Cash Account** = 1000
3. These serve as defaults for all payroll postings

### Pay type account mapping

**To assign GL accounts to pay types:**

1. Open **Pay Types** list
2. Select pay type (e.g., "Regular Wages")
3. Configure:
   - **GL Account** = Specific expense account (e.g., 6200)
   - **Employer Tax Account** = If different from default
4. Save

When payroll processes:
- Regular wages post to 6200 (not 6100)
- Specific account identified by pay type

### Benefit posting

**For benefit liabilities:**

1. Open **Benefit Types**
2. Select benefit type (e.g., "Health Insurance")
3. Configure:
   - **Payable GL Account** = 2200 (Health Insurance Payable)
   - **Expense Account** (if employer-funded) = 6300 (Benefits Expense)
4. Save

When payroll posts:
- Employee health deduction → 2200 (liability)
- Employer health cost → 6300 (expense)

## Testing GL posting

**Before production payroll:**

1. **Create test payroll** with sample data
2. **Review GL entries** generated (don't post to GL yet)
3. **Verify accounts:**
   - Salary expense to correct account
   - Taxes post to payable accounts
   - Cash reduced by net pay
4. **Check amounts:**
   - Total debits = total credits
   - Account balances reasonable
5. **Post and reconcile** if all correct

## Department-based allocation

### Setting up department posting

1. Ensure employees assigned to departments
2. Create department-specific GL accounts (optional)
3. In **Payroll Setup**, enable **Post by Department**
4. OnePayroll allocates salary expense by department code

**Example:**
```
Employee 001 (Sales dept): $3,000 → 6100.10 (Sales Salaries)
Employee 002 (Ops dept): $2,500 → 6100.20 (Operations Salaries)
```

## Validation

**Before first production payroll:**

Confirm:
- [ ] All required GL accounts exist in chart of accounts
- [ ] Accounts configured as correct type (Expense, Liability, Asset)
- [ ] Default accounts set in Payroll Setup
- [ ] Pay type accounts linked (if using)
- [ ] Benefit GL accounts configured (if applicable)
- [ ] Test payroll GL entries reviewed and reasonable
- [ ] Department allocation working (if using)

## GL posting timing

### When GL entries are created

- GL entries created when payroll **approved**
- Entries can be reviewed before posting to GL
- GL posting (final step) makes entries permanent

### GL closing and year-end

**Month-end close:**
- All payroll GL entries should post before closing month
- Review payroll payable accounts (taxes, deductions)
- Verify deduction/tax liabilities will be paid

**Year-end close:**
- All payroll for year completed and posted
- W-2 payroll total = GL salary expense total
- Tax GL payable accounts cleared by tax deposits

## Troubleshooting

**"GL account not found"**
- Verify account number in Payroll Setup is correct
- Check account exists in Chart of Accounts
- Confirm account hasn't been deleted
- Update to valid account

**"Salary posting to wrong account"**
- Check pay type GL account assignment
- Verify default account in Payroll Setup
- Review specific pay type has account linked
- Regenerate GL entries if incorrect

**"Liability accounts not balanced"**
- Verify deduction/tax setup is complete
- Ensure employees have correct tax/deduction config
- Check GL liability accounts created

## Best practices

- **Separate accounts by type** - Use different GL accounts for salary vs. hourly vs. commission
- **Track by department** - Allocate to departments for cost analysis
- **Year-end reconciliation** - Verify GL totals match W-2s and tax filings
- **Archive GL entries** - Keep records of all payroll GL postings
- **Regular review** - Monitor GL accounts monthly for errors
- **Maintain chart of accounts** - Keep account descriptions current

## What's next

- **[GL integration overview](gl-integration-overview.md)** - GL integration concepts
- **[Payroll journal](payroll-journal.md)** - GL journal entry review
- **[Pay type setup](pay-types-setup.md)** - Pay type configuration
