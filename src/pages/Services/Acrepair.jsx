// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Phone, Mail, MapPin } from "lucide-react";
// import PageSection from "../../components/Herosection/PageSection";
// import { useNavigate } from "react-router-dom";

// const Acrepair = () => {
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const [serviceData, setServiceData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchServiceData = async () => {
//       try {
//         const response = await fetch(
//           "https://deccanservices.demovoting.com/api/ac-repair-contents"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch service data");
//         }
//         const data = await response.json();
//         setServiceData(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServiceData();
//   }, []);

//   const serviceButtons = [
//     { name: "AC Repair Service", route: "/services/ac-repair" },
//     {
//       name: "Washing Machine Repair Service",
//       route: "/services/washing-machine-repair",
//     },
//     {
//       name: "Water Purifier Repair Service",
//       route: "/services/water-purifier-repair",
//     },
//     {
//       name: "Microwave Oven Repair Service",
//       route: "/services/microwave-oven-repair",
//     },
//   ];

//   const handleServiceClick = (route) => {
//     navigate(route);
//   };

//   if (loading)
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   if (error)
//     return (
//       <div className="min-h-screen flex items-center justify-center text-red-500">
//         Error: {error}
//       </div>
//     );
//   if (!serviceData)
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         No data available
//       </div>
//     );

//   // Extract video data safely
//   const video = serviceData.video || {
//     youtube_url: null,
//     local_video_path: null,
//     title: null,
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
//       <PageSection page="acRepair" />

//       <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
//         {/* Left Content */}
//         <div className="lg:w-2/3">
//           {/* Video Section */}
//           <section className="mb-12">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl overflow-hidden shadow-lg"
//             >
//               {video?.youtube_url || video?.local_video_path ? (
//                 <iframe
//                   className="w-full h-64 md:h-96"
//                   src={
//                     video.youtube_url ||
//                     `https://deccanservices.demovoting.com/uploads/${video.local_video_path}`
//                   }
//                   title={video.title || "AC Repair Service Video"}
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               ) : (
//                 <div className="w-full h-64 md:h-96 bg-gray-100 flex items-center justify-center">
//                   <p>No video available</p>
//                 </div>
//               )}
//             </motion.div>
//           </section>

//           {/* Service Description */}
//           <section className="mb-12">
//             <motion.h2
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="text-2xl md:text-3xl font-bold text-blue-700 mb-6"
//             >
//               {serviceData.title || "AC Repair Service"}
//             </motion.h2>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//               className="space-y-4 text-gray-700"
//               dangerouslySetInnerHTML={{
//                 __html: serviceData.description || "",
//               }}
//             />
//           </section>

//           {/* Images Section */}
//           {serviceData.images?.main?.length > 0 && (
//             <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
//               {serviceData.images.main.map((image, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.03 }}
//                   className="rounded-xl overflow-hidden shadow-lg"
//                 >
//                   <img
//                     src={`https://deccanservices.demovoting.com/uploads/${image}`}
//                     alt="AC Repair Service"
//                     className="w-full h-48 md:h-64 object-cover"
//                     loading="lazy"
//                   />
//                 </motion.div>
//               ))}
//             </section>
//           )}

//           {/* Repair Process */}
//           {serviceData.repairProcess && (
//             <section className="mb-12">
//               <motion.h2
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="text-2xl md:text-3xl font-bold text-green-600 mb-6"
//               >
//                 {serviceData.repairProcess.title || "Our Repair Process"}
//               </motion.h2>

//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//                 viewport={{ once: true }}
//                 className="space-y-4 text-gray-700"
//               >
//                 {serviceData.repairProcess.description && (
//                   <p>{serviceData.repairProcess.description}</p>
//                 )}

//                 {serviceData.repairProcess.steps?.length > 0 && (
//                   <ul className="list-disc pl-6 space-y-2">
//                     {serviceData.repairProcess.steps.map((item, index) => (
//                       <motion.li
//                         key={index}
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{
//                           duration: 0.4,
//                           delay: 0.3 + index * 0.1,
//                           type: "spring",
//                           stiffness: 100,
//                         }}
//                         viewport={{ once: true, margin: "-20px" }}
//                         whileHover={{
//                           x: 5,
//                           color: "#2563eb",
//                           transition: { duration: 0.2 },
//                         }}
//                         className="origin-left transform transition-colors duration-200"
//                       >
//                         {item.step}
//                       </motion.li>
//                     ))}
//                   </ul>
//                 )}

//                 {serviceData.repairProcess.note && (
//                   <motion.p
//                     initial={{ opacity: 0, y: 10 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.8 }}
//                     viewport={{ once: true }}
//                   >
//                     {serviceData.repairProcess.note}
//                   </motion.p>
//                 )}
//               </motion.div>
//             </section>
//           )}

//           {/* Gallery Images */}
//           {serviceData.images?.gallery?.length > 0 && (
//             <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
//               {serviceData.images.gallery.map((image, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.03 }}
//                   className="rounded-xl overflow-hidden shadow-lg"
//                 >
//                   <img
//                     src={`https://deccanservices.demovoting.com/uploads/${image}`}
//                     alt={`AC Service ${index + 1}`}
//                     className="w-full h-48 object-cover"
//                     loading="lazy"
//                   />
//                 </motion.div>
//               ))}
//             </section>
//           )}

//           {/* Final CTA */}
//           {serviceData.cta && (
//             <section className="mb-12">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="bg-gradient-to-r from-yellow-100 to-red-50 p-6 rounded-xl shadow-lg border border-yellow-200"
//               >
//                 <p className="text-lg text-gray-700">
//                   {serviceData.cta.text ||
//                     "Contact us for professional AC repair services"}
//                 </p>
//               </motion.div>
//             </section>
//           )}
//         </div>

//         {/* Right Sidebar */}
//         <div className="lg:w-1/3">
//           {/* Service Buttons */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.8 }}
//             className="bg-white rounded-xl shadow-lg p-6 mb-8 sticky top-8"
//           >
//             <h3 className="text-xl font-bold text-blue-700 mb-4">
//               Our Services
//             </h3>
//             <ul className="space-y-3">
//               {serviceButtons.map((service, index) => (
//                 <motion.li
//                   key={index}
//                   onHoverStart={() => setHoveredItem(index)}
//                   onHoverEnd={() => setHoveredItem(null)}
//                   className="relative overflow-hidden"
//                 >
//                   <motion.div
//                     animate={{
//                       x: hoveredItem === index ? 0 : -100,
//                       opacity: hoveredItem === index ? 1 : 0,
//                     }}
//                     transition={{ duration: 0.3 }}
//                     className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500"
//                     style={{ zIndex: 0 }}
//                   />
//                   <button
//                     onClick={() => handleServiceClick(service.route)}
//                     className="relative z-10 w-full text-left px-4 py-3 rounded-lg bg-blue-50 hover:bg-transparent transition-colors duration-300"
//                   >
//                     <span className="font-medium text-gray-800 hover:text-white transition-colors duration-300">
//                       {service.name}
//                     </span>
//                   </button>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 1 }}
//             className="bg-white rounded-xl shadow-lg p-6"
//           >
//             <h3 className="text-xl font-bold text-green-600 mb-4">
//               Contact Info
//             </h3>

//             <div className="space-y-4">
//               <div className="flex items-start gap-3">
//                 <div className="p-2 bg-blue-100 rounded-full text-blue-600">
//                   <Phone size={20} />
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-700">Phone Number</h4>
//                   <a
//                     href="tel:+919325860758"
//                     className="text-blue-600 hover:underline"
//                   >
//                     +91 9325860758
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <div className="p-2 bg-green-100 rounded-full text-green-600">
//                   <MapPin size={20} />
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-700">Address</h4>
//                   <p className="text-gray-600">
//                     Back Side Kakade Palace Mangal karyalaya, Sr,no, 2k/3b/1,
//                     shop no 8, maitri vishawa apartment, Karve Nagar, Pune,
//                     Maharashtra 411052
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <div className="p-2 bg-red-100 rounded-full text-red-600">
//                   <Mail size={20} />
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-700">Email</h4>
//                   <a
//                     href="mailto:info@vaishnaviacrepairandservice.co.in"
//                     className="text-blue-600 hover:underline"
//                   >
//                     info@vaishnaviacrepairandservice.co.in
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Acrepair;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import PageSection from "../../components/Herosection/PageSection";
import { useNavigate } from "react-router-dom";

const Acrepair = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Replace this with your actual API endpoint
  const API_URL = "https://deccanservices.demovoting.com/api/ac-repair-service";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPageData(data);
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
      name: "Water Purifier Repair Service",
      route: "/services/water-purifier-repair",
    },
    {
      name: "Microwave Oven Repair Service",
      route: "/services/microwave-oven-repair",
    },
  ];

  const handleServiceClick = (route) => {
    navigate(route);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center p-4 bg-red-50 rounded-lg">
          Error loading data: {error}
        </div>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">No data available</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
      <PageSection page={pageData.page} data={pageData} />

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
              {pageData.video_url ? (
                <iframe
                  className="w-full h-64 md:h-96"
                  src={pageData.video_url}
                  title={pageData.video_title || "AC Repair Service"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : pageData.uploaded_video_path ? (
                <video
                  className="w-full h-64 md:h-96"
                  controls
                  src={`https://deccanservices.demovoting.com/uploads/${pageData.uploaded_video_path}`}
                  title={pageData.video_title || "AC Repair Service"}
                />
              ) : (
                <div className="w-full h-64 md:h-96 flex items-center justify-center bg-gray-100">
                  <p className="text-gray-500">No video available</p>
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
              {pageData.service_description?.title || "AC Repair Service"}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-4 text-gray-700"
            >
              {pageData.service_description?.description?.map(
                (paragraph, index) => (
                  <p key={index}>{paragraph.paragraph}</p>
                )
              )}
            </motion.div>
          </section>

          {/* Images Section */}
          {pageData.gallery_images?.length > 0 && (
            <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {pageData.gallery_images.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={`https://deccanservices.demovoting.com/uploads/${image}`}
                    alt={`Gallery ${index + 1}`}
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
              {pageData.repair_process?.title || "Our AC Repair Process"}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 text-gray-700"
            >
              {pageData.repair_process?.description && (
                <p>{pageData.repair_process.description}</p>
              )}

              {pageData.repair_process?.steps?.length > 0 && (
                <ul className="list-disc pl-6 space-y-2">
                  {pageData.repair_process.steps.map((item, index) => (
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
                      {item.step}
                    </motion.li>
                  ))}
                </ul>
              )}

              {pageData.repair_process?.note && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  {pageData.repair_process.note}
                </motion.p>
              )}
            </motion.div>
          </section>

          {/* Final Images */}
          {pageData.final_gallery_images?.length > 0 && (
            <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              {pageData.final_gallery_images.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={`https://deccanservices.demovoting.com/uploads/${image}`}
                    alt={`Final Gallery ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              ))}
            </section>
          )}

          {/* Final CTA */}
          {pageData.cta_section && (
            <section className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-yellow-100 to-red-50 p-6 rounded-xl shadow-lg border border-yellow-200"
              >
                <p className="text-lg text-gray-700">
                  {pageData.cta_section.text}
                </p>
              </motion.div>
            </section>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="lg:w-1/3">
          {/* Service Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8 top-8"
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
          {pageData.contact_info && (
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
                {pageData.contact_info.phone && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">
                        Phone Number
                      </h4>
                      <a
                        href={`tel:${pageData.contact_info.phone}`}
                        className="text-blue-600 hover:underline"
                      >
                        {pageData.contact_info.phone}
                      </a>
                    </div>
                  </div>
                )}

                {pageData.contact_info.address && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-100 rounded-full text-green-600">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Address</h4>
                      <p className="text-gray-600">
                        {pageData.contact_info.address}
                      </p>
                    </div>
                  </div>
                )}

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

                {pageData.contact_info.email && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-red-100 rounded-full text-red-600">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Email</h4>
                      <a
                        href={`mailto:${pageData.contact_info.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {pageData.contact_info.email}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Acrepair;
