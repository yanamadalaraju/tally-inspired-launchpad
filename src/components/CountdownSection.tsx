// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import Button from './Button';

// const CountdownSection: React.FC = () => {
//   const [timeLeft, setTimeLeft] = useState<number>(0);
//   const handleClick = () => {
//     const formSection = document.getElementById('formSection');
//     if (formSection) {
//       const offsetTop = formSection.offsetTop; // Get the top position of the form
//       const offset = 80; // Adjust this value to your header height or preferred offset

//       window.scrollTo({
//         top: offsetTop - offset, // Subtract the offset so the form is fully visible
//         behavior: 'smooth',
//       });
//     }
//   };

//   useEffect(() => {
//     const targetDate = new Date('2025-12-31T23:59:59');
//     const interval = setInterval(() => {
//       const currentTime = new Date().getTime();
//       const timeRemaining = targetDate.getTime() - currentTime;
//       setTimeLeft(timeRemaining > 0 ? timeRemaining : 0);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//   return (
//     <section className="bg-gradient-to-br from-blue-800 via-indigo-800 to-purple-900 py-24 text-white text-center relative overflow-hidden">
//       {/* Decorative Glow Effect */}
//       <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse -z-10" />
//       <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500 opacity-20 blur-3xl rounded-full animate-ping -z-10" />

//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold mb-4 animate-fade-in">
//           🎉 Limited Time Offer
//         </h2>
//         <p className="text-xl mb-8 max-w-xl mx-auto animate-fade-in delay-200">
//           Unlock premium features and early access—sign up before the countdown ends!
//         </p>
//         <div className="flex justify-center gap-4 text-3xl sm:text-5xl font-bold mb-8 tracking-wider">
//           <div className="bg-white/10 px-4 py-2 rounded-lg shadow-lg">
//             <span>{String(days).padStart(2, '0')}</span>
//             <div className="text-sm font-medium mt-1">Days</div>
//           </div>
//           <div className="bg-white/10 px-4 py-2 rounded-lg shadow-lg">
//             <span>{String(hours).padStart(2, '0')}</span>
//             <div className="text-sm font-medium mt-1">Hours</div>
//           </div>
//           <div className="bg-white/10 px-4 py-2 rounded-lg shadow-lg">
//             <span>{String(minutes).padStart(2, '0')}</span>
//             <div className="text-sm font-medium mt-1">Minutes</div>
//           </div>
//           <div className="bg-white/10 px-4 py-2 rounded-lg shadow-lg">
//             <span>{String(seconds).padStart(2, '0')}</span>
//             <div className="text-sm font-medium mt-1">Seconds</div>
//           </div>
//         </div>
//         <Link to="">
//           <Button variant="primary" size="lg" onClick={handleClick}>
//             🚀 Register Now
//           </Button>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default CountdownSection;
import React, { useEffect, useState } from 'react';
import Button from './Button';
import image from '../assets/pngtree-modern.jpg';

const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(10 * 60 * 1000); // 10 mins in ms

  const handleClick = () => {
    const formSection = document.getElementById('formSection');
    if (formSection) {
      const offsetTop = formSection.offsetTop;
      const offset = 80;
      window.scrollTo({ top: offsetTop - offset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        const updated = prev - 1000;
        return updated > 0 ? updated : 0;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-12 text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-purple-500 opacity-20 blur-2xl rounded-full animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-500 opacity-20 blur-2xl rounded-full animate-ping -z-10" />

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left lg:pl-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 animate-fade-in">
            🎉 Limited Time Offer
          </h2>
          <p className="text-md md:text-lg mb-6 max-w-md mx-auto lg:mx-0 text-white/90 animate-fade-in delay-200">
            Get access to exclusive features—sign up before the countdown ends!
          </p>

          <div className="flex justify-center lg:justify-start gap-3 text-2xl font-semibold mb-6 tracking-widest">
            {[{ label: 'Days', value: days }, { label: 'Hours', value: hours }, { label: 'Minutes', value: minutes }, { label: 'Seconds', value: seconds }].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-md shadow-md">
                <span className="block text-center">{String(item.value).padStart(2, '0')}</span>
                <span className="text-xs font-medium mt-1 block">{item.label}</span>
              </div>
            ))}
          </div>

          <Button variant="primary" size="md" onClick={handleClick}>
            🚀 Register Now
          </Button>
        </div>

        {/* Right Image */}
        <div className="flex-1 max-w-sm lg:max-w-md">
          <img
            src={image}
            alt="Limited Offer"
            className="w-full h-auto max-h-[320px] rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
