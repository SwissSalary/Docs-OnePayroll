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

### Foundation (Week 1)
- [ ] **Install OnePayroll** - Ensure OnePayroll Core and your regional extension are installed
- [ ] **Review OnePayroll Workspace** - Familiarize yourself with the OnePayroll role center and available features
- [ ] **Configure GL Accounts** - Set up general ledger accounts for payroll expenses and liabilities
- [ ] **Set up Pay Groups** - Create pay groups to organize employees by pay frequency

### Configuration (Week 2)
- [ ] **Define Pay Types** - Create earnings and deductions (salary, overtime, taxes, insurance)
- [ ] **Configure Pay Cycles** - Set up pay schedules (weekly, biweekly, monthly, etc.)
- [ ] **Create Employees** - Add employee records with payroll-specific settings
- [ ] **Assign Pay Groups** - Link employees to their appropriate pay groups

### Payment Setup (Week 3)
- [ ] **Configure Payment Methods** - Set up direct deposit and/or check payment options
- [ ] **Set up Employee Payment Methods** - Add bank account details for direct deposit on Employee Payment Methods
- [ ] **Set Withholding Rules** - Configure tax withholding and deduction settings
- [ ] **Optional: Set up Benefits** - If using benefits, create benefit types and set up enrollment

### Validation (Week 4)
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

**Tip:** Pin the OnePayroll workspace to your home for quick access.

### 2. Configure GL accounts

OnePayroll needs properly configured general ledger accounts for:

- Payroll expenses (salary, wages, overtime)
- Tax liabilities (federal, state, local)
- Benefit deductions (insurance, retirement)
- Employee advance/loan accounts (if used)

Set up GL accounts following your company's chart of accounts structure. OnePayroll will use these accounts when posting payroll to the general ledger.

### 3. Set up pay groups

Pay groups organize employees by pay frequency and posting rules.

**To create a pay group:**

1. Search for **Pay Groups**
2. Select **New**
3. Enter a code (e.g., "WEEKLY", "BIWEEKLY")
4. Enter a description
5. Select the pay cycle schedule (weekly, biweekly, etc.)
6. Specify the GL posting rule for this group
7. Save

**Example pay groups:**
- "WEEKLY" - Weekly paid employees
- "BIWKLY" - Biweekly paid employees
- "MONTHLY" - Monthly paid employees

### 4. Define pay types

Pay types represent earnings and deductions. Organize them by category (e.g., Regular Earnings, Overtime, Taxes, Benefits).

**To create a pay type category:**

1. Search for **Pay Types**
2. Select **New** to create a new category
3. Enter a category name (e.g., "Regular Earnings", "Taxes", "Benefits")
4. Configure calculation rules for this category
5. Save

**To create individual pay types:**

1. Within a category, select **New Pay Type**
2. Enter the code (e.g., "REG", "OT150", "FIT")
3. Enter a description
4. Select the calculation method (Fixed Amount, Percentage, Formula, etc.)
5. Assign a GL account for posting
6. Save

**Common pay types to create:**
- **Earnings:** Regular Pay, Overtime 1.5x, Overtime 2x, Bonus, Commissions
- **Taxes:** Federal Income Tax, State Income Tax, FICA, Medicare
- **Benefits:** Health Insurance, Dental Insurance, Retirement 401(k)
- **Deductions:** Garnishments, Loans, Union Dues

### 5. Configure pay cycles

Pay cycles define how often employees are paid.

**To create a pay cycle:**

1. Search for **Pay Cycles**
2. Select **New**
3. Enter a code (e.g., "WEEKLY", "BIWEEKLY")
4. Enter a description
5. Select the frequency (Weekly, Biweekly, Semi-monthly, Monthly)
6. Specify the period calculation rules (e.g., when periods end)
7. Save

OnePayroll automatically calculates period start and end dates based on your frequency rules.

### 6. Create employees

Add employees to OnePayroll with required payroll information.

**To create an employee:**

1. Search for **Employees**
2. Select **New**
3. Enter the employee number and name
4. On the **OnePayroll** tab:
   - Assign a **Pay Group** (e.g., "BIWEEKLY")
   - Select the **Employee Type** (Salaried, Hourly, etc.)
   - Create employee **Bank Accounts** if using direct deposit
5. Save

**Required payroll information:**
- Pay group assignment
- Employee type (salary basis)
- Federal and state tax information
- Direct deposit details (if applicable)
- Any garnishments or special deductions

### 7. Optional: Set up benefits

If your company offers benefits, configure benefit enrollment.

**To set up benefits:**

1. Search for **Benefit Types**
2. Create benefit types (Health Insurance, Dental, 401(k), etc.)
3. Create specific benefits by benefit type
4. Search for **Employee Benefits** to assign benefits to employees
5. Employees can enroll through the self-service portal (optional)

### 8. Set up payment methods

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

### 9. Configure tax settings

Set up tax calculation and withholding.

**To configure tax:**

1. Search for **Income Tax Jurisdictions**
2. Set up jurisdictions for federal, state, and local levels
3. Configure the **Calculation Method** (Standard or Simplified) for each jurisdiction
4. Set up **Income Tax Rates** and **Income Tax Setup** for each tax year
5. Save

### 10. Process your first payroll

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
- **Payroll Administrator** - Full access to setup and processing
- **Payroll Clerk** - Can process payroll but not change settings
- **HR Manager** - Can view employee data but not process payroll
- **Employee** - Can access self-service portal only

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
5. **Explore advanced features** - Use the self-service portal and validation rules

See [Payroll runs overview](payroll-runs-overview.md) to learn how to process payroll, or [Employee setup](employee-setup.md) for more details on employee configuration.