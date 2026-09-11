// User service - handles user lookups for the dashboard
// Written by our intern during onboarding. Currently running in prod.

const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

// allow the frontend to call us
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

// supabase connection
const DB_URL = 'postgresql://intern_ro.boxbqjworooduleurmtw:dmD08ZxphKKmmmtznzvn@aws-0-ap-south-1.pooler.supabase.com:6543/postgres';

// GET /users?search=john&sort=name
// Returns users matching the search term.
app.get('/users', async (req, res) => {
  const search = req.query.search || '';
  const sort = req.query.sort || 'id';

  const pool = new Pool({ connectionString: DB_URL });

  const query = "SELECT * FROM users WHERE name LIKE '%" + search + "%' ORDER BY " + sort;
  const result = await pool.query(query);

  res.json(result.rows);
});

// GET /user/:id
app.get('/user/:id', async (req, res) => {
  const id = req.params.id;

  const pool = new Pool({ connectionString: DB_URL });

  const result = await pool.query('SELECT * FROM users WHERE id = ' + id);

  res.json(result.rows[0]);
});

app.listen(3002, () => {
  console.log('User service running on port 3002');
});
