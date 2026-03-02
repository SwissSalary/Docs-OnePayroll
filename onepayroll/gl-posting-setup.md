---
title: Set up GL posting for payroll
description: Learn how to configure general ledger accounts and posting rules for payroll in OnePayroll.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 02/23/2026
---

# Set up GL posting for payroll

OnePayroll posts payroll transactions to the General Ledger based on pay type account assignments and the GL posting setting.

## Overview of GL posting in OnePayroll

When a payroll run is posted, the **General Ledger Posting** setting in Payroll Setup controls what happens:

- **No Transfer**: Payroll is marked as Posted, but no General Journal Lines are created. Use this if you handle GL posting separately.
- **Manual Posting**: General Journal Lines are created from payroll entries. You must manually post them in the General Journal.
- **Automatic Posting**: General Journal Lines are created from payroll entries and immediately posted to the General Ledger.
- **Always Ask**: You are prompted each time whether to post automatically or leave the journal for manual posting.

## Required configuration

### 1. Payroll Setup - General Ledger Posting setting

1. Search for **Payroll Setup**
2. In the **Posting** section, under **General Ledger**, set **General Ledger Posting** to the desired option
3. Set the **G/L Document No. Format** to define how document numbers are formatted on General Journal Lines (uses placeholders from the payroll run)
4. Set the **G/L Description Format** to define the description text on General Journal Lines

### 2. Pay Group - Journal Template and Batch

Each pay group must specify where General Journal Lines are created.

1. Open the pay group record
2. Set **Gen. Journal Template** to the journal template for payroll GL posting
3. Set **Gen. Journal Batch** to the journal batch within that template

> [!IMPORTANT]
> Both **Gen. Journal Template** and **Gen. Journal Batch** must be configured on the pay group. Without these, GL posting will fail with a required field error.

### 3. Pay Type - GL Account assignments

Each pay type must be mapped to GL accounts for posting.

1. Search for **Pay Types**
2. Open a pay type
3. On the **Posting** tab:
   - **Account No.** - The primary GL account for this pay type (posted as a debit)
   - **Balance Account No.** - The offsetting GL account (posted as a credit with the inverse amount)

**Typical mappings by category:**

| Pay type category | Account No. (debit) | Balance Account No. (credit) |
|---|---|---|
| Earnings (salary, wages) | Salary/wage expense account | Usually left blank |
| Deductions (tax, benefits) | Liability/payable account | Usually left blank |
| Employer contributions | Employer expense account | Usually left blank |

> [!NOTE]
> If **General Ledger Posting** is set to **No Transfer**, GL account assignments on pay types are not used. They only matter when payroll entries are transferred to the General Journal.

## How GL posting works

When you select **Post** on a payroll run, the following happens (assuming GL posting is enabled):

### Step 1: Buffer payroll entries

All payroll entries for the payroll run are collected. For each entry, the GL account (Account No.), balance account (Balance Account No.), entry date, amount, and dimension set are recorded into a posting buffer.

### Step 2: Create General Journal Lines

From the buffer, two General Journal Lines are created per entry:

- One line for the **Account No.** with the original amount (debit)
- One line for the **Balance Account No.** with the inverse amount (credit)

Lines where either account is blank are skipped.

### Step 3: Consolidate journal lines

Journal lines are consolidated by **GL account** and **dimension set**. Multiple entries posting to the same GL account with the same dimensions are combined into a single journal line with the summed amount. Zero-amount lines are removed.

**Example:**

```
Payroll Entries:
  Employee 001 Regular Pay:  $1,000 → Account 6100, Dimension Set 5
  Employee 002 Regular Pay:  $1,200 → Account 6100, Dimension Set 5
  Employee 001 FIT:          ($120) → Account 2100, Dimension Set 5
  Employee 002 FIT:          ($145) → Account 2100, Dimension Set 7

General Journal Lines created:
  Account 6100, Dim Set 5 (Debit):   $2,200  ← consolidated
  Account 2100, Dim Set 5 (Credit):  $120    ← Employee 001 only
  Account 2100, Dim Set 7 (Credit):  $145    ← Employee 002 (different dimensions)
```

> [!NOTE]
> Consolidation groups by **GL account AND dimension set**. Two entries for the same GL account but with different dimensions remain as separate journal lines.

### Step 4: Post (based on setting)

- **Manual Posting**: Journal lines are left in the General Journal for you to review and post manually.
- **Automatic Posting**: Journal lines are immediately posted via the standard BC **Gen. Jnl.-Post** codeunit.
- **Always Ask**: You're prompted to confirm whether to post automatically.

### Error handling

If unposted journal lines already exist in the pay group's configured journal batch, posting raises an error. The error includes a **Show Journal** action to navigate directly to the General Journal so you can resolve the existing lines (post or delete them) before retrying.

## Verifying GL postings

After posting, verify the general ledger was updated correctly:

1. In the **Payroll Runs** list, select the posted payroll run
2. Select **General Ledger Log** (in Reporting actions)
3. Review entries to confirm:
   - Amounts posted to correct GL accounts
   - Debits equal credits
   - Posting date and document number are correct

You can also check directly in the **General Ledger Entries** page by filtering on the payroll document number.

## Testing GL posting

Before processing production payroll:

1. Create a test payroll run with a small number of employees
2. Post the payroll run
3. Based on your GL Posting setting:
   - **Manual Posting**: Review General Journal Lines before posting
   - **Automatic Posting**: Review General Ledger Entries after posting
4. Verify:
   - Entries posted to correct GL accounts
   - Amounts are reasonable
   - Debits = Credits
5. Cancel the test payroll (if not yet posted) or reverse paychecks if posted
6. Adjust GL accounts or pay type mappings if needed

## Troubleshooting

### "GL Account not found" error

- Verify all pay types have GL accounts assigned
- Confirm GL accounts exist in Chart of Accounts
- Check that GL accounts are active and allow direct posting

### Unposted journal lines error

- The journal batch already has lines from a previous payroll
- Use the **Show Journal** action in the error message to open the General Journal
- Post or delete the existing lines, then retry

### GL postings don't balance

- Verify pay type GL accounts are correct (Account No. and Balance Account No.)
- Check for pay types without GL account assignments
- Review whether all expected pay types are included in the payroll

## Related information

- [Configure payroll settings](payroll-setup.md)
- [Process payroll runs](payroll-runs-process.md)
- [GL integration overview](gl-integration-overview.md)
- [Pay types setup](pay-types-setup.md)
