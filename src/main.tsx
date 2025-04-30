
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/animations.css'

// Add observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
      entry.target.classList.remove('opacity-0');
    }
  });
}, {
  threshold: 0.1
});

// Observe elements after mount
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  elements.forEach(el => observer.observe(el));
});

createRoot(document.getElementById("root")!).render(<App />);
