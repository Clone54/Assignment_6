import { Zap } from 'lucide-react';

export const Footer = () => (
  <footer className="footer p-10 bg-neutral text-neutral-content">
    <aside>
      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-2">
        <Zap size={24} />
      </div>
      <p className="font-bold text-xl text-white">DigiTools Inc.</p>
      <p>Empowering careers since 2021.</p>
    </aside> 
    <nav>
      <h6 className="footer-title">Product</h6> 
      <a className="link link-hover">Features</a>
      <a className="link link-hover">Templates</a>
      <a className="link link-hover">AI Assistant</a>
      <a className="link link-hover">Pricing</a>
    </nav> 
    <nav>
      <h6 className="footer-title">Resources</h6> 
      <a className="link link-hover">Blog</a>
      <a className="link link-hover">Resume Guide</a>
      <a className="link link-hover">Interview Tips</a>
    </nav> 
    <nav>
      <h6 className="footer-title">Legal</h6> 
      <a className="link link-hover">Terms of Service</a>
      <a className="link link-hover">Privacy Policy</a>
      <a className="link link-hover">Security</a>
    </nav>
  </footer>
);
