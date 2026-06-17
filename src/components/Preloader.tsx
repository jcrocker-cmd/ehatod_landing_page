import Image from 'next/image'
import logoOrange from '@/assets/e-Hatod_orange.png'

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-7 bg-white">
      <Image src={logoOrange} alt="eHatod" priority className="h-28 w-auto animate-pulse md:h-32" />
      {/* indeterminate loading bar */}
      <div className="relative h-1.5 w-48 overflow-hidden rounded-full bg-ehatod-100">
        <div className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-ehatod-500 animate-loading-bar" />
      </div>
    </div>
  )
}
