import bannerLogo from '../Assets/banner.png';
import dot from '../Assets/Group 5.png';
import play from '../Assets/Play.png';

export const Banner = () => (
  <div className="hero min-h-[60vh] bg-base-200 px-4 md:px-12">
    <div className="hero-content flex-col lg:flex-row-reverse gap-12">
      <div className="flex-1 flex justify-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <img 
            src={bannerLogo} 
            className="max-w-xs md:max-w-md relative z-10" 
            alt="Dashboard"
          />
        </div>
      </div>
      <div className="flex-1">
        <h6 className='flex items-center w-fit bg-[#E1E7FF] rounded-2xl gap-2 px-4 py-1 text-sm font-semibold'><img src={dot} alt=""/><span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">New AI Powered Tools Available</span></h6>
        <h1 className="text-5xl font-extrabold leading-tight">
          Supercharge Your <span className="text-primary">Career Path</span> with DigiTools
        </h1>
        <p className="py-6 text-lg text-base-content/70">
          Build ATS-optimized resumes, track your applications, and land your dream job with our comprehensive suite of professional digital tools.
        </p>
        <div className="flex gap-4">
          <button className="btn btn-primary shadow-xl px-8">Explore Products</button>
          <button className="btn btn-outline border-[#9514FA] rounded-3xl hover:bg-linear-to-r hover:from-[#8d7ff5] hover:to-[#c27cf7] hover:text-white hover:border-none"><img src={play} alt="" />Watch Demo</button>
        </div>
      </div>
    </div>
  </div>
);
