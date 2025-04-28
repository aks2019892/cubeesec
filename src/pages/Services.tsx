import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// import methodologyImage from "../images/images.jpg"; // Adjust the path based on your folder structure

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  
  // Background animation elements
  const backgroundElements = Array.from({ length: 20 }).map((_, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: [0, 0.3, 0],
        scale: [0.5, 1.2, 0.5],
      }}
      transition={{
        duration: 5 + Math.random() * 10,
        repeat: Infinity,
        repeatType: 'reverse',
        delay: Math.random() * 5,
      }}
      className="absolute rounded-full bg-violet-500/20"
      style={{
        width: `${Math.random() * 200 + 50}px`,
        height: `${Math.random() * 200 + 50}px`,
        left: `${Math.random() * 80}%`,
        top: `${Math.random() * 80}%`,
      }}
    />
  ));

  return (
    <>
      {/* Main Services Section */}
      <section 
        ref={ref}
        className="relative overflow-hidden min-h-[80vh] flex items-center bg-gray-900 border-b border-gray-800"
      >
        {/* Left side with animated background */}
        <div className="absolute inset-0 z-0 md:relative md:w-1/2">
          <div className="relative h-full w-full p-12 flex items-center">
            {/* Animated background elements */}
            {backgroundElements}
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Web Application Security
                <span className="block text-violet-400 mt-2">Glimpse about Services</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-lg">
                Cutting-edge security solutions to protect your web applications from modern threats and vulnerabilities.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact-us')}
                className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-all"
              >
                Get Protected
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Right side with animated image */}
        <div className="hidden md:block md:w-1/2 relative h-full">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute inset-0 flex items-center justify-center p-12"
          >
            <div className="relative">
              {/* Main image */}
              <motion.img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNlY3VyaXR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt="Web Security"
                className="rounded-xl shadow-2xl border border-gray-700 w-full max-w-lg"
                initial={{ rotate: -2 }}
                animate={{ rotate: 2 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
              
              {/* Floating elements around the image */}
              <motion.div
                className="absolute -top-8 -left-8 bg-violet-600/20 border border-violet-400/30 rounded-lg p-4 backdrop-blur-sm"
                initial={{ y: -20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                <div className="text-violet-400 font-bold">Threat Detection</div>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-8 -right-8 bg-violet-600/20 border border-violet-400/30 rounded-lg p-4 backdrop-blur-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                <div className="text-violet-400 font-bold">Data Protection</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectionsss - Added directly below Services1 */}
      <Section2 />
      <VulnerabilitySection />
      <MethodologySection />
      <VulnerabilitiesSection />
      <WhatToExpectSection />
      <DoYouKnowSection />
      <QuoteSection />
    </>
  );
};

const Section2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section 
      ref={ref}
      className="relative py-20 bg-gray-900 overflow-hidden"
      style={{
        boxShadow: '0 0 15px rgba(168, 85, 247, 0.8)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row gap-8 items-stretch"
        >
          {/* Left Side */}
          <div className="flex-1 py-8">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ x: -30, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            >
              Comprehensive Protection
            </motion.h2>
            
            <motion.p
              className="text-gray-300 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Enterprise-grade security solutions with real-time monitoring and threat intelligence.
              Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.
              These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information.
            </motion.p>
          </div>

          {/* Vertical Divider */}
          <motion.div
            className="hidden md:block h-[500px] w-0.5 mx-4 bg-gradient-to-b from-transparent via-violet-500 to-transparent self-center"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={isInView ? { scaleY: 1, opacity: 1 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: [0.17, 0.67, 0.83, 0.67]
            }}
          />

          {/* Right Side */}
          <div className="flex-1 py-8">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ x: 30, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            >
              24/7 Security Monitoring
            </motion.h2>
            
            <motion.p
              className="text-gray-300 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Proactive threat detection and response systems ensuring your business remains secure around the clock.
              A successful cybersecurity posture has multiple layers of protection spread across computers, networks,
              and programs that one intends to keep safe.
            </motion.p>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-violet-500/10 blur-3xl"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-violet-500/10 blur-3xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 2,
          }}
        />
      </div>
    </section>
  );
};


