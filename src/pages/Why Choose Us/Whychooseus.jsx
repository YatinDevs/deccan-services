// import { motion } from "framer-motion";
// import {
//   ShieldCheck,
//   Clock,
//   Wrench,
//   Award,
//   Users,
//   DollarSign,
//   ThumbsUp,
//   Truck,
// } from "lucide-react";
// import PageSection from "../../components/Herosection/PageSection";

// const Whychooseus = () => {
//   const reasons = [
//     {
//       icon: <ShieldCheck className="w-8 h-8" />,
//       title: "Certified Technicians",
//       description:
//         "Our team consists of fully certified and experienced professionals trained to handle all AC models. With years of hands-on experience, they are equipped to manage installation, servicing, gas refilling, and complex repairs efficiently. We stay updated with the latest industry standards and technologies to ensure your air conditioning systems run at peak performance. Whether it's a split AC, window unit, or central cooling system, you can rely on our experts for prompt, reliable, and affordable service every time.",
//       images: [
//         "https://5.imimg.com/data5/SELLER/Default/2023/11/364285120/MS/NV/GA/48749394/air-conditioner-repair-maintenance-service-1000x1000.jpg",
//         "https://5.imimg.com/data5/SELLER/Default/2023/11/364285120/MS/NV/GA/48749394/air-conditioner-repair-maintenance-service-1000x1000.jpg",
//         "https://5.imimg.com/data5/SELLER/Default/2023/11/364285120/MS/NV/GA/48749394/air-conditioner-repair-maintenance-service-1000x1000.jpg",
//         "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
//       ],
//       imageAlt: "Our certified technician team",
//     },
//     // {
//     //   icon: <Clock className="w-8 h-8" />,
//     //   title: "24/7 Emergency Service",
//     //   description:
//     //     "We offer round-the-clock emergency repairs to keep your home comfortable at all times. Our rapid response team is available 365 days a year, including holidays, to handle any AC emergencies. Whether it's a midnight breakdown during a heatwave or a weekend system failure, we'll be there within hours. All our emergency technicians carry fully stocked vans to handle most repairs on the spot.",
//     //   images: [
//     //     "https://5.imimg.com/data5/SELLER/Default/2023/11/364285120/MS/NV/GA/48749394/air-conditioner-repair-maintenance-service-1000x1000.jpg",
//     //     "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
//     //     "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
//     //     "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
//     //   ],
//     //   imageAlt: "24/7 emergency AC repair service",
//     // },
//     // {
//     //   icon: <Wrench className="w-8 h-8" />,
//     //   title: "Advanced Tools & Equipment",
//     //   description:
//     //     "We use state-of-the-art diagnostic tools for precise and efficient repairs. Our investment in the latest technology means faster, more accurate problem identification and resolution. From infrared thermometers to digital manifold gauges and leak detectors, we have all the specialized equipment needed to service modern AC systems. This technical advantage translates to shorter repair times and longer-lasting solutions for your cooling systems.",
//     //   images: [
//     //     "https://5.imimg.com/data5/SELLER/Default/2023/11/364285120/MS/NV/GA/48749394/air-conditioner-repair-maintenance-service-1000x1000.jpg",
//     //     "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
//     //     "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
//     //     "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
//     //   ],
//     //   imageAlt: "Professional AC repair tools",
//     // },
//     {
//       icon: <Award className="w-8 h-8" />,
//       title: "5 Years Warranty",
//       description:
//         "We stand by our work with an industry-leading warranty on parts and labor. Our 5-year guarantee covers all major components and workmanship, giving you peace of mind long after the service is complete. Unlike competitors who offer limited warranties, we provide comprehensive coverage that includes both parts and labor. This commitment to quality reflects our confidence in the durability of our repairs and the components we install.",
//       images: [
//         "https://5.imimg.com/data5/SELLER/Default/2023/11/364285120/MS/NV/GA/48749394/air-conditioner-repair-maintenance-service-1000x1000.jpg",
//         "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
//         "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
//         "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
//       ],
//       imageAlt: "Warranty documentation",
//     },
//   ];

