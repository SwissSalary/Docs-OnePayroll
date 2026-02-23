---
title: Benefits liability and reporting
description: Learn how to track employer benefit costs, calculate liabilities, and generate benefits reports.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: how-to
ms.date: 02/23/2026
---

# Benefits liability and reporting

Benefits represent a cost to your company. OnePayroll tracks employer benefit costs and calculates liabilities for financial reporting.

## Understanding benefit costs

Each benefit has:

**Employee cost**
- Deducted from employee's paycheck
- Reduces employee net pay
- Examples: $50/month health insurance premium

**Employer cost**
- Paid by the company
- Expense to the company
- Examples: company's contribution to health insurance

**Total cost**
- Employee cost + Employer cost
- Full cost to company and employee
- Used for budgeting and cost analysis

## Employer benefit contributions

Most benefits have an employer contribution component:

| Benefit | Employee Pays | Employer Pays | Total Cost |
|---------|---------------|---------------|-----------|
| Health Insurance | $200/month | $400/month | $600/month |
| Dental Insurance | $25/month | $50/month | $75/month |
| 401(k) Match | Employee defers | Up to 4% salary | Varies |
| Unemployment | $0 | ~1% payroll | Varies |

### Calculating benefit liability

During payroll processing, OnePayroll:
1. Calculates employee benefit deductions
2. Calculates employer benefit contributions
3. Creates payroll entries for both
4. Posts to GL liability accounts

**Example: Health Insurance Payroll Impact**
```
Gross Pay: $4,000
Employee Health Insurance: -$250 (employee pays)
Employer Health Insurance: -$400 (company pays, separate)
---
Liability to insurance provider: $650 total
  - $250 from employee (employee payable)
  - $400 from employer (employer payable)
```

## Benefit liability accounts

Benefits typically post to liability accounts:

**Common benefit liability GL accounts:**
- Health Insurance Payable
- Dental Insurance Payable
- Vision Insurance Payable
- 401(k) Payable (employee deferrals)
- Employer 401(k) Match Payable
- FSA (Flexible Spending Area) Payable
- HSA (Health Savings Account) Payable

When payroll posts, amounts are credited to these accounts until remitted to the benefit provider.

### GL posting by benefit

Each benefit can have different GL posting rules:

**Health Insurance:**
- Employee deduction → 2110 (Health Insurance Payable)
- Employer contribution → 6210 (Health Insurance Expense)

**401(k):**
- Employee deferral → 2130 (401k Payable)
- Employer match → 6220 (Employer Match Expense)

Configure GL accounts for each benefit during setup.

## Tracking benefit liability

### Review liability after payroll posting

**To review benefits liability:**

1. Search for **General Ledger** or **Chart of Accounts**
2. Open benefit liability accounts (e.g., Health Insurance Payable)
3. Review posted payroll entries:
   - Employee portions (credits to liability)
   - Employer portions (debits to expense)
4. Verify totals match expected benefits enrollment

### Calculate outstanding liability

**To see total benefits liability:**

1. Search for **Benefits Liability Report**
2. Review by benefit:
   - Total employee deferrals outstanding
   - Total employer contributions outstanding
   - Total payable to benefit provider
3. Group by:
   - Benefit type (all health, all 401k, etc.)
   - Benefit program (specific plan)
   - Coverage type (individual, family, etc.)

### Reconcile to GL

Reconcile benefits liability accounts regularly:

```
GL Account: 211 Health Insurance Payable
Beginning balance: $3,500
+ Payroll posted: $1,300
= Expected ending balance: $4,800

Verify actual GL balance = $4,800
If different, investigate variance
```

## Remitting benefit payments

When paying benefits providers (insurance, 401k, etc.):

### Process:

1. Accumulate amounts from multiple payroll runs
2. Prepare remittance to benefit provider
3. Post to GL (debit liability, credit cash)
4. Record receipt/confirmation from provider

### Funding:

**Monthly funding** (most common)
- Accumulate monthly payroll benefits
- Process check/ACH to provider
- Post and reconcile monthly

