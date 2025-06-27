import { Router } from "express";
import { prisma } from "../prismaClient";

const router = Router();

// GET /api/transactions へ対応するのはこの「"/"」
router.get("/", async (_req, res) => {
  res.json(await prisma.transaction.findMany());
});

export default router;




// import { Router } from "express";
// import { prisma } from "../prismaClient";

// const router = Router();

// // GET /api/transactions — 全件取得
// router.get("/", async (_req, res) => {
//   const txs = await prisma.transaction.findMany({
//     include: { category: true },  // 関連するカテゴリも取得したい場合
//   });
//   res.json(txs);
// });

// // GET /api/transactions/:id — 指定ID取得
// router.get("/:id", async (req, res) => {
//   const id = Number(req.params.id);
//   const tx = await prisma.transaction.findUnique({
//     where: { id },
//     include: { category: true },
//   });
//   if (!tx) {
//     return res.status(404).json({ message: "Transaction not found" });
//   }
//   res.json(tx);
// });

// // POST /api/transactions — 新規作成
// router.post("/", async (req, res) => {
//   const { date, description, amount, categoryId } = req.body;
//   if (!date || amount == null || !categoryId) {
//     return res.status(400).json({ message: "Missing required fields" });
//   }
//   const newTx = await prisma.transaction.create({
//     data: {
//       date: new Date(date),
//       description,
//       amount,
//       category: { connect: { id: categoryId } },
//     },
//   });
//   res.status(201).json(newTx);
// });

// // PUT /api/transactions/:id — 更新
// router.put("/:id", async (req, res) => {
//   const id = Number(req.params.id);
//   const { date, description, amount, categoryId } = req.body;
//   try {
//     const updated = await prisma.transaction.update({
//       where: { id },
//       data: {
//         date: new Date(date),
//         description,
//         amount,
//         category: { connect: { id: categoryId } },
//       },
//     });
//     res.json(updated);
//   } catch (e) {
//     return res.status(404).json({ message: "Transaction not found or invalid data" });
//   }
// });

// // DELETE /api/transactions/:id — 削除
// router.delete("/:id", async (req, res) => {
//   const id = Number(req.params.id);
//   try {
//     await prisma.transaction.delete({ where: { id } });
//     res.json({ message: "Deleted successfully" });
//   } catch (e) {
//     return res.status(404).json({ message: "Transaction not found" });
//   }
// });

// export default router;
