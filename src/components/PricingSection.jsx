import { CheckCircle } from 'lucide-react';

export const PricingSection = () => (
  <div className="py-24 px-4 md:px-12 bg-white">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Pricing Plans</h2>
      <p className="opacity-70">No hidden fees. Simple, transparent pricing for everyone.</p>
    </div>
    <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
      <div className="flex-1 p-8 rounded-3xl border border-base-200 flex flex-col items-center text-center hover:shadow-lg transition-all">
        <span className="badge badge-lg badge-ghost mb-6 p-4 font-bold">Free Tier</span>
        <div className="text-5xl font-black mb-4">$0</div>
        <p className="opacity-60 mb-8">Try out our core features with zero risk.</p>
        <ul className="space-y-4 mb-8 text-left w-full">
          <li className="flex items-center gap-2"><CheckCircle size={18} className="text-success" /> Basic PDF Export</li>
          <li className="flex items-center gap-2"><CheckCircle size={18} className="text-success" /> 2 Resume Templates</li>
          <li className="flex items-center gap-2"><CheckCircle size={18} className="text-success" /> Email Support</li>
        </ul>
        <button className="btn btn-outline btn-block mt-auto rounded-xl">Start Free</button>
      </div>
      <div className="flex-1 p-10 rounded-3xl bg-neutral text-neutral-content flex flex-col items-center text-center shadow-2xl relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="badge badge-primary p-4 font-bold text-lg">BEST VALUE</span>
        </div>
        <span className="badge badge-lg badge-outline mb-6 p-4 font-bold text-white">Professional</span>
        <div className="text-5xl font-black mb-4 text-white">$49</div>
        <p className="opacity-80 mb-8">The complete suite for professional job seekers.</p>
        <ul className="space-y-4 mb-8 text-left w-full">
          <li className="flex items-center gap-2"><CheckCircle size={18} className="text-primary" /> Everything in Standard</li>
          <li className="flex items-center gap-2"><CheckCircle size={18} className="text-primary" /> AI Content Optimizer</li>
          <li className="flex items-center gap-2"><CheckCircle size={18} className="text-primary" /> Priority Line Support</li>
          <li className="flex items-center gap-2"><CheckCircle size={18} className="text-primary" /> LinkedIn Header Design</li>
        </ul>
        <button className="btn btn-primary btn-block mt-auto rounded-xl">Get Unlimited Access</button>
      </div>
    </div>
  </div>
);
