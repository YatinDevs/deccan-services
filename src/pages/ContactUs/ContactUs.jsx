// import { motion } from "framer-motion";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   MessageSquare,
//   CheckCircle,
//   ChevronRight,
//   Loader2,
// } from "lucide-react";
// import { useState } from "react";
// import PageSection from "../../components/Herosection/PageSection";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//     acceptTerms: false,
//   });

//   const [submissionState, setSubmissionState] = useState({
//     loading: false,
//     success: false,
//     error: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const sendWhatsAppMessage = (data) => {
//     const phoneNumber = "9922885346";
//     const message = `New Contact Form Submission:\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nSubject: ${data.subject}\nMessage: ${data.message}`;
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

//     // Open WhatsApp in a new tab
//     window.open(whatsappUrl, "_blank");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate required fields
//     if (
//       !formData.name ||
//       !formData.email ||
//       !formData.phone ||
//       !formData.subject ||
//       !formData.message
//     ) {
//       setSubmissionState({
//         loading: false,
//         success: false,
//         error: "Please fill all required fields",
//       });
//       return;
//     }

//     if (!formData.acceptTerms) {
//       setSubmissionState({
//         loading: false,
//         success: false,
//         error: "You must accept the terms and conditions",
//       });
//       return;
//     }

//     setSubmissionState({ loading: true, success: false, error: null });

//     try {
//       // First submit to backend API
//       const response = await fetch("http://127.0.0.1:8000/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//           Authorization: "Bearer YOUR_API_KEY",
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           phone: formData.phone,
//           subject: formData.subject,
//           message: formData.message,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Failed to submit form");
//       }

//       // Then send WhatsApp message
//       sendWhatsAppMessage(formData);

//       setSubmissionState({ loading: false, success: true, error: null });

//       // Reset form after successful submission
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//         acceptTerms: false,
//       });
//     } catch (error) {
//       setSubmissionState({
//         loading: false,
//         success: false,
//         error: error.message || "Failed to submit form. Please try again.",
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
//       <PageSection page="contact" />

//       <main className="container mx-auto px-4 py-12">
//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="lg:w-1/3"
//           >
//             <div className="bg-white rounded-xl shadow-lg p-8 h-full">
//               <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-2">
//                 <MessageSquare className="text-green-500" />
//                 Contact Info
//               </h2>

//               <div className="space-y-6">
//                 {/* Phone */}
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-blue-100 rounded-full text-blue-600">
//                     <Phone className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-700">
//                       Phone Number
//                     </h3>
//                     <a
//                       href="tel:+919766242424"
//                       className="text-blue-600 hover:underline"
//                     >
//                       +91 9766242424
//                     </a>
//                   </div>
//                 </div>

//                 {/* Address */}
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-green-100 rounded-full text-green-600">
//                     <MapPin className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-700">Address</h3>
//                     <p className="text-gray-600">
//                       Flat No. 7, Building No. 2, Datar Society, Mumbai - Agra
//                       Hwy, near Tractor House, Tigraniya Corner, Dwarka, Nashik,
//                       Maharashtra 422001
//                     </p>
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-red-100 rounded-full text-red-600">
//                     <Mail className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-700">Email</h3>
//                     <a
//                       href="mailto:info@deccanservices.com"
//                       className="text-blue-600 hover:underline"
//                     >
//                       info@deccanservices.com
//                     </a>
//                   </div>
//                 </div>

//                 {/* Hours */}
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-yellow-100 rounded-full text-yellow-600">
//                     <Clock className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-700">
//                       Working Hours
//                     </h3>
//                     <p className="text-gray-600">
//                       Monday - Sunday: 8:00 AM - 9:00 PM
//                     </p>
//                     <p className="text-gray-600">
//                       24/7 Emergency Service Available
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Map */}
//               <div className="mt-8 rounded-xl overflow-hidden shadow-md border border-gray-200">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.215318857589!2d73.8088593154163!3d18.51551898740933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf8e6d5d3fab%3A0x3b5b9333b4b5b5b5!2sKarve%20Nagar%2C%20Pune%2C%20Maharashtra%20411052!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
//                   width="100%"
//                   height="250"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   title="Our Location"
//                 ></iframe>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="lg:w-2/3"
//           >
//             <div className="bg-white rounded-xl shadow-lg p-8">
//               <h2 className="text-2xl font-bold text-blue-800 mb-2">
//                 Contact With Us!
//               </h2>
//               <p className="text-gray-600 mb-6">
//                 Fill out the form below and we'll get back to you soon
//               </p>

