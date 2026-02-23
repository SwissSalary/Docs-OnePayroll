# Instructions for Next Copilot Session: Documentation Verification Audit

**CRITICAL PRINCIPLE:** NO ASSUMPTIONS. Every claim in OnePayroll documentation must be grounded in either:
1. OnePayroll source code (AL files in `c:\Users\ZEAN\REPOS\Apps\OnePayroll\`)
2. Business Central (BC) official documentation (MD files in `C:\Users\ZEAN\REPOS\Microsoft\Dynamics365SMB-Docs\business-central`)

**If it's not in code or BC docs, it doesn't exist.**

---

## Phase 0: Session Startup

### What You're Inheriting
- 48-article OnePayroll documentation set
- Tier 1 (5 articles) has received initial fixes but verification is incomplete
- Tiers 2-4 (43 articles) are completely unverified
- Known hallucination categories documented in `VERIFICATION_README.md`

### Your Role
You are NOT writing articles. You are VERIFYING existing articles against source code and removing hallucinations.

### Key Resources
```
OnePayroll Source Code: c:\Users\ZEAN\REPOS\Apps\OnePayroll\
├── core/app/src/              ← Core functionality (primary source of truth)
├── layers/us/app/src/         ← US-specific features
├── layers/ch/app/src/         ← Switzerland-specific features
└── build/                      ← Pipeline configuration

BC Documentation: C:\Users\ZEAN\REPOS\Microsoft\Dynamics365SMB-Docs\business-central

Serena Tools: Use for fast code navigation and verification
grep_search: For finding terminology and references
```

---

## Phase 1: Project Activation & Memory Review

### 1.1 Activate the OnePayroll Project
```
mcp_oraios_serena_activate_project: "Apps/OnePayroll"
mcp_oraios_serena_check_onboarding_performed
```

### 1.2 Read Existing Memories
```
mcp_oraios_serena_list_memories
mcp_oraios_serena_read_memory: "OnePayroll Architecture"
mcp_oraios_serena_read_memory: "Tax Calculation Architecture"
mcp_oraios_serena_read_memory: "Payment Method System"
```

### 1.3 Review Session State
```
Read: VERIFICATION_README.md (this directory)
This tells you:
- What has been done
- What hallucinations remain  
- Priority order for next work
```

---

## Phase 2: Verification Methodology

### Critical Rule: The Source Code → Documentation Chain

**For ANY claim about OnePayroll functionality:**

```
CLAIM: "Feature X works by doing Y"
    ↓
VERIFICATION REQUIRED:
    1. Find the source code implementing Feature X
    2. Read the actual implementation
    3. Trace the code path for behavior Y
    4. Cite the specific file + line numbers in the article
    5. Only then document the behavior
    
Do NOT:
  - Assume "it seems reasonable"
  - Use general BC knowledge to infer behavior
  - Trust previous documentation
  - Skip steps to save time
```

### Method: The No-Assumption Checklist

For each article, use this checklist:

```
ARTICLE: [article name]

☐ CLAIM 1: [User-visible feature description]
  └─ ☐ Found source code implementing this? (file + method/table name)
  └─ ☐ Read the implementation code?
  └─ ☐ Traced the execution path?
  └─ ☐ Can cite specific line numbers?
  └─ ☐ Does article text match code behavior exactly?
  └─ ☐ Are there any unsourced details? (Mark for removal)

☐ CLAIM 2: [Next feature]
  └─ [same checklist]

☐ TERMINOLOGY AUDIT:
  └─ ☐ Are all field names exact matches from source?
  └─ ☐ Are all UI element names correct (not invented)?
  └─ ☐ Do page/table names match actual objects?

☐ WORKFLOW AUDIT:
  └─ ☐ Are steps actually required, or assumed?
  └─ ☐ Do "Save" instructions exist? (Remove them - BC auto-saves)
  └─ ☐ Are default values documented? (Verify in source)

☐ RESULT:
  └─ ☐ No unverified claims remain
  └─ ☐ All major features have code citations
  └─ ☐ Ready for publication review
```

---

## Phase 3: Priority Work Order

### Priority 1: Fix Tier 1 Remaining Issues (2-3 hours)
**Current State:** Initial fixes applied but verification incomplete

**Articles Needing Completion:**

#### 1. payroll-runs-process.md (GL posting section)
**Known Issues:**
- Lines 203-204: Talk about "converting entries to GL journal lines" - NOT VERIFIED
- Need to verify: CreatePayrollPayments.Report.al and GL posting codeunits

**Verification Steps:**
```
1. Find: core/app/src/Payroll/PayrollCalculation/CreatePayrollPayments.Report.al
2. Read: How does this report actually work?
3. Find: GL posting codeunit (likely PayrollPosting.Codeunit.al or similar)
4. Read: What is the actual GL posting behavior?
5. Document: Exact workflow based on code, with citations

Source Code Citation Required:
- "When GL Posting is set to Manual Posting, [WHAT EXACTLY HAPPENS]"
  Reference: CreatePayrollPayments.Report.al line XXX, XXX method
```

#### 2. check-printing.md
**Known Issues:**
- Mentions "Computer Check" bank payment type - UNVERIFIED
- Mentions Paycheck report - partially verified but not end-to-end

**Verification Steps:**
```
1. Find: BankPaymentType enum (likely in core/app/src/Payments/)
2. Verify: Does "Computer Check" value actually exist?
3. Find: Paycheck report implementation
4. Follow: How does "Pay" action use Computer Check type?
5. Document: Actual check printing workflow

Source Code Citation Required:
- "To print checks, select Computer Check from..."
  Reference: BankPaymentType.Enum.al line YYY shows Computer Check exists
  Reference: PayrollRuns.Page.al line ZZZ shows Pay action implementation
```

#### 3. direct-deposit-setup.md
**Known Issues:**
- "US EFT PAYROLL" data exchange mentioned but NOT READ

**Verification Steps:**
```
1. Search: core/app/src/ for "US EFT PAYROLL"
2. Find: The actual DataExchangeDefinition
3. Read: What does this data exchange do?
4. Verify: File creation and attachment mechanism
5. Document: Actual workflow based on code

Source Code Citation Required:
- "Direct deposit creates a file named [EXACT NAME]"
  Reference: [File].al line XXX shows DataExchangeDefinition configuration
```

#### 4. gl-posting-setup.md
**Known Issues:**
- GL aggregation claim: "one journal line per GL account" - UNVERIFIED
- Journal Posting Type enum behavior - described but not verified

**Verification Steps:**
```
1. Find: GL posting codeunit
2. Find: How entries are aggregated before GL posting
3. Find: How many journal lines are created per GL account
4. Read: Journal Posting Type enum and its behavior
5. Document: Actual GL posting aggregation logic

Source Code Citation Required:
- "GL posting aggregates by GL account because..."
  Reference: PayrollPosting.Codeunit.al line XXX shows aggregation method
  Reference: Code demonstrates exactly one journal line per account
```

#### 5. payroll-setup.md
**Known Issues:**
- Payroll Setup table field list not fully verified
- "Balancing Pay Type No." field - verify it exists

**Verification Steps:**
```
1. Open: core/app/src/System/PayrollSetup.Table.al
2. List: All actual fields in this table
3. Verify: Field names and their purposes
4. Compare: Against what article claims
5. Document: Update article to match exactly

Source Code Citation Required:
- Every field mentioned should match PayrollSetup.Table.al exactly
```

---

### Priority 2: Tax Calculation Verification (Tier 2) - 4 Articles (4-6 hours)

**Critical:** Tax documentation has legal/compliance implications

**Articles:**  
- tax-calculation-overview.md
- tax-calculation-setup.md  
- income-tax-setup.md
- tax-statements.md

**Hallucination to Fix:**
- Previous session documented Vertex and Symmetry as available providers
- Source code shows ONLY Mock provider exists
- Vertex/Symmetry were REMOVED from codebase

**Verification Methodology:**

```
1. Find: Tax calculation interface and implementations
   Search: core/app/src/Payroll/TaxCalculation/
   
2. For each article, list TAX PROVIDERS it documents:
   Current claim: "OnePayroll supports Vertex, Symmetry, Mock"
   
3. Verify each provider:
   ☐ Find source code file
   ☐ Check if it exists and is NOT marked as deprecated
   ☐ Read actual implementation
   
4. Create TRUTH TABLE:
   | Provider | Exists? | Verified Code? | Line Reference |
   |----------|---------|----------------|-----------------|
   | Mock     | ?       | ?              | ?               |
   | Vertex   | ?       | ?              | ?               |
   | Symmetry | ?       | ?              | ?               |
   
5. Fix articles:
   - Remove any provider documentation where row shows "No"
   - Update each provider section with code citations
   - Add note if provider was removed (and when)
```

---

### Priority 3: Systematic Terminology Fixes (All Articles) - 2-3 hours

**Issue:** Multiple articles still use "GL journal" terminology (unverified as incorrect)

**Verification Required:**
```
Before replacing terminology, verify BOTH:
1. BC Official Terminology: What does BC documentation call this?
   Search: https://learn.microsoft.com/ for exact terminology
   
2. OnePayroll Magazine: When talking about BC objects, what names does code use?
   Search: core/app/src/ for how they reference GL objects in comments
   
Result: Create terminology standard:
   - Must match BC official terminology
   - Must match OnePayroll source code usage
```

**Examples to verify:**
- ✅ "General Journal Line" - verified as BC standard table name
- ⚠️ "GL journal entry" - verify this is standard BC term (not invented)
- ⚠️ "GL posting" - verify BC calls it this (not "GL transfer" or other)

---

### Priority 4: Remaining Tiers 3-4 (43 articles) - 8-12 hours

Once Priorities 1-3 complete, systematically work through remaining articles using the No-Assumption Checklist.

**Tier 3 Setup Guides (8 articles):**
- Pay types setup
- Pay cycles setup
- Employee setup
- Benefits setup
- Payment methods setup
- Garnishments setup
- Deductions setup
- Tax setup details

**Tier 4 Reference Articles (30+ articles):**
- Reports documentation
- Field reference
- Table reference
- Feature reference

---

## Phase 4: The Verification Workflow (For Each Article)

### Step 1: Open Article in Editor
```
Read: c:\Users\ZEAN\REPOS\Docs\OnePayroll\onepayroll\[article-name].md
```

### Step 2: Extract All Claims
```
Go through line-by-line and create list:

CLAIM 1: "The Payroll Setup page contains field X"
CLAIM 2: "When you click button Y, it opens dialog Z"
CLAIM 3: "Pay types can be of category A or B"
... (list every factual claim)
```

### Step 3: Verify Each Claim in Source Code
```
For each claim:

CLAIM 1: "The Payroll Setup page contains field X"
→ Search Serena: find_symbol("PayrollSetup", relative_path="core/app/src/")
→ Read: The table definition
→ Verify: Field "X" actually exists
→ Document: Line number where field is defined
→ Accept/Reject: Does article match exactly?
```

### Step 4: Document Findings
```
Create note for each article:

✅ VERIFIED: Field names match source (PayrollSetup.Table.al line 45-78)
✅ VERIFIED: GL Posting enum field matches Journal Posting Type
❌ UNVERIFIED: "Headline Days Ahead" field - NOT in source code
❌ INVENTED: "Balancing GL Account" field - doesn't exist
→ ACTION: Remove unverified claim from article
```

### Step 5: Apply Fixes
```
For each hallucination found:
- Delete unverified sentences/paragraphs
- Add source code citations for verified claims
- Update field names/values to match source exactly
- Run grep_search to ensure no remnants of removed hallucination
```

### Step 6: Verification Audit
```
Final check before marking complete:
☐ No unverified claims remain
☐ All major claims have source code citations  
☐ All field/page/table names match source
☐ No "seems reasonable" explanations
☐ No fabricated UI elements
☐ No invented features
```

---

## Phase 5: Tools and Techniques

### Finding Code (Serena)
```
MOST EFFICIENT:
1. mcp_oraios_serena_find_symbol("FeatureName", relative_path="core/app/src/")
2. mcp_oraios_serena_get_symbols_overview(relative_path="core/app/src/System/")
3. mcp_oraios_serena_search_for_pattern("pattern", relative_path="core/app/src/")

SEARCH PATTERNS:
- Table definitions: "table [0-9]+ \"TableName\""
- Enums: "enum [0-9]+ \"EnumName\""
- Events: "OnAfter|OnBefore|EventPublisher"
- Fields: "field\\([0-9]+; \"FieldName\""
```

### Verifying Exact Names
```
BEFORE claiming "Field X exists":
1. mcp_oraios_serena_find_symbol("[FieldName]", include_body=true)
2. Read actual field definition
3. Confirm exact spelling, type, properties
4. Cite line number in article

NEVER:
- Assume spelling from memory
- Use similar-sounding field names
- Guess at default values
```

### Verifying Workflows
```
TO VERIFY "When user clicks X, Y happens":
1. Find: Page that contains button X
2. Read: Button action implementation
3. Find: Code that runs when button is clicked
4. Trace: Full execution path
5. Document: Exact behavior from code reading
6. Do NOT infer what should happen - read what ACTUALLY happens
```

### Checking BC Documentation
```
OFFICIAL BC DOCS: https://learn.microsoft.com/en-us/dynamics365/business-central/
Use for:
- Standard GL account terminology
- Standard payment workflows
- Standard Journal Line behavior
- Data Export formats

Tools available: mcp_microsoftdocs_microsoft_docs_search
```

---

## Phase 6: Red Flags (STOP and VERIFY)

If you see ANY of these in an article, **STOP and verify**:

```
🚩 "Generally" / "Typically" / "Usually"
   → NOT verified as required behavior
   → Search source code for actual requirement

🚩 "Can be" / "May be" / "Could be"
   → Indicates multiple options mentioned
   → Verify each option actually exists in code

🚩 "Should" / "Must" / "Required"
   → Claims about business logic
   → Verify these are enforced in code (not just recommendations)

🚩 Example tables with account numbers
   → Localization-specific, not helpful
   → Remove unless documenting actual configuration screen

🚩 "For example" followed by specific values
   → Are these real examples from code?
   → Or made-up illustrations?
   → If made-up, remove or label as "For example (not real)"

🚩 References to dialogs/buttons by name
   → Verify dialog/button actually exists
   → Verify exact name matches (case-sensitive)

🚩 "Default" value mentioned
   → MUST verify in source code
   → Don't assume defaults

🚩 "Save" instruction
   → BC auto-saves, remove these always
   → No manual save needed (unless explicitly coded)

🚩 Multi-step wizards or workflows
   → Trace EVERY step in source code
   → Verify each step actually exists and is required
```

---

## Phase 7: Documentation Standards

### Citation Format

When you verify a claim, add inline citation:

```markdown
❌ BAD (no citation):
"The Payroll Setup page contains a General Ledger Posting field"

✅ GOOD (with citation):
"The Payroll Setup page contains a General Ledger Posting field that controls 
how payroll entries post to the general ledger. 
(See: PayrollSetup.Table.al, field 'General Ledger Posting' - Journal Posting Type enum)"
```

### Removing Hallucinations

When you find unverified content:

```markdown
❌ DELETE this entire sentence:
"You must enter GL accounts for all pay types before posting payroll, 
otherwise the system will display an error."

(Unless you find error-handling code that enforces this)

✅ REPLACE with verified version:
"GL accounts are used to post payroll entries to the General Ledger 
when General Ledger Posting is enabled in Payroll Setup."

(Cite: PayrollSetup.Table.al - General Ledger Posting field)
```

---

## Phase 8: Session Completion Checklist

Before ending your session, complete:

```
☐ VERIFICATION_README.md has been updated with:
  - Articles verified in this session
  - Hallucinations found and fixed
  - Code citations for major changes
  - Remaining known hallucinations documented

☐ All Priority 1 or Priority 2 work is complete (or marked in-progress)

☐ No articles published with unverified claims

☐ grep_search confirms terminology is standardized:
  - "General Journal Line" (not "GL journal line")
  - "GL Account" / "General Ledger Account"  
  - "General Ledger Posting" (when referencing the setting)

☐ Code citations documented for major features:
  - Tax providers
  - Payment methods
  - GL posting
  - Check printing
  - Direct deposit

☐ "Save" instructions removed from all articles

☐ Next session priorities documented in README
```

---

## Key Principles for Success

```
1. EVIDENCE FIRST
   If it's not in code or BC docs, DELETE IT.
   Don't try to preserve unverified content.

2. CITE EVERYTHING
   Add source code file:line references for major claims.
   Make it easy for next reviewer to verify your work.

3. STOP AT UNCERTAINTY
   If you can't find code to verify a claim, STOP.
   Ask user, don't guess.
   Document as "UNVERIFIED - needs investigation"

4. NO ASSUMPTIONS
   EVER. Read the code.
   Don't infer behavior from similar features.

5. TRACE WORKFLOWS END-TO-END
   Don't just read one method.
   Follow the full execution path.
   Find where the business logic is actually enforced.

6. VERIFY NAMES EXACTLY
   Table name: Copy from code, don't remember it
   Field name: Case-sensitive match required
   Button name: Exact match from page definition
   Enum value: Character-for-character match

7. DOCUMENT YOUR PROCESS
   Update README with findings
   Leave breadcrumbs for next session
   Make it easy to build on previous work
```

---

## Questions to Ask If Stuck

```
STUCK: "Is field X really in table Y?"
→ mcp_oraios_serena_find_symbol("Y", include_body=true)
→ Read entire table definition
→ Grep for field name

STUCK: "Does provider X actually exist?"
→ mcp_oraios_serena_search_for_pattern("[ProviderName]Impl|[ProviderName]Calculator")
→ Does pattern match anything?
→ If yes, read implementation
→ If no, provider doesn't exist → DELETE mention

STUCK: "What is the actual GL posting behavior?"
→ Find method that creates GL entries
→ Read every line
→ Trace what calls it
→ Find where aggregation happens
→ Document actual behavior

STUCK: "Is this just BC knowledge or OnePayroll-specific?"
→ Is there a OnePayroll-specific implementation? (Yes: use it)
→ Does OnePayroll override BC behavior? (Check in app/src/Finance/)
→ If OnePayroll doesn't override, use BC docs but cite both
```

---

## Success Definition

**Session 2 is successful when:**

1. All Tier 1 claims are grounded in source code (with citations)
2. All Tier 2 (tax) hallucinations are resolved
3. Terminology is standardized throughout (verified, not assumed)
4. No unverified claims remain in Priority 1-3 articles
5. VERIFICATION_README.md documents all work and findings
6. Next session has clear priorities based on what still needs verification

**Do NOT aim to:** Fix all 48 articles in one session. That's impossible and will lead to shortcuts.

**DO aim for:** Complete verification of Tiers 1-2 (9 articles) with full source code grounding.

---

## Important Reminders

- **Read the CLAUDE.md file** for OnePayroll-specific coding conventions
- **Check memories regularly** to understand architecture patterns
- **Cite your sources** - every major claim should have a code reference
- **When in doubt, ask** - better to pause than to assume
- **Use Serena tools** - they're fast and reliable for code navigation
- **Trust the user** - they've identified the problem correctly. Your job is to fix it systematically.

Good luck. The goal is a documentation set where EVERY claim can be verified in the source code.
