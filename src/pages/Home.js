import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  Star,
  CheckCircle2,
  Building2,
  ShieldCheck,
  BadgeCheck,
  Gauge
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { services, projects, testimonials, stats } from '../data/mockData';

// ===== LOCAL IMAGES =====
import AboutImg from '../assets/images/Picture6.jpg';
import WorkImg1 from '../assets/images/Picture24.jpg';
import WorkImg2 from '../assets/images/Picture27.jpg';
import WorkImg3 from '../assets/images/Picture20.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxjaXZpbCUyMGVuZ2luZWVyaW5nfGVufDB8fHx8MTc3Mzg5MzgxOXww&ixlib=rb-4.1.0&q=85)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#BA0014]/20 to-gray-900/80"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <Badge className="mb-6 bg-[#BA0014] hover:bg-[#9E0011] text-white px-6 py-2 text-sm">
            NABL Accredited • ISO Certified • Since 1976
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building Strong
            <br />
            <span className="text-red-100">Foundations</span> for the Future
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            48 Years of Excellence in Pile Load Testing, NDT & Deep Foundation Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#BA0014] hover:bg-[#9E0011] text-white px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 px-8 py-6 text-lg"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#BA0014]/10 to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl font-bold text-[#BA0014] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-[#BA0014]/10 text-[#BA0014] dark:bg-[#BA0014]/20 dark:text-red-200">
                About Us
              </Badge>

              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Trusted Foundation Testing Experts Since 1976
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Compact Pile Construction Pvt. Ltd. has been a trusted name in pile foundation
                testing and geotechnical engineering for decades. With practical field expertise,
                advanced testing systems, and a highly experienced team, we support major
                infrastructure projects across India.
              </p>

              <div className="space-y-5 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-[#BA0014] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      NABL Accredited Testing
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Reliable pile load testing and non-destructive testing solutions
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-[#BA0014] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Real Field Expertise
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Practical execution across highways, metro, airport, and rail projects
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-[#BA0014] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Advanced Equipment
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Modern testing systems for accuracy, reporting, and dependable results
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-[#BA0014] hover:bg-[#9E0011] rounded-xl">
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <img
                src={AboutImg}
                alt="CompactPile Site Work"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#BA0014] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">48+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-[#BA0014]/10 text-[#BA0014] dark:bg-[#BA0014]/20 dark:text-red-200">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Engineered for Reliability
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A strong blend of field execution, technical expertise, quality systems, and project support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'NABL & ISO Standards',
                desc: 'Testing systems aligned with recognized quality and compliance standards.'
              },
              {
                icon: Gauge,
                title: 'High Testing Capacity',
                desc: 'Capability to handle static, dynamic, PIT, PLT, and stone column testing.'
              },
              {
                icon: Building2,
                title: 'Major Infrastructure Experience',
                desc: 'Trusted support for airport, metro, rail, highway, and industrial projects.'
              },
              {
                icon: BadgeCheck,
                title: 'Accurate Reporting',
                desc: 'Clear observations, dependable measurements, and engineering-focused documentation.'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-8 text-center rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-50 dark:bg-gray-950"
                >
                  <div className="w-16 h-16 rounded-full bg-[#BA0014]/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="h-8 w-8 text-[#BA0014]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#BA0014]/10 text-[#BA0014] dark:bg-[#BA0014]/20 dark:text-red-200">
              Our Services
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Comprehensive Testing Solutions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Reliable field testing and foundation engineering services for modern infrastructure projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <CardContent className="p-6">
                  <Badge className="mb-3 bg-[#BA0014]/10 text-[#BA0014] dark:bg-[#BA0014]/20 dark:text-red-200 text-xs">
                    {service.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {service.description.substring(0, 100)}...
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#BA0014] hover:bg-[#9E0011] rounded-xl">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-[#BA0014]/10 text-[#BA0014] dark:bg-[#BA0014]/20 dark:text-red-200">
              Field Work
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Real Site Execution
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Practical testing and engineering support delivered on real project sites
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[WorkImg1, WorkImg2, WorkImg3].map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl shadow-xl group"
              >
                <img
                  src={img}
                  alt={`CompactPile Work ${index + 1}`}
                  className="w-full h-[350px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#BA0014]/10 text-[#BA0014] dark:bg-[#BA0014]/20 dark:text-red-200">
              Our Projects
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Prestigious Projects Delivered
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Successfully supporting major infrastructure and engineering projects across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-[#BA0014]/10 text-[#BA0014] dark:bg-[#BA0014]/20 dark:text-red-200">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                    {project.description.substring(0, 100)}...
                  </p>

                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-[#BA0014] hover:bg-[#9E0011] rounded-xl">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#BA0014]/10 text-[#BA0014] dark:bg-[#BA0014]/20 dark:text-red-200">
              Testimonials
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="p-6 hover:shadow-xl transition-all duration-300 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-[#BA0014]/10 to-gray-50 dark:from-gray-800 dark:to-gray-900"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4 italic leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.designation}
                  </div>
                </div>
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
            Get in touch with our experts for dependable foundation testing,
            pile load testing, NDT, and geotechnical support solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#BA0014] hover:bg-gray-100 px-8 py-6 text-lg rounded-xl"
            >
              <Link to="/contact">Contact Us Now</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;