import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ToolOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  ShoppingOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import axios from "axios";

function WhyChoose() {
  const [benefits, setBenefits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const response = await axios.get(
          "https://deccanservices.demovoting.com/api/benefits"
        );
        setBenefits(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBenefits();
  }, []);

  // Icon mapping based on API icon values
  const iconComponents = {
    tool: <ToolOutlined className="text-2xl" />,
    clock: <ClockCircleOutlined className="text-2xl" />,
    dollar: <DollarOutlined className="text-2xl" />,
    shopping: <ShoppingOutlined className="text-2xl" />,
    "safety-certificate": <SafetyCertificateOutlined className="text-2xl" />,
    team: <TeamOutlined className="text-2xl" />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
      scale: 1.02,
      transition: {
        duration: 0.3,
      },
    },
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1554F3] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading benefits...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-red-500">
          <p>Error loading benefits: {error}</p>
        </div>
      </div>
    );
  }

  if (!benefits || benefits.length === 0) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">No benefits available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1554F3] mb-4">
              Reasons to Choose Our Repair Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We go above and beyond to ensure your complete satisfaction with
              every service call.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.id}
                variants={itemVariants}
                whileHover="hover"
                className={`p-6 rounded-xl shadow-sm hover:shadow-md transition-all ${benefit.color}`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <div className="text-[#1554F3]">
                      {iconComponents[benefit.icon] || (
                        <ToolOutlined className="text-2xl" />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-[#1554F3] text-white flex items-center justify-center text-sm font-bold">
                        {benefit.order}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { value: "14500+", label: "Happy Customers" },
              { value: "18+", label: "Years Experience" },
              { value: "24/7", label: "Emergency Service" },
              { value: "100%", label: "Satisfaction Guarantee" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="text-3xl font-bold text-[#1554F3] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default WhyChoose;
