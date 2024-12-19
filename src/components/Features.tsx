import React from 'react';
import { MousePointerClick, Layers, Zap, Palette, Globe, Lock } from 'lucide-react';

const features = [
  {
    name: 'Drag & Drop Interface',
    description: 'Build your website with simple drag and drop actions. No technical skills required.',
    icon: MousePointerClick,
  },
  {
    name: 'Pre-built Components',
    description: 'Choose from hundreds of pre-designed components to speed up your workflow.',
    icon: Layers,
  },
  {
    name: 'Lightning Fast',
    description: 'Optimized performance ensures your website loads quickly for all visitors.',
    icon: Zap,
  },
  {
    name: 'Custom Styling',
    description: 'Customize colors, fonts, and layouts to match your brand perfectly.',
    icon: Palette,
  },
  {
    name: 'SEO Optimized',
    description: 'Built-in SEO tools help your website rank better in search results.',
    icon: Globe,
  },
  {
    name: 'Secure Hosting',
    description: 'Your website is protected with enterprise-grade security and SSL.',
    icon: Lock,
  },
];

export function Features() {
  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need to Build Amazing Websites
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Powerful features that make website creation a breeze
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="absolute top-0 -translate-y-1/2 bg-indigo-600 rounded-xl p-3">
                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}