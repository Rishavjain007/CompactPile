import React from 'react';
import { Award, Target, Eye, CheckCircle2 } from 'lucide-react';
import { Card} from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const About = () => {
  const visionPoints = [
    'To be the most trusted and innovative partner in foundation testing across India',
    'Setting the benchmark through accuracy, innovation, and unwavering quality commitment',
    'Empowering the construction industry with reliable and precise foundation testing',
    'Leading geotechnical testing with world-class expertise and cutting-edge technology',
    'Becoming the preferred choice recognized for precision, professionalism, and integrity'
  ];

  const milestones = [
    { year: '1976', title: 'Company Founded', description: 'Started our journey in civil construction with a vision for excellence' },
    { year: '1990', title: 'Piling Division', description: 'Established specialized piling services to meet growing infrastructure needs' },
    { year: '2005', title: 'NABL Accreditation', description: 'Achieved NABL certification for testing services, setting new quality standards' },
    { year: '2015', title: 'Pan-India Presence', description: 'Expanded operations to 20+ states, serving major infrastructure projects' },
    { year: '2024', title: '500+ Projects', description: 'Successfully completed over 500 major infrastructure projects nationwide' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white backdrop-blur-sm">About Us</Badge>
          <h1 className="text-5xl font-bold text-white mb-6">Our Story</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            48 Years of Engineering Excellence and Innovation in Foundation Testing
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Journey Since 1976
              </h2>
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Established in 1976, Compact Pile Construction Pvt Ltd presents a wide choice
                  of services in National Highways, Railways, Metro Rails, Bridges, Marine and
                  building projects to its clients. Our journey began with a simple mission: to
                  provide reliable foundation testing services that ensure structural safety.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The company has constantly strived to exceed client expectations through
                  quality work, transparent work ethics and use of cutting-edge technology. We
                  are a well-known name in the field of construction of piles and geotechnical
                  investigation, trusted by leading infrastructure companies.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  We have completed numerous projects in India for some of the top consultants,
                  Builders and Developers. As a 48 years old organization, we hold rich
                  experience in the deep foundation field by virtue of our experts and
                  continuous innovation in testing methodologies.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxjaXZpbCUyMGVuZ2luZWVyaW5nfGVufDB8fHx8MTc3Mzg5MzgxOXww&ixlib=rb-4.1.0&q=85"
                alt="Company History"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Eye className="h-16 w-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {visionPoints.map((point, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-600"
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700 dark:text-gray-300">{point}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Milestones
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Key achievements in our journey of excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-blue-200 dark:bg-blue-900 mt-2"></div>
                    )}
                  </div>
                  <Card className="flex-1 p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Quality Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Committed to delivering the highest quality standards in every project through
                rigorous testing and continuous improvement
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Embracing cutting-edge technology and innovative testing methods to deliver
                accurate and reliable results
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Integrity
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Transparent work ethics, honest communication, and ethical practices with all
                stakeholders
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;