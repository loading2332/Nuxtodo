import { db } from "~~/server/database";
import z from "zod";

const paramsSchema = z.object({
	id: z.coerce.number(),
});
export default defineEventHandler(async (event) => {
	const result = await getValidatedRouterParams(event, paramsSchema.safeParse);
	if (!result.success) {
		return sendError(event, createError({ statusCode: 400, statusMessage: "Invalid ID parameter" }));
	}

	const todo = await db.query.todos.findFirst({
		where: (todos, { eq }) => eq(todos.id, result.data.id),
	});

	if (!todo) {
		return sendError(event, createError({ statusCode: 404, statusMessage: "Todo not found" }));
	}

	return todo;
});
