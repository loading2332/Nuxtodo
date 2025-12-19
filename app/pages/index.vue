<script lang="ts" setup>
const { data: todos, error, status, refresh } = await useFetch("/api/todos", { lazy: true });
const isDeleting = ref(false);

const handleDelete = async (id: number) => {
	isDeleting.value = true; // on deleting

	await $fetch(`/api/todos/${id}`, {
		method: "DELETE",
	});
	refresh();
	isDeleting.value = false;
};
</script>

<template>
	<div>
		<article
			v-if="status === 'pending'"
			aria-busy="true"
		/>
		<article
			v-for="todo in todos"
			:key="todo.id"
		>
			{{ todo.title }}
			<div class="button-container">
				<NuxtLink
					role="button"
					:to="{ name: 'todos-id', params: { id: todo.id } }"
				>Detail</NuxtLink>
				<button @click="() => handleDelete(todo.id)">
					Delete
				</button>
			</div>
		</article>
		<article v-if="error">
			Error: {{ error.message }}
		</article>
	</div>
</template>
