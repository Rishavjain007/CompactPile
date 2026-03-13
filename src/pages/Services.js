import React, { useState } from 'react';
import {
  Gauge,
  MoveHorizontal,
  Repeat,
  Activity,
  Scan,
  Radio,
  Drill,
  Anchor
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../components/ui/accordion';
import { services } from '../data/mockData';

const iconMap = {
  gauge: Gauge,
  'move-horizontal': MoveHorizontal,
  repeat: Repeat,
  activity: Activity,
  scan: Scan,
  radio: Radio,
  drill: Drill,
  anchor: Anchor
};

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Load Tests', 'NDT', 'Construction'];

  const filteredServices =
    selectedCategory === 'All'
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-[#BA0014] via-[#a00012] to-[#7f000d] overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-white/15 text-white border border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm">
            Our Services
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Comprehensive Testing Solutions
          </h1>

          <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            NABL Accredited Pile Load Tests and Non-Destructive Testing Services
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
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#BA0014] hover:bg-[#9E0011] text-white shadow-md'
                    : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-[#BA0014]/5 hover:border-[#BA0014] hover:text-[#BA0014] dark:hover:text-[#ffb3bb]'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComponent = iconMap[service.icon] || Gauge;
              return (
                <Card
                  key={service.id}
                  className="group overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-[#BA0014]/10 text-[#BA0014] border border-[#BA0014]/20 dark:bg-[#BA0014]/20 dark:text-red-200">
                        {service.category}
                      </Badge>

                      <div className="w-11 h-11 rounded-full bg-[#BA0014]/10 dark:bg-[#BA0014]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-5 w-5 text-[#BA0014] dark:text-red-300" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-[#BA0014] transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
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
                            {feature}
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

      {/* Detailed Services Accordion */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Service Details
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Learn more about our testing capabilities and methodologies
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-5">
            <AccordionItem
              value="load-tests"
              className="border border-gray-200 dark:border-gray-800 rounded-2xl px-6 bg-gray-50 dark:bg-gray-800/70 shadow-sm"
            >
              <AccordionTrigger className="text-xl font-semibold hover:no-underline py-5">
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-11 h-11 rounded-full bg-[#BA0014]/10 flex items-center justify-center">
                    <Gauge className="h-5 w-5 text-[#BA0014]" />
                  </div>
                  <span>Pile Load Tests (NABL Accredited)</span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pt-2 pb-6 space-y-5">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Static Vertical Load Test (up to 3000MT)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Conducted using Reaction Anchors, Kentledge, or Rock Anchors to determine
                    the ultimate load-carrying capacity and settlement behavior of piles.
                    Ensures safe and reliable foundation design with detailed load-settlement
                    curves and analysis.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Lateral Load Test (up to 500 Tons)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Evaluates the resistance of piles against horizontal forces. Essential for
                    structures subjected to wind, wave, or seismic loading. Provides
                    load-deflection behavior and soil resistance parameters.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Cyclic Pile Load Test (up to 3000 Tons)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Assesses pile performance under repeated loading conditions. Useful for
                    offshore, marine, and critical infrastructure projects where dynamic
                    loading is a concern.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Pull Out Test (up to 500 Tons)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Determines the uplift capacity of piles and ground anchors. Widely applied
                    for transmission towers, retaining structures, and foundations subjected to
                    uplift forces.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="ndt"
              className="border border-gray-200 dark:border-gray-800 rounded-2xl px-6 bg-gray-50 dark:bg-gray-800/70 shadow-sm"
            >
              <AccordionTrigger className="text-xl font-semibold hover:no-underline py-5">
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-11 h-11 rounded-full bg-[#BA0014]/10 flex items-center justify-center">
                    <Activity className="h-5 w-5 text-[#BA0014]" />
                  </div>
                  <span>Non-Destructive Testing (NABL Accredited)</span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pt-2 pb-6 space-y-5">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    High Strain Dynamic Pile Load Test (HSDPT)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    A quick and economical method to evaluate pile capacity and integrity by
                    applying hammer impact energy. Provides load–settlement behaviour and soil
                    resistance distribution along the pile using PDA and CAPWAP analysis.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Low Strain Integrity Test (PIT)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Used to assess pile continuity, integrity, and length. Helps in detecting
                    major defects such as cracks, voids, necking, and soil inclusions without
                    damaging the pile. Provides rapid assessment of pile quality.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Cross-Hole Sonic Logging Test (CHSL)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Employs ultrasonic pulses between installed access tubes to verify the
                    homogeneity and quality of cast-in-situ concrete piles. Effective in
                    identifying anomalies like honeycombing, segregation, or voids with 3D
                    tomographic analysis.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="construction"
              className="border border-gray-200 dark:border-gray-800 rounded-2xl px-6 bg-gray-50 dark:bg-gray-800/70 shadow-sm"
            >
              <AccordionTrigger className="text-xl font-semibold hover:no-underline py-5">
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-11 h-11 rounded-full bg-[#BA0014]/10 flex items-center justify-center">
                    <Drill className="h-5 w-5 text-[#BA0014]" />
                  </div>
                  <span>Construction Services</span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pt-2 pb-6 space-y-5">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Piling Works
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Execution of bored cast-in-situ, driven, and micro piling works to provide
                    safe and reliable deep foundation solutions for diverse soil conditions.
                    Complete turnkey solutions from design to execution.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Plate Load Test
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    On-site testing to determine soil bearing capacity and settlement behaviour,
                    ensuring safe and economical foundation design for shallow foundations.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                    Rock Anchors & Soil Nailing
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Design and installation of rock anchors and soil nails for slope
                    stabilization, earth retention systems, and foundation support in
                    challenging ground conditions. Includes tensile testing and verification.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#BA0014] via-[#a00012] to-[#7f000d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Professional Testing Services?
          </h2>

          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact us for NABL accredited pile load testing and NDT services
          </p>

          <Button
            size="lg"
            className="bg-white text-[#BA0014] hover:bg-gray-100 hover:scale-105 transition-all duration-300 px-8 py-6 text-lg rounded-xl shadow-lg"
          >
            Request a Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;