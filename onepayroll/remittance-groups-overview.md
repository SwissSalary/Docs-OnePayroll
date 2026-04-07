---
title: About remittance groups
description: Learn how remittance groups automate payment collection and filing for taxes, benefits, and other payroll obligations in OnePayroll.
author: zeande
sws.service: onepayroll
sws.topic: overview
sws.date: 04/06/2026
---

# About remittance groups

Remittance groups define how and when payments for payroll obligations—such as employer and employee taxes, benefit premiums, and other withholdings—are collected, scheduled, and reported. When you run payroll, OnePayroll automatically accumulates the amounts owed into payment batches based on each remittance group's configuration.

## What remittance groups do

### Automatic payment collection

OnePayroll creates a payment batch for every payroll obligation—employee paychecks, taxes, benefits, and garnishments—regardless of whether a remittance group is configured. Without a remittance group, a tax or benefit batch is created per payroll run, keyed to the individual jurisdiction or benefit record.

A remittance group changes **how** those batches are created:

- **Period consolidation** — Instead of one batch per payroll run, amounts from multiple payroll runs within the same payment cycle period are consolidated into a single batch. For example, a semi-monthly deposit schedule accumulates two biweekly payroll runs into one batch.
- **Payment cycle and due date** — The remittance group's payment cycle controls the period start/end dates and the due date for each batch.
- **Payment method** — The remittance group's payment method is stored on the batch and determines the payment processing mode, such as electronic payment or computer check.
- **Shared description** — The batch description comes from the remittance group, giving a meaningful payee name (for example, *Federal Payroll Taxes*) rather than an individual jurisdiction or benefit name.

Typical examples of what remittance groups handle:

- **Federal payroll taxes** — FICA (Social Security and Medicare) and federal income tax withheld, due to the IRS on a deposit schedule
- **State and local income taxes** — amounts withheld for each state or locality, filed with the applicable agency
- **Benefit premiums** — employee payroll deductions and employer contributions forwarded to an insurance carrier or retirement plan administrator

### Separate schedules for paying and filing

A key feature of remittance groups is the distinction between the deposit schedule (how often you pay) and the filing cycle (how often you report). These can be different:

| Example | Payment Cycle | Filing Cycle |
|---------|---------------|--------------|
| FICA taxes (monthly depositor) | Monthly | Quarterly |
| FICA taxes (semi-monthly depositor) | Semi-monthly | Quarterly |
| State income tax | Monthly | Quarterly |
| Health insurance premiums | Each payroll | Monthly |

Use the **Payment Cycle** field to control when payment batches are consolidated and due. Use the **Filing Cycle** field to control how often reporting forms are generated.

## Remittance group fields

| Field | Description |
|-------|-------------|
| **Code** | A unique identifier for this remittance group. |
| **Description** | A descriptive name, such as *Federal Payroll Taxes* or *Health Insurance – Carrier A*. |
| **Payment Cycle** | The pay cycle that determines the deposit frequency and the period covered by each payment batch. If blank, one batch is created per payroll run. |
| **Filing Cycle** | The pay cycle that determines how often reporting forms are generated. |
| **Payment Method** | The Business Central payment method stored on the batch to control the payment processing mode. The actual payee and posting details still come from each payment source, such as the tax authority or benefit provider vendor. |
| **Filing Method** | The method used to generate remittance reports or files for this group. |
| **Home Page** | The URL of the agency or carrier's remittance portal. |

## Sources

Each remittance group has one or more **sources**—the income tax jurisdictions and benefits whose amounts are collected into this group's payment batches. Sources are assigned at the jurisdiction or benefit level:

- **Income tax jurisdictions** — set the **Remittance Group** field on the income tax jurisdiction record
- **Benefits** — set the **Remittance Group** field on the benefit record or benefit rate record

The **Sources** factbox on the Remittance Group card lists all currently assigned jurisdictions and benefits for quick reference.

> [!IMPORTANT]
> Remittance groups are best used for sources that can be paid in a consistent way. The batch can store one payment method, but the underlying payment entries still resolve their payee and payment details from each source record. If the assigned jurisdictions or benefits point to different vendor payment methods or payout setups, the **Pay** action might not produce a single unified payment result for the whole batch.

## Payment batch lifecycle

When a payroll run is created, OnePayroll creates or updates a payment batch for every income tax jurisdiction and benefit. If a remittance group is assigned:

1. The applicable period is determined from the remittance group's payment cycle and the payroll payment date.
2. An existing open batch for the same remittance group and period is found, or a new one is created.
3. The payroll amounts are added to the batch under the remittance group's description and payment method.

If no remittance group is assigned, a separate batch is created for each payroll run, keyed to the individual jurisdiction or benefit record using the payroll run's period dates.

The resulting payment batches are visible on the **Payroll Payments** page as soon as payroll calculation completes. See [Work with payment batches](payment-batches.md) for details on managing and processing those batches.

## Filing methods

The **Filing Method** on a remittance group determines what happens when you run a report from the payment batch. OnePayroll includes the following built-in filing methods:

| Method | Description |
|--------|-------------|
| **Default** | Produces a standard summary report of the payment batch contents. |
| **IRS Form 941** (US) | Automatically fills out an IRS Form 941 PDF based on the payroll entry data in the batch period. See [IRS Form 941](irs-form-941.md). |
| **California State Income Tax** (US) | Generates a California income tax remittance file. |
| **North Dakota State Income Tax** (US) | Generates a North Dakota income tax remittance file. |

Additional filing methods can be added by extending the `Remittance Filing Method` enum.

## Related pages

- [Set up remittance groups](remittance-groups-setup.md)
- [Work with payment batches](payment-batches.md)
- [IRS Form 941 (US)](irs-form-941.md)
- [Set up pay cycles](pay-cycles-setup.md)
