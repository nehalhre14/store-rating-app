require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

// models - ensure they are imported so associations register
const User = require("./models/User");
const Store = require("./models/Store");
const Rating = require("./models/Rating");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const storeRoutes = require("./routes/stores");
const ratingRoutes = require("./routes/ratings");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/stores", storeRoutes);
app.use("/api/ratings", ratingRoutes);

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await sequelize.authenticate();
    // sync models (for dev/demo). For production use migrations.
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("DB connection error:", err);
  }
})();
