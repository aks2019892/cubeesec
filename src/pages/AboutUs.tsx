import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Lock, Server, Globe, Code, Cpu, Award, BookOpen, BarChart2 } from 'lucide-react';
import { Link } from 'react-scroll';
const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const features = [
    {
      icon: Shield,
      title: "Advanced Protection",
      description: "Military-grade encryption and threat detection systems"
    },
    {
      icon: Lock,
      title: "Data Security",
      description: "End-to-end encryption for all your sensitive information"
    },
    {
      icon: Server,
      title: "Cloud Defense",
      description: "Comprehensive protection for cloud infrastructure"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "24/7 monitoring across all time zones"
    },
    {
      icon: Code,
      title: "Secure Development",
      description: "Security-first approach to software development"
    },
    {
      icon: Cpu,
      title: "AI-Powered",
      description: "Machine learning for proactive threat detection"
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section 
        ref={ref}
        className="relative overflow-hidden min-h-[80vh] flex items-center bg-gray-900 border-b border-gray-800"
      >
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10">
            
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                style={{ fontFamily: '"Rajdhani", sans-serif' }}
                whileHover={{
                  textShadow: "0 0 15px rgba(139, 92, 246, 0.8)"
                }}
              >
                <span className="text-white">About</span>{' '}
                <span className="text-violet-400">CyberShield</span>
              </motion.h1>
              
              <motion.p 
                className="text-gray-300 text-lg mb-8 max-w-lg"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
              >
                We are a team of cybersecurity experts dedicated to protecting your digital assets from modern threats. Founded in 2015, we've grown to become a trusted partner for businesses worldwide.
              </motion.p>
              
              <div className="flex flex-wrap gap-4">

                <Link
                  to="expertise"
                  smooth={true}
                  duration={500}
                  offset={-80} // optional: adjust for fixed navbar
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-all border border-violet-400/30"
                  >
                    Our Expertise
                  </motion.button>
                </Link>
                <Link
                  to="team"
                  smooth={true}
                  duration={500}
                  offset={-80} // optional: adjust for fixed navbar
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(168, 85, 247, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-all border border-gray-700/50"
                  >
                    Meet The Team
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Main image */}
                <motion.img
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="CyberShield Security"
                  className="rounded-xl shadow-2xl border border-gray-700 w-full h-[500px] object-cover"
                  initial={{ rotate: -1 }}
                  animate={{ rotate: 1 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-black to-blue-900/10 z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "500+", label: "Clients Protected" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "24/7", label: "Support Coverage" },
              { number: "50+", label: "Countries Served" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800 backdrop-blur-sm"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)" }}
              >
                <div className="text-3xl font-bold text-violet-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden border-t border-gray-800">
        <div className="absolute inset-0 z-0 opacity-10">
          
        </div>

        <div id="expertise" className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: '"Rajdhani", sans-serif' }}>
              <span className="text-white">Our</span>{' '}
              <span className="text-violet-400">Expertise</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine cutting-edge technology with deep industry knowledge to deliver unparalleled security solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-violet-400/50 transition-all backdrop-blur-sm"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(168, 85, 247, 0.2)" }}
              >
                <div className="w-14 h-14 rounded-full bg-violet-500/20 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
