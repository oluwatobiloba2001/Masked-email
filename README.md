# Masked Email Project

This project demonstrates a simple utility to mask email addresses for improved privacy and security. The web page is implemented in HTML and includes a JavaScript script (`masked.js`) that performs the email masking functionality.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Setup and Running](#setup-and-running)
- [License](#license)

---

## Features

- **Email Masking Functionality**: The `masked.js` script provides a function to hide sensitive parts of email addresses while preserving the domain.
- **HTML Integration**: Demonstrates how to integrate JavaScript functionality into an HTML page.
- **Reusable Design**: The masking logic can be used in other projects or applications.

---

## Technologies Used

- **HTML5**: To structure the web page.
- **JavaScript**: To implement the email masking logic.

---

## Usage

1. **Masking Logic**: The JavaScript file (`masked.js`) contains the core functionality for masking email addresses. 
   - Example:
     ```javascript
     function maskEmail(email) {
         const atIndex = email.indexOf("@");
         const username = email.slice(0, atIndex);
         const domain = email.slice(atIndex);
         const maskedUsername = username[0] + "*".repeat(username.length - 2) + username[username.length - 1];
         return maskedUsername + domain;
     }

     console.log(maskEmail("example@domain.com")); // Output: e*****e@domain.com
     ```

2. **HTML Page**: The `index.html` file integrates the masking functionality using the `<script>` tag:
   ```html
   <script src="masked.js"></script>
