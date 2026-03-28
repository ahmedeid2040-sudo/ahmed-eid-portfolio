import React from 'react';
import { ChevronRight, Globe, Layout, Database, BarChart3, CheckCircle2, Zap, ArrowUpRight } from 'lucide-react';

export default function AhmedEidPortfolio() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-blue-500/30">
      
      {/* Floating Header */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 px-6 py-3 rounded-2xl flex justify-between items-center shadow-2xl">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            أحمد عيد
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <a href="#services" className="hover:text-white transition">الخدمات</a>
            <a href="#projects" className="hover:text-white transition">سابقة الأعمال</a>
            <a href="#contact" className="hover:text-white transition">تواصل معي</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-4 py-2 rounded-lg font-bold transition">
            حجز استشارة
          </button>
        </div>
      </nav>

      {/* Hero Section - Visual Impact */}
      <header className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-emerald-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8">
            <Zap size={14} /> متاح الآن لمشاريع الـ ERP والتحول الرقمي
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
            أصمم <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">أنظمة ذكية</span> <br />
            تُدير أعمالك وأنت نائم.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            أحمد عيد | مستشار أتمتة عمليات وتطوير برمجيات مخصصة لأسواق مصر والخليج. نُحول التعقيد إلى بساطة تدرّ أرباحاً.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <button className="bg-white text-black px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              ابدأ مشروعك <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button className="bg-slate-900 border border-slate-800 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-800 transition">
              استعرض الحلول
            </button>
          </div>
        </div>
      </header>

      {/* Bento Grid Services */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Large Card - ERP */}
          <div className="md:col-span-2 p-10 bg-gradient-to-br from-slate-900 to-slate-900/50 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
              <Database size={120} />
            </div>
            <h3 className="text-3xl font-bold mb-4">أنظمة ERP & Management</h3>
            <p className="text-slate-400 text-lg max-w-md mb-6">
              بناء أنظمة مخصصة بالكامل (Laravel) لإدارة المحاسبة، المخازن، والموظفين. أتمتة لا تترك مجالاً للخطأ البشري.
            </p>
            <ul className="flex flex-wrap gap-3 text-sm">
              <li className="bg-slate-800 px-3 py-1 rounded-md text-slate-300">أتمتة العمليات</li>
              <li className="bg-slate-800 px-3 py-1 rounded-md text-slate-300">لوحات تحكم ذكية</li>
              <li className="bg-slate-800 px-3 py-1 rounded-md text-slate-300">ربط API</li>
            </ul>
          </div>

          {/* Small Card - eCommerce */}
          <div className="p-8 bg-slate-900/50 rounded-3xl border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between group">
            <div className="text-emerald-500 mb-6 group-hover:scale-110 transition-transform"><Layout size={40} /></div>
            <div>
              <h3 className="text-xl font-bold mb-2">متاجر إلكترونية</h3>
              <p className="text-slate-400 text-sm">متاجر فائقة السرعة تركز على تجربة المستخدم ونسبة التحويل.</p>
            </div>
          </div>

          {/* Small Card - Ads */}
          <div className="p-8 bg-slate-900/50 rounded-3xl border border-slate-800 hover:border-purple-500/50 transition-all flex flex-col justify-between group">
            <div className="text-purple-500 mb-6 group-hover:scale-110 transition-transform"><BarChart3 size={40} /></div>
            <div>
              <h3 className="text-xl font-bold mb-2">إدارة حملات النمو</h3>
              <p className="text-slate-400 text-sm">إستراتيجيات تسويقية مبنية على البيانات لتحقيق ROI حقيقي.</p>
            </div>
          </div>

          {/* Large Card - Strategy */}
          <div className="md:col-span-2 p-10 bg-slate-900/50 rounded-3xl border border-slate-800 hover:border-blue-400/50 transition-all flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">الاستشارات الاستراتيجية</h3>
              <p className="text-slate-400 mb-4">أرسم لك خريطة الطريق من العشوائية إلى نظام قابل للتوسع (Scaling) في سوق الخليج ومصر.</p>
              <div className="flex gap-2">
                <CheckCircle2 className="text-blue-500" size={18} /> <span className="text-sm">تحليل فجوات الأداء</span>
              </div>
            </div>
            <div className="w-full md:w-48 h-32 bg-blue-600/10 rounded-2xl border border-blue-500/20 flex items-center justify-center">
               <Globe className="text-blue-500 animate-pulse" size={48} />
            </div>
          </div>

        </div>
      </section>

      {/* Trust / Stats */}
      <section className="py-20 border-y border-slate-900 bg-[#020610]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'عملاء في الخليج', val: '+20' },
            { label: 'أنظمة مخصصة', val: '15' },
            { label: 'نسبة أتمتة', val: '95%' },
            { label: 'ROI محقق للعملاء', val: '3x' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
              <div className="text-slate-500 text-sm uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">هل أنت جاهز لتكون قصة النجاح القادمة؟</h2>
          <p className="text-slate-400 mb-10 text-lg">لا أقدم مجرد "أكواد"، بل أقدم "حلولاً" ترفع من قيمة البيزنس الخاص بك.</p>
          <a href="mailto:contact@ahmedeid.com" className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.4)]">
            تواصل معي الآن
          </a>
        </div>
      </section>

      <footer className="py-10 border-t border-slate-900 text-center text-slate-600 text-sm">
        <p>© 2026 أحمد عيد. خبير أتمتة الأعمال وتطوير البرمجيات.</p>
      </footer>
    </div>
  );
}