import { motion } from "framer-motion";
import { Phone, Calendar, Search, CheckCircle, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

// Icon mapping to dynamically render icons based on API data
const iconComponents = {
  phone: Phone,
  calendar: Calendar,
  search: Search,
  "check-circle": CheckCircle,
};

const HowItWorks = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const response = await axios.get(
          "https://deccanservices.demovoting.com/api/steps"
        );
        setSteps(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSteps();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      filter: "brightness(110%) saturate(120%)",
      transition: {
        duration: 0.5,
      },
    },
  };

  if (loading) {
    return (
      <div className="h-500 bg-gradient-to-br from-blue-50 to-gray-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1554F3] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading steps...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center text-red-500">
          <p>Error loading steps: {error}</p>
        </div>
      </div>
    );
  }

  if (!steps || steps.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No steps available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full bg-gradient-to-br from-blue-50 to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#1554F3] mb-4">
          {steps.length} Simple Steps to Get Your Appliances Repaired
        </h1>
        <p className="text-lg text-gray-600">
          Our streamlined process ensures quick and efficient appliance repairs
          with minimal disruption to your daily routine.
        </p>
      </motion.div>

      {/* Steps */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
      >
        {steps.map((step) => {
          const IconComponent = iconComponents[step.icon] || Phone;

          return (
            <motion.div
              key={step.id}
              variants={itemVariants}
              whileHover="hover"
              className="relative group"
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              {/* Step Card */}
              <div
                className={`h-full p-6 rounded-xl shadow-md ${step.color} flex flex-col`}
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-6">
                  <IconComponent
                    size={40}
                    className={`text-${step.color
                      .replace("bg-", "")
                      .replace("-100", "")}`}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {step.description}
                </p>
                <div className="flex items-center text-[#1554F3] font-medium">
                  <span>Step {step.order}</span>
                  <ArrowRight className="ml-2" />
                </div>
              </div>

              {/* Image Overlay */}
              {hoveredStep === step.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute -top-8 -right-8 w-64 h-64 rounded-xl overflow-hidden shadow-xl z-10 hidden lg:block"
                >
                  <motion.img
                    src={`https://deccanservices.demovoting.com/uploads/${step.image_url}`}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    variants={imageVariants}
                    initial="initial"
                    whileHover="hover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-500 to-transparent opacity-30" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h4 className="text-white font-bold">{step.title}</h4>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Process Visualization */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-24 max-w-4xl mx-auto"
      >
        <div className="relative h-2 bg-gray-200 rounded-full mx-16 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1554F3] via-[#10B981] to-[#EC4899] rounded-full" />
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2 * index + 0.4 }}
              viewport={{ once: true }}
              className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center ${
                step.order <= 2 ? "bg-[#1554F3]" : "bg-[#10B981]"
              }`}
              style={{ left: `${(index / (steps.length - 1)) * 100}%` }}
            >
              <span className="text-white font-bold text-sm">{step.order}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-24"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Ready to Repair Your Appliance?
        </h2>
        <a href="/contactus">
          <button className="px-8 py-4 bg-[#1554F3] text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center mx-auto">
            <Phone className="mr-2" />
            Contact Us Now
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default HowItWorks;
