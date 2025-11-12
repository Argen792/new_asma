<!--
@component
Screen1
@description
The introductory screen of the application. Displays a welcome message and prompts the user to continue.
-->
<div class="relative flex h-dvh min-h-screen w-full flex-col group/design-root overflow-hidden bg-gradient-to-b from-ivory to-blush-pink dark:from-background-dark dark:to-zinc-900">
<!-- Background Elements: Bokeh & Sparkles -->
<div class="absolute inset-0 z-0 overflow-hidden">
<div class="absolute -bottom-1/4 -left-1/4 h-1/2 w-1/2 rounded-full bg-lavender-mist/20 blur-3xl dark:bg-lavender-mist/10"></div>
<div class="absolute -top-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-warm-beige/30 blur-3xl dark:bg-warm-beige/10"></div>
<div class="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blush-pink/20 blur-2xl dark:bg-blush-pink/5"></div>
<!-- Sparkles would ideally be animated with JS/CSS, but here's a static representation -->
<span class="absolute top-[10%] left-[20%] text-sm text-gold-accent opacity-50">✦</span>
<span class="absolute top-[25%] left-[80%] text-xs text-gold-accent opacity-60">✧</span>
<span class="absolute top-[50%] left-[10%] text-base text-gold-accent opacity-40">✨</span>
<span class="absolute top-[70%] left-[90%] text-sm text-gold-accent opacity-50">✦</span>
<span class="absolute top-[90%] left-[40%] text-xs text-gold-accent opacity-70">✧</span>
</div>
<main class="relative z-10 flex flex-grow flex-col items-center justify-center p-4 text-center text-[#191610] dark:text-gray-200">
<!-- This container represents the state after the envelope opens -->
<div class="flex flex-col items-center justify-center gap-6">
<!-- The envelope would be here initially, this is the post-transition state -->
<div class="relative w-48 h-32 mb-8 hidden"> <!-- Hidden, as it would have transitioned away -->
<div class="absolute inset-0 bg-warm-beige shadow-lg rounded-lg transform -rotate-3"></div>
<div class="absolute inset-0 bg-ivory shadow-xl rounded-lg flex items-center justify-center">
<p class="font-arabic text-2xl text-gold-accent">هدية صغيرة</p>
</div>
</div>
<h2 class="text-[#191610] dark:text-ivory tracking-light text-[28px] font-bold leading-tight px-4 text-center">A small gift of dua and peace for you 🌿</h2>
<p class="text-[#191610]/80 dark:text-ivory/80 text-base font-normal leading-normal px-4 text-center">Tap to open</p>
</div>
</main>
</div>
