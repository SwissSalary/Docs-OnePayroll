---
title: Security — Employee Self-Service Portal
description: An overview of the security measures in place for the OnePayroll Employee Self-Service Portal.
author: LasseHerget
sws.service: Employee Self-Service Portal
sws.topic: security
sws.date: 24/04/2026
---

# Responsible Disclosure
Security is not an afterthought in OnePayrolls Employee Self-Service Portal. <br/>
Employees access sensitive data through it, and we treat that responsibility seriously.

If you discover a vulnerability in the Employee Self-Service Portal, please report it responsibly by contacting us directly rather than disclosing it publicly.
We take all reports seriously.

---

# Third-party verification tools

We encourage administrators and security teams to run independent assessments,
not just for OnePayrolls Employee Self-Service Portal but for any service that handles sensitive data.

We can recommend the use of the following tools for quick tests:

| Tool | What it tests |
|------|---------------|
| [Mozilla Observatory](https://observatory.mozilla.org/) | Web Application Security |
| [SSL Labs](https://www.ssllabs.com/ssltest/) | Transport Layer Security |
| [Security Headers](https://securityheaders.com) | HTTP Response Headers |
| [CSP Evaluator](https://csp-evaluator.withgoogle.com/) | Content-Security-Policy |

---

# Authentication & Session Management

Sign-in is handled exclusively through Microsoft Entra External ID using OpenID Connect.
The Self-Service Portal itself does not manage credentials.

The sessions...
- ... are stored server-side.
- ... are accessed through secure cookies.
- ... always expire after 10 hours.
- ... are bound to the user's IP address upon authentication.
  > If a session is accessed from a different IP address, the Self-Service Portal treats the request as unauthenticated.
