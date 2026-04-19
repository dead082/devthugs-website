@props(['whyFeatures'])

<section class="relative py-32 bg-dark-base overflow-hidden" data-why-devthugs>
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20">
            <h2 class="font-orbitron text-4xl sm:text-5xl font-bold mb-4 text-white">Why Devthugs</h2>
            <p class="font-inter text-white/50 text-lg max-w-2xl mx-auto">
                Our competitive edge in the digital landscape
            </p>
        </div>

        <div class="hidden lg:flex gap-12 items-center">
            <div class="w-1/2">
                <div class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-dark-secondary">
                    @foreach ($whyFeatures as $index => $f)
                        <img
                            src="{{ asset($f['image']) }}"
                            alt="{{ $f['title'] }}"
                            class="why-feature-image absolute inset-0 w-full h-full object-cover transition-opacity duration-500 {{ $index === 0 ? 'opacity-100 z-[1]' : 'opacity-0 z-0' }}"
                            data-why-feature-img="{{ $index }}"
                        >
                    @endforeach
                    <div class="absolute inset-0 bg-gradient-to-r from-dark-base/80 to-transparent z-10"></div>
                </div>
            </div>
            <div class="w-1/2 flex flex-col gap-4">
                @foreach ($whyFeatures as $index => $f)
                    <div
                        class="why-feature-row flex items-center gap-6 p-6 rounded-xl cursor-pointer transition-all duration-300 border-l-4 {{ $index === 0 ? 'bg-white/10 '.$f['border'].' shadow-lg' : 'border-transparent bg-transparent hover:bg-white/5' }}"
                        data-why-feature-row="{{ $index }}"
                        data-border="{{ $f['border'] }}"
                    >
                        <div class="p-4 rounded-xl bg-dark-base border border-white/5 shrink-0 transition-all duration-300 {{ $index === 0 ? 'scale-110 shadow-[0_0_20px_rgba(255,255,255,0.1)]' : '' }}">
                            @include('components.partials.feature-icon', ['name' => $f['icon'], 'class' => $f['color'].' w-8 h-8 transition-all duration-300 '.($index === 0 ? 'drop-shadow-[0_0_10px_currentColor]' : '')])
                        </div>
                        <div>
                            <h3 class="font-orbitron text-xl font-bold mb-2 transition-colors duration-300 {{ $index === 0 ? 'text-white' : 'text-white/70' }}">
                                {{ $f['title'] }}
                            </h3>
                            <p class="font-inter text-sm leading-relaxed transition-colors duration-300 {{ $index === 0 ? 'text-white/80' : 'text-white/40' }}">
                                {{ $f['description'] }}
                            </p>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
            @foreach ($whyFeatures as $index => $f)
                <div class="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 overflow-hidden hover:-translate-y-2">
                    @php
                        $accent = match (true) {
                            str_contains($f['border'], 'cyan') => 'from-neon-cyan',
                            str_contains($f['border'], 'purple') => 'from-neon-purple',
                            str_contains($f['border'], 'blue') => 'from-neon-blue',
                            default => 'from-pink-500',
                        };
                    @endphp
                    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r {{ $accent }} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="mb-6 inline-block p-4 rounded-xl bg-dark-base border border-white/5">
                        @include('components.partials.feature-icon', ['name' => $f['icon'], 'class' => $f['color'].' w-8 h-8 transition-transform duration-500 group-hover:scale-110'])
                    </div>
                    <h3 class="font-orbitron text-xl font-bold text-white mb-3">{{ $f['title'] }}</h3>
                    <p class="font-inter text-white/60 leading-relaxed text-sm">{{ $f['description'] }}</p>
                </div>
            @endforeach
        </div>
    </div>
</section>
