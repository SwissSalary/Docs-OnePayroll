---
title: Work with Pay Units
description: Learn about pay units in OnePayroll and how they enable flexible compensation rate management for different types of employees, from hourly workers to salaried staff.
author: myGitHubHandle

ms.service: dynamics365-business-central
ms.topic: article
ms.date: 01/06/2026
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
- **Annual**: Yearly salary

Each pay unit has a **Conversion Factor** that enables OnePayroll to convert rates from one unit to another. For example, if you store a global "Annual" pay unit with a conversion factor representing annual hours, the system can automatically convert an hourly rate to an annual salary or vice versa.

## Key Components of Pay Units

### Code and Description

- **Code**: A unique identifier for the pay unit (e.g., "HOURLY", "ANNUAL", "DAILY")
- **Description**: A user-friendly name that describes the pay unit (e.g., "Hourly", "Annual", "Daily")

### Conversion Factor

The **Conversion Factor** is the most critical component of a pay unit. It represents the relationship between this pay unit and other pay units in your system.

For example, if you define:
- Annual pay unit with conversion factor = 2,080 (standard annual hours: 52 weeks × 40 hours)
- Hourly pay unit with conversion factor = 1

Then an employee with an hourly rate of $25.00/hour would have an equivalent annual rate of $52,000.

> [!IMPORTANT]
> The conversion factor must be greater than zero. OnePayroll uses this value to calculate rate conversions, so it must be accurate for your payroll calculations to be correct.

### Unit of Measure

The **Unit of Measure** field links the pay unit to a standard Business Central unit of measure code. This connection:

- Provides a standardized description in the user's language
- Enables integration with Business Central's unit of measure system
- Improves reporting and display consistency

## Setting Up Pay Units

To configure pay units for your organization:

### To create a pay unit

