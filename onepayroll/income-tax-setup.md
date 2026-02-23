---
title: Set up income tax withholding
description: Learn how to configure employee income tax withholding information (W-4s, federal, state, local).
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Set up income tax withholding

Configure employee tax information including W-4s and state/local tax data for accurate withholding.

## Federal income tax W-4 setup

### 2024 Form W-4 information

**To enter federal W-4 information:**

1. Open employee
2. On **Tax** tab, enter **Federal W-4:**
   - **Filing Status** = Single, Married Filing Jointly, Married Filing Separately, Head of Household, or Qualifying Widow(er)
   - **W-4 Version** = 2024 (or current year)
3. Enter Form W-4 Line items:
   - **Line 3: Tax Credits** = Dollar amount from form (children, CDCC, etc.)
   - **Line 4a: Other Income** = Total non-wage income
   - **Line 4b: Deductions** = Total itemized deductions (if > standard)
   - **Line 4c: Extra Withholding** = Additional per-check withholding
4. Save

### Filing status options

**Single**
- Single, divorced, or legally separated
- Standard federal withholding rates apply

**Married Filing Jointly**
- Married, both file joint return
- Typically lowest withholding

**Married Filing Separately**
- Married, file separate returns
- Higher withholding rates
- Less common

**Head of Household**
- Unmarried, supports dependent
- Favorable tax brackets
- Provide documentation if claimed

**Qualifying Widow(er)**
- Surviving spouse (2 years after spouse death)
- Married rate applies

### Calculating tax credits (Line 3)

**Common credits to report:**
- **Child Tax Credit** = $2,000 per child under 17
- **Credit for other dependents** = $500 per dependent
- **Child and Dependent Care Credit** = Up to $2,400 (varies by situation)

**Example:**
```
Employee has 2 children: 2 × $2,000 = $4,000
Employee enters: Line 3 = $4,000
OnePayroll reduces withholding accordingly
```

### Other income (Line 4a)

**If employee has:**
- Spouse's job income
- Business income (self-employed)
- Investment income
- Rental income
- Retirement distributions

**Action:**
- Employee estimates total for year
- Enters on Line 4a
- OnePayroll increases federal withholding

### Deductions (Line 4b)

**IF employee claims more than standard deduction:**
- Estimate itemized deductions
- Subtract standard deduction
- Enter difference on Line 4b
- OnePayroll adjusts withholding

**Standard deductions (2024):**
- Single: $14,600
- Married Filing Jointly: $29,200
- Head of Household: $21,900

### Extra withholding (Line 4c)

**To withhold additional amount:**
- Employee specifies amount per check
- Example: "Withhold additional $50 per paycheck"
- Useful if W-4 alone insufficient
- Ensures proper withholding for complex situations

## State income tax W-4 setup

### States with income tax

**Standard states requiring W-4:**
- NY, CA, IL, PA, MA, VA, NC, GA, OH, MI, WI, and others
- Use state-specific W-4 form

**To enter state W-4:**

1. Open employee **Tax** tab
2. Select **State** = Residence state
3. Enter **State W-4:**
   - **Filing Status** = State filing status
   - **Withholding** = State-specific items (varies by state)
4. Provide **State W-4 Document** (if required)
5. Save

### State-specific examples

**New York (NY-4):**
```
Line 1: Filing status
Line 2: Allowances/credits
Line 3: Other income
Line 4: Extra withholding
```

**California (DE 9):**
```
Line 1: Name, SSN, address  
Line 1a: Filing status
Line 2: Withholding
Line 3: Multiple jobs
```

**No state income tax states:**
- Alaska (AK)
- Florida (FL)
- Nevada (NV)
- South Dakota (SD)
- Tennessee (TN)
- Texas (TX)
- Washington (WA)
- Wyoming (WY)

**For these states:**
- Skip state W-4 entry
- Or set "No Tax" if system requires
- No state withholding calculated

### Moving to different state

If employee relocates:

1. Update **State** to new residence state
2. Obtain new state W-4 form
3. Employee completes new W-4
4. Enter new state tax information
5. Change takes effect next pay period

