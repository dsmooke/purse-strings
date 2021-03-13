# Purse Strings

## Description

A budget tracker application that allows user to add expenses and deposits to their budget with or without a connection. Offline transactions will populate total when back online.

This is the eighteenth assignment for the UConn Coding Boot Camp curriculum.

View the deployed application [here](URL-to-deployed-application-heroku-link).

!(app-img-demo)[relative/path]

## Technologies Used

- Node
- Express
- MongoDB
- Mongoose
- PWA
- Compression

## Goals

1. Add functionality to existing Budget Tracker application to allow for offline access and functionality.
2. Offline Functionality:
   - Enter deposits offline.
   - Enter expenses offline.
3. When brought back online:
   - Offline entries should be added to tracker.
4. Incorporate `indexedDB` in order to cache dynamic, i.e. users' inputs for withdrawals or deposits. (Use Google to research this topic).
5. Deploy application with Heroku and MongoDB Atlas

## User Story

```
AS AN avid traveller
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am travelling.
```

## Business Context

Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our application's success.

## Acceptance Criteria

```
GIVEN a user is on a Budget App 'Purse Strings' without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.
```

## Installation

!(install-demo)[installation/path]

## Credits

## License

[MIT](MITLicense.txt)

---

© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
