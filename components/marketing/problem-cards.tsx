import { problems } from "@/lib/content";

export function ProblemCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {problems.map((item, i) => (
        <div
          key={item.title}
          className="rounded-xl border border-border bg-card p-6"
          data-aos="fade-up"
          data-aos-delay={(i % 3) * 80}
        >
          <span className="text-xs font-semibold text-muted-foreground/60">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 text-[0.98rem] font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {item.body}
          </p>
        </div>
      ))}
    </div>
  );
}
