import express, {Request, Response} from "express";
const app = express();

const PORT = 2000;


interface Movie {
    id:number;
    name: string;
    gener: string;
    description: string;
}

const movies: Movie[] = [];
app.use(express.json());

app.post("/movies",( req: Request, res: Response)=>{
    const{name, gener, description} = req.body

    if(!name || !gener || !description){
        res.status(400).json({error: "Please provide appropriate data's"});
    };


    const newMovie = {
        id: movies.length + 1,
        name: name, 
        gener: gener,
        description: description,
    };
    movies.push(newMovie);
    res.status(200).json(newMovie);
    
});

app.get ('/movies',(req:Request , res:Response)=>{
    res.json(movies);
});

app.put('/movies/:id', (req: Request , res:Response)=>{
    const movieId = parseInt(req.params.id);

    
    const {name, gener , description} = req.body;
    const movieIndex = movies.findIndex((p)=>p.id === movieId);
    if (movieIndex === -1)
    {
        res.status(404).json({error: "No movie was found for given id"});
    };

    movies[movieIndex]={
        ...movies[movieIndex],
        name,
        gener,
        description,
    };

    res.status(201).json(movies[movieIndex]);

}
);

app.get("/movies/:id",(req: Request , res : Response)=>{
    const movieId = parseInt (req.params.id);
    const movie = movies.find((p) => p.id === movieId);
    if(!movie) {
        res.status(404).json({error : "No Movie Found"});
    }
    res.status(200).json(movie);
});

app.delete("/movies/:id", (req : Request , res : Response)=>{
    const movieId = parseInt(req.params.id);
    const movieIndex = movies.findIndex((p) => p.id === movieId);

    const deletedMovies = movies.splice(movieIndex,1);
    res.status(200).json(deletedMovies);
}
);

app.get('/',(req: Request, res: Response)=>{
    res.send("NETFLIX");
});
app.listen(PORT,()=>{
    console.log(`Server is running : ${PORT}`);
});

