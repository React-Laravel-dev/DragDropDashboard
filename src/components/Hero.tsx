import React from 'react';
import { MousePointerClick } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Build Your Dream Website
            <span className="block text-indigo-600">Without Writing Code</span>
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
            Create stunning websites with our intuitive drag-and-drop builder. No coding required.
            Start with beautiful templates and customize everything to match your vision.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <button className="rounded-xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Start Building Free
            </button>
            <button className="rounded-xl bg-gray-50 px-8 py-4 text-lg font-semibold text-gray-900 shadow-sm hover:bg-gray-100">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}