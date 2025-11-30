# System Architecture

## Overview

The Online Product Inventory and Sales Analysis System follows a **3-tier architecture**:

```
┌─────────────────────────────────────────┐
│         Presentation Layer              │
│    (HTML, CSS, JavaScript)              │
└─────────────────┬───────────────────────┘
                  │ HTTP/REST API
┌─────────────────▼───────────────────────┐
│         Application Layer               │
│    (C# ASP.NET Core Web API)            │
│  ┌─────────────────────────────────┐    │
│  │ Controllers                     │    │
│  │ - ProductsController            │    │
│  │ - SalesController               │    │
│  └──────────┬──────────────────────┘    │
│             │                            │
│  ┌──────────▼──────────────────────┐    │
│  │ Services (Business Logic)       │    │
│  │ - ProductService                │    │
│  │ - SalesService                  │    │
│  │ - ExcelService                  │    │
│  │ - AuthService                   │    │
│  └──────────┬──────────────────────┘    │
└─────────────┼───────────────────────────┘
              │
┌─────────────▼───────────────────────────┐
│         Data Layer                      │
│    (Entity Framework Core)              │
│  ┌─────────────────────────────────┐    │
│  │ AppDbContext                    │    │
│  │ - Products DbSet                │    │
│  │ - Sales DbSet                   │    │
│  │ - Users DbSet                   │    │
│  └──────────┬──────────────────────┘    │
└─────────────┼───────────────────────────┘
              │
┌─────────────▼───────────────────────────┐
│         Database                        │
│         (SQLite)                        │
└─────────────────────────────────────────┘
```

## Component Details

### Frontend (Presentation Layer)
- **Technology**: HTML5, CSS3, Vanilla JavaScript
- **Responsibilities**:
  - User interface rendering
  - User input handling
  - API communication
  - Client-side validation
  - Data visualization

### Backend (Application Layer)

#### Controllers
- Handle HTTP requests
- Route to appropriate services
- Return HTTP responses
- Input validation

#### Services
- **ProductService**: Product CRUD operations
- **SalesService**: Sales transaction management
- **ExcelService**: Report generation
- **AuthService**: User authentication

#### Models
- **Product**: Product entity
- **Sale**: Sales transaction entity
- **User**: User account entity

### Database (Data Layer)
- **Technology**: SQLite
- **ORM**: Entity Framework Core
- **Features**:
  - Code-first migrations
  - LINQ queries
  - Relationship management

## Data Flow

### Product Creation Flow
```
User Input → Frontend Validation → API Request → 
Controller → Service → Database → Response → UI Update
```

### Sales Recording Flow
```
Sale Input → Validation → API Request → 
Controller → SalesService → 
  1. Create Sale Record
  2. Update Product Stock → 
Database → Response → UI Update
```

## Design Patterns

1. **Repository Pattern**: Data access abstraction
2. **Service Layer Pattern**: Business logic separation
3. **Dependency Injection**: Loose coupling
4. **MVC Pattern**: Separation of concerns

## Security Considerations

- CORS configuration for API access
- Password hashing (to be implemented)
- Input validation
- SQL injection prevention (EF Core)
- Role-based authorization (planned)

## Scalability

- Stateless API design
- Database indexing
- Async/await for I/O operations
- Pagination support (future)
