**API Endpoints**

* `GET /api/v1/customers`: Retrieve a list of customers
* `GET /api/v1/customers/{customer_id}`: Retrieve a specific customer by ID
* `POST /api/v1/customers`: Create a new customer
* `PUT /api/v1/customers/{customer_id}`: Update an existing customer
* `DELETE /api/v1/customers/{customer_id}`: Delete a customer

* `GET /api/v1/orders`: Retrieve a list of orders
* `GET /api/v1/orders/{order_id}`: Retrieve a specific order by ID
* `POST /api/v1/orders`: Create a new order
* `PUT /api/v1/orders/{order_id}`: Update an existing order
* `DELETE /api/v1/orders/{order_id}`: Delete an order

* `GET /api/v1/products`: Retrieve a list of products
* `GET /api/v1/products/{product_id}`: Retrieve a specific product by ID
* `POST /api/v1/products`: Create a new product
* `PUT /api/v1/products/{product_id}`: Update an existing product
* `DELETE /api/v1/products/{product_id}`: Delete a product

* `GET /api/v1/invoices`: Retrieve a list of invoices
* `GET /api/v1/invoices/{invoice_id}`: Retrieve a specific invoice by ID
* `POST /api/v1/invoices`: Create a new invoice
* `PUT /api/v1/invoices/{invoice_id}`: Update an existing invoice
* `DELETE /api/v1/invoices/{invoice_id}`: Delete an invoice

**API Request/Response Format**

* Request format: JSON
* Response format: JSON

**API Authentication**

* Authentication method: OAuth 2.0
* Authorization endpoint: `https://example.com/api/v1/oauth/authorize`
* Token endpoint: `https://example.com/api/v1/oauth/token`

**API Error Handling**

* Error format: JSON
* Error codes:
	+ 400: Bad request
	+ 401: Unauthorized
	+ 403: Forbidden
	+ 404: Not found
	+ 500: Internal server error

**Sage 300 ERP API Integration**

* Integration method: REST API
* Integration endpoint: `https://example.com/api/v1/sage300`
* Integration authentication: OAuth 2.0

**Example API Request**

* `GET /api/v1/customers`:
	+ Request headers: `Authorization: Bearer <access_token>`
	+ Request body: `{}`
	+ Response: `[{"customer_id": 1, "name": "John Doe", "address": "123 Main St"}]`

* `POST /api/v1/orders`:
	+ Request headers: `Authorization: Bearer <access_token>`
	+ Request body: `{"customer_id": 1, "order_date": "2022-01-01", "total": 100.00}`
	+ Response: `{"order_id": 1, "customer_id": 1, "order_date": "2022-01-01", "total": 100.00}`