---
title: Set up payroll runs
description: Configure general ledger accounts, payroll posting rules, and settings needed to process payroll runs.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Set up payroll runs

Before you can process payroll, you need to configure general ledger accounts and payroll posting rules.

## Configure payroll GL accounts

Payroll transactions post to specific general ledger accounts. You must have GL accounts set up for:

### Salary and wage expense accounts
- Regular salary
- Hourly wages
- Overtime
- Bonuses
- Commissions

### Tax and statutory deduction accounts
- Federal income tax payable
- State income tax payable
- FICA (Social Security and Medicare)
- Unemployment insurance

### Voluntary deduction accounts
- Health insurance deductions
- Retirement plan deductions
- Employee benefits

### Payables accounts
- Employee payroll payable (net pay liability)
- Employer tax liabilities
- Benefit provider payables

### Employer expense accounts
- Employer FICA (company portion)
- Employer unemployment insurance
- Employer benefit costs

### Special accounts
- Garnishment payables (if applicable)
- Employee advances/loans (if applicable)
- Suspense accounts for reconciliation

## Set up pay type GL account mapping

Each pay type must be mapped to a GL account. When payroll is posted, amounts for that pay type are posted to its designated account.

**To set up GL accounts for pay types:**

1. Search for **Pay Types**
2. Open or create a pay type
3. On the **Posting** tab, select the **GL Account** where this pay type should post
4. Specify **Debit** or **Credit** direction:
   - Earnings typically debit an expense account
   - Deductions typically debit a liability account
5. Save

**Example pay type GL mappings:**

| Pay Type | GL Account | Direction |
|----------|-----------|-----------|
| Regular Pay | Salary Expense (6000) | Debit |
| Overtime Pay | Overtime Expense (6010) | Debit |
| Federal Income Tax | Federal Income Tax Payable (2100) | Credit |
| Health Insurance | Health Insurance Payable (2110) | Credit |
| FICA | FICA Payable (2120) | Credit |

## Configure payroll posting rules

Payroll posting rules determine how payroll entries aggregate and post to GL accounts.

**To configure posting rules for a pay group:**

1. Search for **Pay Groups**
2. Open or create a pay group
3. On the **Posting** tab:
   - Specify the **GL Account Mapping** method (One account per pay type, Consolidated account, etc.)
   - Select whether to post gross pay, net pay, or both
   - Configure rounding rules if needed
4. Save

## Set up payroll periods

Payroll periods are calculated automatically based on your pay cycle configuration. However, you can manually override period dates if needed.

**To view and manage payroll periods:**

1. Search for **Payroll Periods**
2. Review the list of periods generated from your pay cycle
3. If needed, manually adjust period start/end dates
4. Create special periods for irregular payroll events

## Configure employee GL account mapping

Some scenarios require mapping GL accounts at the employee level (e.g., if different departments post to different GL accounts).

**To set up employee-level GL mappings:**

1. Search for **Employees**
2. Open an employee record
3. On the **OnePayroll** tab, select **GL Account Mapping**
4. Map specific pay types to GL accounts for this employee
5. Save

When this employee's payroll is posted, it uses their specific GL account mapping instead of the default.

## Set up approval workflows (optional)

To require payroll approval before posting, you can configure an approval workflow.

**To enable payroll approval workflow:**

1. Search for **Payroll Setup**
2. Enable **Require Approval Before Posting**
3. Assign approvers (typically, payroll manager or HR manager)
4. Save

With approval enabled, payroll runs must be approved by a designated user before posting is allowed.

## Reconciliation setup

After posting payroll, you should reconcile GL accounts to ensure accuracy.

**To set up reconciliation accounts:**

1. Search for **Reconciliation Setup**
2. Configure **Reconciliation Accounts**:
   - Select GL accounts that should be reconciled after each payroll
   - Set reconciliation rules (actual vs. calculated amounts should match)
3. Save

After posting, verify that:
- Total debits to expense accounts = Total credits to payables accounts
- All GL accounts affected by payroll have been updated
- No entries posted to suspense or clearing accounts

## Configure calculation settings

OnePayroll calculation settings control how payroll is calculated.

**To configure calculation settings:**

1. Search for **Payroll Setup**
2. Configure:
   - **Rounding Method** (Round to nearest cent, Round down, Round up)
   - **Tax Withholding Calculation** (Tax engine to use: Vertex, Symmetry, etc.)
   - **Benefit Calculation Order** (Order in which benefits are applied)
   - **Garnishment Priority** (Order in which garnishments are applied)
3. Save

## Archive and retention settings

Configure how completed payroll runs are archived and retained.

**To configure archive settings:**

1. Search for **Payroll Setup**
2. Configure:
   - **Archive Payroll After** (Days/months before moving to archive)
   - **Retention Period** (How long to retain archived payroll)
   - **Purge Payroll Entry Details** (After how many periods)
3. Save

## Testing your setup

Before processing your first production payroll, run a test payroll to validate all settings.

**To test payroll setup:**

1. Create a **Payroll Run** for a small group of employees
2. Process through all statuses (Open → Approved → Posted)
3. Verify GL postings:
   - Check that entries posted to correct accounts
   - Confirm debit/credit balance
   - Reconcile employee pay totals
4. Void the test payroll if needed
5. Adjust settings based on test results
6. Process production payroll with confidence

## Troubleshooting setup

### "GL Account not found" error
Ensure all pay types have GL accounts assigned, and those GL accounts exist and are active in your chart of accounts.

### Payroll postings not balanced
Check that GL account mapping is correct. Total earnings should equal total deductions + net pay.

### Approval workflow not working
Verify approvers are assigned in Payroll Setup, and approval workflow is enabled.

### Wrong GL accounts posting
Verify GL account mapping at both pay type level and employee level. Employee-level mappings override pay type defaults.

## Next steps

Now that setup is complete:

- **[Process payroll runs](payroll-runs-process.md)** - Create and calculate your first payroll
- **[About pay types](pay-types-overview.md)** - Understand how pay types are configured
- **[Set up pay types](pay-types-setup.md)** - Create earnings and deduction categories
