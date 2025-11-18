import Hero from './components/Hero';
import PromoGallery from './components/PromoGallery';
import PromoDetails from './components/PromoDetails';

function App() {
  const images = [
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556741533-f6acd6477e9e?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop',
  ];

  const handleUsePromotion = () => {
    alert('Promotion applied!');
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg" style={{ backgroundColor: '#F25A17' }} />
            <span className="text-white font-semibold tracking-tight">Promo Details</span>
          </div>
          <button
            onClick={handleUsePromotion}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold shadow-sm"
            style={{ backgroundColor: '#F25A17', color: 'white' }}
          >
            Use Promotion
          </button>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <Hero />

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-10 md:py-14 space-y-10">
        <PromoGallery images={images} />

        <PromoDetails
          title="Autumn Tech Sale — 40% Off"
          description="Experience unbeatable value on select gadgets and accessories. For a limited time, enjoy up to 40% off our curated lineup. Combine style and performance while stocks last. Terms apply."
          onUse={handleUsePromotion}
        />
      </main>

      {/* Footer */}
      <footer className="py-10 text-center text-white/50">
        © {new Date().getFullYear()} Your Brand. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
