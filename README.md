# SMILE GIVERS APP (Server)

## COURSE INFO
ID : CSX4107 <br />
Name : Web Application Development <br />
Assignment : Final Project

## TEAM MEMBERS 
- SUTISAN NILRATTANAKUL (6213221) <br />
- WANITCHA SRITHONGCHUAY (6213365) 

## PROJECT DESCRIPTION
### ENTITIES
1. Admin/Distributor 
   > acts as the site administrators who is/are responsible for managing and distributing the donated items from donators to receivers. (i.e., Charity Foundation)
2. Receiver/Requester  
   > can request for needed items and check for receiving progress. (i.e., Assistance Foundation)
3. Donator/Supporter
   > can check for current needed items and choose to donate any listed items to be distributed by the admin.

### DATABASE


### FUNTIONALITIES
The three entities have the following CRUD operations:
> CRUD = CREATE, READ, UPDATE, DELETE <br />
> Rest API = GET, POST, PUT, PATCH, DELETE
1. **Admin/Distributor** <br />
   can..
   - check requested items (GET)
   - check for donation (GET)
   - remove accepted donation from donators (DELETE) <br />
   - remove requested items after success distribution to receivers (DELETE)
     *note: item distribution is done outside the system*
2. **Receiver/Requester**
   can..
   - request for items (POST)
   - update requested items ()
   - check for receiving progress (GET)
3. **Donator/Supporter**
   - Check for requested items ()
   - Donate items

## TECH STACK
This project uses **MERN** Stack for implementation.
> Front-end : React.js <br />
> Back-end : Express.js

1. **Tools**
   