## Local income tax setup

### Cities/counties with local tax

**Examples of local income tax:**
- New York City (EmpWthld Form)
- Pennsylvania municipalities (some)
- Ohio municipalities (some)
- Maryland municipalities (limited)

**To set up local tax:**

1. Open employee **Tax** tab
2. If applicable, enter **Local/City:**
   - **City/Municipality** = Where employee works
   - **Withholding** = Local W-4 information (if different)
3. Save

### Local withholding determination

OnePayroll calculates if:
- **Work location** = City with income tax
- **Residence** = Inside or outside tax jurisdiction
- Rules vary: Some tax all earned in city, others only residents

## Multiple job considerations

### Employee with multiple jobs

**Required for proper withholding:**

1. Enter each job's income on W-4
2. Make notation in employee record: "Multiple Jobs Flag"
3. On primary job: Standard withholding
4. On secondary job: Employee may request higher withholding

**In OnePayroll:**
- Set **Multiple Jobs Flag** = Yes
- Increases federal withholding on current job to compensate
- Or employee requests extra withholding (Line 4c)

### Spouse's income

If spouse works:

1. Employee enters spouse's income on Line 4a (Other Income)
2. OnePayroll increases federal withholding
3. Spouse also enters in their W-4
4. Avoids both underpaying and over-withholding

## Dependent and allowance updates

### Annual review

**Best practice:** Review W-4 annually

**If employee status changes:**
- Birth of child → Reduce withholding (new credit)
- Marriage → May reduce withholding (married status)
- Divorce → May increase withholding (single status)
- Dependent reaches 17 → Lose credit
- Major life event → May require W-4 adjustment

### Estimated tax payments

For employees with:
- Self-employment income
- Investment income
- Other non-wage income

**May need quarterly estimated tax payments** instead of relying on withholding.

## Non-resident alien employees

### Special W-4 requirements

If employee is non-resident alien:

1. Different tax rules apply (FICA exemption possible)
2. Form 8233 may be required (treaty benefits)
3. Consult tax professional before setup
4. Special withholding applicable

## Verifying setup

**Before processing payroll with new employee:**

1. **W-4 on file** - Confirm current W-4 received
2. **Filing status entered** - Verify in system
3. **Tax credits accurate** - Confirm amounts
4. **State assigned** - Verify residence/work state
5. **Test calculation** - Run sample paycheck to verify tax

## Updating W-4 information

### During-year W-4 change

If employee submits new W-4:

1. Note **Effective Date** (usually next pay period)
2. Update employee tax information:
   - New filing status (if changed)
   - New credits/deductions (if changed)
   - New withholding (if changed)
3. Save effective immediately or on specified date
4. Affects next paycheck

### Retroactive changes

If error in W-4 discovered mid-year:

1. Correct employee record
2. Identify affected payrolls
3. Process adjustment payroll
4. Catch employees up on withholding difference
5. File Form 941-X (quarterly if needed) at year-end

## Troubleshooting

**"Federal tax calculation too high"**
- Verify filing status correct
- Confirm W-4 credits entered
- Check for multiple jobs flag
- Review other income/deductions

**"State withholding blank"**
- Verify state assigned
- Confirm state has income tax
- Check state W-4 entered
- Regenerate/test calculation

**"Tax different after W-4 change"**
- Verify new W-4 effective date
- Confirm all values updated
- Check past vs. present withholding
- May be temporary until catch-up

## Best practices

- **Obtain latest W-4** - Get current form each hire/change
- **Review annually** - Ask employees in December/January
- **Document changes** - Keep copies of all W-4s on file
- **Verify accuracy** - Review unusual withholding amounts
- **Multi-job coordination** - Ensure combined withholding adequate
- **State-specific care** - Verify each state's current rules

## What's next

- **[Tax calculations setup](tax-calculation-setup.md)** - Tax provider configuration
- **[About tax calculations](tax-calculation-overview.md)** - Tax concepts
- **[Employee setup](employee-setup.md)** - Employee configuration overview
