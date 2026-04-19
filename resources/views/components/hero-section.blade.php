<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-base pt-20">
    <div class="absolute inset-0 animated-grid opacity-[0.06]"></div>

    @foreach ([
        ['left' => '12%', 'top' => '18%', 'size' => 3, 'dur' => 14],
        ['left' => '78%', 'top' => '22%', 'size' => 2, 'dur' => 18],
        ['left' => '45%', 'top' => '12%', 'size' => 4, 'dur' => 22],
        ['left' => '88%', 'top' => '55%', 'size' => 2, 'dur' => 16],
        ['left' => '8%', 'top' => '62%', 'size' => 3, 'dur' => 20],
        ['left' => '55%', 'top' => '70%', 'size' => 2, 'dur' => 12],
        ['left' => '30%', 'top' => '40%', 'size' => 2, 'dur' => 25],
        ['left' => '65%', 'top' => '35%', 'size' => 3, 'dur' => 19],
    ] as $p)
        <div
            class="hero-particle absolute rounded-full bg-white/20 pointer-events-none"
            style="width: {{ $p['size'] }}px; height: {{ $p['size'] }}px; left: {{ $p['left'] }}; top: {{ $p['top'] }}; animation: float-particle {{ $p['dur'] }}s linear infinite;"
        ></div>
    @endforeach

    <div class="absolute top-1/4 left-0 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[100px] hero-orb-a"></div>
    <div class="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[100px] hero-orb-b"></div>

    <div
        class="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full blur-[80px]"
        style="background: radial-gradient(circle, rgba(0,240,255,0.06) 0%, rgba(168,85,247,0.06) 45%, transparent 70%);"
    ></div>

    <div class="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        <div class="flex flex-col gap-4 sm:gap-6 mb-10">
            <h1 class="font-orbitron text-5xl sm:text-6xl lg:text-[5rem] font-black leading-[1.1] tracking-tight">
                <span class="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                    Delusion Inspires
                </span>
                <br>
                <span class="text-white drop-shadow-lg">Innovation Conquers</span>
            </h1>
        </div>

        <p class="font-inter text-lg sm:text-xl text-white/70 mb-14 max-w-2xl mx-auto leading-relaxed font-light">
            Transforming visionary ideas into cutting-edge digital solutions. We
            architect the future, one line of code at a time with absolute
            precision and scale.
        </p>

        <div class="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center w-full">
            <a
                href="{{ route('contact') }}"
                class="group relative px-10 py-5 bg-neon-cyan text-dark-base font-orbitron font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.8)] w-full sm:w-auto inline-flex items-center justify-center"
            >
                <span class="relative z-10 flex items-center justify-center gap-3">
                    Get in Touch
                    <svg class="w-[22px] h-[22px] group-hover:translate-x-1.5 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-neon-cyan via-white/20 to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>

            <a
                href="#featured-projects"
                class="group relative px-10 py-5 border border-white/20 text-white font-orbitron font-bold text-lg rounded-xl transition-all duration-300 hover:border-neon-purple hover:bg-neon-purple/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] w-full sm:w-auto overflow-hidden inline-flex items-center justify-center"
            >
                <span class="relative z-10 flex items-center justify-center gap-3">
                    Explore Projects
                    <svg class="w-[22px] h-[22px] text-white/50 group-hover:text-neon-purple group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.847a4.5 4.5 0 003.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                </span>
            </a>
        </div>

        <button
            type="button"
            class="mt-24 flex flex-col items-center gap-4 cursor-pointer group border-0 bg-transparent p-0"
            data-scroll-to="#featured-projects"
            aria-label="Scroll to featured projects"
        >
            <div class="relative animate-bounce-slow">
                <div class="absolute inset-0 bg-neon-cyan/20 rounded-full blur-md group-hover:bg-neon-cyan/40 group-hover:blur-lg transition-all duration-300"></div>
                <div class="relative w-14 h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.1)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] group-hover:border-neon-cyan/50 transition-all duration-300 group-hover:scale-110">
                    <svg class="text-neon-cyan group-hover:text-white transition-colors duration-300 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 13.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
            <span class="font-inter text-[10px] tracking-[0.2em] uppercase text-white/30 group-hover:text-neon-cyan/80 transition-colors duration-300">
                Launch Forward
            </span>
        </button>
    </div>

    <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-base via-dark-base/80 to-transparent pointer-events-none"></div>
</section>
