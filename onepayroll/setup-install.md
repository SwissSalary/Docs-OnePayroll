---
title: Install and generate setup data
description: Learn how to install OnePayroll, choose the Payroll Manager role center, and generate pre-configured setup data.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 02/23/2026
---

# Install and generate setup data

This article walks through installing OnePayroll, choosing the Payroll Manager role center, and generating pre-configured setup data so you don't have to create everything from scratch.

## Install OnePayroll

Install the following extensions from the Business Central app marketplace:

1. **OnePayroll Core** — The foundation extension required for all payroll functionality.
2. **Country-specific extension** — Install the US or Switzerland extension appropriate for your region.

## Choose the Payroll Manager role center

After installing OnePayroll, set the **Payroll Manager** role center as your default home page:

1. Select the **Settings** icon (gear) in the top-right corner of Business Central, then select **My Settings**.
2. In the **Role** field, select **Payroll Manager**.
3. Select **OK**.

The Payroll Manager role center is now your home page. It provides a dashboard with payroll activity cues, headlines, and navigation to all payroll functions.

For more information about changing your role center, see [Change basic settings](/dynamics365/business-central/ui-change-basic-settings#role) in the Business Central documentation.

## Generate setup data

OnePayroll includes the **Contoso Coffee Payroll Demo Dataset**, which can generate pre-configured payroll data at different levels:

- **Setup data** — Generic payroll configuration such as pay types, pay units, pay cycles, pay groups, employee types, benefit coverage, validation rules, and document types. This data is appropriate for production environments because it provides a standardized foundation that any organization can customize.
- **Master data** — Company-specific demonstration data such as departments, job titles, sample employees, and employee payment methods. This data is intended for learning and evaluation only because it represents a fictitious company (Contoso Coffee).
- **Transactional data** — Sample posted payroll runs. This data is typically installed together with master data for demonstration purposes.

### Generate setup data from the notification

When you first open the **Payroll Manager** role center, a notification appears:

> *Required payroll setup data is missing. Generate the setup data now to enable payroll processing.*

Select **Generate Setup Data** to create the foundation. This generates setup data only — not master or transactional data.

### Generate setup data from the Contoso Demo Data page

You can also generate setup data through the standard Business Central Contoso Demo Tool:

1. Search for **Contoso Demo Data**.
2. Find the **SwS Payroll Module** row.
3. Select **Generate Setup Data** to generate setup data only.

> [!WARNING]
> Do not select **Generate** (without qualification). The **Generate** action generates both setup data and master data, which includes fictitious departments, employees, and payroll runs that are not appropriate for a production environment. Use **Generate Setup Data** to generate only the generic payroll configuration.

### Setup data included

| Category | What's included |
|----------|----------------|
| **Pay units** | 7 standard units (Hourly, Daily, Weekly, Biweekly, Semimonthly, Monthly, Yearly) with conversion factors |
| **Pay types** | ~95 core pay types across earnings, taxes, deductions, benefits, and employer contributions |
| **Pay cycles** | 4 schedules (Weekly, Biweekly, Semimonthly, Monthly) with schedule lines |
| **Pay groups** | 3 groups (All, Hourly Employees, Salary Employees) linked to pay cycles and journal batches |
| **Employee types** | 4 types (Contractor, Hourly, Salary Exempt, Salary Non-Exempt) with pay units and compensation methods |
| **Validation rules** | Default validation rules for employee and garnishment data |
| **Document types** | 11 document types organized in categories (Official, Internal, Onboarding) |
| **Benefit coverage** | 3 coverage types (Standard, Tax, Mandatory) with coverage options |
| **Rules** | Weekday rules, workday/weekend composites, and validation rules |

The US localization extension adds the following to setup data:

| Category | What's included |
|----------|----------------|
| **US pay types** | ~60 additional pay types (Social Security, Medicare, FUTA, SUTA, 401(k), HSA, FSA, etc.) with W-2 mappings |
| **Benefits** | Social Security, Medicare, FUTA, SUTA (with limits for all 50 states), 401(k), HSA, and garnishment benefits |
| **Income tax jurisdictions** | Federal, California, and North Dakota as starting examples |
| **Garnishment types** | 10 types (Child Support, IRS Levy, Tax Lien, Student Loan, etc.) |
| **State rules** | Tax rules for all 50 states plus age and filing status rules |
| **Data exchange definitions** | Pre-configured ACH/EFT export format |

### Master and transactional data (demonstration only)

If you're evaluating OnePayroll or want to explore with sample data, you can generate master data through the **Contoso Demo Data** page. Master data includes 11 departments, 26 job titles, 16 sample employees with payroll assignments and payment methods, and (with the US localization) 3 sample work locations. Transactional data includes posted payroll runs for the sample employees.

> [!IMPORTANT]
> Do not generate master data in a production environment. Departments, employees, job titles, work locations, and payroll runs are specific to your organization and should be created manually.

## What's next

After generating setup data, review and customize the generated configuration:

- [Configure payroll settings](setup-configure.md)
- [Set up employees and process your first payroll](setup-first-payroll.md)

## See also

- [Getting started with OnePayroll](getting-started.md)
- [Payroll Manager Role Center](role-center.md)
