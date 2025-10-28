import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IconBook, IconPencil, IconBulb, IconTestPipe } from "@tabler/icons-react";

const unit1ImageUrls = [
  "https://pbs.twimg.com/media/G4D9SghWIAALfno?format=jpg&name=large",
  "https://pbs.twimg.com/media/G4D9TQEXIAA2KHi?format=jpg&name=large",
  "https://pbs.twimg.com/media/G4D9R_IXoAAmexj?format=jpg&name=large",
  "https://pbs.twimg.com/media/G4D9Rb5XgAAeqGA?format=jpg&name=large",
];

const unit2ImageUrls = [
  "https://pbs.twimg.com/media/G362WMRWcAAGKNg?format=jpg&name=large",
  "https://pbs.twimg.com/media/G39X4A9XoAA-N08?format=jpg&name=large",
  "https://pbs.twimg.com/media/G362TA-XUAAcCVJ?format=jpg&name=large",
  "https://pbs.twimg.com/media/G2rh9rNbIAUcYsQ?format=jpg&name=large",
];

const unit3ImageUrls = [
  "https://pbs.twimg.com/media/G2m0wXlbAAArtWN?format=jpg&name=large",
  "https://pbs.twimg.com/media/G2mtwIYbAAAccfN?format=jpg&name=large",
  "https://pbs.twimg.com/media/G2mtwH0bIAQYPlw?format=jpg&name=large",
  "https://pbs.twimg.com/media/G2mtwIqaQAAXbSO?format=jpg&name=large",
  "https://pbs.twimg.com/media/G2mtwIfbIAUsXYD?format=jpg&name=large",
];

const unit4ImageUrls = [
  "https://pbs.twimg.com/media/G4Chh7WWwAAkXwl?format=jpg&name=large",
  "https://pbs.twimg.com/media/G4ChjLnWUAALSIc?format=jpg&name=large",
  "https://pbs.twimg.com/media/G4Ch1A6XIAAGPFr?format=jpg&name=large",
  "https://pbs.twimg.com/media/G4ACzycWkAAfLoK?format=jpg&name=large",
  "https://pbs.twimg.com/media/G4AC2ajXEAABTam?format=jpg&name=large",
];

// Helper function to map selector to a Title (for the H2)
const getUnitTitle = (selector) => {
  switch (selector) {
    case 'Unit 1': return 'Fundamentals of Design Thinking';
    case 'Unit 2': return 'Empathize and Define';
    case 'Unit 3': return 'Ideation';
    case 'Unit 4': return 'Prototyping and Testing';
    default: return 'Design Thinking Syllabus';
  }
};

// Helper function to map selector to a relevant Icon
const getUnitIcon = (selector) => {
  const iconClass = "h-4 w-4 mr-1";
  switch (selector) {
    case 'Unit 1': return <IconBook className={iconClass} />;
    case 'Unit 2': return <IconPencil className={iconClass} />;
    case 'Unit 3': return <IconBulb className={iconClass} />;
    case 'Unit 4': return <IconTestPipe className={iconClass} />;
    default: return null;
  }
};

