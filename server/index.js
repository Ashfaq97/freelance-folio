const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const cors = require('cors');

const port = process.env.PORT || 4000;

const app = express();

app.use(cors());

connectDB();

app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql: true,
}))

app.listen(port, console.log(`listening on port ${port}...`));

