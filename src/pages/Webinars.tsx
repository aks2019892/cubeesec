import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, Video, Award, Shield, Lock, Code, Globe, BookOpen, GraduationCap, Network, ShieldCheck, Handshake, Rocket } from 'lucide-react';

// Type definitions
interface Webinar {
  id: number;
  title: string;
  date: string;
  time: string;
  duration: string;
  speaker: string;
  speakerTitle: string;
  description: string;
  category: string;
  recordingAvailable: boolean;
  attendees: number;
  image: string;
  topics: string[];
}

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

interface WebinarCardProps {
  webinar: Webinar;
  expanded: boolean;
  onClick: () => void;
}

interface MissionCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay: number;
}

// Custom font style
const fontStyle = {
  fontFamily: '"Rajdhani", "Arial Narrow", sans-serif',
  fontWeight: 700,
  letterSpacing: '0.05em'
};

// Webinar data
const webinars: Webinar[] = [
  {
    id: 1,
    title: "Zero-Day Exploits: Defense Strategies",
    date: "2023-11-15",
    time: "18:00",
    duration: "90 mins",
    speaker: "Dr. Sarah Chen",
    speakerTitle: "Chief Security Architect, FortiGuard",
    description: "Learn advanced techniques to protect against unknown vulnerabilities with real-world case studies from recent attacks.",
    category: "advanced",
    recordingAvailable: true,
    attendees: 1245,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    topics: ["Zero-day vulnerabilities", "Patch management", "Threat intelligence", "Incident response"]
  },
  {
    id: 2,
    title: "Ethical Hacking 101",
    date: "2023-11-22",
    time: "16:00",
    duration: "120 mins",
    speaker: "James Rodriguez",
    speakerTitle: "Senior Penetration Tester, Bugcrowd",
    description: "Introduction to ethical hacking methodologies and hands-on exercises with our virtual lab environment.",
    category: "beginner",
    recordingAvailable: false,
    attendees: 0,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
    topics: ["Penetration testing", "Vulnerability assessment", "Security tools", "Legal considerations"]
  },
  {
    id: 3,
    title: "Cloud Security Masterclass",
    date: "2023-12-05",
    time: "14:00",
    duration: "150 mins",
    speaker: "Priya Patel",
    speakerTitle: "AWS Security Lead",
    description: "Comprehensive guide to securing cloud infrastructure across AWS, Azure and GCP platforms.",
    category: "intermediate",
    recordingAvailable: false,
    attendees: 0,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    topics: ["Cloud architecture", "IAM policies", "Data encryption", "Compliance frameworks"]
  },
  {
    id: 4,
    title: "Career Pathways in Cybersecurity",
    date: "2023-12-12",
    time: "17:30",
    duration: "60 mins",
    speaker: "Michael Johnson",
    speakerTitle: "CISO, Global Bank Corp",
    description: "Panel discussion with industry leaders about building successful careers in cybersecurity.",
    category: "all-levels",
    recordingAvailable: false,
    attendees: 0,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
    topics: ["Career growth", "Certifications", "Industry trends", "Networking strategies"]
  }
];

const categories: Category[] = [
  { id: 'all', name: 'All Webinars', icon: Video },
  { id: 'beginner', name: 'Beginner', icon: Shield },
  { id: 'intermediate', name: 'Intermediate', icon: Lock },
  { id: 'advanced', name: 'Advanced', icon: Code },
  { id: 'all-levels', name: 'All Levels', icon: Globe }
];

const MissionCard: React.FC<MissionCardProps> = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 backdrop-blur-sm"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -10, boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)" }}
  >
    <div className="bg-purple-600/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
      <Icon className="w-7 h-7 text-purple-400" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, avatar }) => (
  <motion.div 
    className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 backdrop-blur-sm"
    whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)" }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-start mb-4">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h4 className="text-white font-semibold">{name}</h4>
        <p className="text-purple-400 text-sm">{role}</p>
      </div>
    </div>
    <p className="text-gray-300 italic">"{quote}"</p>
  </motion.div>
);

