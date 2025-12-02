import React from 'react';
import { MATCHES, PRODUCTS } from '../constants';
import { ShoppingCart, Ticket } from 'lucide-react';

const TicketsShopSection: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Tickets Section */}
      <section id="tickets" className="py-20 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-4xl font-black text-club-navy uppercase">即将到来的比赛</h2>
          <a href="#" className="text-club-red font-bold uppercase text-sm hover:underline mt-4 md:mt-0">查看完整赛程</a>
        </div>
        
        <div className="overflow-x-auto rounded-lg shadow-xl border border-gray-100">
          <table className="w-full text-left">
            <thead className="bg-club-navy text-white uppercase text-sm">
              <tr>
                <th className="p-4">对手</th>
                <th className="p-4">日期与时间</th>
                <th className="p-4">场地</th>
                <th className="p-4">价格</th>
                <th className="p-4 text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MATCHES.map((match) => (
                <tr key={match.id} className="hover:bg-gray-50 transition">
                  <td className="p-4 font-bold text-lg">{match.opponent}</td>
                  <td className="p-4 text-gray-600">{match.date} | {match.time}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${match.venue === '主场' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                      {match.venue}
                    </span>
                  </td>
                  <td className="p-4 font-bold">{match.price}</td>
                  <td className="p-4 text-right">
                    <button className="bg-club-navy hover:bg-club-red text-white px-4 py-2 rounded text-sm font-bold uppercase transition flex items-center gap-2 ml-auto">
                      <Ticket size={16} /> 立即购买
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
             <h2 className="text-4xl font-black text-club-navy uppercase mb-2">俱乐部官方商店</h2>
             <p className="text-gray-500">穿上我们的颜色，支持我们的骄傲。</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow p-4 group">
                <div className="relative overflow-hidden rounded-md mb-4 bg-gray-100 aspect-square flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="w-3/4 object-contain group-hover:scale-110 transition-transform duration-300 mix-blend-multiply" />
                  <div className="absolute bottom-0 left-0 w-full p-2 translate-y-full group-hover:translate-y-0 transition-transform">
                    <button className="w-full bg-club-red text-white py-2 text-xs font-bold uppercase rounded shadow-lg flex items-center justify-center gap-1">
                      <ShoppingCart size={14} /> 加入购物车
                    </button>
                  </div>
                </div>
                <div className="text-xs text-gray-500 uppercase font-bold">{product.category}</div>
                <h3 className="font-bold text-club-navy text-lg">{product.name}</h3>
                <p className="text-club-red font-bold">{product.price}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-transparent border-2 border-club-navy text-club-navy hover:bg-club-navy hover:text-white px-8 py-3 rounded-none uppercase font-bold tracking-widest transition">
              访问在线商城
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TicketsShopSection;