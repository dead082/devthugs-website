@php
    $menuItems = [
        ['label' => 'Home', 'route' => 'home'],
        ['label' => 'About', 'route' => 'about'],
        ['label' => 'Start Up', 'route' => 'startup'],
        ['label' => 'Get in Touch', 'route' => 'contact'],
    ];
@endphp

<nav
    id="site-navbar"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent backdrop-blur-sm"
    data-navbar
>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
            <div class="flex items-center space-x-3">
                <a href="{{ route('home') }}" class="flex items-center">
                    <img src="{{ asset('images/partners_logo/DevThugs_Logo.png') }}" alt="Devthugz Logo" class="h-12 w-auto">
                </a>
            </div>

            <div class="hidden md:flex items-center space-x-8">
                @foreach ($menuItems as $item)
                    <a
                        href="{{ route($item['route']) }}"
                        @class([
                            'text-white/80 hover:text-neon-cyan transition-colors duration-300 font-inter font-medium relative group inline-block',
                            '!text-neon-cyan' => request()->routeIs($item['route']),
                        ])
                    >
                        {{ $item['label'] }}
                        <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-300 group-hover:w-full {{ request()->routeIs($item['route']) ? 'w-full' : '' }}"></span>
                    </a>
                @endforeach
            </div>

            <button
                type="button"
                class="md:hidden text-white p-2 hover:text-neon-cyan transition-colors"
                data-mobile-menu-toggle
                aria-expanded="false"
                aria-label="Toggle menu"
            >
                <svg data-icon-menu class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg data-icon-close class="w-6 h-6 hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>

    <div
        id="mobile-menu"
        class="md:hidden hidden bg-dark-base/95 backdrop-blur-xl border-t border-white/10"
        data-mobile-menu
    >
        <div class="px-4 py-6 space-y-4">
            @foreach ($menuItems as $item)
                <a
                    href="{{ route($item['route']) }}"
                    class="block text-white/80 hover:text-neon-cyan transition-colors duration-300 font-inter font-medium py-2"
                    data-mobile-menu-link
                >
                    {{ $item['label'] }}
                </a>
            @endforeach
        </div>
    </div>
</nav>
