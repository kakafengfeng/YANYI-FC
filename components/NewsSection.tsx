import React from 'react';
import { NEWS } from '../constants';
import { ArrowRight, Calendar, User } from 'lucide-react';

const NewsSection: React.FC = () => {
  return (
    <section id="news" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-black text-club-navy uppercase">最新新闻</h2>
            <div className="w-20 h-1 bg-club-red mt-2"></div>
          </div>
          <button className="hidden md:flex items-center gap-2 text-club-navy font-bold uppercase hover:text-club-red transition-colors">
            查看归档 <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS.map((item) => (
            <div key={item.id} className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-club-red text-white text-xs font-bold px-3 py-1 uppercase">
                  新闻
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                  <span className="flex items-center gap-1"><User size={12} /> {item.author}</span>
                </div>
                <h3 className="text-xl font-bold text-club-navy mb-3 group-hover:text-club-red transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{item.summary}</p>
                <a href="#" className="inline-flex items-center text-club-red font-bold uppercase text-sm tracking-wide hover:underline">
                  阅读全文 <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;