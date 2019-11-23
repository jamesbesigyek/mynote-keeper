//export  function passing app and Db as parameters with route as excution.
module.exports = (app,db)=>{
    app.post("/notes",(req,res)=>{

        
        // to create  post here
        res.send( "Hello world")
        console.log(req.body)
    })
}