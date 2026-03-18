import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroSectionImage from "../Assets/images/hero section.webp";

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
      title: "Développement Web",
      description:
        "Des sites web sur mesure et responsives, conçus avec les dernières technologies pour propulser votre activité.",
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
      title: "Design UI/UX",
      description:
        "Des designs beaux et intuitifs, offrant une expérience utilisateur exceptionnelle et favorisant l’engagement.",
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
      title: "Marketing Digital",
      description:
        "Des campagnes marketing stratégiques qui renforcent votre marque et génèrent des résultats mesurables",
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
      <section
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6 md:px-12 lg:px-24 overflow-hidden"
        style={{ paddingTop: "var(--navbar-height, 96px)" }}
      >
        <div className="container-custom w-full pt-3">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-center md:text-left"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold leading-tight">
                Transformez votre
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  présence en ligne
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 font-roboto leading-relaxed max-w-2xl mx-auto md:mx-0">
                Nous créons des solutions digitales innovantes qui valorisent
                votre marque et génèrent une croissance mesurable. Partenaires
                avec GECORE 360 pour donner vie à votre vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <Link
                  to="/contact"
                  className="btn-gradient w-full sm:w-auto text-center"
                >
                  Commencez dès maintenant
                </Link>
                <Link
                  to="/portfolio"
                  className="btn-outline w-full sm:w-auto text-center"
                >
                  Nos Réalisations
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 pb-4 pt-8 max-w-md mx-auto md:mx-0">
                <div>
                  <h3 className="text-4xl font-montserrat font-bold text-primary-blue">
                    360°
                  </h3>
                  <p className="text-gray-600 font-roboto">
                    Stratégie Digitale{" "}
                  </p>
                </div>
                <div>
                  <h3 className="text-4xl font-montserrat font-bold text-primary-green">
                    27/7
                  </h3>
                  <p className="text-gray-600 font-roboto">support</p>
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
              className="relative order-first md:order-none"
            >
              <div className="relative w-full h-72 sm:h-96 md:h-[500px] bg-gradient-primary rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">
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
                className="hidden sm:block absolute -top-6 -right-6 w-24 h-24 bg-primary-green/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden sm:block absolute -bottom-6 -left-6 w-32 h-32 bg-primary-blue/20 rounded-full blur-2xl"
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
              Qui{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Nous Sommes
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-roboto leading-relaxed">
              GECORE 360 est une agence digitale avant-gardiste, dédiée à la
              transformation des entreprises grâce à des technologies innovantes
              et une créativité d’excellence. Forts de plusieurs années
              d’expérience et d’une équipe passionnée d’experts, nous proposons
              des solutions qui non seulement répondent aux attentes, mais les
              surpassent.
            </p>
            <p className="text-lg text-gray-600 font-roboto leading-relaxed">
              Notre mission est de donner aux marques les moyens de réussir
              grâce à des stratégies digitales de pointe, des expériences
              utilisateur fluides et des résultats mesurables. Nous croyons en
              la construction de partenariats durables basés sur la confiance,
              la transparence et l’excellence des résultats.
            </p>
            <Link to="/about" className="inline-block btn-outline mt-4">
              En Savoir Plus
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
              Nos{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-roboto max-w-2xl mx-auto">
              Nous proposons des solutions digitales complètes, adaptées aux
              besoins uniques de votre entreprise.
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
               Tous Les Services 
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
              Prêt à Lancer Votre Projet ?
            </h2>
            <p className="text-xl font-roboto text-white/90">
              Collaborons pour donner vie à votre vision. Contactez notre équipe
              dès aujourd’hui.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-blue font-montserrat font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
               Commencer Maintenant
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
