---
title: About GL integration
description: Learn how OnePayroll integrates with the general ledger and posts payroll transactions.
author: zeande
sws.service: onepayroll
sws.topic: overview
sws.date: 02/23/2026
---

# About GL integration

OnePayroll integrates with Business Central's General Ledger (GL) to post all payroll transactions automatically.

## GL integration overview

When a payroll is posted:
1. OnePayroll creates journal entries for all pay types, deductions, and taxes
2. Entries post to GL accounts by pay type or department
3. Liabilities post separately (taxes payable, benefits payable, garnishments payable)
4. Cash is offset with employee net pay

**Result:**
- GL automatically updated with payroll costs
- Liabilities tracked in payable accounts
- Cash impact recorded
- Full audit trail maintained

## Payroll journal structure

### Chart of Accounts integration

**Typical payroll accounts:**

| Account | Purpose |
|---------|---------|
| 6100 Salary Expense | Employee salaries/wages |
| 6110 Hourly Wages | Hourly employee wages |
| 6120 Commission Expense | Commission payouts |
| 2100 Federal Taxes Payable | Federal income tax liability |
| 2110 FICA Payable | Social Security/Medicare liability |
| 2120 State Taxes Payable | State income tax liability |
| 2200 Garnishment Payable | Wage garnishment liability |
| 2300 Deduction Payable | Employee deduction liability |
| 1000 Cash | Employee net pay distribution |

### Payroll entry posting

Each payroll creates entries:

**Expense side (debit):**
- Salary Expense (gross wages)
- Commission Expense (if applicable)
- Employer taxes (employer match)
- Benefits expense (employer-funded benefits)

**Liability side (credit):**
- Federal Taxes Payable (employee withholding + employer match)
- FICA Payable (SS/Medicare withholding + match)
- State Taxes Payable (state withholding)
- Benefits Payable (employee deductions)
- Garnishment Payable (wage garnishments)

**Asset side (credit):**
- Cash (net pay to employees)

### Example payroll posting

```
Payroll posted for week:
- 10 employees
- $15,000 gross wages
- $1,500 federal withholding
- $1,700 FICA withholding
- $500 health insurance deduction
- $11,300 net pay

GL Entries:
Debit: Salary Expense (6100) $15,000
  Credit: FICA Payable (2110) $1,700
  Credit: Federal Tax Payable (2100) $1,500
  Credit: Deduction Payable (2300) $500
  Credit: Cash (1000) $11,300
```

## Department tracking

Employees are assigned to departments, which enables payroll reporting and analysis by department. Department assignment is tracked on the employee record and captured in payroll entries for reporting purposes.

## Liability tracking

### Tax liabilities
- Federal and state income taxes withheld
- FICA (Social Security/Medicare) withheld and employer match
- Posted to payable accounts with due dates
- Reconciled to actual tax deposits made

### Benefits liabilities
- Health insurance deductions
- FSA/HSA contributions
- Other benefit deductions
- Tracked by plan for reconciliation

### Garnishment liabilities
- Wage garnishments withheld
- Posted by garnishment for remittance tracking
- Reconciled to legal payee payments

## Source table ID tracking

**Key feature for audit trail:**

Every GL entry from payroll includes:
- **Source Table ID** - Identifies transaction type
  - Payroll Entry: GL knows it came from payroll (not manual entry)
  - Employee: GL knows which employee (for analysis)
  - Department: GL knows which department (for allocation)
  - Tax: GL knows which tax type

**Benefits:**
- Complete traceability from GL back to payroll
- Cannot accidentally modify payroll GL entries as regular GL transactions
- Compliance audit trail
- Reconciliation capability

## GL posting workflow

1. **Payroll Calculation** — Individual payroll entries created for each employee
2. **Review** — Management reviews payroll entries for accuracy
3. **Mark as Ready** — Payroll run is marked as ready for posting
4. **Post** — OnePayroll creates General Journal Lines and posts them to the General Ledger

## Reconciliation

Monthly payroll GL reconciliation:

1. **Expense verification:**
   - Total GL salary expense = sum of all paychecks
   - Compare to budget/forecast

2. **Liability reconciliation:**
   - GL tax payable = taxes withheld + deposits made
   - GL deduction payable = deductions withheld + payments made
   - Identify timing differences

3. **Cash reconciliation:**
   - GL cash = net pay distributed
   - Matches bank account deposits/checks issued

## Next steps

- **[GL posting setup](gl-posting-setup.md)** - Configure GL accounts for payroll
- **[Chart of accounts](gl-posting-setup.md)** - GL account structure
- **[Payroll journal](payroll-journal.md)** - General Journal Lines from payroll posting
