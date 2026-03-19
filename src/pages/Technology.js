import { Cpu, Settings, Zap, Shield, BadgeCheck, FileCheck, Wrench, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

// ===== LOCAL IMAGES =====
import DynamicImg from "../assets/images/Picture1.jpg";
import StaticImg from "../assets/images/Picture6.jpg";
import PITImg from "../assets/images/Picture5.jpg";
import LateralImg from "../assets/images/Picture13.jpg";
import PLTImg from "../assets/images/Picture27.jpg";
import StoneColumnImg from "../assets/images/Picture24.jpg";

const Technology = () => {
  const equipment = [
    {
      title: 'Static Load Testing Equipment',
      image: StaticImg,
      capacity: 'Up to 3000 MT',
      description:
        'Advanced hydraulic jacking systems with reaction anchor/kentledge configurations for precise load application and measurement.',
      features: ['Hydraulic jacks', 'Reaction beams', 'Load cells', 'Dial gauges']
    },
    {
      title: 'Dynamic Testing Equipment (PDA)',
      image: DynamicImg,
      capacity: 'High Strain Analysis',
      description:
        'Modern PDA systems for high strain dynamic pile load testing with real-time analysis and CAPWAP integration.',
      features: [
        'Pile Driving Analyzer',
        'Accelerometers',
        'Strain sensors',
        'CAPWAP analysis'
      ]
    },
    {
      title: 'Pile Integrity Testing (PIT & CHSL)',
      image: PITImg,
      capacity: 'NDT Systems',
      description:
        'Non-destructive testing equipment for pile integrity assessment including sonic logging and pulse echo methods.',
      features: [
        'PIT devices',
        'Sonic probes',
        'Signal receiver',
        'Analysis software'
      ]
    },
    {
      title: 'Lateral Load Testing Equipment',
      image: LateralImg,
      capacity: 'Up to 500 Tons',
      description:
        'Specialized setup for evaluating horizontal resistance and displacement behavior of piles.',
      features: [
        'Reaction frames',
        'Hydraulic jacks',
        'Displacement gauges',
        'Load measurement'
      ]
    },
    {
      title: 'Plate Load Test Equipment',
      image: PLTImg,
      capacity: 'IS 1888',
      description:
        'Hydraulic loading system with steel plate and dial gauges for soil bearing capacity and settlement analysis.',
      features: [
        'Steel plate',
        'Hydraulic jack',
        'Dial gauges',
        'Load frame'
      ]
    },
    {
      title: 'Stone Column Load Test Setup',
      image: StoneColumnImg,
      capacity: 'Ground Improvement',
      description:
        'Specialized field setup to evaluate load carrying capacity and settlement of stone columns.',
      features: [
        'Loading platform',
        'Hydraulic system',
        'Settlement gauges',
        'Field instrumentation'
      ]
    }
  ];

  const technologies = [
    {
      icon: Cpu,
      title: 'Digital Data Acquisition',
      description:
        'Real-time data capture and monitoring systems for accurate results and detailed reporting.'
    },
    {
      icon: Settings,
      title: 'Automated Testing',
      description:
        'Precision-controlled testing ensuring consistency and reliable measurements.'
    },
    {
      icon: Zap,
      title: 'Fast Site Deployment',
      description:
        'Quick mobilization and setup for efficient project execution.'
    },
    {
      icon: Shield,
      title: 'Safety & Compliance',
      description:
        'Strict safety protocols and compliance with NABL and ISO standards.'
    }
  ];

  const standards = [
    {
      icon: BadgeCheck,
      title: 'NABL Accredited Testing',
      description:
        'Our testing services are aligned with recognized laboratory quality systems and technical reliability standards.'
    },
    {
      icon: FileCheck,
      title: 'ISO 9001:2015 Quality System',
      description:
        'Structured quality management practices to ensure consistency, traceability, and dependable service delivery.'
    },
    {
      icon: Wrench,
      title: 'Field-Tested Equipment',
      description:
        'All equipment and testing setups are used in practical site conditions with operational reliability in mind.'
    },
    {
      icon: BarChart3,
      title: 'Accurate Reporting',
      description:
        'Detailed test observations, measurements, and reporting support for engineering and project decision-making.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-r from-[#BA0014] via-[#a00012] to-[#7f000d] text-white text-center overflow-hidden">
        <img
          src={DynamicImg}
          alt="Testing technology"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border border-white/20">
            Technology & Equipment
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Advanced Testing Technology
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-red-100 leading-relaxed">
            Real field equipment and modern testing systems ensuring accuracy, safety,
            reliability, and dependable engineering support.
          </p>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Equipment Portfolio
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Practical field-tested systems used across foundation testing, load testing,
            and geotechnical support projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-gray-900"
            >
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3 gap-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <Badge className="bg-[#BA0014] text-white whitespace-nowrap">
                    {item.capacity}
                  </Badge>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                  {item.description}
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {item.features.map((f, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-2 shrink-0"></div>
                      {f}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technology Advantages */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Technology Advantages
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Practical innovation that improves testing accuracy and field efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card
                  key={index}
                  className="text-center p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-950"
                >
                  <div className="w-16 h-16 rounded-full bg-[#BA0014]/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="h-8 w-8 text-[#BA0014]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {tech.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testing Capabilities */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#BA0014]/10 text-[#BA0014] border border-[#BA0014]/20">
                Testing Capabilities
              </Badge>

              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Built for Practical Field Performance
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#BA0014]/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-[#BA0014] font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                      Load Testing Excellence
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Static, cyclic, lateral, plate load, and stone column load testing
                      supported by dependable field equipment and measurement systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#BA0014]/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-[#BA0014] font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                      Non-Destructive Evaluation
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      PIT, CHSL, and dynamic testing solutions for structural continuity,
                      integrity assessment, and engineering interpretation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#BA0014]/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-[#BA0014] font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                      Reliable Reporting & Monitoring
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Accurate field observations, data capture, and technical reporting
                      for project teams, consultants, and engineers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src={StoneColumnImg}
                alt="Testing capability"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Standards */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Quality & Standards
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Built around quality systems, reliable field execution, and technically sound reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-full bg-[#BA0014]/10 flex items-center justify-center mb-5">
                    <Icon className="h-7 w-7 text-[#BA0014]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#BA0014] via-[#a00012] to-[#7f000d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Reliable Testing Equipment & Technical Support?
          </h2>

          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with our team for dependable field testing solutions, advanced equipment support,
            and project-specific technical guidance.
          </p>

          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-[#BA0014] hover:bg-gray-100 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg rounded-xl shadow-lg"
            >
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Technology;