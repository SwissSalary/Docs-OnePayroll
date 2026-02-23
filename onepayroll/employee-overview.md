---
title: About employees in payroll
description: Learn about employee records in OnePayroll, payroll-specific extensions, employee types, and status management.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: overview
ms.date: 02/23/2026
---

# About employees in payroll

Employees are the heart of any payroll system. OnePayroll extends the standard Business Central employee record with comprehensive payroll-specific fields and workflows.

## Employee record overview

Each employee in OnePayroll includes:

**Core information** (from Business Central):
- Employee number (unique identifier)
- Name
- Address
- Job title
- Department
- Manager
- Start date

**Payroll extensions** (added by OnePayroll):
- Pay group assignment
- Employee type (salary basis)
- Bank accounts for direct deposit
- Tax withholding information
- Pay units and compensation rate
- Garnishment details
- Benefits enrollment
- Time off balances
- Pay history

## Employee types

OnePayroll supports different employee types to control compensation calculation:

### Salaried employees
- Receive fixed annual salary
- Paid the same amount each period regardless of hours
- Calculate hourly rate from annual salary for benefits/taxes
- Common for: office staff, management, professionals

**Pay calculation:**
Annual Salary ÷ 26 periods = Pay per period (for biweekly)

### Hourly employees
- Compensated based on hours worked
- Subject to overtime rules
- Hours tracked daily or weekly
- Common for: production, retail, support staff

**Pay calculation:**
Hourly Rate × Hours Worked = Pay per period

### Commissioned employees
- Earn commissions as primary compensation
- May have base salary + commission structure
- Commissions vary by period
- Common for: sales staff

**Pay calculation:**
Base Salary + (Sales Volume × Commission Rate) = Pay per period

### Daily rate employees
- Compensated by day worked
- Used for temporary or contingent workers
- Pay by number of days

**Pay calculation:**
Daily Rate × Days Worked = Pay per period

## Employee status

Employees move through statuses as their employment lifecycle progresses:

**Active**
- Currently employed
- Participates in regular payroll
- Most employees are active

**Inactive**
- No longer employed
- Doesn't appear in payroll processing
- Historical records retained for audit

**On Leave**
- Temporarily not working
- May still accrue compensation (vacation, benefits)
- Returns to active when leave ends

**Terminated**
- Employment ended
- Final payroll processed separately
- Receives final paycheck and tax documents

### Status transitions

```
New Hire
   ↓
Active (employed)
   ↓
On Leave (temporarily out)
   ↓
Active (returns)
   ↓
Terminated (ends employment)
   ↓
Archived (historical record)
```

## Pay group assignment

Each employee is assigned to a **pay group** that determines:
- How often they're paid (weekly, biweekly, monthly)
- When payroll periods occur
- Which GL accounts are used for posting
- Whether they're included in a specific payroll run

Employees in the same pay group (e.g., "Biweekly Salaried") are processed together during payroll.

## Compensation structure

Employees have multiple elements controlling compensation:

**Annual salary / Hourly rate**
- Base compensation amount
- Used to calculate gross pay

**Pay units**
- How compensation is expressed (annual, hourly, per period)
- Different employees can have same salary in different units

**Pay types**
- Specific earnings and deductions applied to employee
- Each employee may have different mix (benefits, deductions, etc.)

**Effective dates**
- When compensation changes take effect
- Example: Raise effective 3/1/2026

## Benefits and deductions

Employees can be enrolled in:

**Benefits**
- Health insurance (employee + employer cost sharing)
- Retirement plans (401(k), pension)
- Other voluntary benefits
- Benefits can have coverage tiers and life event changes

**Garnishments**
- Wage garnishments (court-ordered, child support)
- Priority determines calculation order
- Limited by disposable income rules

**Other deductions**
- Union dues
- Loan repayments
- Flexible spending accounts
- Employee advances

## Tax information

Employees have tax details controlling withholding:

**Federal**
- Filing status (Single, Married, etc.)
- Number of allowances
- Additional withholding amount (if any)

**State** (if applicable)
- State of residence
- Filing status
- Allowances or credits

**Local** (if applicable)
- Local tax jurisdiction
- Any special local tax rules

**Federal identification**
- Social Security Number (US)
- Tax identification number (other countries)

## Historical tracking

OnePayroll maintains complete employee history:

**Snapshots**
- Historical record of employee payroll configuration
- When did pay change? When did employee move departments? etc.
- Enables audit trail of all changes

**Payroll entries**
- All historical payroll for the employee
- Can reprint pay stubs or review past compensation
- Supports tax statement generation

**Benefits history**
- When benefits were added, removed, or changed
- Coverage history for compliance

## Employee vs. payroll master data

OnePayroll stores some data differently:

| Data | Stored In | Purpose |
|------|-----------|---------|
| Name, address | BC Employee | Human resources |
| Pay group, employee type | OnePayroll | Payroll processing |
| Bank account | OnePayroll | Direct deposit |
| Tax withholding | OnePayroll | Tax calculation |
| Garnishments | OnePayroll | Payroll deductions |
| Benefits | OnePayroll | Benefits administration |

OnePayroll's payroll-specific data integrates with BC's employee master data.

## Next steps

Learn how to work with employees:

- **[Set up employees](employee-setup.md)** - Create and configure employee records
- **[Employee pay units](employee-pay-units.md)** - Compensation rate setup
- **[Departments and work locations](departments-work-locations.md)** - Organizational hierarchy
- **[Employee bank accounts](employee-bank-accounts.md)** - Direct deposit setup
- **[Garnishments](garnishments.md)** - Wage garnishment configuration
