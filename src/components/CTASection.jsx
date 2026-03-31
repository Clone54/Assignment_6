import { ArrowRight } from 'lucide-react';

export const CTASection = () => (
  <div className="bg-primary py-20 px-4 md:px-12 text-center text-primary-content">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Ready to Transform Your Workflow?</h2>
      <p className="text-xl opacity-90 mb-10">Join 120,000+ professionals who have already accelerated their career with DigiTools.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="btn btn-neutral btn-lg px-8 rounded-2xl shadow-2xl">
          Get Started Now
          <ArrowRight size={20} className="ml-2" />
        </button>
        <button className="btn btn-outline btn-lg px-8 rounded-2xl border-white text-white hover:bg-white hover:text-primary">
          View Enterprise Plans
        </button>
      </div>
      <p className="mt-8 text-sm opacity-70 italic">No credit card required for free trial.</p>
    </div>
  </div>
);