const WebinarCard: React.FC<WebinarCardProps> = ({ webinar, expanded, onClick }) => (
  <motion.div
    className={`overflow-hidden rounded-xl border ${expanded ? 'border-purple-500' : 'border-gray-800'} bg-gray-900/50 backdrop-blur-sm`}
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative">
      <img 
        src={webinar.image} 
        alt={webinar.title} 
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-xl font-bold text-white">{webinar.title}</h3>
        <div className="flex items-center text-sm text-purple-300 mt-1">
          <Users className="w-4 h-4 mr-1" />
          <span>{webinar.attendees} attendees</span>
        </div>
      </div>
      {webinar.recordingAvailable && (
        <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
          Recording Available
        </div>
      )}
    </div>

    <motion.div
      className="p-4"
      layout
      animate={{ height: expanded ? 'auto' : 'auto' }}
    >
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center text-gray-300">
          <Calendar className="w-5 h-5 mr-2 text-purple-400" />
          <span>{new Date(webinar.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <Clock className="w-5 h-5 mr-2 text-purple-400" />
          <span>{webinar.time} ({webinar.duration})</span>
        </div>
      </div>

      <p className="text-gray-300 mb-4">{webinar.description}</p>

      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
          <Users className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <h4 className="text-white font-medium">{webinar.speaker}</h4>
          <p className="text-purple-300 text-sm">{webinar.speakerTitle}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button 
          className="text-purple-400 hover:text-purple-300 text-sm font-medium"
          onClick={onClick}
        >
          {expanded ? 'Show Less' : 'Learn More'}
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          {webinar.recordingAvailable ? 'Watch Now' : 'Register Now'}
        </button>
      </div>

      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 pt-4 border-t border-gray-800"
        >
          <h4 className="text-white font-medium mb-2">Key Topics Covered:</h4>
          <ul className="text-gray-300 space-y-2">
            {webinar.topics.map((topic, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purple-400 mr-2">✓</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  </motion.div>
);

const WebinarsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedWebinar, setExpandedWebinar] = useState<number | null>(null);

  const filteredWebinars = selectedCategory === 'all' 
    ? webinars 
    : webinars.filter(webinar => webinar.category === selectedCategory);

  const toggleWebinar = (id: number) => {
    setExpandedWebinar(expandedWebinar === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-b from-purple-900/10 to-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="inline-block mb-6"
            >
              <div className="bg-purple-600/20 px-4 py-2 rounded-full border border-purple-500 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 mr-2 text-purple-300" />
                <span className="text-purple-300 font-medium">CUBeeSEC KNOWLEDGE HUB</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              style={fontStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Secure. Learn. <span className="text-purple-400">Collaborate.</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Empowering the next generation of cybersecurity professionals through education and community
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center gap-4"
            >
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                <Rocket className="w-5 h-5 mr-2" />
                Join Our Community
              </button>
              <button className="bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
                <Video className="w-5 h-5 mr-2" />
                Explore Webinars
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ margin: "-100px" }}
          >
            <motion.h2 
              className="text-3xl font-bold mb-4"
              style={fontStyle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              OUR <span className="text-purple-400">MISSION</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              At CUBeeSEC, we're building a global community where cybersecurity enthusiasts can learn, 
              collaborate, and grow together through hands-on education and real-world experiences.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MissionCard 
              icon={BookOpen} 
              title="Education" 
              description="Democratizing cybersecurity knowledge through accessible, high-quality resources."
              delay={0}
            />
            <MissionCard 
              icon={Network} 
              title="Community" 
              description="Connecting like-minded individuals to share knowledge and opportunities."
              delay={1}
            />
            <MissionCard 
              icon={GraduationCap} 
              title="Mentorship" 
              description="Bridging the gap between students and industry professionals."
              delay={2}
            />
            <MissionCard 
              icon={Handshake} 
              title="Collaboration" 
              description="Fostering partnerships to solve real-world security challenges."
              delay={3}
            />
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-purple-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ margin: "-100px" }}
          >
            <motion.h2 
              className="text-3xl font-bold mb-4"
              style={fontStyle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              WHAT WE <span className="text-purple-400">COVER</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Our webinars and workshops span the entire cybersecurity spectrum, from fundamentals to cutting-edge research.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Ethical Hacking", "Cloud Security", "Threat Intelligence", 
              "Digital Forensics", "IoT Security", "Network Defense",
              "Cryptography", "Compliance", "Incident Response", "Career Growth"
            ].map((topic, index) => (
              <motion.div
                key={topic}
                className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(168, 85, 247, 0.2)" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="bg-purple-600/20 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-white font-medium">{topic}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 bg-black sticky top-0 z-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-wrap justify-center gap-2 md:gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Webinars Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            style={fontStyle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ margin: "-100px" }}
          >
            {selectedCategory === 'all' 
              ? 'UPCOMING LEARNING SESSIONS' 
              : `${selectedCategory.toUpperCase()} LEVEL SESSIONS`}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredWebinars.map((webinar) => (
                <WebinarCard
                  key={webinar.id}
                  webinar={webinar}
                  expanded={expandedWebinar === webinar.id}
                  onClick={() => toggleWebinar(webinar.id)}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-b from-black to-purple-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            style={fontStyle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ margin: "-100px" }}
          >
            OUR <span className="text-purple-400">COMMUNITY</span> SPEAKS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="CUBeeSEC's hands-on approach helped me transition from a CS student to a security analyst in just 6 months."
              name="Alex Johnson"
              role="Security Analyst at CyberSafe"
              avatar="https://randomuser.me/api/portraits/men/32.jpg"
            />
            <TestimonialCard
              quote="The community projects gave me practical experience that was invaluable during job interviews."
              name="Maria Garcia"
              role="Cybersecurity Intern"
              avatar="https://randomuser.me/api/portraits/women/44.jpg"
            />
            <TestimonialCard
              quote="As an educator, I recommend CUBeeSEC to all my students for their practical, real-world focused approach."
              name="Dr. Robert Chen"
              role="Professor of Cybersecurity"
              avatar="https://randomuser.me/api/portraits/men/75.jpg"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ margin: "-100px" }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1.1, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 3 
              }}
              className="inline-block mb-6"
            >
              <Award className="w-16 h-16 text-purple-400 mx-auto" />
            </motion.div>
            <h2 className="text-3xl font-bold text-white mb-6" style={fontStyle}>
              READY TO <span className="text-purple-400">LEVEL UP</span> YOUR SKILLS?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students and professionals in our cybersecurity learning community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                <GraduationCap className="w-5 h-5 mr-2" />
                STUDENT MEMBERSHIP
              </button>
              <button className="bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                <Handshake className="w-5 h-5 mr-2" />
                INDUSTRY PARTNERSHIP
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebinarsPage;