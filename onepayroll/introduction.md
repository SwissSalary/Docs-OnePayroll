---
title: Welcome to OnePayroll
description: Learn about OnePayroll, a comprehensive payroll solution built natively in Microsoft Dynamics 365 Business Central.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: overview
ms.date: 02/23/2026
---

# Welcome to OnePayroll

OnePayroll is a comprehensive payroll management extension for Microsoft Dynamics 365 Business Central. It streamlines your entire payroll process, from employee setup through tax reporting, while keeping all your payroll data directly connected to your general ledger.

## Why choose OnePayroll?

**Built for Business Central.** OnePayroll runs directly within Business Central, eliminating the need for separate payroll systems and manual data transfers. Your payroll data automatically integrates with your accounting, eliminating reconciliation headaches.

**Modern architecture.** Built from scratch with current technology and performance in mind, OnePayroll handles complex payroll scenarios without slowdowns. Process payroll for salaried and hourly employees, manage multiple pay schedules, and generate tax documents—all within a single system.

**Complete payroll coverage.** OnePayroll supports:

- Wage calculations for salaried and hourly employees
- Multiple pay types: earnings, deductions, and garnishments
- Benefits administration and enrollment
- Automatic tax withholding calculations
- Employee bank account management and direct deposit
- Check printing and payment processing
- Year-end tax form generation (W-2, 1099, and regional forms)
- General ledger integration and automatic journal posting
- Employee self-service portal capabilities
- Historical tracking and audit trails

**Localized for your region.** OnePayroll Core provides the foundation. Add a country-specific extension to process payroll for your region. Currently supported:

- **United States** - Full US tax integration, W-2 forms, state tax handling, and unemployment insurance
- **Switzerland** - Swiss-specific payroll requirements and compliance
- Additional localization layers can be added as needed

## Key concepts

When you work with OnePayroll, you'll interact with these core concepts:

### Payroll Run
A payroll run is a processing batch that calculates and processes wages for a group of employees for a specific period. Payroll runs have a defined workflow with statuses: Draft → Calculated → Ready → Posted. You can preview results before posting to ensure accuracy.

### Pay Types
Pay types represent different components of employee compensation: earnings (base salary, overtime, bonuses) and deductions (taxes, insurance, garnishments). Each pay type belongs to a category that determines how it's calculated and displayed.

### Pay Cycles
Pay cycles define how often employees are paid and when payroll periods occur. Common schedules include weekly, biweekly, semi-monthly, and monthly. OnePayroll automatically calculates period dates and handles period-end cutoffs.

### Employees
Employees in OnePayroll extend the standard Business Central employee record with payroll-specific information: pay group assignment, employee type, bank accounts for direct deposit, and garnishment details.

### Benefits
Benefits are company-sponsored programs (health insurance, retirement plans, wellness programs) that employees can enroll in. OnePayroll tracks employee coverage, calculates employer liabilities, and integrates benefits deductions into payroll.

### Payment Methods
Payment methods define how employees receive their wages: direct deposit to bank accounts or check printing. Flexible allocation options support primary/secondary bank accounts and mixed payment scenarios.

### Tax Calculations
OnePayroll integrates with multiple tax calculation engines (Vertex, Symmetry, or mock) to automatically calculate federal, state, and local tax withholdings based on employee and employer data.

## Getting started

**New to OnePayroll?** Follow these steps:

1. **Understand the basics** - Read [Getting started with OnePayroll](getting-started.md) for an onboarding checklist
2. **Learn key concepts** - Review [Key concepts and terminology](key-concepts.md) for detailed definitions
3. **Set up your foundation** - Configure pay groups, pay types, and pay cycles
4. **Add employees** - Create employees and assign them to pay groups
5. **Configure benefits** - Set up benefit types and enrollment options (if using benefits)
6. **Set up payments** - Configure payment methods and employee bank accounts
7. **Initialize tax settings** - Configure tax calculation and withholding rules
8. **Process your first payroll** - Create and process a payroll run

## Core modules

OnePayroll is organized into functional modules:

| Module | Purpose |
|--------|---------|
| **Payroll Processing** | Create payroll runs, calculate wages, review entries, and post to GL |
| **Employee Management** | Maintain employee records, pay group assignments, and bank accounts |
| **Pay Types** | Define earnings and deductions with category-based calculation rules |
| **Pay Cycles** | Set up pay frequency schedules and period calculations |
| **Benefits** | Manage benefit programs, employee enrollment, and coverage options |
| **Payments** | Configure payment methods, direct deposit, and check printing |
| **Tax & Compliance** | Calculate tax withholdings and generate tax statements |
| **Financial Integration** | Post payroll entries to the general ledger |
| **Reporting** | Generate payroll reports and tax documents |
| **Advanced Features** | Employee snapshots, validation rules, self-service portal |

## What's next

- **[Getting started](getting-started.md)** - Step-by-step onboarding instructions
- **[Key concepts and terminology](key-concepts.md)** - Detailed glossary of terms
- **[Payroll runs overview](payroll-runs-overview.md)** - Understanding the payroll processing cycle
- **[Employee setup](employee-setup.md)** - Adding and configuring employees