---
title: Work with Benefits
description: Learn about the benefits module in OnePayroll and how to configure, assign, and manage employee benefits such as health insurance, retirement plans, and other compensation packages.
author: myGitHubHandle

ms.service: dynamics365-business-central
ms.topic: article
ms.date: 01/06/2026
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
- A **Hierarchical structure** that allows benefit types to inherit from other benefit types

Benefit Types can form parent-child relationships using the **Applies-From Benefit Type** field, creating a hierarchy. This is particularly useful when you have benefit categories that share common characteristics but need separate tracking.

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

## Setting Up Benefits

To set up a new benefit program in OnePayroll:

### To create a benefit type

1. Choose the ![Lightbulb that opens the Tell Me feature 1.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Benefit Types**, and then choose the related link.
2. On the **Benefit Types** page, create a new line and specify:
   - **Code**: A unique identifier for the benefit type
   - **Description**: A clear description of the benefit category
   - **Base Pay Type**: The hypothetical pay type used for calculations
3. If this benefit type should inherit from another, specify the **Applies-From Benefit Type** field.

   > [!NOTE]
   > The Applies-From relationship creates a hierarchy. Benefits of this type will automatically inherit certain properties from the parent type.

### To configure coverage types

1. Choose the ![Lightbulb that opens the Tell Me feature 1.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Benefit Coverage Setup**, and then choose the related link.
2. Create a new coverage type and specify:
   - **Code**: A unique identifier for the coverage type
   - **Description**: The name that employees will see when selecting coverage
3. On the **Coverages** FastTab, add the coverage options that employees can choose:
   - **Code**: A unique code for this coverage option
   - **Description**: What this coverage level represents
   - **Covered by Employee**: Whether the employee pays for this coverage
   - **Covered by Employer**: Whether the employer contributes to this coverage

> [!TIP]
> You can create coverage types that inherit from existing types using the **Create Inherited Type** action. This is useful when you have benefits with the same coverage options but different cost-sharing arrangements.

### To create a benefit

1. Choose the ![Lightbulb that opens the Tell Me feature 1.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Benefit Setup**, and then choose the related link.
2. On the **Benefit Setup** page, create a new benefit and fill in the fields:
   - **Code**: A unique identifier for the benefit
   - **Type**: Select the benefit type this benefit belongs to
   - **Description**: A clear name for the benefit program
   - **Calculation Method**: How benefit amounts are determined
   - **Coverage Type**: The coverage options available for this benefit
   - **Pay Type**: The hypothetical pay type for benefit calculations
   - **Employee Pay Type**: The pay type for employee deductions
   - **Employer Pay Type**: The pay type for employer contributions
   - **Rate Assignment**: Choose whether rates are set per employee or by rule
   - **Limit Base**: What the benefit limits are calculated on (liable wages or benefit amounts)
   - **Limit Adjustment**: Whether limits are prorated or applied in full

3. If the benefit applies from another benefit, fill in the **Applies-From Benefit** field.

   > [!NOTE]
   > When a benefit applies from another benefit, the **Assignable** field is automatically set to No, and the coverage type must be compatible with the parent benefit.

### To set benefit limits

1. From the **Benefit Setup** page, select a benefit and choose **Limits**.
2. On the **Benefit Limits** page, create limit rules:
   - **Starting Date**: When this limit becomes effective
   - **Annual Employee Limit**: Maximum employee contribution per year
   - **Annual Employer Limit**: Maximum employer contribution per year
   - **Annual Total Limit**: Combined maximum per year
   - **Pay Period Employee Limit**: Maximum employee contribution per pay period
   - **Pay Period Employer Limit**: Maximum employer contribution per pay period

> [!NOTE]
> Limits are only available for benefits where **Inherit Limits** is set to No. Benefits that inherit limits use the limits from their parent benefit.

### To configure benefit rates

1. From the **Benefit Setup** page, select a benefit and choose **Rates**.
2. On the **Benefit Rates** page, define rates based on your rate assignment method:
   - For **Rule**-based assignment: Create rules that apply to groups of employees
   - For **Employee**-based assignment: Set rates individually for each employee

3. Specify employee and employer rate amounts or percentages.

### To link benefits to a contract

1. Choose the ![Lightbulb that opens the Tell Me feature 1.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Benefit Contracts**, and then choose the related link.
2. Create a new contract:
   - **No.**: The contract or policy number
   - **Provider No.**: Select the vendor who provides this benefit
   - **Description**: A description of the contract
3. Choose **Lines** to assign benefits to this contract.

## Assigning Benefits to Employees

Once benefits are configured, you assign them to employees:

### To assign a benefit to employees

1. Choose the ![Lightbulb that opens the Tell Me feature 1.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Benefit Assignments**, and then choose the related link.
2. On the **Benefit Assignments** page, you'll see all available benefits and their current assignments.
3. For each benefit you want to assign:
   - Select the employee (or employee template, or pay group)
   - Choose the appropriate **Coverage** option

> [!NOTE]
> You can only assign benefits where the **Assignable** field is set to Yes. Benefits that inherit from other benefits receive their assignments automatically.

### To view an employee's benefits

1. Choose the ![Lightbulb that opens the Tell Me feature 1.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Employees**, and then choose the related link.
2. Select an employee and choose **Benefits** or **Benefit Assignments**.
3. The list shows all benefits assigned to the employee and their selected coverage.

## Working with Benefit Hierarchies

OnePayroll supports hierarchical benefit structures through the **Applies-From** relationships:

### Benefits that inherit from other benefits

When you create a benefit that applies from another benefit:

- The benefit automatically uses the same **Benefit Type** as its parent
- The **Coverage Type** must be compatible (same type or inherited type)
- If **Inherit Limits** is Yes, it uses the parent benefit's pay types and limits
- Employee assignments are synchronized automatically
- The benefit cannot be directly assigned to employees (Assignable = No)

### Benefit type hierarchies

Benefit Types can also form hierarchies:

- Child benefit types can inherit from a parent benefit type
- The **Calculation Order** respects the hierarchy structure
- Use **Move Up** and **Move Down** to adjust ordering while maintaining hierarchy relationships

### Managing calculation order

The order in which benefits are calculated matters when benefits depend on each other:

1. On the **Benefit Types** page, benefits are displayed in calculation order
2. Use the **Move Up** and **Move Down** actions to change order
3. To reset the order to alphabetical (by hierarchy), choose **Reset Calculation Order**

## Understanding Benefit Limits

Benefit limits control how much can be contributed to a benefit:

### Limit Base

The **Limit Base** determines what amount the limit applies to:

- **Liable Wages**: Limits are based on the employee's liable wages (earnings subject to the benefit)
- **Benefit Amounts**: Limits are based on the employee and employer contribution amounts

### Limit Adjustment

The **Limit Adjustment** determines how annual limits are applied:

- **No Adjustment**: Full annual limit applies regardless of when the employee starts
- **Prorated**: Annual limits are reduced based on the number of pay periods the employee works

### Inherited Limits

When **Inherit Limits** is set to Yes for a benefit:

- The benefit uses the same limits as its parent benefit (Applies-From Benefit)
- The Pay Type, Exemption Pay Type, Limit Base, and Limit Adjustment fields must match the parent
- You cannot define separate limits for this benefit

## Best Practices

When working with benefits in OnePayroll:

- **Use meaningful codes**: Benefit codes and types should be easy to understand at a glance
- **Plan your hierarchy**: Design benefit type and benefit hierarchies before creating many benefits
- **Test coverage configurations**: Verify that coverage types provide the correct options for employees
- **Document contracts**: Use document attachments on benefit contracts to store policy documents
- **Review calculation order**: Ensure benefits that depend on others are calculated in the correct sequence
- **Set up limits carefully**: Test limit configurations, especially when using prorated adjustments
- **Use inherited types for similar benefits**: This reduces configuration effort when benefits differ only in coverage or rates

## See Also

[Set Up Pay Types](setup-pay-types.md)  
[Set Up Pay Groups](setup-pay-groups.md)  
[Process Payroll](process-payroll.md)  
[Manage Employees](manage-employees.md)  

[!INCLUDE[footer-include](includes/footer-banner.md)]
