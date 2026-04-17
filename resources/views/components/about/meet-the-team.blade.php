@props(['team'])

<section class="relative py-32 bg-dark-base overflow-hidden" data-team-section data-team-count="{{ count($team) }}">
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="font-orbitron text-4xl sm:text-5xl font-bold mb-4 text-white">Meet Our Team</h2>
            <p class="font-inter text-white/50 text-lg max-w-2xl mx-auto">
                The brilliant minds behind Devthugs
            </p>
        </div>

        <div class="relative">
            <div class="overflow-hidden px-4 py-8">
                <div class="flex gap-6 transition-transform duration-500 ease-out will-change-transform" data-team-track>
                    @foreach ($team as $index => $member)
                        @php
                            $avatar = ! empty($member['photo_url'] ?? null)
                                ? $member['photo_url']
                                : 'https://api.dicebear.com/7.x/avataaars/svg?seed='.rawurlencode($member['name']);
                        @endphp
                        <div
                            class="team-card flex-shrink-0 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
                            data-team-card
                        >
                            <button
                                type="button"
                                class="group relative rounded-2xl border border-white/10 hover:border-neon-cyan/40 transition-all duration-300 cursor-pointer overflow-hidden aspect-[3/4] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] w-full text-left bg-transparent p-0"
                                data-team-open="{{ $index }}"
                                aria-label="View {{ $member['name'] }}"
                            >
                                <img
                                    src="{{ $avatar }}"
                                    alt="{{ $member['name'] }}"
                                    class="absolute inset-0 w-full h-full object-cover bg-dark-secondary"
                                >
                                <div class="absolute inset-0 bg-gradient-to-t from-dark-base via-dark-base/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div class="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full pointer-events-none">
                                    <h3 class="font-orbitron text-lg font-bold text-white mb-1">{{ $member['name'] }}</h3>
                                    <p class="font-inter text-sm text-white/70">{{ $member['role'] }}</p>
                                </div>
                                <div class="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <svg class="text-neon-cyan w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    @endforeach
                </div>
            </div>

            <div class="flex justify-center items-center gap-4 mt-8">
                <button type="button" class="p-3 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-300" data-team-prev aria-label="Previous">
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <div class="flex gap-2 px-2" data-team-dots></div>
                <button type="button" class="p-3 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-300" data-team-next aria-label="Next">
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <div
        id="team-modal"
        class="fixed inset-0 z-[100] hidden items-center justify-center px-4 sm:px-6"
        data-team-modal
        aria-modal="true"
        role="dialog"
    >
        <div class="absolute inset-0 bg-dark-base/90 backdrop-blur-xl cursor-pointer" data-team-modal-backdrop></div>
        <div class="relative w-full max-w-2xl bg-dark-secondary border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh] z-10" data-team-modal-panel>
            <button
                type="button"
                class="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                data-team-modal-close
                aria-label="Close"
            >
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
            <div data-team-modal-body></div>
        </div>
    </div>

    <script type="application/json" id="team-json-data">@json($team)</script>
</section>
