const express = require('express');
const axios = require( 'axios');
const bodyParser = require('body-parser');
const app = express();
import auth from "./routes/auth";
import password from "./routes/changepassword";

const port = process.env.PORT || 5000; // Use environment variable for port
app.use(bodyParser.json());

app.use('/login', auth );
app.use('/changepassword',password);

app.listen(port, () => console.log(`Server listening on port ${port}`));
