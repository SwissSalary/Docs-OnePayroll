---
title: Set up pay cycles
description: Learn how to define pay cycle frequencies, configure pay groups, and set up payroll period dates.
author: zeande
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Set up pay cycles

Pay cycles control when employees are paid. You'll set up three things: pay cycles (frequencies), pay groups (employee collections), and period cutoff rules.

## Create a pay cycle

A pay cycle defines the frequency of payment (weekly, biweekly, monthly, etc.).

**To create a new pay cycle:**

1. Search for **Pay Cycles**
2. Select **New**
3. Enter pay cycle details:
   - **Code** - Unique identifier (e.g., "WEEKLY", "BIWEEKLY", "MONTHLY")
   - **Description** - Clear name (e.g., "Weekly Payroll", "Biweekly Payroll")
   - **Frequency** - Select from list: Weekly, Biweekly, Semi-Monthly, Monthly, Daily
4. Configure period calculation:
   - **Period Cutoff Type** - How periods start/end (specific day, calendar dates, etc.)
   - **Period Cutoff Day** - Day of week or day of month periods end
5. Save

### Pay cycle frequency options

| Frequency | Periods/Year | Period Length | Common Use |
|-----------|-------------|---------------|-----------|
| **Weekly** | 52 | 7 days | Hourly employees, retail |
| **Biweekly** | 26 | 14 days | Most common |
| **Semi-Monthly** | 24 | ~15 days | Salaried employees |
| **Monthly** | 12 | ~30 days | Executives, finance |
| **Daily** | 365 | 1 day | Contingent/gig workers |

### Period cutoff configuration

**For weekly payroll:**
- **Period Cutoff Type:** Specific day of week
- **Period Cutoff Day:** Friday (example: periods end every Friday)

**For biweekly payroll:**
- **Period Cutoff Type:** Every N days
- **Period Cutoff Days:** 14

**For semi-monthly payroll:**
- **Period Cutoff Type:** Two dates per month
- **Period Cutoff Days:** 15th and last day of month

**For monthly payroll:**
- **Period Cutoff Type:** Calendar month
- **Period Cutoff Days:** Last day of month

## Create pay groups

A pay group is a collection of employees who share the same pay cycle and posting rules.

**To create a pay group:**

1. Search for **Pay Groups**
2. Select **New**
3. Enter pay group details:
   - **Code** - Unique identifier (e.g., "WEEKLY", "BIWEEKLY", "MONTHLY")
   - **Description** - Clear name (e.g., "Weekly Hourly Employees")
   - **Pay Cycle** - Select the pay cycle created above
   - **Payment Frequency** - Confirmation of how often employees are paid
4. Configure GL posting:
   - **GL Account Mapping** - How to aggregate entries for GL posting
   - **Posting Type** - Gross, Net, or Both
5. Save

### GL account mapping options

**One Account Per Pay Type** (Default)
- Each pay type posts to its configured GL account
- Provides detailed GL posting, useful for analysis
- Example: Salary posts to 6000, OT to 6010, FIT to 2100

**Consolidated Account**
- All payroll amounts post to a single GL account
- Simpler GL posting, less detail in GL
- Useful if you aggregate payroll detail separately

**By Department**
- Payroll by department posts to different GL accounts
- If employees have department assignments, use to separate GL posting
- Example: Sales salary to 6001, HR salary to 6002

### Posting type options

**Gross Pay**
- Post all earnings and deductions separately
- Debit salary expense, credit payroll payable, credit tax payable
- Most common for detailed accounting

**Net Pay**
- Post only gross earnings and net pay
- Simpler GL impact
- Still deductible taxes, benefits handled separately

**Both**
- Post both gross and net for analysis
- More GL entries but detailed information

## Assign employees to paygroups

Once pay groups are created, assign employees to them.

**To assign an employee to a pay group:**

1. Search for **Employees**
2. Open the employee
3. On the **OnePayroll** tab:
   - **Pay Group** - Select the appropriate pay group (WEEKLY, BIWEEKLY, etc.)
4. Save

### Changing pay groups

If an employee changes pay groups (e.g., from weekly to biweekly):

1. Open the employee
2. On the **OnePayroll** tab, change **Pay Group** to new group
3. Save

OnePayroll automatically updates:
- Future payroll period calculations
- Next payment date
- Payroll scheduling

Historical payroll is unaffected.

## Set period cutoff rules (optional)

