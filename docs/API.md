# API Documentation

Base URL: `http://localhost:5000/api`

## Products Endpoints

### Get All Products
```
GET /products
Response: Product[]
```

### Get Product by ID
```
GET /products/{id}
Response: Product
```

### Get Low Stock Products
```
GET /products/low-stock
Response: Product[]
```

### Create Product
```
POST /products
Body: {
  "name": "string",
  "description": "string",
  "category": "string",
  "price": 0.00,
  "stockQuantity": 0,
  "lowStockThreshold": 10
}
Response: Product
```

### Update Product
```
PUT /products/{id}
Body: Product
Response: 204 No Content
```

### Delete Product
```
DELETE /products/{id}
Response: 204 No Content
```

## Sales Endpoints

### Get All Sales
```
GET /sales
Response: Sale[]
```

### Get Sale by ID
```
GET /sales/{id}
Response: Sale
```

### Get Sales by Date Range
```
GET /sales/date-range?startDate=2025-01-01&endDate=2025-12-31
Response: Sale[]
```

### Create Sale
```
POST /sales
Body: {
  "productId": 0,
  "quantity": 0,
  "unitPrice": 0.00,
  "customerName": "string",
  "soldBy": "string"
}
Response: Sale
```

### Delete Sale
```
DELETE /sales/{id}
Response: 204 No Content
```

## Models

### Product
```json
{
  "id": 0,
  "name": "string",
  "description": "string",
  "category": "string",
  "price": 0.00,
  "stockQuantity": 0,
  "lowStockThreshold": 10,
  "isLowStock": false,
  "createdAt": "2025-11-30T00:00:00Z",
  "updatedAt": "2025-11-30T00:00:00Z"
}
```

### Sale
```json
{
  "id": 0,
  "productId": 0,
  "product": {},
  "quantity": 0,
  "unitPrice": 0.00,
  "totalAmount": 0.00,
  "saleDate": "2025-11-30T00:00:00Z",
  "customerName": "string",
  "soldBy": "string"
}
```
