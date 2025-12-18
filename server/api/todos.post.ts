import { z } from "zod";
import { db } from "../database";
import { todos } from "../database/schema";

const todoSchema = z.object({
	title: z.string().min(1, "标题不能为空").max(100, "标题最多100个字符"),
});

export default defineEventHandler(async (event) => {
	const body = await readValidatedBody(event, todoSchema.parse);

	const [newTodo] = await db.insert(todos).values({
		title: body.title,
		completed: false,
	}).returning();

	return newTodo;
});
