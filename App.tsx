
import React, { useState } from 'react';
import { Section } from './components/Section';
import type { Experience } from './types';
import { WishModal } from './components/WishModal';

const experiences: Experience[] = [
  {
    role: "Veteran Free Fire 'Bot Player'",
    context: "Garena's Digital Battlefield",
    duration: "8 Years & Counting",
    description: "Dedicated over a decade to tactical 'hide-and-seek' operations. Contributed significantly to the victory screens of opponents, demonstrating remarkable persistence and a deep commitment to the respawn cycle.",
    imageUrl: "https://img.icons8.com/color/96/free-fire.png",
  },
  {
    role: "Professional Ludo Contestant",
    context: "Digital & Physical Boards Worldwide",
    duration: "Many, Many Games",
    description: "Specializes in the art of the 'almost-win'. Has mastered snatching defeat from the jaws of victory, demonstrating unparalleled sportsmanship by consistently letting others take the glory. Never won a single time, but holds the record for 'Most Hopeful Dice Rolls'.",
    imageUrl: "https://is4-ssl.mzstatic.com/image/thumb/Purple112/v4/a8/bb/48/a8bb4829-1bcd-0465-f342-9e94173ed844/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png",
  },
  {
    role: "Ethical Heart Hacker",
    context: "Specializing in Emotional Firewalls",
    duration: "Ongoing Mission",
    description: "An expert in bypassing emotional defenses and deploying charm exploits. Has a 100% success rate in capturing the target's attention. Disclaimer: Strictly hacks girls' hearts only.",
    imageUrl: "https://img.freepik.com/premium-vector/hacker-with-laptop-shape-heart-vector-illustration_1142-89792.jpg?w=2000",
  },
];


const awards: string[] = [
  'The "Are You Still Watching?" Netflix Trophy',
  '"Most Likely to Say \'What?\' then Answer the Question"',
  'The Golden Remote Award (for channel surfing excellence)',
  'Self-proclaimed "Funniest Person in the Room"',
];

const funFacts: string[] = [
    "Can talk about any anime for 6 hours straight, but can't remember what he had for breakfast.",
    "Lives by the motto 'Early to bed and early to rise,' but is still somehow always late.",
    "Once tried to bargain with an aunty for a discount. He did not win.",
    "Has a superpower of making friends with every stray dog in a 5-mile radius.",
];

const imageCollection = [
    { src: 'https://image2url.com/images/1763012311854-f67558e6-4b81-4cff-a88b-3bbc8bf7972f.jpg', alt: 'Image 1 from collection' },
    { src: 'https://image2url.com/images/1763012493885-2a97f6a2-cf5c-44f5-a8e8-252ebb883e23.jpg', alt: 'Image 2 from collection' },
    { src: 'https://image2url.com/images/1763012551659-0cf106c9-7156-4c17-a685-f960d6fb089d.jpg', alt: 'Image 3 from collection' },
    { src: 'https://image2url.com/images/1763012587880-ee796d66-ad28-4f43-a365-5335b55b7203.jpg', alt: 'Image 4 from collection' },
];


