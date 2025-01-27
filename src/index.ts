import express from "express";
import todoRouter from "./routes";
const app = express();

app.use(express.json());

app.use("/", todoRouter);

app.listen(9000, () => {
  console.log("Server Running");
});
