// ===== LOCAL IMAGE IMPORTS =====
import DynamicImg from "../assets/images/Picture1.jpg";
import DynamicImg2 from "../assets/images/cyclic-load-test.jpeg";
// import DynamicImg3 from "../assets/images/Picture3.jpg";
import Noimage from "../assets/images/image.png";
import PITImg from "../assets/images/Picture5.jpg";
import StaticImg from "../assets/images/Picture6.jpg";
import StaticImg2 from "../assets/images/piling-work.jpeg";
import LateralImg from "../assets/images/Picture13.jpg";
import RockAnchorImg from "../assets/images/Rock-Anchors-&-Soil-Nailing.jpeg";
import ProjectImg1 from "../assets/images/Picture16.jpg";
import ProjectImg2 from "../assets/images/Picture17.jpg";
import ProjectImg3 from "../assets/images/Picture18.jpg";
import ProjectImg4 from "../assets/images/Picture19.jpg";
import ProjectImg5 from "../assets/images/Picture21.jpg";
import ProjectImg6 from "../assets/images/Picture22.jpg";
import StoneColumnImg from "../assets/images/Plate-load-test.jpeg";
import PLTImg from "../assets/images/Picture27.jpg";
import GroupImg1 from "../assets/images/Himanshu.jpeg";
import GroupImg5 from "../assets/images/Sumer-chand-jain.jpeg";
import GroupImg6 from "../assets/images/gyan-chand-jain.jpeg";
import GroupImg2 from "../assets/images/Raj.jpeg";
import GroupImg3 from "../assets/images/Mangesh.jpeg";
import GroupImg4 from "../assets/images/Pankaj.jpeg";

