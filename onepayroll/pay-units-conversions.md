---
title: Pay units and conversions
description: Learn how to configure pay units and conversion factors for different pay frequencies.
author: zeande
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Pay units and conversions

Pay units define compensation measurements and enable conversion between different pay frequencies.

## Pay units overview

**What is a pay unit?**
A unit of compensation measurement:
- Annual salary ($50,000/year)
- Hourly rate ($25/hour)
- Daily rate ($200/day)
- Piece rate ($10/unit)

**Why conversion matters:**
- Employees may be paid annually but work hourly
- When converting salary to hourly, need precise factors
- Ensures consistent compensation regardless of logic  
- Supports benefits calculations (sometimes based on annual equivalent)

## Standard pay units

### Annual pay units

**Annual salary:**
- Measurement: Full year compensation
- Used for: Salary employees
- Example: $50,000/year
- Converted to: Period pay by dividing by pay frequency

### Hourly pay units

**Hourly rate:**
- Measurement: Per-hour compensation
- Used for: Hourly employees
- Example: $25/hour
- Converted to: Period pay by multiplying by hours worked

### Per-period pay units

**Fixed per-period:**
- Measurement: Per payroll period
- Used for: Employees paid fixed amount per period
- Example: $1,923.08 per biweekly payroll
- No conversion needed

### Daily pay units

**Daily rate:**
- Measurement: Per-day compensation
- Used for: Daily or contract workers
- Example: $200/day
- Converted to: Period pay based on days worked

## Conversion factors

### Annual to other units

**From annual salary to:**

**Hourly:**
```
Annual ÷ (Weeks per year × Hours per week)
$50,000 ÷ (52 × 40) = $24.04/hour
```

**Biweekly:**
```
Annual ÷ 26 pay periods
$50,000 ÷ 26 = $1,923.08/biweekly
```

**Weekly:**
```
Annual ÷ 52 pay periods
$50,000 ÷ 52 = $961.54/week
```

**Semi-monthly:**
```
Annual ÷ 24 pay periods
$50,000 ÷ 24 = $2,083.33/semi-monthly
```

### Hourly to other units

**From hourly rate to:**

**Annual (assumes 40 hrs/week, 52 weeks):**
```
Hourly × Hours per week × Weeks per year
$25 × 40 × 52 = $52,000/year
```

**Biweekly (assumes 40 hrs/week):**
```
Hourly × 40 × 2
$25 × 40 × 2 = $2,000/biweekly
```

### Daily to other units

**From daily rate to:**

**Annual (assumes 5-day weeks, 52 weeks):**
```
Daily × 5 × 52
$200 × 5 × 52 = $52,000/year
```

**Biweekly (assumes 5-day work weeks):**
```
Daily × 10
$200 × 10 = $2,000/biweekly
```

## Configuring pay units

### Pay Units page

To set up pay units, search for **Pay Units**. Each pay unit has the following fields:

| Field | Description |
|-------|-------------|
| **Code** | A unique code for the pay unit (up to 20 characters). |
| **Description** | A description of the pay unit (up to 50 characters). |
| **Unit of Measure** | The HR unit of measure associated with this pay unit (for example, Hour, Year, Day). |
| **Conversion Factor** | A decimal factor used for converting between pay units. Supports up to 8 decimal places. |

### How conversion factors work

Conversion factors express how many working days one unit represents. OnePayroll uses these factors to convert between pay units with the formula:

```
Converted Amount = Source Amount × Target Factor ÷ Source Factor
```

### Example configurations

Based on 260 working days per year (5 days × 52 weeks):

| Pay unit | Conversion factor | Basis |
|----------|-------------------|-------|
| HOURLY | 0.125 | 1 ÷ 8 hours per day |
| DAILY | 1 | 1 working day |
| WEEKLY | 5 | 5 working days per week |
| BIWEEKLY | 10 | 10 working days per two weeks |
| SEMIMONTHLY | 10.8333333 | 260 ÷ 24 periods |
| MONTHLY | 21.6666667 | 260 ÷ 12 months |
| YEARLY | 260 | 260 working days per year |

## Using pay units

### Employee compensation

An employee's pay unit is determined by their [employee type](pay-units-employee-types.md). The employee type defines the pay unit and compensation method (Regular or Work-Based). The employee's pay unit and pay factor are displayed as flow fields on the employee card.

When viewing employee lists, OnePayroll can convert compensation to a common pay unit for comparison purposes.

### Benefits calculations

Some benefits calculated on annual equivalent:

