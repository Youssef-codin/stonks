import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, } from "react-router";
import type { Route } from "./+types/root";
import "./app.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <title>Stonks</title>
        <Links />
        <link rel="icon" type="image/x-icon" href="/stonks3d.ico" />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

// TODO: this is currently temporary, make pulsing dashboard later
export function HydrateFallback() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-[var(--bg)] text-[var(--text)]">
      {/* Title */}
      <h1 className="mb-6 text-3xl font-bold text-[var(--primary)] animate-pulse">
        Stonks Dashboard
      </h1>

      {/* Fake chart bars */}
      <div className="flex gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="w-6 rounded bg-[var(--bg-light)] animate-pulse"
            style={{ height: `${40 + i * 15}px` }}
          ></div>
        ))}
      </div>

      {/* Subtext */}
      <p className="mt-8 text-[var(--text-muted)]">
        Loading your crypto data...
      </p>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
