
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, CheckCircle, Users, Shield, BarChart2, Clock, Award } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const WebinarForm = () => {
  const [formState, setFormState] = React.useState({
    name: '',
    email: '',
    phone: '',
    businessType: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleBusinessTypeChange = (value: string) => {
    setFormState(prev => ({ ...prev, businessType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Registration Successful!",
        description: "You've been registered for the webinar. Check your email for details.",
      });
      setFormState({
        name: '',
        email: '',
        phone: '',
        businessType: ''
      });
    }, 1000);
  };

  const webinarBenefits = [
    "Master advanced inventory management techniques",
    "Discover AI-powered financial insights and forecasting",
    "Learn one-click GST compliance and automated filing",
    "See how to generate comprehensive business reports in seconds"
  ];

  return (
    <section id="webinar" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 transform transition-all hover:shadow-xl duration-300">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <Award className="h-6 w-6 text-secondary mr-2" />
                Register for Our Exclusive Webinar
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="John Doe" 
                      value={formState.name} 
                      onChange={handleChange} 
                      required
                      className="focus:ring-secondary focus:border-secondary"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      value={formState.email} 
                      onChange={handleChange} 
                      required
                      className="focus:ring-secondary focus:border-secondary"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="(123) 456-7890" 
                      value={formState.phone} 
                      onChange={handleChange} 
                      required
                      className="focus:ring-secondary focus:border-secondary"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="businessType">Business Type</Label>
                    <Select onValueChange={handleBusinessTypeChange} value={formState.businessType}>
                      <SelectTrigger id="businessType" className="focus:ring-secondary focus:border-secondary">
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="services">Professional Services</SelectItem>
                        <SelectItem value="hospitality">Hospitality & Restaurant</SelectItem>
                        <SelectItem value="ecommerce">E-Commerce</SelectItem>
                        <SelectItem value="logistics">Logistics & Distribution</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="construction">Construction</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-secondary hover:bg-secondary-light text-white transition-all duration-300 transform hover:scale-[1.02]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Registering..." : "Secure Your Spot Now"}
                  </Button>
                </div>
              </form>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                By registering, you agree to our Terms of Service and Privacy Policy.
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Revolutionize Your Business Management
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              Join our power-packed webinar to discover how our intelligent business management solution 
              can transform your operations, boost profitability by up to 30%, and ensure total compliance.
            </p>
            
            <div className="bg-primary/5 rounded-lg p-6 mb-8 border border-primary/10 shadow-sm">
              <div className="flex items-start mb-4">
                <Calendar className="h-5 w-5 text-secondary mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-primary">Next Webinar Date</h4>
                  <p>Thursday, May 15th, 2025 at 11:00 AM EST</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <Clock className="h-5 w-5 text-secondary mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-primary">Duration</h4>
                  <p>45 minutes + 15 minutes Q&A session</p>
                </div>
              </div>
              <div className="flex items-start">
                <BarChart2 className="h-5 w-5 text-secondary mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-primary">Expert Presenters</h4>
                  <p>Industry specialists with over 15 years of experience</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
              <Shield className="h-5 w-5 text-secondary mr-2" />
              Why This Webinar Is Essential
            </h3>
            
            <ul className="space-y-3 mb-8">
              {webinarBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-gray-200 rounded-lg p-5">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="bg-secondary/20 p-3 rounded-full">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Limited to 100 Attendees Only</h4>
                  <p className="text-gray-600">
                    Our exclusive webinars fill up rapidly. Register now to get priority access and receive 
                    a complimentary business assessment worth $299 – even if you can't attend live.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarForm;
