import React from 'react';
import { Award, ShieldCheck, BadgeCheck, Trophy, FileCheck, Target } from 'lucide-react';
import { Card} from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { certifications } from '../data/mockData';

const iconMap = {
  award: Award,
  'shield-check': ShieldCheck,
  'badge-check': BadgeCheck,
  trophy: Trophy
};

const Certifications = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#BA0014] to-[#a00012]">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white backdrop-blur-sm">
            Certifications & Accreditations
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-6">
            Quality Assurance & Standards
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            NABL Accredited and ISO Certified for Excellence in Foundation Testing
          </p>
        </div>
      </section>

      {/* Main Certifications */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {certifications.map((cert) => {
              const IconComponent = iconMap[cert.icon] || Award;
              return (
                <Card
                  key={cert.id}
                  className="text-center p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[#BA0014]"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#BA0014] to-[#a00012] rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{cert.description}</p>
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-24 h-24 bg-[#BA0014] rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                NABL Accreditation
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                National Accreditation Board for Testing and Calibration Laboratories
              </p>
            </div>

            <Card className="p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Accredited Testing Services
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-[#BA0014] dark:text-red-200">
                    Pile Load Tests
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FileCheck className="h-5 w-5 text-[#BA0014] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        Static Vertical Load Test (up to 3000MT)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <FileCheck className="h-5 w-5 text-[#BA0014] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Cyclic Load Test (up to 3000MT)</span>
                    </li>
                    <li className="flex items-start">
                      <FileCheck className="h-5 w-5 text-[#BA0014] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Lateral Load Test (up to 500MT)</span>
                    </li>
                    <li className="flex items-start">
                      <FileCheck className="h-5 w-5 text-[#BA0014] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">Pullout Test (up to 500MT)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-[#BA0014] dark:text-red-200">
                    Non-Destructive Testing
                  </h4>
                  <ul className="space-y-3">
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

            <Card className="p-8 bg-gradient-to-br from-[#BA0014]/10 to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-[#BA0014]/20 dark:border-[#BA0014]/30">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                What NABL Accreditation Means
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-[#BA0014] mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    Internationally recognized quality standards compliant with ISO/IEC 17025
                  </span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-[#BA0014] mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    Rigorous assessment of technical competence and quality management systems
                  </span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-[#BA0014] mr-3 mt-0.5 flex-shrink-0" />
                  <span>Regular surveillance and periodic reassessment to maintain standards</span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-[#BA0014] mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    Legally defensible and globally accepted test reports and certificates
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* ISO Certification */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 hover:shadow-xl transition-shadow">
                <BadgeCheck className="h-16 w-16 text-[#BA0014] mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  ISO 9001:2015 Certified
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Our Quality Management System is ISO 9001:2015 certified, ensuring consistent delivery of
                  high-quality services that meet customer and regulatory requirements.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-2 mt-2"></div>
                    <span>Systematic approach to quality management and process control</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-2 mt-2"></div>
                    <span>Continuous improvement processes and regular audits</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-2 mt-2"></div>
                    <span>Customer satisfaction focus and feedback integration</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 hover:shadow-xl transition-shadow">
                <Trophy className="h-16 w-16 text-[#BA0014] mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Industry Recognition
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  48 years of excellence in foundation testing has earned us recognition from
                  leading construction companies and infrastructure developers across India.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-2 mt-2"></div>
                    <span>Preferred vendor for major infrastructure projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-2 mt-2"></div>
                    <span>Trusted by government and private sector clients</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-2 mt-2"></div>
                    <span>Long-term partnerships with top consultants and developers</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-20 bg-gradient-to-br from-[#BA0014] to-[#a00012]">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-20 w-20 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">Our Quality Commitment</h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
            We are committed to maintaining the highest standards in foundation testing through
            continuous improvement, advanced technology, and adherence to international quality
            standards.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-red-100">Accurate Testing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-red-100">Compliance</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-red-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;