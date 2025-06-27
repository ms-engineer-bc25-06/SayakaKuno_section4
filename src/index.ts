import dotenv from "dotenv";
dotenv.config();
import express from "express";
import categoriesRouter from "./router/categories";
import transactionsRouter from "./router/transactions";

const app = express();

// JSON ボディを扱えるように
app.use(express.json());

// ルーターのマウント?
app.use("/api/categories", categoriesRouter);
app.use("/api/transactions", transactionsRouter);


// Express を 4000 ポートで立ち上げる
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen(PORT, () => {
  console.log(`Express API listening on http://localhost:${PORT}`);
});

