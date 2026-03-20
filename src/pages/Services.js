import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Gauge,
  MoveHorizontal,
  Repeat,
  Activity,
  Scan,
  Radio,
  Drill,
  Anchor,
} from "lucide-react";

import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

import { services } from "../data/mockData";

// ===== LOCAL IMAGES (adjust extension if needed) =====
import DynamicImg from "../assets/images/Picture1.jpg";
import PITImg from "../assets/images/Picture5.jpg";
import StaticImg from "../assets/images/Picture6.jpg";
import LateralImg from "../assets/images/Picture13.jpg";
import RockAnchorImg from "../assets/images/Rock-Anchors-&-Soil-Nailing.jpeg";
import StoneColumnImg from "../assets/images/Picture24.jpg";
import PLTImg from "../assets/images/Plate-load-test.jpeg";

const iconMap = {
  gauge: Gauge,
  "move-horizontal": MoveHorizontal,
  repeat: Repeat,
  activity: Activity,
  scan: Scan,
  radio: Radio,
  drill: Drill,
  anchor: Anchor,
};

const detailCards = [
  {
    title: "Static Vertical Load Test",
    image: StaticImg,
    desc: "Determines ultimate pile capacity and settlement behavior using reaction systems, hydraulic jacks, and precision gauges.",
  },
  {
    title: "Pile Integrity Test (PIT)",
    image: PITImg,
    desc: "Low strain non-destructive testing to assess continuity, defects, and pile soundness.",
  },
  {
    title: "High Strain Dynamic Test",
    image: DynamicImg,
    desc: "Quick field testing method for capacity estimation and integrity assessment using impact energy.",
  },
  {
    title: "Lateral Load Test",
    image: LateralImg,
    desc: "Evaluates pile resistance against horizontal forces and measures deflection behavior.",
  },
  {
    title: "Plate Load Test (PLT)",
    image: PLTImg,
    desc: "Used to determine soil bearing capacity and settlement characteristics as per IS 1888.",
  },
  {
    title: "Stone Column Load Test",
    image: StoneColumnImg,
    desc: "Verifies load capacity and settlement behavior of improved ground using stone columns.",
  },
  {
    title: "Rock Anchors & Soil Nailing",
    image: RockAnchorImg,
    desc: "Ground reinforcement solution for slope stabilization, excavation support, and retention systems.",
  },
];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Load Tests", "NDT", "Construction"];

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-[#BA0014] via-[#a00012] to-[#7f000d] overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Hero image overlay */}
        <img
          src={DynamicImg}
          alt="Foundation testing service"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-white/15 text-white border border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm">
            Our Services
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Foundation Testing & Geotechnical Solutions
          </h1>

          <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Specialized in pile load testing, NDT, Plate Load Test (PLT), Stone
            Column Load Test, piling works, and ground engineering services.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/95 dark:bg-gray-900/95 sticky top-20 z-40 shadow-md backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#BA0014] hover:bg-[#9E0011] text-white shadow-md"
                    : "border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-[#BA0014]/5 hover:border-[#BA0014] hover:text-[#BA0014] dark:hover:text-[#ffb3bb]"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid (cards use mockData images) */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComponent = iconMap[service.icon] || Gauge;

              return (
                <Card
                  key={service.id}
                  className="group overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
                >
                  {/* Image */}
                  <div className="relative w-full h-[220px] sm:h-[230px] md:h-[240px] overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="max-w-full max-h-full object-contain object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-[#BA0014]/10 text-[#BA0014] border border-[#BA0014]/20 dark:bg-[#BA0014]/20 dark:text-red-200">
                        {service.category}
                      </Badge>

                      <div className="w-11 h-11 rounded-full bg-[#BA0014]/10 dark:bg-[#BA0014]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-5 w-5 text-[#BA0014] dark:text-red-300" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-[#BA0014] transition-colors duration-300 min-h-[56px]">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    <div className="mt-5 pt-5 border-t border-gray-200 dark:border-gray-800">
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-xs text-gray-500 dark:text-gray-400"
                          >
                            <div className="w-1.5 h-1.5 bg-[#BA0014] rounded-full mr-2 shrink-0"></div>
                            <span className="leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real Site Work Gallery */}
      <section className="py-20 bg-white dark:bg-gray-900">
  <div className="container mx-auto px-4">
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Real Site Work & Testing Operations
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
        Field-tested engineering solutions backed by practical execution
        and on-site expertise
      </p>
    </div>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {detailCards.map((item, index) => (
        <Card
          key={index}
          className="group overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
        >
          {/* Image */}
          <div className="relative w-full h-[240px] sm:h-[250px] md:h-[260px] overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="max-w-full max-h-full object-contain object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
          </div>

          {/* Content */}
          <CardContent className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white min-h-[56px]">
              {item.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
              {item.desc}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Detailed Services Accordion */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Detailed Testing Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Learn more about our testing capabilities, field methodologies,
              and engineering applications
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-5">
            <AccordionItem
              value="load-tests"
              className="border border-gray-200 dark:border-gray-800 rounded-2xl px-6 bg-white dark:bg-gray-900 shadow-sm"
            >
              <AccordionTrigger className="text-xl font-semibold hover:no-underline py-5 text-gray-900 dark:text-white">
                Load Testing Services
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6 space-y-5">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Static Vertical Load Test
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Determines ultimate pile capacity and settlement behavior
                    using hydraulic jacks, reaction systems, and precision
                    measurement.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Lateral Load Test
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Evaluates pile response under horizontal forces for bridge,
                    transport, and structural applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Cyclic Load Test
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Used to assess repeated load behavior and long-term
                    performance under variable loading.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Plate Load Test (PLT)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Conducted as per IS 1888 to determine soil bearing capacity,
                    settlement characteristics, and subgrade modulus for shallow
                    foundations and pavements.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Stone Column Load Test
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Evaluates the stiffness, load carrying capacity, and
                    settlement behavior of improved ground using stone columns /
                    granular piles.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="ndt"
              className="border border-gray-200 dark:border-gray-800 rounded-2xl px-6 bg-white dark:bg-gray-900 shadow-sm"
            >
              <AccordionTrigger className="text-xl font-semibold hover:no-underline py-5 text-gray-900 dark:text-white">
                Non-Destructive Testing (NDT)
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6 space-y-5">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    High Strain Dynamic Test
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    A quick field method for capacity estimation and pile
                    integrity assessment using impact energy.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Pile Integrity Test (PIT)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Low strain integrity testing for pile continuity, defect
                    detection, and structural soundness.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Cross-Hole Sonic Logging (CHSL)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Ultrasonic testing used to assess internal concrete quality
                    and identify anomalies in cast-in-situ piles.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="construction"
              className="border border-gray-200 dark:border-gray-800 rounded-2xl px-6 bg-white dark:bg-gray-900 shadow-sm"
            >
              <AccordionTrigger className="text-xl font-semibold hover:no-underline py-5 text-gray-900 dark:text-white">
                Construction & Ground Engineering
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6 space-y-5">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Piling Works
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Execution of bored cast-in-situ piles, micro piles, and
                    related deep foundation systems.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Rock Anchors & Soil Nailing
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Geotechnical reinforcement solutions for slope
                    stabilization, excavation support, and retaining systems.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#BA0014] via-[#a00012] to-[#7f000d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Professional Testing Services?
          </h2>

          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with us for foundation testing, pile load tests, NDT
            services, plate load test, and ground engineering support.
          </p>

          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-[#BA0014] hover:bg-gray-100 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg rounded-xl shadow-lg"
            >
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
