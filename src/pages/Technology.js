import React from 'react';
import { Cpu, Settings, Zap, Shield } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Technology = () => {
  const equipment = [
    {
      title: 'Static Load Testing Equipment',
      capacity: 'Up to 3000 MT',
      description:
        'Advanced hydraulic jacking systems with reaction anchor/kentledge configurations for precise load application and measurement.',
      features: ['Hydraulic jacks', 'Reaction beams', 'Load cells', 'Digital data loggers']
    },
    {
      title: 'Dynamic Testing Equipment',
      capacity: 'High Strain Analysis',
      description:
        'Modern PDA systems for high strain dynamic pile load testing with real-time analysis and CAPWAP software integration.',
      features: [
        'Pile Driving Analyzer',
        'Accelerometers',
        'Strain transducers',
        'CAPWAP software'
      ]
    },
    {
      title: 'Pile Integrity Testing',
      capacity: 'PIT & CHSL',
      description:
        'State-of-the-art NDT equipment for comprehensive pile integrity assessment including sonic logging and pulse echo methods.',
      features: [
        'PIT devices',
        'Sonic logging probes',
        'Multi-channel receivers',
        'Analysis software'
      ]
    },
    {
      title: 'Lateral Load Testing',
      capacity: 'Up to 500 Tons',
      description: 'Specialized equipment for horizontal load resistance evaluation with precise displacement measurement.',
      features: [
        'Reaction frames',
        'Hydraulic actuators',
        'Displacement transducers',
        'Data acquisition'
      ]
    }
  ];

  const technologies = [
    {
      icon: Cpu,
      title: 'Digital Data Acquisition',
      description:
        'Real-time data capture and analysis with advanced monitoring systems for accurate results and comprehensive reporting'
    },
    {
      icon: Settings,
      title: 'Automated Testing',
      description:
        'Computer-controlled testing procedures ensuring consistency and precision in all measurements and calculations'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description:
        'Mobile equipment and quick setup capabilities for faster project execution and minimal site disruption'
    },
    {
      icon: Shield,
      title: 'Safety Systems',
      description:
        'Integrated safety features and protocols to ensure secure testing operations for personnel and equipment'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#BA0014] to-[#a00012]">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white backdrop-blur-sm">
            Technology & Equipment
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6">
            Cutting-Edge Testing Technology
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            State-of-the-art equipment and innovative methods for accurate foundation testing
          </p>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Equipment Portfolio
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Advanced machinery for comprehensive testing solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {equipment.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <Badge className="bg-[#BA0014] text-white">{item.capacity}</Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{item.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-3">
                      Key Features:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {item.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                        >
                          <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Technology Advantages
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Innovation driving accuracy and efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-8 hover:shadow-xl transition-all hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#BA0014] to-[#a00012] rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{tech.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testing Capabilities */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Advanced Testing Capabilities
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#BA0014]/10 dark:bg-[#BA0014]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#BA0014] dark:text-red-200 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                      Load Testing Excellence
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Static, cyclic, lateral, and pullout tests with capacities up to 3000MT
                      using advanced hydraulic systems and precise measurement techniques
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#BA0014]/10 dark:bg-[#BA0014]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#BA0014] dark:text-red-200 font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                      Non-Destructive Analysis
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Comprehensive NDT services including PIT, HSDPT, and CHSL for complete pile
                      integrity assessment without damaging the structure
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#BA0014]/10 dark:bg-[#BA0014]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#BA0014] dark:text-red-200 font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                      Real-Time Monitoring
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Digital data acquisition systems providing instant analysis, detailed
                      reporting, and cloud-based data management
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581094794329-8114a89d3c2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Testing Equipment"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-gradient-to-br from-[#BA0014]/10 to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Quality & Standards
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 border-2 border-[#BA0014]/20 dark:border-[#BA0014]/30">
                <Shield className="h-12 w-12 text-[#BA0014] mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  NABL Accreditation
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  All our testing services are NABL accredited, ensuring compliance with
                  international standards (ISO/IEC 17025) and reliable, defensible results.
                </p>
              </Card>
              <Card className="p-8 border-2 border-[#BA0014]/20 dark:border-[#BA0014]/30">
                <Settings className="h-12 w-12 text-[#BA0014] mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  ISO 9001:2015 Certified
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  ISO certified quality management system maintaining the highest standards in
                  operations, processes, and service delivery.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;