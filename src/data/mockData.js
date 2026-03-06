export const services = [
  {
    id: 1,
    title: "Static Pile Load Test",
    category: "Load Tests",
    description: "Conducted using Reaction Anchors, Kentledge, or Rock Anchors to determine ultimate load-carrying capacity up to 3000MT. NABL accredited and internationally recognized.",
    icon: "gauge",
    image: "https://images.unsplash.com/photo-1581094794329-8114a89d3c2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Up to 3000MT capacity", "NABL accredited", "Real-time monitoring", "Detailed reports"]
  },
  {
    id: 2,
    title: "Lateral Load Test",
    category: "Load Tests",
    description: "Evaluates pile resistance against horizontal forces up to 500 Tons. Essential for structures subjected to wind, wave, seismic, or earth pressure loading.",
    icon: "move-horizontal",
    image: "https://images.unsplash.com/photo-1581094794329-8114a89d3c2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Up to 500MT capacity", "Seismic analysis", "Deflection measurement", "Soil-structure interaction"]
  },
  {
    id: 3,
    title: "Cyclic Pile Load Test",
    category: "Load Tests",
    description: "Assesses pile performance under repeated loading conditions up to 3000 Tons. Critical for infrastructure projects with dynamic loading requirements.",
    icon: "repeat",
    image: "https://images.unsplash.com/photo-1581094794329-8114a89d3c2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Cyclic loading patterns", "Fatigue analysis", "Long-term performance", "Design validation"]
  },
  {
    id: 4,
    title: "High Strain Dynamic Test (HSDPT)",
    category: "NDT",
    description: "Quick and economical method to evaluate pile capacity and integrity by applying hammer impact energy. PDA (Pile Driving Analyzer) testing available.",
    icon: "activity",
    image: "https://images.unsplash.com/photo-1581094794329-8114a89d3c2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Real-time analysis", "Capacity verification", "Integrity assessment", "Hammer performance"]
  },
  {
    id: 5,
    title: "Low Strain Integrity Test (PIT)",
    category: "NDT",
    description: "Assesses pile continuity, integrity, and length. Detects cracks, voids, necking, soil inclusions, and changes in cross-section.",
    icon: "scan",
    image: "https://images.unsplash.com/photo-1581094794329-8114a89d3c2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Length verification", "Defect detection", "Cross-section analysis", "Quick assessment"]
  },
  {
    id: 6,
    title: "Cross-Hole Sonic Logging (CHSL)",
    category: "NDT",
    description: "Employs ultrasonic pulses to verify homogeneity and quality of cast-in-situ concrete piles. Provides detailed 3D tomographic analysis.",
    icon: "radio",
    image: "https://images.unsplash.com/photo-1581094794329-8114a89d3c2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["3D tomography", "Concrete quality", "Defect localization", "Full-length scanning"]
  },
  {
    id: 7,
    title: "Piling Works",
    category: "Construction",
    description: "Execution of bored cast-in-situ, driven, and micro piling works for diverse soil conditions. Complete foundation solutions from design to execution.",
    icon: "drill",
    image: "https://images.unsplash.com/photo-1581094794329-8114a89d3c2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Bored cast-in-situ", "Driven piles", "Micro piling", "Design & execution"]
  },
  {
    id: 8,
    title: "Rock Anchors & Soil Nailing",
    category: "Construction",
    description: "Design and installation for slope stabilization, earth retention systems, and foundation support. Permanent and temporary anchoring solutions.",
    icon: "anchor",
    image: "https://images.unsplash.com/photo-1581094794329-8114a89d3c2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Slope stabilization", "Earth retention", "Foundation support", "Tensile testing"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Noida International Airport",
    client: "Tata Projects Ltd.",
    location: "Jewar, Uttar Pradesh",
    category: "Airport",
    description: "Conducting Low Strain Pile Integrity Tests (PIT) for India's upcoming international airport project. Over 2000 piles tested with comprehensive reporting.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2024",
    status: "Ongoing",
    tests: ["PIT", "CHSL"]
  },
  {
    id: 2,
    title: "Jamshedpur Elevated Corridor",
    client: "H.G. Infraprojects Ltd.",
    location: "Jamshedpur, Jharkhand",
    category: "Highways",
    description: "Comprehensive testing including PIT, HSPDT, and Initial Static Lateral & Vertical Load Tests for 15km elevated corridor project.",
    image: "https://images.unsplash.com/photo-1545324762-9a5f6d7d9e3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2024",
    status: "Completed",
    tests: ["PIT", "HSPDT", "Static Load"]
  },
  {
    id: 3,
    title: "Agra Metro Rail Project",
    client: "Sam India Builtwell Pvt. Ltd.",
    location: "Agra, Uttar Pradesh",
    category: "Metro",
    description: "Complete pile integrity testing suite including CHSL, PIT, HSPDT, and Lateral Tests for Phase 1 of Agra Metro.",
    image: "https://images.unsplash.com/photo-1545324762-9a5f6d7d9e3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2024",
    status: "Ongoing",
    tests: ["CHSL", "PIT", "HSPDT", "Lateral"]
  },
  {
    id: 4,
    title: "Surat-Nashik Highway (Bharatmala)",
    client: "G R Infraprojects Ltd.",
    location: "Maharashtra",
    category: "Highways",
    description: "Six-laning project with comprehensive NDT and load testing under Hybrid Annuity Mode. Testing of 1500+ piles completed.",
    image: "https://images.unsplash.com/photo-1545324762-9a5f6d7d9e3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2023",
    status: "Completed",
    tests: ["NDT", "Load Tests"]
  },
  {
    id: 5,
    title: "Haryana Orbital Rail Corporation",
    client: "PNC Infratech Ltd.",
    location: "Gurugram, Haryana",
    category: "Railways",
    description: "Initial and Routine Vertical/Lateral Load Tests for railway infrastructure development including major bridges and viaducts.",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2023",
    status: "Completed",
    tests: ["Vertical Load", "Lateral Load"]
  },
  {
    id: 6,
    title: "Gangapath Project",
    client: "G R Infra Projects Ltd.",
    location: "Patna, Bihar",
    category: "Highways",
    description: "Installation of Sonic Tubes and comprehensive pile integrity testing using CHSL and PIT for riverfront expressway.",
    image: "https://images.unsplash.com/photo-1545324762-9a5f6d7d9e3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2023",
    status: "Completed",
    tests: ["CHSL", "PIT"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajeev Sharma",
    designation: "Project Manager, Tata Projects Ltd.",
    content: "Compact Pile Construction has been instrumental in ensuring the foundation quality of our Noida Airport project. Their NABL accredited testing services provide us with complete confidence in our pile foundations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Amit Kumar Singh",
    designation: "Chief Engineer, G R Infraprojects Ltd.",
    content: "We have worked with CPC on multiple highway and metro projects across India. Their technical expertise, professional approach, and timely delivery are exceptional. Highly recommended.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Vikram Mehta",
    designation: "Site Director, PNC Infratech Ltd.",
    content: "The professionalism and accuracy of their pile load testing services have made them our preferred partner for foundation testing. Their detailed reports and technical support are outstanding.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

export const teamMembers = [
  {
    id: 1,
    name: "Gian Chand Jain",
    designation: "Managing Director",
    qualification: "B.E. Civil, M.B.M Engineering College, Jodhpur",
    experience: "37+ years",
    expertise: ["Foundation Design", "RCC Structures", "Project Management"],
    description: "Expert in designing and installation of all types of foundations and R.C.C. structures. Pioneer in geotechnical testing in North India."
  },
  {
    id: 2,
    name: "Himanshu Jain",
    designation: "Director",
    qualification: "B.E. Civil, Nagpur University",
    experience: "23+ years",
    expertise: ["Piling Works", "Quality Control", "Team Leadership"],
    description: "Specialist in piling division with dedication to quality and innovation. Has executed over 500 projects across India."
  },
  {
    id: 3,
    name: "Sumer Chand Jain",
    designation: "Technical Consultant",
    qualification: "M.Sc. Electronics, Delhi University",
    experience: "27+ years",
    expertise: ["Instrumentation", "NDT Testing", "Waterproofing"],
    description: "Expert in construction of residential, commercial buildings and waterproofing. Pioneered NDT techniques in foundation testing."
  },
  {
    id: 4,
    name: "Arun Singh",
    designation: "Senior Engineer",
    qualification: "B.E. Civil, SRM University",
    experience: "10+ years",
    expertise: ["PIT", "CHSL", "HSDPT", "Load Testing"],
    description: "Specialist in all types of pile load testing and NDT methods. Has tested over 10,000 piles across major infrastructure projects."
  }
];

export const certifications = [
  {
    id: 1,
    title: "NABL Accredited",
    description: "Pile Load Tests (Static, Cyclic, Lateral, Pullout)",
    icon: "award",
    number: "TC-XXXX"
  },
  {
    id: 2,
    title: "NABL Accredited",
    description: "Non-Destructive Testing (HSDPT, PIT, CHSL)",
    icon: "shield-check",
    number: "TC-XXXX"
  },
  {
    id: 3,
    title: "ISO 9001:2015",
    description: "Quality Management System Certified",
    icon: "badge-check",
    number: "ISO-XXXX"
  },
  {
    id: 4,
    title: "48+ Years",
    description: "Industry Experience Since 1976",
    icon: "trophy"
  }
];

export const stats = [
  { label: "Years of Experience", value: "48+", icon: "calendar", suffix: "Years" },
  { label: "Projects Completed", value: "500+", icon: "building-2", suffix: "Projects" },
  { label: "Testing Capacity", value: "3000", icon: "gauge", suffix: "MT" },
  { label: "States Covered", value: "20+", icon: "map-pin", suffix: "States" },
  { label: "Piles Tested", value: "50K+", icon: "bar-chart-2", suffix: "Piles" },
  { label: "Happy Clients", value: "100+", icon: "users", suffix: "Clients" }
];

export const technologies = [
  {
    id: 1,
    name: "Pile Driving Analyzer (PDA)",
    description: "High-strain dynamic testing equipment for pile capacity and integrity",
    category: "Testing Equipment"
  },
  {
    id: 2,
    name: "PIT Collector",
    description: "Low-strain integrity testing system for pile length and defect detection",
    category: "Testing Equipment"
  },
  {
    id: 3,
    name: "CHSL System",
    description: "Cross-hole sonic logging equipment with 3D tomography capability",
    category: "Testing Equipment"
  },
  {
    id: 4,
    name: "Static Load Testing",
    description: "Hydraulic jacks and reaction systems up to 3000MT capacity",
    category: "Testing Equipment"
  }
];