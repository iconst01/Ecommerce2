
import express from "express";//import the express module to create a server
import mysql from "mysql2";//import the mysql2 module to interact with the mysql database
import cors from "cors";//import cors to handle cross-origin resource sharing/back interact with front 
import path from "path";//import path module for handling file and directory path
import { fileURLToPath } from "url";//import used in ES module to handle file paths 
import dotenv from "dotenv";//import dotenv to read enviroment varibles from a .env file store database credential

dotenv.config();//load enviroment variables from a .env file

const __filename = fileURLToPath(import.meta.url);//get current file path using es module import
const __dirname = path.dirname(__filename);//get directory name of the current file

const app = express();//create an instance of the expressapp
app.use(cors());//enable cross-origin resources sharing for all routes
app.use(express.json());//middlewate to parse json data sent in request for server to handle json payloads
app.use('/images', express.static('/public/images'));//serve static images from the 'public/images' directory
app.use(express.static(path.join(__dirname, "../dist")));//serve static files from the 'dist' folder (where the frontend might be built)


// Set up MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,//database host 
  user: process.env.DB_USER,//database user 
  password: process.env.DB_PASSWORD,//database password
  database: process.env.DB_NAME,//databse name
});//lcredential stored in the .env

// Connect to database
db.connect((err) => {//function stablish  connetion to database
  if (err) throw err;//if there's an error, stop execution and throw the error
  console.log('Connected to MySQL database');//log a message if the connection is succesful
});

app.get('/api/products', (req, res) => {//define GET API endpoint that listens for requests at /api/products
  const { priceRange, category } = req.query;//extract pricerange and category from query params
  
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
    res.json(results);//return the query results as a JSON response 
  });
});


app.get("*", (req, res) => {//catch-all route that handles any other request that dont match the API routes
  res.sendFile(path.join(__dirname, "../dist/index.html"))
})//sends the index.html file from the dist folder.

const PORT = process.env.PORT || 3000;//set the port from enviroment variable or default to 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



