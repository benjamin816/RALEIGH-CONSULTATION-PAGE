
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const calendarUrl = "https://calendar.app.google/h3527ytshYvu5XiV8";
  const embedUrl = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ04kxIcB2hnI_Mn_RshX3GzVK0X5o5MwGrM5VqtudGbd8hkHoDBOYXJvJqCNfAbeyplBTwvOMQi?gv=true";
  
  // Direct thumbnail link for the Drive image ID: 1ad8y4w1SQCXcnZzF7RDCF7FJue2IF6Fb
  const bannerImageUrl = "https://drive.google.com/thumbnail?id=1ad8y4w1SQCXcnZzF7RDCF7FJue2IF6Fb&sz=w1600";

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden bg-slate-50 font-sans">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Green Mesh Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-100/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-green-50/60 rounded-full blur-[100px]"></div>
        
        {/* Micro-dot Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#065f46 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }}></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          {/* Banner Section - Always Full Width */}
          <div className="w-full flex justify-center items-center overflow-hidden border-b border-slate-200">
            <div className="w-full">
              <img 
                src={bannerImageUrl} 
                alt="Living in Raleigh Banner" 
                className="w-full h-auto object-cover max-h-[300px] md:max-h-[450px] shadow-sm"
                onError={(e) => {
                  console.warn("Banner image failed to load from Drive link.");
                }}
              />
            </div>
          </div>

          {/* Hero Content Section */}
          <section className="pt-12 pb-4 px-4 max-w-5xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-2">
              Relocating to the Triangle?
            </h2>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-none">
              Book a Call With <span className="text-green-600 block">The Living in Raleigh Team</span>
            </h1>
            
            <div className="max-w-3xl mx-auto mb-10">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                Schedule your free one-on-one relocation consultation today.
              </p>
            </div>

            {/* Embedded Calendar Scheduler Wrapper */}
            <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden mb-12 relative ring-1 ring-slate-200/50">
              
              {/* 
                THE FULL-WIDTH TOP-LAYER SHIELD: 
                Adjusted height to 58px and added a subtle shadow to fully mask any bleeding text.
                Solid background color is essential here to act as a physical cover.
              */}
              <div className="absolute top-0 left-0 w-full h-[58px] bg-green-50 z-20 flex items-center justify-center px-4 border-b border-green-200/60 pointer-events-none shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                 <div className="flex items-center gap-2">
                    <div className="bg-green-100 p-1 rounded-full flex-shrink-0">
                      <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-slate-800 font-bold text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight text-center">
                      Consultations available via phone, video call, text, or in person at our North Raleigh office.
                    </p>
                 </div>
              </div>

              {/* 
                The iframe container: 
                pt-[58px] matches our shield height.
                -mt-[106px] shifts the iframe content up to hide the unwanted title line completely.
              */}
              <div className="relative pt-[58px]">
                <div className="overflow-hidden">
                  <iframe 
                    src={embedUrl} 
                    style={{ border: 0 }} 
                    width="100%" 
                    height="700" 
                    frameBorder="0"
                    scrolling="no"
                    title="Schedule Appointment"
                    className="w-full -mt-[106px]"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