**Quarterly funding** (some benefits)
- Accumulate quarterly
- Larger consolidated payment
- Common for quarterly-billed benefits

### GL posting example:

```
Debit:  211 Health Insurance Payable          $1,300
Credit: 101 Bank Account                               $1,300
Description: Payment to Blue Cross for March 2026 benefits
```

## Employer contribution tracking

### Budget vs. actual

Compare budgeted benefit costs to actual:

1. Budget: Estimated total benefit costs for year
2. Actual: Real benefit costs posted to GL
3. Variance: Difference (employee changes, rate increases, etc.)

**Example:**
```
Budgeted annual health insurance: $48,000 ($4,000/month × 12)
Actual through March: $12,800
YTD Average: $4,267/month
Projected full year: $51,200
Over budget by: $3,200
```

### Cost allocation

Allocate benefit costs to departments/cost centers:

**If configured:**
- Health insurance cost allocates to Sales
- Different amount allocates to Manufacturing
- GL posting by department

**If not configured:**
- All benefits post to single company-wide account
- Consider post-close allocation

## Benefit reporting

### Employee benefit statement

Provide employees with:
- Benefits enrolled
- Coverage level
- Cost sharing (employee portion vs. employer portion)
- Annual value of benefits
- Changes in enrollment

Typically provided:
- At hire
- Annually (during open enrollment)
- When benefits change
- At termination

### Management reports

**Benefits cost report:**
- Total company benefit spend by month/quarter/year
- Breakdown by benefit type
- Breakdown by department
- Per-employee benefit cost
- Trend analysis (January vs. prior year, etc.)

**Compliance reports:**
- Benefits administration (who's enrolled, coverage details)
- Premium payments tracking (remittance history)
- Employee COBRA eligibility and cost
- Tax reporting (if applicable)

### Statutory reporting

Some benefits require reporting:

**Health Insurance (ACA)**
- Form 1095-B (coverage proof)
- Form 1094-B (transmittal)
- Reporting employee coverage and employer information
- IRS reporting for large employers

**401(k)**
- Form 5500 (if over 100 participants)
- Annual compliance testing
- Distribution reporting

**HSA/FSA**
- Form 8889 (Health Savings Account)
- Form 1098-SA (HSA coverage)

Consult your benefits administrator or accountant for compliance requirements.

## Cost projections

Use benefit costs to project payroll expenses:

**Annual benefit cost per employee:**
- Base salary: $50,000
- Health insurance (total): $6,000/year
- 401(k) match (4%): $2,000/year
- Dental/Vision: $600/year
- **Total cost to company: $58,600/year**

Use for:
- Hiring decisions (true cost of employees)
- Budget planning
- Department cost allocation
- Pricing/profitability analysis

## Troubleshooting benefit costs

### Benefit costs not posting to GL

Verify:
- GL account assigned to benefit
- Payroll includes employees with that benefit
- Payroll calculated (not still in draft)
- GL posting rule includes benefits

### Wrong benefit amounts in GL

Check:
- Benefit calculation formula
- Employee enrollment (is employee enrolled?)
- Coverage tier (how much should employee pay?)
- Employer contribution setup

### Benefit liability account out of balance

Reconcile:
- Payroll entries posting (all included?)
- Remittances posting correctly (reducing liability)
- Beginning balance correct
- All benefit changes captured

## Best practices

- **Regular reconciliation** - Reconcile benefit liability accounts monthly
- **Track all changes** - Document benefit plan changes, rate changes, enrollment changes
- **Review costs** - Monitor employer benefit costs as portion of compensation
- **Plan remittances** - Know when providers expect payment
- **Maintain compliance** - Stay current on statutory reporting requirements
- **Employee communication** - Help employees understand total benefit value
- **Cost allocation** - Allocate benefits fairly across departments

## What's next

- **[Assign benefits to employees](benefits-assignments.md)** - Enrolling employees
- **[Benefits setup](benefits-setup.md)** - Configuring benefit programs
- **[Payroll runs overview](payroll-runs-overview.md)** - How benefits integrate with payroll
