---
title: Process payroll runs
description: Learn how to create, calculate, review, and post payroll runs in OnePayroll.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Process payroll runs

This guide walks you through the payroll processing workflow: creating a payroll run, calculating pay, reviewing results, and posting to the general ledger.

## Payroll processing workflow overview

```
1. Create Payroll Run
   ↓
2. Review Period Details (Start Date, End Date, Payment Date)
   ↓
3. Calculate Payroll
   ↓
4. Review Payroll Entries
   ↓
5. (Optional) Make Corrections
   ↓
6. Mark as Approved
   ↓
7. Post to General Ledger
   ↓
8. Verify GL Postings
```

## Step 1: Create a payroll run

**To create a new payroll run:**

1. Search for **Payroll Runs**
2. Select **New**
3. In the **Payroll Run** form:
   - **No.** - Auto-generated or enter manually (system uses next sequential number)
   - **Pay Group** - Select the pay group to process (e.g., "Biweekly Employees")
   - **Payment Date** - Enter when employees will be paid
4. Select **OK** to create

**What happens automatically:**
- Period start and end dates are calculated based on your pay cycle
- Period number is assigned based on the payment date
- All active employees in the selected pay group are identified
- Status is set to "Open"

### Adjusting period dates

By default, OnePayroll calculates period dates from your pay cycle. If you need different dates:

1. In the **Payroll Run** list, open the payroll run
2. Edit **Start Date** and **End Date** as needed
3. Save

> [!IMPORTANT]
> Changing period dates changes which transactions are included in the payroll. Use caution—ensure adjustments reflect your business intent.

## Step 2: Review payroll run details

Before calculating, verify payroll run details are correct.

**To view payroll run details:**

1. Open the payroll run
2. Review:
   - **Pay Group** - Correct employee group?
   - **Start Date** / **End Date** - Correct period?
   - **Payment Date** - When will employees be paid?
   - **Period Number** - Sequential period for the year?
3. Verify the number of employees shown matches expected count

If details are incorrect, edit them before proceeding.

## Step 3: Calculate payroll

Calculating performs the actual wage and deduction computations.

**To calculate a payroll run:**

1. Open the payroll run (Status = "Open")
2. Select **Calculate**
3. Confirm the calculation by selecting **Yes** in the confirmation dialog
4. Wait for the calculation to complete

**What happens during calculation:**
- Gross pay is calculated for each employee (salary, hourly, etc.)
- All earnings pay types are applied
- All deductions are applied (taxes, benefits, garnishments)
- Net pay is calculated (Gross - Deductions)
- Tax withholdings are calculated based on employee tax settings
- GL accounts are assigned for posting
- Status automatically changes to "Approved"

### Calculation performance

For large employee populations, calculation may take several minutes. You'll see progress as the system processes employees.

> [!TIP]
> Process payroll during off-hours if you have many employees to avoid system slowdowns.

## Step 4: Review payroll entries

Before posting, always review calculated entries to ensure accuracy.

### View payroll entries by employee

**To review individual employee pay:**

1. In the Payroll Run, select **Payroll Entries**
2. Filter by Employee if needed
3. Review entries:
   - **Pay Type** - All expected pay types present?
   - **Amount** - Calculations look reasonable?
   - **GL Account** - Posting to correct account?
4. Check totals at bottom:
   - Gross pay = All earnings summed
   - Deductions = All deductions summed
   - Net pay = Gross - Deductions

**Example payroll review for John Smith:**
```
Pay Type                    Amount      GL Account
─────────────────────────────────────────────────
Regular Pay              $1,000.00     6000 (Salary Exp)
Overtime Pay               $150.00     6010 (OT Exp)
─────────────────────────────────────────────────
Gross Pay              $1,150.00
─────────────────────────────────────────────────
Federal Income Tax       ($120.00)    2100 (FIT Payable)
FICA                      ($88.00)    2120 (FICA Payable)
Health Insurance         ($150.00)    2110 (Ins Payable)
─────────────────────────────────────────────────
Net Pay                  $792.00      (Employee Payable)
```

### View payroll summary

**To view overall payroll summary:**

1. In the Payroll Run, select **Payroll Summary**
2. Review by GL account:
   - Total debits to expense accounts
   - Total credits to liability accounts
   - Net impact on payroll liability

**To view paycheck details:**

1. In the Payroll Run, select **Paychecks**
2. Review individual paychecks:
   - Gross pay
   - Deductions
   - Net pay
   - Payment method (check, direct deposit, etc.)

## Step 5: Make corrections (if needed)

If you find errors during review, you have two options:

