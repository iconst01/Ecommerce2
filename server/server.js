
import express from "express";
import mysql from "mysql2";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use('/images', express.static('/public/images'));
app.use(express.static(path.join(__dirname, "../dist")));


// Set up MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.get('/api/products', (req, res) => {
  const { priceRange, category } = req.query;
  
  // Log the query parameters received from the frontend
  console.log('Received query parameters:', req.query);
  
  let query = 'SELECT * FROM products WHERE 1=1'; // Start with the basic query
  
  // Apply category filter if provided
  if (category) {
    query += ` AND category = '${category}'`;
  }

  // Apply price range filter if provided
  if (priceRange) {
    const [minPrice, maxPrice] = priceRange.split('-').map(Number);
    query += ` AND price BETWEEN ${minPrice} AND ${maxPrice}`;
  }

  // Log the final query that will be executed
  console.log('Constructed SQL query:', query);

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ message: 'Failed to fetch products' });
    }
    res.json(results);
  });
});


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"))
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



