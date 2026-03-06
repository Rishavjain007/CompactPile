import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { teamMembers } from '../data/mockData';

const Team = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white backdrop-blur-sm">Our Team</Badge>
          <h1 className="text-5xl font-bold text-white mb-6">
            Meet Our Expert Team
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Experienced professionals dedicated to excellence in foundation testing
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Decades of combined experience in civil engineering and foundation testing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member) => (
              <Card
                key={member.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-4xl">
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                    {member.designation}
                  </Badge>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {member.qualification}
                  </p>
                  <div className="mb-4 py-3 px-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {member.experience} Experience
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                    {member.description}
                  </p>
                  <div className="flex justify-center space-x-3">
                    <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center group">
                      <Mail className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-white" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center group">
                      <Linkedin className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-white" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Areas of Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.id} className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">
                  {member.name.split(' ')[0]}'s Expertise
                </h3>
                <div className="space-y-2">
                  {member.expertise.map((skill, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Strengths */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Team Strengths
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold text-blue-600 mb-3">37+</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Years of Leadership
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Management team with decades of industry experience and proven track record
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold text-blue-600 mb-3">50+</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Skilled Professionals
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Engineers, technicians, and support staff working across India
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold text-blue-600 mb-3">100%</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Trained & Certified
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                All team members are professionally trained and regularly updated
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Technical Excellence
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our technical team comprises highly qualified civil engineers, field supervisors,
              foremen, and operators specialized in pile testing and foundation work
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Engineering Team
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span>Civil engineers from premier institutions (NIT, SRM, Delhi University)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span>Specialists in PIT, CHSL, HSDPT, and all NDT methods</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span>Expertise in static and dynamic load testing up to 3000MT</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span>Continuous training on latest technologies and standards</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Field Operations
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span>Experienced supervisors and foremen with 15+ years field experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span>Skilled equipment operators and testing technicians</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span>Safety-trained personnel for all operations and site conditions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span>Dedicated support staff for project coordination and reporting</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Team</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented professionals to join our growing team
          </p>
          <Badge className="bg-white text-blue-600 px-6 py-3 text-base hover:bg-gray-100 cursor-pointer">
            Careers Coming Soon
          </Badge>
        </div>
      </section>
    </div>
  );
};

export default Team;