**Example:** Health insurance premium
- Employer contribution: 10% of annual salary
- Employee: $50,000 annual
- Insurance cost: $5,000/year ($192.31/paycheck if biweekly)

OnePayroll uses pay unit conversion to ensure accuracy.

### Overtime calculations

Overtime compensation:

**For hourly employees:**
- Fixed rate × hours × multiplier (e.g., 1.5 for time-and-a-half)

**For salaried employees:**
- Convert annual to hourly (using pay unit conversion)
- Calculate overtime based on hourly equivalent
- Ensures consistent treatment

## Pay unit changes

If an employee's compensation structure changes, the change is recorded through the [snapshot system](employee-snapshots.md). Snapshots capture the pay unit and compensation details effective for each payroll period, ensuring that payroll is calculated with the correct conversion factors and maintaining a historical record for audit purposes.

## Verification and testing

### Before processing payroll

1. **Verify conversions** - Test manual calculation vs. system
2. **Check rates** - Ensure hourly equivalent reasonable
3. **Review benefits** - Ensure benefits calculated correctly
4. **Test overtime** - Verify overtime calculations accurate

**Example verification:**
```
Employee: $50,000 annual
Expected hourly: $50,000 ÷ 2,080 hours = $24.04/hour
System shows: $24.04/hour ✓

Biweekly: $50,000 ÷ 26 = $1,923.08
System shows: $1,923.08 ✓
```

## Common scenarios

### Changing employee type

When an employee's compensation structure changes (for example, from a yearly-based type to an hourly-based type), update the employee's **Type** field on the employee card. The employee's pay unit and pay factor update automatically because they flow from the employee type.

### Pay types with different units

Pay types can each have their own pay unit. This means different components of compensation can use different units:

- Base pay: Uses the employee's pay unit (from their employee type)
- Other pay types: Can specify their own pay unit as needed

OnePayroll uses the conversion factor to convert between units during payroll calculations.

## Troubleshooting

**"Paycheck amount seems wrong"**
- Verify pay unit assigned to employee
- Check conversion factor used
- Confirm hours worked/biweekly period
- Recalculate manually to compare

**"Overtime calculation incorrect"**
- Verify pay unit (must be hourly-based for overtime)
- Check hours worked
- Confirm overtime multiplier (1.5, 2.0, etc.)
- Review against salary conversion if salaried employee

**"Benefits deduction doesn't match estimate"**
- Verify annual salary calculation
- Check benefits percentage applied
- Confirm adjustment for partial-year employees
- Review pay frequency impact

## Best practices

- **Document assumptions** - Keep record of hours/week, weeks/year
- **Standard conversions** - Use consistent factors across organization
- **Test implementations** - Verify conversions before going live
- **Monitor conversions** - Spot-check sample employees regularly
- **Archive rates** - Keep history of pay unit conversions
- **Review annually** - Verify standard hours/weeks still valid

## What's next

- **[Employee setup](employee-setup.md)** - Employee configuration
- **[Employee types and pay units](pay-units-employee-types.md)** - Integration with employee types
- **[Pay type setup](pay-types-setup.md)** - Pay type configuration
```

**Explanation**: The employee works 2,080 hours per year (260 days × 8 hours).

### Yearly to Hourly

Converting $65,000 per year to hourly:

```
Source: $65,000 per YEARLY (factor = 260)
Target: HOURLY (factor = 0.125)

Hourly Amount = $65,000 × 0.125 ÷ 260
              = $65,000 ÷ 2,080
              = $31.25
```

### Daily to Monthly

Converting $200 per day to monthly:

```
Source: $200 per DAILY (factor = 1)
Target: MONTHLY (factor = 21.6666667)

Monthly Amount = $200 × 21.6666667 ÷ 1
               = $200 × 21.6666667
               = $4,333.33
```

**Explanation**: Average of 21.67 working days per month (260 days ÷ 12 months).

### Weekly to Biweekly

Converting $1,000 per week to biweekly:

```
Source: $1,000 per WEEKLY (factor = 5)
Target: BIWEEKLY (factor = 10)

Biweekly Amount = $1,000 × 10 ÷ 5
                = $1,000 × 2
                = $2,000
