---
title: Set up income tax withholding
description: Learn how to configure employee income tax withholding information in OnePayroll, including federal W-4, state, and local tax data.
author: zeande
ms.topic: how-to
ms.date: 02/23/2026
---

# Set up income tax withholding

Configure employee withholding information so OnePayroll can calculate the correct income tax for each pay period. Employee withholding records are managed through the **Withholding Information** page, which is accessed from the Employee Card.

## How withholding records work

OnePayroll automatically creates and maintains employee withholding records based on the employee's location:

- **Federal** — created when the employee has a country/region code
- **Work state** — created based on the employee's work location
- **Home state** — created only when the home state differs from the work state

When you change an employee's country/region, state, or work location, OnePayroll refreshes the applicable jurisdictions automatically. New withholding records are created for newly applicable jurisdictions, and records for jurisdictions that no longer apply are deactivated.

## Open withholding information

**To access an employee's withholding records:**

1. Open the **Employee Card**.
2. Choose the **Withholding Information** action.

The Withholding Information page shows up to three sections:

- **Federal Withholding** (the national jurisdiction, such as W-4)
- **Work State Withholding** (the regional jurisdiction for the work location)
- **Home State Withholding** (only visible when the home state differs from the work state)

You can also select the **Federal Filing Status** field on the Employee Card to open the Withholding Information page directly.

## Enter federal W-4 information

On the **Federal Withholding** section (labeled with the form name, such as *Federal Withholding (W-4)*), fill in the following fields based on the employee's Form W-4:

| Field | W-4 reference | Description |
|-------|---------------|-------------|
| **Filing Status** | Step 1(c) | Single, Married Filing Jointly, Married Filing Separately, Head of Household, or Qualifying Surviving Spouse |
| **Multiple Jobs** | Step 2(c) | Turn on if the employee has multiple jobs or a working spouse |
| **Withholding Credits** | Step 3 | Dollar amount for tax credits (child tax credit, dependent care, etc.) |
| **Other Income** | Step 4(a) | Estimated annual non-wage income |
| **Deductions** | Step 4(b) | Itemized deductions exceeding the standard deduction |
| **Additional Withholding** | Step 4(c) | Extra dollar amount to withhold each pay period |

### Filing Status options

| Status | Description |
|--------|-------------|
| Single | Single, divorced, or legally separated |
| Married Filing Jointly | Married couple filing a joint return |
| Married Filing Separately | Married couple filing separate returns |
| Head of Household | Unmarried and supporting a dependent |
| Qualifying Surviving Spouse | Surviving spouse within two years of spouse's death |

### Exempt from Withholding

To mark an employee as exempt from federal withholding:

1. Turn on **Exempt from Withholding** (the Inactive field).
2. Set the **Exemption Expiration Date** if applicable.

When the exemption expires, the employee's withholding record becomes active again The system uses the regular withholding values.

## Enter state withholding information

State withholding fields appear on the **Work State Withholding** and **Home State Withholding** sections. The fields that appear depend on the jurisdiction's **Withholding Definition**:

### Standard form

States with their own W-4 form (for example, California with form DE-4) show all applicable fields independently:

- Filing Status
- Allowances
- Withholding Credits
- Other Income
- Deductions
- Additional Withholding

The employee fills in the state-specific form, and you enter the values separately from the federal W-4.

### Standard form with inherited filing status

Same as Standard form, but the Filing Status is automatically inherited from the federal (national) jurisdiction. The employee enters other state-specific values independently.

### Inherited from parent

All withholding values are inherited from the parent (federal) jurisdiction. No separate state W-4 entry is needed. When the federal withholding record changes, values automatically propagate to these state jurisdictions.

## Income Tax Profiles

When you save a withholding record, OnePayroll automatically resolves the **Income Tax Profile** based on the employee's filing attributes (such as filing status). The profile determines which standard deduction, per-allowance amount, and tax rate brackets apply during calculation.

The resolved profile appears on the withholding record. If no matching profile is found, verify that the Income Tax Jurisdiction has profiles configured for the employee's filing status combination.

## W-2 information

The Employee Card provides access to W-2-related fields through the **W-2 Information** action (US). These fields map to W-2 Box 13 and Box 14:

| Field | W-2 Box |
|-------|---------|
| Third-Party Sick Pay | Box 13 |
| Statutory Employee | Box 13 |
| Retirement Plan | Box 13 |
| Box 14a Miscellaneous | Box 14 |
| Tipped Occupation Code 1 | Box 14 |
| Tipped Occupation Code 2 | Box 14 |

These fields are entered once per employee and apply to all W-2 statements generated for that employee.

## Troubleshooting

### Withholding record not created for a state

- Verify the employee's work location or home state (County field) is correctly assigned.
- Confirm that an Income Tax Jurisdiction exists for that state with a Calculation Method other than None.
- Open **Withholding Information** — this triggers an automatic refresh of applicable jurisdictions.

### Filing Status not editable on state withholding

The state jurisdiction likely uses the **Standard form with inherited filing status** or **Inherited from parent** withholding definition. The Filing Status is inherited from the federal record. Update the federal W-4 Filing Status instead.

### Income Tax Profile not resolving

- Verify that Income Tax Profiles exist for the jurisdiction.
- Confirm that the profile's rule matches the employee's current filing attributes.
- Check the Rules engine setup for the profiles.

## Next steps

- [Set up tax calculations](tax-calculation-setup.md) — jurisdiction and rate configuration
- [About tax calculations](tax-calculation-overview.md) — tax calculation concepts
- [Employee setup](employee-setup.md) — employee configuration overview
