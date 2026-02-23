# OnePayroll Documentation Verification Status

**Last Updated:** Session 2 (February 2026)
**Session Status:** Tier 1 complete, Tier 2 (tax articles) complete, payment method articles complete, cross-reference cleanup complete
**Critical Issues Resolved:** All fabricated Vertex/Symmetry/Mock provider references removed; fabricated Employee Bank Account entity removed; stale Serena memories deleted and replaced

## Executive Summary

Two sessions of documentation quality auditing have been completed. Session 1 made partial fixes to 5 Tier 1 articles but left many unverified claims. Session 2 activated Serena, performed comprehensive source code verification, discovered and deleted 6 stale memories, and rewrote 10 articles with fully source-code-verified content. All Vertex/Symmetry/Mock provider references have been removed from the entire documentation set. All fabricated "Employee Bank Account" entity references have been corrected to reflect the actual single-table Employee Payment Method design.

---

## Session 2 Work Completed

### Tier 1 Articles — Fully Verified and Rewritten

**payroll-runs-process.md** — COMPLETELY REWRITTEN
- Removed fabricated "Calculate" action (calculation happens during creation via NewPayroll.Report.al)
- Removed fabricated "Payroll Summary" action (actual: "Payroll Register")
- Removed fabricated "GL Posting Detail" action (actual: "General Ledger Log")
- Removed fabricated "Revert to Open" action (Cancel deletes the run permanently)
- Corrected "Paychecks" to "Paycheck" (singular)
- Corrected status values to Open (0), Approved (1), Posted (6) only
- Corrected full workflow: create → review → approve → post → pay → verify
- Source: PayrollRuns.Page.al, PayrollRun.Table.al, PayrollStatus.Enum.al

**payroll-setup.md** — Minor fix
- Corrected "Approve Approvals" → "Require Approvals" in troubleshooting section
- All 8 fields verified against PayrollSetup.Table.al (Primary Key, Require Approvals field 20, Phone No. Format field 30, General Ledger Posting field 90, G/L Document No. Format field 100, G/L Description Format field 105, Global Pay Unit field 120, Balancing Pay Type No. field 200, Headline Days Ahead field 230)

**check-printing.md** — COMPLETELY REWRITTEN
- Removed fabricated content about check stock, MICR printers, e-checks, sequential numbering
- Corrected: "Computer Check" payment type confirmed in CreatePayrollPayments.Report.al line 47
- Documented actual flow: PaymentManagement.PrintChecks() creates journal lines then runs Codeunit::"Print Checks"

**direct-deposit-setup.md** — COMPLETELY REWRITTEN
- Corrected payment type to "Electronic Payment" (not "ACH")
- Documented file attachment via DocumentManagement.CreateDocumentAttachment()
- Documented "Payment Files" FactBox
- Noted "US EFT PAYROLL" exists in US demo data only

**gl-posting-setup.md** — COMPLETELY REWRITTEN
- Corrected GL aggregation: Account No. + Dimension Set ID (not just Account No.)
- Documented journal template/batch come from Pay Group (not Payroll Setup)
- Source: GlPosting.Codeunit.al ConsolidateEntries() method, PayGroup.Table.al fields 100/105

**payroll-journal.md** — COMPLETELY REWRITTEN
- Fixed critical error: GL entries are created on "post" (not "approval")
- Removed invented manual GL editing workflow
- Documented actual flow: ShouldTransfer → TransferToGenJournal → ShouldPost → Gen. Jnl.-Post
- Source: GlPosting.Codeunit.al Post() method

### Tier 2 Articles — Fully Verified and Rewritten (Tax)

**tax-calculation-overview.md** — COMPLETELY REWRITTEN
- Removed ALL Vertex/Symmetry/Mock provider references
- Documented actual architecture: Income Tax Jurisdictions (National/Regional/Local)
- Documented actual calculation methods: Standard, Simplified, None
- Documented automatic Employee Withholding record creation
- Documented Income Tax Profiles and W-2 box mapping
- Source: IncomeTaxJurisdiction.Table.al, TaxCalculationMethod.Enum.al, IncomeTaxCalculator.Interface.al, StandardCalculator.Codeunit.al, SimpleBracketCalculator.Codeunit.al

