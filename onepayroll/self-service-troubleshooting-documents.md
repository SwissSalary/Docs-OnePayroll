---
title: Troubleshoot document issues
description: Learn how to resolve common document-related issues in the OnePayroll Employee Self-Service Portal.
author: LasseHerget
sws.service: onepayroll
sws.topic: troubleshooting
sws.date: 05/01/2026
---

# Troubleshoot document issues

Find answers to common document-related questions in the Employee Self-Service Portal.

## Document is missing

### When

An employee reports that a specific document is not visible in the Self-Service Portal, even though it has been uploaded in Business Central.

### Why

The Self-Service Portal only shows a document when both of the following conditions are met:

1. The document type has **Employee Access** turned on.
1. The document's **Available On** date is today or in the past.

If either condition is not met, the document does not appear in the Self-Service Portal.

### Steps

**Check that Employee Access is enabled for the document type:**

1. Choose the ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Document Types**, and then choose the related link.
1. Locate the document type for the missing document.
1. Verify that the **Employee Access** toggle is turned on.

   > [!IMPORTANT]
   > Turning off **Employee Access** hides all documents of that type from all employees, regardless of any other settings. If you want to make only a specific document available, keep **Employee Access** turned off on the original type and assign the document a different type that has **Employee Access** turned on.

**Check the Available On date:**

1. Choose the ![Lightbulb that opens the Tell Me feature.](media/ui-search/search_small.png "Tell me what you want to do") icon, enter **Employees**, and then choose the related link.
1. Open the employee card for the affected employee.
1. Choose the **Dossier** action.
1. Locate the document and check the **Available On** field.

   > [!NOTE]
   > If the date is set to a future date, the document does not appear until that date is reached. If the **Available On** field is not visible in the list, select the document line and use the **Page Inspection** feature to view all field values for that row.

## Document preview is not working on mobile

### When

An employee reports that a document cannot be previewed when opening it through the Self-Service Portal on a mobile device.

### Why

Not all mobile browsers support inline PDF preview. The Self-Service Portal renders document previews using the browser's built-in PDF viewer, which is not available in all mobile browsers.

### Steps

Try one of the following:

1. Choose the **Open in New Tab** icon in the top-right corner of the document preview.
1. Download the document and open it in a dedicated PDF reader app on the device.
1. Use a different browser.

## See also

- [Self-Service Portal overview](self-service-overview.md)
- [Troubleshoot sign-in issues](self-service-troubleshooting-sign-in.md)
- [Employee dossier and documents](employee-dossier.md)
