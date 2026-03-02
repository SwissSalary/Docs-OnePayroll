---
title: Employee snapshots and historical tracking
description: Learn how OnePayroll's snapshot system tracks historical changes to employee records.
author: zeande
ms.topic: overview
ms.date: 02/23/2026
---

# Employee snapshots and historical tracking

OnePayroll's snapshot system captures point-in-time records of employee data, providing an audit trail of changes and ensuring payroll calculations use the correct data for each period.

## Snapshots overview

A **snapshot** is a stored copy of an employee's payroll-related data at a specific point in time. Snapshots record changes to fields such as pay group assignment, employee type, department, compensation details, and other payroll-relevant information.

**Why snapshots matter:**

- **Audit trail** — Prove what employee data was in effect at any given date
- **Payroll accuracy** — Payroll calculations can reference snapshot data for the correct period, rather than only using the current employee record
- **Historical analysis** — Track how employee data has changed over time
- **Compliance** — Support audits by documenting the history of payroll-relevant changes

## How snapshots work

OnePayroll tracks changes to employee records and related data. When payroll-relevant fields change, the system records the previous state so that it can be retrieved later.

### Snapshot application

The **Snapshot Manager** applies snapshots for a given key date. During payroll processing, snapshots are applied to ensure that calculations use employee data that was in effect for the period being processed, not the employee's current data.

For example, if an employee changed departments on January 15, a payroll run for January 1–15 would use the employee's previous department assignment, while a run for January 16–31 would use the new department.

### Pending snapshots

When employee data has changed but the snapshots haven't been applied yet, OnePayroll shows a notification about **pending snapshots**. This alerts users that unapplied changes exist that may affect payroll processing.

## Viewing snapshots

To view an employee's snapshot history:

1. Open the employee card.
2. Look for the **Snapshots** action or section.
3. View the list of snapshots for the employee, each with a date indicating when the change was recorded.

## Snapshot contents

Snapshots capture payroll-relevant employee data, including:

- Pay group assignment
- Employee type
- Department
- Work location
- Compensation-related fields
- Related record changes (such as benefit assignments or garnishment lines)

The snapshot system also tracks related records — when an employee's data is snapshotted, related records that affect payroll are captured as well.

## Payroll and snapshots

When payroll is calculated for a period:

1. The system determines the key date for the period (typically the period end date).
2. Snapshots are applied for that date to reconstruct the employee's data as it was at that point in time.
3. Payroll calculations use the snapshot data.
4. After processing, the snapshots are marked as applied.

This ensures that changes made to employee records after a payroll period has been processed don't retroactively affect already-completed payroll runs.

## Best practices

- **Review pending snapshots** — Before processing payroll, check for pending snapshot notifications and ensure changes are expected
- **Process payroll on schedule** — Regular payroll processing keeps snapshots applied and current
- **Use snapshots for audits** — When reviewing historical payroll data, refer to snapshots to understand what data was in effect

## See also

- [Employee overview](employee-overview.md)
- [Employee setup](employee-setup.md)

[!INCLUDE[footer-banner](../includes/footer-banner.md)]
