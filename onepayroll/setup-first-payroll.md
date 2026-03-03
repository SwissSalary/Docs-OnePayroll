---
title: Set up employees and process your first payroll
description: Learn how to create departments, add employees, configure payment methods and tax settings, and process your first payroll run.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 02/23/2026
---

# Set up employees and process your first payroll

After [configuring payroll settings](setup-configure.md), add your employees and process a test payroll run to confirm that everything works correctly.

## Create departments and work locations

Before adding employees, set up the organizational structure they belong to.

**To create departments:**

1. Search for **Departments**.
2. Add your departments with codes, descriptions, and optional parent departments for hierarchy.

**To create work locations (US localization):**

1. Search for **Work Locations**.
2. Add work locations with addresses and state assignments for tax purposes.

> [!TIP]
> Departments and work locations are specific to your organization and must be created manually. The setup data generation doesn't include them.

For more information, see [Departments and work locations](departments-work-locations.md).

## Create employees

Add your employees to OnePayroll. Each employee must be assigned a pay group and employee type to be included in payroll processing.

**To create an employee:**

1. Search for **Employees**.
2. Select **New**.
3. Enter the employee number and name.
4. On the **OnePayroll** tab:
   - Assign a **Pay Group** (for example, BIWKLY).
   - Select the **Employee Type**, which determines the employee's pay unit and compensation method (Regular or Work-Based).
   - Set the **Employment Date**.

**Required payroll information:**

- Pay group assignment
- Employee type
- Tax withholding information (US localization)
- Payment method details (if applicable)
- Any garnishments or special deductions

For more information, see [Set up employees](employee-setup.md).

## Set up payment methods

Configure how employees are paid.

**For direct deposit:**

1. Open the **Employee Card** and select the **Payment Methods** action.
2. Create a new employee payment method.
3. Set the **Allocation Type** (Primary, Fixed Amount, or Percentage).
4. Fill in **Bank Account No.** and **Bank Identifier Code** in the Transfer group.
5. Select a Business Central **Payment Method** code.

**For check payment:**

1. Open the **Employee Card** and select the **Payment Methods** action.
2. Create a new employee payment method with a **Payment Method** code.
3. When running **Create Payroll Payments**, select **Computer Check** as the payment type.
4. Print checks through the standard Business Central check-printing process.

For more information, see [Set up payment methods](payment-methods-setup.md) and [Set up direct deposit](direct-deposit-setup.md).

## Configure tax withholding (US localization)

If you're using the US localization, configure tax withholding for each employee.

**To configure employee tax settings:**

1. Open the **Employee Card**.
2. Configure federal and state income tax withholding.
3. Verify that the employee's work location is set correctly for state tax purposes.

> [!NOTE]
> Tax configuration is part of the US country-specific extension. Other localizations may have different tax setup requirements.

For more information, see [Set up tax calculations](tax-calculation-setup.md) and [Income tax setup](income-tax-setup.md).

## Process your first payroll

With employees and payment methods configured, process a test payroll run to verify your setup.

**To create a payroll run:**

1. Search for **Payroll Runs**.
2. Select **New**.
3. Set the **Pay Group** (for example, BIWEEKLY).
4. Set the **Start Date** for the pay period.
5. Select **OK**. OnePayroll creates the payroll run and calculates all amounts automatically. Status is set to **Open**.
6. Review the **Payroll Entries** for accuracy.
7. If your setup requires approvals, select **Approve** to approve the payroll run.
8. Select **Post** to post entries to the general ledger. Status changes to **Posted**.

### Verify the results

Review the calculation results carefully before posting. Check that:

- All expected employees appear in the payroll run
- Gross pay is calculated correctly
- Tax withholdings are appropriate
- All deductions are present
- GL account mapping is correct

> [!TIP]
> Process a test payroll run for a small group of employees first. This helps you identify and fix configuration issues before running payroll for your entire organization.

For more information, see [Process payroll runs](payroll-runs-process.md).

## What's next

Now that you've completed the initial setup and verified your first payroll:

- **Process regular payroll** — Create payroll runs on your established schedule
- **Manage special scenarios** — Handle bonuses, off-cycle pays, and corrections
- **Review reports** — Use built-in payroll reports for analysis
- **Prepare tax documents** — Generate year-end tax forms (US localization)
- **Explore advanced features** — Use validation rules and other advanced capabilities

## See also

- [Getting started with OnePayroll](getting-started.md)
- [About payroll runs](payroll-runs-overview.md)
- [Set up employees](employee-setup.md)
- [Set up payment methods](payment-methods-setup.md)

[!INCLUDE[footer-banner](../includes/footer-banner.md)]
