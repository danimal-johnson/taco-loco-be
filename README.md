# Taco Loco Delivery App API

## Table of Contents
- [About](#about)
- - [MVP](#MVP)
- [Routes](#routes)
- [Design Considerations](#design)
- [Next Steps](#next)
- [Getting Started](#start)

## About

TODO: Fill this in.

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

* Testing!
* Authentication: Token/OAuth?

* Add `customers` table. It could include name, address, email, phone number, etc.
* Add `menu` table that includes each menu item.
* Add `orders` with the quantity of each menu item included.
* Add joining tables for these many-to-many relationships.