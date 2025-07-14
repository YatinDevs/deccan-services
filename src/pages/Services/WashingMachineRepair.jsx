import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import PageSection from "../../components/Herosection/PageSection";
import { useNavigate } from "react-router-dom";

const WashingMachineRepair = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch(
          "https://deccanservices.demovoting.com/api/washing-machine-repair"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setApiData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const serviceButtons = [
    { name: "AC Repair Service", route: "/services/ac-repair" },
    {
      name: "Washing Machine Repair Service",
      route: "/services/washing-machine-repair",
    },
    {
      name: "Refrigerator Repair Service",
      route: "/services/refrigerator-repair",
    },
    {
      name: "Microwave Oven Repair Service",
      route: "/services/microwave-oven-repair",
    },
  ];

  const handleServiceClick = (route) => {
    navigate(route);
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Error: {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
      <PageSection page="washingMachinRepair" />

      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Left Content */}
        <div className="lg:w-2/3">
          {/* Video Section */}
          <section className="mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl overflow-hidden shadow-lg"
            >
              {apiData.uploaded_video_path ? (
                <video
                  className="w-full h-64 md:h-96"
                  src={`https://deccanservices.demovoting.com/uploads/${apiData.uploaded_video_path}`}
                  title={apiData.video_title || "Washing Machine Repair"}
                  controls
                />
              ) : apiData.video_url ? (
                <iframe
                  className="w-full h-64 md:h-96"
                  src={apiData.video_url}
                  title={apiData.video_title || "Washing Machine Repair"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-64 md:h-96 flex items-center justify-center bg-gray-100">
                  <p>No video available</p>
                </div>
              )}
            </motion.div>
          </section>

          {/* Service Description */}
          <section className="mb-12">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl md:text-3xl font-bold text-blue-700 mb-6"
            >
              {apiData.service_description?.title ||
                "Washing Machine Repair Service"}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-4 text-gray-700"
            >
              {apiData.service_description?.description?.map(
                (paragraph, index) => (
                  <p key={index}>{paragraph.paragraph}</p>
                )
              )}
            </motion.div>
          </section>

          {/* Images Section */}
          {apiData.gallery_images?.length > 0 && (
            <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {apiData.gallery_images.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={`https://deccanservices.demovoting.com/uploads/${image}`}
                    alt={`Washing Machine Repair ${index + 1}`}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                </motion.div>
              ))}
            </section>
          )}

          {/* Repair Process */}
          <section className="mb-12">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-green-600 mb-6"
            >
              Our {apiData.repair_process?.title || "Washing Machine"} Repair
              Process
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 text-gray-700"
            >
              <p>{apiData.repair_process?.description}</p>

              {apiData.repair_process?.steps?.length > 0 && (
                <ul className="list-disc pl-6 space-y-2">
                  {apiData.repair_process.steps.map((step, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + index * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                      viewport={{ once: true, margin: "-20px" }}
                      whileHover={{
                        x: 5,
                        color: "#2563eb",
                        transition: { duration: 0.2 },
                      }}
                      className="origin-left transform transition-colors duration-200"
                    >
                      {step.step}
                    </motion.li>
                  ))}
                </ul>
              )}

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {apiData.repair_process?.note}
              </motion.p>
            </motion.div>
          </section>

          {/* Final Images */}
          {apiData.final_gallery_images?.length > 0 && (
            <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              {apiData.final_gallery_images.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={`https://deccanservices.demovoting.com/uploads/${image}`}
                    alt={`Washing Machine Service ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              ))}
            </section>
          )}

          {/* Final CTA */}
          <section className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-yellow-100 to-red-50 p-6 rounded-xl shadow-lg border border-yellow-200"
            >
              <p className="text-lg text-gray-700">
                {apiData.cta_section?.text ||
                  "Trust our skilled technicians to provide high-quality washing machine repair services tailored to meet your specific needs. Contact us today to schedule your repair or maintenance service and enjoy hassle-free laundry days."}
              </p>
            </motion.div>
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-1/3">
          {/* Service Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8  top-8"
          >
            <h3 className="text-xl font-bold text-blue-700 mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {serviceButtons.map((service, index) => (
                <motion.li
                  key={index}
                  onHoverStart={() => setHoveredItem(index)}
                  onHoverEnd={() => setHoveredItem(null)}
                  className="relative overflow-hidden"
                >
                  <motion.div
                    animate={{
                      x: hoveredItem === index ? 0 : -100,
                      opacity: hoveredItem === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500"
                    style={{ zIndex: 0 }}
                  />
                  <button
                    onClick={() => handleServiceClick(service.route)}
                    className="relative z-10 w-full text-left px-4 py-3 rounded-lg bg-blue-50 hover:bg-transparent transition-colors duration-300"
                  >
                    <span className="font-medium text-gray-800 hover:text-white transition-colors duration-300">
                      {service.name}
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-bold text-green-600 mb-4">
              Contact Info
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Phone Number</h4>
                  <a
                    href={`tel:${
                      apiData.contact_info?.phone || "+91 9766242424"
                    }`}
                    className="text-blue-600 hover:underline"
                  >
                    {apiData.contact_info?.phone || "+91 9766242424"}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-full text-green-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Address</h4>
                  <p className="text-gray-600">
                    {apiData.contact_info?.address ||
                      "Flat No. 7, Building No. 2, Datar Society, Mumbai - Agra Hwy, near Tractor House, Tigraniya Corner, Dwarka, Nashik, Maharashtra 422001"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-full text-green-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Address</h4>
                  <p className="text-gray-600">
                    Janta Sheri Fatehgunj, Navyug High School Road, Village:
                    Vadodara (M Corp+oG) Taluka: Vadodara, Dist.: Vadodara
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-red-100 rounded-full text-red-600">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Email</h4>
                  <a
                    href={`mailto:${
                      apiData.contact_info?.email ||
                      "info@vaishnaviacrepairandservice.co.in"
                    }`}
                    className="text-blue-600 hover:underline"
                  >
                    {apiData.contact_info?.email ||
                      "info@vaishnaviacrepairandservice.co.in"}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default WashingMachineRepair;
