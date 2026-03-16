import React from "react";
import { motion } from "framer-motion";
import haitamImage from "../Assets/images/haitam.png";

const About = () => {
  const teamMembers = [
    {
      name: "Haitam El Atifi",
      role: "full-stack developer",
      image: (
        <img
          src={haitamImage}
          alt="Haitam El Atifi"
          className="w-full h-full object-cover rounded-full"
        />
      ),
      bio: "Passionate full-stack developer dedicated to transforming bold ideas into scalable, innovative digital solutions.",
      linkedin: "https://www.linkedin.com/in/haitam-el-atifi-9a1b4b1b3/",
      github: "https://github.com/Elatifi01",
    },
    {
      name: "donel ",
      role: "**",
      image: "👨‍💻",
      bio: "***",
    },
    {
      name: "Freg",
      role: "**",
      image: "👩‍🎨",
      bio: "***",
    },
  ];

  const values = [
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Quality",
      description:
        "Excellence is our standard. Every project receives meticulous attention to detail and craftsmanship.",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Collaboration",
      description:
        "We believe in the power of teamwork, building strong partnerships with our clients.",
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
      title: "Agility",
      description:
        "We adapt quickly to changes and deliver solutions with speed without compromising quality.",
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
        staggerChildren: 0.15,
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
              About{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                GECORE 360
              </span>
            </h1>
            <p className="text-xl text-gray-600 font-roboto leading-relaxed">
              We are a team of passionate innovators, designers, and developers
              committed to transforming businesses through digital excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="card p-10 space-y-4"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
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
              </div>
              <h2 className="text-3xl font-montserrat font-bold text-primary-blue">
                Our Mission
              </h2>
              <p className="text-gray-600 font-roboto leading-relaxed">
                To empower businesses with innovative digital solutions that
                drive growth, enhance user experiences, and create lasting
                value. We strive to be more than just a service provider—we aim
                to be a trusted partner in your digital journey.
              </p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="card p-10 space-y-4"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-montserrat font-bold text-primary-green">
                Our Vision
              </h2>
              <p className="text-gray-600 font-roboto leading-relaxed">
                To be recognized as a global leader in digital innovation,
                setting industry standards for creativity, technical excellence,
                and client satisfaction. We envision a future where every
                business, regardless of size, has access to world-class digital
                solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-12">
              Our{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Story
              </span>
            </h2>
            <div className="space-y-6 text-gray-600 font-roboto leading-relaxed text-lg">
              <p>
                GECORE 360 was born from a simple yet powerful idea: businesses
                deserve digital solutions that are both innovative and
                accessible. We are a freshly launched, full-service digital
                agency, bringing together a passionate team of developers,
                designers, and strategists ready to make a mark on the digital
                landscape.
              </p>
              <p>
                Built for the modern era, we are stepping into the industry
                fully equipped with the latest skills and technologies to meet
                the rapidly evolving needs of today's businesses. While our
                journey as an agency is just beginning, our foundation is built
                on an unwavering commitment to excellence. We are dedicated to
                turning bold ideas into successful projects and building lasting
                client relationships right from day one.
              </p>
              <p>
                Today, GECORE 360 stands at the exciting intersection of
                creativity and technology, where passion meets purpose. We are
                thrilled to officially open our doors and are incredibly excited
                to partner with you to build the digital future.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
              Meet Our{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-roboto max-w-2xl mx-auto">
              A diverse group of talented professionals united by a passion for
              digital excellence.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card p-8 text-center group"
              >
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center text-6xl transform transition-transform duration-300 group-hover:scale-110">
                  {member.image}
                </div>
                <h3 className="text-2xl font-montserrat font-bold mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-blue font-montserrat font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 font-roboto">{member.bio}</p>
                <div className="flex justify-center space-x-3 mt-6">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gradient-primary hover:text-white transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href={member.github}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gradient-primary hover:text-white transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5C5.649.5.5 5.649.5 12c0 5.084 3.292 9.398 7.86 10.92.575.106.785-.25.785-.555 0-.274-.01-1-.015-1.962-3.197.694-3.872-1.54-3.872-1.54-.523-1.328-1.278-1.682-1.278-1.682-1.044-.714.08-.7.08-.7 1.154.081 1.761 1.185 1.761 1.185 1.026 1.759 2.693 1.251 3.35.957.103-.743.401-1.251.729-1.539-2.552-.29-5.236-1.276-5.236-5.68 0-1.255.448-2.281 1.183-3.085-.118-.29-.513-1.458.112-3.04 0 0 .964-.309 3.16 1.178A10.97 10.97 0 0112 6.02c.976.004 1.96.132 2.88.388 2.194-1.487 3.157-1.178 3.157-1.178.627 1.582.232 2.75.114 3.04.737.804 1.182 1.83 1.182 3.085 0 4.415-2.688 5.387-5.25 5.671.412.354.78 1.053.78 2.123 0 1.532-.014 2.768-.014 3.146 0 .308.207.667.79.554C20.21 21.394 23.5 17.083 23.5 12 23.5 5.649 18.351.5 12 .5z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
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
                Values
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-roboto max-w-2xl mx-auto">
              The principles that guide every decision we make and every project
              we undertake.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card p-8 text-center"
              >
                <div className="text-primary-blue mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-roboto text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
