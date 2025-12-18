<script lang="ts" setup>
const title = ref("");
const isSubmitting = ref(false); // 添加这行

const handleSubmit = async () => {
	isSubmitting.value = true; // 开始提交

	const result = await $fetch("/api/todos", {
		method: "POST",
		body: {
			title: title.value,
		},
	});

	isSubmitting.value = false;
	await navigateTo({
		name: "todos-id",
		params: { id: result?.id },
	});
};
</script>

<template>
	<div>
		<form @submit.prevent="handleSubmit">
			<label>
				todo
				<input
					v-model="title"
					name="title"
					required
				>
			</label>
			<div class="button-container">
				<button
					:aria-busy="isSubmitting"
					:disabled="isSubmitting"
				>
					Create
				</button>
			</div>
		</form>
	</div>
</template>
