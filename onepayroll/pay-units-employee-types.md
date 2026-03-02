---
title: Employee types and pay units
description: Learn how employee types determine compensation structure and pay unit configuration in OnePayroll.
author: zeande
ms.topic: overview
ms.date: 02/23/2026
---

# Employee types and pay units

Employee types define how an employee's compensation is structured. Each employee type links to a pay unit and specifies a compensation method, which together determine how wages are calculated during payroll.

> [!TIP]
> If you generated setup data from the Contoso Coffee Payroll Demo Dataset (see [Getting started](getting-started.md)), 7 pay units (Hourly through Yearly) and 4 employee types (Contractor, Hourly, Salary Exempt, Salary Non-Exempt) are already configured. Review and customize these rather than creating them from scratch.

## Employee type overview

Employee types are user-defined codes that you create on the **Employee Types** page. Each employee type specifies:

| Field | Description |
|-------|-------------|
| **Code** | A unique identifier for the employee type (up to 20 characters) |
| **Description** | A human-readable name for the employee type |
| **Pay Unit** | The unit of compensation (links to a pay unit record) |
| **Compensation Method** | How compensation is calculated: Regular or Work-Based |
| **Pay Conversion Factor** | A read-only field showing the conversion factor from the linked pay unit |

### Compensation methods

Each employee type uses one of two compensation methods:

**Regular**
- Employee receives a fixed amount per pay period
- Pay is divided evenly across periods based on the pay unit's conversion factor
- Use for employees with predictable, fixed compensation

**Work-Based**
- Employee is compensated based on units of work (hours, days, shifts, etc.)
- Pay varies each period depending on work reported
- Use for employees whose pay fluctuates with hours or days worked

> [!NOTE]
> The Compensation Method enum has exactly two values: Regular and Work-Based. It is not extensible.

## How employee types connect to pay units

Each employee type references a pay unit. The pay unit defines:

- **Code** — Identifier (e.g., "ANNUAL", "HOURLY", "DAILY")
- **Description** — Human-readable name
- **Conversion Factor** — A decimal value that converts between the pay unit and a standard base
- **Unit of Measure** — The HR unit of measure used for display

When you assign an employee type to an employee, the employee inherits the pay unit from that type. The pay unit appears on the employee card as a read-only field.

### To view an employee's pay unit

1. Search for **Employees** and open the employee card.
2. On the **OnePayroll** section, the **Pay Unit** field shows which pay unit applies, inherited from the employee's type.
3. The **Pay Factor** field shows the conversion factor from the linked pay unit.

> [!TIP]
> The pay unit is inherited from the employee type and cannot be changed directly on the employee card. To change an employee's pay unit, change their employee type or update the pay unit assigned to that employee type.

## Setting up employee types

**To create an employee type:**

1. Search for **Employee Types**.
2. Select **New**.
3. Enter a **Code** (e.g., "SALARIED", "HOURLY", "DAILY").
4. Enter a **Description** (e.g., "Salaried Employees", "Hourly Workers").
5. Select the **Pay Unit** that defines how compensation is expressed for this type.
6. Select the **Compensation Method** (Regular or Work-Based).
7. Verify the **Pay Conversion Factor** displays the expected conversion factor from the pay unit.

### Example employee types

| Code | Description | Pay Unit | Compensation Method |
|------|-------------|----------|-------------------|
| SALARIED | Salaried Employees | ANNUAL | Regular |
| HOURLY | Hourly Workers | HOURLY | Work-Based |
| DAILY | Daily Rate Workers | DAILY | Work-Based |
| MONTHLY | Monthly Staff | MONTHLY | Regular |

> [!NOTE]
> These are examples. Employee types are fully user-defined — you can create whatever types match your business needs.

## Assigning employee types to employees

**To assign an employee type:**

1. Search for **Employees** and open the employee card.
2. On the **OnePayroll** section, select the **Type** field.
3. Choose the appropriate employee type from the list.
4. The employee's **Pay Unit** and **Pay Factor** fields update automatically.

## Global pay unit

OnePayroll includes a **Global Pay Unit** setting on the **Payroll Setup** page. This setting:

- Defines the standard pay unit used across your organization for reporting
- Enables consistent compensation comparisons in lists and reports
- Serves as the basis for displaying employee compensation in a standardized format

When viewing employee lists, you can see each employee's compensation converted to the global pay unit, making it easy to compare across employees with different pay units.

### To set the global pay unit

1. Search for **Payroll Setup**.
2. In the **Global Pay Unit** field, select the pay unit you want to use for standardized reporting.

> [!TIP]
> Many organizations use an annual pay unit as the global pay unit for easy comparison of total compensation across all employees, regardless of whether they're paid hourly, daily, or monthly.

## Changing employee types

When you change an employee's employee type:

1. The employee's pay unit changes to match the new employee type.
2. The existing compensation rate value remains unchanged (the numeric value stays the same, but the unit changes).
3. You may need to recalculate or adjust the compensation rate to reflect the new unit.

> [!IMPORTANT]
> After changing an employee's type, verify that their compensation rate makes sense in the context of the new pay unit. For example, changing from an hourly type to an annual type with a rate of $25 would change the meaning from $25/hour to $25/year, which is likely not intended.

When you change the pay unit assigned to an employee type:

1. All employees with that type will use the new pay unit.
2. Historical payroll calculations are not affected.

> [!WARNING]
> Changing a pay unit on an employee type can affect how compensation is interpreted for all employees of that type. Make this change carefully.

## Best practices

- **Name types clearly** — Use descriptive codes and descriptions that reflect the compensation structure
- **Match business needs** — Create employee types that reflect your actual workforce categories
- **Verify after changes** — When changing employee types, verify compensation rates are correct
- **Document conventions** — Keep records of what each employee type represents

## See also

- [Pay units and conversions](pay-units-conversions.md)
- [Work with pay units](employee-pay-units.md)
- [Employee overview](employee-overview.md)

[!INCLUDE[footer-banner](../includes/footer-banner.md)]
