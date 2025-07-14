import React from "react";
import { motion } from "framer-motion";

function Ourstory() {
  return (
    <div>
      {/* Our Story Section with Reversed Split Layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 order-2 md:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden h-48">
                  {/* Replace with your actual image */}
                  <img
                    src="/team-working.jpg"
                    alt="Our team working"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-48">
                  {/* Replace with your actual image */}
                  <img
                    src="/customer-service.jpg"
                    alt="Customer service"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-2 rounded-lg overflow-hidden h-64">
                  {/* Replace with your actual image */}
                  <img
                    src="/technician-with-customer.jpg"
                    alt="Technician with customer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 order-1 md:order-2"
            >
              <h2 className="text-3xl font-bold text-[#1554F3] mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2008 by Mr. Rajesh Sharma, Vaishnavi AC Repair And
                Service began as a small family business with just two
                technicians. Today, we've grown into one of the most trusted
                appliance repair services in the region.
              </p>
              <p className="text-gray-600 mb-6">
                Our success comes from treating every customer like family and
                every repair as if it were our own appliance. We take pride in
                our honest diagnostics, transparent pricing, and quality
                workmanship.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#1554F3]">
                <h3 className="font-semibold text-lg text-[#1554F3] mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  To provide reliable, affordable, and professional appliance
                  repair services while maintaining the highest standards of
                  customer satisfaction and technical excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ourstory;
