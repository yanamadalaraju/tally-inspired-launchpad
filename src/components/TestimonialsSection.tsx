
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const handleClick = () => {
    const formSection = document.getElementById('formSection');
    if (formSection) {
      const offsetTop = formSection.offsetTop;
      const offset = 80;
      window.scrollTo({ top: offsetTop - offset, behavior: 'smooth' });
    }
  };
  const testimonials = [
    {
      name: "CHANDRASHEKHAR",
      position: "Mohan & Chandrashekhar CA Firm",
      company: "Tech Innovators",
      image: null, // Will use fallback
      content: "During the pandemic, when there were lot of restrictions, when everyone had to sit at home and complete their book of accounts, Tally was really handy, where we could actually login remotely in our server, login through the servers of our clients and access data from them and finalize accounts. I cannot imagine how we could have finalized such accounts without Tally.",
      rating: 5
    },
    {
      name: "NEERAJ KHANDELWAL",
      position: "Laxmi Educations",
      company: "Laxmi Educations",
      image: null, // Will use fallback
      content: "Tally helps us with our GST rates and HSN numbers clarification and verification and with many more things such as GSTR-2A and GSTR-2B reconciliation. For 2A & 2B reconciliation, we don’t have to go to the GST portal, we can do it right through Tally.",
      rating: 5
    },
    {
      name: "URMI PATEL",
      position: "Operations Manager, Global Services",
      company: "Bajaj Electricals",
      image: null, // Will use fallback
      content: "Tally is a very simple software; it would take around a day or two for the distributor to get accustomed to Tally, and from the next day he would be ready to do all his transactions in Tally.",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Businesses across industries trust our software to streamline their operations
            and drive growth. Here's what they have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 h-full flex flex-col"
            >
              <div className="flex-grow">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              </div>
              
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  {testimonial.image ? (
                    <AvatarImage src={testimonial.image} />
                  ) : (
                    <AvatarFallback className="bg-primary text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 md:p-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Join thousands of satisfied businesses
              </h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Experience the difference our business management software can make for your operations, 
                compliance, and bottom line.
              </p>
              <a href="">
  <button className="bg-white text-primary font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors mx-auto" onClick={handleClick}>
  Claim Your Free Seat Before It’s Gone!
  </button>
</a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