export const services = [
  {
    id: 1,
    title: "Static Vertical Load Test",
    category: "Load Tests",
    description:
      "Conducted using reaction anchors, kentledge, or structural reaction systems to determine the ultimate load-carrying capacity and settlement behavior of piles. Widely used for safe and reliable deep foundation design.",
    icon: "gauge",
    image: StaticImg,
    features: [
      "Up to 3000 MT capacity",
      "Settlement analysis",
      "Detailed load-settlement curve",
      "Foundation design validation"
    ]
  },
  {
    id: 2,
    title: "Lateral Load Test",
    category: "Load Tests",
    description:
      "Evaluates pile resistance against horizontal forces and deflection behavior. Essential for structures subjected to wind, wave, seismic, traffic, and earth pressure loading.",
    icon: "move-horizontal",
    image: LateralImg,
    features: [
      "Up to 500 MT capacity",
      "Horizontal deflection study",
      "Soil-structure interaction",
      "Bridge & infrastructure suitability"
    ]
  },
  {
    id: 3,
    title: "Cyclic Pile Load Test",
    category: "Load Tests",
    description:
      "Assesses pile performance under repeated loading and unloading cycles. Highly useful for dynamic, marine, and heavy infrastructure applications where fatigue and repeated loading are critical.",
    icon: "repeat",
    image: DynamicImg2,
    features: [
      "Repeated loading cycles",
      "Fatigue behavior assessment",
      "Performance under variable loads",
      "Long-term design verification"
    ]
  },
  {
    id: 4,
    title: "High Strain Dynamic Load Test",
    category: "NDT",
    description:
      "A fast and economical method to estimate pile capacity and integrity by applying hammer impact energy. Suitable for dynamic evaluation and field verification using PDA systems.",
    icon: "activity",
    image: DynamicImg,
    features: [
      "Quick capacity estimation",
      "Pile integrity evaluation",
      "PDA compatible",
      "Field-efficient testing"
    ]
  },
  {
    id: 5,
    title: "Pile Integrity Test (PIT)",
    category: "NDT",
    description:
      "A low strain non-destructive test used to assess pile continuity, length, and integrity. Useful for identifying cracks, necking, voids, inclusions, and section changes in piles.",
    icon: "scan",
    image: PITImg,
    features: [
      "Pile continuity check",
      "Defect identification",
      "Length estimation",
      "Quick site execution"
    ]
  },
  {
    id: 6,
    title: "Cross-Hole Sonic Logging (CHSL)",
    category: "NDT",
    description:
      "Uses ultrasonic pulse transmission between access tubes to evaluate the homogeneity and quality of cast-in-situ concrete piles. Effective for locating defects and weak zones.",
    icon: "radio",
    image: Noimage,
    features: [
      "Concrete quality assessment",
      "Defect zone identification",
      "Full depth testing",
      "Reliable ultrasonic analysis"
    ]
  },
  {
    id: 7,
    title: "Plate Load Test (PLT)",
    category: "Load Tests",
    description:
      "An in-situ field test conducted to determine the bearing capacity and settlement characteristics of soil at foundation level as per IS 1888. Useful for shallow foundation and pavement design.",
    icon: "gauge",
    image: StoneColumnImg,
    features: [
      "As per IS 1888",
      "Bearing capacity evaluation",
      "Settlement characteristics",
      "Subgrade modulus determination"
    ]
  },
  {
    id: 8,
    title: "Stone Column Load Test",
    category: "Load Tests",
    description:
      "Field load test conducted to evaluate the load carrying capacity, stiffness, and settlement behavior of stone columns / granular piles used in ground improvement works.",
    icon: "gauge",
    image: PLTImg,
    features: [
      "Ground improvement verification",
      "Settlement performance",
      "Column stiffness evaluation",
      "Design validation"
    ]
  },
  {
    id: 9,
    title: "Piling Works",
    category: "Construction",
    description:
      "Execution of bored cast-in-situ piles, micro piles, and other foundation systems for varying soil conditions. End-to-end support from planning to field execution.",
    icon: "drill",
    image: StaticImg2,
    features: [
      "Bored cast-in-situ piling",
      "Micro piling support",
      "Site execution expertise",
      "Deep foundation solutions"
    ]
  },
  {
    id: 10,
    title: "Rock Anchors & Soil Nailing",
    category: "Construction",
    description:
      "Design and installation solutions for slope stabilization, excavation support, retaining systems, and ground reinforcement in infrastructure and geotechnical projects.",
    icon: "anchor",
    image: RockAnchorImg,
    features: [
      "Slope stabilization",
      "Excavation support",
      "Ground reinforcement",
      "Retaining system solutions"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Noida International Airport",
    client: "Tata Projects Ltd.",
    location: "Jewar, Uttar Pradesh",
    category: "Airport",
    description:
      "Pile Integrity Testing and allied foundation testing works executed for one of India’s largest upcoming airport infrastructure projects.",
    image: ProjectImg1,
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
    description:
      "Comprehensive testing including PIT, dynamic testing, and static lateral/vertical load testing for elevated corridor infrastructure.",
    image: ProjectImg2,
    year: "2024",
    status: "Completed",
    tests: ["PIT", "HSDT", "Static Load"]
  },
  {
    id: 3,
    title: "Agra Metro Rail Project",
    client: "Sam India Builtwell Pvt. Ltd.",
    location: "Agra, Uttar Pradesh",
    category: "Metro",
    description:
      "Complete pile testing support including CHSL, PIT, dynamic testing, and lateral load testing for metro infrastructure works.",
    image: ProjectImg3,
    year: "2024",
    status: "Ongoing",
    tests: ["CHSL", "PIT", "Dynamic", "Lateral"]
  },
  {
    id: 4,
    title: "Surat-Nashik Highway (Bharatmala)",
    client: "G R Infraprojects Ltd.",
    location: "Maharashtra",
    category: "Highways",
    description:
      "NDT and load testing support for major six-laning highway infrastructure under Bharatmala project execution.",
    image: ProjectImg4,
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
    description:
      "Initial and routine vertical and lateral load tests for rail corridor and bridge foundation systems.",
    image: ProjectImg5,
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
    description:
      "Installation of sonic tubes and comprehensive pile integrity testing support for expressway and riverfront infrastructure development.",
    image: ProjectImg6,
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
    content:
      "Compact Pile Construction has consistently delivered dependable and technically sound testing support for major infrastructure works. Their field execution and reporting quality are highly professional.",
    rating: 5,
    image: GroupImg1
  },
  {
    id: 2,
    name: "Amit Kumar Singh",
    designation: "Chief Engineer, G R Infraprojects Ltd.",
    content:
      "We have worked with CPC on multiple highway and transport infrastructure projects. Their testing quality, response time, and technical support have been excellent throughout.",
    rating: 5,
    image: GroupImg2
  },
  {
    id: 3,
    name: "Vikram Mehta",
    designation: "Site Director, Infrastructure Project",
    content:
      "Their team demonstrates strong field expertise in pile testing and geotechnical support. Reports are detailed, practical, and highly useful for engineering decision-making.",
    rating: 5,
    image: GroupImg1
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
    description:
      "Expert in designing and installation of all types of foundations and RCC structures with extensive experience in geotechnical and infrastructure execution.",
    image: GroupImg6
  },
  {
    id: 2,
    name: "Himanshu Jain",
    designation: "Director",
    qualification: "B.E. Civil, Nagpur University",
    experience: "23+ years",
    expertise: ["Piling Works", "Quality Control", "Team Leadership"],
    description:
      "Specialist in piling division with a strong focus on quality, field execution, and efficient project delivery across infrastructure works.",
    image: GroupImg1
  },
  {
    id: 3,
    name: "Sumer Chand Jain",
    designation: "Technical Consultant",
    qualification: "M.Sc. Electronics, Delhi University",
    experience: "27+ years",
    expertise: ["Instrumentation", "NDT Testing", "Testing Systems"],
    description:
      "Experienced in instrumentation, testing systems, and technical implementation of advanced non-destructive and load testing methods.",
    image: GroupImg5
  },
  {
    id: 4,
    name: "Raj Karan Kashyap",
    designation: "Senior Engineer",
    qualification:
      "B.Tech (Civil), Amity University | M.Tech (Highway & Transportation Engineering), NIT Patna",
    experience: "Experienced",
    expertise: ["Civil Engineering", "Highway Engineering", "Testing Operations"],
    description:
      "Handles engineering execution, site coordination, and technical support for testing operations and infrastructure-related field activities.",
    image: GroupImg2
  },
  {
    id: 5,
    name: "Mangesh Kumar",
    designation: "Pile Testing Engineer",
    qualification: "Diploma (Civil), Government Polytechnic Sinduria Sonbhadra",
    experience: "Experienced",
    expertise: ["Pile Testing", "Field Execution", "Instrumentation"],
    description:
      "Supports pile testing execution, on-site measurements, equipment handling, and field coordination for foundation testing activities.",
    image: GroupImg3
  },
  {
    id: 6,
    name: "Pankaj Kumar Singh",
    designation: "Admin & Accounts",
    qualification: "MBA, Sikkim Manipal University",
    experience: "Experienced",
    expertise: ["Administration", "Accounts", "Operations Support"],
    description:
      "Manages administrative coordination, financial records, and office operations to ensure smooth project and organizational support.",
    image: GroupImg4
  }
];

export const certifications = [
  {
    id: 1,
    title: "NABL Accredited",
    description: "Pile Load Tests (Static, Cyclic, Lateral & Related Testing)",
    icon: "award",
    number: "NABL Certified"
  },
  {
    id: 2,
    title: "NABL Accredited",
    description: "Non-Destructive Testing (Dynamic Test, PIT, CHSL)",
    icon: "shield-check",
    number: "Testing Quality Assured"
  },
  {
    id: 3,
    title: "ISO 9001:2015",
    description: "Quality Management System Certified",
    icon: "badge-check",
    number: "ISO Certified"
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
  { label: "Foundation Tests", value: "50K+", icon: "bar-chart-2", suffix: "Tests" },
  { label: "Trusted Clients", value: "100+", icon: "users", suffix: "Clients" }
];

export const technologies = [
  {
    id: 1,
    name: "Pile Driving Analyzer (PDA)",
    description:
      "Advanced dynamic testing system used for high strain pile testing and pile capacity estimation.",
    category: "Testing Equipment"
  },
  {
    id: 2,
    name: "PIT Collector System",
    description:
      "Low strain integrity testing equipment for assessing pile continuity, length, and structural integrity.",
    category: "Testing Equipment"
  },
  {
    id: 3,
    name: "CHSL Instrumentation",
    description:
      "Ultrasonic logging equipment used for cross-hole sonic logging and concrete quality assessment.",
    category: "Testing Equipment"
  },
  {
    id: 4,
    name: "Static Load Testing Setup",
    description:
      "Hydraulic jacks, reaction beams, kentledge systems, and precision gauges for static load testing.",
    category: "Testing Equipment"
  },
  {
    id: 5,
    name: "Plate Load Test Setup",
    description:
      "Field setup with hydraulic loading system and dial gauge instrumentation for soil bearing capacity evaluation.",
    category: "Field Testing"
  },
  {
    id: 6,
    name: "Stone Column Load Test Setup",
    description:
      "Load testing arrangement for evaluating the load carrying behavior and settlement of improved ground systems.",
    category: "Field Testing"
  }
];