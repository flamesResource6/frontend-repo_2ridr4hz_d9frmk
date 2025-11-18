import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="w-full relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div>
          <span className="inline-flex items-center rounded-full bg-white/10 text-white/90 backdrop-blur px-3 py-1 text-xs tracking-wide uppercase">Limited Time</span>
          <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-sm">
            Unlock Exclusive Savings
          </h1>
          <p className="mt-3 md:mt-4 text-white/80 max-w-2xl mx-auto">
            Dive into a modern, immersive experience and claim your special offer today.
          </p>
        </div>
      </div>

      {/* Gradient overlay that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
    </section>
  );
}
