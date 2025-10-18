import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { MagicCursor } from "./components/magicmouse";
import { HeroSection } from "./components/pages/herosection";
import { AboutSection } from "./components/pages/about";
import { ResumeSection } from './components/pages/resume';

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white via-slate-100 to-white dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] transition-colors duration-500 overflow-x-hidden">
      <MagicCursor />
      <Header />
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <ResumeSection />
        </main>
      <Footer />
    </div>
  );
};
