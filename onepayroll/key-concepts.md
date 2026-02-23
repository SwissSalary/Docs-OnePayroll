---
title: Key concepts and terminology
description: A comprehensive glossary of OnePayroll terms and concepts.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: reference
ms.date: 02/23/2026
---

# Key concepts and terminology

This glossary defines key terms and concepts used throughout OnePayroll.

## A

**Allocation Method**
The way an employee's net pay is distributed to different bank accounts or payment methods. Common allocation methods are Primary (all pay to first account), Fixed Amount (specific dollar amount to each account), and Percentage (percentage of pay to each account).

**Annual Pay**
The total estimated compensation for an employee for a full year, used in salary-based wage calculations.

**Approval Workflow**
An optional workflow that requires payroll to be approved by a manager before posting to the general ledger.

## B

**Benefit**
A company-sponsored program or coverage (health insurance, dental plan, retirement plan) that employees can enroll in. Benefits are typically deducted from employee pay or subsidized by the employer.

**Benefit Hierarchy**
An organizational structure that groups related benefits, such as all health insurance plans under a "Health Coverage" parent group.

**Benefit Limit**
A maximum annual or monthly contribution, deduction, or reimbursement amount for a specific benefit.

**Benefit Type**
A category of benefits (Health Insurance, Dental Insurance, Vision Insurance, Retirement Plans, etc.).

**Biweekly**
A pay frequency of every two weeks (26 pay periods per year).

**Calculation Method**
The approach used to calculate a pay type amount:
- **Fixed Amount** - A set dollar amount per period
- **Percentage** - A percentage of another pay type (e.g., 50% of gross pay)
- **Hourly Rate** - Hourly wage multiplied by hours worked
- **Annual Salary** - Annual salary divided by pay periods
- **Formula** - Custom calculation using predefined formulas

