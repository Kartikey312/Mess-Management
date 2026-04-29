import express from "express";
import cors from "cors";
import "./config/db";
import routes from "./routes/index";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});