import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { BsCalendarCheck } from "react-icons/bs";

const Footer = () => {
  const link = [];
  const socialIcons = [
    {
      icon: FaFacebookF,
      label: "Facebook",
      color: "text-blue-600",
      link: "https://www.facebook.com/deccan.service/",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      color: "text-pink-600",
      link: "https://www.instagram.com/deccan_services",
    },
    { icon: FaTwitter, label: "Twitter", color: "text-blue-400" },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      color: "text-green-500",
      link: "https://wa.me/919766242424",
    },
  ];

  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Why Choose Us", link: "whychooseus" },
    { name: "Contact", link: "contactus" },
  ];

  const servicesLinks = [
    { name: "AC Repair", link: "services/ac-repair" },
    { name: "Washing Machine Repair", link: "washing-machine-repair" },
    { name: "Refrigerator Repair Service", link: "refrigerator-repair" },
    { name: "Microwave Oven Repair", link: "microwave-oven-repair" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-blue-400">
            Deccan Services
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            Your trusted partner for all appliance repair needs in Nashik. We
            provide reliable, affordable, and professional repair services for
            air conditioners, washing machines, water purifiers, and more.
          </p>
          <div className="flex gap-4 mt-6">
            {socialIcons.map(({ icon: Icon, label, color, link }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                title={label}
                className={`cursor-pointer bg-gray-800 p-3 rounded-full shadow-sm hover:bg-gray-700 ${color}`}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={link.link}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Services Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            Our Services
          </h3>
          <ul className="space-y-2">
            {servicesLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={link.link}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            Contact Us
          </h3>
          <ul className="text-sm text-gray-300 space-y-3">
            <li className="flex items-start gap-3">
              <IoLocationOutline size={20} className="text-blue-400 mt-1" />
              <span>
                Nashik, Maharashtra Flat No. 7, Building No. 2, Datar Society,
                Mumbai - Agra Hwy, near Tractor House, Tigraniya Corner, Dwarka,
                Nashik, Maharashtra 422001
              </span>
            </li>
            <li className="flex items-center gap-3">
              <IoCallOutline size={20} className="text-blue-400" />
              <div>
                <a href="tel:+919766242424" className="hover:text-blue-400">
                  +91 9766242424
                </a>
                <div className="flex gap-2 mt-1">
                  <a
                    href="https://wa.me/919766242424"
                    className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded flex items-center gap-1"
                  >
                    <FaWhatsapp size={12} /> WhatsApp
                  </a>
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <IoLocationOutline size={20} className="text-blue-400 mt-1" />
              <span>
                Janta Sheri Fatehgunj, Navyug High School Road, Village:
                Vadodara (M Corp+oG) Taluka: Vadodara, Dist.: Vadodara
              </span>
            </li>
            <li className="flex items-center gap-3">
              <IoCallOutline size={20} className="text-blue-400" />
              <div>
                <a href="tel:+919766242424" className="hover:text-blue-400">
                  +91 9422294070
                </a>
                <div className="flex gap-2 mt-1">
                  <a
                    href="https://wa.me/919422294070"
                    className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded flex items-center gap-1"
                  >
                    <FaWhatsapp size={12} /> WhatsApp
                  </a>
                </div>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <MdOutlineEmail size={20} className="text-blue-400" />
              <a
                href="mailto:info@deccanservices.com"
                className="hover:text-blue-400"
              >
                info@deccanservices.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <BsCalendarCheck size={20} className="text-blue-400" />
              <span>Open 24/7 for emergency services</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center text-sm text-gray-400 border-t border-gray-800 pt-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-blue-400">Deccan Services</span>
            . All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="/" className="text-gray-400 hover:text-blue-400">
              Terms of Service
            </a>
            <a href="/" className="text-gray-400 hover:text-blue-400">
              Privacy Policy
            </a>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