**tax-calculation-setup.md** — COMPLETELY REWRITTEN
- Removed fabricated "Tax Provider" and "Tax Calculation tab" on Payroll Setup
- Removed fabricated provider comparison table and credentials setup
- Documented actual setup: Income Tax Jurisdictions page, Calculation Method per jurisdiction
- Documented Income Tax Rates (brackets), Income Tax Setup (standard deduction, per-allowance)
- Documented Withholding Definition options (Standard form, Inherited filing status, Inherited from parent)
- Documented Pay Type W-2 box assignment
- Source: IncomeTaxJurisdiction.Table.al/.Page.al, IncomeTaxSetup.Table.al, IncomeTaxRate.Table.al, WithholdingDefinition.Enum.al, PayType.TableExt.al (US)

**income-tax-setup.md** — COMPLETELY REWRITTEN
- Removed fabricated "Tax tab" on Employee Card
- Documented actual access: "Withholding Information" action on Employee Card
- Documented actual page layout: Federal Withholding, Work State Withholding, Home State Withholding sections
- Corrected field names: Filing Status, Multiple Jobs, Allowances, Withholding Credits, Other Income, Deductions, Additional Withholding
- Corrected filing status "Qualifying Widow(er)" to "Qualifying Surviving Spouse"
- Documented automatic jurisdiction assignment (RefreshApplicableJurisdictions)
- Documented withholding propagation between jurisdictions
- Documented W-2 Information action (Employee W-2 Box 13/14 fields)
- Source: EmployeeWithholding.Table.al, EmployeeWithholdingPart.PageExt.al (US), EmployeeCard.PageExt.al, FilingStatus.Enum.al

**tax-statements.md** — COMPLETELY REWRITTEN
- Removed fabricated "W-2 Report" / "Tax Year Closing" search
- Removed fabricated Forms 941, 940, 1095-B generation (none exist in codebase)
- Documented actual: "Employee W-2 Statement" report (72438575) accessed via "W-2 Statement" action on Employee Card
- Documented full W-2 Box mapping (TaxStatementType.Enum.al — 20 box values)
- Documented W-2 Calculation codeunit aggregation flow
- Documented Employee W-2 fields (Third-Party Sick Pay, Statutory Employee, Retirement Plan, Box 14a, Tipped Occupation Codes)
- Documented 4 W-2 copies (Copy 1, B, C, 2)
- Source: EmployeeW2Statement.Report.al, W2Calculation.Codeunit.al, TaxStatementType.Enum.al, EmployeeW2.TableExt.al

### Cross-Reference Cleanup

**GL terminology** — Fixed across all articles
- "GL journal entries" → "General Journal Lines" in gl-integration-overview.md, glossary.md
- Glossary Payroll Setup description corrected (removed "tax provider")
- "GL journal batch" → "General Journal batch" in payroll-runs-process.md

**Vertex/Symmetry/Mock removed from 6 additional files:**
- key-concepts.md — Updated "Tax Calculation Engine" to "Tax Calculation Method" with correct values
- key-concepts.md — Removed Vertex glossary entry
- errors-troubleshooting.md — Removed fabricated "Tax provider not responding" error
- introduction.md — Updated Tax Calculations section
- us-localization.md — Updated to describe Standard/Simplified methods
- getting-started.md — Updated tax setup steps to reference Income Tax Jurisdictions

### Payment Method Articles — Fully Verified and Rewritten

**check-printing.md** — REWRITTEN (2nd time)
- Removed fabricated "Payment Type: Check" on Employee Payment Method (no such field)
- Removed fabricated "Check Payee Name", "Check Delivery Method", "Use Custom Check Address" fields (none exist)
- Correctly documented: Computer Check selected on Create Payroll Payments report request page
- Source: CreatePayrollPayments.Report.al, PaymentManagement.Codeunit.al, PrintChecks.Codeunit.al

**direct-deposit-setup.md** — REWRITTEN (2nd time)
- Removed fabricated "Bank Accounts" action on Employee Card (does not exist)
- Removed fabricated separate Employee Bank Account entity (does not exist)
- Correctly documented: bank details on Employee Payment Method table (Bank Account No., Bank Identifier Code)
- Correctly documented: "Payment Methods" action on Employee Card
- Source: EmployeePaymentMethod.Table.al, EmployeeCard.PageExt.al

