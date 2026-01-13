---
title: Work with Benefits
description: Learn about the benefits module in OnePayroll and how to configure, assign, and manage employee benefits such as health insurance, retirement plans, and other compensation packages.
author: myGitHubHandle

ms.service: dynamics365-business-central
ms.topic: article
ms.date: 01/08/2026
ms.author: MyMSFTAlias (if I work for Microsoft; otherwise edupont)
---
# Work with Benefits in OnePayroll

The Benefits module in OnePayroll allows you to configure and manage employee benefit programs such as health insurance, retirement plans, and other supplemental compensation. Benefits can have complex calculation methods, coverage options, and hierarchical relationships that allow you to efficiently manage similar benefits across your organization.

## Key Concepts

Understanding the structure of the Benefits module helps you configure and maintain benefit programs effectively:

### Benefit Types

Benefit Types serve as categories that group related benefits together. Each Benefit Type has:

- A **Base Pay Type** (hypothetical) that defines how the benefit is calculated in the payroll system
- A **Calculation Order** that determines when benefits are processed relative to other benefits

**Pay Type Liabilities** establish the relationship between pay types and benefit types. You configure these liabilities from the Pay Type page, where you specify which Benefit Types a pay type is liable for. 

Key points about pay type liabilities:
- This configuration can apply to all types of pay types: Earnings, Deductions, Employer Contributions, and Hypothetical
- Hypothetical pay types are typically not considered for benefit liabilities
- For example, you might configure regular wages, overtime, and bonuses to be liable for health insurance and retirement benefit types
- You would typically exclude reimbursements or certain allowances from benefit calculations
- This controls which compensation is included when calculating benefit amounts

> [!TIP]
> Use the **Move Up** and **Move Down** actions on the Benefit Types page to adjust the calculation order. Benefits are always calculated in this order during payroll processing.

### Benefits

Benefits represent the actual benefit programs you offer to employees. Each benefit includes:

- A **Benefit Type** that categorizes the benefit
- A **Calculation Method** that determines how benefit amounts are computed
- **Pay Types** for employee deductions and employer contributions
- **Coverage Types** that define what coverage options employees can select
- **Rate Assignment** method (per employee or by rule)
- **Limits** and **Limit Adjustments** that control maximum contributions

Benefits can also form hierarchies using the **Applies-From Benefit** field. When a benefit applies from another benefit, it inherits certain characteristics and employee assignments are automatically synchronized.

### Benefit Contracts

Benefit Contracts link your benefit programs to external providers (vendors in Business Central). Each contract includes:

- A contract number (such as a policy number)
- A provider (vendor) with contact information
- Document attachments for contract documentation

You assign benefits to contracts, allowing you to track which benefits are provided by which vendors.

### Benefit Coverage

Coverage Types and Coverage options give employees choices within a benefit program. For example:

- A health insurance benefit might have coverage options like "Employee Only", "Employee + Spouse", "Employee + Children", or "Family"
- Coverage Types can inherit from other Coverage Types, allowing you to reuse coverage structures
- Each coverage option can specify whether it's covered by the employee, employer, or both

### Benefit Assignments

Benefit Assignments link benefits to employees, pay groups, or employee templates. Each assignment specifies:

- Which benefit is assigned
- What coverage the employee has selected
- Whether the assignment is directly to an employee or inherited from a template

## Working with Benefits

To work effectively with the Benefits module, see the following detailed articles:

- [Set Up Benefits](benefits-setup.md) - Learn how to create benefit types, configure coverage options, set rates and limits, and link benefits to contracts
- [Assign Benefits to Employees](benefits-assignments.md) - Learn how to assign benefits to employees, employee templates, and pay groups
- [Work with Benefit Hierarchies](benefits-hierarchies.md) - Learn how to use benefit and benefit type hierarchies to manage related benefits efficiently
- [Understand Benefit Limits](benefits-limits.md) - Learn how benefit limits control maximum contributions and how to configure limit bases and adjustments

## Best Practices

When working with benefits in OnePayroll:

- **Use meaningful codes**: Benefit codes and types should be easy to understand at a glance
- **Configure pay type liabilities correctly**: Review benefit plan documents to ensure the right earnings are included in benefit calculations
- **Plan your benefit hierarchy**: Design benefit hierarchies before creating many benefits
- **Test coverage configurations**: Verify that coverage types provide the correct options for employees
- **Document contracts**: Use document attachments on benefit contracts to store policy documents
- **Review calculation order**: Ensure benefits that depend on others are calculated in the correct sequence
- **Set up limits carefully**: Test limit configurations, especially when using prorated adjustments
- **Use inherited benefits for similar programs**: This reduces configuration effort when benefits differ only in coverage or rates

## See Also

[Set Up Benefits](benefits-setup.md)  
[Assign Benefits to Employees](benefits-assignments.md)  
[Work with Benefit Hierarchies](benefits-hierarchies.md)  
[Understand Benefit Limits](benefits-limits.md)  
[Set Up Pay Types](setup-pay-types.md)  
[Process Payroll](process-payroll.md)  

[!INCLUDE[footer-include](includes/footer-banner.md)]
