---
title: Employee types and pay units integration
description: Learn how employee types determine compensation structure and pay unit configuration.
author: zeande
ms.service: dynamics-365-business-central
ms.topic: overview
ms.date: 02/23/2026
---

# Employee types and pay units integration

Employee types define compensation classification and how pay units apply to different employee categories.

## Employee type overview

**What is an employee type?**
A classification that determines:
- How compensation is structured
- What pay units apply
- Which pay types are available
- Overtime eligibility
- Tax treatment (sometimes)
- Reporting categories

**Standard employee types:**
- Salaried (annual compensation, no overtime)
- Hourly (paid per hour, eligible for overtime)
- Commissioned (base + commission/performance pay)
- Daily (contract/temporary, paid per day)

## Salaried employees

### Characteristics

- **Pay unit:** Annual
- **Compensation structure:** Fixed annual salary
- **Overtime:** Generally not eligible (exempt vs. non-exempt rules apply)
- **Frequency:** Paid per payroll period (typically biweekly or semi-monthly)
- **Consistency:** Same amount each period

### Salaried pay setup

**Typical pay types:**
- Regular Salary (main compensation)
- Bonus (discretionary)
- Shift Differential (if applicable)
- Other special compensation

**No overtime calculation needed** (unless non-exempt status applies)

### Example

```
Employee: John (Salaried)
Annual salary: $50,000
Biweekly: $1,923.08
Structure: Same amount every biweekly period
```

## Hourly employees

### Characteristics

- **Pay unit:** Hourly rate
- **Compensation structure:** Variable based on hours worked
- **Overtime:** Eligible for overtime calculation (typically 1.5x after 40 hours/week)
- **Frequency:** Paid per payroll period based on hours worked
- **Variability:** Amount varies with hours

### Hourly pay setup

**Typical pay types:**
- Regular Wages (base rate for hours worked)
- Overtime (1.5x rate for qualifying hours)
- Double Time (2x rate, if applicable)
- Holiday Pay (if holiday hours count)
- Sick/Vacation (paid time off hours)

**Overtime calculation:**
- Hours worked > 40/week → paid at 1.5x (statutory minimum)
- Some employers pay more (2x for over 50 hours, etc.)

### Example

```
Employee: Jane (Hourly)
Hourly rate: $25/hour
Regular hours: 40 hours
Overtime hours: 5 hours
Gross:
  Regular: 40 × $25 = $1,000
  Overtime: 5 × $25 × 1.5 = $187.50
  Total: $1,187.50
```

## Commissioned employees

### Characteristics

- **Pay unit:** Mixed (base salary + commission)
- **Compensation structure:** Fixed base + variable commission
- **Commission basis:** Sales, profit, or performance metrics
- **Commission frequency:** Often paid with next regular paycheck
- **Variability:** Commission portion varies; base consistent

### Commissioned pay setup

**Typical pay types:**
- Base Salary (fixed amount)
- Commission (variable based on sales/performance)
- Commission Override (if supervising other sales)
- Bonus (discretionary or eligible bonus)
- Draw (advance on expected commission)

**Commission calculation (examples):**

```
Example 1: Percentage of sales
Sales: $50,000
Commission rate: 5%
Commission: $2,500

Example 2: Tiered commission
Sales: $100,000
  0-50k: 3% = $1,500
  50k-100k: 5% = $2,500
Commission: $4,000
```

### Example

```
Employee: Mike (Commissioned)
Base salary (biweekly): $1,500
Commission on $50,000 sales at 5%: $2,500
Deductions and taxes: Calculated on total ($4,000)
```

## Daily/Contract employees

### Characteristics

- **Pay unit:** Daily rate
- **Compensation structure:** Fixed daily rate × days worked
- **Frequency:** Paid per days worked in period
- **Variability:** Amount varies with days worked
- **Benefits:** Often limited (no benefits, no paid time off)

### Daily employee pay setup

