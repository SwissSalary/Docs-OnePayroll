---
title: US localization and compliance
description: Learn about US-specific OnePayroll features, tax treatment, and compliance requirements.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: reference
ms.date: 02/23/2026
---

# US localization and compliance

US-specific OnePayroll features, requirements, and compliance information.

## Federal tax requirements

### Form W-4 and federal income tax

**2024 Form W-4:**
- Current version employees should complete
- Replaces older "withholding allowance" system
- Employee provides:
  - Filing status (Single, Married, Head of Household, etc.)
  - Tax credits (children, CDCC, dependents)
  - Other income adjustments
  - Extra withholding requests

**OnePayroll handles:**
- Standard calculation method (full W-4 calculation with brackets, deductions, and credits)
- Simplified calculation method (bracket-based lookup)
- Automatic withholding per configured tax rate tables

### FICA rules

**Social Security (6.2% employee, 6.2% employer):**
- Wage base: $168,600 (2024, subject to annual increase)
- OnePayroll stops withholding once limit reached
- Employer match continues regardless (must still pay)

**Medicare (1.45% employee, 1.45% employer):**
- No wage base limit - applies to all wages
- Additional Medicare Tax: 0.9% on wages over:
  - $200,000 (Single)
  - $250,000 (Married Filing Jointly)
  - $125,000 (Married Filing Separately)
- Employer match on Additional Medicare: 0.9%

### State and local income tax

**States with income tax:**
Most states (41) have income tax. States without:
- Alaska (AK)
- Florida (FL)
- Nevada (NV)
- South Dakota (SD)
- Tennessee (TN) - Interest/dividends only
- Texas (TX)
- Washington (WA)
- Wyoming (WY)
- New Hampshire (NH) - Interest/dividends only

**OnePayroll support:**
- State W-4 processing (each state form differs)
- Multi-state employee support
- Reciprocal agreement handling (if applicable)

**Local income tax:**
Some cities/counties impose:
- New York City (0.876%-3.876% range)
- PA municipalities
- OH municipalities
- MD municipalities

## Payroll tax deposits

### Federal tax deposits

**Timing:**
- **Semiweekly schedule** (most common) - Deposit by Wednesday or Friday
- **Monthly schedule** (if under $50,000 annual tax) - Deposit by 15th of next month

**Method:**
- EFTPS (Electronic Federal Tax Payment System)
- Bank ACH deposit
- Mail check with Form 941-V voucher (if authorized)

**OnePayroll support:**
- Calculates deposit amounts
- Tracks deposits made
- Reconciles to Form 941

### State tax deposits

**Varies widely by state:**
- Many states: Monthly deposits due by 15th
- Some states: Quarterly deposits
- Verify your state's specific requirements

**OnePayroll:**
- Reports state withholding
- Supports state filing

## Quarterly reporting (Form 941)

**File quarterly:**
- Q1: By April 30 (covers Jan-Mar)
- Q2: By July 31 (covers Apr-Jun)
- Q3: By October 31 (covers Jul-Sep)
- Q4: By January 31 (covers Oct-Dec)

**Reports:**
- Number of employees paid
- Total wages paid
- Federal income tax withheld
- Social Security and Medicare taxes (employee and employer)

**If error discovered:**
- File Form 941-X (amended return)
- Same filing deadline as original
- Show correction detail

## Annual reporting (W-2/W-3)

**Due January 31 following year:**
- **W-2:** One copy to IRS, two to employee (Copies 1&B, 2), one to state
- **W-3:** Transmittal form to IRS with all W-2s
- **State W-2 equivalent:** Per state requirements

**OnePayroll generates:**
- W-2 form with all required boxes
- W-3 transmittal automatically
- State copies if configured

**Boxes included:**
- Box 1: Federal wages
- Box 2: Federal income tax
- Box 3: Social Security wages
- Box 4: Social Security tax
- Box 5: Medicare wages
- Box 6: Medicare tax
- Boxes 18-20: State/local wages and taxes

## Federal Unemployment Insurance (FUTA)

**Form 940 - Annual filing:**
- Due January 31 following year
- **Wage base:** $7,000 per employee
- **Rate:** 0.6% federal (after state credit of up to 5.4%)
- Typical rate: 0.6% (if state credit available)

**Calculate:**
- Identify subject wages (up to $7,000 per employee)
- Sum across all employees
- Apply 0.6% rate

**OnePayroll support:**
- Calculates FUTA liability
- Generates Form 940 data
- State credit coordination

## State Unemployment Insurance

**Varies significantly by state:**
- Rates: 0.5% - 5.4% (varies by state and experience rating)
- Wage base: $7,000 - $46,000+ (varies by state)
- Some states: Employer only; some states: Employee+employer
- Quarterly or annual reporting

**Example rates (approximate):**
- New York: 2.4% - 3.4% on $27,300 base
- California: 1.5% - 4.0% employee + 1.5% -5.5% employer
- Texas: 0.42% - 5.4% (employer only)

**OnePayroll:**
- Tracks subject wages per state
- Supports state quarterly/annual reporting

## Garnishments and court orders

**Types of garnishments:**
- **Child support** - Family court order
- **Spousal support/Alimony** - Family court order
- **Wage garnishment** - Civil judgment
- **Tax levy** - IRS or state tax lien
- **Student loan** - Federal/private loan default

### Federal limits

**Garnishment cannot exceed (per federal law):**
- 25% of disposable income, OR
- Amount by which weekly disposable exceeds 30 times federal minimum wage ($7.25)
- Whichever is less

**Special rules:**
- Child support: Up to 50% (60% if past-due)
- Voluntary retirement: No limit

### Protection provisions

