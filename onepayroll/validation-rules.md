---
title: Validation rules and business rule engine
description: Learn how to configure validation rules and business rules in OnePayroll.
author: zeande
ms.service: dynamics-365-business-central
ms.topic: overview
ms.date: 02/23/2026
---

# Validation rules and business rule engine

OnePayroll includes a configurable rules engine for field-level validation and business logic enforcement.

## Rules engine overview

**What are validation rules?**
Rules define:
- Which fields are required in certain situations
- What values are acceptable
- When validation errors should occur
- Custom business logic enforcement

**Examples:**
- "Salary must be > 0"
- "Department required if pay type is hourly"
- "Overtime requires manager approval"
- "Garnishment effective date cannot be in past"

## Rule types

### Required field rules
Enforce mandatory data entry:
- Example: "Employee department required for all new employees"
- Error: "Department is required"

### Value validation rules
Restrict allowed values:
- Example: "Hourly rate must be between min wage and $200/hour"
- Example: "Pay group must be assigned before payroll processing"

### Conditional rules
Apply based on conditions:
- Example: "If pay type is Commission, sales region required"
- Example: "If hourly employee, timesheet required"

### Dependent rules
Rules based on related records:
- Example: "Benefits deduction cannot exceed gross wages"
- Example: "Garnishment priority must be in order"

### Business logic rules
Complex rules for business scenarios:
- Example: "Employees in CA must have CA tax setup"
- Example: "Direct deposit requires valid bank account"

## Predefined rules

OnePayroll includes predefined rules for common scenarios:

| Rule | Applies To | Condition |
|------|-----------|-----------|
| Employee must be active | All payroll | Processing payroll |
| Department required | Hourly employees | Time tracking enabled |
| Bank account required | Direct deposit | Payment method selected |
| W-4 required | Federal tax | Employee in US |
| Pay type required | Payroll entry | Creating pay entries |
| Garnishment order | Garnishments | Multiple garnishments |

## Configuring custom rules

### Creating a validation rule

1. Search for **Validation Rules**
2. Select **New**
3. Configure rule:
   - **Rule Name** - Identifier
   - **Table** - Table being validated
   - **Field** - Field being validated
   - **Condition** - When rule applies
   - **Validation** - What's being validated
   - **Error Message** - Message if fails
4. Option: Enable/disable as needed

### Rule conditions

**Conditions determine when rule applies:**
- Always (on every operation)
- On insert (when record created)
- On update (when record modified)
- On delete (when record deleted)
- When field = specific value
- When field > or < threshold
- Custom formula/expression

### Severity levels

Rules can have severity:
- **Error** - Prevents operation (hard stop)
- **Warning** - Allows operation but warns user
- **Info** - Informational only

## Rule evaluation

### When rules are checked

Rules evaluated at:
1. **Field entry** - Immediate validation as user types
2. **Record save** - Validation before saving
3. **Payroll processing** - Validation before payroll runs
4. **Report generation** - Validation before reports run

### Performance

Rules impact system performance:
- Many rules = slower operations
- Complex rules (with lookups) = significant performance impact
- Best practice: Minimize rules, use simple conditions

## Managing rules

### Enabling/disabling rules

To temporarily disable rule:
1. Open rule
2. Set **Enabled** = No
3. Rule no longer enforced
4. Can re-enable later

**Use case:**
- Disable during data migration
- Disable for special scenarios
- Re-enable for normal operations

### Testing rules

Before enabling rule in production:

1. Test with sample data
2. Verify error message clear
3. Check performance impact
4. Verify all processes still work

### Troubleshooting rules

**"Validation rule prevents operation"**
- Verify rule is appropriate (not obsolete)
- Review error message for guidance
- Correct data to satisfy rule or disable rule

**"Unexpected validation failure"**
- Check rule conditions
- Verify rule applies to current situation
- Review rule logic

**"Rule applies incorrectly"**
- Verify conditions are specific enough
- Add additional conditions to limit scope
- Consider splitting into multiple rules

## Use cases

### Payroll accuracy

**Example rules:**
- "Gross pay must be > 0"
- "Deductions cannot exceed net pay"
- "Employee must have pay group assigned"

### Compliance

**Example rules:**
- "W-4 must be on file before processing payroll"
- "State resident required for multi-state employee"
- "Bank account required for direct deposit"

### Business logic

**Example rules:**
- "Overtime requires manager approval"
- "Commission requires territory assigned"
- "Garnishment priority must be sequential"

### Data quality

**Example rules:**
- "Employee address required"
- "Birth date must be valid"
- "No future-dated termination"

## Advanced rule features

### Rule templates

For common scenarios, use templates:
- "Required field" template
- "Value range" template
- "Conditional" template
- "Dependent record" template

### Rule groups

Organize related rules:
- "Employee data validation" group
- "Payroll processing" group
- "Tax compliance" group
- "Payment processing" group

## Performance considerations

**Minimize impact:**
- Use simple field comparisons (fast)
- Avoid complex lookups (slow)
- Disable unused rules
- Test rules under load before production
- Monitor system performance after adding rules

## Best practices

- **Start simple** - Add rules gradually, not all at once
- **Clear messages** - Write error messages users understand
- **Document rules** - Note why each rule exists
- **Review regularly** - Remove obsolete rules
- **Test thoroughly** - Validate rules work as intended
- **Performance check** - Ensure rules don't slow system noticeably
- **Severity appropriate** - Use Error for critical, Warning for guidance

## What's next

- **[Payroll setup](payroll-setup.md)** - Payroll configuration
- **[Employee setup](employee-setup.md)** - Employee configuration
