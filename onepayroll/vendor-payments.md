---
title: Vendor payments
description: Learn how OnePayroll creates vendor payments for benefit providers and garnishment agencies during payroll processing.
author: zeande
ms.topic: concept
ms.date: 02/23/2026
---

# Vendor payments

During payroll processing, OnePayroll automatically generates payment entries for third-party vendors such as benefit providers (insurance companies, retirement plan administrators) and garnishment agencies (courts, child support agencies). These vendor payments are posted to the standard Business Central vendor ledger.

## How vendor payments work

### Benefit providers

When a benefit type is configured with a provider (a BC Vendor), employee and employer contributions for that benefit are aggregated and directed to the vendor during payroll calculation. For example:

- Health insurance employee deductions → paid to insurance company vendor
- 401(k) employer match → paid to retirement plan vendor

### Garnishment agencies

Garnishment lines reference an **Agency No.** that points to a BC Vendor record. When garnishment deductions are calculated during payroll, the amounts are directed to the garnishment agency vendor.

### Payment flow

1. During payroll calculation, OnePayroll creates payroll entries for each benefit deduction, employer contribution, and garnishment deduction
2. Each entry tracks its **source** — the benefit type or garnishment line — via the Source Table ID and Source System ID fields
3. When payment entries are generated, the vendor payment allocator groups entries by source, identifying the vendor for each benefit or garnishment
4. Payment posting details are resolved using the vendor's preferred bank account, payment method code, and currency code
5. During GL posting, entries are posted using **Vendor** as the account type, which creates standard Business Central vendor ledger entries

## Vendor setup for payroll

### Vendor record requirements

Vendors used as benefit providers or garnishment agencies should have:

- **Payment Method Code** — the preferred payment method for this vendor
- **Preferred Bank Account Code** — the vendor bank account for direct payments
- A valid vendor number referenced from the benefit type or garnishment line

### Vendor extensions in OnePayroll

OnePayroll extends the standard BC Vendor table with:

- **Garnishment Count** — shows how many garnishment lines reference this vendor as an agency
- **Benefit Contract Count** — shows how many benefit contracts reference this vendor as a provider
- **Deletion protection** — a vendor cannot be deleted if garnishment lines exist for it

These fields are visible on the **Vendor Card** and **Vendor List** pages.

## Viewing vendor payroll activity

### From the Vendor Card

The Vendor Card shows the garnishment count and benefit contract count. From there, you can navigate to:

- **Benefit Contracts** — view benefit contracts where this vendor is the provider
- **Garnishment Lines** — view garnishments where this vendor is the agency

### From payroll entries

Payroll entries for vendor-directed amounts include the source table and system ID, letting you trace each entry back to the specific benefit type or garnishment line — and from there to the vendor.

## Related information

- [About benefits](benefits-overview.md)
- [Garnishments](garnishments.md)
- [About payment methods](payment-methods-overview.md)
- [About GL integration](gl-integration-overview.md)
