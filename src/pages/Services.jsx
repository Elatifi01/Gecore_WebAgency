import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: (
        <svg
          className="w-16 h-16"
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
        "Custom, responsive websites and web applications built with cutting-edge technologies.",
      features: [
        "Custom Website Development",
        "E-commerce Solutions",
        "Progressive Web Apps (PWA)",
        "Backend API Development",
        "CMS Integration",
        "Performance Optimization",
      ],
      color: "blue",
    },
    {
      icon: (
        <svg
          className="w-16 h-16"
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
        "Beautiful, intuitive designs focused on delivering exceptional user experiences.",
      features: [
        "User Research & Testing",
        "Wireframing & Prototyping",
        "Interface Design",
        "Design Systems",
        "Mobile App Design",
        "Usability Audits",
      ],
      color: "green",
    },
    {
      icon: (
        <svg
          className="w-16 h-16"
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
        "Data-driven marketing strategies that amplify your brand and drive measurable results.",
      features: [
        "SEO Optimization",
        "Social Media Marketing",
        "Content Strategy",
        "PPC Campaigns",
        "Email Marketing",
        "Analytics & Reporting",
      ],
      color: "blue",
    },
    {
      icon: (
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that engage and delight users.",
      features: [
        "iOS Development",
        "Android Development",
        "React Native Apps",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
      ],
      color: "green",
    },
    {
      icon: (
        <svg
          className="w-16 h-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Brand Identity",
      description:
        "Comprehensive branding solutions that establish memorable and impactful brand presence.",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Visual Identity",
        "Marketing Collateral",
        "Brand Strategy",
        "Brand Positioning",
      ],
      color: "blue",
    },
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
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 font-roboto leading-relaxed">
              Comprehensive digital solutions tailored to elevate your business
              and drive meaningful results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card p-8 group"
              >
                <div
                  className={`mb-6 ${
                    service.color === "blue"
                      ? "text-primary-blue group-hover:text-primary-green"
                      : "text-primary-green group-hover:text-primary-blue"
                  } transition-colors duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-montserrat font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-roboto mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-primary-green mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-gray-600 font-roboto">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  className={`w-full py-3 rounded-lg font-montserrat font-semibold transition-all duration-300 ${
                    service.color === "blue"
                      ? "bg-primary-blue/10 text-primary-blue hover:bg-primary-blue hover:text-white"
                      : "bg-primary-green/10 text-primary-green hover:bg-primary-green hover:text-white"
                  }`}
                >
                  Learn More
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
                Process
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-roboto max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
              every time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description:
                  "We start by understanding your goals, challenges, and target audience.",
              },
              {
                number: "02",
                title: "Strategy",
                description:
                  "We develop a comprehensive plan tailored to your specific needs.",
              },
              {
                number: "03",
                title: "Execution",
                description:
                  "Our team brings your vision to life with precision and creativity.",
              },
              {
                number: "04",
                title: "Delivery",
                description:
                  "We launch your project and provide ongoing support and optimization.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-3xl font-montserrat font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-primary transform translate-x-1/2" />
                  )}
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-roboto text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl font-roboto text-white/90">
              Ready to transform your digital presence? Get in touch with us
              today.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-blue font-montserrat font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
