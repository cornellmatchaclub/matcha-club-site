import React, { useState } from 'react';
import { TEAM_MEMBERS, type TeamMember, FOUNDERS } from '../data/team';
import Modal from './Modal';
import { getAssetPath } from '../utils/paths';

const AboutContent: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [isFoundersOpen, setIsFoundersOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedPerson, setSelectedPerson] = useState<any | null>(null);

  return (
    <div className="w-full min-h-screen bg-[#fdf5e6] animate-in fade-in duration-700">
      {/* Full Width Wrapper */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10">

        <button onClick={onBack} className="flex items-center gap-2 text-[#556b2f] hover:text-[#2d4030] mb-12 group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">Back to Shelf</span>
        </button>

        {/* Header Section */}
        <section className="text-center mb-10">
          <h2 className="text-5xl  font-bold text-[#2d4030] mb-6">About Us</h2>
          <div className="w-24 h-1 bg-[#8bc34a]/30 mx-auto rounded-full mb-8"></div>
        </section>

        {/* Why We Founded This Section */}
        <section className="bg-white/40 backdrop-blur-sm p-8 md:p-12 md:mx-10 rounded-3xl border border-[#2d4030]/5 shadow-sm">
          {/* <h3 className="text-2xl font-bold text-[#2d4030] mb-6">Our Origin</h3> */}
          <p className="text-gray-700 text-[17px] leading-relaxed">
            We founded the Cornell Matcha Club out of a shared love of matcha but also desire to connect students together.
            Us 5 founders met through chance
            desire to find a moment of peace amidst the rigors of campus life. We realized that while coffee keeps us awake, matcha keeps us present. We founded this club to build a sanctuary for students to appreciate the ritual, health benefits, and vibrant community surrounding high-quality stone-ground tea.
          </p>

          {/* Collapsible Founders Section */}
          <div className="my-4 pt-6 pb-0">
            <button
              onClick={() => setIsFoundersOpen(!isFoundersOpen)}
              className="flex items-center gap-4 text-lg font-bold text-[#2d4030] hover:opacity-70 transition-opacity"
            >
              <span>{isFoundersOpen ? '−' : '+'} Meet the Founders</span>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ${isFoundersOpen ? 'max-h-[2000px] mt-8 opacity-100' : 'max-h-0 opacity-0'}`}>

              {/* Parent Flex Container: Column on mobile, Row on Large */}
              <div className='flex flex-col lg:flex-row items-center lg:items-start gap-10'>

                {/* Group Image: Full width and centered on mobile, half width on Desktop */}
                <div className="w-full lg:w-1/2 aspect-[3/2] rounded-3xl overflow-hidden shadow-md border-4 border-white group relative">
                  <img
                    src={getAssetPath("/assets/founders/iskej.jpg")}
                    alt="Matcha Club Founders!"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Founders Icons: Centered on mobile, no left margin (ml-10 removed) */}
                <div className="w-full lg:w-1/2 flex flex-wrap gap-6 justify-center lg:justify-start pb-4">
                  {FOUNDERS.map((person) => (
                    <div key={person.id} className="flex flex-col items-center">
                      <FounderImage person={person} onClick={() => setSelectedPerson(person)} />
                      <p className="mt-3 text-center text-[14px] font-bold text-[#2d4030]">{person.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-center lg:text-left text-[14px] text-gray-600 mt-6 lg:ml-2">
                The five founders of the Cornell Matcha Club
              </p>
            </div>
          </div>
        </section>

        {/* Current E-Board Section */}
        <section className="max-w-[1400px] mx-auto mb-8 pb-10 border-b border-[#2d4030]/10">
          <h3 className="text-4xl font-bold text-[#2d4030] pt-12 mb-12">Current E-Board</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <TeamCard key={member.id} member={member} onClick={() => setSelectedPerson(member)} />
            ))}
          </div>
        </section>

        {/* BIO MODAL */}
        {selectedPerson && (
          <Modal onClose={() => setSelectedPerson(null)}>
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
              <div className="w-48 h-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={getAssetPath(selectedPerson.image || selectedPerson.normal)}
                  className="w-full h-full object-cover"
                  alt={selectedPerson.name}
                />
              </div>
              <div className="flex-1">
                <h2 className="text-4xl font-bold text-[#2d4030] mb-2">{selectedPerson.name}</h2>
                <p className="text-[#8bc34a] font-bold uppercase tracking-widest mb-6">{selectedPerson.role || "Founder"}</p>
                <div className="w-12 h-1 bg-[#8bc34a]/30 mb-6 mx-auto md:mx-0"></div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {selectedPerson.bio}
                </p>
              </div>
            </div>
          </Modal>
        )}

        {/* FAQ Section */}
        <section className="max-w-3xl">
          <h3 className="text-4xl font-bold text-[#2d4030] mb-6">FAQ</h3>
          {/* ADD FAQs HERE */}
          <FAQItem question="Why the Cornell Matcha Club?" answer="Because matcha keeps us present while Cornell keeps us busy." />
        </section>
      </div >
    </div >
  );
};

// Fun Hover/Silly Picture Component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FounderImage: React.FC<{ person: any, onClick: () => void }> = ({ person, onClick }) => (
  <div onClick={onClick} className="relative w-28 h-28 md:w-32 md:h-32 cursor-pointer group">
    <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-[#8bc34a]/20 transition-all duration-500 group-hover:scale-105 shadow-md">
      <img src={getAssetPath(person.normal)} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
      <img src={getAssetPath(person.silly)} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  </div>
);

const TeamCard: React.FC<{ member: TeamMember; onClick: () => void }> = ({ member, onClick }) => (
  <div className="flex flex-col group cursor-pointer" onClick={onClick}>
    {/* Smaller Image Container */}
    <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-4 shadow-sm border border-[#2d4030]/5 transition-transform duration-300 group-hover:-translate-y-1">
      <img src={getAssetPath(member.image)} className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:opacity-0 transition-opacity duration-500" />
      <img src={getAssetPath(member.funImage)} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    {/* Info remains visible, bio is hidden */}
    <h4 className="text-lg font-bold text-[#2d4030] mb-0.5">{member.name}</h4>
    <p className="text-[#8bc34a] font-bold text-[10px] uppercase tracking-wider">
      {member.role}
    </p>
  </div>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
  <div className="border-b border-[#2d4030]/10 pb-6">
    <h4 className="text-lg font-bold text-[#2d4030] mb-2">{question}</h4>
    <p className="text-gray-600 leading-relaxed">{answer}</p>
  </div>
);

export default AboutContent;