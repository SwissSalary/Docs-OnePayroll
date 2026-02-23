---
title: Set up tax calculations
description: Learn how to configure tax calculation providers and settings in OnePayroll.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Set up tax calculations

Configure OnePayroll to calculate accurate federal, state, and local taxes for your employees.

## Select tax calculation provider

**To configure your tax provider:**

1. Search for **Payroll Setup**
2. On **Tax Calculation** tab, select **Tax Provider:**
   - **Built-in (Mock)** - For testing (calculates basic federal only)
   - **Vertex** - Professional tax service (federal, state, local)
   - **Symmetry** - Alternative professional service
3. Save

### Tax provider comparison

| Feature | Built-in | Vertex | Symmetry |
|---------|----------|--------|----------|
| Federal income tax | Yes | Yes | Yes |
| State income tax | Limited | Yes | Yes |
| Local income tax | No | Yes | Yes |
| FICA (SS/Medicare) | Yes | Yes | Yes |
| Multi-state | Limited | Yes | Yes |
| Real-time updates | No | Yes | Yes |
| Setup complexity | Low | Medium | Medium |

**Recommendation:**
- **Testing:** Use Built-in
- **Production:** Use Vertex or Symmetry

## Configure tax calculation settings

### Federal tax setup

1. Search for **Payroll Setup**
2. On **Tax Calculation** tab:
   - **Method** = Method 1 (Percentage) or Method 2 (Wage Bracket)
   - **Tax Year** = 2024 (or current year)
   - **Standard Deduction** = Current standard deduction amount
3. Save

**For external providers:**
- Provider automatically uses current tax tables
- No manual configuration needed
- Service updates tables quarterly

### State tax configuration

If using Vertex or Symmetry:

1. Set up employee residence states
2. Configure any reciprocal tax states
3. Enter any state-specific information

**States with no income tax:**
- FL, TX, WA, WY, SD, NV, TN, AK, NH (dividends/interest only)
- Override to skip withholding: Set employee state to "No Tax"

### Local tax setup

For employees with local tax obligation:

1. Identify applicable local jurisdictions
2. Set on employee record
3. Provider calculates if configured

## W-4 and tax information setup

**To set employee tax information:**

1. Open employee
2. On **Tax** tab, enter:
   - **W-4 Status** = Filing status (Single, Married, Head of Household)
   - **W-4 Allowances** = Number of exemptions (older form)
   - **W-4 Credits** = Tax credits (2024 form)
   - **State W-4** = If applicable
   - **Additional Withholding** = Extra per-check withholding
3. Save

### Federal W-4 information (2024)
```
Line 1: Full name, address, SSN
Line 2: Filing status (Single, Married, Head of Household)
Line 3: Tax credits (children, CDCC, etc.)
Line 4a: Other income (spouse job, investment, etc.)
Line 4b: Deductions (not standard deduction)
Line 4c: Extra withholding per pay period
```

### State W-4 example (New York)
```
Line 1: Filing status
Line 2: Allowances/credits
Line 3: Additional withholding
```

## Multiple job handling

For employees with multiple jobs:

1. Ensure W-4s account for all income
2. Employee should maximize withholding on primary job
3. On secondary job: Indicate "Married with Multiple Jobs"
4. Higher federal withholding automatically applied

**Or in OnePayroll:**
- Set employee **Multiple Jobs Flag** = Yes
- Increase withholding on secondary job

## Tax table management

### For Vertex/Symmetry
- Authentication: Set up account credentials in Payroll Setup
- Automatic updates: Tables update quarterly (April, July, Oct, Jan)
- No manual intervention needed

### For Built-in provider
- Tax tables: Hardcoded (limited, for testing only)
- No updates: Use only for testing/demo environments

## Testing tax setup

**Before processing production payroll:**

1. **Create sample employee (federal only)**
   - Single, filing status 1
   - Federal W-4 only
   - Test paycheck calculation

2. **Verify federal tax**
   - Calculate expected federal tax manually
   - Compare to OnePayroll calculation
   - Should match IRS tables

3. **Test state calculation (if applicable)**
   - Add state residence
   - Verify state withholding appears
   - Compare to state tax tables

4. **Test multi-state (if applicable)**
   - Create employee with multiple states
   - Verify correct apportionment

## Troubleshooting

**"Tax provider not responding"**
- Verify internet connection
- Check provider credentials in Payroll Setup
- Verify account is active with provider
- Contact provider support if persists

**"Tax calculation seems low"**
- Verify W-4 information correct
- Check employee tax status
- Confirm tax year is current
- Review for W-4 adjustments (credits, extra withholding)

**"FICA doesn't match expected"**
- Social Security: $168,600 wage base (2024) - stops at limit
- Medicare: No limit
- Additional Medicare: 0.9% over $200k (single)
- Verify employee wages haven't exceeded limits

## Best practices

- **Annual W-4 review** - Ask employees to confirm W-4 annually or after life changes
- **Test before production** - Always test tax setup with sample employees
- **Update tables** - For external providers, confirm quarterly updates happen
- **Monitor withholding** - Quarterly review of tax deposits matches calculated withholding
- **Year-end reconciliation** - Verify W-2 taxes match actual deposits made
- **Multi-state documentation** - Keep state assignment rules documented

## What's next

- **[Income tax setup](income-tax-setup.md)** - Employee tax information details
- **[Tax statements](tax-statements.md)** - W-2 reporting and preparation
- **[About tax calculations](tax-calculation-overview.md)** - Tax concepts overview
