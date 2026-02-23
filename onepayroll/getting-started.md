---
title: Getting started with OnePayroll
description: Learn how to set up OnePayroll, from initial configuration to processing your first payroll run.
author: zeande
ms.service: dynamics-365-business-central
ms.topic: quickstart
ms.date: 02/23/2026
---

# Getting started with OnePayroll

This guide walks you through the initial setup of OnePayroll, from configuring the foundation to processing your first payroll run.

## Prerequisites

Before you begin, ensure you have:

- **Business Central subscription** - OnePayroll requires Dynamics 365 Business Central, version 26 or later
- **OnePayroll Core app installed** - Available from the Business Central app marketplace
- **Country-specific extension installed** - Install the US or Switzerland extension appropriate for your region
- **Admin access** - You need administrator permissions to perform setup tasks
- **Chart of Accounts configured** - Standard GL accounts for payroll (Salary Expense, Tax Payable, etc.)

## Onboarding checklist

Use this checklist to track your setup progress:

### Foundation
- [ ] **Install OnePayroll** - Ensure OnePayroll Core and your regional extension are installed
- [ ] **Generate setup data** - Use the built-in Contoso Coffee demo dataset to create foundational payroll configuration
- [ ] **Review OnePayroll Workspace** - Familiarize yourself with the OnePayroll role center and available features
- [ ] **Configure GL accounts** - Set up general ledger accounts for payroll expenses and liabilities

### Configuration
- [ ] **Review and customize pay types** - Adjust the pre-configured pay types to match your organization
- [ ] **Review and customize pay cycles** - Verify pay schedules match your pay frequencies
- [ ] **Review and customize pay groups** - Adjust pay groups and assign journal templates for GL posting
- [ ] **Review employee types** - Verify the pre-configured employee types or create new ones

### Employees and payments
- [ ] **Create departments and work locations** - Set up your organizational structure
- [ ] **Create employees** - Add employee records with payroll-specific settings
- [ ] **Set up employee payment methods** - Add bank account details for direct deposit
- [ ] **Configure tax withholding** - Set up tax withholding and deduction settings (US localization)
- [ ] **Optional: Set up benefits** - If using benefits, review benefit types and configure enrollment

### Validation
- [ ] **Run test payroll** - Create a payroll run for a small group to verify configuration
- [ ] **Review payroll entries** - Check that pay types, deductions, and calculations are correct
- [ ] **Verify GL posting** - Ensure payroll entries post correctly to your general ledger
- [ ] **Train users** - Provide initial training on payroll processing tasks

---

## Step-by-step setup

### 1. Install and access OnePayroll

After installing OnePayroll Core and your regional extension:

1. In Business Central, search for **Payroll Setup**
2. Open the Payroll Setup page to access configuration options
3. Verify the OnePayroll workspace is available from your role center

> [!TIP]
> Pin the OnePayroll workspace to your home for quick access.

### 2. Generate setup data

OnePayroll includes the **Contoso Coffee Payroll Demo Dataset**, which can generate pre-configured payroll data at two levels:

- **Setup data** — Generic payroll configuration such as pay types, pay units, pay cycles, pay groups, employee types, benefit coverage, validation rules, and document types. This data is appropriate for production environments because it provides a standardized foundation that any organization can customize.
- **Master data** — Company-specific demonstration data such as departments, job titles, sample employees, and employee payment methods. This data is intended for learning and evaluation only because it represents a fictitious company.

When you first open the OnePayroll workspace, a notification appears:

> *Required payroll setup data is missing. Generate the setup data now to enable payroll processing.*

Select **Generate Setup Data** to create the foundation. This generates setup data only — not master data.

#### Setup data included

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

#### Master data (demonstration only)

If you're evaluating OnePayroll or want to explore with sample data, you can generate master data separately through the **Contoso Demo Tool** in Business Central. Master data includes:

