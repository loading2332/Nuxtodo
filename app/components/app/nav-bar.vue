<template>
	<nav class="container">
		<ul>
			<li>
				<NuxtLink :to="{ name: 'index' }">Todos</NuxtLink>
			</li>
		</ul>
		<ul>
			<li>
				<NuxtLink :to="{ name: 'create' }">Create Todos</NuxtLink>
			</li>
		</ul>
	</nav>
</template>
