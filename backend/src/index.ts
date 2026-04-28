import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

// ✅ Middleware first
app.use(cors());
app.use(express.json());

// ✅ Then routes
app.use("/", routes);

app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(5000, () => {
  console.log("Server running on 5000");
});