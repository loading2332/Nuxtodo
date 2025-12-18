<script lang="ts" setup>
const route = useRoute();
const { data: todo, error, status } = await useFetch(`/api/todos/${route.params.id}`, { lazy: true });
</script>

<template>
	<div>
		<article
			v-if="status === 'pending'"
			aria-busy="true"
		/>
		<article
			v-else-if="error"
			class="error"
		>
			{{ error.message }}
		</article>
		<article v-else-if="todo">
			{{ todo.title }}
		</article>
	</div>
</template>
