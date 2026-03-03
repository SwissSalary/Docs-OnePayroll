---
title: Benefits limits
description: Learn how benefit limits control maximum contributions and how to configure limit bases, adjustments, and inherited limits in OnePayroll.
author: zeande
sws.service: onepayroll
sws.topic: concept
sws.date: 02/23/2026
---

# Benefits limits

Benefit limits control how much can be contributed to a benefit over a given period. Limits can apply separately to employee contributions, employer contributions, or overall amounts. OnePayroll evaluates limits during payroll calculation and stops contributions when limits are reached.

## Limit fields

You configure limits on the **Benefit Limits** page, which you access from a benefit record. Each limit record contains the following fields:

| Field | Description |
|---|---|
| **Benefit** | The benefit this limit applies to. |
| **Valid From** | The date when this limit becomes effective. The system applies the most recent limit that is effective for the current pay period. |
| **Rule** | A rule that can be used to determine or adjust limit amounts. |
| **Lower Limit (Annual)** | The minimum annual amount for the benefit. |
| **Upper Limit (Annual)** | The maximum annual amount for the benefit (combined employee and employer). |
| **Employee Lower Limit (Annual)** | The minimum annual employee contribution. |
| **Employee Upper Limit (Annual)** | The maximum annual employee contribution. |
| **Employer Lower Limit (Annual)** | The minimum annual employer contribution. |
| **Employer Upper Limit (Annual)** | The maximum annual employer contribution. |

The **Limit Base** and **Limit Adjustment** fields are inherited from the benefit configuration and displayed as read-only reference fields.

> [!NOTE]
> All limits are defined as annual amounts. OnePayroll calculates the applicable limit for each pay period based on the pay cycle's periods per year.

## Limit base

The **Limit Base** setting on the benefit determines what the limit applies to:

- **Liable Wages** &mdash; Limits apply to the wages that are subject to the benefit calculation (the base on which the benefit is calculated).
- **Benefit Amounts** &mdash; Limits apply to the calculated benefit contribution amounts themselves.

Use **Liable Wages** when you need to cap the earnings subject to a benefit (for example, Social Security wage base). Use **Benefit Amounts** when you need to cap the contribution amount (for example, maximum annual 401(k) contribution).

## Limit adjustment

The **Limit Adjustment** setting determines how annual limits are applied for employees who don't work the full year:

- **No Adjustment** &mdash; The full annual limit applies regardless of when the employee starts or how many periods they work.
- **Prorated** &mdash; Annual limits are reduced proportionally based on the number of pay periods the employee actually works during the year.

> [!TIP]
> Use prorated adjustments for benefits where contributions should be proportional to the time worked in a calendar year, such as employer matching programs.

## Inherited limits

When **Inherit Limits** is enabled on a benefit, the benefit uses the limits defined on its parent benefit (the **Applies-From Benefit**). You cannot define separate limits for a benefit that inherits limits.

Inherited limits ensure that related benefits sharing the same contribution cap are always in sync. For example, multiple retirement plan options that share the same IRS maximum contribution limit can all inherit from a single parent benefit.

## Multiple limit periods

You can create multiple limit records with different **Valid From** dates to handle changes over time:

- Annual IRS limit increases
- Mid-year policy changes
- Different limits for different years

The system automatically applies the limit with the most recent **Valid From** date that is on or before the current pay period.

## Best practices

- Enter future limit amounts in advance when they're known (for example, published IRS limits for the upcoming year).
- Use inherited limits for benefits that share the same contribution cap to avoid maintaining duplicate limit records.
- Review payroll results after changing limits to verify they're applying correctly.
- When using prorated adjustments, verify that mid-year hires receive correctly reduced limits.

## Related information

- [About benefits](benefits-overview.md)
- [Set up benefits](benefits-setup.md)
- [Assign benefits to employees](benefits-assignments.md)
- [Benefits hierarchies](benefits-hierarchies.md)

[!INCLUDE[footer-banner](../includes/footer-banner.md)]