//   return (
//     <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
//       <PageSection page="whyChooseUs" />
//       <div className="container mx-auto px-4">
//         {/* Reasons with Image Grids - Alternating Layout */}
//         <div className="space-y-20">
//           {reasons.map((reason, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true, margin: "-100px" }}
//               className={`flex flex-col ${
//                 index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//               } items-center gap-8 md:gap-12`}
//             >
//               {/* Content Section - Always on Left */}
//               <div className="w-full md:w-1/2 order-1">
//                 <motion.div
//                   initial={{ x: -50 }}
//                   whileInView={{ x: 0 }}
//                   transition={{ duration: 0.6 }}
//                   className="bg-white p-8 rounded-xl border border-gray-100"
//                 >
//                   <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-r from-blue-100 to-green-100 text-blue-600">
//                     {reason.icon}
//                   </div>
//                   <h3 className="text-2xl font-bold text-gray-800 mb-3">
//                     {reason.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4">{reason.description}</p>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg"
//                   >
//                     Learn More
//                   </motion.button>
//                 </motion.div>
//               </div>

//               {/* Image Grid Section - Always on Right */}
//               <motion.div
//                 whileHover={{ scale: 1.02 }}
//                 className="w-full md:w-1/2 order-2"
//               >
//                 <div className="grid grid-cols-2 gap-3 h-64 md:h-96">
//                   {reason.images.map((imgSrc, imgIndex) => (
//                     <motion.div
//                       key={imgIndex}
//                       whileHover={{ scale: 1.05 }}
//                       className="relative rounded-lg overflow-hidden shadow-md"
//                     >
//                       <img
//                         src={imgSrc}
//                         alt={`${reason.imageAlt} ${imgIndex + 1}`}
//                         className="w-full h-full object-cover transition-transform duration-300"
//                         onError={(e) => {
//                           e.target.onerror = null;
//                           e.target.src = "/fallback-image.jpg";
//                         }}
//                       />
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Compact Benefits Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-20"
//         >
//           <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
//             More Reasons to Choose Us
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 icon: <Users className="w-8 h-8" />,
//                 title: "Customer-Centric",
//                 desc: "Your satisfaction is our top priority",
//               },
//               {
//                 icon: <DollarSign className="w-8 h-8" />,
//                 title: "Fair Pricing",
//                 desc: "No hidden charges, transparent quotes",
//               },
//               {
//                 icon: <ThumbsUp className="w-8 h-8" />,
//                 title: "Satisfaction Guarantee",
//                 desc: "We don't stop until you're happy",
//               },
//               {
//                 icon: <Truck className="w-8 h-8" />,
//                 title: "Fast Response",
//                 desc: "Same-day service available",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all"
//               >
//                 <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-blue-50 text-blue-600">
//                   {item.icon}
//                 </div>
//                 <h4 className="text-lg font-semibold text-gray-800">
//                   {item.title}
//                 </h4>
//                 <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Stats Section with Image Background */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mt-20 rounded-xl overflow-hidden relative"
//         >
//           <div className="absolute inset-0 bg-blue-900/70 z-10"></div>
//           <img
//             src="https://5.imimg.com/data5/SELLER/Default/2023/11/364285120/MS/NV/GA/48749394/air-conditioner-repair-maintenance-service-1000x1000.jpg"
//             alt="Our professional AC repair team"
//             className="w-full h-64 md:h-96 object-cover"
//           />
//           <div className="relative z-20 p-8 md:p-12 text-white">
//             <h3 className="text-2xl md:text-3xl font-bold mb-6">
//               Our Service in Numbers
//             </h3>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               {[
//                 { number: "10K+", label: "Happy Customers" },
//                 { number: "15+", label: "Years Experience" },
//                 { number: "98%", label: "Success Rate" },
//                 { number: "45 min", label: "Avg. Response" },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   className="text-center"
//                 >
//                   <div className="text-3xl md:text-4xl font-bold mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-blue-200">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Whychooseus;

// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   ShieldCheck,
//   Award,
//   Users,
//   DollarSign,
//   ThumbsUp,
//   Truck,
// } from "lucide-react";
// import PageSection from "../../components/Herosection/PageSection";

