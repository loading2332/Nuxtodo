import { db } from "../database";
import { todos } from "../database/schema";

export default defineEventHandler(async () => {
	return await db.select().from(todos);
});
