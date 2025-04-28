import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for programmatic navigation
import CPButton from './CyberpunkButton';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  backgroundImage?: string;
  fontStyle?: React.CSSProperties;
}

const CTASection = ({
  title = "READY TO SECURE YOUR BUSINESS?",
  subtitle = "Join thousands of businesses that trust us with their cybersecurity needs.",
  primaryButtonText = "SCHEDULE CONSULTATION",
  // secondaryButtonText = "CONTACT SALES",
  backgroundImage = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
  fontStyle = {
    fontFamily: '"Rajdhani", "Arial Narrow", sans-serif',
    fontWeight: 700,
    letterSpacing: '0.05em'
  }
}: CTASectionProps) => {
  const navigate = useNavigate();  // Create the navigate function

  const handlePrimaryButtonClick = () => {
    navigate('/contact-us');  // Navigate to /contact-us
    window.scrollTo(0, 0);  // Scroll to the top of the page
  };

  return (
    <section className="py-24 px-4 bg-black relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{ backgroundImage: `url(${backgroundImage})` }} 
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold text-white mb-8" style={fontStyle}>
            {title}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Handle button click to navigate and scroll */}
            <CPButton variant="primary" className="px-8 py-2" onClick={handlePrimaryButtonClick}>
              {primaryButtonText}
            </CPButton>

            {/* <CPButton variant="secondary" className="px-8 py-2">
              {secondaryButtonText}
            </CPButton> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
