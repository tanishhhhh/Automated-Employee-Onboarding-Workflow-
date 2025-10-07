function validateData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  const data = sheet.getDataRange().getValues();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation

  // Loop through each row, skipping the header
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const employeeEmail = row[1]; // Assumes email is in the 2nd column
    const status = row[5]; // Assumes status is in the 6th column

    // Only validate rows that are not already processed
    if (status === "") {
      if (employeeEmail && emailRegex.test(employeeEmail)) {
        sheet.getRange(i + 1, 6).setValue('Validated');
      } else {
        sheet.getRange(i + 1, 6).setValue('Error: Invalid Email');
      }
    }
  }
}
