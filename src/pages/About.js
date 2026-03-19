import {
  Award,
  Target,
  Eye,
  CheckCircle2,
  Building2,
  ShieldCheck,
  BriefcaseBusiness
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

// ===== LOCAL IMAGES =====
import AboutHeroImg from '../assets/images/Picture6.jpg';
import AboutImg1 from '../assets/images/Picture1.jpg';
import AboutImg2 from '../assets/images/Picture24.jpg';
import AboutImg3 from '../assets/images/Picture27.jpg';

const About = () => {
  const visionPoints = [
    'To be the most trusted and innovative partner in foundation testing across India.',
    'To set industry benchmarks through technical accuracy, innovation, and quality-driven execution.',
    'To support the infrastructure sector with dependable geotechnical and foundation testing solutions.',
    'To lead the field of pile testing and ground engineering through practical expertise and modern technology.',
    'To remain the preferred engineering partner known for precision, professionalism, and integrity.'
  ];

  const milestones = [
    {
      year: '1976',
      title: 'Company Founded',
      description: 'Started our journey in civil construction and foundation engineering with a commitment to quality and reliability.'
    },
    {
      year: '1990',
      title: 'Piling Division Expansion',
      description: 'Expanded into specialized piling and deep foundation services to support growing infrastructure demands.'
    },
    {
      year: '2005',
      title: 'NABL Accreditation',
      description: 'Achieved recognized testing accreditation, strengthening technical reliability and service credibility.'
    },
    {
      year: '2015',
      title: 'Pan-India Project Reach',
      description: 'Expanded operations across multiple states and supported major national infrastructure developments.'
    },
    {
      year: '2024',
      title: '500+ Projects Milestone',
      description: 'Successfully delivered and supported hundreds of projects across highways, metro, airport, rail, and industrial sectors.'
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <img
          src={AboutHeroImg}
          alt="About CompactPile"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#BA0014]/60 to-black/70"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm">
            About Us
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Our Story of Engineering Excellence
          </h1>

          <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            48+ years of trusted experience in foundation testing, pile engineering,
            geotechnical support, and infrastructure project execution.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#BA0014]/10 text-[#BA0014] dark:bg-[#BA0014]/20 dark:text-red-200">
                Our Journey
              </Badge>

              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Trusted Since 1976
              </h2>

              <div className="space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                <p>
                  Established in 1976, Compact Pile Construction Pvt. Ltd. has grown into a
                  trusted engineering company offering specialized services in pile foundation
                  testing, geotechnical investigation, and deep foundation solutions.
                </p>

                <p>
                  Over the decades, we have supported projects across National Highways, Railways,
                  Metro Rails, Bridges, Marine Works, Airports, and building infrastructure.
                  Our long-standing reputation is built on dependable execution, technical
                  understanding, and practical field expertise.
                </p>

                <p>
                  With a strong commitment to quality, innovation, and transparent work ethics,
                  we continue to support leading consultants, contractors, developers, and
                  infrastructure companies across India.
                </p>
              </div>

              <div className="mt-8">
                <Button asChild className="bg-[#BA0014] hover:bg-[#9E0011] rounded-xl">
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={AboutImg1}
                alt="CompactPile Work"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#BA0014] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">48+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision + Mission */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <Card className="p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#BA0014]/10 flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-[#BA0014]" />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Vision
              </h2>

              <div className="space-y-4">
                {visionPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-[#BA0014] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#BA0014]/10 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-[#BA0014]" />
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Mission
              </h2>

              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  To deliver dependable foundation testing and geotechnical support services
                  that contribute to safe, strong, and efficient infrastructure development.
                </p>
                <p>
                  We aim to combine engineering expertise, field-tested execution, quality
                  systems, and modern technology to provide reliable outcomes for every project.
                </p>
                <p>
                  Our mission is to remain a technically trusted partner for infrastructure
                  stakeholders by ensuring precision, professionalism, and timely support.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Highlight */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[AboutImg1, AboutImg2, AboutImg3].map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl shadow-xl group"
              >
                <img
                  src={img}
                  alt={`CompactPile Site ${index + 1}`}
                  className="w-full h-[350px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-[#BA0014]/10 text-[#BA0014] dark:bg-[#BA0014]/20 dark:text-red-200">
              Milestones
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Growth Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Key achievements that shaped our engineering legacy
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#BA0014] text-white flex items-center justify-center font-bold flex-shrink-0 shadow-lg">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-1 h-full bg-[#BA0014]/40 mt-2 rounded-full"></div>
                    )}
                  </div>

                  <Card className="flex-1 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {milestone.description}
                    </p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-[#BA0014]/10 text-[#BA0014] dark:bg-[#BA0014]/20 dark:text-red-200">
              Our Strengths
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              What Makes Us Strong
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: Award,
                title: 'Quality Excellence',
                desc: 'A strong commitment to dependable testing quality, technical discipline, and service consistency.'
              },
              {
                icon: ShieldCheck,
                title: 'Trusted Engineering Support',
                desc: 'Reliable execution for critical infrastructure and foundation engineering requirements.'
              },
              {
                icon: Building2,
                title: 'Infrastructure Experience',
                desc: 'Practical experience across highways, railways, metros, airports, and industrial works.'
              },
              {
                icon: BriefcaseBusiness,
                title: 'Professional Work Ethics',
                desc: 'Transparent communication, responsible execution, and long-term client trust.'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-8 text-center rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-[#BA0014] rounded-full flex items-center justify-center mx-auto mb-5 shadow-md">
                    <Icon className="h-8 w-8 text-white" />
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

      {/* Closing CTA */}
      <section className="py-20 bg-gradient-to-r from-[#BA0014] via-[#a00012] to-[#7f000d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Built on Trust. Driven by Engineering.
          </h2>

          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            For decades, Compact Pile Construction Pvt. Ltd. has supported critical
            infrastructure with dependable foundation testing and field expertise.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-white text-[#BA0014] hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg"
          >
            <Link to="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;