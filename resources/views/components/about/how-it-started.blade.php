@props(['milestones'])

<section class="relative py-32 bg-dark-base overflow-hidden">
    <div class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-4">
            <h2 class="font-orbitron text-4xl sm:text-5xl font-bold mb-4 text-white">How It Started</h2>
            <p class="font-inter text-white/60 text-lg max-w-2xl mx-auto">
                From a boarding house to the regional stage — this is how Devthugs
                came to be.
            </p>
        </div>

        <div class="mt-12" data-milestone-carousel data-total="{{ count($milestones) }}">
            <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                @foreach ($milestones as $index => $m)
                    <div
                        class="milestone-panel {{ $index === 0 ? '' : 'hidden' }}"
                        data-milestone-panel="{{ $index }}"
                    >
                        <div class="relative w-full h-[280px] sm:h-[380px] overflow-hidden">
                            <img src="{{ asset($m['image']) }}" alt="{{ $m['title'] }}" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-gradient-to-t from-dark-secondary via-dark-secondary/30 to-transparent"></div>
                        </div>
                        <div class="p-6 sm:p-8">
                            <div class="flex items-center gap-3 mb-3">
                                <div class="p-2 rounded-lg bg-white/5 {{ $m['icon_color'] }}">
                                    @include('components.partials.milestone-icon', ['name' => $m['icon']])
                                </div>
                                <span class="font-orbitron text-sm font-semibold {{ $m['color_class'] }} uppercase tracking-wider">
                                    {{ $m['date'] }}
                                </span>
                            </div>
                            <h3 class="font-orbitron text-2xl sm:text-3xl font-bold text-white mb-3">{{ $m['title'] }}</h3>
                            <p class="font-inter text-white/60 leading-relaxed text-base sm:text-lg max-w-2xl">
                                {{ $m['description'] }}
                            </p>
                        </div>
                    </div>
                @endforeach
            </div>

            <div class="flex items-center justify-between mt-6">
                <button
                    type="button"
                    data-milestone-prev
                    class="p-3 rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Previous milestone"
                >
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <div class="flex items-center gap-3">
                    @foreach ($milestones as $i => $m)
                        <button
                            type="button"
                            data-milestone-dot="{{ $i }}"
                            class="relative p-1"
                            aria-label="Go to {{ $m['title'] }}"
                        >
                            <div class="w-2.5 h-2.5 rounded-full transition-all duration-300 {{ $i === 0 ? 'bg-neon-cyan scale-125 shadow-[0_0_10px_rgba(0,240,255,0.5)]' : 'bg-white/20 hover:bg-white/40' }}"></div>
                        </button>
                    @endforeach
                </div>
                <button
                    type="button"
                    data-milestone-next
                    class="p-3 rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Next milestone"
                >
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</section>
