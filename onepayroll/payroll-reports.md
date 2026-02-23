---
title: Payroll operation reports
description: Learn how to run payroll operation reports for analysis and management.
author: zeande
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Payroll operation reports

Run payroll operation reports to analyze payroll costs and distributions.

## Payroll Summary Report

**Purpose:** Overview of payroll run costs

**To run:**
1. Search for **Payroll Summary Report**
2. Enter date range or select payroll run
3. Select employees (or all)
4. Generate

**Shows:**
- Total gross wages by employee/department
- Total deductions (benefits, garnishments, etc.)
- Total taxes (federal, FICA, state, local)
- Total net pay
- Total employer taxes (if included)

**Use for:**
- Budget vs. actual comparison
- Payroll cost trending
- Variance analysis
- Management reporting

## Paycheck Register

**Purpose:** List of all issued paychecks

**To run:**
1. Search for **Paycheck Register**
2. Select pay period
3. Choose payment method filter (Direct Deposit, Check, Both)
4. Generate

**Shows:**
- Employee name and ID
- Check or ACH number
- Gross amount
- Deductions
- Net amount
- Payment date
- Method (DD, Check)

**Use for:**
- Verify all employees paid
- Check for duplicate paychecks
- Reconcile to bank account
- Review before distribution

## Payroll Entry Detail Report

**Purpose:** Individual pay type transactions

**To run:**
1. Search for **Payroll Entry Detail**
2. Select date range
3. Filter by:
   - Employee (optional)
   - Department (optional)
   - Pay Type (optional)
4. Generate

**Shows per employee:**
- Each pay type line (Regular Wages, Overtime, Bonus, etc.)
- Amount for each
- Hours (if hourly)
- Each deduction line
- Each tax line

**Use for:**
- Detailed transaction review
- Reconcile specific pay type
- Investigate discrepancy
- Audit trail for specific transactions

## Department Payroll Report

**Purpose:** Payroll costs by department

**To run:**
1. Search for **Department Payroll Report**
2. Enter period
3. Select departments (or all)
4. Generate

**Shows:**
- Department name
- Number of employees
- Total gross wages
- Total deductions
- Total net pay
- Department-specific employer costs

**Use for:**
- Departmental cost accounting
- Budget allocation
- Cross-department comparison
- Profitability analysis (by department)

## YTD (Year-to-Date) Earnings Report

**Purpose:** Cumulative employee earnings

**To run:**
1. Search for **YTD Earnings Report**
2. Select employees (or all)
3. By date (shows YTD through selected date)
4. Generate

**Shows per employee:**
- YTD gross wages (all pay types)
- YTD taxes withheld (federal, FICA, state)
- YTD deductions
- YTD net (total paid)

**Use for:**
- Verify individual earnings
- Reconcile to W-2 (year-end)
- Identify high earners (bonus eligibility, etc.)
- Employee compensation verification

## Employee Compensation Report

**Purpose:** Detailed employee-level analysis

**To run:**
1. Search for **Employee Compensation Report**
2. Select employee(s)
3. Choose period
4. Include comparisons (YTD, prior year, etc.)
5. Generate

**Shows:**
- Salary vs. overtime mix
- Bonus/commission portions
- Total benefits value (employer-funded)
- Effective tax rate
- Turnover/tenure data

**Use for:**
- Management compensation review
- Salary benchmarking
- Benefits value communication to employees
- Executive reporting

## Verification reports

### Duplicate Payment Check

**Purpose:** Identify duplicate paychecks

**To run:**
1. Search for **Duplicate Payment Report**
2. Select date range
3. Generate

**Shows:**
- Possible duplicates (same employee, amount, date)
- Allows selective reversal if needed

### Payment Method Verification

**Purpose:** Verify payroll payments by method

**To run:**
1. Search for **Payment Method Report**
2. Period and payment method filter
3. Generate

**Shows:**
- Checks: Check numbers, amounts, names
- Direct Deposit: Employee, bank, amount
- Counts and totals by method

## Export reports for analysis

### Excel export

**To export payroll data:**

1. Run any report
2. After generating, select **Export to Excel**
3. Opens in spreadsheet
4. Can manipulate data further (pivot tables, charts, etc.)

**Useful for:**
- Multi-period trend analysis
- Department comparisons
- Salary range analysis
- Benefits cost breakdown

### Archiving reports

**Best practice:** Archive regularly

1. Run report at period end
2. Export to PDF (preserves formatting)
3. File by period (month, year)
4. Keep minimum 7 years

## Custom reports

### Creating custom reports

If standard reports insufficient:

1. Work with IT/consultant to create custom report
2. Could include:
   - Specific metrics for your business
   - Connected to other data (projects, customers, etc.)
   - Scheduled/automated distribution

## Troubleshooting reports

**"Report shows no data"**
- Verify date range includes payroll
- Check filters aren't too restrictive
- Confirm payroll posted to GL
- Try expanding date range

**"Amount doesn't match payroll run"**
- Verify report period
- Check filters (department, employee, pay type)
- Confirm payroll approved and posted
- Reconcile manually if needed

**"Employee missing from report"**
- Verify employee in payroll period
- Check if filtered out (department, employee type)
- Confirm employee has pay entries
- Check employee status (active/inactive)

## Best practices

- **Run regularly** - Weekly/monthly reports for oversight
- **Archive reports** - Keep records for compliance
- **Reconcile reports** - Match GL and payroll totals
- **Review details** - Don't just look at totals; verify details
- **Follow-up** - Investigate unusual amounts
- **Document** - Note any corrections or adjustments

## What's next

- **[Tax reports](tax-reports.md)** - Tax and compliance reporting
- **[Process payroll runs](payroll-runs-process.md)** - Payroll processing overview
- **[GL integration](gl-integration-overview.md)** - GL posting and reconciliation
