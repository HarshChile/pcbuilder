const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");
app.use(express.json());
app.use(cors());
const componentsRoutes = require("./routes/components");
app.use("/api/components", componentsRoutes);
const cartRoutes = require("./routes/cart.routes");

app.use("/api/cart", cartRoutes);


app.use("/images", express.static("public/images"));

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server is running on port 3001");
    });
}).catch((err) => {
    console.error("DB sync failed:", err.message || err);
    console.warn("Starting server anyway so static assets are available. DB routes may fail until DB is available.");
    app.listen(3001, () => {
        console.log("Server is running on port 3001 (DB unavailable)");
    });
});