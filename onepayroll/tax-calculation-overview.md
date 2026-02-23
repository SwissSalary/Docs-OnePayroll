---
title: About tax calculations
description: Learn how OnePayroll calculates federal, state, and local income taxes and other tax withholdings.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: overview
ms.date: 02/23/2026
---

# About tax calculations

OnePayroll calculates accurate federal, state, and local income taxes based on employee withholding information and current tax tables.

## Tax calculation overview

**OnePayroll determines:**
- Federal income tax withholding
- Social Security/FICA withholding
- Medicare withholding
- State income tax withholding
- Local income/wage tax withholding

**Calculation method:**
- Employee W-4 withholding (federal) or equivalent
- Current IRS tax tables
- Gross wages and deductions
- Multiple jobs (if applicable)
- Tax credits and adjustments

## Tax calculation types

### Federal income tax
- Based on W-4 (Form W-4, 2024 or later version)
- Standard deduction applied
- Tax brackets calculated using IRS Method 1 or 2
- Subject to both employee and employer deposit requirements

### FICA taxes
**Social Security:**
- 6.2% employee rate on wages (up to annual wage base)
- 6.2% employer match
- Resets frequency (calendar year)

**Medicare:**
- 1.45% employee rate on all wages
- 1.45% employer match
- Additional Medicare Tax: 0.9% on wages over threshold ($200k single, $250k married filing jointly)
- Employer match on Additional Medicare: 0.9%

### State income tax
- Varies by state
- Different W-4 forms (NY-4, CA-4, etc.)
- Some states have no income tax (FL, TX, WA, etc.)
- Multiple jobs and tax credits affect calculation

### Local income tax
- City or county tax (varies by jurisdiction)
- Less common than state tax
- Similar to state withholding

## Multi-provider architecture

OnePayroll supports multiple tax calculation engines:

**Providers available:**
- **Built-in** (Mock provider) - For testing and basic scenarios
- **Vertex** - Professional tax software integration
- **Symmetry** - Alternative professional tax service

**Provider features:**
- Real-time tax table updates
- Jurisdiction-specific rules
- Multi-state support
- Semi-monthly/bi-weekly/weekly calculations
- Handles complex scenarios

## Tax withholding methods

### Method 1: IRS Percentage Method
- Uses IRS tax tables
- Calculates per pay period
- Accounts for W-4 entries
- Simplest method

### Method 2: IRS Wage Bracket Method
- Uses IRS wage bracket tables
- More precise for some situations
- Handles Form W-4 adjustments
- Accounts for filing status

## Common scenarios

### Single state employee
```
Federal income tax: Based on federal W-4
State income tax: Based on state W-4
FICA: Standard rates (6.2% SS, 1.45% Medicare)
Local: If applicable
```

### Multi-state employee (works in multiple states)
- Resident state: Full withholding
- Non-resident state: Reciprocal rates (if applicable)
- Home state prevails typically

### Employee with additional Medicare Tax
```
Wages × 0.9% on amounts over:
- $200,000 (single)
- $250,000 (married filing jointly)
- $125,000 (married filing separately)
```

### Tax credits and adjustments
- Child Tax Credit: On 2024 Form W-4 Line 3
- Child and Dependent Care: On Line 3
- Other Income Adjustments: On Form W-4 Line 4a
- Extra withholding: On Form W-4 Line 4c

## Tax remittance

Once taxes are withheld:
- **Federal:** Deposit with EFTPS or through payroll provider (timeline varies)
- **State:** Deposit per state requirements (monthly/quarterly)
- **Local:** Deposit per local jurisdiction rules
- **FICA:** Deposit with federal tax (monthly/quarterly)

## Quarterly and annual reconciliation

**Quarterly:**
- File Form 941 (federal payroll taxes)
- File state equivalent (varies)
- Reconcile amounts withheld to deposits made

**Annual:**
- File W-2s (federal); due Jan 31
- File W-3 transmittal form
- State and local year-end reporting
- Reconcile total withholdings

## Next steps

- **[Set up tax calculations](tax-calculation-setup.md)** - Configure tax calculation provider
- **[Income tax setup](income-tax-setup.md)** - Employee withholding information
- **[Tax statements](tax-statements.md)** - W-2 reporting and tax forms
