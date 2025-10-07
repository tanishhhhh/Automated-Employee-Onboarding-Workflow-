
-----

# Automated Employee Onboarding Workflow 🚀

This project automates the new hire onboarding process using **Google Apps Script**. It reads new employee data from a Google Sheet and triggers a series of actions across Google Workspace (Gmail, Calendar, Drive), significantly reducing manual work for HR teams and ensuring a consistent onboarding experience.

-----

## ✨ Features

  * **📊 Data-Driven**: The entire workflow is triggered by adding a new employee's details to a Google Sheet.
  * **✅ Built-in Validation**: Automatically validates data (e.g., email format) before processing to ensure data integrity.
  * **📧 Automated Emails**: Sends personalized welcome emails to new hires using a pre-defined Gmail draft.
  * **🗓️ Smart Scheduling**: Automatically schedules orientation meetings in Google Calendar and invites the new hire and their manager.
  * **🗂️ Document Provisioning**: Creates and shares a personalized folder in Google Drive for the new employee.
  * **🔄 Status Tracking**: Updates a status column in the Google Sheet to track each employee's progress through the workflow (`Validated`, `Completed`, `Error`).

-----

## 🛠️ Technologies Used

  * **Google Apps Script** (JavaScript)
  * **Google Sheets** (Data Source & Control Panel)
  * **Gmail** (for Email Automation)
  * **Google Calendar** (for Event Scheduling)
  * **Google Drive** (for Folder Creation & Sharing)

-----

## ⚙️ Setup and Installation

Follow these steps to get the automation running.

### 1\. Prepare Your Google Workspace

  * **Google Sheet**: Create a new Google Sheet. Name the first sheet `Onboarding`. Set up the following headers in the first row:
    `EmployeeName`, `EmployeeEmail`, `StartDate`, `ManagerName`, `ManagerEmail`, `WorkflowStatus`
  * **Google Drive**: Create a parent folder where all new hire folders will be stored. **Copy its Folder ID** from the URL. (e.g., `.../folders/THIS_IS_THE_ID`).
  * **Gmail**: Compose a new email in Gmail with a clear subject line (e.g., "Welcome to the Team\!"). Use placeholders like `{{EmployeeName}}` in the body for personalization. **Save it as a draft.**

### 2\. Set Up the Script

1.  **Clone this Repository**:
    ```bash
    git clone https://github.com/tanishhhhh/automated-onboarding-workflow.git
    ```
2.  **Add the Code**:
      * Open your Google Sheet and navigate to `Extensions` \> `Apps Script`.
      * Delete any boilerplate code in the `Code.gs` file.
      * Copy the code from the `main.gs` file in this repository and paste it into the Apps Script editor.

### 3\. Configure the Script

  * In the Apps Script editor, update the configuration variables at the top of the file with your specific information:

    ```javascript
    const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID';
    const PARENT_FOLDER_ID = 'YOUR_PARENT_DRIVE_FOLDER_ID';
    const EMAIL_TEMPLATE_SUBJECT = 'YOUR_GMAIL_DRAFT_SUBJECT';
    ```

### 4\. Set the Trigger

1.  In the Apps Script editor, click on the **Triggers** icon (looks like an alarm clock) on the left sidebar.
2.  Click **"Add Trigger"** in the bottom right.
3.  Configure the trigger with the following settings:
      * **Function to run**: `startOnboardingProcess`
      * **Deployment**: `Head`
      * **Event source**: `Time-driven`
      * **Type of time-based trigger**: `Day timer`
      * **Time of day**: Select a time that works for you (e.g., 8am - 9am).
4.  Click **Save**. You will be asked to authorize the script's permissions.

-----

## ▶️ Usage

1.  Add the details of a new employee into a new row in your `Onboarding` Google Sheet. Leave the `WorkflowStatus` column blank.
2.  The script will run automatically at the time you scheduled.
3.  Check the `WorkflowStatus` column to see the results. It will update to `Validated`, then `Completed`, or `Error` if something went wrong.

-----

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
