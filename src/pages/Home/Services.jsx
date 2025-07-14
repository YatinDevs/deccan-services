import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Wrench, Droplets, Microwave, Snowflake } from "lucide-react";
import axios from "axios";

const Services = () => {
  // State for services data
  const [servicesData, setServicesData] = useState({
    sectionTitle: "Our Expert Services",
    highlightedText: "Expert Services",
    description:
      "Comprehensive repair solutions for all your home appliances by certified technicians",
    ctaButton: {
      text: "Book Service Now",
      link: "/contactus",
    },
    services: [],
  });

  // State for loading and error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Icon mapping
  const iconComponents = {
    snowflake: Snowflake,
    droplets: Droplets,
    wrench: Wrench,
    microwave: Microwave,
  };

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://deccanservices.demovoting.com/api/services"
        );

        if (response.data.success) {
          // Map API data to our component structure
          const services = response.data.data.map((service) => ({
            ...service,
            icon: iconComponents[service.icon_name]
              ? React.createElement(iconComponents[service.icon_name], {
                  className: "h-8 w-8 text-white",
                })
              : null,
          }));

          setServicesData((prev) => ({
            ...prev,
            services,
          }));
        } else {
          throw new Error(response.data.message || "Failed to fetch services");
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching services:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading services...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-500">Error loading services: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: servicesData.sectionTitle.replace(
                  servicesData.highlightedText,
                  `<span class="text-blue-600">${servicesData.highlightedText}</span>`
                ),
              }}
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {servicesData.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.services.map((service, index) => (
            <motion.div
              key={service.id || index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={
                    service.image_url.startsWith("http")
                      ? service.image_url
                      : `https://deccanservices.demovoting.com/uploads/${service.image_url}`
                  }
                  alt={service.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                <div className="absolute top-4 right-4 flex items-center justify-center h-12 w-12 rounded-full bg-blue-600/90 backdrop-blur-sm">
                  {service.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                <motion.a
                  href={service.link}
                  className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href={servicesData.ctaButton.link}
            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/20"
          >
            {servicesData.ctaButton.text}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
