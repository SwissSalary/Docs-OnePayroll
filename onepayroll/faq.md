---
title: Frequently asked questions
description: Find answers to common OnePayroll questions about setup, processing, and compliance.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: article
ms.date: 02/23/2026
---

# Frequently asked questions

Common questions about OnePayroll configuration, processing, and operations.

## Setup and configuration

### Q: How do I get started with OnePayroll?

A: Follow these steps:
1. Set up **Pay Groups** and **Pay Cycle Schedules**
2. Create **Pay Types** (regular, overtime, bonuses, deductions)
3. Configure **Benefit Types** (if offering benefits)
4. Set up GL accounts and **Payroll Setup**
5. Configure **Tax Settings** (federal, state, local)
6. Create employees with compensation and tax information
7. Test with sample payroll before production

See [Getting started guide](getting-started.md) for detailed steps.

### Q: Can I have multiple pay cycles in my company?

A: Yes. OnePayroll supports multiple pay groups/cycles:
- Weekly (52 periods)
- Biweekly (26 periods)
- Semi-monthly (24 periods)
- Monthly (12 periods)
- Custom frequencies

Each employee assigned to a pay group determines their payroll frequency.

### Q: Do I need to set up GL accounts?

A: Yes. OnePayroll requires GL account mapping for:
- Expense accounts (where wages post)
- Payable accounts (taxes, deductions)
- Cash account (net pay)

This ensures payroll integrates with accounting.

### Q: Can multiple companies share payroll data?

A: No. OnePayroll is company-specific. Each company maintains separate:
- Employees
- Payroll runs
- GL accounts
- Tax setups

Multi-entity companies need separate OnePayroll configuration per company.

## Payroll processing

### Q: How often do I need to run payroll?

A: Depends on your pay frequency:
- **Weekly** - Every 7 days (52 times/year)
- **Biweekly** - Every 14 days (26 times/year)
- **Semi-monthly** - Twice per month (24 times/year)
- **Monthly** - Once per month (12 times/year)

Payroll automatically calculates based on pay cycle schedule.

### Q: Can I process payroll for partial periods?

A: Yes. Use OnePayroll's partial period processing for:
- New hire first partial period
- Terminated employee final partial period
- Special situations (leave of absence, etc.)

Specify period dates when creating payroll run.

### Q: What if I make a mistake in a posted payroll?

A: Options:
1. **Before posting:** Delete payroll run, correct, reprocess
2. **After posting:** Reverse and reprocess
   - Create reversal journal entry
   - Process corrected payroll
   - Net effect: Correct payroll

Reversals affect GL and tax records accordingly.

### Q: Can I process payroll retroactively?

A: Yes, but with care:
- Specify historical pay period dates
- Process as normal
- Be aware of tax/benefit implications
- Edit GL entries if needed for proper period assignment

Document reason for retroactive processing.

### Q: Do I need to approve payroll before posting?

A: Yes (recommended best practice):
1. Payroll created and calculated
2. Management reviews paychecks
3. Manager approves if correct
4. GL entries generated upon approval
5. Final GL posting to ledger

This provides controls and audit trail.

## Employees and compensation

### Q: How do I convert a salaried employee to hourly?

A: Change employee type:
1. Open employee
2. Change **Employee Type** = Hourly
3. Specify **Hourly Rate**
4. Changes effective next payroll

Snapshot captures the change for audit trail.

### Q: Can an employee have multiple pay methods?

A: Yes. OnePayroll supports split payments:
- **Method 1:** Direct deposit to checking
- **Method 2:** Direct deposit to savings
- **Method 3:** Check payment (partial amount)

Allocate each method by fixed amount or percentage.

### Q: How do I add a mid-year bonus?

A: Create bonus pay type or entry:
1. Define **Bonus Pay Type** (if new)
2. Create **Payroll Entry** for employee
   - Pay Type = Bonus
   - Amount = Bonus amount
3. Process in next payroll
4. Bonus included in gross, taxed normally

### Q: What if an employee has two jobs at my company?

A: OnePayroll typically assumes one position per employee. For multiple positions:
- Create separate employee records (if independent)
- Or track positions/pay rates separately within single employee
- Consult with support for complex scenarios

### Q: Can I track years of service?

A: Yes. OnePayroll tracks:
- **Hire Date** - When employee started
- **Termination Date** - When employee left (if applicable)
- **Service History** - Snapshots capture tenure at each period

Use for benefits eligibility, vesting, reporting.

## Deductions and benefits

### Q: How do I set up employee health insurance deductions?

A: Configure benefit deduction:
1. Create **Benefit Type** (e.g., "Health Insurance")
2. Define deduction:
   - Pre-tax or post-tax
   - Amount (fixed or percentage)
   - Calculation basis
