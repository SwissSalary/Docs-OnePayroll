---
title: OnePayroll glossary
description: Glossary of OnePayroll terms and payroll-related definitions.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: reference
ms.date: 02/23/2026
---

# OnePayroll glossary

Definitions of payroll and OnePayroll-specific terminology.

## A

**ACH (Automated Clearing House)**
Electronic payment system for transferring funds between bank accounts. Used for direct deposit.

**Allowance (Tax Allowance)**
Number of exemptions claimed on W-4 for federal tax calculation (older form; replaced by credits system).

**Annual Salary**
Full-year compensation amount for salaried employees. Base for calculating per-period pay.

**ApplicationArea**
Business Central feature controlling which elements display based on role. OnePayroll respects assigned areas.

## B

**Bank Account (Employee)**
Employee's bank information (routing and account numbers) used for direct deposit processing.

**Benefit**
Employer-provided compensation beyond salary (health insurance, retirement, FSA, HSA, etc.).

**Benefit Type**
Category of benefit offering (health insurance, dental, retirement plan, etc.).

**Biweekly**
Pay frequency: Every 14 days; 26 pay periods per year.

## C

**Check printing**
Generating employee paychecks through Business Central check printing functionality.

**Chart of Accounts**
General ledger account structure where payroll transactions post.

**Commission**
Variable compensation based on sales performance or metrics.

**Conditional Pay Type**
Pay type with rules determining when/whether payment applies (e.g., only if sales > threshold).

**Conversion Factor**
Mathematical multiplier converting between pay units (e.g., hourly to annual).

## D

**Deduction**
Amount withheld from employee's gross pay (taxes, benefits, garnishments).

**Department**
Organizational unit for cost allocation in payroll; can be hierarchical.

**Direct Deposit**
Electronic transfer of net pay to employee's bank account(s).

**Disposable Income**
Gross pay minus legally required deductions (used for garnishment limits).

## E

**Effective Date**
Date when a change (pay rate, tax status, etc.) takes effect in payroll.

**Employee Payment Method**
A record on the Employee Card that stores allocation settings and bank details for direct deposit. There is no separate bank account entity — bank information is stored directly on the payment method.

**Employee Snapshot**
Point-in-time record of employee data on a specific date; captures historical information.

**Employee Type**
Classification (Salaried, Hourly, Commissioned, Daily) determining compensation structure.

**Employer Match**
Employer's contribution/matching amount (e.g., 6.2% SS, health insurance, 401k match).

**Exempt Employee**
Salaried employee exempt from overtime requirements (meets salary and duties tests per FLSA).

## F

**FICA (Federal Insurance Contributions Act)**
Federal payroll taxes: Social Security (6.2%) and Medicare (1.45%).

**Filing Status (Tax)**
Tax classification (Single, Married Filing Jointly, Head of Household, etc.) for withholding.

**FUTA (Federal Unemployment Tax Act)**
Federal unemployment tax (0.6% on up to $7,000 per employee annually).

**Flexible Spending Account (FSA)**
Pre-tax deduction for unreimbursed medical or dependent care expenses.

## G

**Garnishment**
Court-ordered wage deduction (child support, judgment, tax levy).

**GL (General Ledger)**
Business Central accounting ledger where payroll transactions post.

**GL Integration**
Automatic posting of payroll transactions to general ledger accounts.

**Gross Pay**
Total compensation before deductions (salary/wages + bonuses + overtime, etc.).

## H

**Health Savings Account (HSA)**
Pre-tax savings account for qualified medical expenses; paired with high-deductible health plan.

**Hire Date**
Date employee begins employment; determines tenure and eligibility calculations.

**Hourly Employee**
Employee paid per hour worked; typically non-exempt and eligible for overtime.

**Hourly Rate**
Compensation expressed as hourly amount (e.g., $25/hour).

## I

**Income Tax Withholding**
Amount withheld from employee pay for federal, state, and local income taxes.

**Internals Visible To**
Business Central feature; in OnePayroll used by test projects to access core app internal members.

## J

**Journal Entry**
Record of financial transaction (debit/credit) in general ledger.

**Jurisdiction**
State or locality for tax withholding purposes.

## L

**Liability Account**
GL account tracking amounts owed (taxes payable, benefits payable, garnishment payable).

**Local Income Tax**
City or county income tax (varies by jurisdiction).

**Local Procedure**
AL language procedure accessible only within containing codeunit.

## M

**Medicare**
Federal health insurance for retirees; payroll contribution 1.45% employee, 1.45% employer.

**Medicare Tax Additional**
Additional 0.9% Medicare tax on wages over $200k (single) or $250k (married); both employee and employer.

**Monthly**
Pay frequency: Once per month; 12 pay periods per year.

**Multi-State Employee**
Employee working/residing in multiple states; each state's tax rules may apply.

## N

**Namespace**
AL language organizational structure; OnePayroll uses structured naming (SwissSalary.OnePayroll.*).

**Net Pay**
Employee's take-home pay after all deductions and taxes.

**Non-Exempt Employee**
Employee entitled to overtime pay; includes hourly and some salaried employees.