1. Choose the ![Lightbulb that opens the Tell Me feature 1.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Pay Units**, and then choose the related link.
2. On the **Pay Units** page, create a new line and fill in the fields:
   - **Code**: A unique code for the pay unit (e.g., "HOUR", "ANNUAL", "DAILY")
   - **Description**: A descriptive name for the pay unit (e.g., "Hourly", "Annual", "Daily")
   - **Unit of Measure**: Select a unit of measure from Business Central (optional but recommended)
   - **Conversion Factor**: Enter the conversion factor that relates this unit to others

3. Choose **OK** to save the pay unit.

> [!TIP]
> Set up your most granular pay unit (typically "Hourly") with a conversion factor of 1, then define other pay units relative to it. This makes rate conversions more intuitive.

### Example: Setting Up Common Pay Units

Here's a typical configuration for a U.S.-based organization:

|Code|Description|Conversion Factor|Unit of Measure|Notes|
|----|-----------|-----------------|---------------|-----|
|HOUR|Hourly|1|Hour|Base unit for conversions|
|DAY|Daily|8|Day|8-hour workday|
|WEEK|Weekly|40|Week|40-hour work week|
|BIWEEK|Bi-Weekly|80|Week|Two weeks, 80 hours|
|MONTH|Monthly|173.33|Month|Annual hours ÷ 12|
|ANNUAL|Annual|2,080|Year|52 weeks × 40 hours|

With these factors:
- An hourly rate of $20.00 converts to an annual salary of $41,600 (20 × 2,080)
- An annual salary of $60,000 converts to an hourly rate of $28.85 (60,000 ÷ 2,080)

## Using Pay Units with Employee Types

Pay Units are assigned to employees indirectly through **Employee Types**. This design allows you to:

- Classify employees by how they're compensated (hourly workers, salaried employees, contractors)
- Automatically assign the correct pay unit to employees based on their type
- Maintain consistency across groups of similar employees

### To assign a pay unit to an employee type

1. Choose the ![Lightbulb that opens the Tell Me feature 1.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Employee Types**, and then choose the related link.
2. Select an employee type or create a new one.
3. In the **Pay Unit** field, select the appropriate pay unit for this employee type.

   > [!NOTE]
   > The Pay Unit field is required on employee types. You cannot save an employee type without specifying a pay unit.

4. The **Pay Factor** field automatically displays the conversion factor from the selected pay unit.

### Example: Employee Types with Pay Units

|Employee Type Code|Description|Pay Unit|Use Case|
|------------------|-----------|--------|--------|
|HOURLY|Hourly Employee|HOUR|Non-exempt hourly workers|
|SALARY|Salaried Employee|ANNUAL|Exempt salaried staff|
|CONTRACT|Contractor|HOUR|Independent contractors paid hourly|
|EXEC|Executive|ANNUAL|Executive compensation|

## Pay Units and Employee Compensation

When you assign an employee type to an employee, the employee automatically inherits the pay unit from that type:

### To view an employee's pay unit

1. Choose the ![Lightbulb that opens the Tell Me feature 1.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Employees**, and then choose the related link.
2. Select an employee.
3. On the employee card, the **Pay Unit** field (calculated from the employee type) shows which pay unit is used for this employee's compensation.

### Global Pay Unit

OnePayroll includes a **Global Pay Unit** setting on the Payroll Setup page. This setting:

- Defines the standard pay unit used across your organization for reporting
- Enables consistent compensation comparisons in lists and reports
- Serves as the basis for displaying employee compensation in a standardized format

When viewing employee lists, you can see each employee's compensation converted to the global pay unit, making it easy to compare compensation across employees with different pay units.

## Converting Between Pay Units

OnePayroll automatically converts between pay units using the conversion factors. The conversion formula is:

```
Target Amount = Source Amount × Target Conversion Factor ÷ Source Conversion Factor
```

### Example Conversion

If you have:
- Source: $25.00 per HOUR (conversion factor = 1)
- Target: ANNUAL (conversion factor = 2,080)

Then:
```
Annual Salary = $25.00 × 2,080 ÷ 1 = $52,000
```

And the reverse:
- Source: $52,000 per ANNUAL (conversion factor = 2,080)
- Target: HOUR (conversion factor = 1)

Then:
```
Hourly Rate = $52,000 × 1 ÷ 2,080 = $25.00
```

> [!TIP]
> The system validates that both pay units have non-zero conversion factors before performing conversions. If a conversion factor is zero or missing, you'll receive an error.

## Pay Units and Format Expressions

Each pay unit can generate a format expression that controls how compensation rates are displayed. This format expression:

- Shows rates with appropriate precision (typically 2 decimal places)
- Includes the unit of measure in the display (e.g., "/ Hour", "/ Year")
- Provides consistent formatting across reports and pages

The system automatically generates these format expressions using the unit of measure description. For example:
- A pay unit with unit of measure "Hour" displays as: `1,234.56 / Hour`
- A pay unit with unit of measure "Year" displays as: `52,000.00 / Year`

## Best Practices

When working with pay units in OnePayroll:

- **Plan your conversion factors carefully**: Base them on your actual work schedules and payroll periods
- **Use consistent base units**: Define one pay unit (typically hourly) as your base with a factor of 1
- **Consider regional standards**: Conversion factors may differ by country (e.g., standard annual hours)
- **Link to units of measure**: Always specify a unit of measure for better internationalization and display
- **Test conversions**: Verify that conversions between pay units produce expected results before processing payroll
- **Document your factors**: Keep a reference of why you chose specific conversion factors (e.g., "2,080 = 52 weeks × 40 hours")
- **Avoid changing factors**: Once established and in use, changing conversion factors can affect historical reporting
- **Use meaningful codes**: Pay unit codes should be intuitive (HOUR, DAY, ANNUAL) rather than cryptic

## Common Scenarios

### Scenario 1: Hourly Employee

An hourly employee is paid $18.50 per hour:
- Employee Type: HOURLY (Pay Unit = HOUR, Factor = 1)
- Compensation Rate: $18.50/hour
- Annual equivalent (for reporting): $18.50 × 2,080 = $38,480

### Scenario 2: Salaried Employee

A salaried employee earns $65,000 per year:
- Employee Type: SALARY (Pay Unit = ANNUAL, Factor = 2,080)
- Compensation Rate: $65,000/year
- Hourly equivalent (for calculations): $65,000 ÷ 2,080 = $31.25/hour

### Scenario 3: Part-Time Employee with Daily Rate

A part-time employee is paid $120 per day:
- Employee Type: DAILY (Pay Unit = DAY, Factor = 8)
- Compensation Rate: $120/day
- Hourly equivalent: $120 ÷ 8 = $15.00/hour
- Annual equivalent (assuming full-time): $15.00 × 2,080 = $31,200

## Troubleshooting

### Conversion factor is zero or not set

**Problem**: You receive an error about conversion factors when setting up pay units or employee types.

**Solution**: Ensure every pay unit has a conversion factor greater than zero. Check both the source and target pay units in any conversion.

### Compensation displays in wrong unit

**Problem**: Employee compensation appears in an unexpected pay unit.

**Solution**: Check the employee's type and verify it has the correct pay unit assigned. Also verify the global pay unit setting if compensation displays are standardized.

### Conversions produce unexpected values

**Problem**: Converting between pay units gives results that don't match your expectations.

**Solution**: Review your conversion factors. Ensure they're based on consistent assumptions (e.g., all annual factors use the same number of annual hours). Manually calculate the expected result and compare.

## See Also

[Set Up Employee Types](setup-employee-types.md)  
[Configure Payroll Setup](setup-payroll-setup.md)  
[Manage Employee Compensation](manage-employee-compensation.md)  
[Process Payroll](process-payroll.md)  

[!INCLUDE[footer-include](includes/footer-banner.md)]
