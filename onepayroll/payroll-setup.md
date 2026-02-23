---
title: Configure payroll settings
description: Learn how to configure the Payroll Setup page, assign GL accounts to pay types, and configure payroll processing rules.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Configure payroll settings

Before processing payroll, configure essential settings in Payroll Setup and assign GL accounts to pay types.

## Access Payroll Setup

1. Search for **Payroll Setup**
2. The setup page opens with various configuration options

## Configure General Ledger Posting

The **General Ledger Posting** setting controls how payroll entries are transferred and posted to the General Ledger.

**Available options:**

- **No Transfer**: Payroll entries are recorded in the payroll system but NOT transferred to the General Journal. No GL posting occurs. Use if you handle GL posting separately outside OnePayroll.
  
- **Manual Posting**: Payroll entries are converted to General Journal Lines when you post the payroll. You must manually complete the posting in the General Journal. Use if you need to review journal lines before posting to GL.
  
- **Automatic Posting**: Payroll entries are converted to General Journal Lines AND automatically posted to the General Ledger when you post the payroll. Fastest option for standard workflows.
  
- **Always Ask**: Each time you post a payroll, you are prompted to choose whether to automatically post the journal or leave it for manual posting.

**To configure:**

1. In Payroll Setup, select the **General Ledger Posting** field
2. Choose the appropriate option for your workflow

## Configure GL formatting for payroll

When payroll entries are posted to the GL, OnePayroll formats the document number and description automatically.

**GL Document Number Format:**
- Specifies the pattern for document numbers on General Journal Lines
- Uses placeholders like %1 to insert payroll run values
- Example: "PR-%1" creates "PR-001" for payroll "001"

**GL Description Format:**
- Specifies the description text on General Journal Lines
- Uses placeholders to insert payroll run information
- Example: "Payroll for %1" creates "Payroll for 2/28/2026"

**To configure:**

1. In Payroll Setup, set **G/L Document No. Format** to your desired pattern (e.g., "PR-%1")
2. Set **G/L Description Format** for journal line descriptions (e.g., "Payroll %1")

## Configure Pay Type GL accounts

Each pay type must be mapped to a GL account. When payroll entries are posted, transactions for each pay type are posted to its designated account.

**To set up GL accounts for pay types:**

1. Search for **Pay Types**
2. Open or create a pay type
3. On the **Posting** tab:
   - **Account No.** - Select the primary GL account for this pay type
   - **Balance Account No.** - Optionally select a balancing account (usually left blank for standard posting)

**Account assignment by category:**
- **Earnings** - Account No. typically posts to an expense account
- **Deductions** - Account No. typically posts to a liability account
- **Employer Contributions** - Account No. typically posts to an expense account

> [!IMPORTANT]
> All pay types must have GL accounts assigned. Note: This is only critical if **General Ledger Posting** is set to anything other than "No Transfer" in Payroll Setup.

## Set up approval requirements

To require approval before payroll can be paid or posted:

1. In Payroll Setup, enable **Require Approvals**
2. Go to **User Setup** and assign approval authority to specific users
3. Set these users as payroll approvers

With approval enabled:
- Payroll runs must be approved by an authorized user before posting
- Non-approvers see the payroll but cannot post it
- Create audit trail of who approved each payroll

## Configure other payroll settings

**Phone Format:**
- Specifies how phone numbers should be formatted in employee records
- Options vary by country localization
- Leave blank for no formatting

**Global Pay Unit:**
- Sets the default pay unit for employee compensation display
- Used for showing equivalents (e.g., how many hours equals one salary unit)
- Required for proper pay unit calculations

**Balancing Pay Type:**
- Specifies which pay type is used to balance negative payroll amounts
- If an employee's total payout is negative, this pay type offsets the imbalance
- The negative amount carries forward to next payroll
- Typically set to a base earnings type like "Regular Pay"

**Headline Days Ahead:**
- Controls employee event headlines on role centers
- Shows upcoming anniversaries, birthdays, hires, terminations
- Default: 30 days
- Adjust based on your notification needs

## Set up pay type GL account mapping

In addition to global GL accounts, some organizations need pay type-specific accounts:

1. Open desired **Pay Type**
2. Go to **Posting** tab
3. Select the GL account for this pay type

> [!TIP]
> Use consistent GL account numbering by expense/deduction type (e.g., 6000-6099 for salary, 2100-2199 for payables) to simplify reconciliation.

## Testing your setup

Before processing your first production payroll, validate all settings:

1. Create a test **Payroll Run** for a small group of employees
2. Review the pay types and GL accounts for accuracy
3. Calculate the payroll and review entries
4. Post the payroll to GL
5. Verify GL postings:
   - Check entries posted to correct accounts
   - Confirm debit/credit balance
   - Reconcile total pay to GL accounts
6. Adjust your Payroll Setup configuration if needed
7. Archive or void the test payroll
8. Process production payroll with confidence

## Troubleshooting setup

**"GL Account not found" error**
- Verify all pay types have GL accounts assigned
- Confirm GL accounts exist and are active in Chart of Accounts
- Check that GL accounts haven't been closed

**"Approval required" message**
- Check if Approve Approvals is enabled in Payroll Setup
- Verify your user is granted approval authority
- Ask your approver to approve the payroll

**GL postings not balanced**
- Verify GL account assignments for all pay types
- Total earnings should equal deductions + net pay
- Review the GL posting detail for errors

**Wrong GL accounts posting**
- Verify GL account mapping on each pay type
- Check global GL formatting settings
- Ensure GL accounts are still active

## Next steps

Now that setup is complete:

- **[Process payroll runs](payroll-runs-process.md)** - Create and calculate your first payroll
- **[Pay types overview](pay-types-overview.md)** - Understand earnings and deduction categories
- **[Pay types setup](pay-types-setup.md)** - Create custom pay types for your organization
