<script lang="ts">
	import { fade } from 'svelte/transition';
	import './app.css';

	import Screen1 from './lib/Screen1.svelte';
	import Screen2 from './lib/Screen2.svelte';
	import Screen3 from './lib/Screen3.svelte';
	import Screen4 from './lib/Screen4.svelte';
	import Screen5 from './lib/Screen5.svelte';
	import Screen6 from './lib/Screen6.svelte';
	import Screen7 from './lib/Screen7.svelte';
	import Screen8 from './lib/Screen8.svelte';
	import Screen9 from './lib/Screen9.svelte';
	import Screen10 from './lib/Screen10.svelte';

	const screens = [
		Screen1,
		Screen2,
		Screen3,
		Screen4,
		Screen5,
		Screen6,
		Screen7,
		Screen8,
		Screen9,
		Screen10
	];

	let currentScreen = 1;

	function nextScreen() {
		currentScreen = (currentScreen % screens.length) + 1;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			nextScreen();
		}
	}
</script>

<div
	on:click={nextScreen}
	on:keydown={handleKeydown}
	role="button"
	tabindex="0"
	class="cursor-pointer"
>
	<div transition:fade={{ duration: 500 }}>
		<svelte:component this={screens[currentScreen - 1]} />
	</div>
</div>
