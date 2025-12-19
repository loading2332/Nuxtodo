<script lang="ts" setup>
const route = useRoute();
const { data: todo, error, status, refresh } = await useFetch(`/api/todos/${route.params.id}`, { lazy: true });
const isEditing = ref(false);
const editTitle = ref("");
const editCompleted = ref(false);

const startEdit = () => {
	editTitle.value = todo.value?.title ?? "";
	editCompleted.value = todo.value?.completed ?? false;
	isEditing.value = true;
};

const saveEdit = async () => {
	await $fetch(`/api/todos/${route.params.id}`, {
		method: "PATCH",
		body: {
			title: editTitle.value,
			completed: editCompleted.value,
		},
	});
	await refresh();
	isEditing.value = false;
};

const cancelEdit = () => {
	isEditing.value = false;
};
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
			<div v-if="!isEditing">
				<h2>{{ todo.title }}</h2>
				<p>state:{{ todo.completed ? "finished" : "unfinished" }}</p>
				<button @click="startEdit">
					Edit
				</button>
			</div>
			<div v-else>
				<label>
					title
					<input
						v-model="editTitle"
						type="text"
					>
				</label>
				<label>
					finished?
					<input
						v-model="editCompleted"
						type="checkbox"
					>
				</label>
				<div style="display: flex; gap: 1rem;margin-top: 1rem;">
					<button @click="saveEdit">
						save
					</button>
					<button @click="cancelEdit">
						cancel
					</button>
				</div>
			</div>
		</article>
	</div>
</template>
