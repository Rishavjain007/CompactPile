import {
  Mail,
  Linkedin,
  BadgeCheck,
  BriefcaseBusiness,
  Users,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { teamMembers } from "../data/mockData";

const leadershipTeam = teamMembers.filter((member) => member.id <= 3);
const coreTeam = teamMembers.filter((member) => member.id > 3);

const Team = () => {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-[#BA0014] via-[#a00012] to-[#7f000d] overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm">
            Our Team
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Meet Our Expert Team
          </h1>
          <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Experienced professionals dedicated to excellence in foundation
            testing, geotechnical engineering, and project execution.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Experienced leadership with decades of knowledge in civil
              engineering, foundation systems, testing, and field operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {leadershipTeam.map((member) => (
              <Card
                key={member.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative w-full h-[260px] sm:h-[280px] md:h-[300px] lg:h-[320px] overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Section */}
                <CardContent className="p-8 text-center flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {member.name}
                  </h3>

                  <Badge className="mb-4 mx-auto bg-[#BA0014]/10 text-[#BA0014] dark:bg-[#BA0014]/20 dark:text-red-200 border border-[#BA0014]/20">
                    {member.designation}
                  </Badge>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed min-h-[48px]">
                    {member.qualification}
                  </p>

                  <div className="mb-4 py-3 px-4 bg-[#BA0014]/10 dark:bg-gray-800 rounded-xl">
                    <p className="text-[#BA0014] dark:text-red-200 font-semibold">
                      {member.experience} Experience
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {member.description}
                  </p>

                  <div className="flex justify-center space-x-3 mt-auto">
                    <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#BA0014] dark:hover:bg-[#BA0014] transition-colors flex items-center justify-center group">
                      <Mail className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-white" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#BA0014] dark:hover:bg-[#BA0014] transition-colors flex items-center justify-center group">
                      <Linkedin className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-white" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Technical & Support Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
  <div className="container mx-auto px-4">
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Core Technical & Support Team
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        A dedicated team of engineers, technical professionals, and
        operational staff supporting execution, quality, coordination, and
        project delivery.
      </p>
    </div>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {coreTeam.map((member) => (
        <Card
          key={member.id}
          className="group overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
        >
          {/* Image Section */}
          <div className="relative w-full h-[250px] sm:h-[270px] md:h-[290px] lg:h-[300px] overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <img
              src={member.image}
              alt={member.name}
              className="max-w-full max-h-full object-contain object-center group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Content Section */}
          <CardContent className="p-7 text-center flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {member.name}
            </h3>

            <Badge className="mb-4 mx-auto bg-[#BA0014]/10 text-[#BA0014] dark:bg-[#BA0014]/20 dark:text-red-200 border border-[#BA0014]/20">
              {member.designation}
            </Badge>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed min-h-[48px]">
              {member.qualification}
            </p>

            <div className="mb-4 py-2.5 px-4 bg-[#BA0014]/10 dark:bg-gray-800 rounded-xl">
              <p className="text-[#BA0014] dark:text-red-200 font-medium text-sm">
                {member.experience} Experience
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">
              {member.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Expertise Areas */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Areas of Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Multi-disciplinary expertise across testing, field execution,
              quality systems, instrumentation, and engineering operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <Card
                key={member.id}
                className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
                  {member.name}
                </h3>

                <div className="space-y-3">
                  {member.expertise.map((skill, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Strengths */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Team Strengths
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#BA0014]/10 flex items-center justify-center mx-auto mb-5">
                <BadgeCheck className="h-8 w-8 text-[#BA0014]" />
              </div>
              <div className="text-5xl font-bold text-[#BA0014] mb-3">48+</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Years of Industry Legacy
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                A long-standing presence in foundation engineering, testing, and
                execution support.
              </p>
            </Card>

            <Card className="p-8 text-center rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#BA0014]/10 flex items-center justify-center mx-auto mb-5">
                <BriefcaseBusiness className="h-8 w-8 text-[#BA0014]" />
              </div>
              <div className="text-5xl font-bold text-[#BA0014] mb-3">50+</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Skilled Professionals
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Engineers, technicians, and operational staff supporting
                projects across India.
              </p>
            </Card>

            <Card className="p-8 text-center rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-[#BA0014]/10 flex items-center justify-center mx-auto mb-5">
                <Users className="h-8 w-8 text-[#BA0014]" />
              </div>
              <div className="text-5xl font-bold text-[#BA0014] mb-3">100%</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Team-Driven Execution
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Strong coordination between engineering, site operations,
                reporting, and project support.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Technical Excellence
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our team combines field-tested execution with engineering
              understanding and technical discipline across major infrastructure
              projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 rounded-2xl border-l-4 border-[#BA0014] border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <h3 className="text-xl font-semibold mb-5 text-gray-900 dark:text-white">
                Engineering Team
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-3 mt-2 shrink-0"></div>
                  <span>
                    Civil engineers and specialists with strong academic and
                    field backgrounds
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-3 mt-2 shrink-0"></div>
                  <span>
                    Hands-on expertise in PIT, CHSL, dynamic load testing, and
                    static load testing
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-3 mt-2 shrink-0"></div>
                  <span>
                    Practical understanding of foundation behavior,
                    instrumentation, and reporting
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-3 mt-2 shrink-0"></div>
                  <span>
                    Continuous focus on standards, quality control, and
                    execution efficiency
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 rounded-2xl border-l-4 border-[#BA0014] border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <h3 className="text-xl font-semibold mb-5 text-gray-900 dark:text-white">
                Field Operations & Support
              </h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-3 mt-2 shrink-0"></div>
                  <span>
                    Experienced site engineers, supervisors, technicians, and
                    support staff
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-3 mt-2 shrink-0"></div>
                  <span>
                    Efficient handling of field setup, test execution, equipment
                    coordination, and data collection
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-3 mt-2 shrink-0"></div>
                  <span>
                    Reliable operational support for highways, metro, rail,
                    airport, and industrial projects
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#BA0014] rounded-full mr-3 mt-2 shrink-0"></div>
                  <span>
                    Administrative and reporting coordination for smooth project
                    execution
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#BA0014] via-[#a00012] to-[#7f000d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Driven by Experience. Built on Execution.
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Our team brings together leadership, engineering expertise, and
            practical field capability to deliver dependable foundation testing
            solutions.
          </p>
          <Badge className="bg-white text-[#BA0014] px-6 py-3 text-base hover:bg-gray-100 cursor-default">
            Team Excellence
          </Badge>
        </div>
      </section>
    </div>
  );
};

export default Team;
