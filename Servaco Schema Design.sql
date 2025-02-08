**Users Table**

* `id` (primary key, auto-increment): unique identifier for each user
* `username`: username chosen by the user
* `email`: email address of the user
* `password`: password for the user's account (hashed for security)
* `name`: full name of the user
* `address`: shipping address of the user
* `phone`: phone number of the user
* `created_at`: timestamp for when the user account was created
* `updated_at`: timestamp for when the user account was last updated

**Products Table**

* `id` (primary key, auto-increment): unique identifier for each product
* `name`: name of the product
* `description`: description of the product
* `price`: price of the product
* `image`: image of the product
* `category`: category of the product (e.g. electronics, clothing, etc.)
* `created_at`: timestamp for when the product was added to the database
* `updated_at`: timestamp for when the product was last updated

**Orders Table**

* `id` (primary key, auto-increment): unique identifier for each order
* `user_id` (foreign key referencing the Users table): the user who made the order
* `order_date`: date the order was made
* `total`: total cost of the order
* `status`: status of the order (e.g. pending, shipped, delivered, etc.)
* `created_at`: timestamp for when the order was created
* `updated_at`: timestamp for when the order was last updated

**Order Items Table**

* `id` (primary key, auto-increment): unique identifier for each order item
* `order_id` (foreign key referencing the Orders table): the order that the item belongs to
* `product_id` (foreign key referencing the Products table): the product that was ordered
* `quantity`: quantity of the product that was ordered
* `created_at`: timestamp for when the order item was created
* `updated_at`: timestamp for when the order item was last updated

**Cart Table**

* `id` (primary key, auto-increment): unique identifier for each cart item
* `user_id` (foreign key referencing the Users table): the user who owns the cart
* `product_id` (foreign key referencing the Products table): the product that is in the cart
* `quantity`: quantity of the product that is in the cart
* `created_at`: timestamp for when the cart item was created
* `updated_at`: timestamp for when the cart item was last updated

**Categories Table**

* `id` (primary key, auto-increment): unique identifier for each category
* `name`: name of the category
* `description`: description of the category
* `created_at`: timestamp for when the category was created
* `updated_at`: timestamp for when the category was last updated

**Subcategories Table**

* `id` (primary key, auto-increment): unique identifier for each subcategory
* `category_id` (foreign key referencing the Categories table): the category that the subcategory belongs to
* `name`: name of the subcategory
* `description`: description of the subcategory
* `created_at`: timestamp for when the subcategory was created
* `updated_at`: timestamp for when the subcategory was last updated