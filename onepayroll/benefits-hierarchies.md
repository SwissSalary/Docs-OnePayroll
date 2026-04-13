---
title: Work with benefit hierarchies
description: Learn how to use benefit and benefit type hierarchies to manage related benefits efficiently in OnePayroll.
author: zeande
sws.service: onepayroll
sws.topic: article
sws.date: 01/08/2026
---
# Work with benefit hierarchies

OnePayroll supports hierarchical benefit structures through the **Applies-From** relationships. This allows you to efficiently manage similar benefits that share common characteristics but need separate tracking.

## Benefits that Inherit from Other Benefits

When you create a benefit that applies from another benefit:

- The benefit automatically uses the same **Benefit Type** as its parent
- The **Coverage Type** must be compatible (same type or inherited type)
- If **Inherit Limits** is Yes, it uses the parent benefit's pay types and limits
- Employee assignments are synchronized automatically
- The benefit cannot be directly assigned to employees (Assignable = No)

### Creating Inherited Benefits

To create a benefit that inherits from another benefit:

1. Choose the ![Lightbulb that opens the Tell Me feature 1.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Benefit Setup**, and then choose the related link.
2. Create a new benefit and fill in the **Applies-From Benefit** field with the parent benefit code.
3. The system automatically sets the **Benefit Type** to match the parent.
4. Select a compatible **Coverage Type** (same as parent or an inherited coverage type).
5. Configure the specific characteristics that differ from the parent benefit.

## Managing Calculation Order

The order in which benefits are calculated matters when benefits depend on each other:

1. On the **Benefit Types** page, benefit types are displayed in calculation order
2. Use the **Move Up** and **Move Down** actions to change the order of benefit types
3. Benefits are processed in the order defined by their benefit type's calculation order

> [!TIP]
> Use the **Move Up** and **Move Down** actions on the Benefit Types page to adjust the calculation order. Benefits are always calculated in this order during payroll processing.

## Best Practices for Hierarchies

When working with benefit hierarchies:

- **Plan your hierarchy**: Design benefit hierarchies before creating many benefits
- **Use meaningful relationships**: Only create hierarchies when benefits truly share common characteristics
- **Test inheritance**: Verify that inherited properties work as expected before assigning to many employees
- **Document relationships**: Keep track of which benefits inherit from others for easier maintenance

## See Also

[Benefits overview](benefits-overview.md)  
[Set up benefits](benefits-setup.md)  
[Assign benefits to employees](benefits-assignments.md)  
[Benefits limits](benefits-limits.md)  
