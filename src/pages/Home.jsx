import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroSectionImage from "../Assets/images/hero section.png";

const Home = () => {
  const services = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Web Development",
      description:
        "Custom, responsive websites built with the latest technologies to drive your business forward.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive designs that provide exceptional user experiences and drive engagement.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Digital Marketing",
      description:
        "Strategic marketing campaigns that amplify your brand and generate measurable results.",
    },
  ];

  const clients = [
    "Company A",
    "Brand B",
    "Corp C",
    "Business D",
    "Enterprise E",
    "Startup F",
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold leading-tight">
                Transform Your
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Digital Presence
                </span>
              </h1>
              <p className="text-xl text-gray-600 font-roboto leading-relaxed">
                We craft innovative digital solutions that elevate your brand
                and drive measurable growth. Partner with GECORE 360 to bring
                your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact" className="btn-gradient">
                  Start Your Project
                </Link>
                <Link to="/portfolio" className="btn-outline">
                  View Our Work
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <h3 className="text-4xl font-montserrat font-bold text-primary-blue">
                    360°
                  </h3>
                  <p className="text-gray-600 font-roboto">Digital Strategy</p>
                </div>
                <div>
                  <h3 className="text-4xl font-montserrat font-bold text-primary-green">
                    100%
                  </h3>
                  <p className="text-gray-600 font-roboto">
                    Client Satisfaction
                  </p>
                </div>
                {/* <div>
                  <h3 className="text-4xl font-montserrat font-bold text-primary-blue">
                    8+
                  </h3>
                  <p className="text-gray-600 font-roboto">Years Experience</p>
                </div> */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 md:h-[500px] bg-gradient-primary rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src={heroSectionImage}
                  alt="Digital strategy presentation"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-primary-green/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-blue/20 rounded-full blur-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold">
              Who{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                We Are
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-roboto leading-relaxed">
              GECORE 360 is a forward-thinking digital agency dedicated to
              transforming businesses through innovative technology and creative
              excellence. With years of experience and a passionate team of
              experts, we deliver solutions that not only meet but exceed
              expectations.
            </p>
            <p className="text-lg text-gray-600 font-roboto leading-relaxed">
              Our mission is to empower brands with cutting-edge digital
              strategies, seamless user experiences, and measurable results. We
              believe in building lasting partnerships based on trust,
              transparency, and exceptional outcomes.
            </p>
            <Link to="/about" className="inline-block btn-outline mt-4">
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-roboto max-w-2xl mx-auto">
              We offer comprehensive digital solutions tailored to your unique
              business needs.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card p-8 text-center group"
              >
                <div className="text-primary-blue group-hover:text-primary-green transition-colors duration-300 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-montserrat font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-roboto leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-gradient">
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              Trusted By Industry Leaders
            </h2>
            <p className="text-gray-600 font-roboto">
              Partnering with innovative brands worldwide
            </p>
          </motion.div>

          {/* Client Logos Marquee */}
      {/* <div className="relative overflow-hidden py-8">
            <motion.div
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              className="flex space-x-16"
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200"
                >
                  <span className="text-2xl font-montserrat font-bold text-gray-400">
                    {client}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>  */}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl font-roboto text-white/90">
              Let's collaborate to bring your vision to life. Get in touch with
              our team today.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-blue font-montserrat font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