For complex period calculations, you can customize period cutoff rules.

**To set period cutoff rules:**

1. Search for **Period Cutoff Rules**
2. Select **New**
3. Enter:
   - **Pay Cycle** - Which pay cycle this applies to
   - **Effective Date** - When rule becomes effective
   - **Cutoff Date/Day** - When periods end under this rule
4. Save

### Example cutoff rules

**Weekly payroll that always ends on Friday:**
- **Frequency:** Weekly
- **Period Cutoff Day:** Friday
- Rule automatically aligns all weekly periods to end on Friday

**Biweekly payroll that changes at year-end:**
- **Normal periods:** Every other Friday
- **Special rule starting 12/25:** December period ends 12/24 instead (holiday accommodation)

## Validate pay cycle setup

Before processing payroll, verify your pay cycle setup is correct.

**To view periods created by your pay cycle:**

1. Search for **Payroll Periods**
2. Select the pay cycle you created
3. Review the list:
   - Period start and end dates correct?
   - Periods don't overlap?
   - All year is covered?
   - Number of periods matches expectations (52 for weekly, 26 for biweekly, 12 for monthly)?
4. Manually create any special periods

### Validating quick check

For a biweekly pay cycle:
- Should see ~26 periods per year
- Periods should be 14 days apart
- Start dates should be offset from prior period's end by 1 day
- No gaps or overlaps

For a monthly pay cycle:
- Should see 12 periods per year
- Periods aligned to calendar months (1st-last)

## Testing your setup

Before processing production payroll:

1. **Create a test payroll run** using your pay cycle
2. Verify:
   - Period dates calculated correctly
   - All expected employees included
   - GL posting routes to correct accounts
3. Make adjustments if needed
4. Void the test payroll
5. Process production payroll with confidence

## Common setup scenarios

### Scenario 1: Hourly employees - Weekly payroll
```
Pay Cycle:   WEEKLY
Frequency:   Weekly
Cutoff Day:  Friday
Pay Group:   WEEKLY
Employees:   John, Jane, Joe (all hourly)
Posting Rule: GL account by pay type
```

### Scenario 2: Salaried employees - Biweekly payroll
```
Pay Cycle:   BIWEEKLY
Frequency:   Biweekly
Cutoff Day:  Every 14 days from Jan 1
Pay Group:   BIWEEKLY
Employees:   Smith, Johnson, Williams (all salaried)
Posting Rule: GL account by pay type
```

### Scenario 3: Mixed payroll - Multiple pay groups
```
Pay Cycle 1: WEEKLY (hourly employees paid weekly)
Pay Cycle 2: BIWEEKLY (salaried employees paid biweekly)
Pay Cycle 3: MONTHLY (executives paid monthly)

Pay Group 1: WEEKLY-HOURLY (employees assigned to weekly)
Pay Group 2: BIWEEKLY-SALARY (employees assigned to biweekly)
Pay Group 3: MONTHLY-EXEC (employees assigned to monthly)

Each group has its own GL posting rules
```

## Troubleshooting

### "No periods found" error
- Verify pay cycle is properly configured with frequency
- Confirm period cutoff rules are set
- Check that pay cycle is assigned to pay group

### Wrong period dates calculated
- Verify period cutoff day is correct
- Check for overlapping or conflicting cutoff rules
- Review special period overrides (if any)

### Employee appears in wrong period
- Confirm employee's start date is before payroll period
- Verify employee is assigned to correct pay group
- Check for pay group change that's effective mid-period

### Payroll periods don't match calendar
- For monthly payroll, ensure periods align to calendar months
- For other frequencies, verify cutoff rules match business intent
- Consider special year-end periods

## Best practices

- **Align with company calendar** - Match pay cycle to fiscal year or calendar year as appropriate
- **Standardize frequencies** - Use fewest pay cycles possible (reduces complexity)
- **Test before production** - Always test new pay cycle setup with test payroll
- **Document cutoff rules** - Note any special cutoff rules for audit trail
- **Plan year-end** - Set up special periods for year-end adjustments in advance
- **Communicate to employees** - Clear payroll schedule reduces confusion

## What's next

- **[Process payroll runs](payroll-runs-process.md)** - Use pay cycles in payroll processing
- **[Employee setup](employee-setup.md)** - Assign employees to pay groups
- **[Pay types overview](pay-types-overview.md)** - Understand earnings and deductions
