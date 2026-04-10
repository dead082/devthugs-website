@props(['partners'])

@php
    $topRow = [$partners[0], $partners[1], $partners[2], $partners[3]];
    $bottomRow = [$partners[2], $partners[0], $partners[3], $partners[1]];
@endphp

<section class="relative py-32 bg-dark-base overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="relative z-10 w-full">
        <div class="text-center mb-20 px-4 sm:px-6 lg:px-8">
            <h2 class="font-orbitron text-4xl sm:text-5xl font-bold mb-4 text-white">Our Partners</h2>
            <p class="font-inter text-white/50 text-lg max-w-2xl mx-auto">
                Collaborating with leading organizations to drive innovation
            </p>
        </div>

        <div class="flex flex-col gap-10">
            <div class="marquee-row relative overflow-hidden w-full">
                <div class="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-r from-dark-base to-transparent"></div>
                <div class="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-l from-dark-base to-transparent"></div>
                <div class="flex w-max animate-marquee-right">
                    @foreach (array_merge($topRow, $topRow, $topRow, $topRow, $topRow, $topRow, $topRow, $topRow) as $partner)
                        <div class="flex-shrink-0 mx-8 sm:mx-12 group flex flex-col items-center text-center">
                            <img
                                src="{{ asset($partner['logo']) }}"
                                alt="{{ $partner['name'] }}"
                                class="w-20 h-20 sm:w-24 sm:h-24 object-contain opacity-70 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.25)] transition-all duration-500"
                            >
                            <h3 class="font-orbitron text-xs sm:text-sm font-semibold text-white/40 group-hover:text-white/80 transition-colors duration-500 mt-3">
                                {{ $partner['name'] }}
                            </h3>
                        </div>
                    @endforeach
                </div>
            </div>

            <div class="marquee-row relative overflow-hidden w-full">
                <div class="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-r from-dark-base to-transparent"></div>
                <div class="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-l from-dark-base to-transparent"></div>
                <div class="flex w-max animate-marquee-left">
                    @foreach (array_merge($bottomRow, $bottomRow, $bottomRow, $bottomRow, $bottomRow, $bottomRow, $bottomRow, $bottomRow) as $partner)
                        <div class="flex-shrink-0 mx-8 sm:mx-12 group flex flex-col items-center text-center">
                            <img
                                src="{{ asset($partner['logo']) }}"
                                alt="{{ $partner['name'] }}"
                                class="w-20 h-20 sm:w-24 sm:h-24 object-contain opacity-70 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.25)] transition-all duration-500"
                            >
                            <h3 class="font-orbitron text-xs sm:text-sm font-semibold text-white/40 group-hover:text-white/80 transition-colors duration-500 mt-3">
                                {{ $partner['name'] }}
                            </h3>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>
