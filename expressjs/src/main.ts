
import express, {Request, Response} from "express";
import router from "../src/routes/productRoute";


const app = express();

const PORT = 3000;


app.use(express.json());
app.use("/products", router);



app.get('/',(req: Request, res: Response)=>{
    res.send("Hello World");
});
app.listen(PORT,()=>{
    console.log(`Server is running : ${PORT}`);
});

export default app;