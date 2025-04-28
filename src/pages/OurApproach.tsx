import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export const OurApproach = () => {
  return (
    <>
      <div className="min-h-[60vh] bg-gray-900 flex items-center justify-center pt-10">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-white mb-6">
              Our Approach
            </h1>

            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              We take a proactive cybersecurity approach combining cutting-edge technology with human expertise. 
              Our layered defense strategy identifies vulnerabilities before exploitation, detects threats in real-time, 
              and responds to incidents with precision. Security is integrated at every level, evolving continuously 
              to counter emerging digital threats.
            </motion.p>
          </motion.div>
        </div>
      </div>
      <OptionsSection />
      <ApproachDiagram />
      <QuoteSection />
    </>
  );
};

const OptionsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Threat Intelligence",
      content: "Comprehensive monitoring and analysis of emerging threats specific to your industry. We provide actionable intelligence to proactively defend against new attack vectors."
    },
    {
      title: "Incident Response",
      content: "24/7 rapid response team ready to contain and remediate security breaches. Our proven methodology minimizes damage and recovery time."
    },
    {
      title: "Compliance Management",
      content: "End-to-end compliance solutions for regulations like GDPR, HIPAA, and PCI-DSS. We help implement and maintain required security controls."
    },
    {
      title: "Security Training",
      content: "Customized cybersecurity awareness programs for employees at all levels. Interactive training reduces human error risks significantly."
    },
    {
      title: "Cloud Security",
      content: "Specialized protection for cloud environments including configuration audits, access control reviews, and data encryption strategies."
    },
    {
      title: "IoT Security",
      content: "Comprehensive security framework for Internet of Things devices, including vulnerability assessments and network segmentation."
    },
    {
      title: "Red Team Operations",
      content: "Advanced simulated attacks by our expert team to test your defenses against sophisticated adversaries and attack scenarios."
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
          Options
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

const ApproachDiagram = () => {
  return (
    <section className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Approach Diagram
        </motion.h2>

        <motion.div
          className="bg-gray-800 p-8 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Replace with your actual image path */}
          <img 
            src="/images/approach-diagram.png" 
            alt="Our cybersecurity approach diagram"
            className="w-full h-auto rounded-lg"
          />
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
      className="bg-gray-900 border-t border-gray-800 overflow-hidden py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="w-full pt-12 pb-4"
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
            className="text-2xl md:text-3xl font-medium text-white text-center italic pb-6"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            "The only truly secure system is one that is powered off, cast in a block of concrete  
            <span className="text-violet-400"> and sealed in a lead-lined room with armed guards.</span>"
            <motion.p 
              className="text-violet-300 text-xl mt-4 not-italic"
              initial={{ opacity: 0 }}
              animate={isInView ? { 
                opacity: 1,
                transition: { delay: 0.4 }
              } : {}}
            >
              — Gene Spafford
            </motion.p>
          </motion.blockquote>
          
          <motion.div
            className="h-px w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent mb-2"
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