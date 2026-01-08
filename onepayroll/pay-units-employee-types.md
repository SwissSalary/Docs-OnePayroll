---
title: Assign Pay Units to Employee Types
description: Learn how to assign pay units to employee types and how employees inherit their pay unit from their employee type.
author: myGitHubHandle

ms.service: dynamics365-business-central
ms.topic: article
ms.date: 01/08/2026
ms.author: MyMSFTAlias (if I work for Microsoft; otherwise edupont)
---
# Assign Pay Units to Employee Types

Pay Units are assigned to employees indirectly through **Employee Types**. This design allows you to classify employees by how they're compensated and automatically assign the correct pay unit based on their type.

## Understanding Employee Types and Pay Units

Employee Types serve as templates that define common characteristics for groups of employees. The pay unit is a key component of an employee type because it determines how compensation rates are expressed for that type of employee.

### Benefits of Using Employee Types

- **Consistency**: All employees of the same type use the same pay unit
- **Efficiency**: Set up the pay unit once on the employee type rather than on each employee
- **Clarity**: Employee types make it clear how different groups of employees are compensated
- **Maintenance**: Changes to an employee type's pay unit can affect all employees of that type

## Assigning Pay Units to Employee Types

### To assign a pay unit to an employee type

1. Choose the ![Lightbulb that opens the Tell Me feature 1.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Employee Types**, and then choose the related link.
2. Select an employee type or create a new one.
3. In the **Pay Unit** field, select the appropriate pay unit for this employee type.

   > [!NOTE]
   > The Pay Unit field is required on employee types. You cannot save an employee type without specifying a pay unit.

4. The **Pay Factor** field automatically displays the conversion factor from the selected pay unit.

## Common Employee Type Configurations

### Example Employee Types with Pay Units

|Employee Type Code|Description|Pay Unit|Use Case|
|------------------|-----------|--------|--------|
|HOURLY|Hourly Employee|HOURLY|Non-exempt hourly workers|
|SALARY|Salaried Employee|YEARLY|Exempt salaried staff|
|CONTRACT|Contractor|HOURLY|Independent contractors paid hourly|
|EXEC|Executive|YEARLY|Executive compensation|
|PART-TIME|Part-Time Employee|HOURLY|Part-time staff paid hourly|

### Choosing the Right Pay Unit

Consider these factors when assigning pay units to employee types:

- **How employees are paid**: Hourly workers use HOURLY, salaried staff use YEARLY or MONTHLY
- **Legal classification**: Non-exempt employees typically use HOURLY, exempt employees use YEARLY
- **Business practices**: Match your organization's standard compensation practices
- **Reporting needs**: Consider how you want to compare compensation across employee groups

## How Employees Inherit Pay Units

When you assign an employee type to an employee, the employee automatically inherits the pay unit from that type.

### To view an employee's pay unit

1. Choose the ![Lightbulb that opens the Tell Me feature 1.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Employees**, and then choose the related link.
2. Select an employee.
3. On the employee card, the **Pay Unit** field (inherited from the employee type) shows which pay unit is used for this employee's compensation.

> [!TIP]
> The pay unit is displayed on the employee card but cannot be changed directly. To change an employee's pay unit, you must either change their employee type or change the pay unit assigned to their employee type.

## Global Pay Unit

OnePayroll includes a **Global Pay Unit** setting on the Payroll Setup page. This setting:

- Defines the standard pay unit used across your organization for reporting
- Enables consistent compensation comparisons in lists and reports
- Serves as the basis for displaying employee compensation in a standardized format

When viewing employee lists, you can see each employee's compensation converted to the global pay unit, making it easy to compare compensation across employees with different pay units.

### To set the global pay unit

1. Choose the ![Lightbulb that opens the Tell Me feature 1.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Payroll Setup**, and then choose the related link.
2. On the **Payroll Setup** page, in the **Global Pay Unit** field, select the pay unit you want to use for standardized reporting.

> [!TIP]
> Many organizations use YEARLY as the global pay unit for easy comparison of total compensation across all employees, regardless of whether they're paid hourly, weekly, or monthly.

## Common Scenarios

### Scenario 1: Hourly Employee

An hourly employee is paid $18.50 per hour:
- Employee Type: HOURLY (Pay Unit = HOURLY, Factor = 0.125)
- Compensation Rate: $18.50/hour
- Yearly equivalent (for reporting with global pay unit = YEARLY): $18.50 × (260 ÷ 0.125) = $38,480

### Scenario 2: Salaried Employee

A salaried employee earns $65,000 per year:
- Employee Type: SALARY (Pay Unit = YEARLY, Factor = 260)
- Compensation Rate: $65,000/year
- Daily equivalent: $65,000 ÷ 260 = $250/day

### Scenario 3: Contractor Paid Hourly

A contractor is paid $75 per hour:
- Employee Type: CONTRACT (Pay Unit = HOURLY, Factor = 0.125)
- Compensation Rate: $75/hour
- Yearly equivalent (for reporting): $75 × (260 ÷ 0.125) = $156,000

## Changing Pay Units

### Changing an Employee Type's Pay Unit

When you change the pay unit assigned to an employee type:

1. All employees with that type will use the new pay unit
2. Existing compensation rates remain in the original pay unit
3. New conversions will use the new pay unit's conversion factor
4. Historical payroll calculations are not affected

> [!WARNING]
> Changing a pay unit on an employee type can affect how compensation is displayed for all employees of that type. Make this change carefully and communicate it to users.

### Moving an Employee to a Different Type

When you change an employee's employee type:

1. The employee's pay unit changes to match the new employee type
2. The employee's existing compensation rate remains unchanged (the numeric value stays the same, but the unit changes)
3. You may need to recalculate or adjust the compensation rate to reflect the new unit

> [!IMPORTANT]
> After changing an employee's type, verify that their compensation rate makes sense in the context of the new pay unit. For example, if you change from HOURLY to YEARLY, a rate of $25 would change from $25/hour to $25/year, which is likely not intended.

## See Also

[Work with Pay Units](about-pay-units.md)  
[Set Up Pay Units](pay-units-setup.md)  
[Convert Between Pay Units](pay-units-conversions.md)  
[Set Up Employee Types](setup-employee-types.md)  

[!INCLUDE[footer-include](includes/footer-banner.md)]
