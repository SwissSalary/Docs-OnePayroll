---
title: Garnishments
description: Learn how to set up and manage wage garnishments in OnePayroll.
author: zeande
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Garnishments

A garnishment is a legal order to withhold a portion of an employee's wages and remit them to a third party. Common garnishments include child support, creditor judgments, and tax levies.

## About garnishments

**Garnishments are:**
- Court-ordered, not voluntary (unlike benefits)
- Required to withhold and remit (compliance mandatory)
- Priority-based when multiple garnishments exist
- Subject to legal protections (can't reduce pay below minimum)

**Common types:**
- **Child Support** - Court order for support of minor children
- **Creditor Judgment** - Court judgment from unpaid debts
- **Tax Levy** - IRS or tax authority for unpaid taxes
- **Student Loan** - Wage garnishment for student loan default
- **Alimony** - Court order for spousal support
- **Union Dues** - Voluntary union dues deducted (sometimes classified as garnishment)

## Legal considerations

Garnishments are subject to federal and state laws:

**Federal protections:**
- Can't garnish more than 25% of gross pay (varies by type)
- Can't reduce net pay below minimum wage or poverty level
- Disposable income calculations limit garnishment amount
- Three garnishments max considered (varies by jurisdiction)

**State variations:**
- State garnishment limits may be more restrictive than federal
- Some states require specific forms or procedures
- Local court orders take precedence
- Consult your company's legal/HR team

> [!IMPORTANT]
> Garnishment laws are complex and vary by type and jurisdiction. Always verify compliance with applicable laws and consult legal counsel if unsure.

## Setting up a garnishment

**To create a garnishment for an employee:**

1. Search for **Employee Garnishments**
2. Select **New**
3. Enter garnishment details:
   - **Employee** - Select the employee
   - **Garnishment Type** - Child Support, Creditor Judgment, Tax Levy, etc.
   - **Court Order Number** - Reference number from court order (if applicable)
   - **Withholding Amount** - Dollar amount OR percentage to withhold
4. Configure:
   - **Priority** - Calculation order (1 = highest priority)
   - **Effective Date** - When garnishment starts
   - **Termination Date** - When garnishment ends (if known)
   - **Protected Amount Type** - How to protect minimum pay (percentage or dollar amount)
5. Save

### Priority setting

When an employee has multiple garnishments, priority determines order:

```
Priority 1: Child Support - $200 (withhold first)
Priority 2: Creditor Judgment - $50 (withhold second)
Priority 3: Tax Levy - remaining (withhold third)
```

If employee's disposable income won't cover all garnishments, higher priority garnishments are paid in full before lower priority.

### Withholding amounts

**Fixed dollar amount:**
- Withhold exactly $200 per paycheck
- Straightforward, predictable
- Might not cover full order

**Percentage:**
- Withhold 25% of gross pay
- Scales with employee's pay
- Must respect legal maximums

**Formula:**
- Complex calculations combining percentage + minimum
- Example: 25% or $50, whichever is greater
- Handles multiple garnishment scenarios

## Calculating garnishment amounts

OnePayroll calculates garnishment amounts respecting legal limits:

**Basic calculation:**
1. Start with gross pay
2. Apply garnishment percentage or amount
3. Calculate disposable income (pay remaining after taxes/deductions)
4. Ensure protected amount is maintained
5. Respect priority order

**Example:**
```
Gross Pay: $2,000
Federal Withholding: -$240
FICA: -$153
Child Support Garnishment: -$250 (25% of disposable = $2,000 - $240 - $153 = $1,607 × 15%)
Net Pay: $1,357
```

## Managing garnishments

### Modifying garnishments

**To change an active garnishment:**

1. Open the garnishment
2. Edit as needed:
   - Withholding amount or percentage
   - Effective dates
   - Priority
3. Save

Changes take effect in next payroll run.

### Terminating garnishments

**To end a garnishment:**

1. Open the garnishment
2. Set **Termination Date** to when garnishment ends
3. OnePayroll stops withholding on that date
4. Save

Keep terminated garnishments in system for historical records.

### Multiple garnishments

Managing multiple garnishments requires:

1. Create separate garnishment records for each order
2. Set appropriate priorities
3. Ensure total withholdings don't exceed legal limits
4. OnePayroll calculates amounts respecting priority and limits

**Example: Employee with two garnishments**
```
Garnishment 1: Child Support - 20%, Priority 1
Garnishment 2: Creditor Judgment - $100, Priority 2

OnePayroll:
- Calculates child support first (higher priority)
- Then applies creditor garnishment if funds available
- Respects legal maximum (25% disp income or federal limits)
```

## Remitting garnishment amounts

When payroll is posted, garnishment amounts create liabilities:

**GL posting:**
- Garnishment withholding: Debit (liability) - posts to Garnishment Payable account
- Employee salary: Credit (expense)

**Remittance:**
1. Accumulate garnishment amounts from multiple payrolls
2. Submit remittance to court-designated recipient
3. Include documentation (employee name, case number, period covered)
4. Record remittance in GL

**Timing:**
- Garnishments typically remitted monthly or quarterly
- Depends on court order requirements
- Some large employers remit more frequently

## Legal compliance

To maintain compliance:

**Documentation:**
- Keep copies of court orders on file
- Record garnishment effective/termination dates
- Document all changes with explanations
- Maintain remittance records (proof of payment)

**Notification:**
- Some jurisdictions require notifying employee of garnishment
- Provide garnishment details on pay stub
- Keep employee informed of status/termination

**Accuracy:**
- Calculate correctly to avoid under/over withholding
- Remit on time to avoid penalties
- Track balance and communicate with employee

**Compliance tracking:**
- Review garnishment laws regularly (they change)
- Verify legal maximum limits
- Consult HR/legal if unsure about compliance

> [!TIP]
> Keep a garnishment compliance calendar noting due dates for remittance and termination dates so you don't miss deadlines or continue garnishing after order ends.

## Validating garnishments before payroll

Before processing payroll with garnishments:

1. **Verify garnishment setup:**
   - Correct employee assigned?
   - Correct withholding amount/percentage?
   - Proper priority order?
   - Effective dates correct?

2. **Test calculation:**
   - Include employee in test payroll run
   - Verify garnishment calculated correctly
   - Check disposable income calculation
   - Confirm legal limits respected

3. **Review payroll impact:**
   - Is net pay still above minimum requirements?
   - Multiple garnishments calculating correctly?
   - GL posting to correct garnishment liability accounts?

## Troubleshooting

### "Garnishment exceeds legal maximum" error
- Verify withholding percentage (should be 25% max or less)
- Check disposable income calculation (might be lower than expected)
- Review and adjust garnishment amount if needed
- Consult with legal

### Wrong garnishment calculating during payroll
- Verify garnishment is active (not terminated)
- Check effective date (is it before payroll period?)
- Confirm employee is assigned to garnishment
- Review priority order

### Garnishment still applying after termination date
- Verify termination date is set correctly
- Ensure date is before payroll period
- Check if new garnishment replaced old one

### Employee inquires about garnishment
- Direct to HR/payroll admin
- Provide copy of court order (employee has right to see)
- Explain calculation method
- Offer to answer questions about withholding

## Best practices

- **Keep court orders** - File and refer to original court order
- **Verify termination** - Don't continue after court order ends
- **Calculate accurately** - Respect legal limits and disposable income rules
- **Remit on time** - Meet all remittance deadlines
- **Document everything** - Maintain complete audit trail
- **Communicate with employee** - Keep employee informed
- **Consult legal** - When uncertain, ask legal counsel
- **Track multiple garnishments** - Ensure proper priority and limits

## What's next

- **[Employee setup](employee-setup.md)** - Overall employee configuration
- **[Process payroll runs](payroll-runs-process.md)** - How garnishments affect payroll
- **[Payment methods](payment-methods-overview.md)** - Payment configuration