**employee-bank-accounts.md** — COMPLETELY REWRITTEN
- Was 242 lines entirely about fabricated "Employee Bank Account" entity with fabricated fields (Account Number, Bank Name, Account Type: Checking/Savings, Routing Number, Primary Account toggle)
- Repurposed to explain that bank details are stored on Employee Payment Method records
- Documents actual fields: Bank Account No. (80), Bank Identifier Code (85)
- Source: EmployeePaymentMethod.Table.al, EmployeePaymentMethod.Page.al

**payment-methods-overview.md** — COMPLETELY REWRITTEN
- Removed fabricated "Payment Type - Direct Deposit or Check" field
- Removed fabricated "Position" field (actual: Priority)
- Removed fabricated "Check Delivery: Physical or Electronic" scenarios
- Correctly documented: single-table design, Allocation Type (Primary/Fixed Amount/Percentage), Priority field
- Correctly documented: payment type selected at pay time on Create Payroll Payments report
- Source: EmployeePaymentMethod.Table.al, PaymentAllocationType.Enum.al

**payment-methods-setup.md** — COMPLETELY REWRITTEN
- Removed fabricated "Payment Type = Check/Direct Deposit" setup steps
- Removed fabricated "Check Delivery" configuration
- Removed fabricated "Bank Account" selection field
- Correctly documented: Employee Card → Payment Methods → create records with Name, Priority, Allocation Type, Payment Method, Bank Account No., Bank Identifier Code
- Source: EmployeePaymentMethod.Table.al, EmployeePaymentMethods.Page.al, EmployeePaymentMethod.Page.al

**employee-setup.md** — SECTION REWRITTEN
- Replaced "Add bank accounts" section (fabricated "Bank Accounts" action, Account Number, Bank Name, Account Type, Routing Number)
- New section: "Add payment methods" with correct Employee Card → Payment Methods flow
- Fixed troubleshooting: "Bank account not validating" → "Bank details not validating" with correct field names

### Payment Cross-Reference Cleanup (13 files total)

- toc.md — Updated entry text to "Employee bank account information"
- key-concepts.md — Replaced "Employee Bank Account" glossary → "Employee Payment Method" definition
- key-concepts.md — Replaced "Position" glossary → "Priority" definition
- glossary.md — Replaced "Employee Bank Account" → "Employee Payment Method" definition
- employee-overview.md — Updated link text and description
- employee-setup.md — Updated link text and description
- departments-work-locations.md — Updated link text and description
- errors-troubleshooting.md — Fixed "bank account not found" solution to reference Employee Payment Method fields
- errors-troubleshooting.md — Fixed "invalid routing number" solution to reference correct fields
- getting-started.md — Updated "Add Employee Bank Accounts" checklist → "Set up Employee Payment Methods"
- getting-started.md — Rewrote direct deposit and check setup steps
- getting-started.md — Fixed 2 "bank account" references in best practices
- introduction.md — Updated 3 references (feature list, Employees concept, Payment Methods concept, setup step 6)

### Serena Memory Update (Payment Methods)

Deleted stale `payment_method_architecture` memory (contained entirely fabricated two-table design with Employee Bank Account, Payment Type enum, Check Delivery Method enum, Position field, Bank Accounts action).

Created accurate replacement documenting:
- Single-table Employee Payment Method (72439653) with all 17 verified fields
- PaymentAllocationType enum (Primary/Fixed/Percentage)
- UI pages (list 72439909, card 72439910 with 3 groups)
- Employee Card has only "Payment Methods" action (no "Bank Accounts")
- Payment type selected at pay time on CreatePayrollPayments report
- Explicit "What Does NOT Exist" section

Deleted 6 stale memories describing nonexistent Vertex/Symmetry/Mock providers:
- tax_calculation_architecture
- vertex_tax_calculation_implementation
- symmetry_tax_calculation_implementation
- vertex_engine_symmetry_alignment
- vertex_test_framework_implementation
- native_tax_calculation_implementation

Created 1 accurate replacement memory:
- income_tax_architecture — documents the actual Income Tax Calculator interface, TaxCalculationMethod enum (None/Standard/Simplified), jurisdiction-based architecture

Remaining memories: project_overview, payment_method_architecture, suggested_commands, income_tax_architecture

---

