---
title: Validation rules
description: Learn how OnePayroll's validation rules engine enforces data quality and business rules.
author: zeande
sws.service: onepayroll
sws.topic: overview
sws.date: 02/23/2026
---

# Validation rules

OnePayroll includes a validation rules engine that enforces data quality and business rules on payroll records. Each rule targets a specific table and field, and fires during payroll processing to catch missing or invalid data before it causes problems.

## Validation rule structure

Each validation rule record consists of:

| Field | Description |
|-------|-------------|
| **Table ID** | The table being validated |
| **Field ID** | The specific field being checked |
| **Severity** | Warning or Error — determines whether the issue blocks processing |
| **Validation Rule Type** | Simple or Complex |
| **Rule** | For complex rules, a reference to a rule definition |
| **Filter Expression** | For simple rules, a filter condition the field value must satisfy |
| **Message** | The message shown when validation fails |

### Rule types

**Simple rules** check whether a field value matches a filter expression. The most common simple rule is a "not empty" check — verifying that a required field has been filled in.

**Complex rules** reference a rule definition that can evaluate more sophisticated conditions involving multiple fields or related records.

### Severity levels

- **Error** — The validation failure blocks the operation. The issue must be resolved before proceeding.
- **Warning** — The validation failure is reported but does not block the operation. The user can choose to address it or continue.

## Default validation rules

OnePayroll ships with predefined validation rules for common data quality requirements. These include:

### Employee validation

- **Address** — Employee address must not be empty (Error)
- **City** — Employee city must not be empty (Error)
- **Post Code** — Employee post code must not be empty (Error)
- **Country/Region Code** — Employee country/region code must not be empty (Error)
- **Birth Date** — Employee birth date must not be empty (Error)
- **Work Location** — Employee work location must not be empty (Error)
- **Pay Group** — Employee pay group must not be empty (Error)
- **Type** — Employee type must not be empty (Error)

### Employee type validation

- **Pay Unit** — Employee type pay unit must not be empty (Error)

### Garnishment validation

- **Garnishment Type** — Garnishment line garnishment type must not be empty (Error)
- **Agency No.** — Garnishment line agency number must not be empty (Error)
- **Remittance ID** — Garnishment line remittance ID must not be empty (Error)
- **Exemption check** — Garnishment line exemption configuration must be complete (Warning, complex rule)

## Managing validation rules

### Viewing validation rules

1. Search for **Validation Rules**.
2. The list shows all configured rules with their table, field, severity, and type.

### Adjusting severity

You can change a rule's severity between **Warning** and **Error** depending on your organization's needs. For example, if you want to allow employees without a work location during initial setup, you could change that rule's severity from Error to Warning.

### Adding rules

You can add new simple validation rules to enforce additional data quality requirements:

1. On the **Validation Rules** page, add a new line.
2. Select the **Table ID** and **Field ID** for the field you want to validate.
3. Set the **Severity** (Warning or Error).
4. Set the **Validation Rule Type** (typically Simple for field-level checks).
5. Enter a **Filter Expression** to define the validation condition.
6. Enter a **Message** to display when the rule fails.

## When rules are evaluated

Validation rules are evaluated during payroll processing. Before payroll calculations run, the rules engine checks all applicable rules against the data being processed. Any rule violations are reported based on their severity level.

## Best practices

- **Start with defaults** — The predefined rules cover the most important data quality checks
- **Use Error for critical data** — Fields required for correct payroll calculation should use Error severity
- **Use Warning for advisory checks** — Fields that improve data quality but don't block processing should use Warning severity
- **Review after setup** — After initial data migration, review any validation warnings to clean up data
- **Keep rules focused** — Each rule should check one specific condition for clarity

## See also

- [Getting started](getting-started.md)
- [Payroll runs overview](payroll-runs-overview.md)

[!INCLUDE[footer-banner](../includes/footer-banner.md)]
