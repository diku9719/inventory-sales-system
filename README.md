# Online Product Inventory and Sales Analysis System

A web-based application for managing product stock, sales records, and performance analytics.

## 📋 Project Overview

**Duration:** October 2025 – Present  
**Technologies:** C#, HTML, CSS, JavaScript, MS Excel

## 🚀 Features

- ✅ Add, update, and delete product and sales records
- 📊 Generate Excel reports for monthly and yearly sales
- 📈 Visualize sales trends using Excel charts
- ⚠️ Low-stock alert and performance summary dashboard
- 🔐 Role-based login for admin and user

## 🛠️ Tech Stack

- **Backend:** C# (ASP.NET Core Web API)
- **Frontend:** HTML, CSS, JavaScript
- **Data Export:** MS Excel (EPPlus/ClosedXML)
- **Database:** SQL Server / SQLite

## 📁 Project Structure

```
inventory-sales-system/
├── backend/              # C# ASP.NET Core API
│   ├── Controllers/      # API endpoints
│   ├── Models/          # Data models
│   ├── Services/        # Business logic
│   └── Data/            # Database context
├── frontend/            # Web interface
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript files
│   └── index.html      # Main page
└── docs/               # Documentation
```

## 🔧 Setup Instructions

### Prerequisites
- .NET 8.0 SDK
- Visual Studio 2022 or VS Code
- SQL Server or SQLite

### Backend Setup
```bash
cd backend
dotnet restore
dotnet run
```

### Frontend Setup
Open `frontend/index.html` in a browser or use a local server.

## 📊 Key Functionalities

1. **Inventory Management** - Track product stock levels in real-time
2. **Sales Recording** - Log and manage sales transactions
3. **Excel Reporting** - Export data for analysis
4. **Analytics Dashboard** - View performance metrics
5. **User Authentication** - Secure role-based access

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📄 License

MIT License