## O

**Overtime**
Compensation at premium rate (typically 1.5x) for hours beyond 40/week (federal minimum).

**Overtime Multiplier**
Factor multiplied by regular rate for overtime (e.g., 1.5 for time-and-a-half).

## P

**PascalCase**
Naming convention using uppercase for first letter (variable names, procedures in OnePayroll).

**Pay Cycle**
Schedule of payroll periods; includes start/end dates and frequency.

**Pay Cycle Schedule**
Details of all pay periods in year (start dates, end dates, cut-off rules).

**Pay Group**
Grouping of employees by pay frequency and GL posting rules; defines payroll batch.

**Pay Period**
Time span covered by single payroll (weekly, biweekly, monthly, etc.).

**Pay Type**
Category of compensation or deduction (regular wages, overtime, bonus, health insurance, garnishment, tax).

**Pay Unit**
Measurement unit for compensation (annual, hourly, daily, per-period).

**Paycheck Register**
Report listing all paychecks issued in period.

**Payable Account**
GL liability account (taxes payable, benefits payable, garnishment payable).

**Payee**
Recipient of garnishment payment (court, child support enforcement, etc.).

**Payee Setup**
Configuration of garnishment/deduction payee details (address, account, etc.).

**Payroll Entry**
Individual transaction in payroll (one pay type for one employee).

**Payroll Journal**
General Journal Lines generated from payroll posting.

**Payroll Run**
Payroll processing batch covering specific period; groups employees for single payroll.

**Payroll Setup**
Main configuration for OnePayroll (GL posting, phone formatting, pay unit, headline settings, etc.).

## Q

**Quarterly Report**
Tax reporting covering 3-month period (Form 941, quarterly wage reports).

## R

**Regular Pay/Wages**
Standard hourly or salary compensation (excludes overtime, bonuses, special pay).

**Role Center**
Business Central home page customized by role (manager, accountant, payroll, etc.).

## S

**Salaried Employee**
Employee paid fixed annual amount; typically exempt from overtime.

**Salary**
Fixed annual compensation for salaried employee.

**Self-Service Portal**
Web interface for employees (paychecks, W-2s, benefits enrollment, personal info).

**Semi-Monthly**
Pay frequency: Twice per month; 24 pay periods per year.

**Shift Differential**
Bonus paid for working specific shifts (e.g., nights, weekends) at higher rate.

**Snapshot (Employee)**
Point-in-time record of employee data; captures historical state for audit trail.

**Social Security**
Federal retirement/disability insurance; payroll contribution 6.2% employee, 6.2% employer.

**Source Table ID**
Field identifying origin of GL transaction (enables traceability from GL back to payroll source).

**State Unemployment Insurance**
State-administered unemployment insurance; rate varies by state and experience rating.

## T

**Termination Date**
Date employee's employment ends; used for final paycheck calculation and W-2.

**Testing Page Object**
AL test tool for simulating user interaction with pages in automated tests.

**Time Sheet**
Record of hours worked by employee; basis for hourly payroll calculation.

**Time-and-a-Half**
Overtime rate of 1.5x regular rate (federal minimum).

**Tip Income**
Gratuities received by employee; may reduce minimum wage requirement (state-dependent).

**Transaction**
Individual financial event (payroll entry, GL posting, tax payment).

## U

**Unit Testing**
AL language testing methodology; small-scale test of specific functionality.

**Unwithholding**
Reducing tax withholding (opposite of extra withholding).

## V

**Validation Rule**
Business rule enforcing data requirements/restrictions (field required, value range, etc.).

**Value Tax Effective Date**
Effective date of tax/deduction change (when new rate/amount applies).

## W

**W-2 (Wage and Tax Statement)**
Annual federal tax form reporting employee wages and taxes withheld.

**W-3 (Transmittal of Wage and Tax Statements)**
IRS form transmitting all employee W-2s to federal government.

**W-4 (Employee's Withholding Certificate)**
Form completed by employee specifying tax withholding (filing status, credits, etc.).

**Wage**
Hourly or per-period compensation (vs. salary which is annual).

**Wage Base (FICA)**
Maximum wages subject to Social Security tax; resets annually ($168,600 in 2024).

**Wage Bracket Method**
IRS tax calculation method using wage brackets (alternative to percentage method).

**Wet Signature**
Physical signature on document; some documents require original signed copies.

**Withholding**
Amount deducted from employee pay for taxes/deductions.

**Withholding Allowance**
Older tax form concept; modern W-4 uses credits instead.

## X

**XML Documentation**
Code documentation in AL using XML tags (`<summary>`, `<param>`, `<returns>`).

## Y

**Year-End Close**
Accounting period end-of-year close including W-2 generation and tax file consolidation.

**YTD (Year-to-Date)**
Cumulative amount from start of calendar year through current date.

## Z

**Zero-Based Elimination**
Accounting technique for consolidation elimination entries (not specific to payroll).

---

## Related topics

- **[Key concepts](key-concepts.md)** - Expanded explanations
- **[FAQ](faq.md)** - Common questions
- **[US localization](us-localization.md)** - US terminology and regulations
