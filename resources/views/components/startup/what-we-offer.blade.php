@props(['services'])

@php
    $accentMap = [
        'cyan' => [
            'bg' => 'bg-neon-cyan',
            'from' => 'from-neon-cyan/10',
            'glow' => 'group-hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] group-hover:border-neon-cyan/50',
            'icon' => 'group-hover:text-neon-cyan group-hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]',
        ],
        'purple' => [
            'bg' => 'bg-neon-purple',
            'from' => 'from-neon-purple/10',
            'glow' => 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group-hover:border-neon-purple/50',
            'icon' => 'group-hover:text-neon-purple group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]',
        ],
        'pink' => [
            'bg' => 'bg-pink-500',
            'from' => 'from-pink-500/10',
            'glow' => 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.15)] group-hover:border-pink-500/50',
            'icon' => 'group-hover:text-pink-500 group-hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]',
        ],
        'orange' => [
            'bg' => 'bg-orange-400',
            'from' => 'from-orange-400/10',
            'glow' => 'group-hover:shadow-[0_0_30px_rgba(251,146,60,0.15)] group-hover:border-orange-400/50',
            'icon' => 'group-hover:text-orange-400 group-hover:drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]',
        ],
        'blue' => [
            'bg' => 'bg-neon-blue',
            'from' => 'from-neon-blue/10',
            'glow' => 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:border-neon-blue/50',
            'icon' => 'group-hover:text-neon-blue group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]',
        ],
        'emerald' => [
            'bg' => 'bg-emerald-400',
            'from' => 'from-emerald-400/10',
            'glow' => 'group-hover:shadow-[0_0_30px_rgba(52,211,153,0.15)] group-hover:border-emerald-400/50',
            'icon' => 'group-hover:text-emerald-400 group-hover:drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]',
        ],
    ];
@endphp

<section class="relative py-32 bg-dark-base overflow-hidden">
    <div class="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20">
            <h2 class="font-orbitron text-4xl sm:text-5xl font-bold mb-4 text-white">What We Offer</h2>
            <p class="font-inter text-white/50 text-lg max-w-2xl mx-auto">
                Comprehensive digital solutions tailored to elevate your brand and
                operational capabilities.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @foreach ($services as $service)
                @php $a = $accentMap[$service['accent']] ?? $accentMap['cyan']; @endphp
                <div class="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 {{ $a['glow'] }} overflow-hidden">
                    <div class="absolute top-0 left-0 right-0 h-[2px] {{ $a['bg'] }} opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div class="absolute inset-0 bg-gradient-to-br {{ $a['from'] }} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <div class="relative z-10">
                        <div class="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-dark-base border border-white/5 group-hover:scale-110 transition-transform duration-500">
                            @include('components.partials.service-icon', ['name' => $service['icon'], 'class' => 'text-white/70 transition-all duration-500 w-8 h-8 '.$a['icon']])
                        </div>
                        <h3 class="font-orbitron text-xl font-bold text-white mb-3">{{ $service['title'] }}</h3>
                        <p class="font-inter text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">{{ $service['description'] }}</p>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>
