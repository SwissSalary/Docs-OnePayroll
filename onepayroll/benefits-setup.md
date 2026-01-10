---
title: Set Up Benefits
description: Learn how to set up benefit types, coverage options, rates, limits, and contracts in OnePayroll.
author: zeande

sws.service: dynamics365-business-central
sws.topic: article
sws.date: 01/08/2026
sws.author: zeande
---
# Set Up Benefits in OnePayroll

This article explains how to configure benefit programs, coverage types, rates, limits, and contracts in OnePayroll.

## Setting Up Benefits

To set up a new benefit program in OnePayroll:

### To create a benefit type

1. Choose the ![Lightbulb that opens the Tell Me feature 1.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Benefit Types**, and then choose the related link.
2. On the **Benefit Types** page, create a new line and specify:
   - **Code**: A unique identifier for the benefit type
   - **Description**: A clear description of the benefit category
   - **Base Pay Type**: The hypothetical pay type used for calculations
3. Configure which pay types are liable for this benefit type (see below).

### To configure pay type liabilities

Pay Type Liabilities determine which pay types (earnings) are subject to a benefit. This controls which earnings are included when calculating benefit amounts and contributions.

1. From the **Benefit Types** page, select a benefit type.
2. In the **Liable Benefit Types** section, add the pay types that should be liable for this benefit:
   - Choose each pay type that represents earnings subject to this benefit
   - Common liable pay types include regular wages, overtime, bonuses, and commissions
   - Exclude pay types like reimbursements, allowances, or other non-taxable compensation as appropriate

> [!NOTE]
> You can also configure liabilities from the Pay Type side. On the **Pay Type** page, use the **Liable Benefit Types** section to specify which benefit types apply to that pay type.

> [!TIP]
> Review your benefit plan documents and regulatory requirements to determine which types of earnings should be included in benefit calculations.

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

## See Also

[Work with Benefits](about-benefits.md)  
[Assign Benefits to Employees](benefits-assignments.md)  
[Work with Benefit Hierarchies](benefits-hierarchies.md)  
[Understand Benefit Limits](benefits-limits.md)  

[!INCLUDE[footer-include](includes/footer-banner.md)]
