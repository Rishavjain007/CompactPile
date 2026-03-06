import React, { useState } from 'react';
import { MapPin, Calendar, Building2 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { projects } from '../data/mockData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Highways', 'Metro', 'Railways', 'Airport'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white backdrop-blur-sm">Our Projects</Badge>
          <h1 className="text-5xl font-bold text-white mb-6">
            Prestigious Projects Delivered
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Successfully completed major infrastructure projects across India
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">States Covered</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Clients</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-blue-50 dark:bg-gray-800">
              <div className="text-4xl font-bold text-blue-600 mb-2">48</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
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
                className={
                  selectedCategory === category
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }
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
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600 text-white">{project.category}</Badge>
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
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Building2 className="h-4 w-4 mr-2 text-blue-600" />
                        <span className="font-medium">Client:</span>
                        <span className="ml-2">{project.client}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                        <span>{project.location}</span>
                      </div>
                      {project.tests && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.tests.map((test, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
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

      {/* Major Clients Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
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
                className="p-6 text-center hover:shadow-lg transition-shadow border-2 hover:border-blue-600"
              >
                <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900 dark:text-white">{client}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help with your foundation testing needs
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Projects;