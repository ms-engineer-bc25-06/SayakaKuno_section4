import { Router } from "express";
import { prisma } from "../prismaClient"; 

const router = Router();

router.get("/", async (req, res) => {
  const categories = await prisma.category.findMany();
  res.json(categories);
});

export default router;
