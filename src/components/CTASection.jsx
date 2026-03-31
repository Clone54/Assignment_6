import { ArrowRight } from 'lucide-react';

export const CTASection = () => (
  <div className="bg-primary py-20 px-4 md:px-12 text-center text-primary-content">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-5xl font-black mb-6 uppercase tracking-tight">Ready to Transform Your Workflow?</h2>
      <p className="text-xl opacity-90 mb-10"><span>Join thousands of professionals who are already using Digitools to work smarter.</span> <br /> <span>  Start your free trial today.</span></p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="btn btn-white btn-lg px-8 rounded-full shadow-2xl bg-primary text-white hover:bg-white hover:text-primary">
          Explore Products
        </button>
        <button className="btn btn-lg px-8 rounded-full border-white bg-primary text-white hover:bg-white hover:text-primary">
          View Enterprise Plans
        </button>
      </div>
      <p className="mt-8 text-sm opacity-70 italic">14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  </div>
);
