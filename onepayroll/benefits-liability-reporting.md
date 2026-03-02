---
title: Benefits liability and reporting
description: Learn how OnePayroll tracks employer and employee benefit costs through coverage types, liability settings, and GL posting.
author: zeande
ms.topic: concept
ms.date: 02/23/2026
---

# Benefits liability and reporting

Benefits create costs for both employees and employers. OnePayroll uses **benefit coverage types** and **coverage records** to define who is liable for each portion of a benefit's cost. These liability settings determine how benefit amounts are calculated during payroll and how they post to the general ledger.

## How benefit liability works

Each benefit is linked to a **coverage type**, and each coverage record within that type defines the liability split between employee and employer. This controls how the benefit amount is calculated and posted:

- The **Employee Liability** field determines whether the employee bears cost for this coverage. When set to **Employee**, the benefit is deducted from the employee's pay using the employee pay type configured on the benefit.
- The **Employer Liability** field determines whether the employer bears cost. When set to **Employer**, the employer contribution is posted using the employer pay type configured on the benefit.

Both fields use the **Benefit Liability** enum with these values:

| Value | Meaning |
|---|---|
| **Not Liable** | No cost is assigned to this party for this coverage. |
| **Employee** | The employee is liable for this portion. |
| **Employer** | The employer is liable for this portion. |

A single coverage can have both employee and employer liability, only one, or neither, depending on the benefit design.

## Coverage types

Coverage types group related coverage options. For example, a health insurance benefit might have a coverage type with coverages for "Employee Only," "Employee + Spouse," and "Family." Each coverage specifies its own liability settings.

Coverage types can inherit from other coverage types using the **Inherits-From Type** field, creating a hierarchy. This allows you to define base coverage options once and extend them for specific benefits.

To set up coverage types, search for **Benefit Coverage Setup**.

## GL posting for benefits

When payroll is processed, OnePayroll creates payroll entries for each liable party. These entries post to GL accounts based on the pay types configured on the benefit:

- **Employee Pay Type** &mdash; The pay type (category: Earnings or Employee Deductions) used for the employee's portion. The pay type's **Account No.** and **Balance Account No.** determine where the employee deduction is posted.
- **Employer Pay Type** &mdash; The pay type (category: Employer Contributions) used for the employer's portion. The pay type's GL accounts determine where the employer expense and liability are posted.

To review posted benefit amounts, open the **General Ledger Entries** and filter by the GL accounts assigned to your benefit pay types.

## Reconciling benefit liabilities

After payroll is posted, benefit liability balances accumulate in the GL until payments are remitted to benefit providers. To reconcile:

1. Open the **Chart of Accounts** and navigate to the benefit liability accounts (for example, Health Insurance Payable, Retirement Payable).
2. Review the posted payroll entries for the period.
3. Compare the GL balance to the expected amount based on enrolled employees and coverage levels.
4. When remitting payment to the benefit provider, post a payment entry that debits the liability account and credits the bank account.

## Best practices

- Configure benefit coverage records with the correct **Employee Liability** and **Employer Liability** settings before processing payroll.
- Assign appropriate GL accounts on the employee and employer pay types to separate employee deductions from employer expenses.
- Reconcile benefit liability accounts monthly before remitting payments to providers.
- Use inherited coverage types to maintain consistent liability settings across related benefits.

## Related information

- [About benefits](benefits-overview.md)
- [Set up benefits](benefits-setup.md)
- [Benefits limits](benefits-limits.md)
- [Set up GL posting for payroll](gl-posting-setup.md)

[!INCLUDE[footer-banner](../includes/footer-banner.md)]
