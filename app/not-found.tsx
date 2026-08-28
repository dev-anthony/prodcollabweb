import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        Page not found
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.02em]">
        That track isn&apos;t here
      </h1>
      <p className="mt-3 max-w-sm text-muted-foreground">
        The page you were looking for doesn&apos;t exist or has moved.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/">Back to home</Link>
      </Button>
    </Container>
  );
}
