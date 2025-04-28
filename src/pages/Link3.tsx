import { motion } from 'framer-motion';
import { Shield, Lock, Server } from 'lucide-react';

export const Link3 = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Link 3 Page</h1>
          <p className="text-xl text-gray-400">Example content for demonstration purposes</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[Shield, Lock, Server].map((Icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg text-center"
            >
              <Icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-white mb-4">Feature {index + 1}</h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};