import React, { useState } from 'react';
import { PLAYERS } from '../constants';
import { Player } from '../types';
import { X, BarChart2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const TeamSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('全部');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const filters = ['全部', '前锋', '中场', '后卫', '门将'];

  const filteredPlayers = filter === '全部' 
    ? PLAYERS 
    : PLAYERS.filter(p => p.position === filter);

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-club-navy uppercase mb-4">一线队阵容</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full uppercase text-xs font-bold tracking-widest transition-all ${
                  filter === f 
                    ? 'bg-club-red text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-club-navy hover:text-club-navy'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredPlayers.map(player => (
            <div 
              key={player.id} 
              className="group bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition hover:-translate-y-2"
              onClick={() => setSelectedPlayer(player)}
            >
              <div className="relative h-80 bg-gradient-to-b from-gray-200 to-gray-400">
                <img src={player.image} alt={player.name} className="w-full h-full object-cover object-top" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-4xl font-black text-white/20 absolute -top-8 -right-2">{player.number}</span>
                  <p className="text-xs uppercase font-bold text-club-red mb-1">{player.position}</p>
                  <h3 className="text-xl font-bold uppercase">{player.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Player Modal */}
      {selectedPlayer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedPlayer(null)}></div>
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 flex flex-col md:flex-row shadow-2xl animate-fade-in-up">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-club-red z-20 bg-white rounded-full p-1"
              onClick={() => setSelectedPlayer(null)}
            >
              <X size={24} />
            </button>
            
            {/* Modal Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-club-navy">
              <img src={selectedPlayer.image} alt={selectedPlayer.name} className="w-full h-full object-cover opacity-90" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h2 className="text-5xl font-black uppercase leading-none mb-2">{selectedPlayer.name}</h2>
                <div className="flex items-center gap-4 text-lg">
                  <span className="font-bold text-club-red">#{selectedPlayer.number}</span>
                  <span>{selectedPlayer.nationality}</span>
                  <span>{selectedPlayer.position}</span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="w-full md:w-1/2 p-8 bg-white">
              <h3 className="text-xl font-bold uppercase text-club-navy mb-4 border-b pb-2">球员档案</h3>
              <p className="text-gray-600 mb-8 leading-relaxed italic">
                "{selectedPlayer.bio}"
              </p>

              <h4 className="text-sm font-bold uppercase text-gray-400 mb-4 flex items-center gap-2">
                <BarChart2 size={16} /> 赛季数据
              </h4>
              
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[{
                    name: 'Stats',
                    进球: selectedPlayer.stats[0].goals,
                    助攻: selectedPlayer.stats[0].assists,
                    场次: selectedPlayer.stats[0].matches
                  }]}>
                    <XAxis dataKey="name" hide />
                    <YAxis />
                    <Tooltip cursor={{fill: 'transparent'}} />
                    <Bar dataKey="进球" fill="#FF0000" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="助攻" fill="#001F3F" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="场次" fill="#C5A059" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-4 mt-2 text-xs font-bold uppercase text-gray-500">
                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-club-red rounded-full"></span> 进球</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-club-navy rounded-full"></span> 助攻</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-club-gold rounded-full"></span> 场次</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;