const express=require('express');
var { createHandler } = require("graphql-http/lib/use/express")
const schema = require('./schema/schema');
const { graphqlHTTP } = require('express-graphql');
const { createGraphQLMiddleware } = require('graphql-http'); // Using graphql-http package
const connectDB = require('./config/db');
const cors = require('cors');
const colors=require('colors')
require('dotenv').config()

const port=process.env.PORT ||5000;
connectDB(); 

const app=express();
app.use(cors())
app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: process.env.NODE_ENV === 'development',
    })
  );
 

app.listen(port,()=>console.log(`server is running on port ${port}`))