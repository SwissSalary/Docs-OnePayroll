---
title: Departments and work locations
description: Learn how to set up organizational structure with departments and work locations in OnePayroll.
author: zeande
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Departments and work locations

Organizing employees by department and work location helps manage payroll, allocate costs, and maintain organizational structure.

> [!TIP]
> Departments and work locations are specific to your organization and should be created manually. If you generated master data from the Contoso Coffee Payroll Demo Dataset for demonstration purposes, 11 sample departments and (with the US localization) 3 sample work locations are included. In a production environment, create your own departments and work locations instead.

## Departments

Departments group employees by their functional area or organizational unit.

### Setting up departments

**To create a department:**

1. Search for **Departments**
2. Select **New**
3. Enter:
   - **Code** — Short identifier (e.g., "SALES", "ACCT", "MFG")
   - **Description** — Full department name (e.g., "Sales", "Accounting", "Manufacturing")
4. Optional: Set **Parent Department** to create a hierarchy
5. Save

### Department hierarchies

Departments can have parent-child relationships:

**Example hierarchy:**
```
Operations (Parent)
├── Manufacturing (Child)
│   ├── Assembly (Child of Manufacturing)
│   └── Quality (Child of Manufacturing)
├── Warehouse (Child)
└── Logistics (Child)
```

**To create a hierarchy:**

1. Create parent department first
2. When creating child departments, set **Parent Department** to the parent
3. Save each level of hierarchy
4. OnePayroll tracks relationships automatically

Hierarchies enable:
- Reporting by department structure
- Cost center allocation
- Organizational analysis at different levels

### Assigning employees to departments

**To assign an employee to a department:**

1. Open the **Employee** record
2. In the **General** tab:
   - **Department** - Select the department
3. Save

Employees automatically inherit department settings:
- Department hierarchy level
- Reporting groupings

## Work locations

Work locations track physical or remote work sites.

### Setting up work locations

**To create a work location:**

1. Search for **Work Locations**
2. Select **New**
3. Enter:
   - **Code** — Location identifier (e.g., "MAIN", "BRANCH1", "REMOTE")
   - **Description** — Location name (e.g., "Main Office", "Branch 1", "Remote")
   - **Type** — On-Site or Remote
   - **Address**, **City**, **Post Code**, **County**, **Country/Region Code** — Physical location details
4. Save

### Work location types

OnePayroll supports two work location types:

| Type | Used For |
|------|----------|
| **On-Site** | Corporate offices, plants, warehouses, stores, job sites |
| **Remote** | Work-from-home, distributed workforce |

### Assigning employees to work locations

**To assign an employee to a work location:**

1. Open the **Employee** record
2. In the **OnePayroll** tab:
   - **Work Location** - Select the location
3. Save

Employees can be assigned to a primary work location on the **Employee Card**.

Work location information is used for:
- Organizational reporting
- Local tax jurisdiction (for state/city taxes in the US localization)
- Workforce distribution analysis

## Using departments and locations in payroll

### Reporting by department

Generate payroll reports grouped by department:
- Total payroll by department
- Departmental benefit costs
- Department headcount

### Reporting by location

Generate payroll reports grouped by work location:
- Payroll by office or site
- Location-specific costs
- Location headcount

## Department hierarchies and reporting

Using department hierarchies enables multi-level analysis:

**Example: Payroll by department level**
```
Total Company Payroll: $500,000
├── Operations: $350,000
│   ├── Manufacturing: $200,000
│   │   ├── Assembly: $120,000
│   │   └── Quality: $80,000
│   └── Warehouse: $150,000
└── Corporate: $150,000
    ├── Sales: $80,000
    └── Admin: $70,000
```

Hierarchies enable:
- Analysis at each level (What's total for Operations?)
- Comparison across departments
- Trend analysis over time

## Special considerations

### Remote employees

Mark remote employees with the **Remote** work location type:
- Enables remote workforce reporting
- Can link to regional tax jurisdiction for US localization
- Simplifies analysis of distributed teams

## Moving employees between departments/locations

**To move an employee:**

1. Open the employee card
2. Update **Department** or **Work Location**
3. Save

OnePayroll's snapshot system tracks changes to employee records over time for audit purposes.

## Verification and testing

**Before processing payroll:**

1. Verify all active employees have departments assigned
2. Test payroll with employees from different departments
3. Check departmental payroll reports

## Troubleshooting

### "Department not found" error
- Verify department exists on the **Departments** page
- Check department code spelling
- Create department if it doesn't exist

## Best practices

- **Use consistent naming** — Standardize department codes and descriptions
- **Create hierarchies** — Use parent-child relationships for meaningful analysis
- **Assign all employees** — Ensure every employee has a department
- **Document changes** — Track department reorganizations
- **Geographic alignment** — Use work locations for geographic organization

## What's next

- **[Employee setup](employee-setup.md)** - Overall employee configuration
- **[Employee bank account information](employee-bank-accounts.md)** - Bank details on payment methods
- **[Process payroll runs](payroll-runs-process.md)** - Processing payroll with employees
