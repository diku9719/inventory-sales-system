const API_BASE = 'http://localhost:5000/api';

// Navigation
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const page = btn.dataset.page;
        
        // Update active states
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(`${page}-page`).classList.add('active');
        
        // Load data for the page
        if (page === 'dashboard') loadDashboard();
        if (page === 'products') loadProducts();
        if (page === 'sales') loadSales();
    });
});

// Load Dashboard
async function loadDashboard() {
    try {
        const [products, sales] = await Promise.all([
            fetch(`${API_BASE}/products`).then(r => r.json()),
            fetch(`${API_BASE}/sales`).then(r => r.json())
        ]);

        // Update stats
        document.getElementById('total-products').textContent = products.length;
        
        const lowStock = products.filter(p => p.isLowStock);
        document.getElementById('low-stock').textContent = lowStock.length;
        
        const totalSales = sales.reduce((sum, s) => sum + s.totalAmount, 0);
        document.getElementById('total-sales').textContent = `$${totalSales.toFixed(2)}`;
        
        const today = new Date().toDateString();
        const salesToday = sales
            .filter(s => new Date(s.saleDate).toDateString() === today)
            .reduce((sum, s) => sum + s.totalAmount, 0);
        document.getElementById('sales-today').textContent = `$${salesToday.toFixed(2)}`;
        
        // Low stock list
        const lowStockList = document.getElementById('low-stock-list');
        if (lowStock.length === 0) {
            lowStockList.innerHTML = '<p>✅ All products are well stocked!</p>';
        } else {
            lowStockList.innerHTML = lowStock.map(p => 
                `<div style="padding: 10px; border-bottom: 1px solid #ddd;">
                    <strong>${p.name}</strong> - Only ${p.stockQuantity} left
                </div>`
            ).join('');
        }
    } catch (error) {
        console.error('Error loading dashboard:', error);
    }
}

// Load Products
async function loadProducts() {
    try {
        const products = await fetch(`${API_BASE}/products`).then(r => r.json());
        const tbody = document.getElementById('products-tbody');
        
        tbody.innerHTML = products.map(p => `
            <tr>
                <td>${p.id}</td>
                <td>${p.name}</td>
                <td>${p.category}</td>
                <td>$${p.price.toFixed(2)}</td>
                <td>${p.stockQuantity}</td>
                <td>${p.isLowStock ? '⚠️ Low' : '✅ OK'}</td>
                <td>
                    <button onclick="editProduct(${p.id})">Edit</button>
                    <button onclick="deleteProduct(${p.id})">Delete</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

// Load Sales
async function loadSales() {
    try {
        const sales = await fetch(`${API_BASE}/sales`).then(r => r.json());
        const tbody = document.getElementById('sales-tbody');
        
        tbody.innerHTML = sales.map(s => `
            <tr>
                <td>${s.id}</td>
                <td>${s.product?.name || 'N/A'}</td>
                <td>${s.quantity}</td>
                <td>$${s.unitPrice.toFixed(2)}</td>
                <td>$${s.totalAmount.toFixed(2)}</td>
                <td>${new Date(s.saleDate).toLocaleDateString()}</td>
                <td>${s.customerName}</td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('Error loading sales:', error);
    }
}

// Modal Functions
function showAddProductModal() {
    document.getElementById('modal-overlay').classList.add('active');
    document.getElementById('product-modal').classList.add('active');
}

function closeModal() {
    document.querySelectorAll('.modal-overlay, .modal').forEach(el => {
        el.classList.remove('active');
    });
}

// Product Form Submit
document.getElementById('product-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const product = {
        name: document.getElementById('product-name').value,
        category: document.getElementById('product-category').value,
        description: document.getElementById('product-description').value,
        price: parseFloat(document.getElementById('product-price').value),
        stockQuantity: parseInt(document.getElementById('product-stock').value),
        lowStockThreshold: parseInt(document.getElementById('product-threshold').value)
    };
    
    try {
        await fetch(`${API_BASE}/products`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        });
        
        closeModal();
        loadProducts();
        alert('Product added successfully!');
    } catch (error) {
        console.error('Error adding product:', error);
        alert('Failed to add product');
    }
});

// Initialize
loadDashboard();
