---
title: Self-Service Portal security
description: Learn about the security measures in place for the OnePayroll Employee Self-Service Portal, including authentication, session management, and verification tools.
author: LasseHerget
sws.service: onepayroll
sws.topic: overview
sws.date: 05/01/2026
---

# Self-Service Portal security

Learn how the Self-Service Portal keeps employee data secure.

## Responsible disclosure

Security is a core part of the Self-Service Portal. Employees access sensitive payroll data through it, and that responsibility is taken seriously.

If you discover a vulnerability in the Self-Service Portal, report it responsibly by contacting us directly rather than disclosing it publicly.

> [!NOTE]
> The Self-Service Portal does not persist employee or payroll business data of its own; it connects to external data sources and only stores short-lived operational state, such as server-side session data.

## Third-party verification tools

You can use independent security assessment tools to verify the security posture of the Self-Service Portal or any other service that handles sensitive data:

| Tool | What it tests |
|------|---------------|
| [Mozilla Observatory](https://observatory.mozilla.org/) | Web application security |
| [SSL Labs](https://www.ssllabs.com/ssltest/) | Transport Layer Security |
| [Security Headers](https://securityheaders.com) | HTTP response headers |
| [CSP Evaluator](https://csp-evaluator.withgoogle.com/) | Content-Security-Policy |

## Authentication and session management

Sign-in is handled exclusively through Microsoft Entra External ID using OpenID Connect. The Self-Service Portal does not manage end-user credentials directly.

Sessions have the following properties:

- Sessions are stored server-side and accessed through secure, HTTP-only cookies.
- Sessions expire after 10 hours.
- Sessions are bound to the user's IP address at the time of sign-in. If a request arrives from a different IP address, the portal treats it as unauthenticated.

## See also

- [Self-Service Portal overview](self-service-overview.md)
- [Troubleshoot sign-in issues](self-service-troubleshooting-sign-in.md)
