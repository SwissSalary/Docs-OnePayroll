---
title: Work with employee snapshots
description: Learn how to schedule future employee changes with snapshots and how OnePayroll applies them during payroll.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 09/14/2026
---

# Work with employee snapshots

Use **snapshots** to enter employee changes before they take effect. For example, an employee tells you their federal filing status changes on January 1, or they move to a new address next month. You record the change with a **Valid From** date. OnePayroll can apply approved changes through a scheduled task, when you apply pending snapshots, or when payroll processes the employee for a period that includes the date.

Snapshots also keep a clear record of scheduled and applied changes, so you can review what was entered and when it took effect.

## When to use snapshots

Use snapshots when a change should not update the live employee record immediately:

| Scenario | Example |
|----------|---------|
| Future personal data | New home address effective on the first of next month |
| Future tax settings | Federal filing status change starting January 1 |
| Future compensation or org data | Pay group, department, or work location change on a known effective date |
| Future payment setup | New direct deposit method starting on a hire anniversary |

> [!TIP]
> For changes that should take effect immediately, edit the employee card as usual. Use **Edit Snapshot** when you need a future **Valid From** date.

## What a snapshot stores

A snapshot is a set of field values for an employee-related record, tied to a **Valid From** date. OnePayroll stores only the fields that change in a **Partial** snapshot. It creates **Full** snapshots of supported fields for historical views during processes such as payroll. System fields and some internal modification fields aren't included.

### Related employee data

Snapshots center on the **Employee** record and these related tables. From the employee card, most of this data looks like part of the employee; the system still tracks each table separately behind the scenes:

| Area | What it covers |
|------|----------------|
| **Employee** | Core employee fields on the employee card |
| **Payable** | Payroll compensation lines merged onto the employee experience |
| **Employee Withholding** | Tax withholding settings |
| **Employee Payment Method** | Direct deposit and pay allocation |
| **Alternative Address** | Alternative employee addresses |

When you edit a snapshot for an employee, OnePayroll includes these related records so one effective date can cover the full employee picture.

### Snapshot types

| Type | Description |
|------|-------------|
| **Partial** | Only the fields you changed. Typical result of **Edit Snapshot**. |
| **Full** | All eligible fields captured for a historical view, such as the employee state used during payroll. |
| **Creation** | Schedules creation of a related record as of the **Valid From** date. |
| **Deletion** | Schedules removal of a record as of the **Valid From** date. |

Each snapshot shows **Is Applied**. For Partial, Creation, and Deletion snapshots, this means that OnePayroll applied the change to the live record. A Full snapshot is historical and receives an application record when OnePayroll captures it; its values aren't written back to the live record. The **Snapshot Application** FactBox shows who recorded the application and when.

## Create a future change

**To schedule a change with a snapshot:**

1. Open the employee card or the **Employees** list.
1. Choose **Changes** > **Snapshots** > **Edit Snapshot**.
1. Enter the date to view in **Snapshot Date** and the first date the change should be in effect in **Valid From**, and then choose **OK**.
1. OnePayroll opens the employee card as of the snapshot date. Make the needed changes, such as address, withholding, payment method, or payable fields.
1. Choose **OK**. OnePayroll saves Partial snapshots for modified records, Creation snapshots for new related records, and Deletion snapshots for removed records. The live records aren't updated by the edit session.

While you edit a snapshot, changes stay in memory until you choose **OK**. Canceling the page discards the edit.

> [!NOTE]
> You can open **Edit Snapshot** again for the same **Valid From** date to adjust a pending snapshot that is not yet applied.

## View snapshots

**To review snapshots for an employee:**

1. Open the employee card or the **Employees** list.
1. Choose **Changes** > **Snapshots** > **View Snapshots**.
1. The **Snapshots** page lists snapshots for the employee and related records, newest **Valid From** first.

On the **Snapshots** page you can:

- Open a snapshot to see the source record, type, **Valid From** date, and whether it is applied
- Review **Snapshot Lines** for field-level values. For an unapplied change with a current value, the page shows the current value and the requested value.
- Use **View record** to open the source record as of the snapshot date. An unapplied Partial or Creation snapshot can be editable in this view.
- Check the **Snapshot Application** factbox for applied snapshots

