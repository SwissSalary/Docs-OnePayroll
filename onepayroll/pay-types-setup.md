---
title: Set up pay types
description: Learn how to create pay type categories, define individual pay types, and configure their calculation methods and GL posting.
author: zeande
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Set up pay types

Pay types are configured in two steps: first create categories to organize them, then create individual pay types within those categories.

## Create pay type categories

Categories group related pay types for easier management and calculation control.

**To create a pay type category:**

1. Search for **Pay Type Categories**
2. Select **New**
3. Enter category details:
   - **Code** - Unique identifier (e.g., "EARNINGS", "TAXES", "BENEFITS")
   - **Description** - Clear name (e.g., "Regular Earnings", "Taxes & Withholdings", "Benefits & Deductions")
4. Configure:
   - **Calculation Order** - When this category is processed (1 = first, 2 = second, etc.)
   - **Include in Gross Pay** - Yes/No (determines if category amounts are included in gross)
   - **Include in Taxable Earnings** - Yes/No (for tax calculation)
5. Save

### Category ordering

Categories are calculated in order. Set calculation order to control processing:

**Typical order:**
1. **Regular Earnings** - Base compensation (order = 1)
2. **Overtime** - Extra pay (order = 2)
3. **Bonuses** - One-time awards (order = 3)
4. **Taxes** - Withholdings based on gross (order = 4)
5. **Benefits** - Insurance deductions (order = 5)
6. **Garnishments** - Court-ordered (order = 6)

### Including in gross and taxable

- **Include in Gross Pay** - Used for calculating total compensation, net pay, and bonuses
- **Include in Taxable Earnings** - Used for determining tax withholding amount

Typically:
- Earnings categories: Yes/Yes (included in both gross and taxable)
- Deduction categories: No/No (excluded from both)

## Create individual pay types

After setting up categories, create the specific pay types used in your payroll.

**To create a pay type:**

1. Search for **Pay Types**
2. Select **New**
3. In the **General** tab:
   - **Code** - Unique identifier (e.g., "REG" for regular pay, "OT150" for overtime, "FIT" for federal income tax)
   - **Description** - Full name (e.g., "Regular Pay", "Overtime 1.5x", "Federal Income Tax")
   - **Category** - Select the category created above
4. In the **Calculation** tab:
   - **Calculation Method** - How the amount is determined (Fixed Amount, Percentage, Hourly Rate, etc.)
   - **GL Account** - Where this pay type posts
   - **Display Type** - Detail, Heading, Hidden, or Hypothetical
5. Save

### Detailed configuration by pay type

Here's how to configure common pay types:

#### Regular pay (for salaried employees)

| Field | Value |
|-------|-------|
| Code | REG |
| Description | Regular Pay |
| Category | Regular Earnings |
| Calculation Method | Annual Salary |
| GL Account | 6000 (Salary Expense) |
| Display Type | Detail |

**Formula behavior:** Annual Salary ÷ Number of Pay Periods = Pay Per Period

#### Overtime pay (1.5x)

| Field | Value |
|-------|-------|
| Code | OT150 |
| Description | Overtime 1.5x |
| Category | Overtime |
| Calculation Method | Formula |
| Formula | Hours over 40 in week × Regular Hourly Rate × 1.5 |
| GL Account | 6010 (Overtime Expense) |
| Display Type | Detail |

#### Federal income tax

| Field | Value |
|-------|-------|
| Code | FIT |
| Description | Federal Income Tax |
| Category | Taxes & Withholdings |
| Calculation Method | Tax Withholding (uses tax tables) |
| GL Account | 2100 (Federal Income Tax Payable) |
| Display Type | Detail |
| Credit (Liability) | Yes |

#### Health insurance deduction

| Field | Value |
|-------|-------|
| Code | HINS |
| Description | Health Insurance Premium |
| Category | Benefits & Deductions |
| Calculation Method | Fixed Amount or Percentage |
| GL Account | 2110 (Health Insurance Payable) |
| Display Type | Detail |
| Credit (Liability) | Yes |

#### Shift premium

| Field | Value |
|-------|-------|
| Code | SHIFT |
| Description | Night Shift Premium |
| Category | Shift & Premium |
| Calculation Method | Hourly Rate |
| Rate | $2.50/hour |
| GL Account | 6015 (Shift Premium Expense) |
| Display Type | Detail |
| Conditional | Yes - Only if shift code = "Night" |

### Configuration details

#### GL Account

Select the general ledger account where this pay type should post:
- **Earnings** typically post to **Expense accounts** (e.g., 6000 Salary Expense)
- **Deductions** typically post to **Liability accounts** (e.g., 2100 Federal Tax Payable)
- **Benefits** post to **Liability accounts** (e.g., 2110 Insurance Payable)