//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <motion.div whileHover={{ scale: 1.01 }}>
//                   <label htmlFor="name" className="block text-gray-700 mb-2">
//                     Name*
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </motion.div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                   <motion.div whileHover={{ scale: 1.01 }}>
//                     <label htmlFor="email" className="block text-gray-700 mb-2">
//                       Email*
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     />
//                   </motion.div>

//                   <motion.div whileHover={{ scale: 1.01 }}>
//                     <label htmlFor="phone" className="block text-gray-700 mb-2">
//                       Phone Number*
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     />
//                   </motion.div>
//                 </div>

//                 <motion.div whileHover={{ scale: 1.01 }}>
//                   <label htmlFor="subject" className="block text-gray-700 mb-2">
//                     Your Subject*
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </motion.div>

//                 <motion.div whileHover={{ scale: 1.01 }}>
//                   <label htmlFor="message" className="block text-gray-700 mb-2">
//                     Your Message*
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows="5"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   ></textarea>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ scale: 1.01 }}
//                   className="flex items-start"
//                 >
//                   <input
//                     type="checkbox"
//                     id="acceptTerms"
//                     name="acceptTerms"
//                     checked={formData.acceptTerms}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 mr-2"
//                   />
//                   <label htmlFor="acceptTerms" className="text-gray-700">
//                     Accept Terms & Conditions And Privacy Policy.
//                   </label>
//                 </motion.div>

//                 <motion.button
//                   type="submit"
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   disabled={submissionState.loading}
//                   className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
//                 >
//                   {submissionState.loading ? (
//                     <>
//                       <Loader2 className="w-5 h-5 animate-spin" />
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       Send Message <ChevronRight className="w-5 h-5" />
//                     </>
//                   )}
//                 </motion.button>

//                 {/* Error Message */}
//                 {submissionState.error && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="mt-4 p-4 bg-red-50 text-red-800 rounded-lg"
//                   >
//                     {submissionState.error}
//                   </motion.div>
//                 )}

//                 {/* Success Message */}
//                 {submissionState.success && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="mt-6 p-4 bg-green-50 text-green-800 rounded-lg flex items-start gap-3"
//                   >
//                     <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
//                     <div>
//                       <h3 className="font-semibold">
//                         Thank you for your message!
//                       </h3>
//                       <p>
//                         We've received your inquiry and will get back to you
//                         within 24 hours.
//                       </p>
//                     </div>
//                   </motion.div>
//                 )}
//               </form>
//             </div>
//           </motion.div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ContactUs;

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle,
  ChevronRight,
  Loader2,
} from "lucide-react";
import { useState, useEffect } from "react";
import PageSection from "../../components/Herosection/PageSection";

