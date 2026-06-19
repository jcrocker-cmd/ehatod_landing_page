'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Preloader from './Preloader'

// Minimum time the preloader stays on screen.
const MIN_MS = 1300

export default function RouteTransitionLoader() {
  const pathname = usePathname()
  // Nav-only (best for Core Web Vitals): don't cover content on first paint/refresh.
  // To also show on initial load/refresh, set the initial state to `true`.
  const [visible, setVisible] = useState(false)
  const shownAt = useRef(0)
  const firstRender = useRef(true)

  // Hide after MIN_MS once a route change settles (skips the very first render).
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    const remaining = Math.max(0, MIN_MS - (Date.now() - shownAt.current))
    const t = setTimeout(() => setVisible(false), remaining)
    return () => clearTimeout(t)
  }, [pathname])

  // Show again at navigation start: internal link clicks + browser back/forward.
  useEffect(() => {
    function trigger() {
      shownAt.current = Date.now()
      setVisible(true)
    }
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const anchor = (e.target as HTMLElement)?.closest('a')
      if (!anchor || anchor.target === '_blank') return
      const href = anchor.getAttribute('href')
      if (!href || href.startsWith('#')) return // same-page hash links: skip
      let target: URL
      try {
        target = new URL(href, window.location.origin)
      } catch {
        return
      }
      if (target.origin !== window.location.origin) return // external: skip
      if (target.pathname === window.location.pathname) return // same page: skip
      trigger()
    }
    document.addEventListener('click', onClick, true)
    window.addEventListener('popstate', trigger) // back/forward
    return () => {
      document.removeEventListener('click', onClick, true)
      window.removeEventListener('popstate', trigger)
    }
  }, [])

  if (!visible) return null
  return <Preloader />
}
