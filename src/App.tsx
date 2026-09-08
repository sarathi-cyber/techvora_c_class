import { lazy, Suspense } from "react";
import { useHashRoute } from "@/hooks/useHashRoute";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Curriculum } from "@/components/sections/Curriculum";
import { Journey } from "@/components/sections/Journey";
import { WhyTechvora } from "@/components/sections/WhyTechvora";
import { PrivacyFirst } from "@/components/sections/PrivacyFirst";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

/* Legal documents are rarely visited — split them out of the main bundle. */
const PrivacyPage = lazy(() => import("@/pages/PrivacyPage"));
const TermsPage = lazy(() => import("@/pages/TermsPage"));

function PageLoader() {
  return (
    <div role="status" aria-label="Loading page" className="flex min-h-screen items-center justify-center bg-ink-950">
      <span aria-hidden="true" className="h-10 w-10 animate-spin rounded-full border-2 border-gold-500/20 border-t-gold-400" />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-gold-500 focus:px-5 focus:py-3 focus:font-display focus:text-sm focus:font-bold focus:text-ink-950"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Curriculum />
        <Journey />
        <WhyTechvora />
        <PrivacyFirst />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const route = useHashRoute();

  if (route === "privacy") {
    return (
      <Suspense fallback={<PageLoader />}>
        <PrivacyPage />
      </Suspense>
    );
  }
  if (route === "terms") {
    return (
      <Suspense fallback={<PageLoader />}>
        <TermsPage />
      </Suspense>
    );
  }
  return <HomePage />;
}
