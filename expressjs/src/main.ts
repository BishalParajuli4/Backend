import { error } from "console";
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
app.use(express.json());

app.post("/products",( req: Request, res: Response)=>{
    const{name, price, description} = req.body

    if(!name || !price || !description){
        res.status(400).json({error: "Please provide appropriate data's"});
    };

    // if(!price){
    //     res.status(400).json({error: "Please Enter the appropriate price"})
    // }

    const newProduct = {
        id: products.length + 1,
        name: name, 
        price: price,
        description: description,
    };
    products.push(newProduct);
    res.status(200).json(newProduct);
    
});

app.get ('/products',(req:Request , res:Response)=>{
    res.json(products);
})

app.get('/',(req: Request, res: Response)=>{
    res.send("Hello World");
});
app.listen(PORT,()=>{
    console.log(`Server is running : ${PORT}`);
});

