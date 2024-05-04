const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const auth = require ( "./routes/auth");
const password = require ("./routes/changepassword");

const port = process.env.PORT || 5000; // Use environment variable for port
app.use(bodyParser.json());

app.use('/login', auth );
app.use('/changepassword',password);

app.listen(port, () => console.log(`Server listening on port ${port}`));
