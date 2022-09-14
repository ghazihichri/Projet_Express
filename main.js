const express = require('express')
const app = express ()
const port = 5000


var aujourdhui = new Date()
var today = aujourdhui.getDay()
var heure = aujourdhui.getHours()

// console.log(aujourdhui.getDay())
// console.log(aujourdhui.getHours())

// var Date  =   {getDay:'',getHours:'' }


const MiddleWare=(req,res,next)=>{
    console.log(today)
    if(today == 0 || today == 6 || heure >= 17 || heure <= 9)
    {
        return res.send('arja3 ghodwa')
    }

    next()
}

app.use(MiddleWare)

app.get('/Contactez_nous',(req,res)=>{
    res.sendFile(__dirname+'/Public/Contactez-nous.html')
})

app.get('/Nos_services',(req,res)=>{
    res.sendFile(__dirname+'/Public/NosServices.html')
})

app.get('/Page_d_accueil',(req,res)=>{
    res.sendFile(__dirname+'/Public/PageD_accueil.html')
})


app.get('/style.css',(req,res)=>{
    res.sendFile(__dirname+'/Public/style.css')
})







app.listen(port , console.log('serveur travail sur le port 5000'))

