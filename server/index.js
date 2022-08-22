const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
//const colors = require('colors');
const connectDB = require('./config/db')

const port = process.env.PORT || 4000;

const app = express();

connectDB();

app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql: true,
}))

app.listen(port, console.log(`listening on port ${port}...`));

