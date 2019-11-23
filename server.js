const express       =   require("express")
const mongoClient =   require("mongodb").mongoClient
const bodyparser    =   require("body-parser")

const app   = express()
const port = 7000
app.use(bodyparser.urlencoded({extended:true}))
require("./app/routes")(app,{})
app.use(bodyparser.json)


app.listen(port,()=>{console.log("listening on port:" + port)})