// const Whychooseus = () => {
//   const [data, setData] = useState({
//     mainReasons: [],
//     compactBenefits: [],
//     stats: [],
//     statsBackgroundImage: "",
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Base URLs
//   const API_BASE_URL =
//     "https://deccanservices.demovoting.com/api/why-choose-us";
//   const STORAGE_BASE_URL = "https://deccanservices.demovoting.com/storage/";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(API_BASE_URL);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (err) {
//         setError(err.message);
//         console.error("Error fetching data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://deccanservices.demovoting.com/api/why-choose-us"
//         );
//         setData(response.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // const getIconComponent = (iconName) => {
//   //   // Remove 'lucide-' prefix if present
//   //   const cleanIconName = iconName.replace("lucide-", "");

//   //   const iconMap = {
//   //     "shield-check": <ShieldCheck className="w-8 h-8" />,
//   //     award: <Award className="w-8 h-8" />,
//   //     users: <Users className="w-8 h-8" />,
//   //     "dollar-sign": <DollarSign className="w-8 h-8" />,
//   //     "thumbs-up": <ThumbsUp className="w-8 h-8" />,
//   //     truck: <Truck className="w-8 h-8" />,
//   //   };

//   //   return iconMap[cleanIconName] || null;
//   // };

//   if (loading)
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   if (error)
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         Error: {error}
//       </div>
//     );

//   // Get icon component based on icon name from API
//   const getIconComponent = (iconName) => {
//     const iconMap = {
//       "lucide-users": <Users className="w-8 h-8" />,
//       "fa-user-circle": <Users className="w-8 h-8" />,
//       "lucide-shield-check": <ShieldCheck className="w-8 h-8" />,
//       "lucide-clock": <Clock className="w-8 h-8" />,
//       "lucide-wrench": <Wrench className="w-8 h-8" />,
//       "lucide-award": <Award className="w-8 h-8" />,
//       "lucide-dollar-sign": <DollarSign className="w-8 h-8" />,
//       "lucide-thumbs-up": <ThumbsUp className="w-8 h-8" />,
//       "lucide-truck": <Truck className="w-8 h-8" />,
//     };
//     return iconMap[iconName] || <Users className="w-8 h-8" />;
//   };

//   if (loading) return <div className="text-center py-20">Loading...</div>;
//   if (error)
//     return <div className="text-center py-20 text-red-500">Error: {error}</div>;

//   return (
//     <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
//       <PageSection page="whyChooseUs" />
//       <div className="container mx-auto px-4">
//         {/* Main Reasons Section */}
//         <div className="space-y-20">
//           {data.mainReasons.map((reason, index) => (
//             <motion.div
//               key={reason.id}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true, margin: "-100px" }}
//               className={`flex flex-col ${
//                 index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//               } items-center gap-8 md:gap-12`}
//             >
//               {/* Content Section */}
//               <div className="w-full md:w-1/2 order-1">
//                 <motion.div
//                   initial={{ x: -50 }}
//                   whileInView={{ x: 0 }}
//                   transition={{ duration: 0.6 }}
//                   className="bg-white p-8 rounded-xl border border-gray-100"
//                 >
//                   {reason.icon && (
//                     <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-r from-blue-100 to-green-100 text-blue-600">
//                       {getIconComponent(reason.icon)}
//                     </div>
//                   )}
//                   <h3 className="text-2xl font-bold text-gray-800 mb-3">
//                     {reason.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4">{reason.description}</p>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg"
//                   >
//                     Learn More
//                   </motion.button>
//                 </motion.div>
//               </div>

//               {/* Image Section */}
//               {reason.image_url && (
//                 <motion.div
//                   whileHover={{ scale: 1.02 }}
//                   className="w-full md:w-1/2 order-2"
//                 >
//                   <div className="grid grid-cols-2 gap-3 h-64 md:h-96">
//                     <motion.div
//                       whileHover={{ scale: 1.05 }}
//                       className="relative rounded-lg overflow-hidden shadow-md col-span-2"
//                     >
//                       <img
//                         src={`http://127.0.0.1:8000/storage/${reason.image_url}`}
//                         alt={reason.image_alt || reason.title}
//                         className="w-full h-full object-cover transition-transform duration-300"
//                         onError={(e) => {
//                           e.target.onerror = null;
//                           e.target.src = "/fallback-image.jpg";
//                         }}
//                       />
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               )}
//             </motion.div>
//           ))}
//         </div>

