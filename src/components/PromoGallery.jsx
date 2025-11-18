export default function PromoGallery({ images = [] }) {
  if (!images.length) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {images.map((src, idx) => (
        <div key={idx} className="aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-white/10 bg-white/5">
          <img src={src} alt={`Promotion ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>
      ))}
    </div>
  );
}
