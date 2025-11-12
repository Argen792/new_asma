<script lang="ts">
  import { fade } from 'svelte/transition';
  import "./app.css";

  import Screen1 from "./lib/Screen1.svelte";
  import Screen2 from "./lib/Screen2.svelte";
  import Screen3 from "./lib/Screen3.svelte";
  import Screen4 from "./lib/Screen4.svelte";
  import Screen5 from "./lib/Screen5.svelte";
  import Screen6 from "./lib/Screen6.svelte";
  import Screen7 from "./lib/Screen7.svelte";
  import Screen8 from "./lib/Screen8.svelte";
  import Screen9 from "./lib/Screen9.svelte";
  import Screen10 from "./lib/Screen10.svelte";

  let currentScreen = 1;
  const totalScreens = 10;

  function nextScreen() {
    if (currentScreen < totalScreens) {
      currentScreen += 1;
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      nextScreen();
    }
  }
</script>

<div on:click={nextScreen} on:keydown={handleKeydown} role="button" tabindex="0" class="cursor-pointer">
  {#if currentScreen === 1}
    <div transition:fade={{ duration: 500 }}>
      <Screen1 />
    </div>
  {/if}
  {#if currentScreen === 2}
    <div transition:fade={{ duration: 500 }}>
      <Screen2 />
    </div>
  {/if}
  {#if currentScreen === 3}
    <div transition:fade={{ duration: 500 }}>
      <Screen3 />
    </div>
  {/if}
  {#if currentScreen === 4}
    <div transition:fade={{ duration: 500 }}>
      <Screen4 />
    </div>
  {/if}
  {#if currentScreen === 5}
    <div transition:fade={{ duration: 500 }}>
      <Screen5 />
    </div>
  {/if}
  {#if currentScreen === 6}
    <div transition:fade={{ duration: 500 }}>
      <Screen6 />
    </div>
  {/if}
  {#if currentScreen === 7}
    <div transition:fade={{ duration: 500 }}>
      <Screen7 />
    </div>
  {/if}
  {#if currentScreen === 8}
    <div transition:fade={{ duration: 500 }}>
      <Screen8 />
    </div>
  {/if}
  {#if currentScreen === 9}
    <div transition:fade={{ duration: 500 }}>
      <Screen9 />
    </div>
  {/if}
  {#if currentScreen === 10}
    <div transition:fade={{ duration: 500 }}>
      <Screen10 />
    </div>
  {/if}
</div>