<section id='team' className="py-24 relative overflow-hidden border-t border-gray-800 bg-gradient-to-b from-gray-900/30 to-black">
  <div  className="max-w-6xl mx-auto px-6 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: '"Rajdhani", sans-serif' }}>
        <span className="text-white">Meet Our</span>{' '}
        <span className="text-violet-400">Leadership Team</span>
      </h2>
      <p className="text-gray-400 max-w-3xl mx-auto text-lg">
        Our cybersecurity experts bring decades of combined experience in protecting businesses worldwide.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        { 
          name: "Gokuleswaran", 
          role: "CEO & Founder", 
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
          bio: "Visionary leader with 15+ years in cybersecurity innovation and business strategy.",
          expertise: ["Strategic Leadership", "Risk Management", "Enterprise Security"]
        },
        { 
          name: "Ganesh Balaji", 
          role: "Chief Technology Officer", 
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
          bio: "Architect of our security platforms with deep expertise in cloud infrastructure.",
          expertise: ["Cloud Security", "DevSecOps", "AI Integration"]
        },
        { 
          name: "Dharaneesh", 
          role: "Head of Security Operations", 
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
          bio: "Former government cybersecurity specialist with threat intelligence expertise.",
          expertise: ["Threat Detection", "Incident Response", "Forensics"]
        },
        { 
          name: "Elisa Rodriguez", 
          role: "Director of Operations", 
          image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
          bio: "Scales security operations for global enterprises with efficiency and precision.",
          expertise: ["Team Leadership", "Process Optimization", "Client Success"]
        }
      ].map((person, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-violet-400/50 transition-all backdrop-blur-sm"
          whileHover={{ 
            y: -5, 
            boxShadow: "0 10px 25px rgba(59, 130, 246, 0.15)"
          }}
        >
          <div className="flex flex-col items-center">
            {/* Reduced image size */}
            <div className="w-36 h-36 mb-6 rounded-full overflow-hidden border-4 border-violet-500/20 shadow-lg">
              <motion.img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Text content with better spacing */}
            <div className="text-center w-full">
              <h3 className="text-xl font-bold mb-1">{person.name}</h3>
              <p className="text-violet-400 mb-3">{person.role}</p>
              <p className="text-gray-300 text-sm mb-4 px-2">{person.bio}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {person.expertise.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-xs bg-gray-800/80 text-gray-300 px-2 py-1 rounded-full border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Background elements */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    
  </div>
</section>

      {/* Advisors Section */}
      <section className="py-24 relative overflow-hidden border-t border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: '"Rajdhani", sans-serif' }}>
              <span className="text-white">Our</span>{' '}
              <span className="text-violet-400">Advisory Board</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Industry leaders who guide our strategic direction and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Dr. Michael Zhang", 
                role: "Cybersecurity Professor, MIT", 
                image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                expertise: ["AI Security", "Research", "Education"]
              },
              { 
                name: "Lisa Rodriguez", 
                role: "Former CISO, Fortune 500", 
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                expertise: ["Enterprise Security", "Compliance", "Risk Management"]
              },
              { 
                name: "David Kim", 
                role: "Venture Capitalist", 
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
                expertise: ["Startups", "Investments", "Emerging Tech"]
              }
            ].map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-violet-400/50 transition-all text-center"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(168, 85, 247, 0.2)" }}
              >
                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-violet-500/30">
                  <motion.img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{person.name}</h3>
                <p className="text-violet-400 mb-4">{person.role}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {person.expertise.map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-24 relative overflow-hidden border-t border-gray-800">
        <div className="absolute inset-0 z-0 opacity-10">
            
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: '"Rajdhani", sans-serif' }}>
              <span className="text-white">Industry</span>{' '}
              <span className="text-violet-400">Insights</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Key statistics that demonstrate the importance of cybersecurity in today's digital landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Global Threat Landscape",
                description: "Cybercrime damages will cost the world $10.5 trillion annually by 2025",
                stat: "300% Increase",
                statDescription: "in cyber attacks since COVID-19 pandemic"
              },
              {
                icon: BookOpen,
                title: "Security Awareness",
                description: "95% of cybersecurity breaches are caused by human error",
                stat: "68% of businesses",
                statDescription: "feel their cybersecurity risks are increasing"
              },
              {
                icon: BarChart2,
                title: "Investment Growth",
                description: "Global cybersecurity market is projected to reach $345 billion by 2026",
                stat: "350% Growth",
                statDescription: "in demand for cybersecurity professionals since 2013"
              }
            ].map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-blue-400/50 transition-all backdrop-blur-sm"
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)" }}
              >
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                  <insight.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{insight.title}</h3>
                <p className="text-gray-400 mb-4">{insight.description}</p>
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{insight.stat}</div>
                  <div className="text-sm text-gray-400">{insight.statDescription}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>
  );
};

export default AboutUs;