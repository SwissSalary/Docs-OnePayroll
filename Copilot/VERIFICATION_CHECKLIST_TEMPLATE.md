# Verification Checklist Template

**Purpose:** Use this template for each article you verify. Copy and complete one for each article.

---

## ARTICLE VERIFICATION CHECKLIST

**Article Name:** _________________________  
**File Path:** onepayroll/____________________________.md  
**Verification Date:** _______________  
**Verified By:** _______________

### Pre-Verification
- [ ] Read entire article
- [ ] Identified all major claims (see list below)
- [ ] Created list of verification tasks
- [ ] Located relevant source code files

### Claim Verification

#### CLAIM 1: _________________________________

**Article Text:**  
> [Exact quote from article]

**Verification Required:**
- [ ] Found source code file?  
  **File:** ____________________________  
  **Location:** Lines _____ to _____

- [ ] Read the implementation?  
  **Summary:** ________________________________________________________

- [ ] Verified claim matches code exactly?  
  **Match:** ☐ Yes ☐ No ☐ Partially  
  **Issue (if any):** ________________________________________________________

- [ ] Can cite specific code reference?  
  **Citation:** ____________________________  
  **Line number(s):** ____________________

**Result:**
- [ ] ✅ Verified - claim is correct
- [ ] ⚠️ Partially Verified - some details unconfirmed
- [ ] ❌ Incorrect - article text doesn't match code behavior
- [ ] 🗑️ Hallucination - feature doesn't exist in code

**Action to Take:**
```
[Describe what needs to be changed in the article]
```

---

#### CLAIM 2: _________________________________

**Article Text:**  
> [Exact quote from article]

**Verification Required:**
- [ ] Found source code file?  
  **File:** ____________________________

- [ ] Read the implementation?  
  **Summary:** ________________________________________________________

- [ ] Verified claim matches code exactly?  
  **Match:** ☐ Yes ☐ No ☐ Partially

- [ ] Can cite specific code reference?  
  **Citation:** ____________________________

**Result:**
- [ ] ✅ Verified
- [ ] ⚠️ Partially Verified  
- [ ] ❌ Incorrect
- [ ] 🗑️ Hallucination

**Action to Take:**
```
[Describe what needs to be changed]
```

---

#### CLAIM 3: _________________________________

**Article Text:**  
> [Exact quote from article]

**Verification Required:**
- [ ] Found source code file?  **File:** ____________________________

- [ ] Read the implementation?  **Summary:** ________________________________________________________

- [ ] Verified claim matches code exactly?  **Match:** ☐ Yes ☐ No ☐ Partially

- [ ] Can cite specific code reference?  **Citation:** ____________________________

**Result:**
- [ ] ✅ Verified
- [ ] ⚠️ Partially Verified
- [ ] ❌ Incorrect
- [ ] 🗑️ Hallucination

**Action to Take:**
```
[Describe what needs to be changed]
```

---

### Additional Verification Items

#### Terminology Audit
- [ ] All field names match source code exactly (case-sensitive)
- [ ] All page/table/object names are correct
- [ ] No invented page elements mentioned
- [ ] Uses standard BC terminology (verified against BC docs)

**Issues found:**
```
[List any terminology mismatches]
```

#### Workflow Audit  
- [ ] Each step in workflow actually exists in code
- [ ] Each step is actually required (not assumed)
- [ ] No "Save" instructions present (BC auto-saves)
- [ ] Default values documented? (verify in source)

**Issues found:**
```
[List any workflow issues]
```

#### Field Names & Types
- [ ] All field names verified in source code
- [ ] Field types match source (e.g., "Enum" vs "Code")
- [ ] Default values are correct (if mentioned)
- [ ] Field descriptions match actual ALObjects

**Issues found:**
```
[List any field mismatches]
```

### Hallucinations Found

#### Hallucination 1:
**What article claims:** _________________________________________________

**What actually exists:** _________________________________________________

**Source code evidence:**  
File: __________________________  
Lines: __________________________  

**Action:** ☐ Delete ☐ Revise ☐ Update with citation

---

#### Hallucination 2:
**What article claims:** _________________________________________________

**What actually exists:** _________________________________________________

**Source code evidence:**  
File: __________________________  
Lines: __________________________  

**Action:** ☐ Delete ☐ Revise ☐ Update with citation

---

### Summary of Changes Required

```
DELETIONS (unverified claims to remove):
1. ___________________________________________________________________
2. ___________________________________________________________________
3. ___________________________________________________________________

REVISIONS (claims to correct):
1. ___________________________________________________________________
2. ___________________________________________________________________
3. ___________________________________________________________________

CITATIONS (claims needing source code references):
1. ___________________________________________________________________
2. ___________________________________________________________________
3. ___________________________________________________________________

VERIFICATIONS (new links to add):
1. ___________________________________________________________________
2. ___________________________________________________________________
3. ___________________________________________________________________
```

### Final Verification

- [ ] All major claims have been checked against source code
- [ ] No unverified claims remain in article
- [ ] All hallucinations identified and documented
- [ ] Changes are ready to apply
- [ ] Source code citations prepared

### Result

**Overall Status:**
- [ ] ✅ VERIFIED - Ready for publication
- [ ] ⚠️ NEEDS REVISION - Changes required before publication
- [ ] ❌ FAILED - Multiple hallucinations, needs extensive rewrite
- [ ] ⏳ PENDING - Still investigating some claims

**Confidence Level:**
- [ ] High (90%+ claims verified)
- [ ] Medium (50-90% claims verified)  
- [ ] Low (less than 50% verified)

**Next Steps:**
```
1. ___________________________________________________________________
2. ___________________________________________________________________
3. ___________________________________________________________________
```

**Reviewer Notes:**
```
[Any important findings or observations for next session]
```

---

## How to Use This Checklist

1. **Copy this template** for each article you verify
2. **Complete it as you work** through each claim
3. **Save completed checklists** in a "CHECKLISTS" folder for review
4. **Reference them** when making article changes
5. **Update README** with summary of all checklists completed

---

## Example (Completed)

**Article Name:** payroll-setup.md  
**File Path:** onepayroll/payroll-setup.md  
**Verification Date:** Feb 24, 2026  
**Verified By:** [Agent Name]

### Claim Verification

#### CLAIM 1: "Payroll Setup contains General Ledger Posting field"

**Article Text:**  
> The General Ledger Posting field determines how payroll entries are posted to GL.

**Verification Required:**
- [x] Found source code file?  
  **File:** PayrollSetup.Table.al  
  **Location:** Lines 1-200

- [x] Read the implementation?  
  **Summary:** Table field 10 is "General Ledger Posting" of type Enum, references Journal Posting Type enum

- [x] Verified claim matches code exactly?  
  **Match:** ☐ Yes [x] No ☐ Partially  
  **Issue:** Article says "determines how entries are posted" - code shows it controls whether GL posting happens at all

- [x] Can cite specific code reference?  
  **Citation:** PayrollSetup.Table.al field 10  
  **Line number:** 78

**Result:**
- [x] ✅ Verified - claim is correct
- [ ] ⚠️ Partially Verified
- [ ] ❌ Incorrect
- [ ] 🗑️ Hallucination

**Action to Take:**
```
No changes needed - claim verified
```

---

## Tips for Effective Verification

✅ **DO:**
- Be specific about line numbers
- Quote exact text from both article and code
- Document your search process
- Note when "seems reasonable" but isn't verified
- Mark claims as partial if some details unconfirmed

❌ **DON'T:**
- Skip verification because you're confident
- Move on after reading just one method
- Assume field names without checking
- Trust memory of how something works
- Mark as verified if only partially checked
