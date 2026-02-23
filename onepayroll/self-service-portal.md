---
title: Employee self-service portal
description: Learn how employees and managers use the OnePayroll self-service portal for payroll information and benefits management.
author: zeande
ms.service: dynamics-365-business-central
ms.topic: overview
ms.date: 02/23/2026
---

# Employee self-service portal

OnePayroll includes a self-service portal for employees to access payroll information and manage benefits.

## Self-service portal overview

**What is the self-service portal?**
A web-based interface where employees can:
- View paychecks and earnings
- Access W-2 and tax documents
- Update personal information
- Enroll in benefits
- Submit deduction changes
- View benefits information

**Benefits:**
- Reduces HR/Payroll admin work
- Employees always have current info
- Immediate access (24/7)
- Self-service reduces support tickets

## Employee features

### Viewing paychecks

Employees can:
1. Log into portal
2. Select **Paychecks** or **Payroll**
3. View:
   - Gross pay
   - All deductions itemized
   - All taxes withheld
   - Net pay
   - Payment method/date
4. Download/print paycheck stub

### YTD earnings

Access year-to-date information:
- Total gross earnings (all pay types)
- Total deductions (itemized)
- Total taxes withheld (by type)
- Year-to-date net pay

### Tax documents

View and download:
- W-2 (when available, typically Jan)
- Payroll tax summary
- Earnings verification letters

### Personal information

Employees can update:
- Address
- Phone
- Email
- Emergency contacts
- Direct deposit information
- **Note:** Some fields may be restricted to HR only

### Benefits enrollment

During open enrollment:
1. View available benefits
2. Review plan options
3. Compare costs
4. Enroll/change elections
5. View ongoing elections

### Deduction changes

Some deductions can be changed mid-year:
- Dental/vision deduction amounts
- FSA elections
- Parking/transit benefits
- Other flexible benefits

## Manager features

**Managers can:**
- View team paychecks (summary)
- Approve timesheets (if integrated)
- View department payroll costs
- Access team compensation info
- Approve deduction changes

**Manager dashboard:**
- Team overview
- Recent payroll summary
- Upcoming payroll dates
- Open items requiring action

## Access and security

### Logging in

**Employee access:**
1. Go to OnePayroll self-service portal URL
2. Enter employee ID/SSN
3. Enter password
4. Two-factor authentication (optional, recommended)
5. Access portal

### Password management

- Initial password sent by HR/Payroll
- Employees can change password
- Forgot password recovery via email

### Security features

- **Encryption:** All data encrypted in transit
- **MFA:** Optional multi-factor authentication
- **Session timeout:** Auto-logout after inactivity
- **Audit trail:** All access logged
- **Role-based access:** Employees see only their data, managers see team data

## Benefits management

### Open enrollment

During open enrollment period:

**Employees:**
1. Log into portal
2. Access **Benefits** section
3. View plan options and costs
4. Compare coverage
5. Select elections
6. Confirm enrollment
7. Submit

**Deadline:** All enrollments due by specified date

### Mid-year changes

If allowed, employees can change:
- Coverage levels
- Plan selection
- Dependent coverage

**Qualifying events:**
- Birth/adoption
- Marriage/divorce
- Loss of other coverage
- Status change

### Benefits documents

Employees can access:
- Plan summaries (SPD - Summary Plan Description)
- Coverage certificates
- Billing statements
- Claims information (if integrated)

## Payroll-related updates

### Direct deposit changes

Employees can update:
1. Add new bank account
2. Change allocation (% split)
3. Remove account
4. Change primary account

**Timing:** Changes effective next payroll (or specified date)

### Deduction updates

Update deductions:
- Pre-tax: 401k, FSA, health insurance
- Post-tax: Additional items
- Garnishments: Cannot self-manage (HR managed)

## Manager workflows

### Timesheet approval

If timesheets integrated:
1. Employees submit timesheets
2. Manager reviews
3. Manager approves/rejects
4. Payroll processes approved timesheets

### Payroll review

Before payroll posts:
1. Manager reviews team payroll
2. Notes any discrepancies
3. Approves or flags issues
4. Payroll proceeds with approval

### Vacation accrual

Manager can view/approve:
- Accrued vacation balance
- Vacation usage
- Year-end carryover

## Reporting and analytics

### Employee statements

Available reports:
- Year-to-date earnings summary
- Monthly paycheck history
- Tax withholding detail
- Benefit enrollment history

### Manager reports

Available reports:
- Team headcount and costs
- Payroll variance (budget vs. actual)
- Benefits participation rates
- Compensation equity analysis

## Mobile access

**Portal is mobile-optimized:**
- View paychecks on phone
- Update direct deposit
- Enroll in benefits
- Submit timesheets

Not a full-featured mobile app, but responsive design for phones/tablets.

## Implementation

### Portal setup

To enable self-service portal:

1. Configure **Self-Service Setup** in OnePayroll
2. Enable specific features (paychecks, benefits, etc.)
3. Set access permissions
4. Configure email notifications
5. Test with pilot group
6. Roll out to all employees

### Communication

When launching portal:
1. Send all employees login credentials
2. Provide instructions (quick start guide)
3. Schedule training webinars
4. Create FAQ document
5. Open IT help desk support
6. Monitor for support tickets

## Troubleshooting

**"Employee can't log in"**
- Verify account activated in portal
- Reset password if needed
- Check if employee status is active
- Verify two-factor auth if enabled

**"Paycheck not showing"**
- Verify payroll processed and posted
- Check if employee in that payroll
- Confirm GL posting completed
- May have 1-2 day delay for data sync

**"Benefits enrollment not showing"**
- Verify open enrollment period active
- Check if benefits configured in OnePayroll
- Confirm employee eligible for benefits
- May need portal refresh/cache clear

## Best practices

- **Promote usage** - Encourage self-service to reduce support
- **Secure credentials** - Don't share passwords, use secure reset
- **Responsive design** - Test on mobile and desktop
- **Training on launch** - Good training reduces support needs
- **Regular updates** - Keep employees informed of opportunities (FSA deadline, etc.)
- **Backup access** - Ensure HR can help employees if tech issues
- **Monitor access** - Audit who accesses what data

## What's next

- **[Employee setup](employee-setup.md)** - Employee configuration
- **[Benefits setup](benefits-setup.md)** - Benefits configuration
- **[Direct deposit setup](direct-deposit-setup.md)** - Payment configuration
