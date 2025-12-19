import { db } from "~~/server/database";
import { todos } from "~~/server/database/schema";
import { z } from "zod";
import { eq } from "drizzle-orm";

const paramsSchema = z.object({
	id: z.coerce.number(),
});

const bodySchema = z.object({
	title: z.string().min(1).max(255).optional(),
	completed: z.boolean().optional(),
});

export default defineEventHandler(async (event) => {
	const paramsResult = await getValidatedRouterParams(event, paramsSchema.safeParse);
	if (!paramsResult.success) {
		return sendError(event, createError({ statusCode: 400, statusMessage: "invalid id" }));
	}
	const body = await readValidatedBody(event, bodySchema.parse);

	const result = await db.update(todos).set({
		title: body.title,
		completed: body.completed,
	}).where(eq(todos.id, paramsResult.data.id)).returning();

	return result;
},
);
