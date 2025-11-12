<!--
@component
Screen8
@description
A celebratory screen that displays a heartfelt birthday wish with an animated gradient background and floating particles.
-->
<div class="relative flex h-screen min-h-screen w-full flex-col items-center justify-center group/design-root overflow-hidden animated-gradient p-4">
<!-- Particle System -->
<div class="particle" style="width: 3px; height: 3px; left: 25%; animation-delay: 0s; --x-end: 20px;"></div>
<div class="particle" style="width: 2px; height: 2px; left: 10%; animation-delay: 1s; --x-end: -20px;"></div>
<div class="particle" style="width: 4px; height: 4px; left: 70%; animation-delay: 2s; --x-end: 15px;"></div>
<div class="particle" style="width: 3px; height: 3px; left: 90%; animation-delay: 4s; --x-end: -10px;"></div>
<div class="particle" style="width: 2px; height: 2px; left: 35%; animation-delay: 6s; --x-end: 25px;"></div>
<div class="particle" style="width: 4px; height: 4px; left: 50%; animation-delay: 7s; --x-end: -15px;"></div>
<div class="particle" style="width: 3px; height: 3px; left: 80%; animation-delay: 8s; --x-end: 10px;"></div>
<div class="particle" style="width: 2px; height: 2px; left: 15%; animation-delay: 9s; --x-end: -30px;"></div>
<div class="particle" style="width: 3px; height: 3px; left: 60%; animation-delay: 11s; --x-end: 20px;"></div>
<div class="particle" style="width: 4px; height: 4px; left: 5%; animation-delay: 13s; --x-end: -5px;"></div>
<div class="particle" style="width: 2px; height: 2px; left: 45%; animation-delay: 14s; --x-end: 15px;"></div>
<div class="z-10 flex flex-col items-center justify-center text-center text-[#FDF9F3]" style="text-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);">
<h1 class="text-4xl md:text-5xl font-medium leading-tight">Wishing you a peaceful and blessed birthday, Asma Safiyyah <span class="text-[#D4A95E] text-3xl md:text-4xl inline-block">🌿</span></h1>
<p class="mt-8 text-lg md:text-xl font-normal opacity-90">— from someone who’s grateful to have met you.</p>
</div>
<button on:click={() => console.log('Audio button clicked!')} aria-label="Play or pause audio" class="material-symbols-outlined absolute bottom-6 right-6 z-20 text-[#FDF9F3] opacity-70 hover:opacity-100 transition-opacity text-3xl">
            volume_up
        </button>
</div>

<style>
    .animated-gradient {
        background: linear-gradient(-45deg, #E7E2EE, #F4DADA, #EFE6D9, #D4A95E);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .particle {
        position: absolute;
        bottom: 0;
        background-color: rgba(212, 169, 94, 0.7);
        border-radius: 50%;
        opacity: 0;
        animation: rise 20s infinite ease-in;
        box-shadow: 0 0 10px rgba(212, 169, 94, 0.8), 0 0 20px rgba(212, 169, 94, 0.5);
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
            transform: translateY(-100vh) translateX(var(--x-end));
            opacity: 0;
        }
    }
</style>
