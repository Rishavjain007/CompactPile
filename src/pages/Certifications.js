import {
  Award,
  ShieldCheck,
  BadgeCheck,
  Trophy,
  FileCheck,
  Target,
  ArrowRight
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { certifications } from '../data/mockData';

// ===== LOCAL HERO IMAGE =====
import HeroImg from '../assets/images/Picture6.jpg';

const iconMap = {
  award: Award,
  'shield-check': ShieldCheck,
  'badge-check': BadgeCheck,
  trophy: Trophy
};

const Certifications = () => {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <img
          src={HeroImg}
          alt="Certifications"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#BA0014]/55 to-black/70"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm">
            Certifications & Accreditations
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Quality Assurance & Standards
          </h1>

          <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            NABL Accredited and ISO Certified for dependable foundation testing,
            technical reliability, and engineering excellence.
          </p>
        </div>
      </section>

      {/* Main Certifications */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-[#BA0014]/10 text-[#BA0014] dark:bg-[#BA0014]/20 dark:text-red-200">
              Recognized Standards
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Trusted Quality Credentials
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our accreditations reflect our commitment to quality, consistency, and reliable field testing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {certifications.map((cert) => {
              const IconComponent = iconMap[cert.icon] || Award;
              return (
                <Card
                  key={cert.id}
                  className="text-center p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#BA0014]"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#BA0014] to-[#a00012] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {cert.description}
                  </p>

                  {cert.number && (
                    <Badge className="mt-4 bg-[#BA0014]/10 text-[#BA0014] dark:bg-[#BA0014]/20 dark:text-red-200">
                      {cert.number}
                    </Badge>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* NABL Accreditation Details */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-24 h-24 bg-[#BA0014] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <ShieldCheck className="h-12 w-12 text-white" />
              </div>

              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                NABL Accreditation
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                National Accreditation Board for Testing and Calibration Laboratories
              </p>
            </div>

            <Card className="p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm mb-8">
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white text-center">
                Accredited Testing Services
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-5 text-[#BA0014] dark:text-red-200">
                    Pile Load Tests
                  </h4>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <FileCheck className="h-5 w-5 text-[#BA0014] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Static Vertical Load Test (up to 3000 MT)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FileCheck className="h-5 w-5 text-[#BA0014] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Cyclic Load Test (up to 3000 MT)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FileCheck className="h-5 w-5 text-[#BA0014] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Lateral Load Test (up to 500 MT)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FileCheck className="h-5 w-5 text-[#BA0014] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Pullout Test (up to 500 MT)
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-5 text-[#BA0014] dark:text-red-200">
                    Non-Destructive Testing
                  </h4>

                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <FileCheck className="h-5 w-5 text-[#BA0014] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        High Strain Dynamic Test (HSDPT)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FileCheck className="h-5 w-5 text-[#BA0014] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Low Strain Integrity Test (PIT)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FileCheck className="h-5 w-5 text-[#BA0014] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Cross-Hole Sonic Logging (CHSL)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 rounded-3xl bg-gradient-to-br from-[#BA0014]/10 to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-[#BA0014]/20 dark:border-[#BA0014]/30 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                What NABL Accreditation Means
              </h3>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-[#BA0014] mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    Internationally recognized quality standards aligned with ISO/IEC 17025 principles
                  </span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-[#BA0014] mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    Verified technical competence and quality management systems
                  </span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-[#BA0014] mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    Periodic surveillance and reassessment to maintain standards
                  </span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-[#BA0014] mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    Reliable, technically sound, and professionally accepted test reporting
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* ISO + Recognition */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <BadgeCheck className="h-16 w-16 text-[#BA0014] mb-6" />

                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  ISO 9001:2015 Certified
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                  Our Quality Management System is ISO 9001:2015 certified, ensuring
                  consistent service delivery, process control, and a strong quality-first approach.
                </p>

                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-2 mt-2"></div>
                    <span>Systematic quality management and process consistency</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-2 mt-2"></div>
                    <span>Continuous improvement and regular internal review practices</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-2 mt-2"></div>
                    <span>Customer-focused execution and documented service standards</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Trophy className="h-16 w-16 text-[#BA0014] mb-6" />

                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Industry Recognition
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                  48+ years of engineering support and testing excellence has earned
                  long-term trust from leading infrastructure companies across India.
                </p>

                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-2 mt-2"></div>
                    <span>Preferred support partner for major infrastructure projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-2 mt-2"></div>
                    <span>Trusted by both private and public sector clients</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-2 mt-2"></div>
                    <span>Long-term relationships with contractors, consultants, and developers</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 bg-gradient-to-br from-[#BA0014] via-[#a00012] to-[#7f000d]">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-20 w-20 text-white mx-auto mb-6" />

          <h2 className="text-4xl font-bold text-white mb-6">
            Our Quality Commitment
          </h2>

          <p className="text-xl text-red-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            We remain committed to maintaining the highest standards in foundation testing
            through continuous improvement, advanced technology, and disciplined field execution.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {[
              { value: '100%', label: 'Testing Discipline' },
              { value: '100%', label: 'Standards Focus' },
              { value: '100%', label: 'Client Commitment' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
                <div className="text-red-100">{item.label}</div>
              </div>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="bg-white text-[#BA0014] hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg"
          >
            <Link to="/contact">
              Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Certifications;