import { useState } from 'react';
import { MapPin, Calendar, Building2, ArrowRight, BriefcaseBusiness, BadgeCheck, Gauge } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { projects } from '../data/mockData';

// ===== LOCAL HERO IMAGE =====
import HeroImg from '../assets/images/Picture18.jpg';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Highways', 'Metro', 'Railways', 'Airport'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <img
          src={HeroImg}
          alt="CompactPile Projects"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#BA0014]/55 to-black/70"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm">
            Our Projects
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Prestigious Projects Delivered
          </h1>

          <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Supporting major infrastructure developments across India with dependable
            foundation testing, geotechnical services, and field expertise.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-14 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '500+', label: 'Projects Completed' },
              { value: '20+', label: 'States Covered' },
              { value: '100+', label: 'Trusted Clients' },
              { value: '48+', label: 'Years Experience' }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#BA0014]/10 to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl font-bold text-[#BA0014] mb-2">{item.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-950 sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#BA0014] hover:bg-[#9E0011] text-white shadow-md'
                    : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-[#BA0014]/5 hover:border-[#BA0014] hover:text-[#BA0014] dark:hover:text-[#ffb3bb]'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 dark:text-gray-400">
                No projects found in this category
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="group overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#BA0014] text-white">{project.category}</Badge>
                    </div>

                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="bg-white/90 text-gray-700 border-0">
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        {project.year}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-[#BA0014] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-start text-gray-600 dark:text-gray-400">
                        <Building2 className="h-4 w-4 mr-2 text-[#BA0014] mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium">Client:</span>
                          <span className="ml-2">{project.client}</span>
                        </div>
                      </div>

                      <div className="flex items-start text-gray-600 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-2 text-[#BA0014] mt-0.5 shrink-0" />
                        <span>{project.location}</span>
                      </div>

                      {project.tests && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tests.map((test, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs border-[#BA0014]/20 text-[#BA0014] dark:text-red-200"
                            >
                              {test}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Strengths */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-[#BA0014]/10 text-[#BA0014] dark:bg-[#BA0014]/20 dark:text-red-200">
              Project Excellence
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Clients Trust Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: BriefcaseBusiness,
                title: 'Diverse Infrastructure Experience',
                desc: 'Experience across airports, highways, metros, railways, industrial and foundation works.'
              },
              {
                icon: BadgeCheck,
                title: 'Reliable Execution',
                desc: 'Strong field coordination, testing discipline, and dependable support for complex projects.'
              },
              {
                icon: Gauge,
                title: 'Technical Capability',
                desc: 'Advanced testing systems and practical expertise for critical engineering requirements.'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-8 text-center rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-full bg-[#BA0014]/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="h-8 w-8 text-[#BA0014]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Major Clients Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#BA0014]/10 text-[#BA0014] dark:bg-[#BA0014]/20 dark:text-red-200">
              Our Clients
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Esteemed Clients
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Trusted by leading construction and infrastructure companies
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'Tata Projects Ltd.',
              'G R Infraprojects Ltd.',
              'PNC Infratech Ltd.',
              'Sam India Builtwell Pvt. Ltd.',
              'H.G. Infraprojects Ltd.',
              'KEC International',
              'ARSS Infrastructure',
              'IOCL'
            ].map((client, index) => (
              <Card
                key={index}
                className="p-6 text-center rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#BA0014]"
              >
                <Building2 className="h-12 w-12 text-[#BA0014] mx-auto mb-3" />
                <p className="font-semibold text-gray-900 dark:text-white">{client}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#BA0014] via-[#a00012] to-[#7f000d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>

          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let’s discuss how CompactPile can support your foundation testing and
            geotechnical engineering requirements.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-white text-[#BA0014] hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg"
          >
            <Link to="/contact">
              Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;