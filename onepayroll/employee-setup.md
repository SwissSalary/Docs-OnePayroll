---
title: Set up employees
description: Learn how to create employee records and configure payroll-specific settings.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 02/23/2026
---

# Set up employees

This guide walks you through creating employee records and configuring their payroll settings.

> [!TIP]
> If you generated setup data from the Contoso Coffee Payroll Demo Dataset (see [Getting started](getting-started.md)), pay groups, employee types, and other payroll configuration required for employee setup are already available. Employees themselves are company-specific and should be created manually. If you generated master data for demonstration purposes, delete the sample employees before adding your real employees.

## Create a new employee

**To create a new employee:**

1. Search for **Employees**
2. Select **New**
3. In the **General** FastTab:
   - **No.** - Employee number (auto-generated or enter manually)
   - **First Name** / **Last Name** - Employee name
   - **Job Title** - Position (optional)
   - **Address** - Work address
4. In the **Employment** FastTab (payroll-specific fields):
   - **Pay Group** - Select the appropriate pay group
   - **Type** - Select an employee type (user-defined codes that determine pay unit and compensation method)
   - **Work Location** - Select a work location

### Employee number conventions

Use consistent employee numbering:
- **Sequential** - EMP001, EMP002, EMP003 (simple, easy to track)
- **Hire date-based** - 2026001 (year + sequence, useful for analysis)
- **Department-based** - HR001, SAL001 (links to department, but less flexible)

Choose what works for your organization and stick with it.

## Configure payroll details

Once the employee is created, configure payroll-specific settings:

### Assign to pay group

**To assign a pay group:**

1. Open the employee
2. On the **Employment** FastTab:
   - **Pay Group** - Select the appropriate group
   - This determines when the employee is paid

**When to change:**
- Promotion from hourly to salaried (may change from weekly to biweekly)
- Staffing change (department reorganization)
- Leave of absence
- Retirement/termination

### Set employee type

**To set employee type:**

1. Open the employee
2. On the **Employment** FastTab:
   - **Type** - Select an employee type code
   - This determines the employee's pay unit and compensation method

Employee types are user-defined codes configured on the **Employee Types** page. Each type specifies:

- **Pay Unit** - The unit of compensation measurement (for example, Yearly, Hourly, Daily)
- **Compensation Method** - Regular or Work-Based

The employee's pay unit and pay factor are automatically derived from their employee type. For more information, see [Employee types](pay-units-employee-types.md).

### Enter compensation information

Based on the employee type code selected on the Employment FastTab, you will be able to enter the corresponding compensation on the Job and Compensation FastTab.

To set an employee’s compensation:

Open the employee record.
Go to the Job and Compensation FastTab.
In the Amount field, enter the employee’s compensation based on their employee type.

For example:

If the employee type is Salary, enter the employee’s gross annual salary in the Amount field.
If the employee type is Hourly, enter the employee’s hourly rate in the Amount field.


### Add Tax Information

**Federal tax withholding:**

1. On the **Tax Information** FastFastTab:
   - **Federal Filing Status** - Single, Married, Head of Household
   - **Federal Allowances** - Number of exemptions
   - **Additional Federal Withholding** - Extra withholds (if needed)

**State tax withholding** (if applicable):

1. **State of Residence** - Where employee lives (determines tax jurisdiction)
2. **State Filing Status** - Single, Married, etc.
3. **State Allowances** - Number of exemptions
4. **Additional State Withholding** - Extra amount (if needed)

**Local tax** (if applicable):

1. **Local Tax Jurisdiction** - City/county with payroll tax
2. **Local Withholding** - Amount or percentage

### Social Security / Tax ID

**For US employees:**

1. **Social Security Number** — Required for W-2 reporting
2. Mark **SSN Validation** to ensure correct format

The SSN is critical for:
- Federal tax withholding
- W-2 form generation
- Social Security reporting
- IRS compliance

> [!IMPORTANT]
> SSNs are sensitive data. Ensure your OnePayroll system has data security configured.

## Add payment methods (for direct deposit)

**To add an Employee Payment Method:**

