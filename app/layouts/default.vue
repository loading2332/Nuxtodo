<template>
	<div>
		<AppNavBar />
		<main class="container">
			<slot />
		</main>
	</div>
</template>

<style>
	.button-container {
		display: flex;
		justify-content: flex-end;
	}
</style>
