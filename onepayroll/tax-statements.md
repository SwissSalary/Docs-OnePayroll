---
title: Tax statements and W-2 reporting
description: Learn how to prepare and file W-2 tax statements and year-end tax reporting in OnePayroll.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Tax statements and W-2 reporting

OnePayroll handles W-2 preparation and year-end tax reporting for federal and state compliance.

## W-2 overview

**Form W-2 reports:**
- Employee wages (boxes 1, 5, 3, 5a, etc.)
- Federal/state/local income tax withheld
- Social Security and Medicare wages/taxes
- Other compensation
- Employer information

**Who needs W-2s:**
- All current and former employees who received wages
- Any employee with > $0 in taxable wages
- Even if no taxes withheld (must still report)

**Filing requirements:**
- **Employees:** W-2 copies 1&B, 2, and B due Jan 31
- **IRS:** Form W-3 (transmittal) and W-2s due Jan 31
- **States:** State copies due per state (typically Jan 31)

## Preparing W-2s in OnePayroll

### Step 1: Verify year-end data

Before generating W-2s:

1. Confirm all payroll processed for year
2. Verify employee information:
   - Name spelling
   - SSN (last 4 digits)
   - Address
   - Employment status (active/terminated)
3. Review compensation:
   - All wages recorded
   - Correct pay types allocated
   - Benefits/deductions classified correctly

### Step 2: Generate W-2 report

**To generate W-2s:**

1. Search for **W-2 Report** (or Tax Year Closing)
2. Set **Tax Year** = Calendar year
3. Select **Generate W-2s**
4. OnePayroll calculates:
   - Box 1: Wages subject to federal tax
   - Box 2: Federal income tax withheld
   - Box 3: Wages subject to FICA (Social Security)
   - Box 4: Social Security tax withheld
   - Box 5: Medicare wages
   - Box 6: Medicare tax withheld
   - Boxes 18-20: State/local wages and taxes
   - Other boxes as applicable

### Step 3: Review W-2 data

**Before filing, verify:**

1. **Employee information:**
   - Name matches last known name
   - SSN accurate
   - Address current or last known

2. **Wage amounts:**
   - Box 1 total reasonableness
   - FICA wages (should equal or exceed Box 1)
   - Box 5 (Medicare) typically equals Box 3

3. **Tax amounts:**
   - Federal withholding (Box 2) matches deposits made
   - FICA taxes match (4.0% + employer 6.2% for SS)
   - State/local accurate
   - Reconcile to annual T-1040 report

4. **Special situations:**
   - Terminated employees (check final pay included)
   - New hires (verify start date and first pay)
   - Multi-state employees (state boxes assigned correctly)

### Step 4: Correct errors

If W-2 contains errors:

**Minor corrections (before filing):**
- Regenerate W-2
- Make correction and reprocess
- No filing needed

**After filing (W-2c):**
- File Form W-2c (corrected W-2)
- Due within same timeframe as original
- Explains what was corrected

## Filing W-2s

### Federal filing

**To file federal W-2s:**

1. Prepare W-3 (transmittal):
   - Total wages (sum of all W-2 Box 1)
   - Total federal withheld (sum of all W-2 Box 2)
   - Total FICA wages and taxes
   - Employer information

2. Submit to IRS:
   - **Paper filing:** Mail W-3 and W-2s (Copy A)
   - **Electronic filing:** File through WOTC or approved processor
   - **Deadline:** January 31

3. Keep copies:
   - Copy 1 (employee)
   - Copy 2 (employee for state)
   - Copy C (employer record)

### State filing

**Steps vary by state:**

1. File state W-2 equivalent (if required)
   - Most states use federal W-2
   - Some require state-specific form
   - Deadlines typically Jan 31 (some may differ)

2. Submit with:
   - State cover sheet/transmittal
   - W-2s with state information (Boxes 18-20)
   - Reconciliation of state withheld vs. deposits

### Employee distribution

**To deliver W-2s to employees:**

1. Print W-2s (Copies B and 2):
   - Copy B: Employee for federal return
   - Copy 2: Employee for state return
2. Distribute by Jan 31
3. Keep delivery list/confirmation
4. Send replacement if requested

## Quarter-end tax compliance

### Form 941 (Quarterly)

**File quarterly:**
- Report payroll for quarter
- Report federal withholding and FICA
- Reconcile to deposits made
- Deadlines: Apr 30, Jul 31, Oct 31, Jan 31 (following year)

**OnePayroll support:**
- Generates 941 report
- Calculates totals by quarter

### Form 940 (Annual)

**File annually for FUTA (Federal Unemployment Tax):**
- Wage base: $7,000 per employee
- Rate: 0.6% (after state unemployment credit)
- Due: Jan 31 following year
- Reconciles to quarterly 941 filings

## Multi-state W-2 considerations

For employees in multiple states:

**Wage apportionment:**
- Wages allocated to state where work performed
- OnePayroll tracks by state
- W-2 Boxes 18-20 show state allocation

**Example:**
```
Employee works 80% in NY, 20% in NJ
Total wages: $50,000
NY wages: $40,000
NJ wages: $10,000
State withholds calculated per state
```

**Multi-location employees:**
- Assign primary home state
- Note work locations
- Ensure tax calculation accounts for all states

## 1095-B Reporting (Health Insurance)

If providing health insurance:

**Report benefits:**
- Form 1095-B shows coverage offered
- Due: March 31 (copies to employees by Jan 31)
- Names, coverage months, employer info
- File with IRS through WOTC or processor

## Year-end closing

**After W-2 filing:**

1. Archive all W-2 documentation
2. Reconcile 941 deposits to annual W-2 totals
3. Close payroll year in system
4. Begin new tax year setup
5. Review for any adjustments needed

## Troubleshooting

**"W-2 Box 1 doesn't match expected"**
- Verify all pay periods processed
- Check for adjustments/reversals
- Confirm pay types classified correctly
- Review bonuses/special compensation

**"State W-2 info blank"**
- Verify employee state assignment
- Confirm state setup in system
- Regenerate if data missing

**"FICA calculation seems off"**
- Social Security: Check wage base limit ($168,600 in 2024)
- Medicare: No limit, should equal or exceed SS wages
- Additional Medicare: 0.9% on wages over threshold
- Employer match: Match withholding amounts

## Best practices

- **Verify W-4s** - Confirm periodically throughout year
- **Regular reconciliation** - Monthly match payroll to tax deposits
- **Timely filing** - File before Jan 31 deadline
- **Archive copies** - Keep W-2 copies minimum 7 years
- **Employee communication** - Distribute W-2s promptly
- **Year-end review** - Reconcile all tax accounts before closing year

## What's next

- **[Income tax setup](income-tax-setup.md)** - Employee tax information
- **[Tax calculations setup](tax-calculation-setup.md)** - Tax configuration
- **[Payroll processing](payroll-runs-process.md)** - Payroll run details
