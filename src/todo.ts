import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class TodoController {
  getTodo = async () => {
    //handle errors from the database and also from different errors.
    const todos = await prisma.todo.findMany();
  };
}
