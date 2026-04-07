---
title: Tax compliance
description: Learn how OnePayroll supports tax reporting and compliance, including tax statement generation and payroll data for tax filings.
author: zeande
sws.service: onepayroll
sws.topic: concept
sws.date: 02/23/2026
---

# Tax compliance

OnePayroll calculates tax withholding during payroll processing and provides data you need for tax compliance. This article describes what OnePayroll provides for tax reporting and how to use payroll data for your tax filing obligations.

## What OnePayroll provides

### Employee tax statements

OnePayroll can generate employee tax statements for supported localizations. These statements use payroll entry data to populate the required year-end reporting output.

See [Tax statements and year-end reporting](tax-statements.md) for details on the currently available statement functionality.

### Payroll data for tax filings

OnePayroll maintains detailed payroll entry records that contain the data needed for tax compliance:

- **Income tax withheld** — tracked per employee per pay period
- **Payroll tax components** — tracked separately where applicable in the active localization
- **Regional and local income tax** — tracked per jurisdiction when applicable
- **Gross wages** — broken down by pay type

You can extract this data using the **Payroll Register** and **Cost of Labor** reports, or by viewing payroll entries directly.

## Tax filing responsibilities

OnePayroll calculates and tracks tax withholding amounts, but **does not file tax returns with government agencies**. Your organization is responsible for:

### Quarterly filings

- Quarterly tax filings vary by country and region.
- Use payroll reports and payroll entries to gather the amounts required for your local filing obligations.
- Some localizations add built-in filing support for specific forms. For US-specific guidance, see [US localization and compliance](us-localization.md) and [IRS Form 941](irs-form-941.md).

### Annual filings

- Annual tax statements and returns vary by country and region.
- Use payroll wage and withholding data together with any localization-specific reporting features to prepare the required annual filings.
- For US-specific annual filing guidance, see [US localization and compliance](us-localization.md).

### Tax deposits

- Make tax deposits according to the requirements of the applicable tax authority.
- Deposit timing and payment channels vary by country, region, and tax type.
- For US-specific deposit schedule guidance, see [US localization and compliance](us-localization.md).

## Using payroll data for tax filings

### To gather quarterly totals (manual method)

1. Run the **Payroll Register** report filtered to the quarter's date range
2. Review totals by tax-related pay types:
   - Total wages subject to federal income tax
   - Total federal income tax withheld
   - Total Social Security wages and tax
   - Total Medicare wages and tax
3. Use these totals to populate the required tax forms for your jurisdiction

> [!TIP]
> If your localization provides built-in filing support, remittance groups can be used to generate filing output directly from payroll data. See your localization documentation for details.

### To reconcile year-end data

1. Run the **Payroll Register** report for the full calendar year
2. Compare totals to the year-end tax statements or annual filing amounts required for your jurisdiction
3. Verify that periodic filing totals reconcile to the annual totals
4. Investigate and resolve any discrepancies before filing

## Related information

- [Tax statements and year-end reporting](tax-statements.md)
- [About remittance groups](remittance-groups-overview.md)
- [US localization and compliance](us-localization.md)
- [About tax calculations](tax-calculation-overview.md)
- [Set up tax calculations](tax-calculation-setup.md)
- [Payroll reports](payroll-reports.md)