- 11 departments in a hierarchy (Management, Finance, HR, IT, Production, Sales, etc.)
- 26 job titles
- 16 sample employees with payroll assignments and payment methods
- 3 sample work locations (US localization: California, New York, North Dakota)

> [!IMPORTANT]
> Do not generate master data in a production environment. Departments, employees, job titles, and work locations are specific to your organization and should be created manually.

After generating setup data, your next steps are to review and customize the generated configuration rather than creating everything from scratch.

### 3. Configure GL accounts

OnePayroll needs properly configured general ledger accounts for:

- Payroll expenses (salary, wages, overtime)
- Tax liabilities (federal, state, local)
- Benefit deductions (insurance, retirement)
- Employee advance/loan accounts (if used)

Set up GL accounts following your company's chart of accounts structure. OnePayroll will use these accounts when posting payroll to the general ledger.

### 4. Review and customize pay groups

The demo dataset creates three pay groups: ALL, HOURLY, and SALARY. Review these and adjust as needed.

**To review pay groups:**

1. Search for **Pay Groups**
2. Open each pay group and verify:
   - **Pay Cycle** — the pay schedule for this group
   - **Pay Group Owner** — the employee responsible for this group
   - **Gen. Journal Template** and **Gen. Journal Batch** — for GL posting
3. Add, rename, or remove pay groups to match your organization
4. Save

### 5. Review and customize pay types

The demo dataset creates approximately 95 core pay types (plus ~60 US-specific types) organized by category. Each pay type has a category from the Category enum: Earnings, Employee Deductions, Hypothetical, Employer Contributions, or Heading.

**To review pay types:**

1. Search for **Pay Types**
2. Review the generated pay types and their categories
3. Adjust descriptions, GL account assignments, and pay units as needed
4. Add any organization-specific pay types
5. Remove or deactivate pay types you don't need
6. Save

For more information, see [Set up pay types](pay-types-setup.md).

### 6. Review and customize pay cycles

The demo dataset creates four pay cycles: Weekly (52 periods), Biweekly (26 periods), Semimonthly (24 periods), and Monthly (12 periods). Each includes schedule lines with date formulas.

**To review pay cycles:**

1. Search for **Pay Cycles**
2. Open each pay cycle and verify:
   - **Periods per Year** — matches your pay frequency
   - **Pay Unit** — the unit of compensation for this cycle
   - **Schedule Lines** — date formulas for period start, period end, and payment date
3. Adjust schedule lines if your payment dates differ from the defaults
4. Save

For more information, see [Set up pay cycles](pay-cycles-setup.md).

### 7. Create employees

Add your employees to OnePayroll. The demo dataset creates sample employees for demonstration purposes — delete these before adding your real employees.

**To create an employee:**

1. Search for **Employees**
2. Select **New**
3. Enter the employee number and name
4. On the **OnePayroll** tab:
   - Assign a **Pay Group** (e.g., "BIWKLY")
   - Select the **Employee Type** — a user-defined code that determines the employee's pay unit and compensation method (Regular or Work-Based)
   - Set up **Payment Methods** if using direct deposit
5. Save

**Required payroll information:**
- Pay group assignment
- Employee type
- Tax withholding information (US localization)
- Payment method details (if applicable)
- Any garnishments or special deductions

### 8. Optional: Set up benefits

The demo dataset creates benefit coverage types and, with the US localization, pre-configured benefits including Social Security, Medicare, unemployment taxes, and 401(k). Review these and add any additional benefits your organization offers.

**To review and set up benefits:**

1. Search for **Benefit Types**
2. Review the generated benefit types and their calculation settings
3. Add any additional benefits (Health Insurance, Dental, etc.)
4. Search for **Employee Benefits** to assign benefits to employees

### 9. Set up payment methods

Configure how employees will be paid.

**For direct deposit:**

