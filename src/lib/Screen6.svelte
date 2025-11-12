<div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden sunrise-gradient dark:dark-gradient">
<header class="absolute top-0 right-0 z-10 p-4">
<button on:click={() => console.log('Audio button clicked!')} class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-transparent text-[#191610] dark:text-warm-beige gap-2 pl-4 text-sm font-bold leading-normal tracking-[0.015em]">
<span class="material-symbols-outlined text-[#191610] dark:text-warm-beige">volume_up</span>
</button>
</header>
<main class="flex flex-col justify-center items-center text-center flex-grow px-6 py-20 text-[#191610] dark:text-ivory">
<div class="w-full max-w-md">
<h2 class="text-3xl font-bold leading-tight tracking-tight mb-8">For the Year Ahead</h2>
<p class="text-lg font-normal leading-relaxed mb-6">
                    Two weeks may be a short time to know someone, but I already see your calm, kind nature — a rare thing. May this year bring you growth, strength, and contentment in every small blessing. Keep being the person who spreads warmth wherever she goes.
                </p>
<div class="mt-12">
<p class="text-lg font-normal leading-normal italic">With warm wishes,</p>
<p class="text-lg font-normal leading-normal mt-2">Sender's Name</p>
</div>
</div>
</main>
</div>

<style>
    .sunrise-gradient {
        background: linear-gradient(to bottom, #FDF9F3, #D4A95E, #F4DADA);
    }
    .dark .dark-gradient {
            background: linear-gradient(to bottom, #1f1b13, #4a3b1f, #3b2c2c);
    }
</style>
