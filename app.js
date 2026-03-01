import express from 'express'
import cors from 'cors'
import AccountRouter from './routes/AccountRoutes.js'
import StudentRoutes from './routes/StudentsRoutes.js'

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    Credentials: true
}))


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", AccountRouter);
app.use("/api", StudentRoutes);



export default app