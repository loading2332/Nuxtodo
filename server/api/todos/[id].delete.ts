import { db } from "~~/server/database";
import z from "zod";
import { todos } from "~~/server/database/schema";
import { eq } from "drizzle-orm";

const paramsSchema = z.object({
	id: z.coerce.number(),
});

export default defineEventHandler(async (event) => {
	const result = await getValidatedRouterParams(event, paramsSchema.safeParse);
	if (!result.success) {
		return sendError(event, createError({ statusCode: 400, statusMessage: "Invalid ID parameter" }));
	}
	const deleteTodos = await db.delete(todos).where(eq(todos.id, result.data.id)).returning();
	if (deleteTodos.length === 0) {
		return sendError(event, createError({ statusCode: 404, statusMessage: "Todo not found" }));
	}
	return { message: "Todo deleted successfully" };
});
