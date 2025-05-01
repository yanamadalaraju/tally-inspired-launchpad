
// import React from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Award } from "lucide-react";
// import { useToast } from "@/components/ui/use-toast";

// interface FormState {
//   name: string;
//   email: string;
//   phone: string;
//   businessType: string;
// }

// const WebinarRegistrationForm = () => {
//   const [formState, setFormState] = React.useState<FormState>({
//     name: '',
//     email: '',
//     phone: '',
//     businessType: ''
//   });
//   const [isSubmitting, setIsSubmitting] = React.useState(false);
//   const { toast } = useToast();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormState(prev => ({ ...prev, [name]: value }));
//   };

//   const handleBusinessTypeChange = (value: string) => {
//     setFormState(prev => ({ ...prev, businessType: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false);
//       toast({
//         title: "Registration Successful!",
//         description: "You've been registered for the webinar. Check your email for details.",
//       });
//       setFormState({
//         name: '',
//         email: '',
//         phone: '',
//         businessType: ''
//       });
//     }, 1000);
//   };
  
//   return (
//     <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 transform transition-all hover:shadow-xl duration-300">
//       <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
//         <Award className="h-6 w-6 text-secondary mr-2" />
//         Register for Our Exclusive Webinar
//       </h3>
      
//       <form onSubmit={handleSubmit}>
//         <div className="space-y-4">
//           <div>
//             <Label htmlFor="name">Full Name</Label>
//             <Input 
//               id="name" 
//               name="name" 
//               placeholder="John Doe" 
//               value={formState.name} 
//               onChange={handleChange} 
//               required
//               className="focus:ring-secondary focus:border-secondary"
//             />
//           </div>
          
//           <div>
//             <Label htmlFor="email">Email Address</Label>
//             <Input 
//               id="email" 
//               name="email" 
//               type="email" 
//               placeholder="john@example.com" 
//               value={formState.email} 
//               onChange={handleChange} 
//               required
//               className="focus:ring-secondary focus:border-secondary"
//             />
//           </div>
          
//           <div>
//             <Label htmlFor="phone">Phone Number</Label>
//             <Input 
//               id="phone" 
//               name="phone" 
//               placeholder="(123) 456-7890" 
//               value={formState.phone} 
//               onChange={handleChange} 
//               required
//               className="focus:ring-secondary focus:border-secondary"
//             />
//           </div>
          
//           <div>
//             <Label htmlFor="businessType">Business Type</Label>
//             <Select onValueChange={handleBusinessTypeChange} value={formState.businessType}>
//               <SelectTrigger id="businessType" className="focus:ring-secondary focus:border-secondary">
//                 <SelectValue placeholder="Select business type" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="retail">Retail</SelectItem>
//                 <SelectItem value="manufacturing">Manufacturing</SelectItem>
//                 <SelectItem value="services">Professional Services</SelectItem>
//                 <SelectItem value="hospitality">Hospitality & Restaurant</SelectItem>
//                 <SelectItem value="ecommerce">E-Commerce</SelectItem>
//                 <SelectItem value="logistics">Logistics & Distribution</SelectItem>
//                 <SelectItem value="healthcare">Healthcare</SelectItem>
//                 <SelectItem value="construction">Construction</SelectItem>
//                 <SelectItem value="other">Other</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
          
//           <Button 
//             type="submit" 
//             className="w-full bg-secondary hover:bg-secondary-light text-white transition-all duration-300 transform hover:scale-[1.02]"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? "Registering..." : "Secure Your Spot Now"}
//           </Button>
//         </div>
//       </form>
      
//       <div className="mt-6 text-center text-sm text-gray-500">
//         By registering, you agree to our Terms of Service and Privacy Policy.
//       </div>
//     </div>
//   );
// };

// export default WebinarRegistrationForm;

// import React from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Award, CheckCircle } from "lucide-react";
// import { useToast } from "@/components/ui/use-toast";

// interface FormState {
//   name: string;
//   email: string;
//   phone: string;
//   businessType: string;
// }

// const WebinarRegistrationForm = () => {
//   const [formState, setFormState] = React.useState<FormState>({
//     name: '',
//     email: '',
//     phone: '',
//     businessType: ''
//   });
//   const [isSubmitting, setIsSubmitting] = React.useState(false);
//   const [registrationSuccess, setRegistrationSuccess] = React.useState(false);
//   const { toast } = useToast();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormState(prev => ({ ...prev, [name]: value }));
//   };

//   const handleBusinessTypeChange = (value: string) => {
//     setFormState(prev => ({ ...prev, businessType: value }));
//   };

  

//   return (
//     <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 transform transition-all hover:shadow-xl duration-300">
//       {!registrationSuccess ? (
//         <>
//           <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
//             <Award className="h-6 w-6 text-secondary mr-2" />
//             Register for Our Exclusive Webinar
//           </h3>

//           <form>
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="name">Full Name</Label>
//                 <Input
//                   id="name"
//                   name="name"
//                   placeholder="John Doe"
//                   value={formState.name}
//                   onChange={handleChange}
//                   required
//                   className="focus:ring-secondary focus:border-secondary"
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="email">Email Address</Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="john@example.com"
//                   value={formState.email}
//                   onChange={handleChange}
//                   required
//                   className="focus:ring-secondary focus:border-secondary"
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="phone">Phone Number</Label>
//                 <Input
//                   id="phone"
//                   name="phone"
//                   placeholder="(123) 456-7890"
//                   value={formState.phone}
//                   onChange={handleChange}
//                   required
//                   className="focus:ring-secondary focus:border-secondary"
//                 />
//               </div>

