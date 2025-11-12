<div class="relative flex min-h-screen w-full flex-col items-center overflow-hidden">
<!-- Animated Particles -->
<div class="absolute top-0 left-0 h-full w-full overflow-hidden z-0">
<div class="relative h-full w-full">
<div class="particle"></div><div class="particle"></div><div class="particle"></div>
<div class="particle"></div><div class="particle"></div><div class="particle"></div>
<div class="particle"></div><div class="particle"></div><div class="particle"></div>
<div class="particle"></div>
</div>
</div>
<!-- Floral Frame -->
<div class="pointer-events-none absolute inset-0 z-20 border-[12px] border-gold-accent/50 rounded-xl"></div>
<div class="pointer-events-none absolute inset-4 z-20 border-2 border-gold-accent/80 rounded-lg"></div>
<main class="z-10 flex w-full max-w-2xl flex-col items-center p-4 pt-16 sm:p-8 sm:pt-24">
<div class="w-full space-y-8">
<div class="text-center">
<h1 class="font-display text-3xl font-semibold tracking-wide text-text-warm-grey dark:text-ivory/90 sm:text-4xl">Qualities I Cherish</h1>
</div>
<!-- Card 1 -->
<div class="group transform transition-all duration-500 ease-in-out hover:scale-105">
<div class="relative overflow-hidden rounded-lg bg-ivory/80 dark:bg-background-dark/50 p-6 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-primary/20 hover:shadow-2xl">
<div class="absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:from-gold-accent/10 group-hover:to-blush-pink/10 group-hover:opacity-100"></div>
<div class="relative z-10">
<p class="text-lg font-medium leading-relaxed text-text-warm-grey dark:text-ivory/90">Your gentle and kind personality.</p>
<p class="mt-2 text-base text-text-warm-grey/70 dark:text-ivory/70">A beautiful trait that shines through in all you do.</p>
</div>
</div>
</div>
<!-- Card 2 -->
<div class="group transform transition-all duration-500 ease-in-out hover:scale-105">
<div class="relative overflow-hidden rounded-lg bg-ivory/80 dark:bg-background-dark/50 p-6 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-primary/20 hover:shadow-2xl">
<div class="absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:from-gold-accent/10 group-hover:to-lavender-mist/10 group-hover:opacity-100"></div>
<div class="relative z-10">
<p class="text-lg font-medium leading-relaxed text-text-warm-grey dark:text-ivory/90">The way you make others feel comfortable and heard.</p>
<p class="mt-2 text-base text-text-warm-grey/70 dark:text-ivory/70">A true gift that creates a space of warmth and trust.</p>
</div>
</div>
</div>
<!-- Card 3 -->
<div class="group transform transition-all duration-500 ease-in-out hover:scale-105">
<div class="relative overflow-hidden rounded-lg bg-ivory/80 dark:bg-background-dark/50 p-6 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-primary/20 hover:shadow-2xl">
<div class="absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:from-gold-accent/10 group-hover:to-blush-pink/10 group-hover:opacity-100"></div>
<div class="relative z-10">
<p class="text-lg font-medium leading-relaxed text-text-warm-grey dark:text-ivory/90">Your love for cats — it shows your soft heart and care for Allah’s creations.</p>
<div class="mt-3 flex items-center gap-2 text-text-warm-grey/70 dark:text-ivory/70">
<span class="material-symbols-outlined text-gold-accent text-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">pets</span>
<p class="text-base">A small cat paw icon subtly appears.</p>
</div>
</div>
</div>
</div>
<!-- Card 4 -->
<div class="group transform transition-all duration-500 ease-in-out hover:scale-105">
<div class="relative overflow-hidden rounded-lg bg-ivory/80 dark:bg-background-dark/50 p-6 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-primary/20 hover:shadow-2xl">
<div class="absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:from-gold-accent/10 group-hover:to-lavender-mist/10 group-hover:opacity-100"></div>
<div class="relative z-10">
<p class="text-lg font-medium leading-relaxed text-text-warm-grey dark:text-ivory/90">How genuine and thoughtful you are in conversation.</p>
<p class="mt-2 text-base text-text-warm-grey/70 dark:text-ivory/70">Your sincerity is a quality to be admired.</p>
</div>
</div>
</div>
</div>
</main>
</div>

<style>
    /* Custom styles for animations and background particles */
    .particle {
      position: absolute;
      border-radius: 50%;
      background: rgba(212, 169, 94, 0.4);
      opacity: 0;
      animation: rise 15s infinite ease-in;
    }
    @keyframes rise {
      0% {
        transform: translateY(0);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      100% {
        transform: translateY(-1000px);
        opacity: 0;
      }
    }
    /* Delay for staggered particle effect */
    .particle:nth-of-type(1) { width: 4px; height: 4px; left: 10%; animation-delay: 1s; }
    .particle:nth-of-type(2) { width: 6px; height: 6px; left: 20%; animation-delay: 2s; }
    .particle:nth-of-type(3) { width: 3px; height: 3px; left: 30%; animation-delay: 4s; }
    .particle:nth-of-type(4) { width: 5px; height: 5px; left: 40%; animation-delay: 6s; }
    .particle:nth-of-type(5) { width: 4px; height: 4px; left: 50%; animation-delay: 8s; }
    .particle:nth-of-type(6) { width: 6px; height: 6px; left: 60%; animation-delay: 10s; }
    .particle:nth-of-type(7) { width: 3px; height: 3px; left: 70%; animation-delay: 5s; }
    .particle:nth-of-type(8) { width: 5px; height: 5px; left: 80%; animation-delay: 3s; }
    .particle:nth-of-type(9) { width: 4px; height: 4px; left: 90%; animation-delay: 7s; }
    .particle:nth-of-type(10) { width: 6px; height: 6px; left: 95%; animation-delay: 9s; }
</style>
