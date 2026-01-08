---
title: Convert Between Pay Units
description: Understand how OnePayroll converts compensation rates between different pay units using conversion factors.
author: myGitHubHandle

ms.service: dynamics365-business-central
ms.topic: article
ms.date: 01/08/2026
ms.author: MyMSFTAlias (if I work for Microsoft; otherwise edupont)
---
# Convert Between Pay Units

OnePayroll automatically converts compensation rates between different pay units using the conversion factors defined on each pay unit. Understanding how these conversions work helps ensure accurate payroll calculations and reporting.

## How Conversions Work

### Conversion Formula

OnePayroll converts between pay units using the following formula:

```
Target Amount = Source Amount × Target Conversion Factor ÷ Source Conversion Factor
```

This formula takes the amount in the source pay unit and converts it to the target pay unit based on their respective conversion factors.

### Conversion Through the Base Unit

With the recommended setup (Daily = 1 as the base), all conversions work through the base unit:

1. Convert source amount to base unit (Daily)
2. Convert base unit amount to target unit

This ensures consistency and accuracy across all conversions.

## Example Conversions

The following examples use the recommended conversion factors based on 260 working days per year:

### Hourly to Yearly

Converting $25.00 per hour to yearly:

```
Source: $25.00 per HOURLY (factor = 0.125)
Target: YEARLY (factor = 260)

Yearly Amount = $25.00 × 260 ÷ 0.125
              = $25.00 × 2,080
              = $52,000
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

[Work with Pay Units](about-pay-units.md)  
[Set Up Pay Units](pay-units-setup.md)  
[Assign Pay Units to Employee Types](pay-units-employee-types.md)  
[Process Payroll](process-payroll.md)  

[!INCLUDE[footer-include](includes/footer-banner.md)]
