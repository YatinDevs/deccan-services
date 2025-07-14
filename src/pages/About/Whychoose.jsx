import React from "react";

function Whychoose() {
  return (
    <div>
      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1554F3] mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We go above and beyond to ensure your complete satisfaction with
              every service call.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-md text-center"
            >
              <div className="bg-[#1554F3] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <ToolOutlined className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Technicians</h3>
              <p className="text-gray-600">
                Our team consists of factory-trained technicians with
                specialized knowledge in all major appliance brands.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md text-center"
            >
              <div className="bg-[#1554F3] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <SafetyCertificateOutlined className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
              <p className="text-gray-600">
                All repairs come with a 90-day warranty on parts and labor. We
                stand behind our work.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md text-center"
            >
              <div className="bg-[#1554F3] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <TeamOutlined className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We listen carefully and
                explain all repair options clearly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Whychoose;
