const express=require("express")
const bodyparser=require("body-parser")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express()
app.use(cors())

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
mongoose.connect('mongodb+srv://TheerthaPraveen:Theertha08@cluster0.eqg1day.mongodb.net/patientracker?retryWrites=true&w=majority')


app.post("/doctorlogin",async (req,res)=>{
    const data=req.body
    const ob=new doctorModel(data)
    ob.save((error,data)=>{
        if(error)
        {
          res.send("error occured")
        }
        else
        {
          res.send(data)
        }
    })
})

app.get("/patientlogin",async(req,res)=>{
    patientModel.find((error,data)=>{
        if(error){
            res.send(error)
        }
        else{
            res.send(data)
        }
    })
})

app.listen(3000,()=>{
    console.log()
})