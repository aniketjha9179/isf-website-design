import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const StockimgAnimation = () => {
  // Social media icons data
  const socialIcons = [
    { name: 'Instagram', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png', color: '#E4405F' },
    { name: 'TikTok', url: 'https://cdn-icons-png.flaticon.com/512/3046/3046121.png', color: '#000000' },
    { name: 'LinkedIn', url: 'https://cdn-icons-png.flaticon.com/512/174/174857.png', color: '#0077B5' },
    { name: 'YouTube', url: 'https://cdn-icons-png.flaticon.com/512/174/174883.png', color: '#FF0000' },
    { name: 'Twitter', url: 'https://cdn-icons-png.flaticon.com/512/124/124021.png', color: '#1DA1F2' }
  ];

  const orbitingSocial = [
    { name: 'TikTok', url: 'https://cdn-icons-png.flaticon.com/512/3046/3046121.png', radius: 100, delay: 0, size: 40 },
    { name: 'LinkedIn', url: 'https://cdn-icons-png.flaticon.com/512/174/174857.png', radius: 100, delay: 144, size: 40 },
    { name: 'Instagram', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png', radius: 160, delay: 0, size: 50, reverse: true },
    { name: 'YouTube', url: 'https://cdn-icons-png.flaticon.com/512/174/174883.png', radius: 160, delay: 120, size: 50, reverse: true },
    { name: 'Twitter', url: 'https://cdn-icons-png.flaticon.com/512/124/124021.png', radius: 160, delay: 240, size: 50, reverse: true }
  ];

  // Connection lines data
  const connections = [
    { from: { x: 640, y: 30 }, to: { x: 350, y: 170 }, gradient: 'url(#gradient1)' },
    { from: { x: 640, y: 100 }, to: { x: 350, y: 170 }, gradient: 'url(#gradient2)' },
    { from: { x: 640, y: 170 }, to: { x: 350, y: 170 }, gradient: 'url(#gradient3)' },
    { from: { x: 640, y: 240 }, to: { x: 350, y: 170 }, gradient: 'url(#gradient4)' },
    { from: { x: 640, y: 310 }, to: { x: 350, y: 170 }, gradient: 'url(#gradient5)' },
    { from: { x: 350, y: 170 }, to: { x: 60, y: 170 }, gradient: 'url(#gradient6)' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full max-w-7xl mx-auto px-4 gap-8">
        
        {/* Left Side - Connection Diagram */}
        <div className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-white p-8">
          <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
            
            {/* User Icon */}
            <div className="flex flex-col justify-center">
              <motion.div 
                className="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-gray-400 p-3 shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <User size={24} className="text-gray-800" />
              </motion.div>
            </div>

            {/* Center Logo */}
            <div className="flex flex-col justify-center">
              <motion.div 
                className="z-10 size-16 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-purple-600 shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-white font-bold text-lg">S</span>
              </motion.div>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-col justify-center gap-2">
              {socialIcons.map((social, index) => (
                <motion.div
                  key={social.name}
                  className="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-2 shadow-lg"
                  whileHover={{ scale: 1.15, x: -5 }}
                  transition={{ type: "spring", stiffness: 400, delay: index * 0.1 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <img 
                    src={social.url} 
                    alt={social.name}
                    className="w-8 h-8 object-contain rounded-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Animated Connection Lines */}
          <svg 
            className="pointer-events-none absolute left-0 top-0 w-full h-full"
            viewBox="0 0 700 340"
          >
            <defs>
              {connections.map((_, index) => (
                <linearGradient key={index} id={`gradient${index + 1}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffaa40" stopOpacity="0" />
                  <stop offset="20%" stopColor="#ffaa40" />
                  <stop offset="60%" stopColor="#9c40ff" />
                  <stop offset="100%" stopColor="#9c40ff" stopOpacity="0" />
                </linearGradient>
              ))}
            </defs>
            
            {connections.map((connection, index) => (
              <g key={index}>
                <path
                  d={`M ${connection.from.x},${connection.from.y} Q ${(connection.from.x + connection.to.x) / 2},${connection.from.y} ${connection.to.x},${connection.to.y}`}
                  stroke="gray"
                  strokeWidth="2"
                  strokeOpacity="0.1"
                  fill="none"
                  strokeLinecap="round"
                />
                <motion.path
                  d={`M ${connection.from.x},${connection.from.y} Q ${(connection.from.x + connection.to.x) / 2},${connection.from.y} ${connection.to.x},${connection.to.y}`}
                  stroke={connection.gradient}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: index * 0.3, repeat: Infinity, repeatType: "loop", repeatDelay: 3 }}
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Right Side - Orbital Animation */}
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center rounded-lg mx-auto overflow-hidden">
          
          {/* Background Animation */}
          <motion.div
            className="absolute inset-0 "
           
            transition={{ duration: 8, repeat: Infinity }}
          />

          {/* Main Title */}
          <motion.h1 
            className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-center text-6xl md:text-7xl font-bold leading-none text-transparent z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Aniket Jha
          </motion.h1>

          {/* Orbital Circles */}
          <svg className="pointer-events-none absolute inset-0 size-full">
            <motion.circle 
              className="stroke-purple-300/30 stroke-1" 
              cx="50%" 
              cy="50%" 
              r="100" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            />
            <motion.circle 
              className="stroke-orange-300/30 stroke-1" 
              cx="50%" 
              cy="50%" 
              r="160" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
            />
          </svg>

          {/* Orbiting Elements */}
          {orbitingSocial.map((item, index) => {
            const orbitDuration = item.reverse ? 15 : 20; // Different speeds for inner and outer orbits
            const startAngle = (index * 72) + item.delay; // Distribute evenly around circle
            
            return (
              <motion.div
                key={`${item.name}-${index}`}
                className="absolute flex items-center justify-center rounded-full bg-white shadow-xl border-2 border-gray-100"
                style={{ 
                  width: item.size, 
                  height: item.size,
                }}
                initial={{
                  x: Math.cos((startAngle * Math.PI) / 180) * item.radius,
                  y: Math.sin((startAngle * Math.PI) / 180) * item.radius,
                }}
                animate={{
                  x: [
                    Math.cos((startAngle * Math.PI) / 180) * item.radius,
                    Math.cos(((startAngle + 90) * Math.PI) / 180) * item.radius,
                    Math.cos(((startAngle + 180) * Math.PI) / 180) * item.radius,
                    Math.cos(((startAngle + 270) * Math.PI) / 180) * item.radius,
                    Math.cos((startAngle * Math.PI) / 180) * item.radius,
                  ],
                  y: [
                    Math.sin((startAngle * Math.PI) / 180) * item.radius,
                    Math.sin(((startAngle + 90) * Math.PI) / 180) * item.radius,
                    Math.sin(((startAngle + 180) * Math.PI) / 180) * item.radius,
                    Math.sin(((startAngle + 270) * Math.PI) / 180) * item.radius,
                    Math.sin((startAngle * Math.PI) / 180) * item.radius,
                  ],
                }}
                transition={{
                  duration: orbitDuration,
                  repeat: Infinity,
                  ease: "linear",
                  times: [0, 0.25, 0.5, 0.75, 1]
                }}
                whileHover={{ 
                  scale: 1.3, 
                  zIndex: 50,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                {/* Counter-rotate the icon to keep it upright */}
                <motion.div
                  animate={{
                    rotate: item.reverse ? [0, -90, -180, -270, -360] : [0, 90, 180, 270, 360]
                  }}
                  transition={{
                    duration: orbitDuration,
                    repeat: Infinity,
                    ease: "linear",
                    times: [0, 0.25, 0.5, 0.75, 1]
                  }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <img 
                    src={item.url} 
                    alt={item.name}
                    className="w-4/5 h-4/5 object-contain rounded-full"
                  />
                </motion.div>
              </motion.div>
            );
          })}

          {/* Center Stockimg Logo */}
          <motion.div
            className="absolute flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 shadow-2xl z-20 border-4 border-white"
            whileHover={{ scale: 1.15 }}
            animate={{ 
              rotate: [0, 360],
              boxShadow: [
                "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                "0 25px 50px -12px rgba(168, 85, 247, 0.4)",
                "0 25px 50px -12px rgba(249, 115, 22, 0.4)",
                "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              ]
            }}
            transition={{ 
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              boxShadow: { duration: 4, repeat: Infinity }
            }}
          >
            <motion.span 
              className="text-white font-bold text-2xl"
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              S
            </motion.span>
          </motion.div>

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-purple-600 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockimgAnimation;