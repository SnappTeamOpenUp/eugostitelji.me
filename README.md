# eugostitelji.me

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
[![AWS](https://img.shields.io/badge/AWS-Amazon%20Web%20Services-orange)](https://aws.amazon.com/)
[![React](https://badges.aleen42.com/src/react.svg)](https://reactjs.org/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/a79ae4f0-65ac-4b01-8271-dc8c37a65d4b/deploy-status)](https://app.netlify.com/sites/eugostitelji/deploys)
[![Seed Serverless CD](https://img.shields.io/badge/SEED-SLS%20CD-purple)](https://seed.run/)

Web registry of catering facilities in Montenegro built using serverless.

## Motivation

This project was primarily made for educational purposes, but it could also be
useful by providing high quality descriptive data registry with API for catering
facilities in Montenegro.

## Getting started

### Backend

```shell
cd backend
npm install
npm run deploy
```

### Frontend

```shell
cd frontend
yarn install
yarn start
```

## Contributors

This project was built by:

[![](https://github.com/stemili.png?size=40)](https://github.com/stemili)
[![](https://github.com/rad1na.png?size=40)](https://github.com/rad1na)
[![](https://github.com/PetarCetkovic.png?size=40)](https://github.com/PetarCetkovic)
[![](https://github.com/AleksaVu.png?size=40)](https://github.com/AleksaVu)
[![](https://github.com/nikolakadic.png?size=40)](https://github.com/nikolakadic)

with help of:

[![](https://github.com/AleksaC.png?size=40)](https://github.com/AleksaC)

## Licence

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/SnappTeamOpenUp/eugostitelji.me/blob/main/LICENSE)

Copyright (c) 2021 SnappTeam

## TODO

### Docs/presentation

- [ ] Add info about .env in getting started

### CI/CD

- [ ] Fix seed deployment
- [ ] Set up CI linting and formatting

### Backend

- [ ] Signup --> custom email trigger that sends the url with code and email and
      confirm the user in lambda triggered by the url redirecting back to the app
- [ ] Use vtl resolver for performance-critical queries (list, get)
- [ ] Dynamodb stack policy update replace
- [ ] Deletion and update policy s3 research
- [ ] Clean up cognito config
- [ ] Come up with user data model and write confirm user signup lambda
- [ ] Scraping/ingesting data (google mpas, foodbook.me)

### Frontend

- [ ] Check if access token has expired before trying to use it
- [ ] Use cognito token when accessing protected endpoitns
- [ ] Integrate algolia search on frontend

- [ ] Look into and improve gql implementation

- [ ] Signup/Login/Forgot Password/Remember me flow
- [ ] Show errors on login/signup pages instead of logging them

---

- About us - vule

- Search + filtering fe - ja
- Bucket + cf - ja
- Srediti bazu - ja
- dodati token pri pozivu zasticenim endpointima, provjeriti prije slanja da li je
  istekao i refreshovati - mili

- Ocistiti footer
- details stranica za ponjedinacnog provajdera

- Napraviti create new funkcionalnost i kreirati par objekata
- Napraviti fixtures
- Prikazati fixtures i testirati pretragu

---

notification o izmjeni provajdera preko e-maila
