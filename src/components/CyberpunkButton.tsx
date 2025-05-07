import { motion } from 'framer-motion';
import React from 'react';

interface CyberpunkButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary";
}

const CyberPunkButton = ({ 
  children, 
  className = "", 
  onClick, 
  variant = "primary"
}: CyberpunkButtonProps) => {
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
    primary2: {
      bg: "bg-gradient-to-br from-blue-500 to-purple-600",
      border: "border-blue-400",
      text: "text-white-300",
      hoverText: "text-blue-300",
      hoverBorder: "border-blue-300",
      clipPath: "polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)",
      glow: "0 0 15px rgba(96, 165, 250, 0)" // Using blue-400 rgba value
    },
    secondary: {
      bg: "bg-gradient-to-br from-white-700 to-white-900",
      border: "border-gray-400",
      text: "text-black-300",
      hoverText: "text-black-200",
      hoverBorder: "border-black-300",
      clipPath: "polygon(0 0, 100% 0, 100% 80%, 85% 100%, 0 100%)",
      glow: "0 0 15px rgba(223, 221, 226, 0.6)"
    },
    tertiary: {
      bg: "bg-gradient-to-br from-purple-700 to-purple-900",
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
      <div className={`absolute inset-0 ${currentVariant.bg} rounded-sm`} />
      <div className={`absolute inset-0 border ${currentVariant.border} rounded-sm group-hover:${currentVariant.hoverBorder} transition-all duration-300`} 
           style={{ borderWidth: '1px', clipPath: currentVariant.clipPath }} />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-purple-500/20 rounded-sm" style={{ clipPath: currentVariant.clipPath }} />
        <div className="absolute inset-0 bg-purple-500/10 rounded-sm blur-sm" style={{ clipPath: currentVariant.clipPath }} />
      </div>
      <div className={`relative z-10 flex items-center justify-center ${currentVariant.text} group-hover:${currentVariant.hoverText} px-4 py-1`}>
        {children}
      </div>
    </motion.button>
  );
};
export default CyberPunkButton;