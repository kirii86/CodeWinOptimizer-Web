const screenshots = [
  {
    src: "https://i.imgur.com/1ZVIUVs.png",
    alt: "System Restore",
    label: "Restore",
  },
  {
    src: "https://i.imgur.com/rJqpplf.png",
    alt: "App Manager",
    label: "Apps",
  },
  {
    src: "https://i.imgur.com/dGvBRuB.png",
    alt: "System Tweaks",
    label: "Tweaks",
  },
  {
    src: "https://i.imgur.com/CIAySy3.png",
    alt: "Windows Features",
    label: "Features",
  },
  {
    src: "https://i.imgur.com/exoZMYs.png",
    alt: "Appearance Settings",
    label: "Appearance",
  },
];

export default function Preview() {
  return (
    <section id="preview" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            See it <span className="text-neon">in action.</span>
          </h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto">
            A dark-themed, modern interface designed for power users.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {screenshots.map((shot) => (
            <div
              key={shot.label}
              className="group relative overflow-hidden rounded-2xl border border-border bg-bg-card transition-all hover:border-neon/30"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block rounded-lg bg-neon/20 px-3 py-1 text-xs font-medium text-neon backdrop-blur-sm">
                  {shot.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
