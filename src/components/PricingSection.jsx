import { CheckCircle } from 'lucide-react';

export const PricingSection = () => (
  <div className="py-24 px-4 md:px-12 bg-white">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Simple, Tranperant Pricing</h2>
      <p className="opacity-70">Choose the plans that fits your needs. Upgrade or downgrade anytime.</p>
    </div>
    <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
      <div className="flex-1 p-8 bg-[#F2F2F2] rounded-3xl border border-base-200 flex flex-col hover:shadow-lg transition-all">
        <span className="badge badge-lg badge-ghost mb-6 p-4 font-bold text-3xl">Starter</span>
        <p className="opacity-60 mb-8">Perfect for getting started.</p>
        <div className="text-5xl font-semibold mb-4">$0 <span className='text-gray-900 opacity-60 text-2xl'>/Month</span>
        </div>
        
        <ul className="space-y-4 mb-8 text-left w-full">
          <li className="flex items-center gap-2"><CheckCircle size={18} /> Access to 10 free tools</li>
          <li className="flex items-center gap-2"><CheckCircle size={18} /> Basic templates</li>
          <li className="flex items-center gap-2"><CheckCircle size={18} /> Community Support</li>
          <li className="flex items-center gap-2"><CheckCircle size={18} /> 1 project per month</li>
        </ul>
        <button className="btn btn-block mt-auto rounded-full border-2 border-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:from-white hover:to-white hover:text-primary hover:border-primary">
          Get Started Free
        </button>
      </div>
      <div className="flex-1 p-10 rounded-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex flex-col shadow-2xl relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="badge p-4 font-bold text-sm text-[#BB4D00] bg-[#FEF3C6] rounded-full">Most Popular</span>
        </div>
        <span className="font-bold text-3xl">Pro</span>
        <p className="opacity-80 mb-8">Best for professionals.</p>
        <div className="text-5xl font-semibold mb-4 text-white">$29 <span className='opacity-60 text-2xl'>/Month</span></div>
        
        <ul className="space-y-4 mb-8 text-left w-full">
          <li className="flex items-center gap-2"><CheckCircle size={18} /> Access to all premium tools</li>
          <li className="flex items-center gap-2"><CheckCircle size={18} /> Unlimited templates</li>
          <li className="flex items-center gap-2"><CheckCircle size={18} /> Priority support</li>
          <li className="flex items-center gap-2"><CheckCircle size={18} /> Unlimited projects</li>
          <li className="flex items-center gap-2"><CheckCircle size={18} /> Cloud Sync</li>
          <li className="flex items-center gap-2"><CheckCircle size={18} /> Advance analytics</li>
        </ul>
        <button className="btn bg-white text-primary btn-block mt-auto rounded-full hover:bg-primary hover:text-white">Get Unlimited Access</button>
      </div>
      <div className="flex-1 p-8 bg-[#F2F2F2] rounded-3xl border border-base-200 flex flex-col hover:shadow-lg transition-all">
        <span className="badge badge-lg badge-ghost mb-6 p-4 font-bold text-3xl">Enterprise</span>
        <p className="opacity-60 mb-8">For teams and business.</p>
        <div className="text-5xl font-semibold mb-4">$99 <span className='text-gray-900 opacity-60 text-2xl'>/Month</span>
        </div>
        
        <ul className="space-y-4 mb-8 text-left w-full">
          <li className="flex items-center gap-2"><CheckCircle size={18} /> Everything in pro</li>
          <li className="flex items-center gap-2"><CheckCircle size={18} /> Team colaboration</li>
          <li className="flex items-center gap-2"><CheckCircle size={18} /> Custom integrations</li>
          <li className="flex items-center gap-2"><CheckCircle size={18} /> Dedicated support</li>
          <li className="flex items-center gap-2"><CheckCircle size={18} /> SLA guarantee</li>
          <li className="flex items-center gap-2"><CheckCircle size={18} /> Custom branding</li>
        </ul>
        <button className="btn btn-block mt-auto rounded-full border-2 border-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:from-white hover:to-white hover:text-primary hover:border-primary">
          Contact sales
        </button>
      </div>
    </div>
  </div>
);
