import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port = 3000;

let countries = [];
let total;

async function searchVisited(val){
  const result = await db.query(`select country_code from visited_countries where country_code = '${val}'`);
  // console.log(result);
  if(result.rows.length === 0){
    return true;
  }
  else{
    return false;
  }
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "farhaan",
  port: 5000,
});
db.connect();



app.get("/", async (req, res) => {
  
  const result = await db.query("select country_code from visited_countries;");
      for(let i = 0;i<result.rows.length;i++){
        countries.push(result.rows[i].country_code);
      }
      total =  result.rows.length;
      // console.log(result.rows[0].country_code);
      res.render("index.ejs",{total : total,countries : countries});
});

app.post("/add", async (req,res) =>{
  const val = req.body.country.trim();
  // console.log(req.body.country); // comment this line !!!!!!
  const code = await db.query(`select country_code from countries where country_name = '${val}';`);
  if(code.rows.length === 0){
    console.log("error country not found");
    res.render("index.ejs",{error : "Country not added wrong name entered!",total : total,countries : countries});
  }
  else{
    if(await searchVisited(code.rows[0].country_code)){
      // countries.push(code.rows[0].country_code);
      const result = await db.query(`insert into visited_countries (country_code) values ('${code.rows[0].country_code}');`);
    }
    res.redirect("/");
  }
  
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});