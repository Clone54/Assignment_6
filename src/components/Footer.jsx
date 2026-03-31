import { Zap } from 'lucide-react';
import footerLogo from '../Assets/footerlogo.png';


export const Footer = () => (
  <footer className="footer py-20 px-50 bg-[#101727] text-neutral-content flex flex-col lg:flex-row justify-center gap-40">
    <aside className='max-w-xs'>
      <img src={footerLogo} alt="DigiTools Logo" className="w-32 h-auto mb-2" />
      <p>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
    </aside> 
    <nav>
      <h6 className="footer-title">Product</h6> 
      <a href='#product' className="link link-hover">Features</a>
      <a href='#pricing-section' className="link link-hover">Pricing</a>
      <a className="link link-hover">Templates</a>
      <a className="link link-hover">Integration</a>
      
    </nav> 
    <nav>
      <h6 className="footer-title">Company</h6> 
      <a className="link link-hover">About</a>
      <a className="link link-hover">Blog</a>
      <a className="link link-hover">Careers</a>
      <a className="link link-hover">Press</a>
      
    </nav> 
    <nav>
      <h6 className="footer-title">Resources</h6> 
      <a className="link link-hover">Documentation</a>
      <a className="link link-hover">Help Center</a>
      <a className="link link-hover">Community</a>
      <a className="link link-hover">Contact</a>
    </nav> 
    <nav>
      <h6 className="footer-title">Social Links</h6>
      <div>
        <a className="link link-hover">Terms of Service</a>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Security</a>
      </div>
    </nav>
  </footer>
);
