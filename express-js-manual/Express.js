const express = require('express');
const app = express();
const port = 3000;

// Route / - Trả về chuỗi “Trang chủ”
app.get('/', (req, res) => {
  res.send('Trang chủ');
});

// Route /about - Trả về chuỗi “Trang giới thiệu”
app.get('/about', (req, res) => {
  res.send('Trang giới thiệu');
});

// Route /products - Trả về một mảng các sản phẩm. Mỗi sản phẩm bao gồm id, name, và price.
app.get('/products', (req, res) => {
  const products = [
    { id: 1, name: 'iPhone 15', price: 100 },
    { id: 2, name: 'iPhone 16', price: 200 },
    // Thêm các sản phẩm khác vào đây
  ];
  res.json(products);
});

// Route /products/:id - Trả về thông tin của sản phẩm có id tương ứng.
app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  // Lấy thông tin sản phẩm từ cơ sở dữ liệu hoặc nguồn dữ liệu khác
  const productInfo = `Thông tin sản phẩm có ID ${productId}`;
  res.send(productInfo);
});

// Route /products - Với phương thức POST, trả về chuỗi: "Thêm mới sản phẩm"
app.post('/products', (req, res) => {
  res.send('Thêm mới sản phẩm');
});

// Route /products/:id - Với phương thức PUT, trả về chuỗi: "Chỉnh sửa sản phẩm có ID :id thành công"
app.put('/products/:id', (req, res) => {
  const productId = req.params.id;
  res.send(`Chỉnh sửa sản phẩm có ID ${productId} thành công`);
});

// Route /products/:id - Với phương thức DELETE, trả về chuỗi: "Xóa sản phẩm có ID :id thành công"
app.delete('/products/:id', (req, res) => {
  const productId = req.params.id;
  res.send(`Xóa sản phẩm có ID ${productId} thành công`);
});

app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});