//         {/* Compact Benefits Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-20"
//         >
//           <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
//             More Reasons to Choose Us
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {data.compactBenefits.length > 0 ? (
//               data.compactBenefits.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.1 }}
//                   whileHover={{ y: -5 }}
//                   className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all"
//                 >
//                   <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-blue-50 text-blue-600">
//                     {getIconComponent(item.icon)}
//                   </div>
//                   <h4 className="text-lg font-semibold text-gray-800">
//                     {item.title}
//                   </h4>
//                   <p className="text-gray-600 text-sm mt-1">
//                     {item.description || "No description available"}
//                   </p>
//                   {item.image_url && (
//                     <div className="mt-4">
//                       <img
//                         src={`https://deccanservices.demovoting.com/storage/$(item.image_url)`}
//                         alt={item.image_alt || item.title}
//                         className="w-full h-32 object-cover rounded"
//                         onError={(e) => {
//                           e.target.onerror = null;
//                           e.target.src =
//                             "https://via.placeholder.com/300x200?text=Image+Not+Available";
//                         }}
//                       />
//                     </div>
//                   )}
//                 </motion.div>
//               ))
//             ) : (
//               <div className="col-span-4 text-center py-10">
//                 No benefits available at the moment.
//               </div>
//             )}
//           </div>
//         </motion.div>

//         {/* Stats Section - Conditionally rendered */}
//         {data.stats.length > 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="mt-20 rounded-xl overflow-hidden relative"
//           >
//             <div className="absolute inset-0 bg-blue-900/70 z-10"></div>
//             {data.statsBackgroundImage && (
//               <img
//                 src={`http://127.0.0.1:8000/storage/${data.statsBackgroundImage}`}
//                 alt="Our professional team statistics"
//                 className="w-full h-64 md:h-96 object-cover"
//               />
//             )}
//             <div className="relative z-20 p-8 md:p-12 text-white">
//               <h3 className="text-2xl md:text-3xl font-bold mb-6">
//                 Our Service in Numbers
//               </h3>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                 {data.stats.map((stat, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     className="text-center"
//                   >
//                     <div className="text-3xl md:text-4xl font-bold mb-2">
//                       {stat.number}
//                     </div>
//                     <div className="text-blue-200">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Whychooseus;

// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   ShieldCheck,
//   Clock,
//   Wrench,
//   Award,
//   Users,
//   DollarSign,
//   ThumbsUp,
//   Truck,
// } from "lucide-react";
// import PageSection from "../../components/Herosection/PageSection";

// const Whychooseus = () => {
//   const [data, setData] = useState({
//     mainReasons: [],
//     compactBenefits: [],
//     stats: [],
//     statsBackgroundImage: "",
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const API_BASE_URL =
//     "https://deccanservices.demovoting.com/api/why-choose-us";
//   const STORAGE_BASE_URL = "https://deccanservices.demovoting.com/storage/";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(API_BASE_URL);
//         setData(response.data);
//       } catch (err) {
//         setError(err.message);
//         console.error("Error fetching data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const getIconComponent = (iconName) => {
//     if (!iconName) return <Users className="w-8 h-8" />;

//     const iconMap = {
//       "lucide-users": <Users className="w-8 h-8" />,
//       "fa-user-circle": <Users className="w-8 h-8" />,
//       "lucide-shield-check": <ShieldCheck className="w-8 h-8" />,
//       "lucide-clock": <Clock className="w-8 h-8" />,
//       "lucide-wrench": <Wrench className="w-8 h-8" />,
//       "lucide-award": <Award className="w-8 h-8" />,
//       "lucide-dollar-sign": <DollarSign className="w-8 h-8" />,
//       "lucide-thumbs-up": <ThumbsUp className="w-8 h-8" />,
//       "lucide-truck": <Truck className="w-8 h-8" />,
//     };

//     return iconMap[iconName] || <Users className="w-8 h-8" />;
//   };

//   // Fixed image URL construction
//   const getImageUrl = (path) => {
//     if (!path) return "";
//     // Remove any leading slashes or backslashes
//     const cleanPath = path.replace(/^[\\/]+/, "");
//     // Check if it's already a full URL
//     if (path.startsWith("http")) return path;
//     // Construct proper storage URL
//     return `${STORAGE_BASE_URL}${cleanPath}`;
//   };

//   if (loading)
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   if (error)
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         Error: {error}
//       </div>
//     );

//   return (
//     <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
//       <PageSection page="whyChooseUs" />
//       <div className="container mx-auto px-4">
//         {/* Main Reasons Section */}
//         <div className="space-y-20">
//           {data.mainReasons.map((reason, index) => (
//             <motion.div
//               key={reason.id || index}
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true, margin: "-100px" }}
//               className={`flex flex-col ${
//                 index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//               } items-center gap-8 md:gap-12`}
//             >
//               {/* Content Section */}
//               <div className="w-full md:w-1/2 order-1">
//                 <motion.div
//                   initial={{ x: -50 }}
//                   whileInView={{ x: 0 }}
//                   transition={{ duration: 0.6 }}
//                   className="bg-white p-8 rounded-xl border border-gray-100"
//                 >
//                   {reason.icon && (
//                     <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-r from-blue-100 to-green-100 text-blue-600">
//                       {getIconComponent(reason.icon)}
//                     </div>
//                   )}
//                   <h3 className="text-2xl font-bold text-gray-800 mb-3">
//                     {reason.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4">{reason.description}</p>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg"
//                   >
//                     Learn More
//                   </motion.button>
//                 </motion.div>
//               </div>

