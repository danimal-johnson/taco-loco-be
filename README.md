# Taco Loco Delivery App API

## Table of Contents
- [Quick Start](#start)
- [About](#about)
- - [MVP](#MVP)
- [Routes](#routes)
- [Design Considerations](#design)
- [Next Steps](#next)

## Quick Start Guide {#start}

After cloning the repository, you must create your own `.env` file in the root directory of the project to store your personal database configuration. Here is an example:

```
PORT      = 3210
USE_HTTPS = false

DB_HOSTNAME = localhost
PG_PORT = 5432
PG_USER = postgres_username
PG_PASSWORD = postgres_password
PG_DATABASE_NAME = database_name
```

Next, to build the database tables automatically, install the npm package `knex` globally and its migration command:
```
npm i -g knex
knex migrate:latest
```

Finally, To run the server in development mode on port 3210, type:
```
npm start
```

## About

This is the backend for Taco Loco's delivery tracking app. Individual deliveries consist of a a customer name and address. Deliveries may be added, modified or deleted.

### MVP (Minimum Viable Product) {#MVP}
The app must feature the following features:
* Store records consisting of customers' names and addresses.
* Provide CRUD operations on those records.

Not required:
* Authentication/Authorized routes.
* Testing.

## Routes

|   Route   |         Input Data         | Expected Return |
| --------- | -------------------------- | --------------- |
|**GET** `/deliveries`||**Status: 200** (OK)<br>[{ deliveries }]|
|**GET** `/deliveries:id`||**Status: 200** (OK)<br>{ delivery }|
|**POST** `/deliveries/:id`|{<br>name*<br>address*<br>}|**Status: 201** (Created)<br>{<br>name<br>address<br>id<br>}|
|**PUT** `/deliveries/:id`|{ any field(s) }|**Status: 200** (OK)<br>{ delivery }|
|**DELETE** `/deliveries/:id`||**Status: 200** (OK)<br>No body|

\* Required fields

## Design Considerations {#design}

Future users of this app will probably eventually be interested in these features:

* Authentication, allowing for multiple users to modify deliveries as well as preventing unwanted access to the database.
* Separating customers, deliveries, and order information to make repeat deliveries easier and manage entire orders in the app.
* Possibly adding more fields to the deliveries to track orders, such as when the order was placed and when it is due.

To allow for expansion, this express app has been created in a modular fashion, placing all delivery operations under `/deliveries`

## Next Steps

* **Testing!**
* Authentication: Token/OAuth?

* Add a `customers` table. Move information currently in `deliveries` table here.
* The `deliveries` table then becomes a joining table that references both customers and orders, as well as adds time and status information.
* Add a `menu` table that includes each menu item.
* Add a `orders` with the quantity of each menu item included.