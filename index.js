const express = require("express");
const app = express();

app.get("/books",function(req,res){
    console.log("hello");

    res.send([
        {
            BOOK1: "War and Peace"
        },
        {
           BOOK2: "Tom Jones"
        },
        {
            BOOK3: "Nightmare Abbey"
        },
        {
            BOOK4: "Sybil"
        },
    ]);
});

app.listen(5000,() => {
      console.log("5000 responded successfully");
});