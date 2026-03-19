import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
  Building2,
  ShieldCheck
} from 'lucide-react';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../components/ui/select';
import { useToast } from '../hooks/use-toast';

// ===== LOCAL HERO IMAGE =====
import HeroImg from '../assets/images/Picture1.jpg';

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = formatWhatsAppMessage(formData);
    const whatsappNumber = '916376715272'; // country code +91
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    toast({
      title: 'Quote Request Sent!',
      description: 'Your inquiry has been shared on WhatsApp. Our team will contact you shortly.'
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      location: '',
      message: ''
    });

    setIsSubmitting(false);
  };

  const formatWhatsAppMessage = (data) => {
    const serviceMap = {
      'static-load': 'Static Vertical Load Test',
      'lateral-load': 'Lateral Load Test',
      'cyclic-load': 'Cyclic Load Test',
      'hsdpt': 'High Strain Dynamic Test (HSDPT)',
      'pit': 'Low Strain Integrity Test (PIT)',
      'chsl': 'Cross-Hole Sonic Logging (CHSL)',
      'plt': 'Plate Load Test (PLT)',
      'stone-column': 'Stone Column Load Test',
      'piling': 'Piling Works',
      'rock-anchor': 'Rock Anchors / Soil Nailing',
      'other': 'Other Services'
    };

    const serviceName = serviceMap[data.service] || data.service;

    return `*NEW WEBSITE ENQUIRY - COMPACT PILE CONSTRUCTION*

*👤 Client Details*
*Name:* ${data.name}
*Email:* ${data.email}
*Phone:* ${data.phone}
*Company:* ${data.company || 'Not provided'}

*🏗️ Project Requirement*
*Service Required:* ${serviceName}
*Project Location:* ${data.location}

*📝 Project Details*
${data.message || 'No additional project details provided'}

*⏰ Submitted On:* ${new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata'
    })}
*🌐 Source:* Website Contact Form

---
Please connect with the client at the earliest.`;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const offices = [
    {
      title: 'Head Office',
      address: '2nd Floor, D-17, Lajpat Nagar III',
      city: 'New Delhi – 110024',
      phone: '+91 9810208189',
      email: 'compactpile@yahoo.co.in'
    },
    {
      title: 'Registered Office',
      address: 'A-0/34, S.S.G.T. Road',
      city: 'Ghaziabad (U.P.) – 201001',
      phone: '011-41716543',
      email: 'compactpile@yahoo.co.in'
    },
    {
      title: 'Regional Office',
      address: '117, Neppalli Village, Kankipadu Mandal',
      city: 'Krishna, Andhra Pradesh – 521245',
      phone: '+91 9810040857',
      email: 'compactpile@yahoo.co.in'
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <img
          src={HeroImg}
          alt="Contact CompactPile"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#BA0014]/55 to-black/70"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm">
            Contact Us
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let’s Discuss Your Project
          </h1>

          <p className="text-lg md:text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
            Connect with us for pile testing, NDT, plate load testing, stone column testing,
            and dependable geotechnical support solutions.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <Badge className="mb-4 bg-[#BA0014]/10 text-[#BA0014] dark:bg-[#BA0014]/20 dark:text-red-200">
                Request a Quote
              </Badge>

              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Share Your Requirement
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Fill in your details and our team will connect with you for the right testing
                and engineering support.
              </p>

              <Card className="p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Email Address *
                      </label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="yourmail@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Phone Number *
                      </label>
                      <Input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="+91 9876543210"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Company Name
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        placeholder="Company / Organization"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Service Required *
                    </label>

                    <Select
                      value={formData.service}
                      onValueChange={(value) => handleChange('service', value)}
                      required
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="static-load">Static Vertical Load Test</SelectItem>
                        <SelectItem value="lateral-load">Lateral Load Test</SelectItem>
                        <SelectItem value="cyclic-load">Cyclic Load Test</SelectItem>
                        <SelectItem value="hsdpt">High Strain Dynamic Test (HSDPT)</SelectItem>
                        <SelectItem value="pit">Low Strain Integrity Test (PIT)</SelectItem>
                        <SelectItem value="chsl">Cross-Hole Sonic Logging (CHSL)</SelectItem>
                        <SelectItem value="plt">Plate Load Test (PLT)</SelectItem>
                        <SelectItem value="stone-column">Stone Column Load Test</SelectItem>
                        <SelectItem value="piling">Piling Works</SelectItem>
                        <SelectItem value="rock-anchor">Rock Anchors / Soil Nailing</SelectItem>
                        <SelectItem value="other">Other Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Project Location *
                    </label>
                    <Input
                      required
                      value={formData.location}
                      onChange={(e) => handleChange('location', e.target.value)}
                      placeholder="City, State"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Project Details
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your project, site condition, testing requirement, quantity, timeline, or any specific need..."
                      rows={6}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#BA0014] hover:bg-[#9E0011] rounded-xl py-6 text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending to WhatsApp...
                      </span>
                    ) : (
                      <>
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Send Quote Request
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                    Your enquiry will be shared with our team through WhatsApp for a quicker response.
                  </p>
                </form>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <Badge className="mb-4 bg-[#BA0014]/10 text-[#BA0014] dark:bg-[#BA0014]/20 dark:text-red-200">
                Contact Information
              </Badge>

              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Reach Our Team
              </h2>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card
                    key={index}
                    className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-full bg-[#BA0014]/10 flex items-center justify-center">
                        <Building2 className="h-6 w-6 text-[#BA0014]" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {office.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-[#BA0014] flex-shrink-0 mt-1" />
                        <div className="text-gray-600 dark:text-gray-400">
                          <p>{office.address}</p>
                          <p>{office.city}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-[#BA0014] flex-shrink-0" />
                        <a
                          href={`tel:${office.phone}`}
                          className="text-gray-600 dark:text-gray-400 hover:text-[#BA0014] transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-[#BA0014] flex-shrink-0" />
                        <a
                          href={`mailto:${office.email}`}
                          className="text-gray-600 dark:text-gray-400 hover:text-[#BA0014] transition-colors break-all"
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}

                {/* Business Hours */}
                <Card className="p-6 rounded-2xl bg-gradient-to-br from-[#BA0014]/10 to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-[#BA0014]/20 dark:border-gray-800">
                  <div className="flex items-center space-x-3 mb-5">
                    <Clock className="h-6 w-6 text-[#BA0014]" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Business Hours
                    </h3>
                  </div>

                  <div className="space-y-3 text-gray-600 dark:text-gray-400">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </Card>

                {/* Quick Response */}
                <Card className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-gray-50 dark:from-green-900/20 dark:to-gray-900 border border-green-200 dark:border-green-800">
                  <div className="flex items-center space-x-3 mb-4">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      WhatsApp Direct
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                    For a quick response, connect with us directly on WhatsApp.
                  </p>

                  <a
                    href="https://wa.me/916376715272"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition-colors font-medium"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </Card>

                {/* Trust Box */}
                <Card className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="h-6 w-6 text-[#BA0014]" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Trusted Engineering Support
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Our team supports projects across India with dependable testing,
                    technical guidance, and timely project coordination.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <Badge className="mb-4 bg-[#BA0014]/10 text-[#BA0014] dark:bg-[#BA0014]/20 dark:text-red-200">
              Service Reach
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Serving Projects Across India
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We support infrastructure and foundation testing projects across multiple states and sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'North India',
                desc: 'Delhi NCR, Uttar Pradesh, Haryana, Rajasthan, Punjab and nearby regions'
              },
              {
                title: 'Central & East India',
                desc: 'Madhya Pradesh, Bihar, Jharkhand, Chhattisgarh, West Bengal and adjoining states'
              },
              {
                title: 'South & West India',
                desc: 'Maharashtra, Gujarat, Andhra Pradesh, Karnataka, Tamil Nadu and surrounding areas'
              }
            ].map((region, index) => (
              <Card
                key={index}
                className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <MapPin className="h-10 w-10 text-[#BA0014] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {region.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {region.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-gradient-to-r from-[#BA0014] via-[#a00012] to-[#7f000d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Immediate Assistance?
          </h2>

          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Call our team directly for urgent project discussions and quick support.
          </p>

          <a
            href="tel:+919810208189"
            className="inline-flex items-center space-x-3 bg-white text-[#BA0014] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Phone className="h-6 w-6" />
            <span className="text-xl">+91 9810208189</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;