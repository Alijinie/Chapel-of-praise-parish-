/**
 * Utility to export the complete RCBC Chapel of Praise website as a standalone single HTML file.
 */
export function downloadSingleHtmlFile() {
  // Fetch existing static standalone file or generate blob dynamically
  fetch('/rcbc-chapel-of-praise.html')
    .then((res) => {
      if (res.ok) {
        return res.blob();
      }
      throw new Error('Standalone file fallback');
    })
    .then((blob) => {
      triggerDownload(blob, 'rcbc-chapel-of-praise.html');
    })
    .catch(() => {
      // Create self-contained document
      const htmlContent = generateStandaloneHtml();
      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      triggerDownload(blob, 'rcbc-chapel-of-praise.html');
    });
}

function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function generateStandaloneHtml(): string {
  // Return a complete, self-contained single HTML file with Tailwind CDN, icons, fonts, and full JS tab navigation
  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RCBC Chapel of Praise (Main Campus) | Raising Christ's Ambassadors</title>
  <meta name="description" content="Official website for RCBC Chapel of Praise (Main Campus), the institutional parish of the Redeemed Christian Bible College inside Redemption City.">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            rcbc: {
              navy: '#1B2A4A',
              navyDark: '#0F1A30',
              gold: '#D4AF37',
              goldLight: '#F5E7A3',
              cream: '#FAF8F5',
              royal: '#2563EB',
              emerald: '#10B981'
            }
          },
          fontFamily: {
            sans: ['Plus Jakarta Sans', 'sans-serif'],
            serif: ['Playfair Display', 'serif']
          }
        }
      }
    }
  </script>
  <style>
    body { background-color: #FAF8F5; }
    .glass { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(27, 42, 74, 0.08); }
    .glass-card { background: linear-gradient(145deg, #FFFFFF 0%, #FAF8F5 100%); border: 1px solid rgba(27, 42, 74, 0.08); box-shadow: 0 10px 30px rgba(27, 42, 74, 0.04); }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  </style>
</head>
<body class="bg-[#FAF8F5] text-[#1B2A4A] font-sans min-h-screen flex flex-col antialiased">
  <div id="standalone-app-root">
    <!-- Standalone Single HTML File App -->
    <header class="fixed top-0 w-full z-40 px-4 py-3 bg-white/90 backdrop-blur border-b border-slate-200">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-[#1B2A4A] text-[#D4AF37] flex items-center justify-center font-serif font-bold text-lg border border-[#D4AF37]">RC</div>
          <div>
            <span class="block text-sm sm:text-base font-extrabold uppercase font-serif tracking-tight text-[#1B2A4A]">RCBC Chapel of Praise</span>
            <span class="block text-[10px] text-emerald-700 font-bold tracking-widest uppercase">Main Campus • Redemption City, Nigeria</span>
          </div>
        </div>
        <div class="flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
          <span class="hidden md:inline text-slate-500">"Raising Christ's Ambassadors"</span>
          <a href="#plan-visit" class="bg-[#D4AF37] hover:bg-yellow-500 text-[#1B2A4A] px-4 py-2 rounded-full font-extrabold">Plan Your Visit</a>
        </div>
      </div>
    </header>

    <main class="flex-1 pt-24 pb-20 px-4 max-w-7xl mx-auto w-full space-y-12">
      <!-- HERO -->
      <section class="bg-[#1B2A4A] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-[#D4AF37]/30">
        <div class="max-w-3xl space-y-5">
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 text-xs font-extrabold">
            <i class="fa-solid fa-church"></i> REDEEMED CHRISTIAN BIBLE COLLEGE
          </span>
          <h1 class="text-3xl sm:text-5xl font-serif font-extrabold leading-tight">
            Raising Christ's <span class="text-[#D4AF37]">Ambassadors</span> for the Nations.
          </h1>
          <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
            Welcome to the spiritual epicenter of the Redeemed Christian Bible College on Christ's Ambassadors Road inside Redemption City. A multi-generational home comprising the Main Sanctuary, Youth Church, and Teenagers Church.
          </p>
          <div class="flex flex-wrap gap-3 pt-2">
            <a href="#services" class="bg-[#D4AF37] text-[#1B2A4A] px-6 py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider hover:bg-yellow-400">Our Ministries</a>
            <a href="#live" class="bg-white/10 text-white px-6 py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider hover:bg-white/20 border border-white/20">Live Streams</a>
          </div>
        </div>
      </section>

      <!-- THREE MINISTRIES -->
      <section id="services" class="space-y-6">
        <h2 class="text-2xl sm:text-3xl font-serif font-bold text-[#1B2A4A]">Our Three Distinct Ministries</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="glass-card p-6 rounded-2xl border-l-4 border-l-[#D4AF37] space-y-3">
            <span class="text-xs font-extrabold uppercase text-[#D4AF37] tracking-wider">Spiritual Epicenter</span>
            <h3 class="text-xl font-bold font-serif text-[#1B2A4A]">The Main Sanctuary</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Theological training hub for future global pastors and theologians. Focuses on scriptural depth, intensive prayer, classical/contemporary worship, and preparation for global Holy Ghost Services.</p>
            <div class="text-xs font-bold text-slate-700 pt-2 border-t border-slate-100">
              Sundays: 8:00 AM • Tuesdays: 6:00 PM • Thursdays: 6:00 PM
            </div>
          </div>

          <div class="glass-card p-6 rounded-2xl border-l-4 border-l-blue-600 space-y-3">
            <span class="text-xs font-extrabold uppercase text-blue-600 tracking-wider">Ignite & Deploy</span>
            <h3 class="text-xl font-bold font-serif text-[#1B2A4A]">The Youth Church</h3>
            <p class="text-xs text-slate-600 leading-relaxed">High-energy contemporary worship tailored for undergraduates, campus scholars, and young professionals. Focused on purpose discovery, creative arts, media, and career excellence.</p>
            <div class="text-xs font-bold text-slate-700 pt-2 border-t border-slate-100">
              Youth Expression Sunday: 8:00 AM • Ignite Hub: Fridays 5:30 PM
            </div>
          </div>

          <div class="glass-card p-6 rounded-2xl border-l-4 border-l-emerald-600 space-y-3">
            <span class="text-xs font-extrabold uppercase text-emerald-600 tracking-wider">The Overflow</span>
            <h3 class="text-xl font-bold font-serif text-[#1B2A4A]">The Teenagers Church</h3>
            <p class="text-xs text-slate-600 leading-relaxed">A vibrant, nurturing safe haven in our overflow wing where teenagers tackle tough life questions without judgment through multimedia films, Bible quizzes, and peer mentorship.</p>
            <div class="text-xs font-bold text-slate-700 pt-2 border-t border-slate-100">
              Sundays: 8:00 AM • Bible Quiz & Cinema: Saturdays 4:00 PM
            </div>
          </div>
        </div>
      </section>

      <!-- LOCATION & VISIT -->
      <section id="plan-visit" class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div class="max-w-2xl space-y-2">
          <h2 class="text-2xl sm:text-3xl font-serif font-bold text-[#1B2A4A]">Location & Campus Proximity</h2>
          <p class="text-xs sm:text-sm text-slate-600">
            Christ's Ambassadors Road, inside Redemption City (Km 46, Lagos-Ibadan Expressway, Ogun State, Nigeria). Situated directly within the historic grounds of the Redeemed Christian Bible College.
          </p>
        </div>
      </section>
    </main>

    <footer class="bg-[#1B2A4A] text-white py-12 px-4 border-t-4 border-[#D4AF37] text-center text-xs space-y-2">
      <p class="font-serif text-base text-[#D4AF37]">RCBC Chapel of Praise (Main Campus)</p>
      <p class="text-slate-400">Raising Christ's Ambassadors • Redeemed Christian Bible College • Redemption City, Nigeria</p>
      <p class="text-slate-500 text-[11px]">&copy; 2026 RCBC Chapel of Praise. All Rights Reserved.</p>
    </footer>
  </div>
</body>
</html>`;
}