const Cards = () => {
  const [activeSelector, setActiveSelector] = useState('Unit 1');
  const selectors = ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4'];

  // Card data updated to use specific URLs for all Units
  const cardData = {
    'Unit 1': [
      { id: 1, title: 'Fundamentals: Concept, Need, and Goal', description: 'Design Thinking Concept, Need, and the Goal of Desirability, Feasibility, and Viability.', href: "/pages/unit1_1.html", target: '_blank', imageUrl: unit1ImageUrls[0] },
      { id: 2, title: 'Design Thinking Process Model & Tools', description: 'Understanding the Design Thinking Process model and key design tools.', href: '/pages/unit1_2.html', target: '_blank', imageUrl: unit1ImageUrls[1] },
      { id: 3, title: 'Activity: Project Opportunity and Scope', description: 'Identify an Opportunity and clearly define the Scope of the Project.', href: '/pages/unit1_3.html', target: '_blank', imageUrl: unit1ImageUrls[2] },
      { id: 4, title: 'Activity: Explore Possibilities and Brief', description: 'Explore the possibilities and prepare the final design brief.', href: '/pages/unit1_4.html', target: '_blank', imageUrl: unit1ImageUrls[3] },
    ],
    'Unit 2': [
      { id: 1, title: 'Empathy: Role, Phases, and Application', description: 'Understanding the Design Thinking phases and the Role of empathy in the process.', href: '/pages/unit2_1.html', target: '_blank', imageUrl: unit2ImageUrls[0] },
      { id: 2, title: 'Empathy Tools: Maps, Journey, Personas', description: 'Using Empathy Maps, Customer Journey Maps, and Personas for deep understanding.', href: '/pages/unit2_2.html', target: '_blank', imageUrl: unit2ImageUrls[1] },
      { id: 3, title: 'Define Phase Methods: Storytelling', description: 'Learning the methods of the Define Phase, including the technique of Storytelling.', href: '/pages/unit2_3.html', target: '_blank', imageUrl: unit2ImageUrls[2] },
      { id: 4, title: 'Activity: Apply Empathy and Define', description: 'Apply the methods of Empathizing and Define Phases to finalize the problem statement.', href: '/pages/unit2_4.html', target: '_blank', imageUrl: unit2ImageUrls[3] },
    ],
    'Unit 3': [
      { id: 1, title: 'Idea Generation Challenges and Method', description: 'Challenges in idea generation and the Visualize, Empathize, and Ideate method.', href: '/pages/unit3_1.html', target: '_blank', imageUrl: unit3ImageUrls[0] },
      { id: 2, title: 'Ideation Techniques: Lateral, Analogies, Mapping', description: 'Create Thinking, Lateral Thinking, Analogies, Brainstorming, and Mind mapping.', href: '/pages/unit3_2.html', target: '_blank', imageUrl: unit3ImageUrls[1] },
      { id: 3, title: 'Ideation Tools: HMW and Storyboard', description: 'Applying the Ideation Tools: How Might We? (HMW) and Storyboard.', href: '/pages/unit3_3.html', target: '_blank', imageUrl: unit3ImageUrls[2] },
      { id: 4, title: 'Innovation Mindset: What if? What wows?', description: 'Developing a mindset for innovation by asking "What if?", "What wows?", and "What works?".', href: '/pages/unit3_4.html', target: '_blank', imageUrl: unit3ImageUrls[3] },
      { id: 5, title: 'Activity: Generate Innovative Solutions', description: 'Apply the methods of the Ideate Phase to generate innovative solution ideas.', href: '/pages/unit3_5.html', target: '_blank', imageUrl: unit3ImageUrls[4] },
    ],
    'Unit 4': [
      { id: 1, title: 'Prototyping: Concept, Mindset, and Examples', description: 'What a prototype is, Prototyping as a mindset, and examples for products.', href: '/pages/unit4_1.html', target: '_blank', imageUrl: unit4ImageUrls[0] },
      { id: 2, title: 'Prototyping Process: Fidelity and MVP', description: 'Why we prototype, Fidelity for prototypes, and the Minimum Viable Prototype (MVP) process.', href: '/pages/unit4_2.html', target: '_blank', imageUrl: unit4ImageUrls[1] },
      { id: 3, title: 'Testing: User Feedback and Iteration', description: 'Testing prototypes with users, collecting feedback, and iterating to improve ideas.', href: '/pages/unit4_3.html', target: '_blank', imageUrl: unit4ImageUrls[2] },
      { id: 4, title: 'Activity: Create Prototypes for Ideas', description: 'Apply the Methods of the Prototype Phase to create prototypes for selected ideas.', href: '/pages/unit4_4.html', target: '_blank', imageUrl: unit4ImageUrls[3] },
      { id: 5, title: 'Activity: Test, Iterate, and Present Solution', description: 'Collect feedback, iterate, and present your solution using the Storytelling method.', href: '/pages/unit4_5.html', target: '_blank', imageUrl: unit4ImageUrls[4] },
    ],
  };

  const cards = cardData[activeSelector as keyof typeof cardData];

  // Framer Motion variant for individual card (kept simple entrance)
  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: i * 0.05, // Stagger cards appear
      },
    }),
  };

  return (
    <div className="mt-20 px-6 py-12 font-satoshi">
      
      {/* Selector Buttons (RESTYLED) */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        {selectors.map((selector) => (
          <motion.button
            key={selector}
            onClick={() => setActiveSelector(selector)}
            className={`
              px-4 py-2 flex items-center space-x-1 rounded-full text-sm font-medium transition-colors duration-300
              ${
                activeSelector === selector
                  ? 'bg-black text-white shadow-lg' 
                  : 'border border-neutral-200 text-neutral-600 hover:bg-neutral-50'
              }
            `}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {getUnitIcon(selector)}
            <span>{selector}</span>
          </motion.button>
        ))}
      </div>

      

      {/* Heading: Updated to use the descriptive title */}
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10" style={{ fontFamily: 'DM Serif Display, sans-serif',color:"#366072" }}  >
        {getUnitTitle(activeSelector)}
      </h2>

      

      {/* Cards Display (Simplified Full-Image Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {cards.map((card, index) => (
                     <motion.a
                       key={card.id}
                       href={card.href}
                       target={card.target}
                       rel={card.target === '_blank' ? 'noopener noreferrer' : undefined}
                       custom={index}            variants={itemVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            // Card styling: Full image, simple rectangle, hover effects
            className="group relative h-72 w-full rounded-xl overflow-hidden shadow-md block cursor-pointer"
            whileHover={{
                scale: 1.05,
                y: -5, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* 1. Image and Darkening Overlay */}
            <img
              src={card.imageUrl} 
              alt={card.title}
              // Image scales slightly on hover
              className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
            />
            {/* Dark gradient for text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* 2. Content Overlay (Text Only) */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold line-clamp-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    {card.title}
                </h3>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

export default Cards;