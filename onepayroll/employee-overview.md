---
title: Employees in payroll overview
description: Learn about employee records in OnePayroll, payroll-specific extensions, employee types, and status management.
author: zeande
sws.service: onepayroll
sws.topic: overview
sws.date: 02/23/2026
---

# Employees in payroll overview

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
- Employee type (determines pay unit and compensation method)
- Work location
- Payment methods for direct deposit
- Garnishment details
- Benefits enrollment
- Pay unit and pay factor (derived from employee type)
- Rehirable flag
- Self-service status

## Employee types

Employee types are user-defined codes that control how an employee's compensation is calculated. Each employee type specifies:

- **Code** — A unique identifier (up to 20 characters)
- **Description** — A human-readable name
- **Pay Unit** — The unit of compensation (e.g., Annual, Hourly)
- **Compensation Method** — Determines how pay is calculated

### Compensation methods

Each employee type uses one of two compensation methods:

**Regular**
- Employee receives a fixed amount per pay period
- Pay is divided evenly across periods based on the pay unit conversion factor
- Common for: salaried office staff, management, professionals

**Work-Based**
- Employee is compensated based on units of work (hours, days, etc.)
- Pay varies each period depending on work reported
- Common for: hourly workers, production staff, temporary employees

You define employee types on the **Employee Types** page. Because employee types are user-defined, you can create as many as needed to represent your organization's compensation structures.

> [!TIP]
> The **Pay Conversion Factor** on the Employee Types page shows the conversion factor from the assigned pay unit, which determines how the employee's rate converts to a per-period amount.

## Employee status

OnePayroll defines an employee lifecycle through four statuses:

**Onboarding**
- New employee being set up
- Not yet included in regular payroll processing

**Active**
- Currently employed and participating in regular payroll
- Most employees are in this status

**Offboarding**
- Employee is leaving the organization
- Final payroll processing and separation tasks

**Inactive**
- No longer employed or temporarily not working
- Doesn't appear in payroll processing
- Historical records retained for audit

### Status transitions

```
Onboarding (new hire setup)
   ↓
Active (employed)
   ↓
Offboarding (separation in progress)
   ↓
Inactive (no longer employed)
```

> [!NOTE]
> The status is determined automatically based on the employee's employment date and termination date.

## Pay group assignment

Each employee is assigned to a **pay group** that determines:
- How often they're paid (weekly, biweekly, monthly)
- When payroll periods occur
- Which GL accounts are used for posting
- Whether they're included in a specific payroll run

Employees in the same pay group (e.g., "Biweekly Salaried") are processed together during payroll.

## Compensation structure

Employee compensation is determined by several related elements:

**Employee type**
- Determines the pay unit and compensation method (Regular or Work-Based)
- Set on the employee card

**Pay units**
- How compensation is expressed (Annual, Hourly, Daily, etc.)
- The pay unit's conversion factor translates between different units
- Defined on the **Pay Units** page and linked through the employee type

**Pay types**
- Specific earnings and deductions applied to the employee
- Each employee may have a different combination of pay types

## Benefits and deductions

Employees can be enrolled in:

**Benefits**
- Health insurance (employee + employer cost sharing)
- Retirement plans (401(k), pension)
- Other voluntary benefits
- Benefits can have coverage tiers and life event changes

**Garnishments**
- Wage garnishments (court-ordered, child support, etc.)
- Processing order determines calculation priority
- Protected by disposable pay rules and exempt amounts

**Other deductions**
- Union dues
- Loan repayments
- Flexible spending accounts
- Employee advances

## Tax information

Employees have tax details controlling withholding (US localization):

**Federal**
- Filing status (Single, Married, etc.)
- Withholding credits and adjustments
- Additional withholding amount (if any)

**State** (if applicable)
- State of residence
- Filing status
- State-specific withholding parameters

**Local** (if applicable)
- Local tax jurisdiction
- Any special local tax rules

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
- **[Employee bank account information](employee-bank-accounts.md)** - Bank details on payment methods
- **[Garnishments](garnishments.md)** - Wage garnishment configuration
