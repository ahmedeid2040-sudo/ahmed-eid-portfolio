import React from 'react';
import { ChevronRight, Globe, Layout, Database, BarChart, CheckCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 bg-white shadow-sm sticky top-0 z-50">
        <div className="text-2xl font-bold text-blue-700">VENIX</div>
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#services" className="hover:text-blue-600 transition">الخدمات</a>
          <a href="#about" className="hover:text-blue-600 transition">لماذا نحن؟</a>
          <a href="#contact" className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition">احجز استشارة</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-20 px-6 text-center bg-gradient-to-b from-white to-slate-50">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          نحول الفوضى في شركتك إلى <span className="text-blue-700">أنظمة رقمية</span> تضاعف أرباحك
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          نساعد الشركات في مصر والخليج على النمو من خلال تصميم متاجر إلكترونية خارقة وأنظمة ERP مخصصة وإدارة حملات إعلانية ذكية.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-800 transition shadow-lg flex items-center justify-center">
            ابدأ مشروعك الآن <ChevronRight className="mr-2" />
          </button>
          <button className="bg-white border-2 border-slate-200 px-8 py-4 rounded-lg text-lg font-bold hover:bg-slate-50 transition">
            شاهد سابقة أعمالنا
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">خدمات متكاملة لنمو أعمالك</h2>
          <p className="text-slate-500">حلول مصممة خصيصاً لتناسب احتياجات السوق السعودي والإماراتي والمصري.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'أنظمة ERP مخصصة', desc: 'أتمتة كاملة لعمليات شركتك، المحاسبة، والمخازن في لوحة تحكم واحدة.', icon: <Database className="w-12 h-12 text-blue-600" /> },
            { title: 'متاجر إلكترونية', desc: 'تصميم مواقع ومتاجر سريعة جداً تركز على تحويل الزوار إلى عملاء دائمين.', icon: <Layout className="w-12 h-12 text-blue-600" /> },
            { title: 'إدارة الحملات والنمو', desc: 'إدارة إعلانات Meta و Google باحترافية لتحقيق أعلى عائد على الاستثمار (ROI).', icon: <BarChart className="w-12 h-12 text-blue-600" /> },
          ].map((item, index) => (
            <div key={index} className="p-8 bg-white rounded-2xl border border-slate-100 hover:shadow-xl transition group">
              <div className="mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Venix? - Systems Focus */}
      <section id="about" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">لسنا مجرد مبرمجين، نحن شركاء نجاحك</h2>
            <p className="text-blue-100 mb-8 text-lg">
              نركز على بناء "أنظمة" قابلة للتوسع. إذا كنت تعاني من التشتت الإداري أو بطء المبيعات، نحن هنا لنبني لك المحرك التقني الذي تحتاجه.
            </p>
            <ul className="space-y-4">
              {['خبرة عميقة في سوق الخليج ومصر', 'تركيز كامل على الـ KPIs والأرقام', 'دعم فني واستشارات نمو مستمرة'].map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-green-400" /> {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-800 p-8 rounded-3xl border border-blue-700 shadow-2xl text-center">
            <p className="text-5xl font-bold mb-2">+15,000</p>
            <p className="text-blue-200 uppercase tracking-widest">ساعة من الخبرة التقنية</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-3xl font-bold mb-4">هل أنت جاهز للتحول الرقمي؟</h2>
          <p className="text-slate-600 mb-8">احجز مكالمة استشارية مدتها 15 دقيقة لنناقش كيف يمكننا تطوير أعمالك.</p>
          <form className="grid gap-4">
            <input type="text" placeholder="اسمك الكريم" className="p-4 rounded-lg bg-slate-50 border border-slate-200 focus:outline-blue-600" />
            <input type="email" placeholder="بريدك الإلكتروني" className="p-4 rounded-lg bg-slate-50 border border-slate-200 focus:outline-blue-600" />
            <textarea placeholder="أخبرنا عن مشروعك" className="p-4 rounded-lg bg-slate-50 border border-slate-200 h-32 focus:outline-blue-600"></textarea>
            <button className="bg-blue-700 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition">ارسل الطلب الآن</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200 text-center text-slate-500">
        <p>© 2026 Venix Solutions. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}