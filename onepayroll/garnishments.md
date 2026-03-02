---
title: Garnishments
description: Learn how to set up and manage wage garnishments in OnePayroll, including garnishment types, calculation methods, and protected amounts.
author: zeande
sws.service: onepayroll
sws.topic: how-to
sws.date: 02/23/2026
---

# Garnishments

A garnishment is a legal order requiring an employer to withhold a portion of an employee's wages and remit them to a third party. OnePayroll tracks garnishments through two related records: **garnishment types** that define shared rules, and **garnishment lines** on each employee that specify the individual order details.

## Garnishment types

Before you can assign garnishments to employees, you must set up garnishment types. Each type defines the rules that apply to all garnishments of that kind.

**To set up a garnishment type:**

1. Search for **Garnishment Types** and open the page.
2. Select **New** to create a new type.
3. Fill in the fields:

| Field | Description |
|---|---|
| **Code** | A unique code to identify the garnishment type (up to 20 characters). |
| **Description** | A description of the garnishment type. |
| **Pay Type No.** | The pay type used for the garnishment deduction. Only pay types with category **Employee Deductions** are available. |
| **Protected Amount Type** | Determines how employee pay is protected from garnishment. Options: blank (no protection), **Disposable Pay Percentage**, **Exempt Amount**, or **Maximum of Both**. |
| **Process Together** | When turned on, all garnishments of this type are processed together rather than individually during payroll calculation. |
| **Allocation Method** | When multiple garnishments of this type exist and disposable income doesn't cover all, this determines how the available amount is split. Options: **Prorated** (divided proportionally) or **Equal Shares** (divided equally). |
| **Benefit** | Links the garnishment type to a benefit where the benefit's calculation method is set to Garnishments. |

> [!TIP]
> Garnishment types are user-defined. You create codes that match your organization's needs, such as `CHILDSUP` for child support orders, `TAXLEVY` for tax levies, or `CREDITOR` for creditor judgments.

## Employee garnishment lines

Each employee's individual garnishment orders are recorded as garnishment lines.

**To add a garnishment to an employee:**

1. Open the **Employee Card**.
2. In the **Wage Garnishments** part on the employee card, select a line to edit or add a new entry.

Alternatively, search for **Wage Garnishments** to work with garnishments across employees.

### Garnishment line fields

| Field | Description |
|---|---|
| **Employee No.** | The employee this garnishment applies to. |
| **Garnishment Type** | The garnishment type code, which determines the pay type, protected amount rules, and allocation method. |
| **Description** | A description for this specific garnishment order. |
| **Processing Order** | An integer from 1 to 99 that determines the order in which this garnishment is calculated during payroll. Lower numbers are processed first. |
| **Start Date** | The date when the garnishment becomes active. |
| **End Date** | The date when the garnishment ends. Leave blank if no end date is known. |
| **Agency No.** | The vendor (collection agency, court, or government agency) to whom garnishment payments are remitted. Links to the Vendor table. |
| **Remittance ID** | A reference identifier for the garnishment order (up to 30 characters), such as a case number or court order reference. |
| **Calculation Method** | How the garnishment amount is calculated: **Percentage** (percentage of earnings) or **Fixed Amount** (a set dollar amount per pay period). |
| **Amount** | The garnishment amount. Represents a percentage (0-100) when the Calculation Method is Percentage, or a dollar amount when set to Fixed Amount. |
| **Disposable Pay Percentage** | The percentage (0-100%) of disposable pay that can be garnished. Used when the garnishment type's Protected Amount Type is **Disposable Pay Percentage** or **Maximum of Both**. |
| **Exempt Amount** | The dollar amount of pay that is exempt from garnishment (protected). Used when the Protected Amount Type is **Exempt Amount** or **Maximum of Both**. |
| **Lifetime Limit** | The maximum total amount that can be garnished over the life of the order. Once this amount is reached, the garnishment stops. |
| **Lifetime Limit Constraint** | Controls whether the lifetime limit is required. Default is **Required**. |
| **Employee Notified** | Indicates whether the employee has been notified about this garnishment. This field is not editable manually. |

### Calculated fields

| Field | Description |
|---|---|
| **Pay Type No.** | Inherited from the garnishment type. Shows which pay type is used for the deduction. |
| **Lifetime Amount Garnished** | A running total of all amounts garnished under this order, calculated from posted payroll entries. |
| **Protected Amount Type** | Inherited from the garnishment type. Shows the protection method applied. |
| **Active** | Indicates whether the garnishment is currently active based on dates and limits. |
| **Benefit** | Inherited from the garnishment type. |

## Processing order

When an employee has multiple garnishments, the **Processing Order** field (1-99) determines the sequence. Garnishments with a lower number are calculated first. If disposable income is insufficient to cover all garnishments, earlier-processed garnishments take priority.

## Protected amounts

OnePayroll protects a portion of employee pay from garnishment based on the **Protected Amount Type** set on the garnishment type:

| Protection type | How it works |
|---|---|
| *(blank)* | No protection applied. The full garnishment amount is withheld. |
| **Disposable Pay Percentage** | A percentage of disposable pay is protected. The **Disposable Pay Percentage** field on the garnishment line specifies how much *can* be garnished. |
| **Exempt Amount** | A fixed dollar amount is exempt from garnishment, as specified in the **Exempt Amount** field on the garnishment line. |
| **Maximum of Both** | Both the disposable pay percentage and exempt amount are calculated, and the method that protects the *most* employee pay is used. |

## Allocation methods

When an employee has multiple garnishments of the same type and the **Process Together** option is enabled on the garnishment type, the **Allocation Method** determines how the available garnishment amount is divided:

- **Prorated** &mdash; The available amount is split proportionally based on each garnishment's calculated amount.
- **Equal Shares** &mdash; The available amount is split equally among all garnishments of the same type.

## Managing garnishments

### Modifying a garnishment

Open the employee's garnishment line and update the fields as needed. Changes take effect in the next payroll run.

### Ending a garnishment

Set the **End Date** on the garnishment line to the date the order expires. OnePayroll stops calculating the garnishment after this date. Keep the garnishment record for historical reference.

### Tracking garnishment totals

The **Lifetime Amount Garnished** field shows the running total of all garnished amounts from posted payroll entries. Compare this to the **Lifetime Limit** to track progress toward the order's total obligation.

## Remitting garnishment payments

Garnishment withholdings post to the GL account configured on the garnishment's pay type. The **Agency No.** field on each garnishment line identifies the vendor to whom payments should be remitted. Use Business Central's standard vendor payment processes to remit accumulated garnishment amounts to the appropriate agencies.

## Best practices

- Set up garnishment types first, then assign to employees. Types centralize rules like protection methods and allocation.
- Use meaningful **Processing Order** values with spacing (for example, 10, 20, 30) so you can insert new garnishments between existing ones.
- Always set an **Agency No.** to track which vendor receives the garnishment payment.
- Record the court order reference in the **Remittance ID** field for audit and compliance.
- Monitor **Lifetime Amount Garnished** against **Lifetime Limit** to ensure garnishments stop when the order is satisfied.
- Consult legal counsel for garnishment priority rules, which vary by jurisdiction and garnishment type.

## Related information

- [Employee setup](employee-setup.md)
- [Process payroll runs](payroll-runs-process.md)
- [Pay types overview](pay-types-overview.md)

[!INCLUDE[footer-banner](../includes/footer-banner.md)]