**Calculation Type**
See [Calculation Method](#c).

## C

**Chart of Accounts**
The complete list of general ledger accounts used by your company. OnePayroll posts payroll entries to accounts specified in your chart of accounts.

**Check**
A physical or electronic payment method for distributing employee pay. Checks can be printed or issued electronically.

**Check Printing**
The process of generating and printing employee paychecks. OnePayroll integrates with Microsoft's check printing to manage numbering and alignment.

**Conditional Pay Type**
A pay type that is automatically applied based on conditions or rules, rather than being manually entered for each employee.

**Contoso Coffee**
Sample demo data included in some Business Central extensions for learning purposes.

**Conversion Factor**
A multiplier used to convert compensation between different pay unit types. For example, a conversion factor of 0.192 converts an annual salary to an hourly rate (annual salary ÷ 2,080 hours ÷ 12 months).

**Coverage**
The level or type of benefit coverage an employee is enrolled in (e.g., "Employee Only", "Employee + Spouse", "Family").

## D

**Deduction**
A pay type that reduces an employee's gross pay, such as taxes, insurance premiums, or loan repayments.

**Department**
An organizational unit that groups employees. Departments can be hierarchical (departments within departments).

**Department Hierarchy**
An organizational structure showing parent-child relationships between departments.

**Direct Deposit**
An electronic payment method that deposits wages directly into an employee's bank account.

**Disposition**
The final posting location for a payroll transaction in the general ledger.

## E

**Earnings**
A pay type that increases an employee's gross pay, such as salary, wages, overtime, bonuses, or commissions.

**Effective Date**
The date that a change (to pay type, pay group, benefit enrollment, etc.) becomes active.

**Employee Payment Method**
A record that defines how an employee's net pay is allocated and where it is deposited. Each Employee Payment Method stores allocation settings (Primary, Fixed Amount, or Percentage) and bank details (Bank Account No., Bank Identifier Code) directly on the same record.

**Employee Snapshot**
A historical record of an employee's key payroll information (pay group, pay types, tax settings) captured at a point in time for audit and historical reference.

**Employee Type**
A classification of employees that determines how their compensation is calculated:
- **Salaried** - Paid a fixed annual salary
- **Hourly** - Paid based on hours worked
- **Commissioned** - Paid primarily through commissions

**Event Subscriber**
A code component that listens for and responds to application events (e.g., "on payroll run calculated").

## F

**FICA**
Federal Insurance Contributions Act taxes (Social Security and Medicare). Includes employee and employer portions.

**FIT**
Federal Income Tax withholding.

**Flat Amount Deduction**
A fixed dollar amount deducted from employee pay per period.

**Frequency**
The interval at which employees are paid. Common frequencies include weekly, biweekly, semi-monthly, and monthly.

**Full-Time Equivalent (FTE)**
A calculation of employee headcount where part-time employees are counted as fractions of full-time employees.

## G

**Garnishment**
A legal demand to withhold a portion of an employee's wages and remit them to a third party (e.g., child support, creditor).

**Garnishment Priority**
The order in which multiple garnishments are applied when an employee has garnishment orders from multiple sources.

**GL Account**
See [General Ledger Account](#g).

**GL Integration**
The automatic posting of payroll entries to general ledger accounts for accounting purposes.

**Gross Pay**
Total compensation before taxes and deductions. Gross pay includes all earnings but excludes voluntary deductions.

## H

**Heading Pay Type**
A pay type used only for grouping or organizational purposes on payroll reports, not for calculation.

**Hierarchical Organization**
An organizational structure showing parent-child relationships, such as departments within divisions.

**Holiday**
A day when employees are paid but don't work. OnePayroll can track holiday hours separately from regular hours.

**Hourly Rate**
The compensation amount per hour worked, used for calculating pay for hourly employees.

## I

**Income Tax Setup**
Configuration for income tax withholding, including tax tables, brackets, and employee tax settings.

**Interface (AL Language)**
A code construct that defines a contract or set of methods that implementing classes must follow, enabling extensibility.

## J

**Job Title**
An employee's position or role within the organization.

**Journal Entry (Payroll Journal)**
A record of a payroll transaction ready to be posted to the general ledger. Payroll journal entries group payroll entries by GL account.

## K

**Kit**
See [Contoso Coffee](#c) - sample data related to product kits.

## L

**Liability**
A financial obligation or debt, such as payroll taxes owed to the government or benefits costs owed to providers.

**Limit Adjustment**
A temporary change to a benefit limit amount.

**Local Tax**
City or other local jurisdiction income tax withholding.

## M

**Manual Payment**
A payroll entry created outside the normal payroll run calculation, such as a bonus or off-cycle payment.

**Medicare Tax**
A federal payroll tax on wages. Both employee and employer portions are withheld.

**Month-End Close**
The accounting process at the end of each month, which typically includes reconciling payroll entries posted to GL.

## N

**Namespace (AL Language)**
A code organization mechanism that organizes AL code into logical groups, similar to packages or modules in other languages.

**New Pay Type**
A pay type that is created for the first time, as opposed to modifying an existing pay type.

**Non-Resident Alien**
An employee who is not a US citizen and is subject to special tax withholding rules.

## O

**Offset Account**
An account used to balance payroll entries when posting to the general ledger.

**Off-Cycle Payment**
A payroll payment made outside the normal payroll schedule, such as a bonus or severance.

**Overtime**
Hours worked beyond the standard work week, typically at a higher rate of pay (1.5x or 2x regular rate).

**Overtime Rate**
The multiplier applied to the regular hourly rate for overtime hours (e.g., 1.5x, 2x).

## P

**Pay Cycle**
A definition of when and how often employees are paid, including the frequency (weekly, biweekly, etc.) and period cutoff rules.

**Pay Cycle Schedule**
The specific dates and periods for a pay cycle, showing when each payroll period starts and ends.

**Pay Group**
A collection of employees who are paid on the same schedule and using the same payroll posting rules.

**Pay Period**
The time interval covered by a single payroll run, from period start date to period end date.

**Payable**
An amount owed by the company, such as wages owed to employees or taxes owed to government agencies.

**Payback Agreement**
A document signed by an employee agreeing to repay training costs or bonuses if they leave the company.

**Paycheck**
The compensation statement and payment issued to an employee for a pay period.

**Paycheck Status**
The state of a paycheck in the payroll workflow:
- **Draft** - paycheck is calculated but not yet finalized
- **Ready** - paycheck is finalized and ready to be distributed
- **Distributed** - paychecks have been issued
- **Reversed** - paycheck was cancelled and reversed

**Payer ID**
A unique identifier assigned by the government for payroll tax purposes.

**Payroll Entry**
A detailed transaction record for a single pay type on a single employee's payroll for a period. Each entry records the source table ID, calculation method, and posted GL account.

**Payroll Journal**
A list of payroll entries grouped by general ledger account, ready to be posted to the GL.

**Payroll Run**
A batch payroll processing cycle that calculates and processes pay for a group of employees for a specific pay period.

**Payroll Run Status**
The state of a payroll run in the processing workflow:
- **Draft** - payroll run is being set up
- **Calculated** - payroll has been calculated
- **Ready** - payroll is approved and ready to post
- **Posted** - payroll has been posted to GL

**Payroll Status**
See [Payroll Run Status](#p).

**Payment Method**
A configuration that defines how an employee will be paid (direct deposit or check) and how net pay will be allocated across accounts.

**Payment Source**
The originating system or process that created a payment (e.g., "Payroll Run", "Manual Payment").

**Pay Type**
A component of compensation (earnings or deductions) such as salary, overtime, taxes, or benefits.

**Pay Type Category**
A grouping of related pay types (e.g., "Regular Earnings", "Overtime", "Taxes", "Benefits").

**Pay Unit**
A unit of compensation measurement:
- **Annual Salary** - compensation expressed as an annual amount
- **Hourly Wage** - compensation expressed as an hourly amount
- **Salary per Pay Period** - compensation expressed per payroll period

**Pay Unit Conversion**
The process of converting between different pay units (e.g., annual salary to hourly rate).

**Period Cutoff**
The rules that determine when a pay period ends and the next one begins.

**FICA**
See [FICA](#f).

**Priority**
An ordering of Employee Payment Methods. Each method has a unique priority per employee that determines the processing order.

**Posted**
A transaction that has been recorded in the general ledger and is final.

**Primary Allocation**
The default payment method for an employee, to which the majority of net pay is directed.

**Processing Status**
See [Payroll Run Status](#p).

## Q

**Quarterly Estimated Tax**
Tax payments required to be made each quarter for self-employed individuals or nonpayroll income.

**Quick Start**
An initial, simplified configuration setup in Business Central.

## R

**Regular Pay**
Compensation earned at the regular (non-overtime) rate.

**Remittance**
A payment made to a government agency (taxes) or third party (garnishment, support) from funds withheld from employee pay.

**Reversal**
Canceling a posted payroll entry by creating an offsetting entry.

**Rounding Rule**
The rule applied to round calculated pay amounts (Round to nearest cent, Round down, Round up, etc.).

## S

**Salary Basis**
The frequency at which fixed salary compensation is paid (annual, monthly, weekly).

**Semi-Monthly**
A pay frequency of twice per month, typically on the 15th and last day of the month (24 pay periods per year).

**Self-Service Portal**
An employee-facing web interface where employees can view pay stubs, tax documents, update direct deposit information, and enroll in benefits.

**Snapshot**
See [Employee Snapshot](#e).

**Source Table ID**
A field on every payroll entry that records which table generated the entry (e.g., table ID for Pay Type, Benefit, or Garnishment), maintaining an audit trail.

**Social Security Number (SSN)**
The unique identifier for US employees for tax purposes.

**State Income Tax**
Income tax withheld by a specific state.

**Status (Payroll Run)**
See [Payroll Run Status](#p).

**Statutory Deduction**
A deduction required by law, such as FICA or income tax withholding.

**Strain on Resources**
Performance issues that occur when payroll history grows large.

## T

**Tax Calculation Method**
The calculation approach configured on each Income Tax Jurisdiction. Available methods:
- **Standard** — Full W-4 calculation with annualization, deductions, brackets, credits, and allowances
- **Simplified** — Bracket-based lookup using annualized wages
- **None** — No income tax calculation

**Tax Calculation Setup**
Configuration of Income Tax Jurisdictions, rates, and withholding rules.

**Tax Filing Due Date**
The government deadline for submitting tax forms and payments.

**Tax Jurisdiction**
A geographic area that has its own tax rules (federal, state, city).

**Tax Rate**
The percentage or amount of income subject to a specific tax.

**Tax Statement**
A document summarizing annual tax withholdings and payments (e.g., W-2, 1099 form).

**Tax Withholding**
The amount of compensation withheld from an employee's pay for income tax purposes.

**Temporary Assignment**
An employee assigned to a temporary project or location.

**Tenant Discovery**
Identifying which Business Central tenant an external application should communicate with.

**Test Payroll**
A payroll run created to verify configuration without posting results to GL.

**Time Off Tracking**
Recording and management of employee absences (vacation, sick leave, etc.).

**Timesheet**
A record of hours worked by an employee, used to calculate pay for hourly employees.

**Tip**
Additional guidance, hints, or best practices provided in OnePayroll documentation.

**Training Resources**
Links to learning materials about OnePayroll features.

**Transaction**
An individual payroll entry or journal posting.

## U

**Unemployment Insurance (UI)**
State-mandated insurance against job loss, funded by employer payroll taxes.

**Unit of Measurement**
See [Pay Unit](#p).

**User-Defined Field**
A custom field added to a table by implementing partners to extend OnePayroll functionality.

## V

**Validation Rule**
A configurable business rule that validates payroll data. Validation rules can be applied at the field level during data entry.

**Vision Insurance**
Employee health insurance covering vision care (eye exams, glasses, contacts).

## W

**Wage**
Compensation paid to an employee, typically calculated as hourly rate × hours worked.

**W-2**
An annual tax document showing wages and taxes withheld (US-specific).

**Weekly**
A pay frequency of once per week (52 pay periods per year).

**Withholding**
Amounts deducted from an employee's pay, typically for taxes or other mandatory deductions.

**Work Location**
A physical office, plant, or job site where an employee works.

**Work Location Type**
A classification of work locations (e.g., Corporate Office, Field Site, Remote).

## X

**XML**
Extensible Markup Language, used in some data exchange formats.

## Y

**Year-End Close**
The accounting process at the end of the calendar year, which includes finalizing payroll and preparing tax documents.

**Year-to-Date (YTD)**
A cumulative total from the beginning of the calendar year through the current date.

## Z

**Zero-Based Budgeting**
A budgeting approach where each expense must be justified from zero, not based on prior periods.

---

## Related articles

- [Introduction](introduction.md) - Product overview
- [Getting started](getting-started.md) - Step-by-step setup guide
- [Payroll runs overview](payroll-runs-overview.md) - Understanding payroll processing
