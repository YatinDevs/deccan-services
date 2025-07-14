import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Shield, Users, Clock } from "lucide-react";
import axios from "axios";

// Icon mapping
const iconComponents = {
  check: Check,
  shield: Shield,
  users: Users,
  clock: Clock,
};

// Default data in case API fails
const defaultAboutData = {
  section_title: "About Deccan Services",
  highlighted_text: "Deccan Services",
  description: [
    "Deccan Services has been serving the Nashik community for over 10 years, providing reliable appliance repair services you can trust. We take pride in our work and treat every customer's appliance as if it were our own.",
    "Our mission is to deliver exceptional service with honesty and integrity, ensuring your appliances are repaired quickly and correctly the first time.",
  ],
  image_url:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  features: [
    {
      iconName: "check",
      title: "Quality Service",
      description:
        "We use only genuine parts and provide the highest quality repairs.",
    },
    {
      iconName: "shield",
      title: "Warranty",
      description: "All our repairs come with a 90-day service warranty.",
    },
    {
      iconName: "users",
      title: "Expert Technicians",
      description:
        "Our team consists of certified and experienced professionals.",
    },
    {
      iconName: "clock",
      title: "Quick Response",
      description: "We provide same-day service for most repair requests.",
    },
  ],
};

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(defaultAboutData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get(
          "https://deccanservices.demovoting.com/api/about-section"
        );
        if (response.data.success) {
          // Format the description as an array if it's a string
          const description =
            typeof response.data.data.description === "string"
              ? [response.data.data.description]
              : response.data.data.description;

          setAboutData({
            ...response.data.data,
            description: description || defaultAboutData.description,
          });
        } else {
          throw new Error(
            response.data.message || "Failed to fetch about section"
          );
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching about section:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <div className="py-16 bg-gray-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    console.error("Error loading about section:", error);
  }

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-last lg:order-first"
          >
            <img
              src={
                aboutData.image_url.startsWith("http")
                  ? aboutData.image_url
                  : `https://deccanservices.demovoting.com/uploads/${aboutData.image_url}`
              }
              alt="About Deccan Services"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {aboutData.section_title
                .split(aboutData.highlighted_text)
                .map((part, index, arr) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < arr.length - 1 && (
                      <span className="text-blue-600">
                        {aboutData.highlighted_text}
                      </span>
                    )}
                  </React.Fragment>
                ))}
            </h2>

            {aboutData.description.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-600 mb-6">
                {paragraph}
              </p>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutData.features.map((feature, index) => {
                const Icon = iconComponents[feature.iconName] || Check;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          {feature.title}
                        </h3>
                        <p className="mt-1 text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
