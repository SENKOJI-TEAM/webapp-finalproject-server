# SMILE GIVERS APP (Server)

## COURSE INFO
ID : CSX4107 <br />
Name : Web Application Development <br />
Assignment : Final Project

----------------------------------------------------

## TEAM MEMBERS 
- SUTISAN NILRATTANAKUL (6213221) <br />
- WANITCHA SRITHONGCHUAY (6213365) 

----------------------------------------------------

## PROJECT DESCRIPTION
This application is used to manage item donation requesting process with regards the needed, listed items. Users are divided into admin and donator. The app allows the admin to post and update the list of items which is currently in short supply and allows the donator to make a donation request as per those items listed. Note that the process of sending and receiving items will be done outside the system. Only the requesting process of item shortage and item donation are to be supported.

### STAKEHOLDERS
1. Admin/Distributor 
   > acts as the site administrator who is responsible for managing the item and donation requests. (i.e., Charity Foundation)
2. Donator/Supporter
   > can check for current needed items and choose to donate any listed items.

### ENTITIES
1. User
2. Item
3. Request

### FUNTIONALITIES
> CRUD = CREATE, READ, UPDATE, DELETE <br />
> Rest API = GET, POST, PUT, PATCH, DELETE
1. **Admin/Distributor** <br />
   can..
   - add needed items (POST)
   - update needed items (PUT, PATCH)
   - remove needed items after success distribution (DELETE) <br />
     > *item distribution is done outside the system*
   - check for donation requests (GET)
   - remove donation requests after receiving donated items (DELETE) 
     > *donation acceptance is done outside the system*
2. **Donator/Supporter** <br />
   can..
   - check for needed items (GET)
   - request to donate items (POST)
   - update donation (PUT, PATCH)
   - cancel donation (DELETE)

----------------------------------------------------

## TECH STACK
This project uses **MERN** Stack for implementation.
> MERN = MongoDB, Express, React, Node <br />
> Front-end : React.js <br />
> Back-end : Express.js

First, please make sure you have installed the followings:
- Node.js (JavaScript Run-time) <br />
  https://nodejs.org/en/download/
  
- yarn (Package Manager)
  ```
  npm install -g yarn
  ```
  - Check yarn version
    ```
    yarn --version
    ```

How to run this App?
1. **Back-end**
   ```
    yarn dev
    ```
2. **Front-end**
   ```
    yarn start
    ```
