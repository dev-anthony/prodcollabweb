import { cn } from "@/lib/utils";
import { workflow } from "@/lib/content";

export function WorkflowTimeline() {
  return (
    <ol className="relative mx-auto max-w-2xl">
      <span
        aria-hidden
        className="absolute left-[15px] top-2 bottom-2 w-px bg-border sm:left-1/2"
      />
      {workflow.map((item, i) => {
        const left = i % 2 === 0;
        return (
          <li
            key={item.step}
            className={cn(
              "relative mb-6 pl-11 last:mb-0 sm:w-1/2 sm:pl-0",
              left ? "sm:pr-10 sm:text-right" : "sm:ml-auto sm:pl-10",
            )}
            data-aos="fade-up"
          >
            <span
              className={cn(
                "absolute left-[9px] top-1.5 size-3.5 rounded-full border-2 border-background bg-primary sm:left-auto",
                left ? "sm:-right-[7px]" : "sm:-left-[7px]",
              )}
            />
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-primary">
              {item.who}
            </p>
            <p className="mt-1 text-sm font-semibold">{item.step}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {item.detail}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
