---
title: Process payroll runs
description: Learn how to create, review, and post payroll runs in OnePayroll.
author: zeande
ms.topic: how-to
ms.date: 02/23/2026
---

# Process payroll runs

This guide walks you through the payroll processing workflow: creating a payroll run, reviewing results, and posting to the general ledger.

## Payroll processing workflow overview

```
1. Create Payroll Run (calculation happens automatically)
   ↓
2. Review Payroll Entries
   ↓
3. (Optional) Approve (if approvals are required)
   ↓
4. Post to General Ledger
   ↓
5. Pay (generate payment files or print checks)
   ↓
6. Verify GL Postings
```

> [!NOTE]
> OnePayroll automatically calculates payroll during creation. There is no separate **Calculate** step. When you create a new payroll run, wages, deductions, taxes, and net pay are all computed immediately.

## Step 1: Create a payroll run

Creating a payroll run also calculates all pay for the selected employees.

**To create a new payroll run:**

1. Search for **Payroll Runs**
2. Select **New** to open the New Payroll request page
3. Set the required parameters:
   - **Pay Group** - Select the pay group to process (for example, "Biweekly Employees")
   - **Start Date** - The start date of the pay period
4. Select **OK** to create and calculate

**What happens automatically:**

- Period start and end dates are calculated from the pay cycle schedule
- Payment date is set based on your pay cycle configuration
- All active employees in the pay group are included
- Gross pay is calculated for each employee (salary, hourly, etc.)
- All earnings pay types are applied
- All deductions are applied (taxes, benefits, garnishments)
- Net pay is calculated (Gross - Deductions)
- GL accounts are assigned based on pay type configuration
- Status is set to **Open**

> [!IMPORTANT]
> The payroll run is fully calculated when creation completes. Review the results before proceeding.

## Step 2: Review payroll entries

Before posting, review calculated entries to ensure accuracy.

### View payroll entries

**To review entries:**

1. In the **Payroll Runs** list, select the payroll run
2. Select **Payroll Entries** from the navigation actions
3. Review entries:
   - **Pay Type** - All expected pay types present?
   - **Amount** - Calculations look reasonable?
   - **GL Account** - Posting to correct account?

### Preview paychecks

**To preview individual paychecks:**

1. In the **Payroll Runs** list, select the payroll run
2. Select **Paycheck** (in Paycheck Actions)
3. Review paycheck details for each employee:
   - Employee name and information
   - Gross pay amount
   - All deductions (taxes, benefits, etc.)
   - Net pay amount
4. Print or save as PDF

### View payroll register

**To view the overall payroll register:**

1. In the **Payroll Runs** list, select the payroll run
2. Select **Payroll Register** (in Reporting actions)
3. Review the summary report

## Step 3: Approve (if required)

If **Require Approvals** is enabled in Payroll Setup, an authorized user must approve the payroll before it can be posted or paid.

**To approve a payroll run:**

1. Open the payroll run (Status = **Open**)
2. Select **Approve**
3. Confirm the approval
4. Status changes to **Approved**

> [!NOTE]
> The **Approve** action is only visible when approvals are required in Payroll Setup. If approvals aren't required, you can post and pay directly from the **Open** status. Approval checks the user's payroll approval limit in **User Setup**—if the payroll total exceeds the user's limit, approval is denied.

## Step 4: Post to general ledger

Posting transfers payroll entries to the general journal and optionally posts them to the general ledger automatically.

**To post a payroll run:**

1. Open the payroll run
2. Select **Post**
3. Confirm the posting action
4. Wait for posting to complete
5. Status changes to **Posted**

**What happens during posting:**

The posting behavior depends on the **General Ledger Posting** setting in Payroll Setup:

- **No Transfer**: Payroll is marked as Posted in the payroll system, but no General Journal Lines are created. No GL posting occurs.
- **Manual Posting**: Payroll entries are transferred to General Journal Lines in the journal template and batch configured on the pay group. You must manually post these journal lines in the General Journal.
- **Automatic Posting**: Payroll entries are transferred to General Journal Lines and immediately posted to the General Ledger.
- **Always Ask**: You are prompted each time whether to post the journal automatically or leave it for manual posting.

**How GL entries are created:**

1. Payroll entries are collected and buffered with their GL accounts and dimensions
2. For each entry, two General Journal Lines are created—one for the Account No. (debit) and one for the Balance Account No. (credit)
3. Journal lines are then consolidated: entries with the same GL account and dimension set are combined into a single line
4. Zero-amount lines are removed
5. The journal template and batch are taken from the pay group configuration

