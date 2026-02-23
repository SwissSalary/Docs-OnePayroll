---
title: Departments and work locations
description: Learn how to set up organizational structure with departments and work locations in OnePayroll.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Departments and work locations

Organizing employees by department and work location helps manage payroll, allocate costs, and maintain organizational structure.

## Departments

Departments group employees by their functional area or organizational unit.

### Setting up departments

**To create a department:**

1. Search for **Departments**
2. Select **New**
3. Enter:
   - **Code** - Short identifier (e.g., "SALES", "ACCT", "MFG")
   - **Name** - Full department name (e.g., "Sales", "Accounting", "Manufacturing")
   - **Description** - Optional notes
4. Optional: Set **Parent Department** to create hierarchy
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
- GL posting by department level (Operations total vs. Manufacturing detail)
- Reporting by department structure
- Cost center allocation

### Assigning employees to departments

**To assign an employee to a department:**

1. Open the **Employee** record
2. In the **General** tab:
   - **Department** - Select the department
3. Save

Employees automatically inherit department settings:
- GL account mapping (if configured per department)
- Cost center (if linked to department)
- Department hierarchy level

### Department-level GL posting

If you want different departments posting to different GL accounts:

1. Search for **GL Account by Department**
2. For each combination of department + pay type:
   - SpecifyGL Account to use for that department
3. When processing payroll, employee pay type posts to their department's account

**Example:**
- Sales Salary (Sales Dept) → GL 6001 Sales Salaries
- Sales Salary (Admin Dept) → GL 6002 Admin Salaries

## Work locations

Work locations track physical office, plant, or job site locations.

### Setting up work locations

**To create a work location:**

1. Search for **Work Locations**
2. Select **New**
3. Enter:
   - **Code** - Location identifier (e.g., "MAIN", "BRANCH1", "FIELD")
   - **Name** - Location name (e.g., "Main Office", "Branch 1", "Field Site")
   - **Address** - Physical location address
   - **City/State/Zip** - Location address details
4. Optional: Set **Work Location Type** (Office, Warehouse, Manufacturing, Field, Remote, etc.)
5. Save

### Work location types

OnePayroll includes built-in location types:

| Type | Used For |
|------|----------|
| **Office** | Corporate offices, administrative centers |
| **Warehouse** | Distribution centers, storage facilities |
| **Manufacturing** | Production plants, assembly lines |
| **Field/Job Site** | Construction, fieldwork, temporary locations |
| **Retail** | Stores, sales locations |
| **Remote** | Work-from-home, distributed workforce |

You can customize location types as needed.

### Assigning employees to work locations

**To assign an employee to a work location:**

1. Open the **Employee** record
2. In the **OnePayroll** tab:
   - **Work Location** - Select the location
3. Save

Employees can be assigned to:
- Primary work location (where they typically work)
- Multiple locations (if they work across locations)

Work location information is used for:
- Time tracking and attendance (which location clocked in/out)
- Local tax jurisdiction (for city/county taxes)
- Facilities and utilities allocation
- Compliance (some jurisdictions have location-specific rules)

## Using departments and locations in payroll

### GL posting by department

If configured, payroll automatically posts to department-specific GL accounts:

```
Employee: John (Sales Dept) → Salary posts to GL 6001 (Sales Salaries)
Employee: Jane (Admin Dept) → Salary posts to GL 6002 (Admin Salaries)
Employee: Bob (Manufacturing Dept) → Salary posts to GL 6003 (Mfg Salaries)
```

### Local tax by work location

If employee works in location with local income tax:

```
Employee: Mike (Remote/California) → California state tax + city tax (if applicable)
Employee: Sara (Office/New York) → New York state tax + NYC tax
```

### Reporting by department

Generate payroll reports by department:
- Total payroll by department
- Department salary budget vs. actual
- Departmental benefit costs

### Reporting by location

Generate payroll reports by location:
- Payroll by office/plant
- Location-specific benefit costs
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

### Employees with multiple work locations

If an employee works at multiple locations:

1. Set primary location on employee record
2. Create time entries to track which location they worked
3. Allocate compensation to locations based on time
4. Payroll and reports can break down by location

### Temporary assignments

For employees temporarily assigned to different location:

1. Update work location to temporary assignment
2. Set effective date for the change
3. OnePayroll tracks assignment changes
4. Can restore original location when assignment ends

### Remote employees

Mark remote employees with "Remote" location type:
- Enables remote workforce reporting
- Can link to regional tax jurisdiction
- Simplifies analysis of distributed team

## Moving employees between departments/locations

**To move an employee:**

1. Open the employee
2. Update **Department** or **Work Location**
3. Set **Effective Date** if change isn't immediate
4. Save

OnePayroll tracks:
- Previous departments/locations for history
- Change dates for audit trail
- Salary posting to correct accounts after change

## Verification and testing

**Before processing payroll:**

1. Verify all active employees have departments assigned
2. Confirm GL accounts are set up for each department (if using GL posting by department)
3. Test payroll with employees from different departments
4. Verify posting routes to correct GL accounts
5. Check departmental payroll reports

## Troubleshooting

### "Department not found" error
- Verify department exists
- Check department code spelling
- Create department if it doesn't exist

### "Wrong GL account posting"
- Verify GL account mapping for department
- Check employee's department assignment
- Confirm GL account exists and is active

### Payroll not posting to correct department
- Verify employee's department assignment
- Check GL posting rules
- Confirm department hierarchy (if using)

## Best practices

- **Use consistent naming** - Standardize department codes and names
- **Create hierarchies** - Use department hierarchies for meaningful analysis
- **Assign all employees** - Ensure every employee has a department
- **Document changes** - Track department reorganizations
- **Test GL posting** - Verify payroll posts to correct department accounts
- **Geographic alignment** - Use work locations for geographic organization

##What's next

- **[Employee setup](employee-setup.md)** - Overall employee configuration
- **[Employee bank accounts](employee-bank-accounts.md)** - Direct deposit setup
- **[Process payroll runs](payroll-runs-process.md)** - Processing payroll with employees
