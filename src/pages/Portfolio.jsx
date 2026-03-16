import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Websites", "Branding", "Mobile Apps", "UI/UX"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Websites",
      description: "Modern online store with seamless checkout experience",
      image: "🛍️",
      tags: ["React", "laravel", "E-commerce"],
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -60 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold">
              Our{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-600 font-roboto leading-relaxed">
              Explore our collection of successful projects that showcase our
              expertise and creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg font-montserrat font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-primary text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="card overflow-hidden group cursor-pointer"
                >
                  {/* Project Image */}
                  <div className="relative h-64 bg-gradient-primary flex items-center justify-center overflow-hidden">
                    <div className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                        className="opacity-0 group-hover:opacity-100 bg-white text-primary-blue font-montserrat font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                      >
                        View Project
                      </motion.button>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-primary-blue/10 text-primary-blue text-xs font-montserrat font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-montserrat font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 font-roboto mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-roboto rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-gray-500 font-roboto">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "15+", label: "Awards Won" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-5xl font-montserrat font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-roboto">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
              What Our{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-roboto max-w-2xl mx-auto">
              Don't just take our word for it—hear from our satisfied clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "GECORE 360 transformed our online presence. Their attention to detail and creative approach exceeded our expectations.",
                author: "John Smith",
                role: "CEO, TechCorp",
              },
              {
                quote:
                  "The team's professionalism and expertise made the entire process smooth and enjoyable. Highly recommended!",
                author: "Sarah Johnson",
                role: "Marketing Director, StartupXYZ",
              },
              {
                quote:
                  "Outstanding work! They delivered a beautiful, functional website that perfectly captures our brand identity.",
                author: "Michael Brown",
                role: "Founder, Creative Studio",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="text-primary-green mb-4">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 font-roboto leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-montserrat font-bold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500 font-roboto">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
