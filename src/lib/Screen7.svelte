<!--
@component
Screen7
@description
This screen presents a special gift to the user, featuring a video player, descriptive text, and an inspirational quote, all centered around a specific theme.
-->
<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<!-- Top App Bar -->
<header class="flex items-center p-4 pb-2 justify-between text-text-main">
<button class="flex size-12 shrink-0 items-center justify-center">
<span class="material-symbols-outlined">arrow_back</span>
</button>
<h2 class="flex-1 text-center font-display text-lg font-bold tracking-wide">For Asma Safiyyah</h2>
<div class="size-12 shrink-0"></div>
</header>
<main class="flex flex-1 flex-col items-center p-4">
<!-- Main Content Card -->
<div class="w-full max-w-md rounded-xl bg-ivory/80 backdrop-blur-sm p-6 pt-8 shadow-glow-soft text-center space-y-4">
<!-- Headline Text -->
<h1 class="font-display text-3xl font-bold leading-tight tracking-normal text-text-main">A Little Gift — Stories and Secrets of Cats 🐾</h1>
<!-- Body Text -->
<p class="text-base font-normal leading-relaxed text-text-subtle">
          You once mentioned how much you love cats — their calmness, curiosity, and how they make life softer. So I made this small gift for you: a playlist of fascinating and educational videos about cats — how they think, how they communicate, and the amazing ways Allah created them. It’s a journey into their world — full of wonder, science, and the reminder of how beautifully Allah designed every living being. May it bring you smiles, new facts, and peaceful curiosity whenever you watch it.
        </p>
<!-- Media Player -->
<div class="pt-2">
<div class="relative flex items-center justify-center bg-cover bg-center aspect-video rounded-xl" data-alt="Abstract gradient of warm beige and blush pink, suggesting a soft, serene background for a video player." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDmmnnq0RzNstzfGzoTfh2nY8xowziCtFwG4wWzGC_BYUZGVipqApoSBikGFatRbX1WGwF5ilcII_ZMyvZc9AV7ot698Yo1znI6cO4Yfv2ZsCfyVtJD_oGTOcqdE8JH18_bz2wPIbLpp3GbmYwUzoP-CMiJzIiTDG8e3SQE-UilvRsQXaFVD8v1h3LZyLNi9eDR4xSVZXkVhTB_9N17XoNupM8a4VuHp84ie5dW50QGNpaFhtmxiJO7PMXvh76qStY5MU04RW75Kik');">
<button on:click={() => console.log('Play button clicked!')} class="flex shrink-0 items-center justify-center rounded-full size-16 bg-black/30 text-white backdrop-blur-sm transition-transform hover:scale-110">
<span class="material-symbols-outlined text-4xl">play_arrow</span>
</button>
<div class="absolute inset-x-0 bottom-0 px-4 py-3">
<div class="flex h-4 items-center justify-center">
<div class="h-1.5 flex-[0.25] rounded-full bg-white"></div>
<div class="relative">
<div class="absolute -left-2 -top-2 size-4 rounded-full bg-white ring-4 ring-white/30"></div>
</div>
<div class="h-1.5 flex-1 rounded-full bg-white/40"></div>
</div>
<div class="flex items-center justify-between">
<p class="text-white text-xs font-medium tracking-wider">1:12</p>
<p class="text-white text-xs font-medium tracking-wider">4:58</p>
</div>
</div>
</div>
</div>
</div>
<!-- Quote Block -->
<div class="w-full max-w-md mt-8 px-4 text-center">
<div class="inline-block relative">
<span class="material-symbols-outlined absolute -top-1 -left-5 text-3xl text-primary/50 opacity-50">format_quote</span>
<p class="font-display text-base italic leading-relaxed text-text-subtle">
            Even a cat’s calm gaze is a reminder of Allah’s mercy in creation.
          </p>
<p class="font-arabic text-xl mt-2 text-text-main" dir="rtl">
            حتى نظرة القط الهادئة تذكير برحمة الله في الخلق.
          </p>
<span class="material-symbols-outlined absolute -bottom-1 -right-5 text-3xl text-primary/50 opacity-50">format_quote</span>
</div>
</div>
</main>
</div>

<style>
    body {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200"><path fill="%23F4DADA" fill-opacity="0.1" d="M86.32 28.35c-4.43 1.1-7.94 4.58-9.3 8.93-1.4 4.45-0.12 9.25 3.2 12.33 2.8 2.6 6.7 3.6 10.4 2.8l38.2-7.9c4.5-0.9 8.2-4.4 9.4-8.9 1.2-4.5-0.2-9.3-3.5-12.3-2.8-2.5-6.7-3.4-10.4-2.5l-38 7.5zm-53 82.2c-4.3 1.5-7.5 5.2-8.5 9.7-1.0 4.5 0.5 9.3 4.0 12.2 2.9 2.4 6.9 3.1 10.6 2.1l38.4-10.4c4.4-1.2 7.8-4.8 8.8-9.4 1.0-4.6-0.6-9.4-4.1-12.2-2.9-2.3-6.9-3.0-10.6-2.0l-38.6 10zm110.3-43.2c-4.4-0.8-8.9 1.1-11.6 4.6-2.8 3.5-3.5 8.2-1.9 12.4l16.7 42.8c1.6 4.3 5.7 7.2 10.3 7.0 4.6-0.2 8.7-3.4 10.1-7.8s0-9.3-3.2-12.4l-16.8-42.8c-1.5-3.8-4.8-6.5-8.6-6.8z"/></svg>');
    }
</style>
