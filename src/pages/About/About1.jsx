import { motion } from "framer-motion";
import { Button, Card, Row, Col } from "antd";
import { TeamOutlined } from "@ant-design/icons";
import PageSection from "../../components/Herosection/PageSection";
import { useEffect, useState } from "react";
import axios from "axios";

const AboutUs = () => {
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Animation variants
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
      },
    },
  };

  const statCardVariants = {
    hover: {
      scale: 1.05,
      rotate: -2,
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get(
          "https://deccanservices.demovoting.com/api/about-us"
        );

        // Handle multiple response formats
        let data = [];

        if (Array.isArray(response.data)) {
          data = response.data;
        } else if (response.data?.data && Array.isArray(response.data.data)) {
          data = response.data.data;
        } else if (response.data) {
          data = [response.data]; // Wrap single object in array
        }

        setAboutData(data);
      } catch (err) {
        console.error("Error fetching about data:", err);
        setError(err.message);
        setAboutData([]); // Ensure it's always an array
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <div className="h-screen bg-gray-50 pt-12 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1554F3] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading about us content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 pt-12 flex justify-center items-center">
        <div className="text-center p-6 bg-red-100 rounded-lg max-w-md">
          <p className="text-red-600 font-medium mb-4">
            Error loading content: {error}
          </p>
          <Button
            type="primary"
            onClick={() => window.location.reload()}
            className="bg-[#1554F3] hover:bg-[#1248D6]"
          >
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-12">
      <PageSection />

      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {!Array.isArray(aboutData) ? (
          <div className="text-center py-12 bg-yellow-50 rounded-lg">
            <p className="text-yellow-700">
              Invalid data format received from API
            </p>
          </div>
        ) : aboutData.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-blue-50 p-8 rounded-lg inline-block">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No Content Available
              </h3>
              <p className="text-gray-600">
                The about us content hasn't been added yet.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2 space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {aboutData.map((section) => (
                <motion.div
                  key={section.id || section.title} // Fallback to title if no id
                  variants={itemVariants}
                  whileHover="hover"
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#1554F3]"
                >
                  <h3 className="text-xl font-bold text-[#1554F3] mb-4">
                    {section.title}
                  </h3>
                  <div
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: section.content || section.description,
                    }}
                  />
                  {section.image_url && (
                    <div className="mt-4">
                      <motion.img
                        // src={`https://deccanservices.demovoting.com/uploads/${section.image_url}`}
                        //alt={section.title}
                        className="rounded-lg shadow-sm max-w-full h-auto"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/placeholder-about.jpg";
                        }}
                        variants={imageVariants}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="md:w-1/2"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="relative rounded-xl overflow-hidden shadow-xl"
                whileHover="hover"
              >
                <img
                  src={
                    aboutData[0]?.image_url
                      ? `https://deccanservices.demovoting.com/uploads/${aboutData[0].image_url}`
                      : "/placeholder-about.jpg"
                  }
                  alt="About Us"
                  className="w-full h-auto rounded-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder-about.jpg";
                  }}
                />
                <motion.div
                  variants={statCardVariants}
                  whileHover="hover"
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-gray-200 hidden md:block"
                >
                  <div className="flex items-center">
                    <motion.div
                      className="bg-[#1554F3] p-3 rounded-full mr-4"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1.1, 1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut",
                      }}
                    >
                      <TeamOutlined className="text-white text-2xl" />
                    </motion.div>
                    <div>
                      <div className="text-2xl font-bold text-[#1554F3]">
                        5000+
                      </div>
                      <div className="text-gray-600">Happy Customers</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </section>
    </div>
  );
};

export default AboutUs;
