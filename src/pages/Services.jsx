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
      title: "Développement Web",
      description:
        "Sites web et applications web sur mesure, responsives, développés avec des technologies de pointe.",
      features: [
        "Développement de sites web personnalisés",
        "Solutions e-commerce",
        "Applications Web Progressives (PWA)",
        "Développement d’API Backend",
        "Intégration CMS",
        "Optimisation des performances",
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
      title: "Design UI/UX",
      description:
        "Des designs beaux et intuitifs, axés sur une expérience utilisateur exceptionnelle.",
      features: [
        "Recherche utilisateur & tests",
        "Wireframing & prototypage",
        "Conception d’interfaces",
        "Systèmes de design",
        "Design d’applications mobiles",
        "Audits d’utilisabilité",
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
      title: "Marketing Digital",
      description:
        "Stratégies de marketing axées sur les données qui amplifient votre marque et génèrent des résultats mesurables.",
      features: [
        "Optimisation SEO",
        "Marketing sur les réseaux sociaux",
        "Stratégie de contenu",
        "Campagnes PPC",
        "Email Marketing",
        "Analyse & reporting",
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
      title: "Développement d’Applications Mobiles",
      description:
        "Applications mobiles natives et multiplateformes qui engagent et séduisent les utilisateurs..",
      features: [
        "Développement iOS",
        "Développement Android",
        "Applications React Native",
        "Optimisation App Store",
        "Notifications push",
        "Fonctionnalités hors ligne",
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
      title: "Identité de Marque",
      description:
        " solutions de branding qui établissent une présence de marque mémorable et impactante.",
      features: [
        "Conception de logo",
        "Conception de logo",
        "Identité visuelle",
        "Supports marketing",
        "Stratégie de marque",
        "Positionnement de marque",
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
              Nos{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 font-roboto leading-relaxed">
              Des solutions digitales complètes, conçues pour valoriser votre
              entreprise et générer des résultats concrets.
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
                  En Savoir Plus
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
              Notre{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Processus
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-roboto max-w-2xl mx-auto">
              Une méthodologie éprouvée qui garantit la réussite de chaque
              projet.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Découverte",
                description:
                  "Nous commençons par comprendre vos objectifs, vos défis et votre public cible.",
              },
              {
                number: "02",
                title: "Stratégie",
                description:
                  "Nous développons un plan complet adapté à vos besoins spécifiques.",
              },
              {
                number: "03",
                title: "Exécution",
                description:
                  "Notre équipe donne vie à votre vision avec précision et créativité.",
              },
              {
                number: "04",
                title: "Livraison",
                description:
                  "Nous lançons votre projet et fournissons un support continu ainsi qu'une optimisation.",
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
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold">
              Construisons Ensemble Quelque Chose d’Exceptionnel
            </h2>
            <p className="text-xl font-roboto text-white/90">
              Prêt à transformer votre présence digitale ? Contactez-nous dès
              aujourd'hui.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-blue font-montserrat font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Démarrer Votre Projet 
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
