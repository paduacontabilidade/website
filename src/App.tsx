import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollToHash } from "@/components/scroll-to-hash";
import { HomePage } from "@/pages/home-page";
import { SolutionPage } from "@/pages/solution-page";

export function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solucoes/:slug" element={<SolutionPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </BrowserRouter>
  );
}