1. Open the **Employee Card**.
2. Select the **Payment Methods** action.
3. On the **Employee Payment Methods** list, select **New**.
4. Enter details on the card:
   - **Name** — a descriptive label (for example, "Main Checking")
   - **Priority** — the processing order
   - **Allocation Type** — Primary, Fixed Amount, or Percentage
   - **Payment Method** — select a Business Central payment method code
   - **Bank Account No.** — bank account number
   - **Bank Identifier Code** — routing number (ABA) or SWIFT code
5. Close the card.

The first payment method created is automatically set to Primary allocation type.

Payment method information is used for:
- Direct deposit processing
- Check payment generation
- Pay allocation across multiple accounts

See [About payment methods](payment-methods-overview.md) for more details.

## Configure department and manager

**To set organizational relationships:**

1. Open the employee
2. In the **Job & Compensation** FastTab:
   - **Department** - Which department the employee belongs to
   - **Manager/Supervisor** - Who oversees the employee

Department information is used for:
- Organizational reporting
- Payroll management by department

## Employee status

OnePayroll computes the employee's status based on the **Employment Date** and **Termination Date** fields:

| Status | Condition |
|--------|----------|
| **Onboarding** | Employment date is not set, or employment date is in the future |
| **Active** | Employment date is in the past and no termination date is set |
| **Offboarding** | Employment date is in the past and termination date is in the future |
| **Inactive** | Employment date is in the past and termination date is in the past |

To change an employee's status, update the **Employment Date** or **Termination Date** fields on the employee card. The status updates automatically.

> [!NOTE]
> Only **Active** and **Offboarding** employees are typically included in payroll runs.

## Set up benefits enrollment

**To enroll an employee in benefits:**

1. Open the employee card or select the employee on the Employee list.
2. Choose the **Benefit Assignments** action.
3. On the **Benefit Assignments** page, locate the benefit and specify whether the employee is liable for it.
4. If the benefit uses employee-assigned rates, choose **Benefit Rates** to set the employee-specific rate (for example, 401(k)).

## Garnishment setup

See [Garnishments](garnishments.md) for detailed garnishment configuration.

## Effective dates and changes

OnePayroll tracks when changes take effect:

**Compensation changes:**
- Raise effective 3/1/2026
- Pay group change effective 4/15/2026
- Benefits change effective 1/1/2027 (plan year)

**Historical tracking:**
- When you change employee data, snapshot is created
- Previous values retained for historical payroll
- Enables audit trail of all changes

## Testing employee setup

Before processing payroll:

1. Create a test employee
2. Verify all required fields are filled:
   - Pay group assigned?
   - Employee type selected?
   - Pay types configured?
   - Tax information complete?
3. Include in test payroll run
4. Verify payroll calculated correctly
5. Delete or archive test employee

## Bulk employee setup

For importing multiple employees:

1. Search for **Employee Import**
2. Prepare import file with: Employee number, name, pay group, employee type, annual salary
3. Run import
4. OnePayroll creates employee records in bulk
5. Manually complete optional fields (bank accounts, garnishments, etc.)

See your administrator for import templates and procedures.

## Troubleshooting

### "Pay Group not found" error
- Verify pay group exists and is active
- Check spelling of pay group code
- Create pay group if it doesn't exist

### Employee not appearing in payroll
- Verify employee status is Active or Offboarding (check Employment Date and Termination Date)
- Check employment date is before payroll period
- Confirm pay group is correctly assigned

### Wrong pay calculated
- Verify pay types are correctly set up
- Check employee type is correctly assigned
- Review tax withholding settings

### Bank details not validating
- Verify **Bank Identifier Code** (routing number) is correct on the Employee Payment Method
- Confirm **Bank Account No.** format is correct
- Check with bank if necessary

## Best practices

- **Consistent numbering** - Use logical employee number sequences
- **Complete setup** - Ensure all required fields are filled before payroll
- **Effective dates** - Use effective dates to track when changes apply
- **Bank account validation** - Verify bank account information before processing direct deposit
- **Test first** - Always test new employee setup with test payroll
- **Tax accuracy** - Double-check tax withholding settings to avoid withholding errors
- **Archive historical data** - Keep terminated employee records for audit purposes

## What's next

- **[Employee pay units](employee-pay-units.md)** - Configure compensation rates
- **[Employee bank account information](employee-bank-accounts.md)** - Bank details on payment methods
- **[Garnishments](garnishments.md)** - Wage garnishment configuration
- **[Process payroll runs](payroll-runs-process.md)** - Process payroll with your employees
