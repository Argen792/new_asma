<!--
@component
Screen5
@description
This screen presents a series of prayers or well-wishes to the user, displayed in interactive, card-style elements.
-->
<div class="relative flex h-screen w-full flex-col items-center overflow-hidden p-4">
<!-- Animated Background Elements -->
<div class="light-ray"></div>
<!-- Particles would be here, usually handled by JS -->
<!-- Main Content -->
<div class="relative z-10 flex h-full w-full max-w-md flex-col items-center justify-center">
<header class="text-center mb-8">
<h1 class="text-3xl font-bold tracking-tight text-[#4a405a]">Prayers for You</h1>
</header>
<main class="flex flex-grow flex-col justify-center items-center w-full space-y-6">
<!-- Dua Card 1 -->
<div class="w-full max-w-xs cursor-pointer rounded-xl bg-ivory/80 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-primary/20 hover:shadow-2xl hover:scale-105 active:scale-100 active:shadow-primary/40">
<p class="text-center text-lg font-medium leading-relaxed text-[#5c506d]">May Allah bless your new year with peace in your heart, barakah in your days, and light in every step you take.</p>
</div>
<!-- Dua Card 2 -->
<div class="w-full max-w-sm cursor-pointer rounded-xl bg-warm-beige/80 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-primary/20 hover:shadow-2xl hover:scale-105 active:scale-100 active:shadow-primary/40">
<p class="text-center text-lg font-medium leading-relaxed text-[#5c506d]">May He guide you toward everything good and protect you from anything that could harm your peace.</p>
</div>
<!-- Dua Card 3 -->
<div class="w-full max-w-xs cursor-pointer rounded-xl bg-ivory/80 backdrop-blur-sm p-6 shadow-lg transition-all hover:shadow-primary/20 hover:shadow-2xl hover:scale-105 active:scale-100 active:shadow-primary/40">
<p class="text-center text-lg font-medium leading-relaxed text-[#5c506d]">May your kindness always return to you multiplied.</p>
</div>
</main>
<footer class="py-6 text-center">
<p class="text-sm text-[#4a405a]/70">Tap a prayer</p>
</footer>
</div>
</div>

<style>
    .light-ray {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(ellipse at 50% 30%, rgba(244, 218, 218, 0.2) 0%, rgba(244, 218, 218, 0) 70%);
      pointer-events: none;
    }
</style>
