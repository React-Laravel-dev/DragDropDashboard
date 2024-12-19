import React from 'react';

const templates = [
  {
    name: 'Business Pro',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    category: 'Business',
  },
  {
    name: 'Creative Portfolio',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80',
    category: 'Portfolio',
  },
  {
    name: 'E-commerce Plus',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    category: 'E-commerce',
  },
];

export function Templates() {
  return (
    <div id="templates" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Start with Beautiful Templates
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Choose from our collection of professionally designed templates
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <div key={template.name} className="group relative">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={template.image}
                  alt={template.name}
                  className="object-cover object-center group-hover:opacity-75 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm text-white/80">{template.category}</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">{template.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}