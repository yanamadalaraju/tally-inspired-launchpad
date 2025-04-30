
import React from 'react';
import { 
  Users, Server, ChartBar, Shield, 
  Calendar, Database, Smartphone, Settings 
} from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Multi-User Access",
      description: "Enable team collaboration with role-based access controls for different departments."
    },
    {
      icon: <ChartBar className="h-8 w-8 text-secondary" />,
      title: "Real-Time Reporting",
      description: "Access up-to-date financial reports and business analytics instantly."
    },
    {
      icon: <Server className="h-8 w-8 text-secondary" />,
      title: "Cloud Backup",
      description: "Never lose your data with automatic cloud backups and easy restoration."
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: "Enhanced Security",
      description: "Protect sensitive business data with enterprise-grade encryption protocols."
    },
    {
      icon: <Calendar className="h-8 w-8 text-secondary" />,
      title: "Payment Scheduling",
      description: "Schedule recurring payments and never miss a vendor payment deadline."
    },
    {
      icon: <Database className="h-8 w-8 text-secondary" />,
      title: "Inventory Management",
      description: "Track stock levels, set reorder points, and manage purchase orders efficiently."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-secondary" />,
      title: "Mobile Access",
      description: "Manage your business on the go with our responsive mobile application."
    },
    {
      icon: <Settings className="h-8 w-8 text-secondary" />,
      title: "Customizable Workflow",
      description: "Tailor the software to match your unique business processes and requirements."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Powerful Features for Your Business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive suite of tools is designed to streamline your business operations
            and drive productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="flex flex-col h-full">
                <div className="bg-primary/5 p-4 rounded-lg inline-flex mb-4 group-hover:bg-secondary/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 flex-grow">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-primary rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 md:p-10 text-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to transform your business?</h3>
                  <p className="text-white/80 max-w-lg">
                    Start streamlining your operations and boost productivity today with our comprehensive solution.
                  </p>
                </div>
                <button className="bg-white text-primary font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Start Your Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
