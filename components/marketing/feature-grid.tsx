import type { Feature } from "@/lib/content";

export function FeatureGrid({ items }: { items: Feature[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {items.map((feature, i) => {
        const Icon = feature.icon;
        return (
          <div
            key={feature.title}
            className="flex flex-col gap-3 bg-card p-6 sm:p-7"
            data-aos="fade-up"
            data-aos-delay={(i % 3) * 80}
          >
            <span className="grid size-9 place-items-center rounded-lg border border-border bg-secondary/50 text-primary">
              <Icon className="size-[1.05rem]" />
            </span>
            <h3 className="text-[0.98rem] font-semibold tracking-[-0.01em]">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
