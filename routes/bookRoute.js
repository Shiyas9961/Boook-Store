import express from "express"
import { Book } from "../model/bookDB.js"
const router = express.Router()


//Get all item
router.get('/',async (req,res)=>{
    try{
        const book = await Book.find({})
        return res.status(200).json({
            count : book.length,
            data : book
        })
    }catch(err){
        console.log(err.message)
        res.status(404).send({message : err.message})
    }
})

//Post new item
router.post('/',async (req,res)=>{
    try{
        if(!req.body.title || !req.body.auther || !req.body.publishYear){
            return res.status(400).send({ message : "send the data as title,auther,publishYear" })
        }
        const newBook = {
            title : req.body.title,
            auther : req.body.auther,
            publishYear : req.body.publishYear
        }
        const book = await Book.create(newBook)

        return res.status(200).send(book)
    }catch(err){
        console.log(err)
        res.status(404).send({ message : err.message })
    }
})

//Get each item
router.get('/:id',async (req,res)=>{
    try{
        const { id } = req.params
        const book = await Book.findById(id)
        return res.status(200).json(book)
    }catch(err){
        console.log(err.message)
        res.status(404).send({message : err.message})
    }
})

//Upadte each item
router.put('/:id',async (req,res)=>{
    try{
        if(!req.body.title || !req.body.auther || !req.body.publishYear){
            console.log("Must enter values")
            return res.status(404).send({message : "Must be enter values"})
        }
        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id,req.body)

        if(!result){
            return res.status(404).send({message:"Book not found"})
        }
        return res.status(200).send({message:"Updated successfully"})

    }catch(err){
        console.log(err.message)
        res.status(404).send({message : err.message})
    }
})

//Delete each item
router.delete('/:id',async (req,res)=>{
    try{
        const { id } = req.params
        const result = await Book.findByIdAndDelete(id)
        if(!result){
            return res.status(404).send({message : "Can't find the data"})
    }
    return res.status(200).send({message : "Deleted successfully"})
    }catch(err){
        console.log(err.message)
        return res.status(404).send({message : err.message})
    }
})

export default router