import express from "express";
import bodyParser from "body-parser";
import { log } from "console";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;

const app = express();

app.use(express.static(__dirname + '/public'));

let arr = [];

class Blog{
    constructor(title,time,content,description,id){
        this.title = title;
        this.time = time;
        this.content = content;
        this.description = description;
        this. id = id;
    }

    toString(){
        return `\ttitle : ${this.title},
        time : ${this.time},
        content : ${this.content},
        id : ${this.id}`
    }
}

function searchId(id){
    for (const blog of arr) {
        if (blog.id === id) {
            return blog;
        }
    }
    return null;
}

app.get("",(req,res)=>{
    const  d = new Date();
    const date = `${(d.getFullYear()).toString()}-${(d.getMonth()).toString()}-${(d.getDay()).toString()}-${(d.getHours()).toString()}:00 `;
    let content = "hey my name is farhaan";
    let obj = new Blog("far",date, content, "this is the descirption", "12");
    let obj1 = new Blog("far",date, content,"this is the descirption", "12");
    let obj2 = new Blog("far",date, content,"this is the descirption", "12");
    arr.push(obj);
    arr.push(obj1);
    arr.push(obj2);

    res.render(__dirname + "/views/home.ejs",{arr});
});

app.get('/block',(req,res)=>{
    let obj = searchId(req.query.id);
    console.log(req.query.id);
    res.send('OK');
});
app.listen(port,()=> console.log(`listening at port number ${port}`));