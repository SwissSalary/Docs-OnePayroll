---
title: OnePayroll API reference
description: Learn how to integrate OnePayroll with external systems using REST APIs.
author: zeande
ms.service: dynamics-365-business-central
ms.topic: reference
ms.date: 02/23/2026
---

# OnePayroll API reference

OnePayroll exposes REST APIs for integration with external systems.

## API overview

**What can you do with the API?**
- Read payroll data (employees, paychecks, taxes)
- Create payroll entries
- Submit timesheets
- Update employee information
- Export payroll data
- Integrate with third-party systems
- Automate workflows

**Common integrations:**
- Accounting software (for GL export)
- HRIS systems
- Benefits administration platforms
- Tax filing services
- Time tracking systems
- Mobile apps

## Authentication

### API keys

OnePayroll uses API key authentication:

1. Generate API key in **API Administration**
2. Key format: `Bearer {token}`
3. Include in authorization header

**To generate API key:**
1. Search for **API Keys**
2. Select **New**
3. Name the key (e.g., "Payroll Export Service")
4. Specify permissions (read, write, etc.)
5. Key generated and displayed once (copy and save)
6. Store securely (don't commit to version control)

### OAuth (optional)

For third-party integrations, OAuth available:
- Third-party requests authorization
- User grants permission
- Service receives access token
- Token expires (security best practice)

## REST endpoints

### Employee endpoints

**Get all employees:**
```
GET /api/employees
```

**Get employee details:**
```
GET /api/employees/{employeeId}
```

**Create employee:**
```
POST /api/employees
{
  "name": "John Doe",
  "ssn": "123-45-6789",
  "hireDate": "2024-01-01",
  "payGroup": "WEEKLY"
}
```

**Update employee:**
```
PATCH /api/employees/{employeeId}
{
  "address": "123 Main St"
}
```

### Paycheck endpoints

**Get employee paychecks:**
```
GET /api/employees/{employeeId}/paychecks
```

**Get paycheck detail:**
```
GET /api/paychecks/{paycheckId}
```

Parameters:
- `startDate`: Filter from date
- `endDate`: Filter to date
- `payGroup`: Filter by pay group

### Payroll run endpoints

**Get payroll runs:**
```
GET /api/payrollruns
```

**Get payroll run details:**
```
GET /api/payrollruns/{payrollRunId}
```

**Create payroll run:**
```
POST /api/payrollruns
{
  "payGroup": "WEEKLY",
  "periodStartDate": "2024-12-01",
  "periodEndDate": "2024-12-07"
}
```

### Tax endpoints

**Get tax data:**
```
GET /api/employees/{employeeId}/taxes
```

**Get W-2 data:**
```
GET /api/tax-forms/w2/{year}/{employeeId}
```

### Benefits endpoints

**Get benefits:**
```
GET /api/employees/{employeeId}/benefits
```

**Enroll in benefit:**
```
POST /api/employees/{employeeId}/benefits
{
  "benefitType": "HEALTH",
  "plan": "BRONZE",
  "effectiveDate": "2024-01-01"
}
```

## Response format

### Successful response

```json
{
  "status": 200,
  "data": {
    "employeeId": "E001",
    "name": "John Doe",
    "email": "john@company.com"
  }
}
```

### Error response

```json
{
  "status": 400,
  "error": "Invalid employee ID",
  "details": "Employee E999 not found"
}
```

## Common status codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad request (invalid data) |
| 401 | Unauthorized (bad authentication) |
| 403 | Forbidden (insufficient permissions) |
| 404 | Not found |
| 500 | Server error |

## Rate limiting

**API rate limits:**
- Standard: 1,000 requests per hour per API key
- Increased: 10,000 requests per hour (enterprise)
- Burst: Max 100 requests per minute

**When limit reached:**
- Requests return 429 (Too Many Requests)
- Retry-After header indicates wait time
- Implement exponential backoff

## Pagination

For large result sets:

```
GET /api/employees?page=1&pageSize=50
```

Response includes:
```json
{
  "data": [...],
  "totalRecords": 1234,
  "pageNumber": 1,
  "pageSize": 50
}
```

## Data formats

### Dates

Format: ISO 8601 (YYYY-MM-DD)
```json
"hireDate": "2024-01-15"
```

### Amounts

Format: Decimal with 2 places
```json
"grossPay": 1234.56
```

### SSN

Format: XXX-XX-XXXX
```json
"ssn": "123-45-6789"
```

## Webhooks (optional)

For real-time notifications:

**Available events:**
- `payroll.created` - Payroll run created
- `payroll.posted` - Payroll posted to GL
- `paycheck.issued` - Paycheck generated
- `employee.updated` - Employee record changed

**Subscribe to webhook:**
```
POST /api/webhooks
{
  "url": "https://your-app.com/webhook",
  "events": ["payroll.posted"],
  "secret": "webhook-secret-key"
}
```

## SDK and libraries

**Available SDKs:**
- JavaScript/Node.js
- Python
- C#/.NET
- Java

**Example (JavaScript):**
```javascript
const onepayroll = require('onepayroll-sdk');
const api = onepayroll.createClient({
  token: 'your-api-key'
});

const employees = await api.employees.list();
```

## Error handling

### Common errors

**Invalid API key:**
```json
{
  "status": 401,
  "error": "Invalid or expired API key"
}
```

**Employee not found:**
```json
{
  "status": 404,
  "error": "Employee not found",
  "employeeId": "E999"
}
```

**Invalid data:**
```json
{
  "status": 400,
  "error": "Invalid data",
  "details": [
    "Name is required",
    "Hire date in future not allowed"
  ]
}
```

## Best practices

- **Use API keys securely** - Don't hardcode keys, use environment variables
- **Implement retry logic** - Handle transient errors with exponential backoff
- **Cache data** - Don't fetch same data repeatedly
- **Use pagination** - For large result sets
- **Monitor rate limits** - Track API usage
- **Validate input** - Check data before sending
- **Implement timeouts** - Set reasonable request timeouts
- **Log API calls** - For debugging and auditing
- **Stay current** - Monitor API deprecations

## API versioning

**Current version:** v2.0

**Breaking changes:**
- Major version (v3.0, v4.0, etc.)
- Deprecated 12 months before removal
- Notification sent before deprecation

**Non-breaking changes:**
- Added in current version
- No migration needed

## Documentation and support

- **API docs:** https://developer.onepayroll.com
- **Code samples:** https://github.com/onepayroll/api-examples
- **Support:** api-support@onepayroll.com

## What's next

- **[Employee setup](employee-setup.md)** - Employee configuration
- **[Payroll processing](payroll-runs-process.md)** - Payroll workflow
