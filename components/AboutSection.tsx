import React from 'react';
import { Trophy, MapPin, Users, Target } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-club-navy text-white relative">
      <div className="container mx-auto px-6">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h4 className="text-club-red font-bold uppercase tracking-widest mb-2">始于 1995</h4>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">我们是 <br/> 奉贤之傲</h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              从简陋的业余起点到征服上海的豪门。岩意足球俱乐部代表的不仅仅是一场比赛；我们代表着一个社区，一种精神，以及坚定不移的求胜意志。我们的使命很简单：培养天才，娱乐世界，捧起奖杯。
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white/10 p-4 rounded backdrop-blur-sm border-l-4 border-club-red">
                <Trophy className="text-club-gold mb-2" size={32} />
                <h4 className="font-bold text-2xl">5</h4>
                <p className="text-xs uppercase tracking-wide text-gray-400">奉超冠军</p>
              </div>
              <div className="bg-white/10 p-4 rounded backdrop-blur-sm border-l-4 border-club-red">
                <Users className="text-club-gold mb-2" size={32} />
                <h4 className="font-bold text-2xl">60k+</h4>
                <p className="text-xs uppercase tracking-wide text-gray-400">球场容量</p>
              </div>
            </div>
          </div>
          <div className="relative">
             <img 
               src="https://picsum.photos/id/1059/600/500" 
               alt="Stadium History" 
               className="rounded-lg shadow-2xl relative z-10"
             />
             <div className="absolute -top-4 -right-4 w-full h-full border-2 border-club-red rounded-lg z-0"></div>
          </div>
        </div>

        {/* Timeline Highlights */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold uppercase mb-8 text-center">历史时刻</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             {[
               { year: '1995', title: '俱乐部成立', desc: '由当地球员创立。' },
               { year: '2020', title: '首冠荣耀', desc: '首次获得顶级联赛冠军。' },
               { year: '2023', title: '奉贤之巅', desc: '戏剧性地赢得了奉超冠军。' },
               { year: '2025', title: '新纪元', desc: '市级青训学院正式启用。' },
             ].map((item, idx) => (
               <div key={idx} className="bg-white/5 p-6 rounded hover:bg-white/10 transition cursor-pointer group">
                  <span className="text-4xl font-black text-white/20 group-hover:text-club-red transition-colors">{item.year}</span>
                  <h4 className="font-bold text-xl mt-2">{item.title}</h4>
                  <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>

        {/* Map Location */}
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="p-8 md:w-1/3 text-club-navy">
             <h3 className="text-2xl font-bold uppercase mb-4 flex items-center gap-2"><MapPin className="text-club-red"/> 塘外竞技场</h3>
             <p className="mb-4">123 RENMING ROAD, FENGXIAN, SHANGHAI.</p>
             <p className="mb-4 text-sm text-gray-600">每个比赛日，与60,000名球迷一起捍卫我们的堡垒。可通过自行车、电瓶车和徒步轻松抵达。</p>
             <button className="bg-club-navy text-white px-6 py-2 uppercase font-bold text-sm hover:bg-club-red transition w-full">获取路线</button>
          </div>
          <div className="md:w-2/3 h-64 md:h-auto bg-gray-200 relative">
            <iframe 
              src="https://map.baidu.com/poi/%E5%A1%98%E5%A4%96/@13539393.674064022,3598441.8411251176,18.67z?uid=7bf52cb81e7c2263940319f6&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&en_uid=7bf52cb81e7c2263940319f6&pcevaname=pc4.1&querytype=detailConInfo&da_src=shareurl" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Stadium Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
