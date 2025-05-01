
// import React from 'react';
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Check, TrendingUp, ShieldCheck, CircleCheck, Database } from "lucide-react";

// const BusinessChallenges = () => {
//   const challenges = [
//     "Are you collecting payments on time?",
//     "Are your suppliers being paid properly?",
//     "Are you managing your stock effectively?",
//     "Are you filing your GST returns correctly?",
//     "Are you tracking your sales team's performance?",
//     "Are you matching your bank book with actual transactions?"
//   ];

//   const benefits = [
//     {
//       title: "Maximize profit",
//       icon: <TrendingUp className="h-5 w-5 text-secondary" />
//     },
//     {
//       title: "Automate collections and payments",
//       icon: <Check className="h-5 w-5 text-secondary" />
//     },
//     {
//       title: "Streamline supplier and stock management",
//       icon: <Database className="h-5 w-5 text-secondary" />
//     },
//     {
//       title: "Stay 100% GST-compliant",
//       icon: <ShieldCheck className="h-5 w-5 text-secondary" />
//     },
//     {
//       title: "Match your bank book with ease",
//       icon: <Check className="h-5 w-5 text-secondary" />
//     },
//     {
//       title: "Track and optimize sales team performance",
//       icon: <TrendingUp className="h-5 w-5 text-secondary" />
//     },
//     {
//       title: "Get full control over your business operations",
//       icon: <CircleCheck className="h-5 w-5 text-secondary" />
//     }
//   ];

//   return (
//     <section className="py-16 md:py-24 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
//           <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">What is Business?</h2>
//           <p className="text-lg text-gray-600 mb-6">
//             Yes, business is about buying and selling a product or service — but that's just the beginning.
//             The real challenge lies in managing what happens after the sale.
//           </p>
          
//           <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm my-8">
//             <p className="text-xl font-medium text-primary mb-6">Ask yourself:</p>
//             <div className="grid gap-3 md:gap-4 max-w-2xl mx-auto">
//               {challenges.map((challenge, index) => (
//                 <div 
//                   key={index} 
//                   className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-secondary hover:shadow-md transition-shadow duration-200 animate-fade-in"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <span className="text-gray-700 text-left">{challenge}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           <p className="text-lg text-gray-700 mt-6 font-medium">
//             If any of these questions make you think twice, then it's time to level up.
//           </p>
//           <p className="text-lg text-gray-700 mt-2">
//             Don't worry — there's a solution trusted by over 2.5 million businesses!
//           </p>
//         </div>

//         <div className="bg-primary/5 rounded-xl p-6 md:p-10 max-w-4xl mx-auto animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
//           <div className="text-center mb-8">
//             <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
//               Introducing the BMP (Business Management Process) Introduction Program
//             </h3>
//             <p className="text-gray-600">
//               Your first step toward mastering the #1 Business Management Software for Indian entrepreneurs.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h4 className="text-xl font-semibold text-primary mb-4">Discover how to:</h4>
//               <ul className="space-y-3">
//                 {benefits.map((benefit, index) => (
//                   <li key={index} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
//                     {benefit.icon}
//                     <span>{benefit.title}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             <Card className="overflow-hidden">
//               <CardContent className="p-6 flex flex-col h-full justify-between">
//                 <div>
//                   <h4 className="text-xl font-semibold text-primary mb-2">Join the BMP Introduction Program</h4>
//                   <p className="text-2xl font-bold text-secondary mb-3">Absolutely Free!</p>
//                   <p className="text-gray-600 mb-6">
//                     Let us show you how proper systems can unlock massive growth.
//                   </p>
//                 </div>
//                 <Button 
//                   className="w-full bg-secondary hover:bg-secondary-light text-white group"
//                   size="lg"
//                   onClick={() => document.getElementById('webinar')?.scrollIntoView({ behavior: 'smooth' })}
//                 >
//                   Take the first step toward business mastery
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BusinessChallenges;

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Check, 
  TrendingUp, 
  ShieldCheck, 
  CircleCheck, 
  Database 
} from "lucide-react";
import './BusinessChallenge.css';
import ScrollAnimateWrapper from '../components/ScrollAnimateWrapper';
import TestimonialCard from './TestimonialCard';

