import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const PORT = 8000;

mongoose
  .connect(
    'mongodb+srv://travel:ClDLTjt41P97RttX@cluster0.5rpt1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  )
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.log('Error connecting to MongoDB', error);
  });