**Typical pay types:**
- Daily Wages (base rate × days)
- Overtime (if applicable, 1.5x daily rate)
- Premiums (for specific work conditions)
- Bonuses (if project-based)

### Example

```
Employee: Alex (Daily/Contract)
Daily rate: $200/day
Days worked: 15 days in period
Gross: 15 × $200 = $3,000
```

## Integration with payroll

### Pay unit determination

**System determines pay unit from employee type:**

| Employee Type | Default Pay Unit | Override Possible |
|------|----------|----------|
| Salaried | Annual | No |
| Hourly | Hourly | Rare |
| Commissioned | Mixed (Annual base + Commission) | Yes |
| Daily | Daily | Rare |

### Pay type eligibility

**Pay types available by employee type:**

```
Salaried:
  ✓ Regular Salary
  ✓ Bonus
  ✓ Shift Differential
  ✗ Overtime (unless non-exempt)

Hourly:
  ✓ Regular Wages
  ✓ Overtime
  ✓ Double Time
  ✗ Regular Salary (contradiction)

Commissioned:
  ✓ Base Salary
  ✓ Commission
  ✓ Bonus
  ✗ Overtime (typically)

Daily:
  ✓ Daily Wages
  ✓ Overtime (if eligible)
  ✗ Regular Salary
```

## Changing employee type

If employee changes classification:

1. **Salaried → Hourly:** 
   - Change employee type
   - Switch from annual to hourly pay unit
   - Configure hourly rate
   - Enable overtime tracking

2. **Hourly → Salaried:**
   - Change employee type
   - Switch from hourly to annual pay unit
   - Set annual salary
   - Disable overtime calculation

3. **Effective date:** Changes take effect on specified date
4. **Snapshot:** New snapshot created for audit trail

## Overtime rules by type

### Salaried employees

- **Exempt:** No overtime (salary covers all hours)
- **Non-exempt:** Overtime applies (federal requirement)
- **Verify classification:** Ensure complies with DOL rules

### Hourly employees

- **Overtime standard:** 1.5x after 40 hours/week
- **Double time:** 2x (if policy or union)
- **Tracking:** Hours must be tracked (timesheets)
- **Calculation:** Automatic in OnePayroll

### Commissioned employees

- **Typically exempt:** No overtime (unless non-exempt classification)
- **Base salary:** May reduce overtime since includes compensation
- **Verify:** Check wage/hour laws for applicability

### Daily employees

- **Depends on total hours:** If hours exceed 40/week, overtime may apply
- **Calculation:** Convert to hourly equivalent, apply overtime
- **Tracking:** May require detailed hour tracking

## Benefits by employee type

**Benefits eligibility often tied to employee type:**

```
Salaried:
  ✓ Health insurance (typical)
  ✓ 401k/Pension
  ✓ Paid time off
  ✓ Disability insurance

Hourly:
  ✓ Health insurance (if eligible)
  ✓ 401k (if offered)
  ✓ Paid time off (varies)
  
Commissioned:
  ~ Benefits vary by policy
  
Daily/Contract:
  ✗ No benefits (typically)
```

## Reporting by employee type

**Reports often segmented by type:**
- Salaried headcount and costs
- Hourly headcount and overtime hours
- Commissioned earnings breakdown
- Daily/Contract workforce

## Best practices

- **Classify correctly** - Ensure employee type matches actual classification
- **Verify exempt/non-exempt** - Salaried status doesn't guarantee exempt (wage/hour law)
- **Document changes** - Track when employee type changes
- **Test transitions** - When changing types, test payroll before live
- **Review overtime** - Regularly ensure overtime calculated correctly
- **Policy alignment** - Ensure pay structure matches company policy
- **Compliance monitoring** - Monitor wage/hour compliance per type

## What's next

- **[Pay units and conversions](pay-units-conversions.md)** - Pay unit details
- **[Employee setup](employee-setup.md)** - Employee configuration
- **[Pay type setup](pay-types-setup.md)** - Pay type configuration

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
