---
title: IRS Form 941 automatic filling
description: Learn how OnePayroll automatically populates IRS Form 941 (Employer's Quarterly Federal Tax Return) from payroll data for US employers.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 04/06/2026
---

# IRS Form 941 automatic filling

> [!NOTE]
> IRS Form 941 filing is a US-specific feature available in the OnePayroll US localization.

OnePayroll can automatically fill out **IRS Form 941** (Employer's Quarterly Federal Tax Return) based on the payroll entry data accumulated in a payment batch. The form is produced as a filled PDF that you can review and then submit to the IRS.

## Prerequisites

Before you can generate a Form 941, complete the following setup:

1. **EIN Number** — Your company's Employer Identification Number must be entered in the **EIN Number** field on the Company Information page. OnePayroll uses this to populate the form header.

2. **Remittance group** — Create a remittance group with:
   - **Filing Method** set to **IRS Form 941**
   - **Filing Cycle** set to a quarterly pay cycle (periods per year = 4)
   
   See [Set up remittance groups](remittance-groups-setup.md).

3. **Sources assigned** — The federal income tax jurisdiction, Social Security, and Medicare jurisdictions must be assigned to this remittance group. This ensures payroll tax amounts are accumulated into the correct payment batch.

## What the form calculates

OnePayroll reads payroll entry data for the quarter and populates the following key sections of Form 941:

| Form section | What OnePayroll provides |
|---|---|
| **Line 2 — Wages, tips, and other compensation** | Total taxable wages for the quarter |
| **Line 3 — Federal income tax withheld** | Total federal income tax withheld from employees |
| **Line 5a — Taxable Social Security wages** | Total wages subject to Social Security tax |
| **Line 5c — Taxable Medicare wages** | Total wages subject to Medicare tax |
| **Line 6 — Total taxes before adjustments** | Sum of income tax + FICA |
| **Line 7 — Current quarter adjustments** | Rounding adjustments, if applicable |
| **Line 12 — Total deposits** | Total prior deposits made during the quarter (from completed payment batches) |
| **Line 14 — Balance due / Line 15 — Overpayment** | Difference between total taxes and deposits |
| **Part 2 — Monthly schedule depositor** | Monthly tax liability breakdown (if applicable) |

Company information (name, EIN, address) is populated from **Company Information** in Business Central.

## Generate Form 941 from a payment batch

**To generate Form 941:**

1. Open **Payroll Payments** and locate the payment batch for your federal payroll tax remittance group.
2. The batch must cover a **full calendar quarter** (January–March, April–June, July–September, or October–December). OnePayroll validates this automatically.
3. Select **Report**.
4. OnePayroll fetches the official Form 941 PDF from `irs.gov`, fills in the fields from payroll data, and downloads the completed PDF.
5. Review the form and submit it to the IRS via your preferred method (EFTPS, mail, or authorized e-file provider).

> [!IMPORTANT]
> The generated PDF is pre-filled based on your payroll entry data. Always review it for accuracy before submitting to the IRS. OnePayroll does not submit the form electronically to the IRS.

## Quarterly period requirement

Form 941 covers a full calendar quarter. If the payment batch period does not align with a complete quarter, OnePayroll will display an error when you select **Report**. To resolve this:

- Verify that the **Filing Cycle** on the remittance group is set to a quarterly pay cycle.
- Check that the payroll run's payment date falls within the intended quarter.

## Prior deposits

OnePayroll calculates the total prior deposits for the quarter by summing all **Completed** payment batches associated with the same remittance group within the filing period. This value populates **Line 12** of the form, which is used to calculate the balance due or overpayment.

## Monthly liability schedule (Part 2)

Monthly schedule depositor information (the tax liability for each month of the quarter) is derived from the payment batches in each month of the quarter. If your organization is a semi-weekly depositor, this section is left blank and you would attach Schedule B (Form 941) separately.

## Related pages

- [About remittance groups](remittance-groups-overview.md)
- [Set up remittance groups](remittance-groups-setup.md)
- [Work with payment batches](payment-batches.md)
- [Tax compliance](tax-reports.md)
- [US localization and compliance](us-localization.md)
