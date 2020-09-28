import express from 'express'
import api from './src/routes/api'
import homeRouter from './src/routes/homeRouter'
import path from 'path'
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from 'mongoose'
import morgan from "morgan"
import session from 'express-session'
import cookieParser from 'cookie-parser'

const app = express();

const port: number = parseInt(String(process.env.PORT)) || 3000;

app.use(morgan('dev'));

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(session({
    secret: String(process.env.SESSION_SECRET),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

app.use(express.static("build"));
app.use(
    "/css",
    express.static(path.join(__dirname, "build/css"))
)

app.use(
    "/js",
    express.static(path.join(__dirname, "build/js"))
)

app.use(
    "/images",
    express.static(path.join(__dirname, "build/images"))
)

// app.set("views", "./src/views");
// app.set("view engine", "ejs");

mongoose.connect(
    String(process.env.MFLIX_DB_URI),
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
const conn = mongoose.connection
conn.on('error', console.error.bind(console, 'Connection error'))

conn.once('open', () => {
    console.log('Connected to mongoDB')

    //main routes
    app.use("/api", api);
    app.use("/", homeRouter);
    app.use("*", (_req, res) => res.status(404).json({ error: "Not Found" }))

    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})






