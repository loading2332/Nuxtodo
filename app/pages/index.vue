<script lang="ts" setup>
const { data: todos } = await useFetch("/api/todos");
</script>

<template>
	<div>
		<article
			v-for="todo in todos"
			:key="todo.id"
		>
			{{ todo.title }}
		</article>
	</div>
</template>
