const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const app  = express();
const connectDb  = require("./config/dbConnection");
const valitadeMpesaConfigurations = require("./config/mpesaConfig");

//connectDb();
valitadeMpesaConfigurations();
const port = process.env.PORT || 5000;

// this line will parse all the data recieved from the server
app.use(express.json());

app.use("/api/contacts",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use("/api/payments",require("./routes/paymentRoutes"));

app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})