## Fabricated Content Removed This Session

| Fabrication | Where Found | Actual Code Reality |
|-------------|-------------|---------------------|
| "Calculate" action on Payroll Runs | payroll-runs-process.md | Calculation happens during creation via NewPayroll.Report.al |
| "Payroll Summary" action | payroll-runs-process.md | Actual: "Payroll Register" action |
| "GL Posting Detail" action | payroll-runs-process.md | Actual: "General Ledger Log" action |
| "Revert to Open" action | payroll-runs-process.md | "Cancel" deletes the run permanently |
| Vertex tax provider | 8+ articles | Does not exist in codebase |
| Symmetry tax provider | 8+ articles | Does not exist in codebase |
| Mock tax provider | 5+ articles | Does not exist in codebase |
| "Tax Provider" on Payroll Setup | tax-calculation-setup.md | Calculation Method is per Income Tax Jurisdiction |
| "Tax Calculation" tab on Payroll Setup | tax-calculation-setup.md | No such tab exists |
| "Tax" tab on Employee Card | income-tax-setup.md | Access via "Withholding Information" action |
| "W-2 Report" or "Tax Year Closing" search | tax-statements.md | Access via "W-2 Statement" action on Employee Card |
| Form 941 generation | tax-statements.md, tax-reports.md | Not in codebase |
| Form 940 generation | tax-statements.md, tax-reports.md | Not in codebase |
| Form 1095-B generation | tax-statements.md, tax-reports.md | Not in codebase |
| GL entries created on "approval" | payroll-journal.md | GL entries created on "post" |
| GL aggregation by Account No. only | gl-posting-setup.md | By Account No. + Dimension Set ID |
| Manual GL journal editing | payroll-journal.md | Not a feature |
| "ACH" payment type | direct-deposit-setup.md | Actual: "Electronic Payment" |
| Check stock, MICR, e-checks | check-printing.md | Not in codebase |
| "Employee Bank Account" table | employee-bank-accounts.md + 10 files | Does not exist; bank details are on Employee Payment Method |
| "Payment Type" on Employee Payment Method | payment-methods-overview/setup.md + others | No such field; payment type selected on Create Payroll Payments report |
| "Check Payee Name" field | check-printing.md, Serena memory | Does not exist anywhere |
| "Check Delivery Method" field | check-printing.md, payment-methods-setup.md | Does not exist anywhere |
| "Account Type: Checking/Savings" | employee-bank-accounts.md, employee-setup.md | Does not exist anywhere |
| "Routing Number" field | employee-bank-accounts.md, employee-setup.md | Actual field: "Bank Identifier Code" |
| "Bank Accounts" action on Employee Card | direct-deposit-setup.md, employee-setup.md | Actual: "Payment Methods" action |
| "Position" field on payment methods | payment-methods-overview.md, key-concepts.md | Actual field: "Priority" |
| Separate bank account entity | Serena memory, 10+ articles | Single-table design on Employee Payment Method |

---

## Known Remaining Work

### High Priority — Articles Still Needing Verification

**tax-reports.md** — HIGH RISK
- References Form 941, 940, 941-X, 1095-B generation as OnePayroll features
- None of these forms exist in the codebase
- Needs complete rewrite to document only actual reporting capabilities

**us-localization.md** — MEDIUM RISK
- Large article (400+ lines) with many unverified claims about FICA, FUTA, SUI
- Claims about "IRS Method 1/Method 2" now partially corrected (Standard/Simplified)
- W-4 section references need verification against updated income-tax-setup.md
- FICA/Medicare details may describe generic IRS rules as OnePayroll features

**faq.md** — MEDIUM RISK
- May contain references to fabricated features
- Needs systematic review

### Medium Priority — Remaining Articles (Tiers 3-4)

Approximately 30+ articles have not been verified against source code. These include:
- Benefits articles (benefits-setup.md, benefits-assignments.md, etc.)
- Employee management articles (employee-overview.md content beyond links, etc.)
- Pay type articles (pay-types-overview.md, pay-types-setup.md, etc.)
- Payment export articles (payment-export.md — has generic "routing numbers" references, acceptable)
- Reporting articles (payroll-reports.md, etc.)

### Low Priority — Cosmetic/Style

- Some articles may still use inconsistent formatting
- Cross-reference labels could be more descriptive

