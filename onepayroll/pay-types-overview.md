---
title: About pay types
description: Learn about pay types, how they're organized in categories, and how they control payroll calculations and GL posting.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: overview
ms.date: 02/23/2026
---

# About pay types

Pay types are the building blocks of payroll. They represent individual components of compensation—both earnings (what increases pay) and deductions (what decreases pay).

## What is a pay type?

A pay type is a single element of compensation, such as:

**Earnings (increase gross pay):**
- Regular pay (salary or hourly)
- Overtime (time-and-a-half, time-and-a-quarter)
- Bonuses
- Commissions
- Shift differentials
- Retention bonuses

**Deductions (decrease gross pay):**
- Taxes (federal, state, local income tax)
- FICA (Social Security and Medicare)
- Health insurance premiums
- Retirement plan contributions
- Benefits deductions
- Loan repayments
- Garnishments

Every payroll entry starts with a pay type. When you process payroll, OnePayroll calculates the amount for each pay type on each employee, then includes it in the payroll.

## Pay types and categories

Pay types are organized into **categories** that group related pay types together. Categories control how pay types are:
- Calculated (formula, percentage, fixed amount, etc.)
- Displayed on reports
- Included in totals (gross pay, taxable earnings, etc.)
- Sorted in payroll calculations

### Built-in categories

OnePayroll includes standard categories:

| Category | Purpose | Example Pay Types |
|----------|---------|-------------------|
| **Regular Earnings** | Base compensation | Regular Pay, Hourly Wages |
| **Overtime** | Extra compensation for hours over standard | Overtime 1.5x, Overtime 2x |
| **Shift & Premium** | Differential pay | Night Shift Premium, Hazard Pay |
| **Bonuses** | One-time or periodic awards | Annual Bonus, Performance Bonus |
| **Taxes** | Mandatory government withholdings | Federal Income Tax, FICA |
| **Benefits** | Insurance and retirement | Health Insurance, 401(k) |
| **Garnishments** | Court-ordered withholdings | Child Support, Creditor Garnishment |
| **Other Deductions** | Additional withholdings | Union Dues, Loans, Advances |

### Custom categories

You can create custom categories for your business. For example:

- **Commissions** - For sales staff
- **Tips** - For hospitality staff
- **Reimbursements** - For expense reimbursements
- **Allowances** - For living allowances, vehicle allowances, etc.

## Pay type characteristics

Each pay type has key characteristics that control its behavior:

### Calculation method

How the amount is determined:

- **Fixed Amount** - A set dollar amount (e.g., $50/month car allowance)
- **Percentage** - Percentage of another pay type (e.g., 25% of gross salary)
- **Hourly Rate** - Hours worked × hourly rate (for hourly staff)
- **Annual Salary** - Annual salary ÷ number of pay periods
- **Formula** - Custom calculation using formulas and conditions
- **Manual Entry** - Amount is manually entered for each employee

### GL account mapping

Each pay type posts to a specific general ledger account. When payroll is posted:
- Regular pay posts to "Salary Expense" (debit)
- Federal income tax posts to "Federal Withholding Payable" (credit)
- Benefits post to "Benefits Payable" (credit)

GL account mapping enables accurate financial reporting and GL reconciliation.

### Category

The category determines calculation order and display grouping.

### Display type

Controls how the pay type appears on reports:

- **Detail** - Shown on detailed payroll reports
- **Heading** - Used only for grouping (shows total, not individual entries)
- **Hidden** - Not shown on standard reports
- **Hypothetical** - Calculated but not actually paid (for projection)

### Conditional logic

Some pay types are calculated conditionally:
- "Overtime" - Only if hours exceed 40/week
- "Shift Premium" - Only if shift code = "Night Shift"
- "Health Insurance" - Only if employee enrolled in health plan

You define these conditions to automate calculation.

## Pay type variations

### Static vs. dynamic

**Static Pay Types**
- Same calculation logic for all employees
- Most common: regular pay, taxes, standard benefits
- Example: "Federal Income Tax" calculated on all employees using same tax tables

**Dynamic Pay Types**
- Calculation varies by employee or time period
- Used for: commissions, variable bonuses, adjustments
- Example: Commission rate varies by salesperson

### Visible vs. hidden

**Visible Pay Types**
- Appear on paychecks and pay stubs
- Employees see them in self-service portal
- Most pay types are visible

**Hidden Pay Types**
- Used for system calculations (intermediate steps)
- Don't appear on reports or pay stubs
- Example: "Gross Pay (before taxes)" used for calculation but not displayed

### Taxable vs. non-taxable

**Taxable Pay Types**
- Subject to income tax withholding
- Most earnings are taxable
- Example: Salary, overtime, bonuses

**Non-Taxable Pay Types**
- Exclude from gross income for tax purposes
- Example: Tax-deferred 401(k) contributions, health savings account deposits

## Pay type tips

### Planning your pay types

When setting up payroll for your company:
1. List all compensation elements you currently pay
2. Group them into logical categories
3. Determine calculation method for each
4. Assign GL accounts (consider your reporting needs)
5. Create the pay types in OnePayroll

### Common pay type sets

**Hourly employee:**
- Regular Pay (hourly rate)
- Overtime 1.5x (hours over 40/week)
- Federal Income Tax
- FICA Social Security
- FICA Medicare
- Health Insurance
- 401(k)

**Salaried employee:**
- Regular Pay (annual salary)
- Bonus (annual, variable)
- Federal Income Tax
- FICA Social Security
- FICA Medicare
- Health Insurance
- 401(k)

**Sales employee (commissioned):**
- Base Salary
- Commission
- Bonus
- Federal Income Tax
- FICA Social Security
- FICA Medicare
- Health Insurance

### Pay type naming convention

Use clear, consistent names:
- **Good:** "Federal Income Tax", "Health Insurance Premium", "Overtime 1.5x"
- **Avoid:** "FIT", "HIP", "OT1.5" (unclear abbreviations)
- **Avoid:** "Deduction 1", "Deduction 2" (non-descriptive)

## Next steps

Learn how to work with pay types:

- **[Set up pay types](pay-types-setup.md)** - Create categories and define individual pay types
- **[Payroll runs overview](payroll-runs-overview.md)** - How pay types are used in payroll processing
- **[Employee setup](employee-setup.md)** - Assigning pay types to employees