### Option A: Revert and recalculate
If the error is in setup (GL accounts, pay types, etc.):

1. Select **Revert to Open**
2. Fix the underlying issue (adjust pay types, GL accounts, etc.)
3. Select **Calculate** again
4. Repeat Step 4 (Review)

### Option B: Manually adjust entries
For minor adjustments:

1. In the Payroll Entries, select **Edit**
2. Manually change the amount if needed
3. Confirm the change and recalculate if necessary

> [!IMPORTANT]
> Manual adjustments should be rare. If considering a manual adjustment, first verify the underlying data is correct. Document why the adjustment was made for audit purposes.

## Step 6: Mark as approved

Once all entries are verified:

1. In the Payroll Run, select **Approve**
2. Confirm the approval
3. Status changes to "Approved"

The payroll run is now locked. No further edits are allowed until posting or reverting.

## Step 7: Post to general ledger

Posting creates GL journal entries and updates your financial records.

**To post a payroll run:**

1. Open the Approved payroll run
2. Select **Post**
3. Confirm the posting action
4.Wait for posting to complete
5. Status changes to "Posted"

**What happens during posting:**
- Payroll entries are converted to GL journal entries
- GL accounts are debited/credited based on entry amounts
- Journal is posted to the GL
- Payroll run is marked final (cannot be modified)
- Posted date and user are recorded

### Automatic GL posting details

OnePayroll automatically:
- Aggregates entries by GL account
- Balances debits and credits
- Posts to correct period/date
- Maintains source document reference
- Creates audit trail

## Step 8: Verify GL postings

After posting, verify the general ledger was updated correctly.

**To verify GL postings:**

1. Search for **General Ledger**
2. Open GL accounts affected by payroll (salary, payroll tax, etc.)
3. Verify:
   - Correct amounts posted
   - Posted to correct period
   - Debits = Credits (balance)
   - No posting errors or reversals

**To review payroll's GL impact:**

1. In the Payroll Run, select **GL Posting Detail**
2. Review entries by GL account:
   - Account number and description
   - Debit and credit amounts
   - Journal reference number
3. Verify totals:
   - Total debits (expense accounts)
   - Total credits (liability accounts)
   - Net payroll cost

### Reconciliation check

Ensure payroll GL postings reconcile:

```
Gross Payroll Expense Accounts (Debits)
    + Employer Taxes & Benefits (Debits)
    = 
Employee & Employer Payables (Credits)
    + Net Employee Pay Due (Credit)
```

## Processing special scenarios

### Bonus or off-cycle payroll

Process the same way as regular payroll, but:
1. Create a payroll run for a special pay group or period
2. Manually add bonus pay entries (if not calculated automatically)
3. Follow normal review and posting steps

### Correcting a posted payroll

If an error is discovered after posting:

1. In Payroll History, open the posted payroll run
2. Select **Create Reversal**
3. Confirm reversal
4. OnePayroll creates offsetting GL entries
5. Create a new corrected payroll run with proper amounts
6. Post the corrected payroll

### Year-end payroll adjustments

Before year-end:
1. Create final payroll run for the year
2. Include any vacation payout, bonuses, or adjustments
3. Verify GL accounts impact (e.g., accrued vacation payable)
4. Post and reconcile

## Troubleshooting payroll processing

### "Calculation failed" error
- Verify all employees have required tax and pay data
- Check that all pay types have GL accounts assigned
- Ensure tax calculation is configured

### "GL account not found" error
- Verify all pay types have GL accounts assigned
- Confirm GL accounts still exist and aren't closed
- Check employee-level GL overrides

### Unbalanced GL posting
- Verify pay type GL accounts are correct
- Check that earnings post to debit accounts and deductions to credit accounts
- Review GL posting rule configuration

### Employee missing from payroll
- Verify employee is assigned to the correct pay group
- Check employee status (active vs. inactive)
- Confirm employee record has required data

## Best practices

- **Always review before posting** - Check calculations, amounts, and GL accounts
- **Document corrections** - Note why manual adjustments were made
- **Process on schedule** - Consistent timing prevents missed employees
- **Archive completed payroll** - Keep historical records for audit
- **Test changes first** - Test payroll configuration changes before processing production payroll
- **Reconcile GL** - Verify GL posting accuracy after each payroll

## What's next

- **[Employee setup](employee-setup.md)** - How to add and configure employees
- **[Pay types overview](pay-types-overview.md)** - Understanding earnings and deductions
- **[Payment methods](payment-methods-overview.md)** - Configuring direct deposit and checks
- **[Payroll reports](payroll-reports.md)** - Analyzing payroll data
