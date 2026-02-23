---
title: Employee pay units
description: Learn how to set up and manage pay units for employees, including conversions between different compensation units.
author: zeande
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Employee pay units

Pay units are ways to express employee compensation. An employee might be described as earning "$80,000 annually" (annual), "$3,846 per pay period" (per period), or "$38.46 per hour" (hourly). OnePayroll handles the conversion between these units automatically.

## Understanding pay units

A **pay unit** is a unit of measurement for compensation:

- **Annual Salary** - Total compensation per year (e.g., $80,000/year)
- **Salary per Pay Period** - Compensation per payroll period (e.g., $3,077 biweekly)
- **Hourly Wage** - Compensation per hour worked (e.g., $38.46/hour)
- **Daily Rate** - Compensation per day worked (e.g., $300/day)

### Why pay units matter

Different units are useful for different purposes:

| Unit | Used For | Example |
|------|----------|---------|
| **Annual Salary** | Job offers, salary reviews, compensation analysis | "This position pays $100,000/year" |
| **Per Period** | Budget planning, period-based accounting | "Each payroll run costs $3,846 per employee" |
| **Hourly** | Overtime calculation, benefits administration, compliance | "Tax is calculated on $38.46/hour basis" |
| **Daily** | Temporary workers, contractors, time tracking | "Consultant rates: $400/day" |

### Converting between units

OnePayroll uses **conversion factors** to translate between units:

**Example: Annual to Hourly**
```
Annual Salary: $80,000
Working hours per year: 2,080 hours (40 hours/week × 52 weeks)
Hourly Rate: $80,000 ÷ 2,080 = $38.46/hour
```

**Example: Annual to Per Period (Biweekly)**
```
Annual Salary: $80,000
Periods per year: 26 (biweekly)
Per-Period Pay: $80,000 ÷ 26 = $3,077/period
```

## Set up employee pay unit

**To assign pay unit to an employee:**

1. Search for **Employees**
2. Open the empl

oyee
3. On the **OnePayroll** tab:
   - **Pay Unit** - Select: Annual Salary, Per Period, Hourly, or Daily
   - **Compensation Amount** - Enter the amount for selected unit
4. Save

### Compensation by employee type

**For salaried employees:**

1. Set **Pay Unit** to **Annual Salary**
2. Enter **Compensation Amount** (e.g., $80,000)
3. OnePayroll calculates:
   - Per-period pay automatically
   - Hourly rate for benefits calculation
   - Tax withholding basis

**For hourly employees:**

1. Set **Pay Unit** to **Hourly**
2. Enter **Hourly Rate** (e.g., $25.00/hour)
3. OnePayroll calculates:
   - Annual salary equivalent
   - Per-period rate
   - Overtime amounts
4. Specify **Hours per Week** (typically 40)

**For daily rate employees:**

1. Set **Pay Unit** to **Daily**
2. Enter **Daily Rate** (e.g., $400/day)
3. Employee paid based on days worked

## Managing pay unit conversions

OnePayroll automatically handles conversions. Here's what happens:

### Annual salary to hourly
Used for:
- Overtime calculation (OT = 1.5× or 2× hourly rate)
- Benefits administration (health insurance calculation)
- Tax withholding (needs hourly basis for certain jurisdictions)

**Conversion factor**
```
Annual Salary: $80,000
Working hours per year: 2,080 hours
Hourly Rate: $80,000 ÷ 2,080 = $38.46/hour
```

### Annual salary to per-period
Used for:
- Regular payroll calculation
- Budget forecasting
- GL impact analysis

**Conversion factor depends on pay frequency:**
- Weekly (52 periods): $80,000 ÷ 52 = $1,538/week
- Biweekly (26 periods): $80,000 ÷ 26 = $3,077/period
- Monthly (12 periods): $80,000 ÷ 12 = $6,667/month

## Pay unit effective dates

When compensation changes, you can set effective dates:

**To set compensation change with effective date:**

1. Open the employee
2. In the **OnePayroll** tab:
   - Record the current compensation
3. Create a **Compensation Change** record:
   - **Effective Date** - When change takes effect
   - **New Amount** - New pay amount
4. Save

**Example: Raise effective 3/1/2026**
```
Current annual salary: $80,000 (through 2/28/2026)
New annual salary: $85,000 (effective 3/1/2026)
OnePayroll automatically applies correct rate in payroll per period
```

Effective dates ensure:
- Correct compensation used in each payroll run
- Automated pay rate transitions
- Historical accuracy

## Pay unit for different compensation types

### Multiple compensation sources

Some employees have multiple compensation types:

**Salaried + Commission:**
- Set primary pay unit to Annual Salary
- Commission tracked separately as manual entry or pay type
- Both included in gross pay calculation

**Base + Shift Differential:**
- Base pay per annual salary
- Shift premium added when employee works specific shift
- Combined for gross and tax calculation

**Salary + Bonus:**
- Regular annual salary for base compensation
- Bonus tracked separately for periods when paid
- Both included in gross pay

### Seasonal or variable compensation

For employees with seasonal variation:

1. Set annual salary to average expected amount
2. Adjust per-period amount manually for seasons
3. Or use monthly pay unit for more flexibility

## Pay unit conversions for reporting

Pay unit conversions enable different reporting views:

**Departmental salary:**
Sum annual salaries by department = Total department compensation

**Payroll run cost:**
Sum per-period pays = Expected payroll cost this period

**Hourly analysis:**
Hourly rates enable comparison across hourly/salaried employees

## Verification and testing

Before processing payroll with new pay units:

**Check conversion accuracy:**
1. Create test employee with known salary (e.g., $78,000)
2. Verify system calculates:
   - Hourly rate: $78,000 ÷ 2,080 = $37.50
   - Biweekly: $78,000 ÷ 26 = $3,000
   - Monthly: $78,000 ÷ 12 = $6,500
3. If conversions are incorrect, check setup
4. Adjust working hours or periods as needed

**Include in test payroll:**
1. Create test payroll for employees with different pay units
2. Verify gross pay calculated correctly
3. Check tax withholding (uses hourly rate)
4. Validate GL posting

## Troubleshooting

### "Incorrect hourly rate calculated"
- Verify annual salary entered correctly
- Check working hours per week (typically 40)
- Confirm working weeks per year (typically 52)
- Calculation: Annual ÷ (Hours/week × Weeks/year)

### "Per-period pay doesn't match expectations"
- Verify annual salary
- Confirm pay frequency (biweekly = ÷26, weekly = ÷52)
- Check for special period calculations

### "Tax withholding incorrect"
- Verify hourly rate calculation (used for tax)
- Check annual salary is set correctly
- Review tax withholding settings

## Best practices

- **Use annual salary as primary** - Most flexible and standard
- **Verify conversions** - Always check calculated rates match expectations
- **Document effective dates** - Note when compensation changes occur
- **Test before production** - Validate pay unit calculations in test payroll
- **Consistent rounding** - Use consistent rounding for per-period and hourly calculations
- **Track changes** - Maintain history of compensation changes for audit

## What's next

- **[Employee setup](employee-setup.md)** - Overall employee configuration
- **[Pay types overview](pay-types-overview.md)** - How pay types work with pay units
- **[Departments and work locations](departments-work-locations.md)** - Organizational structure
