---
title: Set up remittance groups
description: Learn how to create and configure remittance groups in OnePayroll to automate payment collection for taxes, benefits, and other payroll obligations.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 04/06/2026
---

# Set up remittance groups

Remittance groups define how often you pay and report on payroll obligations such as taxes and benefit premiums. Once configured, OnePayroll automatically accumulates payment amounts into batches when payroll runs are created.

For a conceptual overview, see [About remittance groups](remittance-groups-overview.md).

## Prerequisites

Before creating remittance groups, make sure the following are configured:

- **Pay cycles** — at least one pay cycle for your payment deposit schedule, and one for your filing schedule if different. See [Set up pay cycles](pay-cycles-setup.md).
- **Payment methods** — a Business Central payment method for how the payment is transmitted (check, ACH, etc.). See [Set up payment methods](payment-methods-setup.md).

## Create a remittance group

1. Search for and open **Remittance Groups**.
2. Select **New** to open a blank Remittance Group card.
3. Fill in the required fields:

   | Field | Description |
   |-------|-------------|
   | **Code** | Enter a short unique code, such as `FED-TAX` or `HEALTH-INS`. |
   | **Description** | Enter a descriptive name, such as *Federal Payroll Taxes* or *Health Insurance – Carrier A*. |

4. In the **Payment** group, set the schedule and method:

   | Field | Description |
   |-------|-------------|
   | **Payment Cycle** | Select the pay cycle that determines how often payment batches are consolidated and when they are due. If you leave this blank, one batch is created per payroll run. |
   | **Filing Cycle** | Select the pay cycle that determines how often reporting forms are generated. This can differ from the payment cycle—for example, monthly deposits with quarterly reports. |
   | **Payment Method** | Select the Business Central payment method code used to process payments for this group. |
   | **Filing Method** | Select the method used to produce remittance reports or files. See [Filing methods](#filing-methods) below. |

5. Optionally, enter the agency or carrier's remittance portal URL in the **Home Page** field.
6. Select **Save** or navigate away to save.

## Assign sources to a remittance group

After creating the remittance group, assign it to the income tax jurisdictions and benefits whose amounts belong in this group.

### Assign an income tax jurisdiction

1. Open the income tax jurisdiction record (search for **Income Tax Jurisdictions**).
2. Set the **Remittance Group** field to your new remittance group code.
3. Save the record.

### Assign a benefit

1. Open the benefit record (search for **Benefits**).
2. Set the **Remittance Group** field to your remittance group code.

   > [!TIP]
   > For benefits that use benefit rate records per employee, you can assign the remittance group directly on the **Benefit Rate** record instead. This allows different rates to be remitted to different groups (for example, multiple carriers).

3. Save the record.

After assigning sources, the **Sources** factbox on the Remittance Group card will list all assigned jurisdictions and benefits.

## Filing methods

The **Filing Method** on the remittance group determines what report or file is produced when you select **Report** on a payment batch.

| Method | Description |
|--------|-------------|
| **Default** | Produces a standard payment batch summary report. |
| **IRS Form 941** (US) | Automatically fills out an IRS Form 941 PDF based on payroll entry data. The period must be a full calendar quarter. See [IRS Form 941](irs-form-941.md). |
| **California State Income Tax** (US) | Generates a California state income tax remittance file. |
| **North Dakota State Income Tax** (US) | Generates a North Dakota state income tax remittance file. |

## Example: Federal payroll taxes (FICA and withholding)

Here is a typical setup for a federal payroll tax remittance group. Most employers deposit monthly or semi-monthly:

| Field | Value |
|-------|-------|
| Code | `FED-TAX` |
| Description | Federal Payroll Taxes |
| Payment Cycle | `MONTHLY` or `SEMIMONTHLY` depending on your deposit schedule |
| Filing Cycle | `QUARTERLY` |
| Payment Method | `ACH` |
| Filing Method | IRS Form 941 |

Then assign the **Federal Income Tax** jurisdiction and the **FICA** jurisdiction to this remittance group.

## Example: Quarterly state income tax

| Field | Value |
|-------|-------|
| Code | `STATE-CA` |
| Description | California Income Tax |
| Payment Cycle | `MONTHLY` |
| Filing Cycle | `QUARTERLY` |
| Payment Method | `ACH` |
| Filing Method | California State Income Tax |

## Related pages

- [About remittance groups](remittance-groups-overview.md)
- [Work with payment batches](payment-batches.md)
- [IRS Form 941 (US)](irs-form-941.md)
- [Set up pay cycles](pay-cycles-setup.md)
- [Set up payment methods](payment-methods-setup.md)
