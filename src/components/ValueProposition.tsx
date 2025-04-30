
import React from 'react';
import { CheckCircle, Database, Shield, ChartBar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ValueProposition = () => {
  const benefits = [
    {
      icon: <CheckCircle className="h-12 w-12 text-secondary" />,
      title: "GST Compliance",
      description: "Automatically generate GST-compliant invoices and file returns with ease."
    },
    {
      icon: <Database className="h-12 w-12 text-secondary" />,
      title: "Automated Accounting",
      description: "Reduce errors and save time with smart, automated accounting processes."
    },
    {
      icon: <ChartBar className="h-12 w-12 text-secondary" />,
      title: "Real-time Reports",
      description: "Access up-to-the-minute financial insights and business analytics."
    },
    {
      icon: <Shield className="h-12 w-12 text-secondary" />,
      title: "Secure Data Storage",
      description: "Keep your business data protected with enterprise-grade security."
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Why Choose Our Business Management Software?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive solution helps businesses of all sizes streamline operations, 
            ensure compliance, and make data-driven decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-lg p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Ideal for Businesses of All Sizes
              </h3>
              <p className="text-gray-600 mb-4">
                Whether you're a small startup or an established enterprise, our software adapts to your 
                specific business needs, providing the tools necessary to manage operations efficiently.
              </p>
              <ul className="space-y-3">
                {[
                  "Save up to 30 hours per month on manual accounting tasks",
                  "Reduce data entry errors by up to 95%",
                  "Gain complete visibility into your business performance",
                  "Ensure 100% tax compliance and avoid penalties"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="text-center">
                  <span className="text-5xl font-bold text-secondary">98%</span>
                  <p className="text-gray-600 mt-2">Customer Satisfaction</p>
                </div>
                <div className="my-6 border-t border-gray-200"></div>
                <div className="flex justify-between">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-primary">10k+</span>
                    <p className="text-sm text-gray-600">Businesses</p>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-primary">24/7</span>
                    <p className="text-sm text-gray-600">Support</p>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-primary">15+</span>
                    <p className="text-sm text-gray-600">Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
