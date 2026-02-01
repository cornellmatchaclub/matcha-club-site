
import React from 'react';
import { RECIPE } from '../data/constants';

const RecipeContent: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#2d4030] soft-font tracking-tight mb-2">{RECIPE.title}</h2>
        {/* <span className="bg-[#f1f8e9] text-[#556b2f] px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase">
          {RECIPE.difficulty} Level
        </span> */}
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#8b4513] opacity-60 mb-3 soft-font">Ingredients</h3>
          <ul className="space-y-3">
            {RECIPE.ingredients.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8bc34a]/40 mt-1.5 shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
          <div>
            <img src="https://www.acozykitchen.com/wp-content/uploads/2017/04/IcedMatchaLatte-1.jpg" alt="Matcha Latte" className="w-[80%] rounded-2xl shadow-sm border border-[#8bc34a]/10 object-cover" />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-[#8b4513] opacity-60 mb-3 soft-font">Preparation</h3>
          <ol className="space-y-4">
            {RECIPE.steps.map((step, idx) => (
              <li key={idx} className="flex gap-4 text-gray-600 text-sm font-light">
                <span className="font-bold text-[#8bc34a] soft-font text-[10px] tracking-tighter w-4">{idx + 1}.</span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <div className="bg-[#f9fbf7] p-8 rounded-2xl text-center mt-10 italic text-gray-500 text-sm font-light border border-[#8bc34a]/10">
            The froth should look like a soft, green cloud on the surface of your tea.
          </div>
        </div>
      </div>


    </div>
  );
};

export default RecipeContent;
