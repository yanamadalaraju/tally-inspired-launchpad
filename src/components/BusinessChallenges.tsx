
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, TrendingUp, ShieldCheck, CircleCheck, Database } from "lucide-react";

const BusinessChallenges = () => {
  const challenges = [
    "Are you collecting payments on time?",
    "Are your suppliers being paid properly?",
    "Are you managing your stock effectively?",
    "Are you filing your GST returns correctly?",
    "Are you tracking your sales team's performance?",
    "Are you matching your bank book with actual transactions?"
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
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">What is Business?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Yes, business is about buying and selling a product or service — but that's just the beginning.
            The real challenge lies in managing what happens after the sale.
          </p>
          
          <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm my-8">
            <p className="text-xl font-medium text-primary mb-6">Ask yourself:</p>
            <div className="grid gap-3 md:gap-4 max-w-2xl mx-auto">
              {challenges.map((challenge, index) => (
                <div 
                  key={index} 
                  className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border-secondary hover:shadow-md transition-shadow duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-gray-700 text-left">{challenge}</span>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-lg text-gray-700 mt-6 font-medium">
            If any of these questions make you think twice, then it's time to level up.
          </p>
          <p className="text-lg text-gray-700 mt-2">
            Don't worry — there's a solution trusted by over 2.5 million businesses!
          </p>
        </div>

        <div className="bg-primary/5 rounded-xl p-6 md:p-10 max-w-4xl mx-auto animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Introducing the BMP (Business Management Process) Introduction Program
            </h3>
            <p className="text-gray-600">
              Your first step toward mastering the #1 Business Management Software for Indian entrepreneurs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-primary mb-4">Discover how to:</h4>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
                    {benefit.icon}
                    <span>{benefit.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Card className="overflow-hidden">
              <CardContent className="p-6 flex flex-col h-full justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-2">Join the BMP Introduction Program</h4>
                  <p className="text-2xl font-bold text-secondary mb-3">Absolutely Free!</p>
                  <p className="text-gray-600 mb-6">
                    Let us show you how proper systems can unlock massive growth.
                  </p>
                </div>
                <Button 
                  className="w-full bg-secondary hover:bg-secondary-light text-white group"
                  size="lg"
                  onClick={() => document.getElementById('webinar')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Take the first step toward business mastery
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessChallenges;
