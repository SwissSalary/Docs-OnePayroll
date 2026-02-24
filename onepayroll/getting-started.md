---
title: Getting started with OnePayroll
description: Get an overview of the OnePayroll setup process, from installation through your first payroll run.
author: zeande
ms.service: dynamics-365-business-central
ms.topic: overview
ms.date: 02/23/2026
---

# Getting started with OnePayroll

This guide provides an overview of the OnePayroll setup process. Follow the steps below to go from installation to processing your first payroll run.

## Prerequisites

Before you begin, ensure you have:

- **Business Central subscription** — OnePayroll requires Dynamics 365 Business Central, version 26 or later
- **Admin access** — You need administrator permissions to perform setup tasks
- **Chart of Accounts configured** — Standard GL accounts for payroll expenses (Salary Expense, Tax Payable, etc.)

## Onboarding checklist

Use this checklist to track your setup progress. Each section links to a detailed setup article.

### Foundation

- [ ] [Install OnePayroll](setup-install.md) — Install OnePayroll Core and your regional extension
- [ ] [Generate setup data](setup-install.md#generate-setup-data) — Use the built-in Contoso Coffee demo dataset to create foundational payroll configuration
- [ ] [Choose the Payroll Manager role center](setup-install.md#choose-the-payroll-manager-role-center) — Set the Payroll Manager as your default role center

### Configuration

- [ ] [Configure GL accounts](setup-configure.md#configure-gl-accounts) — Set up general ledger accounts for payroll expenses and liabilities
- [ ] [Review and customize pay types](setup-configure.md#review-and-customize-pay-types) — Adjust the pre-configured pay types to match your organization
- [ ] [Review and customize pay cycles](setup-configure.md#review-and-customize-pay-cycles) — Verify pay schedules match your pay frequencies
- [ ] [Review and customize pay groups](setup-configure.md#review-and-customize-pay-groups) — Adjust pay groups and assign journal templates for GL posting
- [ ] [Review employee types](setup-configure.md#review-employee-types) — Verify the pre-configured employee types or create new ones
- [ ] [Review benefits](setup-configure.md#review-benefits) — Review benefit types and configure enrollment

### Employees and payments

- [ ] [Create departments and work locations](setup-first-payroll.md#create-departments-and-work-locations) — Set up your organizational structure
- [ ] [Create employees](setup-first-payroll.md#create-employees) — Add employee records with payroll-specific settings
- [ ] [Set up payment methods](setup-first-payroll.md#set-up-payment-methods) — Add bank account details for direct deposit
- [ ] [Configure tax withholding](setup-first-payroll.md#configure-tax-withholding-us-localization) — Set up tax withholding and deduction settings (US localization)

### Validation

- [ ] [Run test payroll](setup-first-payroll.md#process-your-first-payroll) — Create a payroll run for a small group to verify configuration
- [ ] Review payroll entries — Check that pay types, deductions, and calculations are correct
- [ ] Verify GL posting — Ensure payroll entries post correctly to your general ledger

## Setup articles

| Article | What you'll do |
|---------|---------------|
| [Install and generate setup data](setup-install.md) | Install OnePayroll, choose the Payroll Manager role center, and generate foundational setup data |
| [Configure payroll settings](setup-configure.md) | Review and customize pay types, pay cycles, pay groups, employee types, benefits, and tax settings |
| [Set up employees and process your first payroll](setup-first-payroll.md) | Create departments, add employees, configure payment methods, and process a test payroll run |

## Navigation and interface

### Key pages

| Page | Purpose |
|------|---------|
| **Payroll Runs** | Create and process payroll batches |
| **Employees** | Maintain employee master data |
| **Pay Groups** | Organize employees by pay frequency |
| **Pay Types** | Define earnings and deductions |
| **Pay Cycles** | Set up pay schedules |
| **Payment Methods** | Configure payment delivery options |
| **Payroll Setup** | Configure system settings |

### Searching and finding pages

Use the **Search** feature (Alt+Q) to quickly find pages:

- Search for **Payroll** to see all payroll-related pages
- Search for **Employees** to access employee records
- Search for **Pay Type** to access pay type configuration

## Best practices

### Data quality

- Ensure each employee is assigned to a pay group
- Verify pay types are correctly linked to GL accounts
- Keep employee payment method bank details current
- Review and validate tax withholding settings before first payroll

### Process discipline

- Always review payroll entries before posting
- Use test payroll runs to verify configuration changes
- Reconcile GL accounts after posting

### Regular maintenance

- Update pay types and deductions as business needs change
- Review and adjust tax withholding annually (or as tax laws change)
- Maintain employee payment method records

## See also

- [Install and generate setup data](setup-install.md)
- [Configure payroll settings](setup-configure.md)
- [Set up employees and process your first payroll](setup-first-payroll.md)
- [Payroll Manager role center](role-center.md)
- [Key concepts and terminology](key-concepts.md)

[!INCLUDE[footer-banner](../includes/footer-banner.md)]