1. Open the **Employee Card** and select the **Payment Methods** action
2. Create a new Employee Payment Method
3. Set the Allocation Type (Primary, Fixed Amount, or Percentage)
4. Fill in Bank Account No. and Bank Identifier Code in the Transfer group
5. Select a Business Central Payment Method code
6. Close the card

**For check payment:**

1. Open the **Employee Card** and select the **Payment Methods** action
2. Create a new Employee Payment Method with a Payment Method code
3. When running Create Payroll Payments, select **Computer Check** as the Payment Type
4. Print checks through the standard Business Central check-printing process

### 10. Configure tax settings (US localization)

If you're using the US localization, the demo dataset creates income tax jurisdictions for Federal, California, and North Dakota. You need to add jurisdictions for any additional states where your employees work.

**To configure tax:**

1. Search for **Income Tax Jurisdictions**
2. Review the existing jurisdictions and add any additional states
3. Configure the **Calculation Method** (Standard or Simplified) for each jurisdiction
4. Set up **Income Tax Rates** and **Income Tax Setup** for each tax year
5. Save

> [!NOTE]
> Tax configuration is part of the US country-specific extension. Other localizations may have different tax setup requirements.

### 11. Process your first payroll

Now that setup is complete, process a test payroll run.

**To create a payroll run:**

1. Search for **Payroll Runs**
2. Select **New**
3. Select the **Pay Group** (e.g., "BIWEEKLY")
4. Specify the **Period** (payroll period)
5. Select the **Status** to "Draft"
6. Save
7. Select **Calculate** to compute payroll amounts
8. Review the **Payroll Entries** for accuracy
9. When satisfied, select **Mark as Ready**
10. Finally, select **Post** to post entries to the general ledger

Review the calculation results carefully before posting. Check that:
- All employees appear
- Gross pay is calculated correctly
- Tax withholdings are appropriate
- All deductions are present
- GL account mapping is correct

---

## Navigation and interface

### Key pages and workspaces

| Page | Purpose |
|------|---------|
| **Payroll Runs** | Create and process payroll batches |
| **Employees** | Maintain employee master data |
| **Pay Groups** | Organize employees by pay frequency |
| **Pay Types** | Define earnings and deductions |
| **Pay Cycles** | Set up pay schedules |
| **Payment Methods** | Configure payment delivery options |
| **Payroll Setup** | Configure system settings |

### Searching and finding things

Use the **Search** feature (Ctrl+K) to quickly find pages:
- Search for **Payroll** to see all payroll-related pages
- Search for **Employees** to access employee records
- Search for **Pay Type** to access pay type configuration

### Role-based access

OnePayroll provides role-based permissions:
- **Payroll Administrator** — Full access to setup and processing
- **Payroll Clerk** — Can process payroll but not change settings
- **HR Manager** — Can view employee data but not process payroll

---

## Best practices

### Data quality
- Ensure each employee is assigned to a pay group
- Verify pay types are correctly linked to GL accounts
- Keep Employee Payment Method bank details current
- Review and validate tax withholding settings before first payroll

### Process discipline
- Always review payroll entries before posting
- Use test payroll runs to verify configuration changes
- Archive completed payroll runs for audit purposes
- Reconcile gl accounts after posting

### Regular maintenance
- Update pay types and deductions as business needs change
- Review and adjust tax withholding annually (or as tax laws change)
- Maintain Employee Payment Method records
- Keep backup copies of completed payroll data

---

## What's next

Now that you've completed setup:

1. **Process regular payroll** - Create payroll runs on your established schedule
2. **Manage special scenarios** - Handle bonuses, off-cycle pays, and corrections
3. **Review reports** - Use built-in payroll reports for analysis
4. **Prepare tax documents** - Generate year-end tax forms
5. **Explore advanced features** — Use validation rules and other advanced capabilities

See [Payroll runs overview](payroll-runs-overview.md) to learn how to process payroll, or [Employee setup](employee-setup.md) for more details on employee configuration.