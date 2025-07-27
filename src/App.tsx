import React, { useState, useEffect } from 'react';
import { Book, Eye, Download, Palette, Heart, Minimize2, Sparkles, CheckCircle, ArrowRight, Star, Zap, Users, Award } from 'lucide-react';

const templates = [
  {
    id: 'bold',
    name: 'Bold',
    description: 'High contrast, strong typography, dramatic layouts',
    icon: <Palette className="w-6 h-6" />,
    color: 'from-red-500 to-red-600',
    borderColor: 'border-red-200',
    hoverColor: 'hover:border-red-300',
    preview: '/templates/bold/recipe-book-bold.html',
    features: ['Strong geometric layouts', 'High contrast colors', 'Oswald + Roboto fonts', 'Perfect for fitness/protein content'],
    bestFor: 'Fitness & Protein Guides',
    popularity: 95
  },
  {
    id: 'soft',
    name: 'Soft',
    description: 'Rounded corners, pastels, gentle flowing designs',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-rose-400 to-pink-500',
    borderColor: 'border-rose-200',
    hoverColor: 'hover:border-rose-300',
    preview: '/templates/soft/recipe-book-soft.html',
    features: ['Warm pastel colors', 'Rounded corners & shadows', 'Poppins + Dancing Script', 'Ideal for comfort food & family recipes'],
    bestFor: 'Family & Comfort Food',
    popularity: 88
  },
  {
    id: 'simple',
    name: 'Simple',
    description: 'Minimalist, clean lines, maximum white space',
    icon: <Minimize2 className="w-6 h-6" />,
    color: 'from-slate-500 to-gray-600',
    borderColor: 'border-gray-200',
    hoverColor: 'hover:border-gray-300',
    preview: '/templates/simple/recipe-book-simple.html',
    features: ['Minimalist aesthetic', 'Clean typography', 'Inter font family', 'Perfect for professional chefs'],
    bestFor: 'Professional & Modern',
    popularity: 92
  }
];

