type Props = {
  android?: string
  ios?: string
  variant?: 'light' | 'dark'
}

export default function AppStoreButtons({ android = '#', ios = '#', variant = 'dark' }: Props) {
  const cls =
    variant === 'dark'
      ? 'bg-slate-900 text-white hover:bg-slate-800'
      : 'border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20'

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={android}
        className={`inline-flex items-center gap-3 rounded-xl px-4 py-2.5 transition active:scale-[0.98] ${cls}`}
        aria-label="Get it on Google Play"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M3.6 2.2a1 1 0 0 0-.5.9v17.8a1 1 0 0 0 .5.9l9.7-9.8L3.6 2.2Z" opacity=".9" />
          <path d="m15.6 8.9-2.3 2.3 2.3 2.3 3.1-1.8c.9-.5.9-1.5 0-2l-3.1-1.8Z" />
          <path d="m14.5 7.8-9.6-5.4L13.3 11l1.2-3.2Z" opacity=".7" />
          <path d="m4.9 21.6 9.6-5.4-1.2-1.2-8.4 6.6Z" opacity=".8" />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[10px] opacity-80">GET IT ON</span>
          <span className="block text-sm font-semibold">Google Play</span>
        </span>
      </a>
      <a
        href={ios}
        className={`inline-flex items-center gap-3 rounded-xl px-4 py-2.5 transition active:scale-[0.98] ${cls}`}
        aria-label="Download on the App Store"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.05 12.04c-.03-2.6 2.12-3.85 2.22-3.91-1.21-1.77-3.09-2.01-3.76-2.04-1.6-.16-3.12.94-3.93.94-.81 0-2.06-.92-3.39-.89-1.74.03-3.35 1.01-4.25 2.57-1.81 3.14-.46 7.79 1.3 10.34.86 1.25 1.89 2.65 3.23 2.6 1.3-.05 1.79-.84 3.36-.84 1.57 0 2.01.84 3.39.81 1.4-.02 2.29-1.27 3.14-2.53.99-1.45 1.4-2.86 1.42-2.93-.03-.01-2.72-1.04-2.75-4.13ZM14.5 4.6c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-3 1.54-.66.76-1.24 1.98-1.08 3.15 1.14.09 2.31-.58 3.02-1.44Z" />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[10px] opacity-80">Download on the</span>
          <span className="block text-sm font-semibold">App Store</span>
        </span>
      </a>
    </div>
  )
}
