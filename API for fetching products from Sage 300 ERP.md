**API Endpoints**

* `GET /api/v1/products`: Retrieve a list of products
* `GET /api/v1/products/{product_id}`: Retrieve a specific product by ID
* `GET /api/v1/products/{product_id}/inventory`: Retrieve the inventory levels for a specific product
* `GET /api/v1/inventory`: Retrieve a list of inventory levels for all products

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

* `GET /api/v1/products`:
	+ Request headers: `Authorization: Bearer <access_token>`
	+ Request body: `{}`
	+ Response: `[{"product_id": 1, "name": "Product A", "description": "This is product A"}, {"product_id": 2, "name": "Product B", "description": "This is product B"}]`

* `GET /api/v1/products/{product_id}`:
	+ Request headers: `Authorization: Bearer <access_token>`
	+ Request body: `{}`
	+ Response: `{"product_id": 1, "name": "Product A", "description": "This is product A"}`

* `GET /api/v1/products/{product_id}/inventory`:
	+ Request headers: `Authorization: Bearer <access_token>`
	+ Request body: `{}`
	+ Response: `{"product_id": 1, "inventory_level": 100, "warehouse": "Main Warehouse"}`

* `GET /api/v1/inventory`:
	+ Request headers: `Authorization: Bearer <access_token>`
	+ Request body: `{}`
	+ Response: `[{"product_id": 1, "inventory_level": 100, "warehouse": "Main Warehouse"}, {"product_id": 2, "inventory_level": 50, "warehouse": "Secondary Warehouse"}]`

**Sage 300 ERP API Endpoints**

* `GET /api/v1/sage300/products`: Retrieve a list of products from Sage 300 ERP
* `GET /api/v1/sage300/products/{product_id}`: Retrieve a specific product by ID from Sage 300 ERP
* `GET /api/v1/sage300/inventory`: Retrieve a list of inventory levels for all products from Sage 300 ERP
* `GET /api/v1/sage300/inventory/{product_id}`: Retrieve the inventory levels for a specific product from Sage 300 ERP

**Sage 300 ERP API Request/Response Format**

* Request format: JSON
* Response format: JSON

**Sage 300 ERP API Authentication**

* Authentication method: OAuth 2.0
* Authorization endpoint: `https://example.com/api/v1/sage300/oauth/authorize`
* Token endpoint: `https://example.com/api/v1/sage300/oauth/token`