---
title: Set Up Pay Units
description: Learn how to configure pay units with correct conversion factors for consistent payroll calculations in OnePayroll.
author: myGitHubHandle

ms.service: dynamics365-business-central
ms.topic: article
ms.date: 01/08/2026
ms.author: MyMSFTAlias (if I work for Microsoft; otherwise edupont)
---
# Set Up Pay Units

This article explains how to configure pay units for your organization, including the recommended conversion factors based on standard working days.

## Creating Pay Units

### To create a pay unit

1. Choose the ![Lightbulb that opens the Tell Me feature](media/ui-search/search_small.png) icon, enter **Pay Units**, and then choose the related link.
2. On the **Pay Units** page, create a new line and fill in the fields:
   - **Code**: A unique code for the pay unit (e.g., "DAILY", "HOURLY", "YEARLY")
   - **Description**: A descriptive name for the pay unit (e.g., "Daily", "Hourly", "Yearly")
   - **Unit of Measure**: Select a unit of measure from Business Central (optional but recommended)
   - **Conversion Factor**: Enter the conversion factor that relates this unit to others

3. Choose **OK** to save the pay unit.

## Recommended Conversion Factors

OnePayroll uses a standard working year of **260 working days** for conversion calculations. We recommend using **Daily** as the base pay unit with a conversion factor of **1**, then defining other pay units relative to it.

### Standard Pay Unit Configuration

The following table shows the recommended pay unit setup based on 260 working days per year:

|Code|Description|Conversion Factor|Unit of Measure|Calculation|Notes|
|----|-----------|-----------------|---------------|-----------|-----|
|HOURLY|Hourly|0.125|Hour|1 ÷ 8|Base unit; 8-hour workday|
|DAILY|Daily|1|Day|Base|**Base unit for conversions**|
|WEEKLY|Weekly|5|Week|5 days per week|Standard 5-day work week|
|BIWEEKLY|Biweekly|10|Week|2 weeks × 5 days|Two-week pay period|
|SEMIMONTHLY|Semimonthly|10.8333333|Semimonth|260 ÷ 24|24 pay periods per year|
|MONTHLY|Monthly|21.6666667|Month|260 ÷ 12|12 months per year|
|YEARLY|Yearly|260|Year|260 working days|Annual basis|

> [!IMPORTANT]
> These conversion factors are based on:
> - **260 working days per year** (52 weeks × 5 days)
> - **8-hour workday** for hourly conversions
> - **5-day work week**

### Why Daily as the Base Unit?

Using **Daily** with a conversion factor of 1 provides several advantages:

- **Intuitive**: One day equals one unit, making conversions easy to understand
- **Precision**: Avoids rounding errors that can occur with smaller base units
- **Flexibility**: Works well for both hourly and salaried employees
- **Standard**: Aligns with how most organizations think about working time

## Example Conversions

With the recommended setup, conversions work as follows:

### Daily to Yearly Conversion

An employee paid $200 per day:
```
Yearly Salary = $200 × 260 = $52,000
```

### Hourly to Yearly Conversion

An employee paid $25 per hour:
```
Daily Rate = $25 × 8 = $200
Yearly Salary = $200 × 260 = $52,000
```

Or using conversion factors directly:
```
Yearly Salary = $25 × (260 ÷ 0.125) = $25 × 2,080 = $52,000
```

### Yearly to Hourly Conversion

An employee with a $65,000 annual salary:
```
Daily Rate = $65,000 ÷ 260 = $250
Hourly Rate = $250 ÷ 8 = $31.25
```

Or using conversion factors directly:
```
Hourly Rate = $65,000 × (0.125 ÷ 260) = $65,000 ÷ 2,080 = $31.25
```

## Custom Conversion Factors

While we recommend the standard setup, you may need to adjust conversion factors for your organization's specific requirements:

### Different Work Week

If your organization uses a different standard work week (e.g., 4-day work week):

- Calculate annual working days: 52 weeks × 4 days = 208 days
- Adjust all conversion factors accordingly
- Update YEARLY conversion factor to 208
- Update WEEKLY conversion factor to 4
- Recalculate other factors based on the new annual days

### Different Daily Hours

If your standard workday is not 8 hours:

- Adjust the HOURLY conversion factor
- For a 7.5-hour day: 1 ÷ 7.5 = 0.1333333
- For a 10-hour day: 1 ÷ 10 = 0.1

> [!WARNING]
> Changing conversion factors after employees have been set up and payroll has been processed can affect historical reporting and calculations. Make these decisions carefully during initial setup.

## Best Practices

When setting up pay units:

- **Use the recommended factors**: Start with the standard 260-day configuration unless you have specific requirements
- **Be consistent**: Ensure all conversion factors are based on the same assumptions
- **Document your factors**: Keep a reference explaining why you chose specific conversion factors
- **Test conversions**: Verify that conversions between pay units produce expected results
- **Avoid changes**: Once established and in use, don't change conversion factors
- **Link to units of measure**: Always specify a unit of measure for better display consistency

## See Also

[Work with Pay Units](about-pay-units.md)  
[Assign Pay Units to Employee Types](pay-units-employee-types.md)  
[Convert Between Pay Units](pay-units-conversions.md)  
[Set Up Employee Types](setup-employee-types.md)  

[!INCLUDE[footer-include](includes/footer-banner.md)]
