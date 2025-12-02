import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-club-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
          {/* Brand */}
          <div className="md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-club-red rounded-full flex items-center justify-center border-2 border-white">
                    <span className="text-white font-bold text-xl">Y</span>
                </div>
                <span className="text-2xl font-black uppercase">岩意 <span className="text-club-red">FC</span></span>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed">
               岩意足球俱乐部官方网站。
               加入塘外，感受咆哮。
             </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold uppercase mb-6 text-club-red">俱乐部</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#about" className="hover:text-white transition">历史</a></li>
              <li><a href="#team" className="hover:text-white transition">一线队</a></li>
              <li><a href="#" className="hover:text-white transition">青训学院</a></li>
              <li><a href="#" className="hover:text-white transition">职业机会</a></li>
              <li><a href="#" className="hover:text-white transition">赞助商</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase mb-6 text-club-red">支持</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">联系我们</a></li>
              <li><a href="#" className="hover:text-white transition">常见问题</a></li>
              <li><a href="#tickets" className="hover:text-white transition">票务信息</a></li>
              <li><a href="#" className="hover:text-white transition">无障碍服务</a></li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h4 className="font-bold uppercase mb-6 text-club-red">连接</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-club-red transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-club-red transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-club-red transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-club-red transition">
                <Youtube size={20} />
              </a>
            </div>
            <div className="text-sm text-gray-400 space-y-2">
              <p className="flex items-center gap-2"><Mail size={16}/> press@yanyifc.com</p>
              <p className="flex items-center gap-2"><Phone size={16}/> +44 20 7946 0000</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} 岩意足球俱乐部. 版权所有.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">隐私政策</a>
            <a href="#" className="hover:text-white">使用条款</a>
            <a href="#" className="hover:text-white">Cookie 设置</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
