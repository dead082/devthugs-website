@props(['meetingImages', 'testingImages'])

<section class="relative py-32 bg-dark-base overflow-hidden">
    <div class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20">
            <h2 class="font-orbitron text-4xl sm:text-5xl font-bold mb-4 text-white">Partnership in Action</h2>
            <p class="font-inter text-white/50 text-lg max-w-2xl mx-auto">
                Collaboration is at the heart of what we do. See how we work closely
                with our partners to ensure excellence.
            </p>
        </div>

        <div class="space-y-24">
            <div>
                <div class="flex items-center gap-4 mb-10">
                    <div class="p-3 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20">
                        <svg class="text-neon-cyan w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                    </div>
                    <h3 class="font-orbitron text-3xl font-bold text-white">Strategic Meetings</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    @foreach ($meetingImages as $img)
                        <div class="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 hover:border-neon-cyan/50 transition-all duration-500">
                            <img
                                src="{{ \Illuminate\Support\Str::startsWith($img['url'], 'http') ? $img['url'] : asset($img['url']) }}"
                                alt="{{ $img['alt'] }}"
                                class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                            >
                            <div class="absolute inset-0 bg-gradient-to-t from-dark-base via-dark-base/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                            <div class="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <p class="font-orbitron text-white font-medium text-lg drop-shadow-md">{{ $img['alt'] }}</p>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>

            <div>
                <div class="flex items-center gap-4 mb-10">
                    <div class="p-3 rounded-xl bg-neon-purple/10 border border-neon-purple/20">
                        <svg class="text-neon-purple w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>
                    </div>
                    <h3 class="font-orbitron text-3xl font-bold text-white">Rigorous Testing</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    @foreach ($testingImages as $img)
                        <div class="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 hover:border-neon-purple/50 transition-all duration-500">
                            <img
                                src="{{ $img['url'] }}"
                                alt="{{ $img['alt'] }}"
                                class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                            >
                            <div class="absolute inset-0 bg-gradient-to-t from-dark-base via-dark-base/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                            <div class="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <p class="font-orbitron text-white font-medium text-lg drop-shadow-md">{{ $img['alt'] }}</p>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</section>