//               {/* Image Section - Fixed image URLs */}
//               {reason.image_url && (
//                 <motion.div
//                   whileHover={{ scale: 1.02 }}
//                   className="w-full md:w-1/2 order-2"
//                 >
//                   <div className="grid grid-cols-2 gap-3 h-64 md:h-96">
//                     <motion.div
//                       whileHover={{ scale: 1.05 }}
//                       className="relative rounded-lg overflow-hidden shadow-md col-span-2"
//                     >
//                       <img
//                         src={getImageUrl(reason.image_url)}
//                         alt={
//                           reason.image_alt || reason.title || "Service image"
//                         }
//                         className="w-full h-full object-cover transition-transform duration-300"
//                         onError={(e) => {
//                           e.target.onerror = null;
//                           e.target.src =
//                             "https://via.placeholder.com/800x500?text=Image+Not+Available";
//                         }}
//                       />
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               )}
//             </motion.div>
//           ))}
//         </div>

//         {/* Compact Benefits Section - Fixed image URLs */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-20"
//         >
//           <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
//             More Reasons to Choose Us
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {data.compactBenefits.length > 0 ? (
//               data.compactBenefits.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: index * 0.1 }}
//                   whileHover={{ y: -5 }}
//                   className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all"
//                 >
//                   <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-blue-50 text-blue-600">
//                     {getIconComponent(item.icon)}
//                   </div>
//                   <h4 className="text-lg font-semibold text-gray-800">
//                     {item.title}
//                   </h4>
//                   <p className="text-gray-600 text-sm mt-1">
//                     {item.description || "No description available"}
//                   </p>
//                   {item.image_url && (
//                     <div className="mt-4">
//                       <img
//                         src={getImageUrl(item.image_url)}
//                         alt={item.image_alt || item.title || "Benefit image"}
//                         className="w-full h-32 object-cover rounded"
//                         onError={(e) => {
//                           e.target.onerror = null;
//                           e.target.src =
//                             "https://via.placeholder.com/300x200?text=Image+Not+Available";
//                         }}
//                       />
//                     </div>
//                   )}
//                 </motion.div>
//               ))
//             ) : (
//               <div className="col-span-4 text-center py-10">
//                 No benefits available at the moment.
//               </div>
//             )}
//           </div>
//         </motion.div>

//         {/* Stats Section - Fixed background image URL */}
//         {data.stats.length > 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="mt-20 rounded-xl overflow-hidden relative"
//           >
//             <div className="absolute inset-0 bg-blue-900/70 z-10"></div>
//             {data.statsBackgroundImage && (
//               <img
//                 src={getImageUrl(data.statsBackgroundImage)}
//                 alt="Our service statistics"
//                 className="w-full h-64 md:h-96 object-cover"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src =
//                     "https://via.placeholder.com/1200x600?text=Background+Image";
//                 }}
//               />
//             )}
//             <div className="relative z-20 p-8 md:p-12 text-white">
//               <h3 className="text-2xl md:text-3xl font-bold mb-6">
//                 Our Service in Numbers
//               </h3>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//                 {data.stats.map((stat, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     className="text-center"
//                   >
//                     <div className="text-3xl md:text-4xl font-bold mb-2">
//                       {stat.number}
//                     </div>
//                     <div className="text-blue-200">{stat.label}</div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Whychooseus;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Clock,
  Wrench,
  Award,
  Users,
  DollarSign,
  ThumbsUp,
  Truck,
} from "lucide-react";
import PageSection from "../../components/Herosection/PageSection";
import { useNavigate } from "react-router-dom";

useNavigate;
const Whychooseus = () => {
  const [apiData, setApiData] = useState({
    mainReasons: [],
    compactBenefits: [],
    stats: [],
    statsBackgroundImage: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://deccanservices.demovoting.com/api/why-choose-us"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setApiData(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Map icon names to Lucide components
  const getIconComponent = (iconName) => {
    if (!iconName) return <Users className="w-8 h-8" />;

    // Normalize the icon name
    const cleanIconName = iconName
      .toLowerCase()
      .replace("lucid-", "lucide-") // Fix typo
      .replace("fa-", "")
      .replace("lucide-", "")
      .replace("doller", "dollar"); // Fix typo

    const iconMap = {
      "shield-check": <ShieldCheck className="w-8 h-8" />,
      clock: <Clock className="w-8 h-8" />,
      wrench: <Wrench className="w-8 h-8" />,
      award: <Award className="w-8 h-8" />,
      users: <Users className="w-8 h-8" />,
      "user-user": <Users className="w-8 h-8" />, // Handle the fa-user-user case
      "user-circle": <Users className="w-8 h-8" />, // Handle the fa-user-circle case
      "dollar-sign": <DollarSign className="w-8 h-8" />,
      "thumbs-up": <ThumbsUp className="w-8 h-8" />,
      truck: <Truck className="w-8 h-8" />,
    };

    return iconMap[cleanIconName] || <Users className="w-8 h-8" />;
  };

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">Error: {error}</div>;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <PageSection page="whyChooseUs" />
      <div className="container mx-auto px-4">
        {/* Main Reasons Section */}
        <div className="space-y-20">
          {apiData.mainReasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-12`}
            >
              {/* Content Section */}
              <div className="w-full md:w-1/2 order-1">
                <motion.div
                  initial={{ x: -50 }}
                  whileInView={{ x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white p-8 rounded-xl border border-gray-100"
                >
                  <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-r from-blue-100 to-green-100 text-blue-600">
                    {reason.icon && getIconComponent(reason.icon)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{reason.description}</p>
                  {/* <motion.button
                    onClick={() => "/home"}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg"
                  >
                    Learn More
                  </motion.button> */}
                </motion.div>
              </div>

              {/* Image Section */}
              {reason.image_url && (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full md:w-1/2 order-2"
                >
                  <div className="grid grid-cols-2 gap-3 h-64 md:h-96 pt-15">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative rounded-lg overflow-hidden shadow-md col-span-2"
                    >
                      <img
                        src={`https://deccanservices.demovoting.com/uploads/${reason.image_url}`}
                        alt={reason.image_alt || reason.title}
                        className="w-full h-full object-cover transition-transform duration-300"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/fallback-image.jpg";
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Compact Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            More Reasons to Choose Us
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {apiData.compactBenefits
              .sort((a, b) => a.sort_order - b.sort_order) // Sort by sort_order
              .map((benefit, index) => (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all"
                >
                  {/* Icon with fallback */}
                  <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-blue-50 text-blue-600">
                    {getIconComponent(benefit.icon)}
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold text-gray-800">
                    {benefit.title}
                  </h4>

                  {/* Description with fallback */}
                  {benefit.description ? (
                    <p className="text-gray-600 text-sm mt-1">
                      {benefit.description}
                    </p>
                  ) : (
                    <p className="text-gray-400 text-sm mt-1 italic">
                      No description provided
                    </p>
                  )}
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        {apiData.stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 rounded-xl overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-blue-900/70 z-10"></div>
            {apiData.statsBackgroundImage && (
              <img
                src={`https://deccanservices.demovoting.com/uploads/${apiData.statsBackgroundImage}`}
                alt="Statistics background"
                className="w-full h-64 md:h-96 object-cover"
              />
            )}
            <div className="relative z-20 p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Our Service in Numbers
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {apiData.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold mb-2">
                      {stat.number}
                    </div>
                    <div className="text-blue-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Whychooseus;
