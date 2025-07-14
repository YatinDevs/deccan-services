import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Row, Col, Card } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function OurServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Service routes mapping with proper service titles
  const serviceRoutes = {
    "AC Repair": {
      route: "/services/ac-repair",
      color: "#3b82f6",
    },
    "Washing Machine Repair": {
      route: "/services/washing-machine-repair",
      color: "#10b981",
    },
    "Refrigerator Repair": {
      route: "/services/refrigerator-repair",
      color: "#f59e0b",
    },
    "Microwave Oven Repair": {
      route: "/services/microwave-oven-repair",
      color: "#ef4444",
    },
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "https://deccanservices.demovoting.com/api/what-we-offer"
        );

        // Handle different response formats
        let servicesData = [];

        if (Array.isArray(response.data)) {
          servicesData = response.data;
        } else if (response.data && Array.isArray(response.data.data)) {
          servicesData = response.data.data;
        } else if (response.data) {
          servicesData = [response.data];
        }

        // Map services with their routes and colors
        const enrichedServices = servicesData.map((service) => {
          // Find matching route by checking if service title includes the key
          const routeKey = Object.keys(serviceRoutes).find((key) =>
            service.title.includes(key)
          );

          const routeInfo = routeKey
            ? serviceRoutes[routeKey]
            : { route: "/services", color: "#1554F3" };

          return {
            ...service,
            ...routeInfo,
          };
        });

        setServices(enrichedServices);
      } catch (err) {
        setError(err.message);
        setServices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
      },
    },
  };

  if (loading) {
    return (
      <div className="bg-white py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-6"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-12"></div>

            <Row gutter={[24, 24]} justify="center">
              {[1, 2, 3, 4].map((item) => (
                <Col xs={24} sm={12} md={6} key={item}>
                  <Card className="h-full rounded-lg overflow-hidden border-0 shadow-sm">
                    <div className="h-48 bg-gray-200"></div>
                    <div className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-gray-200 mx-auto"></div>
                      <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-3"></div>
                      <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                      <div className="h-10 bg-gray-200 rounded-full w-32 mx-auto"></div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            <p>Error loading services: {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-[#1554F3] mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive repair services for all your home
              appliances with the highest standards of quality.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Row gutter={[24, 24]} justify="center">
              {services && services.length > 0 ? (
                services.map((service) => (
                  <Col xs={24} sm={12} md={6} key={service.id}>
                    <motion.div variants={itemVariants} whileHover="hover">
                      <Card
                        className="h-full rounded-lg overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300"
                        bodyStyle={{ padding: 0 }}
                      >
                        <motion.div
                          className="h-48 overflow-hidden"
                          variants={imageVariants}
                        >
                          <img
                            src={`https://deccanservices.demovoting.com/uploads/${service.image_url}`}
                            alt={service.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://via.placeholder.com/300x200?text=Service+Image";
                            }}
                          />
                        </motion.div>
                        <div className="p-6 text-center">
                          <h3 className="text-xl font-semibold mb-3">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {service.description}
                          </p>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-2 rounded-full text-white font-medium"
                            style={{ backgroundColor: service.color }}
                            onClick={() => navigate(service.route)}
                          >
                            Learn More
                          </motion.button>
                        </div>
                      </Card>
                    </motion.div>
                  </Col>
                ))
              ) : (
                <Col span={24} className="text-center py-8">
                  <div className="bg-blue-50 p-8 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">
                      No Services Available
                    </h3>
                    <p className="text-gray-600">
                      We currently don't have any services listed. Please check
                      back later.
                    </p>
                  </div>
                </Col>
              )}
            </Row>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
