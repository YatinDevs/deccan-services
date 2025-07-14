import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Wrench,
  ChevronLeft,
  ChevronRight,
  Star,
  Clock,
  Shield,
  Calendar,
} from "lucide-react";
import axios from "axios";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch slides from API
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await axios.get(
          "https://deccanservices.demovoting.com/api/slides"
        );
        if (response.data.success) {
          // Filter out inactive slides if needed
          const activeSlides = response.data.data.filter(
            (slide) => slide.is_active !== false
          );
          setSlides(activeSlides);
        } else {
          throw new Error(response.data.message || "Failed to fetch slides");
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching slides:", err);
        // Fallback to default slides if API fails
        // setSlides([
        //   {
        //     title: "Expert Appliance Repair in Nashik",
        //     subtitle: "Same-day service for all major brands",
        //     description:
        //       "Our certified technicians provide fast, reliable repairs with a 6-month warranty on all services.",
        //     image:
        //       "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
        //     cta: "Call Now: +91 9766242424",
        //   },
        // ]);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  const nextSlide = () => {
    if (slides.length <= 1) return;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    if (slides.length <= 1) return;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  if (loading) {
    return (
      <div className="h-screen max-h-[800px] w-full flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading slides...</p>
        </div>
      </div>
    );
  }

  if (error) {
    console.error("Error fetching slides:", error);
  }

  if (slides.length === 0) {
    return (
      <div className="h-screen max-h-[800px] w-full flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <p className="text-red-500 mb-2">No slides available</p>
          <p className="text-gray-600">Please check your API connection</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] w-full overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false} custom={currentSlide}>
            <motion.div
              key={currentSlide}
              className="absolute inset-0 bg-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title || "Appliance repair service"}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-blue-800/20"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="text-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${currentSlide}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="inline-flex items-center bg-blue-600 px-4 py-2 rounded-full mb-4"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Star className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">
                        Trusted Since 2010
                      </span>
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                      {slides[currentSlide].title}
                    </h1>

                    <motion.p
                      className="text-xl text-blue-200 mb-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {slides[currentSlide].subtitle}
                    </motion.p>

                    <motion.p
                      className="text-lg text-gray-300 mb-8 max-w-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {slides[currentSlide].description}
                    </motion.p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Features List - Only on desktop */}
              {/* <motion.div
                className="hidden lg:block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Why Choose Us?
                  </h3>

                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.8 }}
                  >
                    {[
                      {
                        icon: <Clock className="h-6 w-6 text-blue-400" />,
                        text: "Same-day service available",
                      },
                      {
                        icon: <Shield className="h-6 w-6 text-blue-400" />,
                        text: "6-month warranty on all repairs",
                      },
                      {
                        icon: <Star className="h-6 w-6 text-blue-400" />,
                        text: "Certified technicians",
                      },
                      {
                        icon: <Wrench className="h-6 w-6 text-blue-400" />,
                        text: "Genuine parts only",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="mt-1">{item.icon}</div>
                        <p className="text-lg text-gray-200">{item.text}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div> */}
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Only show if more than one slide */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="text-white w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 p-3 rounded-full backdrop-blur-sm transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="text-white w-6 h-6" />
            </button>
          </>
        )}

        {/* Indicators - Only show if more than one slide */}
        {slides.length > 1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setAutoPlay(false);
                  setTimeout(() => setAutoPlay(true), 10000);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? "bg-blue-500 w-6" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Scrolling Indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <motion.div
              className="w-1 h-2 bg-white rounded-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <div className="relative z-20 -mt-20 px-4 w-full">
        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 mx-auto w-full max-w-6xl border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                Nashik Appliance Repair
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Your trusted appliance repair specialists serving Nashik since
                2010
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <motion.a
                href="tel:+919766242424"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold w-full"
              >
                <Phone className="w-5 h-5" />
                Enquiry Now
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/contactus"
                  className="flex items-center justify-center gap-2 bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition font-semibold w-full"
                >
                  <Calendar className="w-5 h-5" />
                  Book Now
                </a>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
