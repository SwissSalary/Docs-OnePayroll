---
title: Employee snapshots and historical tracking
description: Learn how to track historical employee data changes using OnePayroll's snapshot system.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: overview
ms.date: 02/23/2026
---

# Employee snapshots and historical tracking

OnePayroll's snapshot system tracks historical changes to employee records for audit trail, compliance, and analysis.

## Snapshots overview

**What is a snapshot?**
A snapshot is a point-in-time record of employee data on a specific date. OnePayroll captures snapshots:
- At hire date
- At termination
- When pay type/rate changes
- When tax information changes
- At period-end (optional)

**Why snapshots matter:**
- **Audit trail** - Proves what was effective when
- **Compliance** - Supports wage/hour audits, discrimination claims
- **Payroll accuracy** - Refers to snapshot data, not current employee record
- **Historical analysis** - Tracks employee changes over time

## Creating snapshots

### Automatic snapshots

OnePayroll automatically creates snapshots:

1. **Hire date** - When employee created and dated as hired
2. **Major changes** - Effective date of significant changes:
   - Pay type assignment
   - Pay rate change
   - Department reassignment
   - Tax status change
3. **Termination** - When employee terminated with end date

### Manual snapshots

If needed, manually create snapshots:

1. Open employee
2. Select **Create Snapshot**
3. Set **Effective Date**
4. OnePayroll captures current employee data
5. Attached to that date

## Snapshot contents

**Each snapshot includes:**
- Employee basic info (name, SSN, address)
- Employment dates (hire, termination)
- Pay group assignment
- Pay type and rate information
- Department assignment
- Tax information (W-4, state, local)
- Deductions and benefits elections
- Garnishments active

## Viewing snapshots

**To view employee snapshots:**

1. Open employee
2. Select **Snapshots** section
3. View list of all snapshots for employee
4. Select snapshot date to view details
5. See all data that was effective on that date

**Viewing by period:**
- Select payroll period
- OnePayroll shows snapshot effective for that period
- Used for calculating payroll

## Payroll snapshots

### Payroll run snapshots

When payroll is calculated:
1. OnePayroll determines snapshot date (usually period end date)
2. Retrieves all employee snapshots for that date
3. Uses snapshot data (not current employee record)
4. Calculates payroll based on snapshot

### Benefits:**
- If employee record changed after payroll processed, payroll unchanged
- Historical data preserved
- Does not affect completed payroll

### Example:
```
Payroll period: 12/1-12/15/2025
Period snapshot date: 12/15/2025
Employee changed pay type on 12/20/2025
Payroll uses 12/15 snapshot (old pay type)
Change doesn't affect already-processed payroll
```

## Historical analysis

### Tracking changes over time

**Use snapshots to analyze:**
- Employee tenure (hire/termination timeline)
- Compensation history (pay rate changes, increases)
- Department moves (career progression)
- Tax status changes (filing status, dependents)
- Benefit elections (enrollment changes)

### Example queries:
- "Show all employees hired in 2024"
- "Show pay rate history for employee"
- "Show departments with highest turnover"

## Compliance and audits

### Wage and hour audits

If audited for wage/hour violations:
1. Snapshots prove what pay types and rates were in effect
2. Proves deductions applied correctly
3. Shows any changes made
4. Provides documentation

### Discrimination/EEOC claims

Snapshots support defense against claims:
- Shows who was employed when
- Proves job assignments, pay rates
- Timeline of changes (or lack thereof)
- Documented decisions

### Gap audits

Snapshots help identify:
- Employees who should have been covered (benefits, garnishments, etc.)
- Periods where data missing
- Any process gaps

## Data retention

**Snapshot retention:**
- Minimum: As long as employee employed (typically 7 years after termination minimum)
- Better: Permanent (low storage cost, good for historical queries)
- Archive: Move older snapshots to archive storage annually

## Troubleshooting

**"Snapshot not showing recent change"**
- Snapshots capture at discrete times
- If change made after snapshot, won't be in that snapshot
- Create new snapshot manually if needed

**"Wrong data used for payroll"**
- Verify snapshot date selected for payroll
- Check if snapshot created correctly
- Review snapshot contents vs. employee record

## Best practices

- **Regular snapshots** - At minimum: hire, changes, termination
- **Document changes** - Note reason for snapshot when created manually
- **Review period snapshots** - Before processing payroll, verify correct snapshot
- **Archive periodically** - Move old snapshots to archive for storage optimization
- **Test data** - Don't use snapshots from test/demo environments in production

## What's next

- **[Employee setup](employee-setup.md)** - Employee configuration
- **[Employee overview](employee-overview.md)** - Employee record structure
