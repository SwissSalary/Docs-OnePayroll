# Documentation Reading Guide for Next Session

**This guide tells you how to read the verification documents in the right order.**

---

## If You Have 5 Minutes ⏱️

Read this file (you're reading it now), then skip to "Start Here For Next Session" below.

---

## If You Have 15 Minutes ⏱️

1. **This file** (5 min) - Understanding the task
2. **QUICK_REFERENCE.md** (10 min) - Quick summary of what's been done

Then go to "Start Here For Next Session."

---

## If You Have 30 Minutes ⏱️

1. **This file** (5 min)
2. **QUICK_REFERENCE.md** (10 min)  
3. **VERIFICATION_README.md** (15 min) - Detailed status

Then start work using NEXT_SESSION_INSTRUCTIONS.md

---

## If You Have 1+ Hours ⏱️ (Recommended)

Read in this order:

1. **QUICK_REFERENCE.md** (10 min)
   - What's been done, what hasn't
   - Top 10 unverified claims

2. **VERIFICATION_README.md** (15 min)
   - Detailed explanation of hallucinations
   - Why each fix was incomplete
   - What needs to happen next

3. **NEXT_SESSION_INSTRUCTIONS.md** (30-45 min)
   - Complete methodology
   - How to verify without assumptions
   - Tools and techniques
   - Phase-by-phase work plan

4. **VERIFICATION_CHECKLIST_TEMPLATE.md** (5-10 min)
   - Copy this template for each article
   - Use it to track your verification work

5. **CLAUDE.md** (if needed)
   - OnePayroll coding conventions
   - Architectural patterns
   - File naming standards

---

## Document Map

```
c:\Users\ZEAN\REPOS\Docs\OnePayroll\
├── QUICK_REFERENCE.md
│   What: 2-minute summary of current state
│   Who: Everyone (read first)
│   When: Session start
│
├── VERIFICATION_README.md
│   What: Detailed documentation of current issues
│   Who: Next agent starting actual work
│   When: After quick reference, before instructions
│
├── NEXT_SESSION_INSTRUCTIONS.md
│   What: Complete methodology for verification auditing
│   Who: Next agent doing the actual verification
│   When: Main working document for entire next session
│
├── VERIFICATION_CHECKLIST_TEMPLATE.md
│   What: Template for tracking verification of each article
│   Who: Next agent verifying articles
│   When: Copy and use for each article verified
│
├── CLAUDE.md
│   What: OnePayroll-specific conventions and architecture
│   Who: If you don't understand OnePayroll patterns
│   When: Look up specific questions
│
└── onepayroll/
    ├── payroll-setup.md (partially verified ⚠️)
    ├── gl-posting-setup.md (partially verified ⚠️)
    ├── payroll-runs-process.md (partially verified ⚠️)
    ├── check-printing.md (partially verified ⚠️)
    ├── direct-deposit-setup.md (partially verified ⚠️)
    └── [40+ more articles - NOT YET REVIEWED]
```

---

## Start Here For Next Session

### Step 0: Prerequisites (5 minutes)
Before doing ANY verification work:

```
☐ You have access to OnePayroll source code at: c:\Users\ZEAN\REPOS\Apps\OnePayroll\
☐ You have Serena tools activated
☐ You have read QUICK_REFERENCE.md
☐ You understand the problem: Many claims in articles are NOT verified against source code
```

### Step 1: Understand Current State (10 minutes)

Read this section of VERIFICATION_README.md:
- "What This Means"
- "Tier 1 Articles - Verification Status"
- "Critical Remaining Hallucinations Identified"

After reading, you should understand:
- ✅ What hallucinations HAVE been found and partially fixed
- ❌ What hallucinations REMAIN unfixed
- ⚠️ What claims are PARTIALLY VERIFIED but not fully

### Step 2: Get Your Methodology (20-30 minutes)

Read Phase 0 through Phase 4 of NEXT_SESSION_INSTRUCTIONS.md:
- Phase 0: Session Startup
- Phase 1: Project Activation
- Phase 2: Verification Methodology  
- Phase 3: Priority Work Order
- Phase 4: The Complete Verification Workflow

You now know HOW to verify without making assumptions.

### Step 3: Pick Your First Task (5 minutes)

From NEXT_SESSION_INSTRUCTIONS.md Phase 3, choose:

**Best option:** Start with Priority 1, Article 1:
```
Article: payroll-runs-process.md (GL posting section)
Task: Verify GL posting workflow steps are accurate
Estimated time: 1-2 hours
```

Why this first?
- Foundational for understanding GL posting
- Unlocks understanding for other articles
- Clear source code to verify against

### Step 4: Start Verification (1+ hour)

1. **Copy the VERIFICATION_CHECKLIST_TEMPLATE.md**
2. **Open the article** you're verifying
3. **Follow Phase 4** of NEXT_SESSION_INSTRUCTIONS.md
4. **Complete the checklist** as you work through each claim
5. **Document findings** in the checklist
6. **Make article changes** based on verification results

### Step 5: Update README (15 minutes)

After completing each article:

```
1. Update VERIFICATION_README.md:
   - Mark article as "✅ VERIFIED" or "⚠️ NEEDS REVISION"
   - List hallucinations found and fixed
   - Document code citations used
   
2. Save completed checklist for review
   
3. Note findings for next article
```

---

## Daily Workflow for Next Session

### Morning (Start)
1. Open VERIFICATION_README.md
2. Review what was done yesterday
3. Read "Priority Work Order" in NEXT_SESSION_INSTRUCTIONS.md
4. Pick next article from checklist

### Midday (Work)
1. Open article in editor
2. Copy verification checklist template
3. Work through Phase 4 methodology
4. Verify claims against source code
5. Complete checklist

### End of Day  
1. Make changes to article based on verification
2. Update VERIFICATION_README.md with findings
3. Document next article's priorities
4. Save your checklist

---

## Example: Complete One Article

Here's what verifying ONE article should look like:

```
START: 10:00 AM
└─ Open VERIFICATION_CHECKLIST_TEMPLATE.md
└─ Copy template, fill in article name
└─ Read article completely (10 min)

EXTRACT CLAIMS: 10:10 AM
└─ Go through line-by-line
└─ List each factual claim
└─ Document in checklist
└─ ~15 claims identified

VERIFY FIRST CLAIM: 10:25 AM
└─ "Payroll Setup contains field X"
└─ Search: mcp_oraios_serena_find_symbol("PayrollSetup")
└─ Read: PayrollSetup.Table.al
└─ Check: Does field X exist?
└─ Document: Yes/No with line number
└─ (~15 min per claim)

VERIFY CLAIMS 2-5: 10:40-11:25 AM
└─ Repeat process for each claim
└─ Update checklist
└─ Note any hallucinations found

SUMMARY: 11:25 AM
└─ Review checklist
└─ List changes needed
└─ Document: "5 verified, 2 unverified, 1 hallucination found"

APPLY FIXES: 11:30-12:00 PM  
└─ Edit article based on findings
└─ Remove unverified claims
└─ Add citations for verified claims
└─ Remove hallucinations

FINAL CHECK: 12:00-12:10 PM
└─ Re-read modified article
└─ Ensure changes are correct
└─ Update README
└─ Save checklist

DONE: 12:10 PM
└─ One article fully verified
└─ Ready to move to next article
```

---

## Red Flags: Stop and Re-Read Instructions

If you find yourself doing ANY of these, **STOP** and re-read NEXT_SESSION_INSTRUCTIONS.md:

🛑 **"This seems reasonable so I'll assume it's correct"**
   → Re-read Phase 2 (Verification Methodology)

🛑 **"I'll just remember what the code said instead of citing it"**
   → Re-read Phase 4 (Citation Format)

🛑 **"This field probably defaults to X"**
   → Re-read Phase 6 (Red Flags)

🛑 **"I'll just check one code file instead of tracing the whole workflow"**
   → Re-read Phase 4 (Verifying Workflows)

🛑 **"I don't need to update the checklist, I'll remember"**
   → Re-read Phase 5 (Tools and Techniques)

---

## Success Metrics for Next Session

You'll know you're doing it right when:

✅ Every article change has a corresponding checklist entry  
✅ Every major claim in articles has a source code citation  
✅ You frequently say "I need to read more code to verify"  
✅ You've deleted hallucinations without hesitation  
✅ Field names match source code exactly  
✅ You've run grep_search multiple times to verify terminology  
✅ You cite specific line numbers when removing claims  

---

## How to Get Help if Stuck

**If stuck during verification:**

1. Stop and re-read NEXT_SESSION_INSTRUCTIONS.md Phase 6 (Red Flags)
2. Check VERIFICATION_CHECKLIST_TEMPLATE.md for examples
3. Search QUICK_REFERENCE.md for similar claim verification
4. Look at completed checklists from other articles

**If stuck finding code:**

1. Use `mcp_oraios_serena_search_for_pattern` (Phase 5 of instructions)
2. Search in specific directory (e.g., `core/app/src/System/`)
3. Look for similar feature names in other files

**If uncertain whether to delete something:**

1. Document it as "UNVERIFIED" instead of deleting immediately
2. Note in checklist: "Needs investigation"
3. Leave for next session to verify more thoroughly
4. Better to be conservative than to delete by mistake

---

## Questions This Guide Answers

**Q: Where do I start?**  
A: Read QUICK_REFERENCE.md, then come back here and follow "Start Here For Next Session"

**Q: What if I don't understand the task?**  
A: Start with VERIFICATION_README.md "What This Means" section

**Q: How do I verify without making assumptions?**  
A: Use the No-Assumption Checklist in NEXT_SESSION_INSTRUCTIONS.md Phase 2

**Q: How do I know when I'm done with an article?**  
A: Complete the VERIFICATION_CHECKLIST_TEMPLATE.md and mark as "✅ VERIFIED"

**Q: What if I find a hallucination?**  
A: Document it in your checklist, then delete it from the article with a citation explaining why

**Q: Should I fix all 48 articles in one session?**  
A: No. Focus on Priority 1-3 work in NEXT_SESSION_INSTRUCTIONS.md. That's enough for one session.

**Q: Where do I save my progress?**  
A: Update VERIFICATION_README.md after each article. Save checklists in a "CHECKLISTS" folder.

---

## Final Reminders

1. **Read NEXT_SESSION_INSTRUCTIONS.md completely** before starting work
2. **Use the checklist template** for every article you verify
3. **Cite your sources** - always include file and line numbers
4. **Ask for help** rather than guessing
5. **Document your findings** so the next session can build on your work
6. **Trust the process** - it's designed to prevent the assumptions that led to hallucinations

---

**You've got this. Now go read the instructions and verify carefully.**

Good luck! 🎯