const VulnerabilitySection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Network Penetration Testing",
      content: "Comprehensive assessment of your network infrastructure to identify vulnerabilities that could be exploited by attackers. Our tests simulate real-world attacks to evaluate your security posture."
    },
    {
      title: "Web Application Testing",
      content: "In-depth analysis of your web applications to uncover security flaws like SQL injection, XSS, and authentication bypass. We test both frontend and backend components."
    },
    {
      title: "Social Engineering Assessment",
      content: "Simulated phishing campaigns and physical security tests to evaluate your team's awareness and resilience against human-targeted attacks."
    }
  ];

  return (
    <section className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Vulnerability and Penetration Testing
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - Subheadings */}
          <div className="md:w-1/3">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {tabs.map((tab, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${activeTab === index ? 'bg-violet-600/20 border-l-4 border-violet-500' : 'bg-gray-800 hover:bg-gray-700'}`}
                  onClick={() => setActiveTab(index)}
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-lg font-semibold text-white">
                    {tab.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Content */}
          <div className="md:w-2/3">
            <motion.div
              key={activeTab}
              className="bg-gray-800 p-8 rounded-xl h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-violet-400 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {tabs[activeTab].title}
              </motion.h3>
              <motion.p
                className="text-gray-300 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {tabs[activeTab].content}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
      
    </section>
  
  );

};



const MethodologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  

  return (
    <section ref={ref} className="py-20 bg-gray-900 border-t border-gray-800">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Methodology
        </motion.h2>

        {/* Flowchart Image - Updated with wider width and side margins */}
        <motion.div 
          className="mt-16 mx-4 md:mx-8"  // Added horizontal margins
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* <img 
            src={methodologyImage} 
            alt="Our 5-step methodology flowchart"
            className="w-full h-auto"  // Changed to w-full to use all available width
          /> */}
        </motion.div>

        {/* Supporting content */}
        <motion.div 
          className="mt-24 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-300 text-lg">
            Our proven 5-step methodology ensures comprehensive security assessment and remediation. 
            Following industry best practices like OWASP and NIST standards, we deliver thorough 
            penetration testing services tailored to your specific needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const VulnerabilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const vulnerabilities = [
    "SQL Injection",
    "Cross-Site Scripting (XSS)",
    "Cross-Site Request Forgery (CSRF)",
    "Insecure Direct Object References",
    "Security Misconfigurations",
    "Sensitive Data Exposure",
    "Broken Authentication",
    "Insufficient Logging & Monitoring",
    "Using Components with Known Vulnerabilities",
    "Insecure Deserialization"
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Common Vulnerabilities We've Cracked
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side - 5 Vulnerabilities */}
          <motion.div 
            className="md:w-1/2 space-y-6 pl-20" // Added pl-8 for left padding
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {vulnerabilities.slice(0, 5).map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <motion.span 
                  className="flex-shrink-0 w-6 h-6 bg-violet-500 rounded-full flex items-center justify-center text-white mr-4 mt-1"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 + index * 0.1 }}
                >
                  {index + 1}
                </motion.span>
                <span className="text-gray-300 text-lg">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Vertical Divider - Only on desktop */}
          <motion.div
            className="hidden md:block h-auto w-0.5 bg-gradient-to-b from-transparent via-violet-500 to-transparent self-center"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          {/* Right Side - 5 Vulnerabilities */}
          <motion.div 
            className="md:w-1/2 space-y-6 pl-20" // Added pl-8 for left padding
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {vulnerabilities.slice(5, 10).map((item, index) => (
              <motion.div
                key={index + 5}
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <motion.span 
                  className="flex-shrink-0 w-6 h-6 bg-violet-500 rounded-full flex items-center justify-center text-white mr-4 mt-1"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 200, delay: 0.5 + index * 0.1 }}
                >
                  {index + 6}
                </motion.span>
                <span className="text-gray-300 text-lg">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Supporting content */}
        <motion.div 
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          
        </motion.div>
      </div>
    </section>
  );
};

const WhatToExpectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -100px 0px" });

  const expectations = [
    {
      title: "Comprehensive Assessment",
      content: "Thorough evaluation using industry-standard tools and manual testing techniques to identify all potential vulnerabilities.",
      image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VjdXJpdHklMjBhc3Nlc3NtZW50fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Detailed Reporting",
      content: "Clear, prioritized reports with risk ratings, proof-of-concept examples, and step-by-step remediation guidance.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVwb3J0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Remediation Support",
      content: "Direct assistance through the patching process with validation testing to ensure complete vulnerability resolution.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3VwcG9ydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Continuous Monitoring",
      content: "Ongoing security surveillance with real-time alerts for new threats and periodic reassessments.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vbml0b3Jpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0,
            transition: { 
              type: "spring", 
              stiffness: 100,
              damping: 10
            } 
          } : {}}
        >
          What to Expect
          <motion.span 
            className="block text-violet-400 text-xl mt-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { 
              opacity: 1,
              transition: { delay: 0.3 }
            } : {}}
          >
            Our Comprehensive Security Process
          </motion.span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expectations.map((item, index) => (
            <motion.div
              key={index}
              className="group relative bg-gray-800 rounded-xl p-6 border-2 border-transparent hover:border-violet-500 transition-all duration-300 h-full"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 80,
                  damping: 10,
                  delay: index * 0.15
                }
              } : {}}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 25px -10px rgba(139, 92, 246, 0.4)",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.1 } 
              }}
            >
              {/* Background glow on hover */}
              <motion.div 
                className="absolute inset-0 rounded-xl bg-violet-500/10 opacity-0 group-hover:opacity-100 blur-md"
                initial={{ scale: 0.8 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Image container */}
              <motion.div
                className="mb-6 overflow-hidden rounded-lg relative"
                initial={{ borderRadius: 20 }}
                whileHover={{ borderRadius: 8 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.5 }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              
              {/* Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { 
                  opacity: 1,
                  transition: { delay: index * 0.15 + 0.4 }
                } : {}}
              >
                <motion.h3
                  className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300"
                  whileHover={{ x: 2 }}
                >
                  {item.title}
                </motion.h3>
                
                <motion.p
                  className="text-gray-300 text-sm leading-relaxed"
                  initial={{ height: 0, opacity: 0 }}
                  animate={isInView ? { 
                    height: "auto",
                    opacity: 1,
                    transition: { 
                      delay: index * 0.15 + 0.5,
                      duration: 0.5 
                    }
                  } : {}}
                >
                  {item.content}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DoYouKnowSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px 0px -50px 0px" });

  return (
    <section ref={ref} className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10
            }
          } : {}}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { 
              opacity: 1,
              transition: { delay: 0.2 }
            } : {}}
          >
            Do You Know?
            <motion.span 
              className="block text-violet-400 text-xl mt-3"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={isInView ? { 
                scale: 1,
                opacity: 1,
                transition: { delay: 0.4 }
              } : {}}
            >
              Cybersecurity Facts You Should Be Aware Of
            </motion.span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="bg-gray-800/50 rounded-xl p-8 md:p-10 border border-gray-700 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { 
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.6,
              duration: 0.8
            }
          } : {}}
          whileHover={{
            boxShadow: "0 10px 30px -10px rgba(139, 92, 246, 0.2)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.p
            className="text-gray-300 text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { 
              opacity: 1,
              transition: { 
                delay: 0.8,
                staggerChildren: 0.1
              }
            } : {}}
          >
            <motion.span
              className="block mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { 
                opacity: 1,
                x: 0,
                transition: { delay: 0.9 }
              } : {}}
            >
              Cyber attacks are now occurring every 39 seconds on average, affecting one in three Americans each year. 
            </motion.span>
            
            <motion.span
              className="block mb-6"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { 
                opacity: 1,
                x: 0,
                transition: { delay: 1.0 }
              } : {}}
            >
              95% of cybersecurity breaches are caused by human error, making employee training just as crucial as technical defenses.
            </motion.span>
            
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { 
                opacity: 1,
                y: 0,
                transition: { delay: 1.1 }
              } : {}}
            >
              The global damage costs from cybercrime are projected to exceed $10.5 trillion annually by 2025, up from $3 trillion in 2015.
            </motion.span>
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { 
            opacity: 1,
            transition: { delay: 1.3 }
          } : {}}
        >
          {/* <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(124, 58, 237, 0.9)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="px-8 py-3 bg-violet-600 text-white font-medium rounded-lg"
          >
            Learn More About Cybersecurity
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};

const QuoteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section 
      ref={ref} 
      className="bg-gray-900 border-t border-gray-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="w-full pt-12 pb-4" // Reduced bottom padding to pb-4
          initial={{ opacity: 0, x: -200 }}
          animate={isInView ? { 
            opacity: 1, 
            x: 0,
            transition: {
              type: "spring",
              stiffness: 60,
              damping: 12
            }
          } : {}}
        >
          <motion.blockquote
            className="text-2xl md:text-3xl font-medium text-white text-center italic pb-6" // Reduced pb-8 to pb-6
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            "Security is not a product, but a process. It's more than just technology,  
            <span className="text-violet-400"> it's about people and practices.</span>"
            <motion.p 
              className="text-violet-300 text-xl mt-4 not-italic"
              initial={{ opacity: 0 }}
              animate={isInView ? { 
                opacity: 1,
                transition: { delay: 0.4 }
              } : {}}
            >
              — Bruce Schneier
            </motion.p>
          </motion.blockquote>
          
          <motion.div
            className="h-px w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent mb-2" // Added mb-2 for minimal space below line
            initial={{ scaleX: 0 }}
            animate={isInView ? {
              scaleX: 1,
              transition: {
                delay: 0.6,
                duration: 1,
                ease: "easeInOut"
              }
            } : {}}
          />
        </motion.div>
      </div>
    </section>
  );
};


export default Services;