You can also open **Snapshots** from Tell Me to browse across employees.

## Pending snapshots

A snapshot is counted as **pending** when it isn't applied and its **Valid From** date is on or before the work date. The count can include self-service change requests that still await approval; only approved snapshots can be applied.

When you open an employee card that has pending snapshots, OnePayroll shows a notification:

- **Apply the snapshots** — Writes pending changes to the live records up to the work date
- **View the snapshots** — Opens the filtered snapshot list

On the **Employees** list, the **Pending Snapshots** field shows how many pending snapshots exist for each employee up to the work date. Drill down on the field to open those snapshots.

You can also choose **Changes** > **Snapshots** > **Apply Pending Snapshots** on the employee card or list.

## How snapshots are applied

OnePayroll applies approved, unapplied snapshots in **Valid From** order up to a key date:

1. **Scheduled task** — When the environment can create background tasks, OnePayroll schedules approved snapshots for their **Valid From** date. An overdue approved snapshot is scheduled to run as soon as possible.
1. **During payroll** — When payroll is calculated for an employee, OnePayroll applies approved snapshots through the payroll period end date before calculation continues. The run uses the employee data that should be in effect for the period.
1. **Manually** — Use **Apply Pending Snapshots** or the pending-snapshot notification to apply approved snapshots through the work date.

After OnePayroll applies a Partial, Creation, or Deletion snapshot, the live employee or related record reflects the change and **Is Applied** is turned on.

> [!IMPORTANT]
> A future snapshot stays unapplied until an application path reaches its **Valid From** date. Review scheduled changes before payroll instead of relying on background-task timing alone.

## Manage self-service employee change requests

Changes submitted through the Self-Service Portal also use snapshots. Change-request policies determine whether a table or field is **Blocked**, **Allowed**, or **With Approval**. A field policy overrides its table's default policy.

The default policies require approval for changes to **Employee** and **Employee Payment Method** records and allow changes to **Alternative Address** records without approval. Administrators can change these defaults.

### Set change-request policies

1. Choose the ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Change Request Policies**, and then choose the related link.
1. Select a **Table**.
1. Leave **Field** blank to set the table's default policy, or select a field to override the default.
1. In **Policy**, select **Blocked**, **Allowed**, or **With Approval**.

### Review change requests

1. Choose the ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Employee Change Requests**, and then choose the related link.
1. Review the source, **Effective Date**, requested date, overdue status, and changed fields.
1. Choose **Approve** to approve the selected requests, or choose **Reject** and enter a reason.

Self-service effective dates must be on or after the work date. A request that requires approval remains open until an administrator approves or rejects it. An allowed request is approved automatically. When a requester cancels an open request, OnePayroll deletes it; canceling a reviewed, unapplied request changes its status to **Canceled**.

> [!NOTE]
> Snapshots provide scheduled changes and historical views, but they don't provide a restore action. Use **Payroll History** > **View snapshot** to inspect the employee data used for a historical payroll.

## Example

An employee will change federal filing status on January 1 and moves to a new address on February 15.

1. In December, you choose **Edit Snapshot**, set **Valid From** to January 1, and update withholding.
1. You choose **Edit Snapshot** again, set **Valid From** to February 15, and update the address.
1. The live employee card still shows the current filing status and address.
1. When you run the first payroll of the year (period ending on or after January 1), the withholding snapshot is applied and used in calculation.
1. The address snapshot remains unapplied until an application path reaches February 15. For example, a scheduled task can apply it on that date, or a later payroll can apply it through the payroll period end.

## Best practices

- **Prefer snapshots for known future dates** — Enter the change when you learn about it, with the correct **Valid From** date
- **Use the work date intentionally** — Pending counts and manual apply use the work date; set it correctly before reviewing or applying
- **Review pending snapshots before payroll** — Confirm expected changes on the employee list or card notification
- **Edit once per effective date** — Group related field changes that share the same **Valid From** into one **Edit Snapshot** session
- **Do not rely on direct live edits for future events** — Changing the live card updates data immediately and does not schedule a future effective date

## See also

- [Employees in payroll overview](employee-overview.md)
- [Set up employees](employee-setup.md)
- [Employee payables](employee-payables.md)
- [Employee bank account information](employee-bank-accounts.md)
