
import React, { useState } from 'react';
import { generateCreativeConcept } from '../services/geminiService';
import { AIConceptResponse } from '../types';

interface AIConceptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIConceptModal: React.FC<AIConceptModalProps> = ({ isOpen, onClose }) => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIConceptResponse | null>(null);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const data = await generateCreativeConcept(prompt);
      setResult(data);
    } catch (error) {
      console.error(error);
      alert('Failed to generate concept. Please check your API key.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-primary/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        <header className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">AI Concept Lab</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </header>

        <div className="p-6 overflow-y-auto space-y-6">
          {!result ? (
            <div className="space-y-4">
              <p className="text-sm text-gray-500">Tell Mo's AI assistant about your brand or event. It will craft a cinematic vision for your video.</p>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., A minimalist jewelry brand launching a summer collection with a focus on sunlight and texture."
                className="w-full h-32 rounded-xl border-gray-200 focus:border-primary focus:ring-0 p-4 text-sm resize-none"
              />
              <button
                onClick={handleGenerate}
                disabled={loading}
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all ${
                  loading ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-gray-800'
                }`}
              >
                {loading ? 'Consulting Visionaries...' : 'Generate Vision'}
              </button>
            </div>
          ) : (
            <div className="animate-fade-in space-y-8 pb-4">
              <section>
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">The Vibe</h4>
                <p className="text-lg italic font-serif text-primary leading-relaxed">{result.vibe}</p>
              </section>

              <section>
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Scene Flow</h4>
                <div className="space-y-4">
                  {result.scenes.map((scene, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 bg-gray-50 rounded-lg">
                      <span className="text-xs font-bold text-gray-300 font-sans mt-0.5">{i+1}</span>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-primary"><span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1">Visual</span> {scene.visual}</p>
                        <p className="text-sm text-gray-500"><span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1 mt-2">Audio</span> {scene.audio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Creative Tips</h4>
                <ul className="space-y-2">
                  {result.tips.map((tip, i) => (
                    <li key={i} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-primary">•</span> {tip}
                    </li>
                  ))}
                </ul>
              </section>

              <button
                onClick={() => setResult(null)}
                className="w-full py-3 border border-gray-200 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors"
              >
                New Concept
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIConceptModal;
