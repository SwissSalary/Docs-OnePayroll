---
title: Vendor payments
description: Learn how OnePayroll creates payment batches for benefit providers, garnishment agencies, and tax authorities during payroll processing.
author: zeande
sws.service: onepayroll
sws.topic: concept
sws.date: 04/07/2026
---

# Vendor payments

During payroll processing, OnePayroll automatically generates payment entries for third-party vendors such as benefit providers (insurance companies, retirement plan administrators), garnishment agencies (courts, child support agencies), and tax authorities. These vendor-directed amounts are collected into payment batches on the **Payroll Payments** page, where you can process or track them alongside employee payments.

## How vendor payments work

### Benefit providers

When a benefit type is configured with a provider (a BC Vendor), employee and employer contributions for that benefit are aggregated and directed to the vendor during payroll calculation. For example:

- Health insurance employee deductions &mdash; paid to insurance company vendor
- 401(k) employer match &mdash; paid to retirement plan vendor

### Garnishment agencies

Garnishment lines reference an **Agency No.** that points to a BC Vendor record. When garnishment deductions are calculated during payroll, the amounts are directed to the garnishment agency vendor.

### Tax authorities

Income tax jurisdictions reference a **Tax Authority** vendor. Federal, state, and local tax withholdings are directed to the corresponding vendor.

### Payment flow

1. During payroll calculation, OnePayroll creates payroll entries for each benefit deduction, employer contribution, garnishment deduction, and tax withholding.
2. Payment batches are created automatically, grouping entries by source type. Benefit and tax batches can be consolidated by remittance group and payment period; garnishment batches are created per agency per payroll run.
3. You process these batches from the **Payroll Payments** page by choosing the **Pay** action. For electronic payments, a payment file is generated and attached to the batch. For check payments, checks are printed.
4. The vendor's preferred bank account, payment method code, and currency code are resolved automatically from the vendor record.

## Vendor setup for payroll

### Vendor record requirements

Vendors used as benefit providers, garnishment agencies, or tax authorities should have:

- **Payment Method Code** &mdash; the preferred payment method for this vendor
- **Preferred Bank Account Code** &mdash; the vendor bank account for direct payments
- A valid vendor number referenced from the benefit type, garnishment line, or tax jurisdiction

### Vendor extensions in OnePayroll

OnePayroll extends the standard BC Vendor table with:

- **Garnishment Count** &mdash; shows how many garnishment lines reference this vendor as an agency
- **Benefit Contract Count** &mdash; shows how many benefit contracts reference this vendor as a provider
- **Deletion protection** &mdash; a vendor cannot be deleted if garnishment lines exist for it

These fields are visible on the **Vendor Card** and **Vendor List** pages.

## Viewing vendor payroll activity

### From the Vendor Card

The Vendor Card shows the garnishment count and benefit contract count. From there, you can navigate to:

- **Benefit Contracts** &mdash; view benefit contracts where this vendor is the provider
- **Garnishment Lines** &mdash; view garnishments where this vendor is the agency

### From payroll payments

Open the **Payroll Payments** page to see all payment batches, including those directed to vendors. Choose the **Show Payment Entries** action on a batch to see detailed entries, or choose the **Show Reference** action to navigate to the benefit, garnishment, or tax jurisdiction that generated the batch.

## Related information

- [Work with payroll payments](payroll-payments.md)
- [About benefits](benefits-overview.md)
- [Garnishments](garnishments.md)
- [About payment methods](payment-methods-overview.md)
- [About GL integration](gl-integration-overview.md)
