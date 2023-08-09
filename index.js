const express = require("express");
const app = express();

app.set("port", 7000)

app.listen(app.get("port"), () => {
    console.log(`server running on port ${app.get("port")}`);
})

app.get("/api/v1/testNewOperatingSystem", (req, res) => {
    res.send("welcome to my api from a new operating system")
})