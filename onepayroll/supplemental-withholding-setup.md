---
title: Set up supplemental withholding
description: Learn how to configure supplemental withholding for bonuses, commissions, and other earnings in OnePayroll.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 09/14/2026
---

# Set up supplemental withholding

Use withholding categories to control how each income tax jurisdiction withholds from supplemental earnings, such as bonuses and commissions. You can combine the earnings with regular wages or withhold them at a separate flat rate.

> [!IMPORTANT]
> Withholding requirements and rates vary by jurisdiction. Confirm the method and rate with current tax guidance before you process payroll.

## How supplemental withholding works

Supplemental withholding uses three related settings:

1. A **Withholding Category** groups pay types that require the same withholding treatment.
1. A **Withholding Rule** assigns a method to the category for a specific income tax jurisdiction.
1. The **Withholding Category** field on a pay type identifies earnings that use those rules.

You can select either of these methods for each category and jurisdiction:

| Method | How OnePayroll calculates withholding |
|---|---|
| **Aggregate** | Combines the category earnings with regular earnings for the payroll period. The jurisdiction's calculation method calculates withholding on the combined amount. |
| **Flat-Rate** | Keeps the category earnings separate from regular earnings and applies a category-specific rate. Earnings in the same category are combined before the rate is applied. |

If a pay type has no withholding category, OnePayroll treats its earnings as regular earnings. If a category has no rule for an applicable jurisdiction, OnePayroll uses the **Aggregate** method for that jurisdiction.

## Create a withholding category

1. Choose the ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Withholding Categories**, and then choose the related link.
1. Choose **New**.
1. In **Code**, enter a unique code for the category, such as `BONUS` or `COMM`.
1. In **Description**, enter a clear description.

## Set up withholding rules

Create a rule for each jurisdiction that must treat the category differently from the default aggregate method.

1. On the **Withholding Categories** page, select the category, and then choose **Withholding rules**.
1. Add a line for the category and jurisdiction.
1. In **Method**, select **Aggregate** or **Flat-Rate**.
1. Repeat these steps for each applicable jurisdiction.

For an aggregate rule, **Rate** shows **N/A** because the jurisdiction's regular calculation method determines the withholding amount.

### Set up a flat rate

For a flat-rate rule, the **Rate** field summarizes the withholding-rate rows that apply on the work date. It shows **Unspecified** when no rate is available and **Varied** when multiple rows apply.

1. On the **Withholding Rules** page, choose the **Rate** value for the flat-rate rule.
1. On the **Withholding Rates** page, fill in the following fields:

   | Field | Description |
   |---|---|
   | **Valid From** | Enter the date when the rate becomes effective. The date must be on or before the payroll payment date. |
   | **Category** | Confirm the supplemental withholding category. |
   | **Jurisdiction Code** | Confirm the jurisdiction for the rule. |
   | **Income Tax Profile** | Leave this field blank for a supplemental withholding rate. |
   | **Income From** | Enter the minimum current-period earnings in this category for the rate to apply. Enter `0` when the rate applies to all earnings in the category. |
   | **Rate** | Enter the withholding percentage, such as `22` for 22 percent. |
   | **Base Amount** | Enter any fixed withholding amount to add to the percentage calculation. Otherwise, enter `0`. |

1. Close the page. If the rate is effective on the work date, confirm that **Rate** on the rule no longer shows **Unspecified**.

For flat-rate withholding, OnePayroll calculates the withholding amount as follows:

`Category earnings × Rate + Base Amount`

## Assign the category to a pay type

1. Choose the ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Pay Types**, and then choose the related link.
1. Open the pay type for the supplemental earnings, such as a bonus or commission.
1. On the **General** group, select the **Withholding Category**.
1. Repeat these steps for each pay type that uses the category.

Leave **Withholding Category** blank on regular earning pay types that use ordinary withholding.

## Example

Suppose the `BONUS` category has these rules:

| Jurisdiction | Method | Result |
|---|---|---|
| Federal | Flat-Rate | OnePayroll applies the federal rate configured for the `BONUS` category. |
| State | Aggregate | OnePayroll combines the bonus with regular wages before the state calculation method calculates withholding. |

When you assign `BONUS` to the bonus pay type, the same payment can use different withholding methods for the federal and state jurisdictions.

## Verify the setup

Before you process supplemental earnings:

1. Confirm that every applicable jurisdiction has the intended rule. Jurisdictions without a matching rule use the **Aggregate** method.
1. For each flat-rate rule, confirm that an applicable withholding-rate row exists for the payroll payment date and earnings amount.
1. Confirm that the supplemental pay type has the correct **Withholding Category**.
1. Confirm that the employee has active withholding information for the expected jurisdictions.
1. Process a sample payroll run and review the withholding entries.

## Troubleshooting

### The rule shows an unspecified rate

Choose **Rate**, and add a withholding-rate row for the same category and jurisdiction. Make sure **Valid From** isn't later than the payroll payment date and **Income Tax Profile** is blank.

### Supplemental earnings use the aggregate method

Confirm that the pay type has a **Withholding Category** and that a **Flat-Rate** rule exists for the category and jurisdiction. A blank category or missing rule uses the **Aggregate** method.

### An unexpected flat rate applies

Review the rate's **Valid From** and **Income From** values. The applicable rate must be effective for the payroll payment date, and its **Income From** value can't exceed the current payroll's earnings for the category.

## See also

- [Set up tax calculations](tax-calculation-setup.md)
- [Set up pay types](pay-types-setup.md)
- [Set up income tax withholding](income-tax-setup.md)
- [About tax calculations](tax-calculation-overview.md)