---

## Source Code Reference Map

Key files verified during this session:

| Source File | Verified Claims |
|------------|----------------|
| PayrollRuns.Page.al | All actions: Payroll Entries, Payment Entries, Paycheck, Save in Dossier, Post, Pay, Cancel, Approve, Reverse Paycheck, Cancel Reversal, Payroll Register, General Ledger Log |
| PayrollRun.Table.al | Status field, Pay Group reference |
| PayrollStatus.Enum.al | Open (0), Approved (1), Posted (6) |
| PayrollSetup.Table.al | 8 fields verified (Require Approvals, Phone No. Format, GL Posting, etc.) |
| GlPosting.Codeunit.al | Full GL flow: CopyToBuffer → WriteEntries → ConsolidateEntries (Account+DimSet) → Post |
| JournalPostingType.Enum.al | No Transfer, Manual Posting, Automatic Posting, Always Ask |
| CreatePayrollPayments.Report.al | Payment types: Computer Check, Electronic Payment |
| PaymentManagement.Codeunit.al | Electronic Payment → CreatePaymentFile(), Computer Check → PrintChecks() |
| EmployeePaymentMethod.Table.al | 17 fields verified: Employee No., Code, Start/End Date, Allocation Type, Allocation, Name, Address fields, Currency Code, Bank Account No., Bank Identifier Code, Payment Method, Priority |
| EmployeePaymentMethods.Page.al | List page 72439909, repeater fields, CardPageId |
| EmployeePaymentMethod.Page.al | Card page 72439910, 3 groups: General, Transfer, Communication |
| PaymentAllocationType.Enum.al | Primary (0), Fixed (1, 'Fixed Amount'), Percentage (2) |
| PaymentMethod.TableExt.al | Adds SwS Default Bank Payment Type to standard BC Payment Method |
| EmployeeCard.PageExt.al | Payment Methods action confirmed, NO Bank Accounts action |
| TaxCalculationMethod.Enum.al | None (core), Standard + Simplified (US extension) |
| IncomeTaxCalculator.Interface.al | CalculateWithholding method signature |
| IncomeTaxJurisdiction.Table.al | Level, Code, Calculation Method, Pay Type No., Rounding Method, Report-to Jurisdiction |
| EmployeeWithholding.Table.al | Employee No., Jurisdiction ID, Inactive, Income Tax Profile |
| EmployeeWithholding.TableExt.al (US) | Filing Status, Multiple Jobs, Allowances, Withholding Credits, Other Income, Deductions, Additional Withholding |
| FilingStatus.Enum.al | Single, MFJ, MFS, HoH, Qualifying Surviving Spouse |
| WithholdingDefinition.Enum.al | Standard Form, Standard Form - Inherit Filing Status, Inherited from Parent |
| EmployeeW2Statement.Report.al | Report 72438575, Word layout, 4 copies |
| TaxStatementType.Enum.al | 20 W-2 box values |
| EmployeeW2.TableExt.al | Third-Party Sick Pay, Statutory Employee, Retirement Plan, Box 14a, Tipped Occupation Codes |
| PayGroup.Table.al | Gen. Journal Template (100), Gen. Journal Batch (105) |
| StandardCalculator.Codeunit.al | W-4 style calculation flow |
| SimpleBracketCalculator.Codeunit.al | Simplified bracket lookup |
| EmployeeWithholdingManager (US) | Automatic jurisdiction assignment: Federal + Work State + Home State |

---

## Session Metadata

| Property | Session 1 | Session 2 |
|----------|-----------|-----------|
| Articles Fixed | 5 partial | 16 complete rewrites + 13 cross-ref fixes |
| Hallucinations Found | 15+ | 30+ additional |
| Hallucinations Fixed | 5-6 partial | All identified items fully fixed |
| Cross-Reference Fixes | 3 | 19 additional files/sections |
| Stale Memories | Not addressed | 7 deleted, 2 created |
| Source Files Verified | ~5 | 27+ |

---

## Next Steps

1. **tax-reports.md** — Rewrite to remove fabricated Form 941/940/1095-B generation
2. **us-localization.md** — Full verification of FICA/FUTA/SUI claims
3. **Remaining 35+ articles** — Systematic source code verification
4. **faq.md** — Review for remaining fabricated content
