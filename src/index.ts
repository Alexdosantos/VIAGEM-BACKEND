import cors from "cors";
import express from "express";
import router from "./routers/index.routers";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
