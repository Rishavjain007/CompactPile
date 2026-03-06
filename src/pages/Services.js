import React, { useState } from 'react';
import {
  Gauge,
  MoveHorizontal,
  Repeat,
  Activity,
  Scan,
  Radio,
  Drill,
  Anchor,
  ChevronDown
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white backdrop-blur-sm">Our Services</Badge>
          <h1 className="text-5xl font-bold text-white mb-6">
            Comprehensive Testing Solutions
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            NABL Accredited Pile Load Tests and Non-Destructive Testing Services
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white dark:bg-gray-900 sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={
                  selectedCategory === category
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }
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
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                        {service.category}
                      </Badge>
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-1"></div>
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
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Service Details
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Learn more about our testing capabilities and methodologies
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="load-tests"
              className="border rounded-lg px-6 bg-gray-50 dark:bg-gray-800"
            >
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Gauge className="h-6 w-6 text-blue-600" />
                  <span>Pile Load Tests (NABL Accredited)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      Static Vertical Load Test (up to 3000MT)
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
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
                    <p className="text-gray-600 dark:text-gray-400">
                      Evaluates the resistance of piles against horizontal forces. Essential for
                      structures subjected to wind, wave, or seismic loading. Provides
                      load-deflection behavior and soil resistance parameters.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      Cyclic Pile Load Test (up to 3000 Tons)
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Assesses pile performance under repeated loading conditions. Useful for
                      offshore, marine, and critical infrastructure projects where dynamic
                      loading is a concern.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      Pull Out Test (up to 500 Tons)
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Determines the uplift capacity of piles and ground anchors. Widely applied
                      for transmission towers, retaining structures, and foundations subjected to
                      uplift forces.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="ndt"
              className="border rounded-lg px-6 bg-gray-50 dark:bg-gray-800"
            >
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Activity className="h-6 w-6 text-blue-600" />
                  <span>Non-Destructive Testing (NABL Accredited)</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      High Strain Dynamic Pile Load Test (HSDPT)
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      A quick and economical method to evaluate pile capacity and integrity by
                      applying hammer impact energy. Provides load–settlement behaviour and soil
                      resistance distribution along the pile using PDA and CAPWAP analysis.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      Low Strain Integrity Test (PIT)
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Used to assess pile continuity, integrity, and length. Helps in detecting
                      major defects such as cracks, voids, necking, and soil inclusions without
                      damaging the pile. Provides rapid assessment of pile quality.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      Cross-Hole Sonic Logging Test (CHSL)
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Employs ultrasonic pulses between installed access tubes to verify the
                      homogeneity and quality of cast-in-situ concrete piles. Effective in
                      identifying anomalies like honeycombing, segregation, or voids with 3D
                      tomographic analysis.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="construction"
              className="border rounded-lg px-6 bg-gray-50 dark:bg-gray-800"
            >
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Drill className="h-6 w-6 text-blue-600" />
                  <span>Construction Services</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      Piling Works
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Execution of bored cast-in-situ, driven, and micro piling works to provide
                      safe and reliable deep foundation solutions for diverse soil conditions.
                      Complete turnkey solutions from design to execution.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      Plate Load Test
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      On-site testing to determine soil bearing capacity and settlement behaviour,
                      ensuring safe and economical foundation design for shallow foundations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">
                      Rock Anchors & Soil Nailing
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Design and installation of rock anchors and soil nails for slope
                      stabilization, earth retention systems, and foundation support in
                      challenging ground conditions. Includes tensile testing and verification.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Professional Testing Services?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us for NABL accredited pile load testing and NDT services
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg"
          >
            Request a Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;