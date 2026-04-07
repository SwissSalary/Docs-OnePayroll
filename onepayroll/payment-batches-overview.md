---
title: Payroll payments overview
description: Learn how OnePayroll automatically creates payroll payments for employees, taxes, benefits, and garnishments, and how to process, track, and report on them.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 04/06/2026
---

# Payroll payments overview

Payroll payments are automatically created when a payroll run is created (during calculation). Each payment batch represents a payment obligation, whether to employees, a tax agency, a benefit carrier, or another payee. All payments, including employee pay, are processed from the **Payroll Payments** page. This article explains how batches are created, what they contain, and how to process them.

## How payment batches are created

OnePayroll creates a payment batch for every payroll obligation when a payroll run is created (during calculation). This includes employee paychecks, income taxes, benefits, and garnishments. What determines how a batch is keyed and consolidated depends on the source type:

**For income taxes and benefits:**

- **With a remittance group assigned** — When you create a payroll run, OnePayroll calculates the payment period using the remittance group's payment cycle and the payroll payment date. It finds an existing open batch for that remittance group and period, or creates a new one, then adds the amounts. This means multiple payroll runs within the same cycle period accumulate into a single batch.
- **Without a remittance group** — A separate batch is created per payroll run, keyed to the individual jurisdiction or benefit record with the payroll run's period dates and the Tax Authority vendor's payment method.

**For employee paychecks and garnishments:**

Batches are always created per payroll run, one per payment method for employee payments and one per agency for garnishments. Remittance groups do not apply. For example, if some employees use electronic payment and others use check, two separate employee payment batches are created for that payroll run, each with the corresponding payment method assigned.

## Open the Payroll Payments page

Search for and open **Payroll Payments** to see all payment batches. You can also reach the Payroll Payments page from the **role center**, where cues show the count of upcoming, due, overdue, and completed payments. The list shows:

| Column | Description |
|--------|-------------|
| **Description** | The name of the payee or obligation (for example, *Federal Payroll Taxes*). |
| **Amount** | The total dollar amount accumulated in this batch. |
| **Payment Method** | How the payment will be processed. |
| **Due Date** | The date by which the payment must be made. |
| **Payment Status** | The current status: Open, Processed, or Completed. |

## Payment batch statuses

| Status | Meaning |
|--------|---------|
| **Open** | The batch is accumulating amounts and has not been paid. |
| **Processed** | A payment file or check has been generated. |
| **Completed** | The payment has been confirmed as paid. |

## View payment details

Select a batch to open the **Payroll Payment** card. The card shows:

- **Period** — The start and end dates covered by this batch.
- **Due Date** — When payment is due.
- **Payment Method** — The method to be used.
- **Remittance Group** — The remittance group that generated this batch.
- **Payment Summary** factbox — A breakdown of amounts by source (for example, individual tax jurisdictions or benefit names contributing to the total).

To see the individual payroll entries that make up the total, choose the **Show Payment Entries** action.

To navigate directly to the remittance group, benefit, or tax jurisdiction that generated this batch, choose the **Show Reference** action.

## Process a payment

Processing uses the payment method stored on the batch to choose the payment processing mode, such as electronic payment or computer check. However, the actual payee, recipient bank account, and payment method details for each entry still come from the underlying source record.

**To process a payment:**

1. Open the **Payroll Payments** list.
2. Select the batch with status **Open**.
3. Choose the **Pay** action.
4. OnePayroll processes the payment by using the batch's payment method to determine the payment type.

> [!NOTE]
> The **Pay** action is only enabled for batches with **Open** status.

> [!IMPORTANT]
> The **Pay** action works best when all entries in the batch have compatible underlying payout setup. In remittance-group batches, amounts can come from multiple jurisdictions or benefits that still resolve to different vendors and vendor payment methods. If those source-level settings are not aligned, the batch might not behave as a single unified payment. In those cases, use **Report** and settle the payment outside the system, then use **Mark as paid**.

## Generate a report or filing

Use the **Report** action to produce the remittance report or file for this payment batch. The output depends on the **Filing Method** configured on the remittance group:

- For the **Default** method, a summary report of the batch is produced.
- For localization-specific filing methods, the applicable country- or region-specific remittance file or form is generated.

**To create a report:**

1. Open the payment batch (or select it in the list).
2. Choose the **Report** action.
3. Save or download the generated file.

> [!TIP]
> The **Report** action is available regardless of payment status. You can generate the report before or after payment processing.

## Mark as paid manually

If payment was made outside of OnePayroll—for example, by logging into the EFTPS website manually or writing a manual check—you can mark the batch as paid without processing a file.

**To mark one or more batches as paid:**

1. In the **Payroll Payments** list, select the batch or batches to mark.
2. Choose the **Mark as Paid** action.
3. Confirm the action.
4. Status changes to **Completed** and the payment date is recorded.

## Reopen a payment batch

If a payment batch was processed or marked as paid in error, you can reopen it.

**To reopen a batch:**

1. Select the batch in the list (or open the card).
2. Choose the **Reopen** action.
3. Status returns to **Open**.

## Payment batch period and amounts

The period covered by a payment batch depends on whether the source has a remittance group:

- **With a remittance group** — The period is calculated from the remittance group's payment cycle using the payroll payment date as the reference. Multiple payroll runs in the same cycle period accumulate into one batch.
- **Without a remittance group** — Each payroll run creates its own payment batch. The period matches the payroll run's period.

The **Amount** field on a payment batch is a calculated total of all associated payment entries. It updates automatically as new payroll runs are created.

## Related pages

- [About remittance groups](remittance-groups-overview.md)
- [Set up remittance groups](remittance-groups-setup.md)
- [US localization and compliance](us-localization.md)
- [Process payroll runs](payroll-runs-process.md)
- [Set up direct deposit](direct-deposit-setup.md)
- [Check printing and management](check-printing.md)
