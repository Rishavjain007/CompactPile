import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
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
    
    // Mock form submission
    setTimeout(() => {
      toast({
        title: 'Quote Request Submitted!',
        description: 'Our team will contact you within 24 hours.'
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
    }, 1500);
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white backdrop-blur-sm">Contact Us</Badge>
          <h1 className="text-5xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Let's discuss how we can help with your foundation testing needs
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Request a Quote
              </h2>
              <Card className="p-8">
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
                        placeholder="John Doe"
                        className="w-full"
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
                        placeholder="john@company.com"
                        className="w-full"
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
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Company Name
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        placeholder="Company Name"
                        className="w-full"
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
                        <SelectItem value="static-load">Static Pile Load Test</SelectItem>
                        <SelectItem value="lateral-load">Lateral Load Test</SelectItem>
                        <SelectItem value="cyclic-load">Cyclic Load Test</SelectItem>
                        <SelectItem value="hsdpt">High Strain Dynamic Test (HSDPT)</SelectItem>
                        <SelectItem value="pit">Low Strain Integrity Test (PIT)</SelectItem>
                        <SelectItem value="chsl">Cross-Hole Sonic Logging (CHSL)</SelectItem>
                        <SelectItem value="piling">Piling Works</SelectItem>
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
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Project Details
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your project requirements, including pile type, quantity, and testing requirements..."
                      rows={5}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Submit Quote Request
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Contact Information
              </h2>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      {office.title}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                        <div className="text-gray-600 dark:text-gray-400">
                          <p>{office.address}</p>
                          <p>{office.city}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <a
                          href={`tel:${office.phone}`}
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <a
                          href={`mailto:${office.email}`}
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors break-all"
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </Card>
                ))}

                {/* Business Hours */}
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-900">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Business Hours
                    </h3>
                  </div>
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Our Locations
          </h2>
          <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                Map integration can be added here with Google Maps or other service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Call our 24/7 emergency hotline for urgent project needs
          </p>
          <a
            href="tel:+919810208189"
            className="inline-flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <Phone className="h-6 w-6" />
            <span className="text-xl">+91 9810208189</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;