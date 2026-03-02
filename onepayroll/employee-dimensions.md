---
title: Employee dimensions
description: Learn how dimensions are assigned to employee payables and how they flow through to payroll entries and GL postings in OnePayroll.
author: zeande
ms.topic: concept
ms.date: 02/23/2026
---

# Employee dimensions

OnePayroll uses Business Central's dimension system to track payroll costs by cost center, project, department, or other analytical categories. Dimensions are assigned at the employee payable level and automatically flow through to payroll entries and general ledger postings.

## How dimensions work in payroll

Dimensions in OnePayroll are stored on **dimension lines** that are linked to employee payables. Each dimension line contains a dimension set (a combination of dimension values) along with a date range and a weight for proportional allocation.

During payroll calculation, OnePayroll reads the dimension lines for each payable and distributes the calculated amounts across the dimension sets proportionally based on the assigned weights.

## Dimension lines

Each employee payable can have one or more dimension lines. Dimension lines support:

- **Date-range-based dimensions** — dimensions that are effective only for a specific period, allowing you to change dimension values over time without modifying historical data
- **Weighted distribution** — multiple dimension lines with different quantities to split amounts proportionally across dimension sets

### Dimension line fields

| Field | Description |
|-------|-------------|
| **Dimension Set ID** | The set of dimension values assigned (uses Business Central's standard Dimension Set Entry system) |
| **Start Date** | The date from which this dimension assignment is effective |
| **End Date** | The date until which this dimension assignment is effective |
| **Quantity** | A weighting factor for proportional distribution |
| **Shortcut Dimensions 1-8** | Quick access to the dimension values in the set |

### Example: Splitting costs across departments

An employee who works 60% in Sales and 40% in Operations could have two dimension lines:

| Quantity | Department Dimension | Start Date | End Date |
|----------|---------------------|------------|----------|
| 60 | SALES | 01/01/2026 | (blank) |
| 40 | OPERATIONS | 01/01/2026 | (blank) |

During payroll calculation, 60% of the employee's payroll amount is posted with the SALES dimension value, and 40% with the OPERATIONS dimension value.

## Manage dimensions

### To assign dimensions to a payable

1. Open the **Employee Card**
2. Select **View Payables** or navigate to the payable in the Job & Compensation section
3. On the **Payables** page, select the payable line
4. Select **Dimensions** from the actions
5. On the **Dimensions** page, add dimension lines:
   - Select **Edit Dimension Set** to open the standard Business Central dimension set editor and choose dimension values
   - Set **Start Date** and **End Date** for period-specific dimensions
   - Set **Quantity** if splitting across multiple dimension sets
6. Close the page

### To review required dimensions

Some dimensions can be marked as **Required for Payroll** on the standard **Dimensions** setup page. When a dimension is required:

- Employees must have at least one dimension value assigned for that dimension
- The **Required Dimensions** FactBox on the Dimensions page shows which required dimensions are configured

### To set a dimension as required for payroll

1. Search for **Dimensions**
2. Select the dimension
3. Turn on **Required for Payroll**

## Dimensions on payroll entries

When payroll is calculated, dimension information flows from the payable's dimension lines to **Payroll Entry Dimensions**. Each payroll entry dimension records:

- The **dimension set** applied
- The **amount** allocated to that dimension set
- The **global dimension values** for quick filtering

If a payable has multiple dimension lines, the payroll entry amount is split proportionally, and separate payroll entry dimension records are created for each split.

## Dimensions on GL postings

When the payroll run is posted to the General Ledger, the dimension sets from payroll entry dimensions are carried over to the General Journal Lines. This means:

- GL entries are tagged with the correct dimension values
- You can analyze payroll costs by dimension in standard Business Central financial reports
- Cost center and project allocation is handled automatically

## Dimensions on manual payment journal lines

When creating manual payments, journal lines can also have dimensions assigned. If a journal line has its own dimension set, it takes precedence over the dimension lines from the employee's payables.

## Related information

- [Employee payables](employee-payables.md)
- [Set up employees](employee-setup.md)
- [Set up GL posting](gl-posting-setup.md)
- [About GL integration](gl-integration-overview.md)
