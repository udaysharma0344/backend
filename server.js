const express = require("express");
const products = require("./data");
const app = express();

const Port = 5000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.listen(Port, () => {
    console.log(`Server is running on ${Port}`)
});

// que 1
const product = require("./data")
app.get("/api/products", (req, res) => {
    res.send(product)
})



// que 2
// http://localhost:5000/api/price/?price=200x
app.get("/api/price", (req, res) => {
    const num = req.query.price
    console.log(num)
    const a = product.filter(
        (item) => item.price > num
    )
    res.send(a);
})



// que 3
app.get("/api/products/:category", (req, res) => {
    const category = req.params.category;
    const a = product.filter(
        (product) => product.brand.toLowerCase() == category.toLowerCase()
    );
    res.send(a);
})



// que 4 
app.get('/api/products/ans/:category', (req, res) => {
    const value = req.params.category;
    const ans = product.filter((item) => { return item.category.toLocaleLowerCase() == value.toLocaleLowerCase() })
    res.send(ans)
})



// ques 5
app.get('/q5',(req,res)=>{
    
    res.send(hello)
})





// que 6


app.get('/product/searchkey', (req, res) => {
    const searchkey = req.query.searchkey;
    const filtered = product.filter(
        (item) => item.description.toLowerCase().includes(searchkey) || item.title.toLowerCase().includes(searchkey));
    res.send(filtered)
});


// extra

app.get('/pro/arch/brandcategory', (req, res) => {
    let brand = req.query.brand;
    let category = req.query.category;
    let data = product.filter(
        (item) => {
            return item.brand.toLowerCase().includes(brand)
                &&
                item.category.toLowerCase().includes(category)
        })
    res.send(data)
})