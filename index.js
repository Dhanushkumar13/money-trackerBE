const express = require('express')
const cors = require('cors')
const Transaction = require('./models/Transaction');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
require('dotenv').config();

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/test',(req,res)=>{
    res.json('test ok')
});

// POST route for adding a new transaction
app.post('/api/transaction', async (req, res) => {
    await mongoose.connect(process.env.NODE_DB_NAME);
    const {price, name, description, datetime} = req.body;
    const transaction = await Transaction.create({price, name, description, datetime})
    res.json(transaction);
  });

app.get('/api/transactions', async (req,res)=>{
    await mongoose.connect(process.env.NODE_DB_NAME);
    const transactions = await Transaction.find();
    res.json(transactions);
})
  
  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