#### Display Type

Controls how the pay type appears:
- **Detail** - Show individual amount on pay stub and reports
- **Heading** - Show only category total (used for grouping)
- **Hidden** - Don't display (used for intermediate calculations)
- **Hypothetical** - Calculated but not actually paid (for projections)

#### Calculation Method

Different calculation methods available:

**Fixed Amount**
- Same amount every period
- Configure: Dollar amount
- Use for: Allowances, fixed contributions

**Percentage**
- Percentage of another pay type
- Configure: Percentage, base pay type
- Use for: Bonuses (e.g., 10% of gross), taxes (e.g., 6.2% of salary)

**Hourly Rate**
- Hours worked × hourly rate
- Configure: Hourly rate
- Use for: Hourly wages, overtime

**Annual Salary**
- Annual salary ÷ number of pay periods
- Configure: Annual salary amount
- Use for: Salaried employees

**Formula**
- Custom calculation using formulas and conditions
- Configure: Formula expression
- Use for: Complex calculations, conditional logic

**Tax Withholding**
- Calculated using tax tables and employee tax data
- Configure: Tax calculation provider, jurisdiction
- Use for: All tax pay types

**Manual Entry**
- Amount manually entered for each employee
- Use for: Variable or irregular pay (bonuses, adjustments)

### Conditional pay types

Some pay types should only be calculated under certain conditions.

**To make a pay type conditional:**

1. Create the pay type as normal
2. In the **Conditions** tab:
   - Select **Enable Conditions**
   - Add condition rules (If employee shift = "Night", if hours > 40, etc.)
3. Save

When calculating payroll, OnePayroll evaluates conditions and includes/excludes the pay type based on employee data.

### Pay type deduction logic

For deduction pay types (taxes, benefits, garnishments):

1. In the **Deduction** tab:
   - **Deduction Type** - Income tax, Social security, Benefits, Garnishment, Other
   - **Priority** - Order applied if multiple deductions compete for limited funds
   - **Protected Amount** - Minimum pay that cannot be deducted (dollar amount or percentage)
2. Save

**Priority** is important for garnishments—higher priority garnishments are applied first before lower priority ones.

## Managing pay types

### Editing pay types

You can edit:
- Description
- GL account (if no payroll has been processed)
- Calculation parameters
- Category assignment

You should NOT edit:
- Code (would break historical ties)
- Calculation method (changes would affect history)

If you must change calculation method, create a new pay type instead.

### Activating/deactivating pay types

To stop using a pay type:
1. Open the pay type
2. Select **Inactive** to deactivate
3. Save

Inactive pay types:
- Don't appear on new payroll processing
- Aren't auto-calculated
- Can still be viewed in historical payroll

### Viewing pay type details

**To see all pay types in a category:**
1. Open the category
2. Select **Pay Types**
3. View the list of pay types in that category

**To see pay type usage:**
1. Open the pay type
2. Select **Payroll Entries**
3. View all times this pay type was used

## Testing pay types

Before processing production payroll with new pay types:

1. Create a **Test Payroll Run** with a few employees
2. Include the new pay type in the test
3. Review calculations:
   - Amount calculated correctly?
   - Posted to correct GL account?
   - Appears correctly on pay stub?
4. Make adjustments if needed
5. Process production payroll with confidence

## Troubleshooting

### "GL Account not found" error
Ensure:
- GL account exists and is active
- GL account hasn't been closed
- GL account type matches (expense for earnings, liability for deductions)

### Calculation not working
- Verify calculation method is appropriate
- For formula-based: check formula syntax
- For conditional: verify conditions are configured
- Test with a specific employee to isolate issue

### Wrong amounts calculated
- Verify employee record has required data (annual salary, hourly rate)
- Check that calculation parameters are set correctly
- Review GL account mapping

### Pay type not appearing on payroll
- Verify pay type isn't marked inactive
- Check category hasn't been deactivated
- Verify employee is included in payroll run

## Best practices

- **Use consistent naming** - Make pay type codes and descriptions clear
- **Organize with categories** - Group related pay types logically
- **Assign GL accounts uniquely** - Each pay type to specific GL account
- **Test before production** - Always test new pay types with test payroll first
- **Document custom formulas** - Add notes explaining complex calculations
- **Review tax classification** - Ensure tax pay types correctly identify as income tax, FICA, etc.

## Next steps

- **[Process payroll runs](payroll-runs-process.md)** - Use pay types in payroll processing
- **[Pay cycles setup](pay-cycles-setup.md)** - Configure when payroll is processed
- **[Employee setup](employee-setup.md)** - Assign pay types to employees
