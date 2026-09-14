---
title: Set up local tax withholding (US)
description: Learn how to configure district code types and local income tax withholding for US employees in OnePayroll.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 09/14/2026
---

# Set up local tax withholding (US)

Local income tax jurisdictions can depend on geographic identifiers such as municipality, school district, county, city, or Pennsylvania PSD codes. In OnePayroll, a district code type connects a regional income tax jurisdiction to the provider that resolves an employee's home address to a local jurisdiction.

District code types are supplied by country-specific extensions. The OnePayroll Core app provides the district-code framework but doesn't define country-specific types or district codes.

> [!IMPORTANT]
> A resolved geographic district doesn't establish that an employee owes tax there. Confirm local tax applicability and rates with current tax guidance.

## How local tax district codes work

When you configure a district code type for a regional jurisdiction, OnePayroll uses this process:

1. The district code provider evaluates the employee's home address.
1. OnePayroll stores the resolved value as an employee district code.
1. If the local income tax jurisdiction doesn't exist, OnePayroll creates it under the regional jurisdiction.
1. The local jurisdiction inherits the parent's calculation method and rounding method. It uses the local benefit and pay type from the district-code setup, or inherits them from the parent when the fields are blank.
1. OnePayroll adds the local jurisdiction to the employee's withholding information when its calculation method isn't **None**.

District codes select the local jurisdictions that apply to an employee. The local jurisdictions' calculation setup and withholding rates determine the tax amounts.

## US district code types

The OnePayroll US app provides these district code types:

| District code type | Geographic identifier |
|---|---|
| **Ohio Municipality Code** | Ohio municipality code |
| **Ohio School District** | Ohio school district code |
| **Pennsylvania PSD Code** | Pennsylvania political subdivision code |
| **County Tax Code** | US Census county code |
| **City Tax Code** | US Census incorporated-place code |
| **School District** | US Census elementary or unified school district code |

The Contoso Coffee Payroll Demo Dataset configures examples for Ohio, Pennsylvania, Maryland, Indiana, Michigan, New York, and Kentucky. Ohio has two entries because municipality and school district withholding use separate district codes.

## Prerequisites

Before you configure local tax district codes:

- Create the parent regional jurisdiction. For more information, see [Set up tax calculations](tax-calculation-setup.md).
- Configure the parent jurisdiction's **Calculation Method**, **Benefit**, **Pay Type No.**, and rounding methods.
- Create separate local benefit and withholding pay types if local jurisdictions shouldn't inherit those values from the parent.

## Configure district code types

Configure each district code type on the regional jurisdiction that uses it.

1. Choose the ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Income Tax Jurisdictions**, and then choose the related link.
1. Open the regional jurisdiction.
1. Choose **District code types**.
1. Add a line, and fill in the following fields:

   | Field | Description |
   |---|---|
   | **Type** | Select the provider that resolves the local district code. Available values depend on the installed country-specific app. |
   | **Local Benefit** | Select the benefit to assign when OnePayroll creates a local jurisdiction. Leave this field blank to inherit the regional jurisdiction's benefit. |
   | **Local Pay Type No.** | Select the withholding pay type to assign when OnePayroll creates a local jurisdiction. Leave this field blank to inherit the regional jurisdiction's pay type. |

1. Add another line if the jurisdiction uses more than one district code type. For example, add both **Ohio Municipality Code** and **Ohio School District** for Ohio when both are required.

## Resolve an employee's district codes

OnePayroll resolves district codes from the employee's home address when you change the address. Opening the employee initializes any missing district-code rows for the configured types so that you can review or enter their values.

1. Open the **Employee Card**.
1. Confirm that **Address**, **City**, **ZIP Code**, **State**, and **Country/Region Code** contain the employee's complete home address.
1. Review the district-code field below **State**. Its caption depends on the configured district code type.
1. If more than one district code type applies, choose the field's assist-edit button to open **Employee District Codes** and review each **Type** and **Value**.

You can correct a district code value on the **Employee District Codes** page. If the provider can't resolve the entered value, OnePayroll creates a local jurisdiction with that value and notifies you to complete its setup manually.

## Review local jurisdictions and rates

After district codes resolve, return to **Income Tax Jurisdictions** and review the local jurisdictions created under the regional jurisdiction.

1. Confirm each local jurisdiction's description, calculation method, benefit, pay type, and rounding methods.
1. Confirm the **Withholding Configuration** is appropriate.
1. Choose **Withholding rates**, and verify that an applicable rate exists.

In the US app, a provider that returns a rate creates or updates a rate effective January 1 of the current year. Providers that don't return a rate don't create a rate row. Always verify the effective date and rate before you process payroll.

## Review employee local withholding

1. Open the employee.
1. Choose **Withholding Information**.
1. In **Local Withholding**, review the district code **Type**, **Jurisdiction Code**, **Jurisdiction**, and **Inactive** fields.
1. Turn on **Inactive** only when withholding for that local jurisdiction shouldn't apply to the employee.

## Troubleshooting

### District code fields don't appear on the employee

- Confirm that the employee's **State** and **Country/Region Code** identify a regional income tax jurisdiction.
- Confirm that the regional jurisdiction has at least one **District code types** entry.
- Confirm that the employee's home address is complete.

### A district code doesn't resolve automatically

- Verify the employee's address and try the lookup again.
- Enter the known district code on **Employee District Codes**.
- If OnePayroll reports that tax details couldn't be resolved, open the local jurisdiction from the notification and complete its description, calculation setup, and rate.

### Local withholding doesn't appear

- Confirm that the employee has a resolved district code value.
- Confirm that the corresponding local income tax jurisdiction exists under the correct regional jurisdiction.
- Confirm that the local jurisdiction's **Calculation Method** isn't **None**.

## See also

- [Set up tax calculations](tax-calculation-setup.md)
- [Set up income tax withholding](income-tax-setup.md)
- [Set up employees](employee-setup.md)
- [Tax calculations overview](tax-calculation-overview.md)