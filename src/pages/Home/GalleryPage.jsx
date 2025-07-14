import { motion } from "framer-motion";
import {
  Play,
  Youtube,
  Image as ImageIcon,
  Video,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch gallery items from API
  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const response = await axios.get(
          "https://deccanservices.demovoting.com/api/gallery"
        );
        if (response.data.success) {
          setGalleryItems(response.data.data);
        } else {
          throw new Error(
            response.data.message || "Failed to fetch gallery items"
          );
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching gallery items:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryItems();
  }, []);

  // Filter items based on active tab
  const filteredItems =
    activeTab === "all"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeTab || item.type === activeTab
        );

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
      },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1554F3] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading gallery...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center text-red-500">
          <p>Error loading gallery: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-100 bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <ContentWrapper>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1554F3] mb-4">
            Our Service Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our work through images and videos showcasing our repair
            process and happy customers.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {["all", "ac", "washing", "refrigerator", "microwave", "team"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                  activeTab === tab
                    ? "bg-[#1554F3] text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab === "video" && <Video size={16} />}
                {tab === "image" && <ImageIcon size={16} />}
                {tab === "all" && <ArrowRight size={16} />}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            )
          )}
        </motion.div>

        {/* Gallery Grid */}
        {filteredItems.length > 0 ? (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((itemData) => (
              <motion.div
                key={itemData.id}
                variants={item}
                whileHover="hover"
                className="relative group rounded-xl overflow-hidden shadow-lg bg-white"
                onClick={() => setSelectedItem(itemData)}
              >
                {itemData.type === "video" ? (
                  <>
                    <img
                      src={
                        itemData.thumbnail_url ||
                        `https://i.ytimg.com/vi/${itemData.youtube_id}/hqdefault.jpg`
                      }
                      alt={itemData.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-[#1554F3] p-4 rounded-full">
                        <Play className="text-white" size={24} />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <div className="flex items-center gap-2">
                        <Youtube className="text-red-500" size={20} />
                        <span className="text-white font-medium">
                          {itemData.title}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      src={
                        itemData.image_url.startsWith("https")
                          ? itemData.image_url
                          : `https://deccanservices.demovoting.com/uploads/${itemData.image_url}`
                      }
                      alt={itemData.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800">
                        {itemData.title}
                      </h3>
                      <p className="text-sm text-gray-500 capitalize">
                        {itemData.category}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            No items found in this category
          </div>
        )}

        {/* Video Modal */}
        {selectedItem?.type === "video" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
                onClick={() => setSelectedItem(null)}
              >
                ✕
              </button>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedItem.youtube_id}?autoplay=1`}
                  title={selectedItem.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Image Modal */}
        {selectedItem?.type === "image" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl max-h-screen"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
                onClick={() => setSelectedItem(null)}
              >
                ✕
              </button>
              <img
                src={
                  selectedItem.image_url.startsWith("http")
                    ? selectedItem.image_url
                    : `https://deccanservices.demovoting.com/uploads/${selectedItem.image_url}`
                }
                alt={selectedItem.title}
                className="max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-2 text-center text-white">
                <h3 className="text-xl font-semibold">{selectedItem.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Want to See More of Our Work?
          </h2>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-lg"
          >
            <Youtube size={20} />
            Visit Our YouTube Channel
          </a>
        </motion.div> */}
      </ContentWrapper>
    </div>
  );
};

export default GalleryPage;
