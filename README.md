# Purse Strings

<span align="center">

<a href="https://img.shields.io/badge/express-v4.17.1-orange?style=plastic"><img alt="Express" src="https://img.shields.io/badge/express-v4.17.1-orange?style=plastic"/></a>
<a href="https://img.shields.io/badge/DB-MongoDB-yellow?style=plastic"><img alt="MongoDB" src="https://img.shields.io/badge/DB-MongoDB-yellow?style=plastic"/></a>
<a href="https://img.shields.io/badge/npm-Mongoose-red?style=plastic"><img alt="Mongoose schema" src="https://img.shields.io/badge/npm-Mongoose-red?style=plastic" /></a>
<a href="https://img.shields.io/badge/npm-morgan-blue?style=plastic"><img alt="Morgan" src="https://img.shields.io/badge/npm-morgan-blue?style=plastic"/></a>
<a href="https://img.shields.io/badge/License-MIT-brightgreen?style=plastic"><img alt="M.I.T. License use" src="https://img.shields.io/badge/License-MIT-brightgreen?style=plastic"/></a>

 </span>
 
## Description

A budget tracker application that allows user to add expenses and deposits to their budget with or without a connection. Offline transactions will populate total when back online.

View the deployed application [here](https://purse-strings.herokuapp.com/).

![main-demo](/public/imgs/budget-main-demo.png)

## Table of Contents

- [Description](#description)
- [Technologies Used](#tech-used)
- [Definitions](#definitions)
- [Goals](#goals)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Business Context](#business-context)
- [Installation](#installation)
- [Developer](#developer)
- [Credits](#credits)
- [Contact](#contact)
- [License](#license)

## Technologies Used

- Node
- Express
- MongoDB
- Mongoose
- PWA
- Compression

### Definitions

- **PWA:**
  Progressive Web Applications; native-like capabilities; ability to open app when not online.
- **manifest.webmanifest:**
  a file we upload that describes the application; json describing a js object
- **service worker:**
  background interface, a javascript web worker; allows to run the app before the browser loads; able to cache any service you make; allows us to work offline (can view what happens and what it does when the app is offline)
- **cache, caching**:
  _(v)._ to store (data) in a cache memory; _(n)._ an auxiliary memory from which high-speed retrieval is possible.

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

![cache-demo](/public/imgs/budget-cache-demo.png)

![serviceworker-offline](/public/imgs/budget-sw-offline-demo.png)

![offline-pending-transaction](/public/imgs/budget-offline-pending-demo.png)

### Developer

Used MongoDB and Mongoose

![mongo-playground](/public/imgs/budget-mongo-playground-demo.png)

## Credits

[Offline Cookbook]("https://web.dev/offline-cookbook/#cache-falling-back-to-network")

[What does it take to be installable?]("https://web.dev/install-criteria/")

## Contact

[Dana Smooke]("https://github.com/dsmooke")

## License

[MIT](MITLicense.txt)

---

© 2020 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
