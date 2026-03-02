---
title: Copilot features
description: Learn about AI-powered features in OnePayroll, including employee creation from resumes and automatic qualification extraction from documents.
author: zeande
sws.service: onepayroll
sws.topic: concept
sws.date: 02/23/2026
---

# Copilot features

OnePayroll includes AI-powered features built on Business Central's Copilot platform. These features use large language models to automate data entry tasks that would otherwise require manual work.

## Available Copilot capabilities

OnePayroll registers two Copilot capabilities:

| Capability | Description |
|------------|-------------|
| **Suggest Employee** | Creates a new employee record from a resume or CV |
| **Extract Qualification** | Extracts qualification information from uploaded employee documents |

> [!NOTE]
> Copilot features require Copilot to be enabled in your Business Central environment. Check with your administrator if these features are not available.

## Create an employee from a resume

The **Suggest Employee** feature uses AI to parse a resume or CV and extract employee information, creating a new employee record with minimal manual data entry.

### To create an employee from a resume

1. Search for **Employees** to open the Employee List
2. Select **New with Copilot** from the actions
3. In the **Suggest Employee** dialog, do one of the following:
   - **Type or paste** CV text directly into the input area
   - **Attach** a document file (PDF, Word document, or image) using the **Attach** action
4. Select **Generate**
5. Review the **Suggested Employee Fields** page:
   - Each row shows the **Field Name**, the **Suggested Value**, and a **Confidence** score (0–100)
   - Fields with confidence 80 or above are automatically selected
   - Use the **Select** checkbox to include or exclude individual fields
   - Use **Select All** to include all suggested fields
6. Select **OK** to create the new employee record with the selected field values

> [!TIP]
> After creating the employee with Copilot, review the employee card to verify the extracted information and fill in any fields that couldn't be extracted from the resume (for example, pay group, payment methods, and payables).

### Supported input formats

- Plain text (pasted CV content)
- PDF documents
- Word documents (.docx)
- Images

## Extract qualification from documents

When you upload a document to an employee's dossier and the document type has a **Qualification** code assigned, OnePayroll automatically extracts qualification details using AI.

### How it works

1. Upload a document (such as a certificate, diploma, or license) to the employee's dossier using a document type that has a qualification code set
2. OnePayroll automatically runs the extraction process
3. The AI reads the document and extracts:
   - **Description** of the qualification
   - **Institution** that issued it
   - **From Date** — when the qualification started or was issued
   - **To Date** — when the qualification expires (if applicable)
4. An **Employee Qualification** record is automatically created, linked to the uploaded document

The extraction runs as a background task when possible. If background processing is not available, it runs synchronously when the document is uploaded.

### To set up automatic qualification extraction

1. Search for **Document Types**
2. Select the document type used for certificates or qualifications
3. Set the **Qualification** field to the appropriate qualification code
4. When employees upload documents of this type, qualification information is automatically extracted

## Related information

- [Employee dossier and documents](employee-dossier.md)
- [Set up employees](employee-setup.md)
