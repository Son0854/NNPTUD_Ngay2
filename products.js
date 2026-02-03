console.log("JS ĐÃ CHẠY");

// CÂU 1: Constructor Product
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// CÂU 2: Mảng products
const products = [
  new Product(1, "iPhone 15 Pro", 35000000, 5, "Phones", true),
  new Product(2, "Samsung S24", 28000000, 0, "Phones", true),
  new Product(3, "AirPods Pro", 6500000, 10, "Accessories", true),
  new Product(4, "Apple Watch", 12000000, 3, "Accessories", false),
  new Product(5, "MacBook Air M2", 32000000, 2, "Laptops", true),
  new Product(6, "Dell XPS", 40000000, 1, "Laptops", true)
];

// HÀM IN CHUNG 
function printProduct(p) {
  console.log(
    "ID:", p.id,
    "| Tên:", p.name,
    "| Giá:", p.price,
    "| SL:", p.quantity,
    "| Danh mục:", p.category,
    "| Đang bán:", p.isAvailable
  );
}

// CÂU 3: In toàn bộ sản phẩm
console.log("Câu 3: Danh sách sản phẩm");
products.forEach(p => printProduct(p));

// CÂU 4: Sản phẩm còn hàng
console.log("Câu 4: Sản phẩm còn hàng (quantity > 0)");
products
  .filter(p => p.quantity > 0)
  .forEach(p => printProduct(p));

// CÂU 5: Giá > 30.000.000
console.log("Câu 5: Sản phẩm giá > 30.000.000");
products
  .filter(p => p.price > 30000000)
  .forEach(p => printProduct(p));

// CÂU 6: Danh mục Accessories

console.log("Câu 6: Sản phẩm danh mục Accessories");
products
  .filter(p => p.category === "Accessories")
  .forEach(p => printProduct(p));

// câu 7 tính tổng giá trị kho
console.log("Câu 7: Giá trị kho từng sản phẩm");

let total = 0;
products.forEach(p => {
  const value = p.price * p.quantity;
  total += value;

  console.log(
    "Tên:", p.name,
    "| Giá:", p.price,
    "| SL:", p.quantity,
    "| Giá trị kho:", value
  );
});
console.log("👉 Tổng giá trị kho:", total);

// câu 8 dùng for...of
console.log("Câu 8: Duyệt bằng for...of");
for (const p of products) {
  printProduct(p);
}

// dùng for...in để

console.log("Câu 9: Thuộc tính sản phẩm đầu tiên");
for (const key in products[0]) {
  console.log(key, ":", products[0][key]);
}

// lấy danh sách sản phẩm còn hàng
console.log("Câu 10: Sản phẩm đang bán và còn hàng");
products
  .filter(p => p.isAvailable && p.quantity > 0)
  .forEach(p => printProduct(p));
