import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Rev Groups",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
  {/* App container; outer page background is handled in globals.css via html.dark */}
  <div className="min-h-screen w-full relative overflow-hidden">
          {/* Content */}
          <div className="relative z-10">
            {/* Rounded gray container over the black background */}
            <div className="px-4 pt-6 pb-8">
              <div className="relative mx-auto w-full rounded-3xl ring-1 ring-white/10 shadow-2xl shadow-black/40 overflow-hidden" style={{ minHeight: "calc(100vh - 2rem)" }}>
                {/* Inside container backgrounds per theme */}
                {/* Light: Soft Pastel Dream Gradient */}
                <div className="absolute inset-0 rounded-3xl light-only" style={{
                  background: "linear-gradient(135deg, #F8BBD9 0%, #FDD5B4 25%, #FFF2CC 50%, #E1F5FE 75%, #BBDEFB 100%)",
                }} />
                {/* Dark: Cosmic Noise */}
                <div className="absolute inset-0 rounded-3xl dark-only" style={{
                  background: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.05) 0%, transparent 40%), linear-gradient(120deg, #0f0e17 0%, #1a1b26 100%)",
                }} />

                {/* Foreground content */}
                <div className="relative z-10">
                  <Navbar />
                  <main className="pt-8 p-6 sm:p-10">{children}</main>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
