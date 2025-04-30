
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Award } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface FormState {
  name: string;
  email: string;
  phone: string;
  businessType: string;
}

const WebinarRegistrationForm = () => {
  const [formState, setFormState] = React.useState<FormState>({
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
  
  return (
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
  );
};

export default WebinarRegistrationForm;