const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-slate-900 min-h-screen font-sans text-slate-300">
      <main className="max-w-4xl mx-auto p-4 sm:p-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center gap-8 mb-12">
          <img
            src="https://image2url.com/images/1763011981804-e39e81e2-8640-414c-b84f-9eaed5668adc.jpg"
            alt="Profile picture of Penaganti Naga Sathya Sai Mani Kanta"
            className="w-56 h-56 rounded-full border-4 border-cyan-400 object-cover shadow-lg bg-slate-700 p-2"
          />
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:-rotate-1 origin-bottom-left cursor-pointer">
              Penaganti Naga Sathya Sai Mani Kanta
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-cyan-400 mt-1 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-1 origin-top-left cursor-pointer">
              (SAI BABA)
            </h2>
            <p className="text-lg text-slate-400 mt-2">Birthday Boy & Professional Level-Upper</p>
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2 text-sm">
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                cake-and-gifts@celebrate.com
              </span>
              <span className="flex items-center gap-2">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                Orbiting the Sun (New Lap in Progress)
              </span>
            </div>
          </div>
        </header>

        {/* Objective */}
        <Section title="Career Objective">
          <p className="text-slate-400 leading-relaxed">
            Highly motivated individual seeking to maximize fun, laughter, and cake consumption. Proven ability to age gracefully (mostly) while maintaining a questionable sense of humor. Looking to leverage another year of existence into new achievements in napping and expert-level snacking.
          </p>
        </Section>
        
        {/* Experience */}
        <Section title="Professional Experience">
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg shadow-md border border-slate-700 hover:border-cyan-400 transition-all duration-300 flex flex-col sm:flex-row items-start gap-6">
                {exp.imageUrl && (
                  <img src={exp.imageUrl} alt={`${exp.role} icon`} className="w-16 h-16 flex-shrink-0 object-contain" />
                )}
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-md font-medium text-cyan-400">{exp.context}</p>
                    </div>
                    <span className="text-sm text-slate-500 font-mono flex-shrink-0 sm:ml-4 mt-1 sm:mt-1">{exp.duration}</span>
                  </div>
                  <p className="mt-3 text-slate-400">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <h3 className="text-lg font-bold text-white">International University of Charm & Seduction</h3>
                <p className="text-cyan-400">Major: Advanced Flirting Techniques</p>
                <p className="text-slate-400 text-sm">Status: Tenured Professor</p>
            </div>
        </Section>

        {/* Awards */}
        <Section title="Awards & Accolades">
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            {awards.map((award, index) => (
              <li key={index}>{award}</li>
            ))}
          </ul>
        </Section>

        {/* Fun Facts */}
        <Section title="Fun Facts & Trivia">
          <ul className="list-disc list-inside space-y-2 text-slate-400">
            {funFacts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </Section>

        {/* Gallery */}
        <Section title="Official Portrait">
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <img src="https://image2url.com/images/1763011837018-e3aa5606-243d-4b0e-ac64-f0c1cb3cd1c0.jpg" alt="Official Portrait of Sai Baba 1" className="rounded-md w-full sm:w-1/2 max-w-sm aspect-square object-cover shadow-lg bg-slate-700 p-2" />
                  <img src="https://image2url.com/images/1763013595349-82b65789-d4d5-4e47-8e02-c7950d9a0f85.jpg" alt="Official Portrait of Sai Baba 2" className="rounded-md w-full sm:w-1/2 max-w-sm aspect-square object-cover object-top shadow-lg bg-slate-700 p-2" />
              </div>
              <div className="text-center">
                <p className="mt-4 text-white font-semibold text-lg">"Ready for the Future... or at least the next piece of cake."</p>
                <p className="text-sm text-slate-400">Circa: Another Glorious Year</p>
              </div>
            </div>
        </Section>

        {/* Image Collection */}
        <Section title="Image Collection">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {imageCollection.map((image, index) => (
                    <div key={index} className="bg-slate-800/50 p-3 rounded-lg border border-slate-700 flex items-center justify-center aspect-square hover:border-cyan-400 transition-colors duration-300">
                        <img src={image.src} alt={image.alt} className="max-w-full max-h-full object-contain rounded-md" />
                    </div>
                ))}
            </div>
        </Section>

        {/* Footer */}
        <footer className="text-center mt-12 py-8 border-t border-slate-700">
            <p className="text-2xl font-bold text-cyan-400 animate-pulse">
                🎉 HAPPY BIRTHDAY, SAI BABA! 🎉
            </p>
            <p className="text-slate-500 mt-2">May your year be as awesome as you are.</p>
        </footer>

      </main>

      <div className="text-center py-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-cyan-500 text-slate-900 font-bold text-xl py-4 px-10 rounded-lg shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300"
        >
          💌 Send a Birthday Wish!
        </button>
      </div>

      <WishModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;