const features = [
  {
    icon: <Book className="w-8 h-8 text-indigo-600" />,
    title: '12-Page Structure',
    description: 'Cover, intro, 10 recipe pages, and outro with proper page breaks',
    color: 'bg-indigo-50 border-indigo-200'
  },
  {
    icon: <Zap className="w-8 h-8 text-emerald-600" />,
    title: 'PDF Optimized',
    description: 'Print-safe CSS designed specifically for Puppeteer conversion',
    color: 'bg-emerald-50 border-emerald-200'
  },
  {
    icon: <Palette className="w-8 h-8 text-purple-600" />,
    title: 'Fully Customizable',
    description: 'Comprehensive placeholder tokens for easy personalization',
    color: 'bg-purple-50 border-purple-200'
  },
  {
    icon: <Award className="w-8 h-8 text-amber-600" />,
    title: 'Production Ready',
    description: 'Professional quality templates ready for commercial use',
    color: 'bg-amber-50 border-amber-200'
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: 'User Tested',
    description: 'Validated by professional chefs and content creators',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    icon: <Star className="w-8 h-8 text-rose-600" />,
    title: 'Premium Design',
    description: 'Apple-level design aesthetics with meticulous attention to detail',
    color: 'bg-rose-50 border-rose-200'
  }
];

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openPreview = (template: typeof templates[0]) => {
    setSelectedTemplate(template);
    setIsPreviewOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-rose-100 to-pink-100 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="relative bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className={`flex items-center justify-between transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-75"></div>
                <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-2xl">
                  <Book className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Recipe Book Templates
                </h1>
                <p className="text-gray-600 mt-1">Professional, print-ready HTML templates for custom recipe books</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-emerald-50 to-blue-50 px-4 py-2 rounded-full border border-emerald-200">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">Premium Quality</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-16">
        <div className={`text-center transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-3 rounded-full border border-indigo-200 mb-8">
            <Star className="w-5 h-5 text-indigo-600" />
            <span className="text-indigo-700 font-medium">Three Distinct Styles</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight">
            Beautiful Recipe Books<br />
            <span className="text-4xl md:text-5xl">Made Simple</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each template is meticulously crafted for PDF conversion via Puppeteer, featuring stunning layouts, 
            print-safe CSS, and comprehensive customization options for professional results.
          </p>
        </div>
      </section>

      {/* Template Showcase */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div 
              key={template.id} 
              className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border-2 ${template.borderColor} ${template.hoverColor} overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
              onMouseEnter={() => setHoveredTemplate(template.id)}
              onMouseLeave={() => setHoveredTemplate(null)}
            >
              {/* Popularity Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-amber-500 fill-current" />
                    <span className="text-xs font-medium text-gray-700">{template.popularity}%</span>
                  </div>
                </div>
              </div>

              {/* Template Preview */}
              <div className={`h-64 bg-gradient-to-br ${template.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/20"></div>
                <div className={`absolute inset-0 transition-transform duration-700 ${hoveredTemplate === template.id ? 'scale-110' : 'scale-100'}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center transform transition-all duration-500 group-hover:scale-110">
                      <div className="mb-4 transform transition-transform duration-500 group-hover:rotate-12">
                        {template.icon}
                      </div>
                      <h3 className="text-3xl font-bold mb-2 drop-shadow-lg">{template.name}</h3>
                      <p className="text-sm opacity-90 font-medium">{template.bestFor}</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className={`absolute top-6 left-6 w-3 h-3 bg-white/30 rounded-full transition-all duration-700 ${hoveredTemplate === template.id ? 'scale-150 opacity-100' : 'scale-100 opacity-60'}`}></div>
                <div className={`absolute bottom-8 right-8 w-2 h-2 bg-white/40 rounded-full transition-all duration-700 delay-100 ${hoveredTemplate === template.id ? 'scale-200 opacity-100' : 'scale-100 opacity-50'}`}></div>
              </div>

              {/* Template Info */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{template.name} Style</h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{template.description}</p>
                
                <div className="space-y-3 mb-8">
                  {template.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => openPreview(template)}
                    className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="font-medium">Preview</span>
                  </button>
                  <a
                    href={template.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">View HTML</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className={`text-center mb-16 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Templates?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional-grade features designed for perfection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 ${feature.color} hover:shadow-xl transition-all duration-500 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${1200 + index * 150}ms` }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className={`bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 rounded-3xl p-12 text-white relative overflow-hidden transition-all duration-1000 delay-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Technical Excellence</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Built with modern web standards and optimized for professional use
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-yellow-400" />
                  Print Optimization
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center">
                    <ArrowRight className="w-4 h-4 mr-3 text-emerald-400" />
                    Proper page breaks and margins
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-4 h-4 mr-3 text-emerald-400" />
                    No fixed/sticky positioning
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-4 h-4 mr-3 text-emerald-400" />
                    Print-safe color schemes
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-4 h-4 mr-3 text-emerald-400" />
                    Optimized for A4 format
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Palette className="w-6 h-6 mr-3 text-purple-400" />
                  Customization
                </h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center">
                    <ArrowRight className="w-4 h-4 mr-3 text-emerald-400" />
                    Placeholder tokens for all content
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-4 h-4 mr-3 text-emerald-400" />
                    Google Fonts integration
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-4 h-4 mr-3 text-emerald-400" />
                    Tailwind CSS classes
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="w-4 h-4 mr-3 text-emerald-400" />
                    Comprehensive documentation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className={`transition-all duration-1000 delay-1800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Create Beautiful Recipe Books?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start with any of our professionally designed templates and customize them to match your brand perfectly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => openPreview(templates[0])}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium text-lg"
            >
              <Eye className="w-5 h-5" />
              <span>Explore Templates</span>
            </button>
            <a
              href="/templates/documentation.md"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2 font-medium text-lg"
            >
              <Book className="w-5 h-5" />
              <span>View Documentation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between p-8 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-2xl bg-gradient-to-r ${selectedTemplate.color} text-white`}>
                  {selectedTemplate.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedTemplate.name} Template</h3>
                  <p className="text-gray-600">{selectedTemplate.description}</p>
                </div>
              </div>
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-3xl font-light hover:bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200"
              >
                ×
              </button>
            </div>
            <div className="p-8">
              <iframe
                src={selectedTemplate.preview}
                className="w-full h-[60vh] border-2 border-gray-200 rounded-2xl shadow-inner"
                title={`${selectedTemplate.name} Template Preview`}
              />
              <div className="mt-8 flex justify-center space-x-4">
                <a
                  href={selectedTemplate.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Eye className="w-5 h-5" />
                  <span className="font-medium">Open Full View</span>
                </a>
                <a
                  href={selectedTemplate.preview}
                  download
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span className="font-medium">Download HTML</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;