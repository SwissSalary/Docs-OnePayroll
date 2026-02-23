---
title: About payment methods
description: Learn how to configure employee payment distribution methods (direct deposit and check payments) in OnePayroll.
author: SwissSalary
ms.service: dynamics-365-business-central
ms.topic: overview
ms.date: 02/23/2026
---

# About payment methods

Payment methods define how employees receive their wages: direct deposit to bank accounts or physical/electronic checks.

## Payment method overview

A **payment method** specifies:
- **Payment Type** - Direct Deposit or Check
- **Allocation Method** - How pay is split across accounts
- **Position/Priority** - Order of allocation

### Payment types

**Direct Deposit (ACH)**
- Electronic funds transfer to bank account
- Funds reach employee's bank 1-3 business days
- Fastest, most common method
- Requires valid bank account information

**Check**
- Physical or electronic check
- Employee deposits at bank
- Processing time: 1-5 business days (physical), immediate (electronic)
- Requires payroll GL account setup

### Allocation methods

When an employee has multiple bank accounts, allocation determines how net pay is distributed:

**Primary**
- All pay to primary account
- Simplest scenario (single bank account)
- No split needed

**Fixed Amount**
- Specific dollar amount to each account
- Example: $2,000 to Checking, remainder to Savings
- Useful for automatic savings plans

**Percentage**
- Percentage of net pay to each account
- Example: 80% to Checking, 20% to Savings
- Adjusts automatically with pay changes

### Position-based ordering

When multiple allocations exist, position determines order:
- Position 1 = Primary (processes first)
- Position 2 = Secondary (processes second)
- Position 3+ = Additional (if any)

## Common scenarios

**Scenario 1: Single direct deposit**
```
Payment Method: Direct Deposit
Account: Checking (Primary)
Allocation: 100% of net pay
```

**Scenario 2: Split direct deposit**
```
Payment Method: Direct Deposit
Account 1: Checking (Primary) - $2,000
Account 2: Savings (Secondary) - Remainder
Allocation: Fixed amount to Checking, rest to Savings
```

**Scenario 3: Check payment**
```
Payment Method: Check
Delivery: Physical check or electronic
Frequency: With regular payroll
```

**Scenario 4: Mixed (checks + direct deposit)**
```
Payment Method 1: Check (Position 1) - $500
Payment Method 2: Direct Deposit (Position 2) - Remainder to Checking
Allocation: $500 by check, rest by direct deposit
```

## Next steps

- **[Set up payment methods](payment-methods-setup.md)** - Configure payment delivery
- **[Set up direct deposit](direct-deposit-setup.md)** - Direct deposit processing
- **[Check printing](check-printing.md)** - Check payment configuration
