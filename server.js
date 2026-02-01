
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/expenses", (req, res) => {
  const { amount, category, description, date } = req.body;
  if (!amount || amount <= 0 || !category || !date) {
    return res.status(400).json({ error: "Invalid input" });
  }
  db.run(
    "INSERT INTO expenses (amount, category, description, date) VALUES (?, ?, ?, ?)",
    [amount, category, description, date],
    function(err){
      if(err) return res.status(500).json({error:err.message});
      res.json({id:this.lastID});
    }
  );
});

app.get("/expenses", (req, res) => {
  const { category, sort } = req.query;
  let q = "SELECT * FROM expenses";
  let p = [];
  if(category){ q += " WHERE category=?"; p.push(category); }
  if(sort==="date_desc"){ q += " ORDER BY date DESC"; }
  db.all(q,p,(e,r)=> e?res.status(500).json(e):res.json(r));
});

app.listen(3000,()=>console.log("Backend running on 3000"));
