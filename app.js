import express from 'express'
import cors from 'cors'
import AccountRouter from './routes/AccountRoutes.js'
import StudentRoutes from './routes/StudentsRoutes.js'

const app = express();

app.use(cors({
      origin: "https://jude-crud.vercel.app",
    Credentials: true
}))


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", AccountRouter);
app.use("/api", StudentRoutes);



export default app