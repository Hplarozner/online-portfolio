import { Navbar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react"
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
        <Analytics />
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <p className="text-primary">&reg; 2025</p>
      </footer>
    </div>
  );
}