3. Enroll employees in benefit
4. Deduction withheld from paycheck

See [Benefits setup](benefits-setup.md) for details.

### Q: Can deductions exceed net pay?

A: Validation rules prevent this by default. If a deduction would exceed net pay:
- Payroll processing stops with error
- Correct employee deduction amount
- Retry processing

This protects against erroneous large deductions.

### Q: How do I handle garnishments?

A: Garnishments managed separately:
1. Create **Garnishment** record
2. Specify garnishment details:
   - Type (child support, judgment, etc.)
   - Amount (fixed or percentage)
   - Priority
   - Payment destination
3. Withheld from each paycheck
4. Track and remit to payee

See [Garnishments](garnishments.md) for complete workflow.

## Taxes

### Q: How do I verify federal tax withholding is correct?

A: Validate tax setup:
1. Verify **W-4 information** on employee (filing status, credits)
2. Run **Tax Calculation** report
3. Compare to expected withholding (IRS tables or calculator)
4. If discrepancy, adjust W-4 credits or extra withholding

Reconcile quarterly with IRS Form 941.

### Q: What if an employee moves to a different state?

A: Update employee's state residency:
1. Open employee
2. Change **State** = New state
3. Obtain new **State W-4**
4. Enter state tax information
5. Change effective next payroll

MultiState taxes processed automatically per new state.

### Q: Are tax deposits automatic?

A: No. OnePayroll calculates amounts owed, but you must:
1. Review tax deposits calculated in reports
2. Deposit via:
   - EFTPS (Electronic Federal Tax Payment System)
   - Bank ACH
   - Mail check with 941-V voucher
3. Verify deposit posted to IRS account

Schedule deposits per IRS requirements (usually monthly).

### Q: How do I file quarterly Form 941?

A: Use OnePayroll's quarterly reporting:
1. Run **Quarterly Report (Form 941)** after final payroll of quarter
2. Review totals:
   - Number of employees
   - Total wages
   - Total withholding
3. File with IRS (paper or e-file)
4. Keep copies for records

See [Tax reports](tax-reports.md) for details.

## Reporting

### Q: What reports should I run monthly?

A: Standard monthly reports:
1. **Payroll Summary** - Overview of payroll costs
2. **GL Reconciliation** - Match payroll to GL posting
3. **Tax Deposit Tracking** - Verify taxes deposited
4. **Payable Reconciliation** - Track outstanding liabilities

Automate to run end-of-month.

### Q: How do I export payroll data?

A: OnePayroll supports multiple export formats:
- **Excel** - For spreadsheet analysis
- **CSV** - For third-party system import
- **PDF** - For printing/archiving
- **GL export** - Direct to GL import

Export from reports or use API.

### Q: Can I compare payroll across periods?

A: Yes. Most reports include:
- **Period filters** - Choose date range
- **Comparison columns** - Prior year, budget variance
- **Trend analysis** - Multiple periods side-by-side
- **Export for analysis** - Use Excel/tools

Department and pay type breakdowns available.

## Troubleshooting

### Q: Paycheck amount doesn't match my calculation

A: Verify:
1. Employee **pay rate** and **pay unit** correct
2. **Hours worked** entered correctly (for hourly)
3. **Deductions and taxes** calculated properly
4. **Tax setup** matches employee W-4
5. No manual adjustments in payroll

Run **payroll entry detail report** to trace each component.

### Q: GL posting shows wrong account

A: Check:
1. **GL Account assignment** on pay type
2. **Default accounts** in Payroll Setup
3. **Department allocation** if using
4. Verify account number correct

Create GL entry manually if system route wrong.

### Q: Employee can't log into self-service portal

A: Troubleshoot:
1. Verify employee account **activated** in portal
2. Check employee **status** = Active
3. Try **password reset**
4. Verify two-factor auth if enabled
5. Check browser/network (clear cache)

Contact IT if persists.

## Best practices

- **Process payroll on schedule** - Consistent timing builds compliance
- **Review before posting** - Always review before finalizing
- **Reconcile monthly** - Payroll to GL reconciliation
- **Archive records** - Minimum 7 years
- **Update info annually** - W-4s, tax status, benefits
- **Test changes before production** - New pay types, rates, etc.
- **Document procedures** - Written payroll procedures
- **Secure data** - Payroll data is sensitive; control access

## Getting additional help

- **Documentation** - Read specific topic guides
- **Built-in Help** - Windows Help menu
- **Training** - Scheduled training sessions
- **Support** - Contact support@onepayroll.com

## What's next

- **[Getting started](getting-started.md)** - Setup steps
- **[Errors and troubleshooting](errors-troubleshooting.md)** - Error resolution
- **[US localization](us-localization.md)** - US-specific features
