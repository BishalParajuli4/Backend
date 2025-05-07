import {Request, Response} from "express";
import express from "express";
import products, { createProduct } from "../models/product";

const router = express.Router();

export function createProductController ( req: Request, res: Response){
    const{name, price, description} = req.body

    if(!name || !price || !description){
        res.status(400).json({error: "Please provide appropriate data's"});
    };

    // if(!price){
    //     res.status(400).json({error: "Please Enter the appropriate price"})
    // }
const newProduct = createProduct ({
    name: name,
    price: price,
    description: description,
})
    res.status(200).json(newProduct);
    
};

// router.post("/products",( req: Request, res: Response)=>{
//     const{name, price, description} = req.body

//     if(!name || !price || !description){
//         res.status(400).json({error: "Please provide appropriate data's"});
//     };

//     // if(!price){
//     //     res.status(400).json({error: "Please Enter the appropriate price"})
//     // }

//     const newProduct = {
//         id: products.length + 1,
//         name: name, 
//         price: price,
//         description: description,
//     };
//     products.push(newProduct);
//     res.status(200).json(newProduct);
    
// });

export function getAllProductController(req:Request , res:Response){
    res.json(products);
};

export function putProductController (req: Request , res:Response){
    const productId = parseInt(req.params.id);

    // const product = products.find((p)=> p.id === productId );
    // if(!product){
    //     res.status(404).json({error : "No Product found"});
    // }
    const {name, price , description} = req.body;
    const productIndex = products.findIndex((p)=>p.id === productId);
    if (productIndex === -1)
    {
        res.status(404).json({error: "No product was found for given id"});
    };

    products[productIndex]={
        ...products[productIndex],
        name,
        price,
        description,
    };

    res.status(201).json(products[productIndex]);

};

export function getProductbyIdController (req: Request , res : Response){
    const productId = parseInt (req.params.id);
    const product = products.find((p) => p.id === productId);
    if(!product) {
        res.status(404).json({error : "No Product Found"});
    }
    res.status(200).json(product);
};

export function deleteProductController (req : Request , res : Response)
{
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === productId);

    const deletedProducts = products.splice(productIndex,1);
    res.status(200).json(deletedProducts);
};
