import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.get("/products", (req, res) => {
  res.sendFile(path.join(__dirname, "VIEW", "product.html"));
});
app.listen(3000, () => {
  console.log("Server is running on port 3000 http://localhost:3000/products");
});