//               <div>
//                 <Label htmlFor="businessType">Business Type</Label>
//                 <Select onValueChange={handleBusinessTypeChange} value={formState.businessType}>
//                   <SelectTrigger id="businessType" className="focus:ring-secondary focus:border-secondary">
//                     <SelectValue placeholder="Select business type" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="retail">Retail</SelectItem>
//                     <SelectItem value="manufacturing">Manufacturing</SelectItem>
//                     <SelectItem value="services">Professional Services</SelectItem>
//                     <SelectItem value="hospitality">Hospitality & Restaurant</SelectItem>
//                     <SelectItem value="ecommerce">E-Commerce</SelectItem>
//                     <SelectItem value="logistics">Logistics & Distribution</SelectItem>
//                     <SelectItem value="healthcare">Healthcare</SelectItem>
//                     <SelectItem value="construction">Construction</SelectItem>
//                     <SelectItem value="other">Other</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full bg-secondary hover:bg-secondary-light text-white transition-all duration-300 transform hover:scale-[1.02]"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Registering..." : "Secure Your Spot Now"}
//               </Button>
//             </div>
//           </form>

//           <div className="mt-6 text-center text-sm text-gray-500">
//             By registering, you agree to our Terms of Service and Privacy Policy.
//           </div>
//         </>
//       ) : (
//         <div className="text-center p-6 space-y-4">
//           <CheckCircle className="h-14 w-14 text-green-500 mx-auto" />
//           <h2 className="text-2xl font-bold text-green-700">Successfully Registered!</h2>
//           <p className="text-gray-600">Thank you for registering. We've sent the webinar details to your email.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WebinarRegistrationForm;
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Award, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface FormState {
  identity: string;
  customIdentity: string;
  name: string;
  email: string;
  phone: string;
  businessType: string;
  customBusinessType: string;
}

const WebinarRegistrationForm = () => {
  const [formState, setFormState] = React.useState<FormState>({
    identity: '',
    customIdentity: '',
    name: '',
    email: '',
    phone: '',
    businessType: '',
    customBusinessType: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleIdentityChange = (value: string) => {
    setFormState(prev => ({
      ...prev,
      identity: value,
      customIdentity: value === 'other' ? '' : '',
    }));
  };

  const handleBusinessTypeChange = (value: string) => {
    setFormState(prev => ({
      ...prev,
      businessType: value,
      customBusinessType: value === 'other' ? '' : ''
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setFormState({
        identity: '',
        customIdentity: '',
        name: '',
        email: '',
        phone: '',
        businessType: '',
        customBusinessType: ''
      });
    }, 1000);
  };

  return (
    <div className="space-y-3">
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 md:p-4 transition-all duration-300">
        {isSubmitted ? (
          <>
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 transition-all duration-300">
              <div className="text-center py-6 px-2">
                <CheckCircle className="w-9 h-9 text-green-500 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-primary mb-1">
                  Successfully Registered!
                </h3>
                <p className="text-gray-600 text-sm">
                  Thank you for registering. We've sent the webinar details to your email.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 mt-4 p-4 transition-all duration-500 animate-slide-in-down">
              <h4 className="text-base font-semibold text-secondary mb-2">✨ What to Expect Next</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>📩 Check your inbox for a confirmation email with webinar details.</li>
                <li>🗓 Add the webinar date to your calendar to not miss it!</li>
                <li>🎁 Bonus materials will be shared during the live session.</li>
                <li>💬 Join our pre-event group to network with fellow attendees.</li>
              </ul>
              <div className="mt-3 text-sm text-gray-500">
                Need help? Contact us at <a href="mailto:support@yourcompany.com" className="text-primary underline">support@yourcompany.com</a>
              </div>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-lg font-bold text-primary mb-3 flex items-center">
              <Award className="h-5 w-5 text-secondary mr-2" />
              Register for Our Exclusive Webinar
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="space-y-1.5 text-sm">

                {/* Identity Dropdown */}
                <div>
                  <Label htmlFor="identity">I am *</Label>
                  <Select
                    onValueChange={handleIdentityChange}
                    value={formState.identity}
                    required
                  >
                    <SelectTrigger id="identity" className="focus:ring-secondary focus:border-secondary py-1.5 text-sm">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business_owner">Business Owner</SelectItem>
                      <SelectItem value="accountant">Accountant</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {formState.identity === 'other' && (
                    <Input
                      name="customIdentity"
                      placeholder="Please specify"
                      value={formState.customIdentity}
                      onChange={handleChange}
                      required
                      className="mt-1 py-1.5 text-sm"
                    />
                  )}
                </div>

                {/* Name */}
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="focus:ring-secondary focus:border-secondary py-1.5 text-sm"
                  />
                </div>

                {/* Email */}
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
                    className="focus:ring-secondary focus:border-secondary py-1.5 text-sm"
                  />
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="(123) 456-7890"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                    className="focus:ring-secondary focus:border-secondary py-1.5 text-sm"
                  />
                </div>

                {/* Business Type */}
                <div>
                  <Label htmlFor="businessType">Business Type</Label>
                  <Select
                    onValueChange={handleBusinessTypeChange}
                    value={formState.businessType}
                    required
                  >
                    <SelectTrigger
                      id="businessType"
                      className="focus:ring-secondary focus:border-secondary py-1.5 text-sm"
                    >
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
                  {formState.businessType === 'other' && (
                    <Input
                      name="customBusinessType"
                      placeholder="Please specify your business type"
                      value={formState.customBusinessType}
                      onChange={handleChange}
                      required
                      className="mt-1 py-1.5 text-sm"
                    />
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary-light text-white transition-all duration-300 transform hover:scale-[1.01] py-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Registering..." : "Secure Your Spot Now"}
                </Button>
              </div>
            </form>

            <div className="mt-3 text-center text-xs text-gray-500">
              By registering, you agree to our Terms of Service and Privacy Policy.
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WebinarRegistrationForm;
