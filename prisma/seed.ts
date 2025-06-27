
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const initialCategories = ["Food", "Transport", "Utilities"];
  for (const name of initialCategories) {
    await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }
  console.log("Seeding complete!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
