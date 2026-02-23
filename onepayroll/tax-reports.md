---
title: Tax and compliance reporting
description: Learn how to prepare tax reports and ensure payroll compliance.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Tax and compliance reporting

Prepare tax reports and ensure payroll compliance with federal and state requirements.

## Quarterly tax reporting

### Form 941 (Federal Payroll Tax Return)

**Purpose:** Report federal income tax and FICA for quarter

**File quarterly by:**
- April 30 (Q1: Jan-Mar)
- July 31 (Q2: Apr-Jun)
- October 31 (Q3: Jul-Sep)
- January 31 (Q4: Oct-Dec)

**To prepare Form 941:**

1. Run **Quarterly Wage Report** in OnePayroll
2. Reports:
   - Number of employees paid
   - Total wages paid
   - Total federal withholding
   - Total FICA (SS + Medicare)
   - Total employer match
3. Cross-check to GL tax payable accounts
4. File with IRS (paper or electronically)

**OnePayroll support:**
- Calculates totals by quarter
- Generates summary report
- Exports to tax preparation software

### 941-X (Amended Quarterly Return)

**If error found in filed 941:**

1. File 941-X to correct
2. Show corrected amounts vs. original
3. Due same timing as original
4. OnePayroll can flag discrepancies for correction

## Annual tax reporting

### W-2 and W-3 (Federal)

**Purpose:** Report annual wages and tax withholding by employee

**Due:** January 31

**To prepare:**

1. Run **W-2 Report** for calendar year
2. OnePayroll generates:
   - Box 1: Wages subject to federal tax
   - Box 2: Federal income tax withheld
   - Box 3: Wages subject Social Security
   - Box 4: Social Security tax withheld
   - Box 5: Wages subject Medicare
   - Box 6: Medicare tax withheld
3. Verify data accuracy
4. Generate W-3 (transmittal form)
5. File with IRS and provide to employees

### State tax reporting

**Each state has own requirements:**

| State | Form | Due Date | What's Reported |
|-------|------|----------|-----------------|
| New York | NYS-45 | Jan 31 | Wages, NY tax withheld |
| California | 1099 (or DE 9) | Jan 31 | Wages, CA tax withheld |
| Other states | Varies | Typically Jan 31 | Similar to federal |

**To prepare state reports:**

1. Filter W-2 data by state
2. Verify state-specific boxes
3. Run state-specific report (if available)
4. File per state instructions

### Federal Unemployment (FUTA)

**Form 940 - Annual Federal Unemployment Tax**

**Purpose:** Report FUTA tax exposure

**Due:** January 31

**To prepare:**

1. Calculate FUTA base ($7,000 per employee, 2024)
2. Report by state (varies by state unemployment credit)
3. OnePayroll can generate summary
4. Calculate amount owed (typically 0.6% federal after state credit)

## Multi-state compliance

### Multi-state employee reporting

**For employees working in multiple states:**

1. **Wage apportionment:**
   - Allocate wages by state where work performed
   - OnePayroll tracks by state

2. **State tax reporting:**
   - Each state gets employee's wages allocated to that state
   - File separate state returns or consolidated with apportionment detail

3. **Local tax reporting:**
   - Some cities/counties require separate reports
   - Track by location worked

### Reciprocal state agreements

**Some states have reciprocal agreements:**
- Employee works in state A but lives in state B
- May file only in home state
- Must verify agreement applies
- OnePayroll can flag for review

## Compliance checklist

### Monthly compliance

- [ ] Payroll GL entries posted
- [ ] Tax deposits made (or scheduled)
- [ ] Payable accounts reconciled
- [ ] No payroll liabilities overdue

### Quarterly compliance (by March 31, June 30, Sept 30, Dec 31)

- [ ] Form 941 filed
- [ ] All tax deposits current
- [ ] State quarterly reports filed (if required)
- [ ] Garnishment payments made
- [ ] Verify no over/under withholding

### Annual compliance (by January 31)

- [ ] W-2s issued to employees
- [ ] W-3 filed with federal government
- [ ] State W-2 equivalents filed
- [ ] Form 940 filed
- [ ] 1095-B (health insurance) filed (if applicable)
- [ ] All payroll adjustments complete

## Multi-location compliance

For companies with multiple locations/states:

**Additional requirements:**
- **State employer registration** - Register in each state
- **Tax registration** - Separate tax accounts by state
- **Workers comp** - May be separate per state
- **Unemployment insurance** - May be separate per state

## Wage garnishment compliance

### Garnishment reporting

**If employees have wage garnishments:**

1. Track garnishments by type:
   - Child support
   - Alimony
   - Court judgments
   - Tax levies

2. Report compliance:
   - Amount withheld matches court order
   - Paid timely to court/payee
   - Documentation filed
   - Employee notified

3. OnePayroll tracks:
   - Garnishment amounts
   - Payment dates
   - Payee information
   - Legal order copies

## Benefit plan compliance (if applicable)

### 1095-B (Health Insurance)

**If offering health insurance:**

1. Determine who receives offer
2. Generate 1095-B form
3. Distribute to employees by Jan 31
4. File with IRS by March 31

**OnePayroll can track:**
- Employees with coverage
- Coverage months
- Employer contribution amounts

### 5500 or 8889 (Retirement/HSA plans)

**If offering plans:**
- Dependent on plan type
- Different filing requirements
- Coordinate with plan administrator/provider

## Backup withholding

### When 941-V (payment voucher) required

If making tax deposits:

1. Print Form 941-V with payment
2. Pay via:
   - EFTPS (Electronic Federal Tax Payment System)
   - Bank ACH
   - Mail with 941-V voucher
3. OnePayroll helps track deposits

## Electronic filing

### IRS e-Services

**Electronic filing options:**

1. **File directly with IRS:**
   - Create IRS account
   - Submit W-2s electronically
   - Submit Form 941 electronically

2. **Use approved payroll provider:**
   - Provider files on your behalf
   - Less work, more reliable
   - Verify provider credentials

3. **Use tax software:**
   - Prepare in software
   - Software files with IRS
   - Automatic validation

OnePayroll can integrate with major tax software for submission.

## Year-end closing

**After all payroll for year processed:**

1. Verify all W-2 data complete
2. Reconcile GL to W-2s totals
3. Ensure all deposits made match calculations
4. Archive all payroll/tax records
5. Run year-end tax analysis
6. File all outstanding tax forms
7. Close payroll year in system

## Troubleshooting

**"W-2 total doesn't match GL"**
- Check for adjustments/reversals not in GL
- Verify payroll period (calendar vs. business year)
- Reconcile GL entries line by line

**"Tax deposits don't match quarterly totals"**
- Verify deposit dates (may be in different quarter)
- Check for timing differences
- Reconcile to bank statements

**"Form filing deadline passed"**
- File immediately
- May incur penalties
- Consider filing amended form
- Contact IRS if payment due

## Best practices

- **Calendar reminders** - Set reminders for quarterly and annual deadlines
- **Automation** - Use OnePayroll tax reporting features
- **Early filing** - File early rather than waiting until deadline
- **Professional review** - Have CPA review tax reports annually
- **Document retention** - Keep all tax records minimum 7 years
- **System reconciliation** - Monthly reconcile to GL

## What's next

- **[Payroll reports](payroll-reports.md)** - Operation reporting
- **[Tax statements](tax-statements.md)** - W-2 preparation
- **[Payroll processing](payroll-runs-process.md)** - Step-by-step payroll
