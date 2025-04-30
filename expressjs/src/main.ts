import express, {Request, Response} from "express";
const app = express();

const PORT = 3000;

interface Product {
    id:number;
    name: string;
    price: number;
    description: string;
}

const products: Product[] = [];
app.post("/products",( req: Request, res: Response)=>{
    const{name, price, description} = req.body
    const newProduct = {
        id: products.length + 1,
        name: name, 
        price: price,
        description: description,
    };
    products.push(newProduct);
    res.status(200).json(newProduct);
    
});

app.get('/',(req: Request, res: Response)=>{
    res.send("Hello World");
});
app.listen(PORT,()=>{
    console.log(`Server is running : ${PORT}`);
});

