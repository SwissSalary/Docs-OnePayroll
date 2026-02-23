---
title: Set up employees
description: Learn how to create employee records and configure payroll-specific settings.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Set up employees

This guide walks you through creating employee records and configuring their payroll settings.

## Create a new employee

**To create a new employee:**

1. Search for **Employees**
2. Select **New**
3. In the **General** tab:
   - **No.** - Employee number (auto-generated or enter manually)
   - **First Name** / **Last Name** - Employee name
   - **Job Title** - Position (optional)
   - **Address** - Work address
4. In the **OnePayroll** tab (payroll-specific fields):
   - **Pay Group** - Select group (Weekly, Biweekly, Monthly, etc.)
   - **Employee Type** - Select type (Salaried, Hourly, Commissioned, Daily)
   - **Start Date** - Employment start date
5. Save

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
2. On the **OnePayroll** tab:
   - **Pay Group** - Select the appropriate group
   - This determines when the employee is paid
3. Save

**When to change:**
- Promotion from hourly to salaried (may change from weekly to biweekly)
- Staffing change (department reorganization)
- Leave of absence
- Retirement/termination

### Set employee type

**To set employee type:**

1. Open the employee
2. On the **OnePayroll** tab:
   - **Employee Type** - Select: Salaried, Hourly, Commissioned, or Daily
   - This controls how compensation is calculated
3. Save

Different employee types trigger different payroll behavior:
- **Salaried**: Annual salary ÷ periods = per-period pay
- **Hourly**: Hourly rate × hours worked
- **Commissioned**: Base + (Sales × Commission rate)
- **Daily**: Daily rate × days worked

### Enter compensation information

**For salaried employees:**

1. **Annual Salary** - Enter the annual salary amount
2. OnePayroll automatically calculates:
   - Per-period pay (annual ÷ pay periods)
   - Hourly rate (for benefits calculation)

**For hourly employees:**

1. **Hourly Rate** - Enter the hourly wage
2. Specify: **Regular hours per week** (typically 40)
3. **Overtime rules** (if applicable):
   - Overtime after X hours per week
   - Overtime rate multiplier (typically 1.5x or 2x)

**For commissioned employees:**

1. **Base Salary** - Fixed portion (if any)
2. **Commission Rate** - Percentage or amount per sale
3. Set up commission tracking separately

### Add Tax Information

**Federal tax withholding:**

1. On the **Tax Information** tab:
   - **Federal Filing Status** - Single, Married, Head of Household
   - **Federal Allowances** - Number of exemptions
   - **Additional Federal Withholding** - Extra withholds (if needed)
2. Save

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

1. **Social Security Number** - Required for W-2 reporting
2. Mark **SSN Validation** to ensure correct format
3. Save securely

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
2. In the **General** tab:
   - **Department** - Which department the employee belongs to
   - **Manager/Supervisor** - Who oversees the employee
3. Save

Department information is used for:
- GL posting allocation (some departments post to different GL accounts)
- Organizational reporting
- Payroll management by department
- Cost center assignment

## Set employee status

**To change employee status:**

1. Open the employee
2. In the **General** tab:
   - **Status** - Select from: Active, Inactive, On Leave, Terminated
3. **Status Effective Date** - When status change takes effect
4. Save

| Status | Included in Payroll | Notes |
|--------|-------------------|-------|
| **Active** | Yes | Regular payroll processing |
| **Inactive** | No | Not included in payroll runs |
| **On Leave** | Yes* | May still accrue vacation/benefits |
| **Terminated** | No | Final payroll required separately |

*On Leave employees may or may not be included depending on configuration.

## Set up benefits enrollment

**To enroll employee in benefits:**

1. Open the employee
2. On the **OnePayroll** tab, select **Benefits**
3. Select **New**
4. Enter:
   - **Benefit** - Which benefit program (Health Insurance, 401(k), etc.)
   - **Coverage** - Coverage level (Employee Only, Employee + Spouse, etc.)
   - **Effective Date** - When coverage begins
5. Save

Benefits can also be managed through:
- Employee self-service portal (employees enroll themselves)
- Benefits administration page (HR can bulk update)
- Life event changes (marriage, new dependent, etc.)

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
   - Compensation amount entered?
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
- Verify employee status is "Active"
- Check employee start date is before payroll period
- Confirm pay group is correctly assigned

### Wrong pay calculated
- Verify annual salary or hourly rate is entered correctly
- Check employee type matches calculation method
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
