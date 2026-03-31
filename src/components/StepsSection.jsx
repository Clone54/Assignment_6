import React from 'react';
import { ChevronRight } from 'lucide-react';
import user from '../Assets/user.png';
import rocket from '../Assets/rocket.png';
import pakage from '../Assets/package.png';

export const StepsSection = () => (
  <div className="py-24 px-4 md:px-12 bg-base-200">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-black mb-4">Get Started In 3 Steps</h2>
      <p className="max-w-2xl mx-auto opacity-70">Start using premium digital tools in minuite, not houres.</p>
    </div>
    <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
      {[
        { step: 1, title: "Create Account", desc: "Sign up for free in seconds. No credit card is required to get started.", pic: user},
        { step: 2, title: "Choose Products", desc: "Browse our catalog and select the tools that fit your needs.", pic: pakage},
        { step: 3, title: "Start Creating", desc: "Download and start using your premium tools quickly.", pic: rocket}
      ].map((item, idx) => (
        <React.Fragment key={idx}>
          <div className="card w-full lg:w-72 bg-base-100 shadow-xl border border-base-300">
            <div className='w-9 h-9 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white flex items-center justify-center absolute top-2 right-3 shadow-md border-2 border-white'>
              <p className="text-xs font-bold">0{item.step}</p>
            </div>
            <div className="card-body items-center text-center">
              <div className="w-25 h-25 rounded-full bg-linear-to-r from-[#4F39F6]/50 to-[#9514FA]/50 flex items-center justify-center mb-4"><img src={item.pic} alt={item.title} /></div>
              <h2 className="card-title">{item.title}</h2>
              <p className="text-sm opacity-60">{item.desc}</p>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
);
