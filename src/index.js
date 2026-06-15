const express = require("express");

const app = express();

const PORT = 5454;


app.get("/", (req, res) => {
    res.send("<h1>Backend Application is running</h1>");
});

let counter = 0;

app.get("/api/v1", (req, res) => {
    counter = counter + 1;
    return res.status(200).json({
        message: "Api is working",
        counter: counter
    })
});

app.get("/get-users", (req, res) => {
    return res.status(200).json({
        message: "There are no users in our application currently"
    });
});

app.get("/status", (req, res) => {
    return res.status(200).json({
        message: "implemented pipeline",
        counter: counter++
    })
});

app.get("/api/v2", (req, res) => {
    return res.status(200).json({
        message: "Finally pipeline is working"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at port : ${PORT}`);
});