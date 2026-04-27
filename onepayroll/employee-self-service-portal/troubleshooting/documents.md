---
title: Troubleshooting documents
description: Common challenges with documents in the OnePayroll Employee Self-Service Portal and how to resolve them.
author: LasseHerget
sws.service: onepayroll
sws.topic: troubleshooting
sws.date: 04/27/2026
---

# Troubleshooting Documents

Find answers to common document-related questions in the Employee Self-Service Portal.

---

## Document missing

### When

An employee reports that a specific document is not visible in the Self-Service Portal, even though it has been uploaded in Business Central.

### Why

The Self-Service Portal only exposes a document when **both** of the following conditions are met:

1. The document type has "Employee Access" enabled.
2. The document's "Available On" date is today or in the past.

If either condition is not satisfied, the document will not appear in the Self-Service Portal.

### Steps

1. Check that "Employee Access" is enabled for the document type:
   a. Open "Document Types" in Business Central.
      > Tip: You can click on the lens in the top right corner to open the search.
   b. Find the document type that the missing document belongs to.
   c. Verify that the "Employee Access" toggle is set to "Yes".
      > If it is set to "No", employees will never see documents of this type in the Self-Service Portal,
      > regardless of any other settings. Be careful when changing this setting, as it affects all documents of this type for all employees.
      > If you only want to make a specific document available, keep "Employee Access" set to "No"
      > and assign a different type *(with "Employee Access" enabled)* to that document instead.

2. Check the "Available On" date of the document:
   a. Open the card of the affected employee.
      > Tip: You can click on the lens in the top right corner to search for "Employees".
      > In that list you can simply double click on the desired employee to open the employee card.
   b. Navigate to the employee's documents
      > In the "Home" tab of the employee card, click on "Dossier" in the ribbon at the top.
   c. Find the document in question and check the "Available On" field.
      > If the date is set to a future date, the document will not appear until that date is reached. <br/>
      > If you cannot find the "Available On" field:
      > - Click `ctrl + alt + F1` to open the "Page Inspection" <br/>
      > - Click on the document to show the details of that line in the "Page Inspection" <br/>
      > - Press `ctrl + F` to search for "Available On" in the document details.

---

## Document preview is not working on mobile

### When

An employee reports that a document cannot be previewed when opening it through the Self-Service Portal on a mobile device.

### Why

Not all mobile browsers support inline PDF preview.
The Self-Service Portal renders document previews using the browser's built-in PDF viewer, which is not available in all mobile browsers.

### Steps

1. Click on the `Open in new Tab` icon in the top right corner of the document preview.
2. Download the document and open it in a dedicated PDF reader app on the device.
3. Use a different browser.
