
import express from 'express'
import userRoutes from "./routes/userRoutes.js"
import express from "express";
import cors from "cors"; // install 
import helmet from "helmet"; // install 
import dotenv from "dotenv";
import rateLimit from "express-rate-limit"; // install
import cors from 'cors' // install 

const app = express()

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: "Too many requests, please try again later." }
});

app.use('/api/', limiter)

app.use('/api/users', usersRoute);