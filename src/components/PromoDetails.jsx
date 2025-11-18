export default function PromoDetails({ title, description, onUse }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-white">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      <p className="mt-3 text-white/80 leading-relaxed">{description}</p>
      <div className="mt-6">
        <button
          onClick={onUse}
          className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold shadow-sm transition-colors"
          style={{ backgroundColor: '#F25A17', color: 'white' }}
        >
          Use Promotion
        </button>
      </div>
    </div>
  );
}
