<script lang="ts" setup>
const title = ref("");
const isSubmitting = ref(false); // 添加这行

const handleSubmit = async () => {
	isSubmitting.value = true; // 开始提交

	await $fetch("/api/todos", {
		method: "POST",
		body: {
			title: title.value,
		},
	});

	isSubmitting.value = false;
	await navigateTo("/");
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
