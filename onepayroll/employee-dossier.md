---
title: Employee dossier and documents
description: Learn how to manage employee documents using the dossier system in OnePayroll, including document types, uploading, and automatic qualification extraction.
author: zeande
sws.service: onepayroll
sws.topic: concept
sws.date: 02/23/2026
---

# Employee dossier and documents

OnePayroll includes a document management system for organizing and storing employee-related files. The **Employee Dossier** provides a structured, hierarchical view of all documents associated with an employee, organized by document type.

## Document types

Document types define the categories used to organize employee documents. You configure document types to create a classification system that suits your organization's needs.

### Document type fields

| Field | Description |
|-------|-------------|
| **Code** | A unique code to identify the document type (for example, TAX, CERT, ID) |
| **Description** | A descriptive name for the document type |
| **Parent Document Type** | Set a parent document type to create a hierarchy |
| **Locked** | When turned on, prevents deletion of documents of this type. A parent type can also lock its children. |
| **Manager Access** | Controls whether managers can view documents of this type |
| **Employee Access** | Controls whether employees can view documents of this type through self-service |
| **Qualification** | Links this document type to a qualification code. When set, uploading a document triggers automatic qualification extraction. |
| **Report ID** | Associates a report with this document type (used by the Save to Dossier feature) |

### Hierarchical structure

Document types support parent-child relationships, creating a tree structure in the dossier view. For example:

```
├── Identification
│   ├── Government ID
│   ├── Driver's License
│   └── Passport
├── Tax Documents
│   ├── W-4
│   └── State Tax Forms
├── Certifications
│   ├── Professional Licenses
│   └── Training Certificates
└── Paychecks
```

### To set up document types

1. Search for **Document Types**
2. Create document types and set the **Parent Document Type** field to build the hierarchy
3. Set the **Locked**, **Manager Access**, and **Employee Access** flags as needed
4. Optionally set a **Qualification** code to enable automatic qualification extraction

## Employee documents

Employee documents are the actual files stored in the system. Each document is linked to an employee and classified under a document type.

### Document fields

| Field | Description |
|-------|-------------|
| **Employee No.** | The employee the document belongs to |
| **Type** | The document type code |
| **Name** | The file name or description |
| **Available On** | The date the document becomes available |
| **Content** | The stored file (stored as BC Media) |

### Upload a document

1. Open the **Employee Card** for the employee
2. Select **Dossier** from the actions
3. In the **Employee Dossier** page, select a document type from the tree
4. In the **Employee Documents** FactBox, select **Upload**
5. Browse and select the file to upload
6. The file is stored and associated with the selected document type

Documents can also be uploaded programmatically or through the self-service portal if **Employee Access** is turned on for the document type.

### Download or view a document

1. In the **Employee Dossier**, select the document type
2. In the **Employee Documents** FactBox, select the document
3. Select **Download** to save a copy locally, or use the **Document Preview** FactBox to view it inline

## Employee Dossier page

The **Employee Dossier** page provides a consolidated view of all documents for an employee.

- The left side shows the document type hierarchy as an indented tree, with the number of stored documents next to each type
- The **Employee Documents** FactBox on the right shows the actual documents for the selected type
- The **Document Preview** FactBox displays a preview of the selected document

### To open the dossier

1. Open the **Employee Card**
2. Select **Dossier** from the actions

## Save paychecks to dossier

You can batch-save generated paychecks as PDF documents into employee dossiers.

### To save paychecks from a payroll run

1. On the **Payroll Runs** page, select the payroll run
2. Select **Save in Dossier** from the paycheck actions
3. On the request page, set:
   - **Document Type** — select the document type for paychecks
   - **Available On** — set the date the documents become available
4. Select **OK**

OnePayroll generates a PDF paycheck for each employee in the payroll run and saves them as employee documents in their dossiers.

## Automatic qualification extraction

When a document type has a **Qualification** code assigned, uploading a document of that type triggers AI-powered qualification extraction. The system automatically:

1. Reads the document content (certificates, diplomas, licenses)
2. Extracts qualification details such as description, institution, and dates
3. Creates an **Employee Qualification** record linked to the uploaded document

This feature requires Copilot capabilities to be enabled.

## Related information

- [Set up employees](employee-setup.md)
- [Copilot features](copilot-features.md)
- [Process payroll runs](payroll-runs-process.md)
