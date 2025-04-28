import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, Server, Users, CheckCircle, Globe, Clock, Award } from 'lucide-react';// Define custom font
import SplitText from '../components/SplitText';
const fontStyle = {
  fontFamily: '"Rajdhani", "Arial Narrow", sans-serif',
  fontWeight: 500,
  letterSpacing: '0.05em'
};

const services = [
  {
    icon: Shield,
    title: 'Network Security',
    description: 'Protect your network infrastructure with our advanced security solutions.'
  },
  {
    icon: Lock,
    title: 'Data Encryption',
    description: 'Keep your sensitive data safe with military-grade encryption protocols.'
  },
  {
    icon: Server,
    title: 'Cloud Security',
    description: 'Secure your cloud infrastructure against modern threats.'
  },
  {
    icon: Users,
    title: 'Security Training',
    description: 'Empower your team with cybersecurity best practices.'
  }
];

const companies = [
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
];

const stats = [
  { number: '500+', label: 'Clients Protected' },
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '50+', label: 'Security Experts' },
];

const CompaniesCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let position = 0;
    const speed = 0.05;

    const animate = () => {
      position -= speed;
      
      if (position <= -100) {
        position = 0;
      }
      
      container.style.transform = `translateX(${position}%)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    if (!isHovered) {
      animate();
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="overflow-hidden py-12 bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12" style={fontStyle}>TRUSTED BY INDUSTRY LEADERS</h2>
        <div className="relative">
          <div
            ref={containerRef}
            className="flex space-x-16 transition-transform duration-0"
            style={{
              willChange: 'transform',
              width: 'fit-content',
            }}
          >
            {companies.map((company, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 w-48 h-24 flex items-center justify-center group">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-w-full max-h-full opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
            {companies.map((company, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 w-48 h-24 flex items-center justify-center group">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-w-full max-h-full opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface AnimatedImageSectionProps {
  imageUrl: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const AnimatedImageSection = ({ imageUrl, title, description, reverse = false }: AnimatedImageSectionProps) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: reverse ? 150 : -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ margin: "-100px" }}
            style={{ y }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent rounded-lg z-10" />
            <img
              src={imageUrl}
              alt={title}
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover relative z-0"
            />
          </motion.div>
          <motion.div 
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            viewport={{ margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold text-white" style={fontStyle}>{title.toUpperCase()}</h2>
            <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
            {/* <CyberpunkButton variant="primary">
              LEARN MORE
            </CyberpunkButton> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CyberpunkButton = ({ 
  children, 
  className = "", 
  onClick, 
  variant = "primary"
}: { 
  children: React.ReactNode; 
  className?: string; 
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary";
}) => {
  const variants = {
    primary: {
      bg: "bg-gradient-to-br from-purple-600 to-purple-800",
      border: "border-purple-400",
      text: "text-white-300",
      hoverText: "text-purple-400",
      hoverBorder: "border-purple-300",
      clipPath: "polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)",
      glow: "0 0 15px rgba(168, 85, 247, 0)"
    },
    secondary: {
      bg: "bg-gradient-to-br from-gray-100 to-gray-300",
      border: "border-gray-400",
      text: "text-gray-900",
      hoverText: "text-black-200",
      hoverBorder: "border-black-300",
      clipPath: "polygon(0 0, 100% 0, 100% 80%, 85% 100%, 0 100%)",
      glow: "0 0 15px rgba(223, 221, 226, 0.6)"
    },
    tertiary: {
      bg: "bg-gradient-to-br from-gray-700 to-purple-900",
      border: "border-purple-300",
      text: "text-white-300",
      hoverText: "text-purple-100",
      hoverBorder: "border-purple-200",
      clipPath: "polygon(0 0, 100% 0, 100% 60%, 95% 100%, 0 100%)",
      glow: "0 0 15px rgba(168, 85, 247, 0)"
    }
  };

  const currentVariant = variants[variant];

  return (
    <motion.button
      className={`relative overflow-hidden ${className} group font-mono font-bold tracking-wider`}
      onClick={onClick}
      whileHover={{ 
        scale: 1.05,
        boxShadow: currentVariant.glow
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ 
        boxShadow: "0 0 5px rgba(168, 85, 247, 0.3)",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
      style={{
        clipPath: currentVariant.clipPath
      }}
    >
      {/* Metallic background */}
      <div className={`absolute inset-0 ${currentVariant.bg} rounded-sm`} />
      
      {/* Thin metallic border */}
      <div className={`absolute inset-0 border ${currentVariant.border} rounded-sm group-hover:${currentVariant.hoverBorder} transition-all duration-300`} 
           style={{ borderWidth: '1px', clipPath: currentVariant.clipPath }} />
      
      {/* Inner glow layers */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-purple-500/20 rounded-sm" style={{ clipPath: currentVariant.clipPath }} />
        <div className="absolute inset-0 bg-purple-500/10 rounded-sm blur-sm" style={{ clipPath: currentVariant.clipPath }} />
      </div>
      
      {/* Text/content container */}
      <div className={`relative z-10 flex items-center justify-center ${currentVariant.text} group-hover:${currentVariant.hoverText} px-4 py-1`}>
        {children}
      </div>
    </motion.button>
  );
};

const InteractiveCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{ 
        scale: 1.03,
        y: -5,
        boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)"
      }}
      transition={{ 
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }}
      initial={{ 
        y: Math.random() * 10 - 5,
        rotate: Math.random() * 2 - 1
      }}
      whileInView={{ 
        y: 0,
        rotate: 0
      }}
      viewport={{ margin: "-50px" }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50"
        animate={{
          opacity: isHovering ? 1 : 0.7,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 border border-gray-700/50"
        animate={{
          borderColor: isHovering ? "rgba(168, 85, 247, 0.5)" : "rgba(55, 65, 81, 0.5)"
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        animate={{
          background: isHovering ? "radial-gradient(circle at center, rgba(168, 85, 247, 0.1) 0%, transparent 70%)" : "transparent"
        }}
      />
      {children}
    </motion.div>
  );
};

const Security3DSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-black z-0" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold text-white mb-4" style={fontStyle}>NEXT-GENERATION SECURITY SOLUTIONS</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our advanced security infrastructure combines cutting-edge technology with human expertise to provide comprehensive protection against evolving cyber threats.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ margin: "-100px" }}
              className="space-y-4"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Real-time Threat Detection</h3>
                  <p className="text-gray-300">
                    Advanced AI algorithms continuously monitor your network for suspicious activities and potential threats.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Data Protection</h3>
                  <p className="text-gray-300">
                    Enterprise-grade encryption ensures your sensitive data remains secure and protected from unauthorized access.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Server className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Cloud Security</h3>
                  <p className="text-gray-300">
                    Comprehensive protection for your cloud infrastructure with advanced threat prevention and monitoring.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ margin: "-100px" }}
              className="pt-4 flex gap-4"
            >
              <CyberpunkButton variant="primary" className="px-6 py-2">
                EXPLORE SOLUTIONS
              </CyberpunkButton>
              <CyberpunkButton variant="secondary" className="px-6 py-2">
                REQUEST DEMO
              </CyberpunkButton>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative order-1 lg:order-2 h-[600px] w-full"
            style={{ y }}
          >
               
    <div
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        background: 'transparent',
      }}
    >
      <iframe
        src="https://my.spline.design/unchained-jmBej6i5MyvW8aza9tPBromu/"
        frameBorder="0"
        width="100%"
        height="100%"
        loading="lazy"
        title="Spline Unchained"
        allowFullScreen
        style={{
          border: 'none',
          background: 'transparent',
        }}
      />
    </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// const ParticleEffect = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
//       {[...Array(50)].map((_, i) => {
//         const baseX = Math.random() * 40 + 10; 
//         const baseY = Math.random() * 80 + 10; 
//         const range = 5; 
        
//         return (
//           <motion.div
//             key={i}
//             className="absolute w-1 h-1 bg-white rounded-full"
//             initial={{
//               x: `${baseX}%`,
//               y: `${baseY}%`,
//               scale: 0,
//               opacity: 0,
//             }}
//             animate={{
//               x: [
//                 `${baseX}%`,
//                 `${baseX + (Math.random() * range * 2 - range)}%`,
//                 `${baseX}%`
//               ],
//               y: [
//                 `${baseY}%`,
//                 `${baseY + (Math.random() * range * 2 - range)}%`,
//                 `${baseY}%`
//               ],
//               scale: [0, 1.2, 0],
//               opacity: [0, 0.8, 0],
//             }}
//             transition={{
//               duration: Math.random() * 5 + 5, 
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: Math.random() * 2,
//             }}
//             style={{
//               boxShadow: '0 0 5px 1px rgba(255, 255, 255, 0.9)',
//               zIndex: 20
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// };

const DataProtectionSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold text-white mb-4" style={fontStyle}>COMPREHENSIVE DATA PROTECTION</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our data protection solutions ensure your sensitive information remains secure at rest, in transit, and during processing.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ margin: "-100px" }}
              className="space-y-4"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">End-to-End Encryption</h3>
                  <p className="text-gray-300">
                    All data is encrypted using industry-standard algorithms to prevent unauthorized access.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Access Controls</h3>
                  <p className="text-gray-300">
                    Granular permission systems ensure only authorized personnel can access sensitive data.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Compliance Ready</h3>
                  <p className="text-gray-300">
                    Our solutions meet GDPR, HIPAA, and other regulatory requirements out of the box.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ margin: "-100px" }}
            style={{ y }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent rounded-lg z-10" />
            <img
              src="https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80"
              alt="Data Protection"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover relative z-0"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ComponentType<{ className?: string }>, title: string, description: string }) => {
  const Icon = icon;
  return (
    <InteractiveCard className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-purple-400/50 transition-colors backdrop-blur-sm h-full">
      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-purple-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </InteractiveCard>
  );
};

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black">
      <div className="pt-0"></div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0">
            {[...Array(200)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-0.5 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.8 + 0.2,
                }}
              />
            ))}
          </div>
        </div>
        <div className="relative w-full h-screen bg-black overflow-hidden">
             {/* Spline animation - only on large screens */}
      <div className="absolute left-0 w-[40%] h-full z-30 ml-8 hidden lg:block">
        <iframe
          src="https://my.spline.design/chips-bad69885943118c099163c9d35a84c9d/"
          className="w-full h-full border-0 mix-blend-screen"
          title="Cyberpunk 3D Background"
          style={{
            opacity: 0.9,
            filter: "contrast(1.3) brightness(1.1) saturate(1.2)",
          }}
        ></iframe>
      </div>

      {/* Main Content */}
      <div className="absolute right-0 w-full lg:w-[55%] h-full flex items-center justify-center z-20 px-6 lg:pr-12">
        <div className="max-w-2xl">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            {/* 🔥 SplitText replaces the old <h1> here */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-8"
            >
              <SplitText
                text="SECURE YOUR DIGITAL FUTURE"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent text-white"
                delay={100} // animation delay between letters
                textAlign="left" // align text to left
              />
            </motion.div>

            <motion.p
              className="text-lg md:text-2xl lg:text-3xl text-gray-300 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Advanced Cybersecurity Solutions for Modern Enterprises
            </motion.p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-start"
          >
            <CyberpunkButton
              variant="primary"
              className="px-6 py-3 text-base"
              onClick={() => navigate("/contact-us")}
            >
              GET STARTED
            </CyberpunkButton>

            {/* Optional second button */}
            {/* 
            <CyberpunkButton
              variant="secondary"
              className="px-6 py-3 text-base"
              onClick={() => navigate("/services")}
            >
              LEARN MORE
            </CyberpunkButton>
            */}
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 flex justify-start gap-8"
          >
            {[
              { icon: Shield, label: "Advanced Protection" },
              { icon: Lock, label: "Data Security" },
              { icon: Server, label: "Cloud Defense" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-sm text-gray-300">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>


        </div>

      </motion.section>

      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ margin: "-100px" }}
                className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800 backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CompaniesCarousel />

      <Security3DSection />

      <section className="py-24 px-4 bg-black relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold text-center text-white mb-16" style={fontStyle}>OUR SERVICES</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ margin: "-100px" }}
              >
                <InteractiveCard
                  className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-purple-400/50 transition-colors h-full"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>

                  <p className="text-white-700 text-sm">{service.description}</p>
                </InteractiveCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections with Images */}
      <AnimatedImageSection
        imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
        title="Advanced Threat Detection"
        description="Our cutting-edge AI-powered systems continuously monitor your network for potential threats, providing real-time alerts and automated responses to keep your business safe."
      />

      <AnimatedImageSection
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
        title="24/7 Security Operations Center"
        description="Our dedicated team of security experts works around the clock to protect your assets, ensuring immediate response to any security incidents."
        reverse={true}
      />

      {/* New Data Protection Section */}
      <DataProtectionSection />

      {/* Features Section */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold text-center text-white mb-16" style={fontStyle}>WHY CHOOSE CYBERSHIELD?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={CheckCircle}
              title="Proven Expertise"
              description="Decades of experience protecting businesses of all sizes across industries"
            />
            <FeatureCard 
              icon={Globe}
              title="Global Protection"
              description="24/7 monitoring and support with teams across all time zones"
            />
            <FeatureCard 
              icon={Clock}
              title="Instant Response"
              description="Average response time under 5 minutes for critical threats"
            />
            <FeatureCard 
              icon={Award}
              title="Certified Security"
              description="Multiple industry certifications including ISO 27001 and SOC 2"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>
  );
};