const BusinessChallenges = () => {
  const challenges = [
    "Are you collecting payments on time?",
    "Are your suppliers being paid properly?",
    "Are you managing your stock effectively?",
    "Are you filing your GST returns correctly?",
    "Are you tracking your sales team's performance?",
    "Are you matching your bank book with actual transactions?"
  ];
  const testimonials = [
    {
      quote: "TallyPrime Solutions transformed our accounting processes. We've reduced month-end closing time by 65% and improved financial accuracy significantly.",
      author: "Rajesh Kumar",
      position: "CFO",
      company: "Sunrise Industries",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      quote: "As a growing retail business, inventory management was our biggest challenge. TallyPrime's integrated solution has given us complete visibility and control.",
      author: "Priya Sharma",
      position: "Operations Director",
      company: "Urban Retail Group",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      quote: "The tax compliance features alone saved us thousands in potential penalties. TallyPrime keeps us updated with the latest regulatory changes automatically.",
      author: "Vikram Singh",
      position: "Managing Director",
      company: "Global Exports Ltd",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
    }
  ];

  const benefits = [
    {
      title: "Maximize profit",
      icon: <TrendingUp className="h-5 w-5 text-secondary" />
    },
    {
      title: "Automate collections and payments",
      icon: <Check className="h-5 w-5 text-secondary" />
    },
    {
      title: "Streamline supplier and stock management",
      icon: <Database className="h-5 w-5 text-secondary" />
    },
    {
      title: "Stay 100% GST-compliant",
      icon: <ShieldCheck className="h-5 w-5 text-secondary" />
    },
    {
      title: "Match your bank book with ease",
      icon: <Check className="h-5 w-5 text-secondary" />
    },
    {
      title: "Track and optimize sales team performance",
      icon: <TrendingUp className="h-5 w-5 text-secondary" />
    },
    {
      title: "Get full control over your business operations",
      icon: <CircleCheck className="h-5 w-5 text-secondary" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-8 p-3 md:p-4 rounded-xl bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-md animate-fade-in">
  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 animate-slide-up">
    What is Business?
  </h2>
  <p className="text-sm md:text-base text-gray-700 mb-3">
    Yes, business is about buying and selling a product or service — but that's just the beginning. The real challenge lies in managing what happens after the sale.
  </p>

  {/* Challenges List */}
  <div className="bg-white p-3 md:p-4 rounded-xl shadow-lg my-4">
    <p className="text-base font-semibold text-secondary mb-3">Ask yourself:</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {challenges.map((challenge, index) => (
        <div
          key={index}
          className="flex items-start gap-2 p-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-200 animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <span className="text-green-500 text-lg mt-1">✅</span>
          <span className="text-gray-800 text-left text-sm md:text-base">{challenge}</span>
        </div>
      ))}
    </div>
  </div>

  <p className="text-sm md:text-base text-gray-800 mt-3 font-medium">
    If any of these questions make you think twice, then it’s time to level up.
  </p>
  <p className="text-sm md:text-base text-gray-800 mt-1">
    Don’t worry — there's a solution trusted by over <span className="font-semibold text-primary">2.5 million businesses</span>!
  </p>
</div>




        {/* Benefits & Call to Action */}
        <div
  className="bg-gradient-to-br from-white via-primary/10 to-gray-200 rounded-2xl p-6 md:p-7 max-w-5xl mx-auto animate-slide-up opacity-0 shadow-lg transition-transform duration-500 hover:scale-105"
  style={{ animationDelay: '0.2s' }}
>
  <div className="text-center mb-6">
    <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-3 animate-fade-in">
      Unlock Your Business Potential with BMP!
    </h3>
    <p className="text-gray-700 text-base md:text-lg mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
      Start mastering the #1 Business Management Software for Indian entrepreneurs and elevate your business operations.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-6">
    {/* Benefits List */}
    <div className="bg-white p-6 rounded-xl shadow-2xl hover:shadow-2xl transition-shadow duration-300 border-l-4 border-primary">
      <h4 className="text-xl font-semibold text-primary mb-4">What You Will Learn:</h4>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li
            key={index}
            className="flex items-center gap-4 text-base animate-fade-in"
            style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
          >
            <span className="text-green-500 text-xl">✅</span>
            <span className="text-gray-800">{benefit.title}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Call to Action Card */}
    <Card className="bg-gradient-to-br from-secondary via-secondary/90 to-secondary-dark text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 transform hover:scale-105">
      <CardContent className="p-6 flex flex-col h-full justify-between">
        <div>
          <h4 className="text-xl font-semibold mb-2">Join Our FREE Program Today!</h4>
          <p className="text-2xl font-bold mb-3">Unlock Your Growth!</p>
          <p className="text-white/90 mb-4">
            Discover how BMP can revolutionize your business by automating tasks, improving decision-making, and boosting growth.
          </p>
        </div>
        <Button
          className="w-full bg-white text-secondary font-semibold hover:bg-gray-100 transition-all transform group"
          size="lg"
          onClick={() => {
            const el = document.getElementById('webinar');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Take the first step toward business mastery
          <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  </div>

  {/* New Section: Testimonials */}
  {/* <div className="text-center mt-8 animate-slide-up">
  <h4 className="text-xl font-semibold text-primary mb-4">What Our Users Say:</h4>
  <div className="space-y-4">
    <div className="flex justify-center items-center space-x-6">
      <div className="text-center p-5 border bg-white rounded-xl shadow-lg animate-slide-in">
        <p className="text-base text-gray-700 mb-3">“This program helped me automate my business and scale up faster than I imagined. Highly recommend!”</p>
        <p className="font-semibold text-primary">Rajesh M., CEO</p>
      </div>
      <div className="text-center p-5 border bg-white rounded-xl shadow-lg animate-slide-in">
        <p className="text-base text-gray-700 mb-3">“I was stuck with managing data. BMP completely transformed how I work. I feel empowered!”</p>
        <p className="font-semibold text-primary">Aarti S., Entrepreneur</p>
      </div>
    </div>
  </div>
</div> */}

</div>

<section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Thousands of businesses rely on TallyPrime Solutions to streamline their operations and drive growth.
              </p>
            </div>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimateWrapper 
                key={index} 
                animation="fade-up" 
                delay={index * 100}
                className="h-full"
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  company={testimonial.company}
                  image={testimonial.image}
                />
              </ScrollAnimateWrapper>
            ))}
          </div>
          
          <ScrollAnimateWrapper animation="fade-up" delay={300}>
            <div className="mt-16 text-center">
              <p className="text-xl text-gray-700 font-semibold mb-8">
                Join 2,000,000+ satisfied businesses using TallyPrime Solutions
              </p>
              <Button size="lg">
                Read Success Stories
              </Button>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>




      </div>
    </section>
  );
};

export default BusinessChallenges;
