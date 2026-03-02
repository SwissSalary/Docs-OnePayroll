---
title: Work with employee pay units
description: Learn how pay units work on the employee card, how they're inherited from employee types, and how conversions work.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 02/23/2026
---

# Work with employee pay units

Pay units define the unit of measurement for employee compensation. An employee might be described as earning "$80,000 annually" (annual pay unit), "$38.46 per hour" (hourly pay unit), or "$300 per day" (daily pay unit). OnePayroll uses conversion factors to translate between these units.

## How pay units are assigned to employees

Employees don't select a pay unit directly. Instead, the pay unit is inherited from the employee's **Employee Type**:

1. Each **Employee Type** specifies a **Pay Unit**.
2. When you assign an employee type to an employee, the **Pay Unit** and **Pay Factor** fields on the employee card are populated automatically as read-only FlowFields.

### To view an employee's pay unit

1. Search for **Employees** and open the employee card.
2. In the **OnePayroll** section, view:
   - **Type** — The employee type assigned to this employee
   - **Pay Unit** — The pay unit inherited from the employee type (read-only)
   - **Pay Factor** — The conversion factor from the pay unit (read-only)

> [!TIP]
> To change an employee's pay unit, change their **Employee Type** to one that uses the desired pay unit, or update the pay unit on the current employee type. You cannot change the pay unit directly on the employee card.

## Understanding conversion factors

Each pay unit has a **Conversion Factor** that defines how compensation values translate between units. The conversion factor is a decimal value defined on the **Pay Units** page.

**Example pay units and conversion factors:**

| Pay Unit | Description | Conversion Factor | Meaning |
|----------|-------------|-------------------|---------|
| ANNUAL | Annual salary | 260 | 260 working days per year |
| HOURLY | Hourly rate | 0.125 | 1/8 of a working day |
| DAILY | Daily rate | 1 | Base unit (1 day) |
| MONTHLY | Monthly salary | 21.67 | Average working days per month |

> [!NOTE]
> These are examples. Pay units and their conversion factors are fully user-configurable on the **Pay Units** page.

## Converting between pay units

OnePayroll uses conversion factors to express the same compensation in different units. For example:

**Example: Annual to daily**

An employee earns $65,000/year with an annual pay unit (conversion factor = 260):

- Daily equivalent: $65,000 ÷ 260 = $250/day

**Example: Hourly to annual**

An employee earns $18.50/hour with an hourly pay unit (conversion factor = 0.125):

- Daily equivalent: $18.50 ÷ 0.125 = $148/day
- Annual equivalent: $148 × 260 = $38,480/year

For more details on conversion math, see [Pay units and conversions](pay-units-conversions.md).

## Global pay unit

The **Global Pay Unit** on the **Payroll Setup** page defines a standardized unit for comparing compensation across employees with different pay units. When viewing employee lists, compensation can be displayed in the global pay unit for easy comparison.

**To set the global pay unit:**

1. Search for **Payroll Setup**.
2. In the **Global Pay Unit** field, select the pay unit you want to use for standardized reporting.

> [!TIP]
> Many organizations use an annual pay unit as the global pay unit for easy comparison of total compensation across all employees.

## Best practices

- **Use employee types consistently** — Assign the same employee type to employees with identical compensation structures
- **Verify conversion factors** — Ensure your pay unit conversion factors reflect your organization's actual working days and hours
- **Check after type changes** — When changing an employee's type, verify that their compensation rate still makes sense in the context of the new pay unit
- **Use the global pay unit** — Set a global pay unit on Payroll Setup for meaningful cross-employee comparisons

## See also

- [Employee types and pay units](pay-units-employee-types.md)
- [Pay units and conversions](pay-units-conversions.md)
- [Employee overview](employee-overview.md)

[!INCLUDE[footer-banner](../includes/footer-banner.md)]
