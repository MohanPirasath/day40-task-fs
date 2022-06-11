// const fs = require("fs")
// const express=require("express");
// const { error } = require("console");

import fs from "fs"
import express from "express"

const app=express()

const PORT="4000"

const date=new Date();

 const day=("0" + date.getDate()).slice(-2);
 const month=("0" + ( date.getMonth() + 1)).slice(-2);
 const year=( date.getFullYear())

 const hours=(date.getHours())
 const min=("0" +date.getMinutes()).slice(-2)
//  const min=(date.getMinutes())
 const sec=(date.getSeconds())
const Time= "The Time is  " + (hours + ":" + min +":" + sec)

 const full_date=(day + "-" + month + "-" + year)


app.get("/",function(req,res){
    res.send("give the end point of '/time' to see the time and use '/date' to see the current date and time")
})


app.get("/time",function(req,res){
    fs.writeFile(`${full_date}.txt`,Time,(error)=>console.log("completed"))
    
// res.send(`${Time}`)

    fs.readFile(`${full_date}.txt`,"utf-8",(error,data)=>{
        if(error){
            console.log("error da")
        }
        else( res.send(`${data}`))
       }) 
    
})



app.get("/date",function(req,res){
    // fs.writeFile(`${full_date}.txt`,Time,(error)=>console.log("completed"))

    fs.writeFile(`date_time.txt`,
    (`Date:${full_date} And  ${Time}`),
    (error)=>console.log("completed"))

    fs.readFile(`date_time.txt`,"utf-8",(error,data)=>{
        if(error){
            console.log("error da dai")
        }
        else{
            res.send(data)
        }
    })
})

app.listen(PORT,()=>console.log(`App started in ${PORT}`))