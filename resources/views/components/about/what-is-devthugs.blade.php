@props(['showcaseImages'])

<section class="relative py-32 bg-dark-base overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center gap-16">
            <div class="flex-1 flex flex-col items-start text-left">
                <div class="inline-block px-4 py-1.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-inter tracking-widest uppercase mb-6">
                    ABOUT US
                </div>

                <h1 class="font-orbitron text-5xl sm:text-6xl font-bold mb-6 text-white">
                    We Are
                    <span class="text-neon-cyan drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">Devthugs</span>
                </h1>

                <div class="h-1 w-20 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mb-8"></div>

                <p class="font-inter text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mb-12">
                    An innovation engine transforming bold ideas into scalable digital
                    realities. We build at the intersection of cutting-edge technology
                    and fearless creativity.
                </p>

                <div class="flex flex-wrap gap-10 sm:gap-16">
                    <div class="flex flex-col" data-stat data-end="13" data-suffix="+">
                        <span class="font-orbitron text-3xl font-bold text-neon-cyan"><span data-stat-display>0</span></span>
                        <span class="font-inter text-sm text-white/50">Team Members</span>
                    </div>
                    <div class="flex flex-col" data-stat data-end="4" data-suffix="+">
                        <span class="font-orbitron text-3xl font-bold text-neon-cyan"><span data-stat-display>0</span></span>
                        <span class="font-inter text-sm text-white/50">Partners</span>
                    </div>
                    <div class="flex flex-col" data-stat data-end="2025" data-suffix="">
                        <span class="font-orbitron text-3xl font-bold text-neon-cyan"><span data-stat-display>0</span></span>
                        <span class="font-inter text-sm text-white/50">Founded</span>
                    </div>
                </div>
            </div>

            <div class="flex-1 w-full max-w-lg lg:max-w-none">
                <div
                    class="relative w-full aspect-square sm:aspect-[4/3] rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.15)] bg-dark-secondary"
                    data-showcase-slider
                    data-paused="0"
                >
                    @foreach ($showcaseImages as $i => $img)
                        <img
                            src="{{ asset($img) }}"
                            alt="Devthugs showcase {{ $i + 1 }}"
                            class="showcase-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-500 {{ $i === 0 ? 'opacity-100 z-[1]' : 'opacity-0 z-0' }}"
                            data-showcase-index="{{ $i }}"
                        >
                    @endforeach
                    <div class="absolute inset-0 bg-gradient-to-t from-dark-base/40 via-transparent to-transparent pointer-events-none z-10"></div>
                    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                        @foreach ($showcaseImages as $i => $img)
                            <button
                                type="button"
                                data-showcase-dot="{{ $i }}"
                                class="rounded-full transition-all duration-300 {{ $i === 0 ? 'w-6 h-1.5 bg-neon-cyan shadow-[0_0_8px_rgba(0,240,255,0.6)]' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60' }}"
                                aria-label="Go to image {{ $i + 1 }}"
                            ></button>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
