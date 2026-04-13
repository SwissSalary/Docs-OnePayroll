---
title: Permissions and security
description: Learn about the permission sets available in OnePayroll and how to assign them to control access to payroll data.
author: zeande
sws.service: onepayroll
sws.topic: concept
sws.date: 02/23/2026
---

# Permissions and security

OnePayroll includes permission sets that control access to payroll tables, pages, and reports. Assign these permission sets to users based on their role to ensure appropriate access to sensitive payroll data.

## Permission sets

OnePayroll provides three assignable permission sets with increasing levels of access:

| Permission set | Caption | Description |
|----------------|---------|-------------|
| **Payroll Read** | Payroll - Read | Read-only access to all payroll data. Users can view payroll runs, employee payroll information, pay types, and reports but cannot make changes. |
| **Payroll Edit** | Payroll - Edit | Read, create, modify, and delete access for employee-level payroll data. Includes everything in Payroll Read plus the ability to create payroll runs, modify employee records, manage payables, and process payments. |
| **Payroll Admin** | Payroll - Admin | Full access for payroll administrators. Includes everything in Payroll Edit plus the ability to configure pay types, pay cycles, pay groups, benefit types, garnishment types, document types, validation rules, and other setup data. |

### Permission set hierarchy

Each permission set includes the one below it:

```
Payroll Admin
  └── includes Payroll Edit
        └── includes Payroll Read
```

This means assigning **Payroll Admin** to a user gives them read, edit, and admin access automatically.

## What each permission set covers

### Payroll Read

Grants **read** access to:

- Payroll runs, payroll headers, and payroll entries
- Employee payroll data (payables, payment methods, dimensions, documents)
- Pay types, pay groups, pay cycles, and benefit types
- Garnishment types and lines
- Department and work location data
- Snapshots and payroll history
- All payroll reports

Typical users: executives, auditors, and managers who need to review payroll data without making changes.

### Payroll Edit

Adds **insert, modify, and delete** access to:

- Payroll runs, payroll headers, and payroll entries
- Employee payables and dimension lines
- Employee documents
- Employee payment methods
- Garnishment lines
- Payment entries
- Snapshots and time sheet lines
- Employee records

Typical users: payroll processors who run payroll, manage employee data, and process payments.

### Payroll Admin

Adds **insert, modify, and delete** access to:

- Pay types and pay type configuration
- Pay cycles, pay cycle schedule lines, and pay groups
- Benefit types and benefit configuration
- Garnishment types
- Document types
- Employee types
- Department and work location setup
- Payroll setup and self-service setup
- Validation rules and rules configuration
- Pay units

Typical users: payroll managers and administrators who configure the system and define payroll policies.

## Assign permission sets to users

### To assign a permission set

1. Choose the ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Users**, and then choose the related link.
2. Select the user to configure
3. In the **User Permission Sets** section, choose the **New** action
4. In the **Permission Set** field, choose one of the OnePayroll permission sets (for example, **Payroll Edit**). Choose **OK**.

> [!TIP]
> Users also need standard Business Central permission sets for general functionality. For example, a payroll processor typically needs both **Payroll Edit** and a standard BC permission set like **D365 BASIC** or equivalent.

## Approval limits

In addition to permission sets, you can control payroll approval authority per user. On the **Approval User Setup** page, OnePayroll adds two fields:

| Field | Description |
|-------|-------------|
| **Payroll Approval Limit** | The maximum payroll amount (total earnings plus employer contributions) that this user can approve. Set to 0 if unlimited approval is turned on. |
| **Unlimited Payroll Approval** | When turned on, the user can approve any payroll regardless of the total amount. Clears the approval limit to 0. |

These fields are only relevant when **Require Approvals** is turned on in **Payroll Setup**.

### To set approval limits

1. Choose the ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Approval User Setup**, and then choose the related link.
2. Find the user
3. Set the **Payroll Approval Limit** or turn on **Unlimited Payroll Approval**

## Related information

- [Configure payroll settings](payroll-setup.md)
- [Process payroll runs](payroll-runs-process.md)
