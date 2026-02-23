---
title: Understand Benefit Limits
description: Learn how benefit limits control maximum contributions and how to configure limit bases, adjustments, and inherited limits in OnePayroll.
author: myGitHubHandle

ms.service: dynamics365-business-central
ms.topic: article
ms.date: 01/08/2026
ms.author: MyMSFTAlias (if I work for Microsoft; otherwise edupont)
---
# Understand Benefit Limits

Benefit limits control how much can be contributed to a benefit. Limits can be set at the annual level and pay period level, for both employee and employer contributions.

## Limit Base

The **Limit Base** determines what amount the limit applies to:

- **Liable Wages**: Limits are based on the employee's liable wages (earnings subject to the benefit)
- **Benefit Amounts**: Limits are based on the employee and employer contribution amounts

### Choosing the Right Limit Base

Use **Liable Wages** when:
- The benefit contribution is calculated as a percentage of wages
- You need to cap the wages subject to the benefit calculation

Use **Benefit Amounts** when:
- The benefit has fixed contribution amounts
- You need to cap the total contribution amount regardless of wages

## Limit Adjustment

The **Limit Adjustment** determines how annual limits are applied:

- **No Adjustment**: Full annual limit applies regardless of when the employee starts
- **Prorated**: Annual limits are reduced based on the number of pay periods the employee works

### Examples of Limit Adjustments

**No Adjustment**: An employee starting mid-year has the same annual limit as someone who worked the full year.

**Prorated**: An employee starting halfway through the year has their annual limit reduced proportionally based on the remaining pay periods.

> [!TIP]
> Use prorated adjustments for benefits where contributions should be proportional to the time worked in a calendar year.

## Inherited Limits

When **Inherit Limits** is set to Yes for a benefit:

- The benefit uses the same limits as its parent benefit (Applies-From Benefit)
- The Pay Type, Exemption Pay Type, Limit Base, and Limit Adjustment fields must match the parent
- You cannot define separate limits for this benefit

### Benefits of Inherited Limits

Inherited limits are useful when you have multiple related benefits that should share the same contribution limits. For example:
- Multiple health insurance plan options under the same IRS contribution limit
- Different retirement plan investment options that share the same maximum contribution

## Configuring Benefit Limits

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

### Multiple Limit Periods

You can define multiple limit records with different starting dates to handle:
- Annual limit increases (such as IRS limit adjustments)
- Mid-year policy changes
- Different limits for different time periods

The system automatically applies the limit that is effective for the current pay period based on the starting date.

## Best Practices

When configuring benefit limits:

- **Set up limits carefully**: Test limit configurations, especially when using prorated adjustments
- **Plan for annual changes**: Enter future limit amounts in advance when they are known (such as IRS limit increases)
- **Use inherited limits for shared caps**: This ensures consistency across related benefits
- **Monitor limit application**: Review payroll results to verify limits are being applied correctly
- **Document limit rules**: Keep notes on why specific limit configurations were chosen

## See Also

[About benefits](benefits-overview.md)  
[Set Up Benefits](benefits-setup.md)  
[Assign Benefits to Employees](benefits-assignments.md)  
[Work with Benefit Hierarchies](benefits-hierarchies.md)  

[!INCLUDE[footer-include](includes/footer-banner.md)]