**OnePayroll tracks:**
- Garnishment priority (order of application)
- Protected amounts (FLSA requirements)
- Required remittance to payee/court
- Compliance with court order amounts

**Document required:**
- Copy of court order on file
- Amount and termination date
- Payee/court address for remittance

## Employee compensation

### Payment methods

**OnePayroll supports:**
- Direct deposit (ACH)
- Check (physical or electronic)
- Mixed (split between methods)

**Timing:**
- Must pay promptly on regular payday
- Minimum wage and overtime rules apply

### Minimum wage

**Federal minimum wage:** $7.25/hour (2024)
- States may have higher minimum (most do)
- OnePayroll enforces per state rules
- Tipped employees: May be lower if tips credited (varies by state)

**Overtime:**
- 1.5x regular rate for hours over 40/week (federal minimum)
- Some states/employers: More generous (double time, etc.)
- Salaried exempt: May not be subject (depends on duties test)

### Classification: Exempt vs. Non-Exempt

**Salaried employees:**
- May be "exempt" (no overtime required)
- Or "non-exempt" (overtime still required)
- Exempt status depends on:
  - Salary level (minimum $47,476/year federal, 2024)
  - Job duties (executive, administrative, professional, etc.)
  - Not all salaried employees are exempt

**OnePayroll consideration:**
- Employee type classification doesn't automatically set exempt status
- User responsible for ensuring proper classification
- Non-exempt salaried: May still require overtime calculation

## Deductions and allowances

### Required withholdings (cannot be waived)

- Federal income tax
- FICA (Social Security/Medicare)
- Court-ordered garnishments
- Court-ordered child support

### Voluntary deductions (may be authorized by employee)

- Health insurance premiums
- Retirement plan contributions (401k, etc.)
- Flexible Spending Account (FSA)
- Health Savings Account (HSA)
- Wage assignments (per agreement)
- Union dues

### Restrictions

- Deductions cannot reduce pay below federal minimum wage
- Progressive deductions if multiple garnishments
- Specific rules by state

## Benefit plan compliance

### Health insurance (if offered)

**1095-B (if self-insured or fully insured):**
- Due to employees: January 31
- Due to IRS: March 31
- Reports coverage offered
- Employee/dependent names and coverage months

### Employer plans (401k, etc.)

**Plan-specific filings:**
- Form 5500 (if plan has > 100 participants)
- Plan updates and amendments
- Summary Plan Description (SPD)

**OnePayroll:**
- May integrate with plan provider
- Tracks contributions
- Often plan provider handles filings

### HSA and FSA

**Compliance requirements:**
- 401h notice to employees
- Summary of benefits
- Claims substantiation
- Annual reporting

## Workplace posters and notices

**Required federally (post in workplace):**
- Equal Employment Opportunity (EEO) notice
- Family and Medical Leave Act (FMLA)
- Occupational Safety and Health (OSHA) poster
- Wage and hour rules
- State-specific: Varies (post state minimum wage, payday rules, etc.)

**OnePayroll:**
- Not responsible for posting (HR/Admin responsibility)
- Should be visible to all employees
- Update as laws change

## Verification of employment eligibility

**Form I-9 (Employment Eligibility Verification):**
- Required for all employees
- Employee and employer sign
- Verify identity document and work authorization document
- Keep on file minimum 3 years (I-9 retention required)

**E-Verify (optional but encouraged):**
- Electronic verification through federal system
- Some states require for certain employers
- Verify Social Security and employment authorization

## Payroll records retention

**Minimum retention: 3 years**
- Federal: 3 years minimum (some recommend 7)
- State: Varies (1-7 years depending on state)
- Best practice: 7 years

**Retain:**
- Payroll registers
- W-2s and tax returns
- Timesheets/hour records
- Tax deposits and payment records
- Employee records
- Garnishment documentation

## Multi-state considerations

**If employees in multiple states:**
- State-specific tax setup required
- Verify reciprocal agreements (if applicable)
- Register for unemployment insurance (each state)
- State-specific deductions/rules
- Track income/tax apportionment

**Remote/work-from-home employee:**
- State where work performed (usually employee's location)
- Or per company policy (verify with state)

## Common compliance issues

### Misclassification

**Employee vs. contractor (common issue):**
- IRS Form SS-8 determines status
- Employees: Subject to withholding
- Contractors: 1099 (no withholding)
- Heavy penalties for misclassification

**Exempt vs. non-exempt:**
- Salary alone doesn't make exempt
- Duties test must be satisfied
- Misclassification results in overtime liability

### Meal and rest breaks

**Not a federal requirement, but many states require:**
- Examples: CA, MA, OR, WA
- Paid vs unpaid varies by state
- OnePayroll doesn't specifically enforce (company responsibility)

### Wage and hour audits

**If audited:**
- IRS examines payroll records
- State audits timekeeping (overtime)
- Department of Labor (DOL) investigates misclassification
- Snapshots and historical records critical

## Best practices for US compliance

- **Stay current:** Tax laws change annually (W-4 versions, rates, etc.)
- **Document procedures:** Written payroll procedures
- **Track thoroughly:** Hours, deductions, garnishments
- **Reconcile:** Monthly payroll GL and tax reconciliation
- **File timely:** Don't miss tax filing deadlines
- **Retain records:** 7+ years minimum recommended
- **Employee communications:** Clear paystub explanations
- **Professional help:** Consider payroll service provider or accountant

## What's next

- **[Tax calculations](tax-calculation-overview.md)** - Tax calculation details
- **[Tax reporting](tax-reports.md)** - Quarterly and annual reports
- **[Payroll processing](payroll-runs-process.md)** - Payroll workflow
- **[Compliance checklist](tax-reports.md#compliance-checklist)** - Requirements tracking
