<script lang="ts" setup>
const { data: todos, error, status } = await useFetch("/api/todos", { lazy: true });
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
		</article>
		<article v-if="error">
			Error: {{ error.message }}
		</article>
	</div>
</template>
