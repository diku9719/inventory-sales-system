# Setup Guide

## Prerequisites

- .NET 8.0 SDK
- Visual Studio 2022 or VS Code
- Git

## Backend Setup

1. **Clone the repository**
```bash
git clone https://github.com/diku9719/inventory-sales-system.git
cd inventory-sales-system/backend
```

2. **Restore dependencies**
```bash
dotnet restore
```

3. **Create database**
```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

4. **Run the API**
```bash
dotnet run
```

The API will be available at `http://localhost:5000`

## Frontend Setup

1. **Navigate to frontend directory**
```bash
cd ../frontend
```

2. **Open with Live Server**
   - Use VS Code Live Server extension
   - Or open `index.html` directly in browser

3. **Update API URL**
   - Edit `js/app.js`
   - Change `API_BASE` if your backend runs on different port

## Database Migrations

**Add new migration:**
```bash
dotnet ef migrations add MigrationName
```

**Update database:**
```bash
dotnet ef database update
```

**Remove last migration:**
```bash
dotnet ef migrations remove
```

## Testing the API

Use Swagger UI at `http://localhost:5000/swagger`

## Common Issues

**Port already in use:**
- Change port in `Properties/launchSettings.json`

**CORS errors:**
- Verify CORS policy in `Program.cs`
- Check frontend API_BASE URL

**Database errors:**
- Delete `inventory.db` and run migrations again