const ContactUs = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    acceptTerms: false,
  });

  // Contact info state from API
  const [contactInfo, setContactInfo] = useState({
    phone_number: "",
    email: "",
    address: "",
    regular_hours: "",
    emergency_hours: "",
    map_embed_url: "",
    map_title: "",
    loading: true,
    error: null,
  });

  // Form submission state
  const [submissionState, setSubmissionState] = useState({
    loading: false,
    success: false,
    error: null,
  });

  // Fetch contact info from API
  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch(
          "https://deccanservices.demovoting.com/api/contact-info"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch contact information");
        }
        const data = await response.json();
        setContactInfo({
          phone_number: data.contact_info.phone_number || "+91 9766242424",
          email: data.contact_info.email || "info@deccanservices.com",
          address:
            data.contact_info.address ||
            "Flat No. 7, Building No. 2, Datar Society, Mumbai - Agra Hwy, near Tractor House, Tigraniya Corner, Dwarka, Nashik, Maharashtra 422001",
          regular_hours:
            data.contact_info.regular_hours ||
            "Monday - Sunday: 8:00 AM - 9:00 PM",
          emergency_hours:
            data.contact_info.emergency_hours ||
            "24/7 Emergency Service Available",
          map_embed_url:
            data.contact_info.map_embed_url ||
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.215318857589!2d73.8088593154163!3d18.51551898740933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf8e6d5d3fab%3A0x3b5b9333b4b5b5b5!2sKarve%20Nagar%2C%20Pune%2C%20Maharashtra%20411052!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
          map_title: data.contact_info.map_title || "Our Location",
          loading: false,
          error: null,
        });
      } catch (error) {
        setContactInfo((prev) => ({
          ...prev,
          error: error.message,
          loading: false,
        }));
      }
    };

    fetchContactInfo();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const sendWhatsAppMessage = (data) => {
    const phoneNumber = "9766242424";
    const message = `New Contact Form Submission:\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nSubject: ${data.subject}\nMessage: ${data.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
    ) {
      setSubmissionState({
        loading: false,
        success: false,
        error: "Please fill all required fields",
      });
      return;
    }

    if (!formData.acceptTerms) {
      setSubmissionState({
        loading: false,
        success: false,
        error: "You must accept the terms and conditions",
      });
      return;
    }

    setSubmissionState({ loading: true, success: false, error: null });

    try {
      // Submit to backend API
      const response = await fetch(
        "https://deccanservices.demovoting.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer YOUR_API_KEY",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit form");
      }

      // Send WhatsApp message
      sendWhatsAppMessage(formData);

      setSubmissionState({ loading: false, success: true, error: null });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        acceptTerms: false,
      });
    } catch (error) {
      setSubmissionState({
        loading: false,
        success: false,
        error: error.message || "Failed to submit form. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-16">
      <PageSection page="contact" />

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-2">
                <MessageSquare className="text-green-500" />
                Contact Info
              </h2>

              {contactInfo.loading ? (
                <div className="flex justify-center items-center h-40">
                  <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                </div>
              ) : contactInfo.error ? (
                <div className="p-4 bg-red-50 text-red-800 rounded-lg">
                  {contactInfo.error}
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">
                        Phone Number
                      </h3>
                      <a
                        href={`tel:${contactInfo.phone_number}`}
                        className="text-blue-600 hover:underline"
                      >
                        {contactInfo.phone_number}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-full text-green-600">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">
                        Address{" "}
                        <span className="text-red-300 font-medium">
                          Head Office
                          <br />
                          <span>(Nashik, Maharashtra)</span>
                        </span>
                      </h3>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>

                  {/* Address Gujarat */}

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">
                        Phone Number
                      </h3>
                      <a
                        href="tel:+919325860758"
                        className="text-blue-600 hover:underline"
                      >
                        +91 9422294070
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-full text-green-600">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">
                        Address{" "}
                        <span className="text-red-300 font-medium">
                          Our Branch
                          <br />
                          <span>(Vadodara, Gujarat)</span>
                        </span>
                      </h3>
                      <p className="text-gray-600">
                        Janta Sheri Fatehgunj, Navyug High School Road, Village:
                        Vadodara (M Corp+oG) Taluka: Vadodara, Dist.: Vadodara
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-100 rounded-full text-red-600">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">Email</h3>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-yellow-100 rounded-full text-yellow-600">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700">
                        Working Hours
                      </h3>
                      <p className="text-gray-600">
                        {contactInfo.regular_hours}
                      </p>
                      {contactInfo.emergency_hours && (
                        <p className="text-gray-600">
                          {contactInfo.emergency_hours}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Map */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-md border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13825.348703502512!2d73.7790532673828!3d19.998141050386046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb48671b7dd5%3A0xedaf62a6d967de41!2sDeccan%20Services%20%7C%20air%20conditioning%20and%20Refrigeration%20repair%20shop!5e1!3m2!1sen!2sin!4v1752306752981!5m2!1sen!2sin"
                  width="600"
                  height="300"
                  //style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <h2 className="text-2xl font-bold text-blue-800 mb-2">
                Contact With Us!
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you soon
              </p>

              <form onSubmit={handleSubmit} className="space-y-12">
                <motion.div whileHover={{ scale: 1.01 }}>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <motion.div whileHover={{ scale: 1.01 }}>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.01 }}>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">
                      Phone Number*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </motion.div>
                </div>

                <motion.div whileHover={{ scale: 1.01 }}>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Your Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }}>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Your Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="flex items-start"
                >
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="acceptTerms" className="text-gray-700">
                    Accept Terms & Conditions And Privacy Policy.
                  </label>
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={submissionState.loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {submissionState.loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {submissionState.error && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-50 text-red-800 rounded-lg"
                  >
                    {submissionState.error}
                  </motion.div>
                )}

                {submissionState.success && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-green-50 text-green-800 rounded-lg flex items-start gap-3"
                  >
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">
                        Thank you for your message!
                      </h3>
                      <p>
                        We've received your inquiry and will get back to you
                        within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
