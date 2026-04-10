@props(['projects'])

<section
    id="featured-projects"
    class="relative py-32 bg-dark-base overflow-hidden"
    data-featured-carousel
    data-total="{{ count($projects) }}"
>
    <div class="absolute inset-0 animated-grid opacity-[0.03] pointer-events-none"></div>
    <div class="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>
    <div class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="font-orbitron text-4xl sm:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
            <p class="font-inter text-white/50 text-lg max-w-2xl mx-auto">
                Explore our portfolio of innovative solutions shaping the future
            </p>
        </div>

        <div
            class="relative h-[480px] sm:h-[550px] lg:h-[600px] w-full flex items-center justify-center perspective-1000"
            data-featured-stage
            data-featured-hover
        >
            @foreach ($projects as $index => $project)
                <article
                    class="featured-card absolute w-full max-w-[92%] sm:max-w-[80%] lg:max-w-[850px] h-[420px] sm:h-[500px] lg:h-[560px] rounded-3xl overflow-hidden transition-[transform,opacity] duration-500 ease-out will-change-transform"
                    data-featured-index="{{ $index }}"
                    data-hex="{{ $project['hex_color'] }}"
                    style="z-index: 10;"
                >
                    <div class="absolute inset-0 w-full h-full overflow-hidden">
                        <img
                            src="{{ asset($project['image']) }}"
                            alt="{{ $project['title'] }}"
                            class="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                        >
                    </div>
                    <div class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark-base/60 to-transparent pointer-events-none"></div>
                    <div class="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/90 to-transparent pointer-events-none"></div>
                    <div class="featured-card-content absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12 transition-all duration-500">
                        <div class="flex flex-col items-start">
                            <span
                                class="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-inter font-semibold tracking-wider uppercase mb-4 sm:mb-5 shadow-lg"
                                style="color: {{ $project['hex_color'] }}"
                            >
                                {{ $project['tag'] }}
                            </span>
                            <h3 class="text-3xl sm:text-4xl lg:text-5xl font-orbitron font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
                                {{ $project['title'] }}
                            </h3>
                            <p class="text-white/70 font-inter text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed drop-shadow-md">
                                {{ $project['description'] }}
                            </p>
                        </div>
                    </div>
                </article>
            @endforeach
        </div>

        <div class="flex items-center justify-center gap-6 sm:gap-8 mt-12 relative z-40">
            <button
                type="button"
                class="p-3 sm:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white text-white/50 transition-all duration-300 hover:scale-110 active:scale-95"
                data-featured-prev
                aria-label="Previous project"
            >
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>

            <div class="flex gap-3 sm:gap-4 items-center" data-featured-dots>
                @foreach ($projects as $i => $p)
                    <button
                        type="button"
                        data-featured-dot="{{ $i }}"
                        class="h-1.5 sm:h-2 rounded-full transition-all duration-500 ease-out w-2 sm:w-3 bg-white/20 hover:bg-white/40"
                        style="{{ $i === 0 ? 'width: 2.5rem; background-color: '.$p['hex_color'].'; box-shadow: 0 0 15px '.$p['hex_color'].'80;' : '' }}"
                        aria-label="Go to project {{ $i + 1 }}"
                    ></button>
                @endforeach
            </div>

            <button
                type="button"
                class="p-3 sm:p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white text-white/50 transition-all duration-300 hover:scale-110 active:scale-95"
                data-featured-next
                aria-label="Next project"
            >
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    </div>
</section>
