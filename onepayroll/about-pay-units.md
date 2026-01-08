---
title: Work with Pay Units
description: Learn about pay units in OnePayroll and how they enable flexible compensation rate management for different types of employees, from hourly workers to salaried staff.
author: myGitHubHandle

ms.service: dynamics365-business-central
ms.topic: article
ms.date: 01/08/2026
ms.author: MyMSFTAlias (if I work for Microsoft; otherwise edupont)
---
# Work with Pay Units in OnePayroll

Pay Units in OnePayroll define how employee compensation rates are expressed and calculated. They provide the foundation for converting between different time-based rates (hourly, daily, weekly, annual) and ensure consistent payroll calculations across your organization.

## Understanding Pay Units

A Pay Unit represents a unit of time or measure by which employee compensation is calculated. Common examples include:

- **Hourly**: Compensation per hour worked
- **Daily**: Compensation per day worked
- **Weekly**: Compensation per week
- **Monthly**: Compensation per month
- **Yearly**: Yearly salary

Each pay unit has a **Conversion Factor** that enables OnePayroll to convert rates from one unit to another. OnePayroll uses a standard of **260 working days per year** (52 weeks × 5 days) for conversion calculations.

> [!IMPORTANT]
> We recommend using **Daily** as the base pay unit with a conversion factor of **1**. This provides the most intuitive and accurate basis for conversions.

## Key Components of Pay Units

### Code and Description

- **Code**: A unique identifier for the pay unit (e.g., "DAILY", "HOURLY", "YEARLY")
- **Description**: A user-friendly name that describes the pay unit (e.g., "Daily", "Hourly", "Yearly")

### Conversion Factor

The **Conversion Factor** is the most critical component of a pay unit. It represents the relationship between this pay unit and other pay units in your system, based on the number of working days.

**Recommended conversion factors** (based on 260 working days per year):

|Pay Unit|Conversion Factor|Explanation|
|--------|-----------------|-----------|
|Hourly|0.125|1 ÷ 8 (8-hour workday)|
|Daily|1|**Base unit**|
|Weekly|5|5 working days per week|
|Biweekly|10|2 weeks × 5 days|
|Semimonthly|10.8333333|260 ÷ 24 pay periods|
|Monthly|21.6666667|260 ÷ 12 months|
|Yearly|260|260 working days per year|

> [!TIP]
> Using Daily as the base unit (factor = 1) makes conversions intuitive: one day equals one unit. All other pay units are defined as multiples or fractions of a day.

### Unit of Measure

The **Unit of Measure** field links the pay unit to a standard Business Central unit of measure code. This connection:

- Provides a standardized description in the user's language
- Enables integration with Business Central's unit of measure system
- Improves reporting and display consistency

## Pay Units and Employee Types

Pay Units are assigned to employees indirectly through **Employee Types**. This design allows you to:

- Classify employees by how they're compensated (hourly workers, salaried employees, contractors)
- Automatically assign the correct pay unit to employees based on their type
- Maintain consistency across groups of similar employees

### Common Employee Type Configurations

|Employee Type|Pay Unit|Use Case|
|-------------|--------|--------|
|Hourly Employee|HOURLY|Non-exempt hourly workers|
|Salaried Employee|YEARLY|Exempt salaried staff|
|Contractor|HOURLY|Independent contractors|
|Executive|YEARLY|Executive compensation|

## Global Pay Unit

OnePayroll includes a **Global Pay Unit** setting on the Payroll Setup page. This setting:

- Defines the standard pay unit used across your organization for reporting
- Enables consistent compensation comparisons in lists and reports
- Serves as the basis for displaying employee compensation in a standardized format

Many organizations use YEARLY as the global pay unit for easy comparison of total compensation across all employees.

## Working with Pay Units

To work effectively with Pay Units, see the following detailed articles:

- [Set Up Pay Units](pay-units-setup.md) - Learn how to create pay units with the correct conversion factors
- [Assign Pay Units to Employee Types](pay-units-employee-types.md) - Learn how to link pay units to employee types
- [Convert Between Pay Units](pay-units-conversions.md) - Understand how OnePayroll converts rates between different pay units

## Example Conversions

With the recommended setup based on 260 working days per year:

### Daily to Yearly
An employee paid $200 per day:
```
Yearly Salary = $200 × 260 = $52,000
```

### Hourly to Yearly
An employee paid $25 per hour:
```
Yearly Salary = $25 × (260 ÷ 0.125) = $25 × 2,080 = $52,000
```

### Yearly to Hourly
An employee with a $65,000 annual salary:
```
Hourly Rate = $65,000 × (0.125 ÷ 260) = $65,000 ÷ 2,080 = $31.25
```

## Best Practices

When working with pay units in OnePayroll:

- **Use the recommended factors**: Start with the standard 260-day configuration based on Daily = 1
- **Be consistent**: Ensure all conversion factors are based on the same assumptions
- **Test conversions**: Verify that conversions between pay units produce expected results
- **Link to units of measure**: Always specify a unit of measure for better display consistency
- **Avoid changing factors**: Once established and in use, don't change conversion factors
- **Use meaningful codes**: Pay unit codes should be intuitive (HOURLY, DAILY, YEARLY)
- **Document your setup**: Keep a reference explaining the basis for your conversion factors

## See Also

[Set Up Pay Units](pay-units-setup.md)  
[Assign Pay Units to Employee Types](pay-units-employee-types.md)  
[Convert Between Pay Units](pay-units-conversions.md)  
[Set Up Employee Types](setup-employee-types.md)  
[Process Payroll](process-payroll.md)  

[!INCLUDE[footer-include](includes/footer-banner.md)]