```

## Conversion Examples by Working Days

### Based on 260 Working Days Per Year

The following table shows equivalent rates across different pay units:

|Hourly|Daily|Weekly|Biweekly|Semimonthly|Monthly|Yearly|
|------|-----|------|--------|-----------|-------|------|
|$20.00|$160.00|$800.00|$1,600.00|$1,733.33|$3,466.67|$41,600|
|$25.00|$200.00|$1,000.00|$2,000.00|$2,166.67|$4,333.33|$52,000|
|$30.00|$240.00|$1,200.00|$2,400.00|$2,600.00|$5,200.00|$62,400|
|$35.00|$280.00|$1,400.00|$2,800.00|$3,033.33|$6,066.67|$72,800|
|$40.00|$320.00|$1,600.00|$3,200.00|$3,466.67|$6,933.33|$83,200|

> [!TIP]
> Use this table to quickly verify that your conversions are producing expected results.

## Where Conversions Occur

OnePayroll performs pay unit conversions in several places:

### Displaying Compensation

When viewing employee lists with a global pay unit set, OnePayroll automatically converts each employee's compensation to the global pay unit for easy comparison.

**Example**: 
- Employee A: $25/hour (HOURLY)
- Employee B: $52,000/year (YEARLY)
- Global Pay Unit: YEARLY

Display shows:
- Employee A: $52,000/year (converted)
- Employee B: $52,000/year (no conversion needed)

### Payroll Calculations

During payroll processing, OnePayroll may need to convert rates when:
- Calculating benefit contributions based on different pay units
- Applying pay rates to time worked
- Computing retroactive adjustments

### Reporting

Reports often standardize all compensation to a common pay unit for analysis and comparison purposes.

## Precision and Rounding

### Decimal Places

OnePayroll maintains precision throughout conversions to avoid cumulative rounding errors:

- Conversion factors support up to 10 decimal places
- Intermediate calculations preserve full precision
- Final amounts are typically rounded to 2 decimal places for currency

### Rounding Considerations

When converting between pay units:

1. **Conversion factor precision matters**: Use accurate conversion factors (e.g., 21.6666667, not 21.67)
2. **Order of operations**: OnePayroll performs conversions before other calculations
3. **Display vs. stored values**: Display values may be rounded for presentation while stored values retain full precision

## Format Expressions

Each pay unit can generate a format expression that controls how compensation rates are displayed. This format expression:

- Shows rates with appropriate precision (typically 2 decimal places)
- Includes the unit of measure in the display (e.g., "/ Hour", "/ Year")
- Provides consistent formatting across reports and pages

The system automatically generates these format expressions using the unit of measure description.

**Examples**:
- Pay unit with unit of measure "Hour" displays as: `$25.00 / Hour`
- Pay unit with unit of measure "Year" displays as: `$52,000.00 / Year`
- Pay unit with unit of measure "Day" displays as: `$200.00 / Day`

## Troubleshooting Conversions

### Conversion produces unexpected values

**Problem**: Converting between pay units gives results that don't match expectations.

**Solution**: 
1. Verify the conversion factors for both source and target pay units
2. Ensure all conversion factors are based on consistent assumptions (all use 260 days per year)
3. Manually calculate the expected result: Source × Target Factor ÷ Source Factor
4. Check that conversion factors have enough decimal precision

**Example of incorrect setup**:
```
MONTHLY with factor = 22 (incorrect)
Should be: 21.6666667 (260 ÷ 12)
```

### Conversion factor is zero or not set

**Problem**: You receive an error about conversion factors during calculations.

**Solution**: 
1. Check that every pay unit has a conversion factor greater than zero
2. Verify both source and target pay units in the conversion
3. Review the pay units setup page to ensure no blank conversion factors

### Rounding differences

**Problem**: Converted amounts differ slightly from manual calculations.

**Solution**: 
1. This is usually due to intermediate rounding in manual calculations
2. OnePayroll maintains full precision until the final result
3. Ensure conversion factors use enough decimal places (e.g., 21.6666667, not 21.67)

## Best Practices

When working with pay unit conversions:

- **Understand the formula**: Know how conversions are calculated to troubleshoot issues
- **Use full precision**: Enter conversion factors with adequate decimal places
- **Test conversions**: Verify critical conversions produce expected results before going live
- **Be consistent**: Ensure all pay units use the same base assumptions (e.g., 260 working days)
- **Document factors**: Keep notes explaining the basis for your conversion factors
- **Avoid changes**: Don't modify conversion factors once they're in use with live data

## See Also

[Work with pay units](employee-pay-units.md)  
[Assign Pay Units to Employee Types](pay-units-employee-types.md)  
[Process payroll](payroll-runs-process.md)  

[!INCLUDE[footer-banner](../includes/footer-banner.md)]