> [!IMPORTANT]
> The pay group must have **Gen. Journal Template** and **Gen. Journal Batch** configured for GL posting to work. If existing unposted journal lines are found in the batch, an error is raised with an option to view the journal.

## Step 5: Pay (generate payment files or print checks)

After posting (or after approval, if posting is not needed), generate payment files or print checks.

**To create payments:**

1. In the **Payroll Runs** list, select the payroll run
2. Select **Pay**
3. In the **Create Payroll Payments** request page, select the **Payment Type**:
   - **Electronic Payment** - Generates a payment file for direct deposit
   - **Computer Check** - Prints checks for check-payment employees
4. Select **OK**

See [Direct deposit setup](direct-deposit-setup.md) and [Check printing](check-printing.md) for detailed payment workflows.

> [!NOTE]
> The **Pay** action is available when the payroll run is Approved or Posted (or Open when approvals aren't required). You can generate payment files before or after posting to the GL.

## Step 6: Verify GL postings

After posting, verify the general ledger was updated correctly.

**To review GL postings for a payroll run:**

1. In the **Payroll Runs** list, select the posted payroll run
2. Select **General Ledger Log** (in Reporting actions)
3. Review entries by GL account

**To verify GL accounts directly:**

1. Search for **Chart of Accounts** or **General Ledger Entries**
2. Filter by the payroll posting date and document number
3. Verify:
   - Correct amounts posted
   - Posted to correct period
   - Debits = Credits (balance)

### Reconciliation check

Ensure payroll GL postings reconcile:

```
Gross Payroll Expense Accounts (Debits)
    + Employer Taxes & Benefits (Debits)
    = 
Employee & Employer Payables (Credits)
    + Net Employee Pay Due (Credit)
```

## Additional actions

### Save paychecks to employee dossiers

To create PDF copies of paychecks for employee records:

1. In the **Payroll Runs** list, select the payroll run
2. Select **Save in Dossier** (in Paycheck Actions)
3. Paychecks are saved as PDFs to each employee's dossier

### Cancel a payroll run

If a payroll run has errors and needs to be redone:

1. Select the payroll run (must not be **Posted**)
2. Select **Cancel**
3. Confirm the cancellation

> [!WARNING]
> Canceling permanently deletes the payroll run and all its entries, including payroll headers, benefit assignment entries, and document attachments. This action cannot be undone. To correct a payroll, cancel it and create a new one with the correct parameters.

### Reverse a posted paycheck

If an error is discovered after posting:

1. In **Payroll Runs**, select the posted payroll run
2. Select **Reverse Paycheck**
3. Follow the reversal report to create offsetting entries
4. If needed, create a new corrected payroll run

To cancel a pending reversal, use the **Cancel Reversal** action.

## Payroll run statuses

| Status | Description |
|--------|-------------|
| **Open** | Payroll has been created and calculated. Can be posted (if no approvals required), paid, or canceled. |
| **Approved** | Payroll has been approved. Can be posted, paid, or canceled. |
| **Posted** | Payroll has been posted to the GL. Can still generate payments. Cannot be canceled—use Reverse Paycheck instead. |

## Troubleshooting

### Employee missing from payroll

- Verify employee is assigned to the correct pay group
- Check employee status (active vs. inactive)
- Confirm employee record has required data

### "GL Account not found" error

- Verify all pay types have GL accounts assigned
- Confirm GL accounts exist and are active in Chart of Accounts
- Check that GL accounts haven't been closed

### Unposted journal lines error

- The General Journal batch already has unposted lines from a previous payroll
- Open the General Journal (use the action link in the error message)
- Post or delete the existing lines before posting the new payroll

### "No payment entries to export" error

- Verify payment entries exist for the payroll run (check **Payment Entries** in Navigation)
- Check that payment methods are correctly assigned to employees
- Ensure employees have valid bank accounts for direct deposit

## Best practices

- **Always review before posting** - Check paycheck details using the **Paycheck** action
- **Document corrections** - Note why payroll runs were canceled and recreated
- **Process on schedule** - Consistent timing prevents missed employees
- **Archive paychecks** - Use **Save in Dossier** to keep PDF records
- **Reconcile GL** - Use the **General Ledger Log** to verify posting accuracy after each payroll

## Related information

- [Configure payroll settings](payroll-setup.md)
- [Pay types overview](pay-types-overview.md)
- [Payment methods overview](payment-methods-overview.md)
- [Set up direct deposit](direct-deposit-setup.md)
- [Check printing and management](check-printing.md)
