const express = require("express");
const app = express();
const PORT = 3000;

// routers
const mainRouter = require("./routers/api/main");

// setting up routers
app.use("/", mainRouter);

app.listen(3000, () => {
    console.log(`Server running on port: ${PORT}`);
});
