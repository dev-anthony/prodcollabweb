import { audiences } from "@/lib/content";

export function AudienceGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {audiences.map((item, i) => (
        <div
          key={item.title}
          className="rounded-xl border border-border bg-card p-6"
          data-aos="fade-up"
          data-aos-delay={(i % 2) * 80}
        >
          <h3 className="text-[0.98rem] font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {item.body}
          </p>
        </div>
      ))}
    </div>
  );
}
