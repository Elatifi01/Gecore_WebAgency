import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hospitaImage from "../Assets/images/hospital-management.webp";
import skillTrackerImage from "../Assets/images/dashboardSkillTracker.webp";
import Branding1Image from "../Assets/images/PartnersSarl.webp";
import Branding2Image from "../Assets/images/lobickam.webp";
import BlogImage from "../Assets/images/blog.webp";
import EbolokoImage from "../Assets/images/Eboloko.webp";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("tous");

  const filters = [
    "tous",
    "Applications Bureau",
    "sites Web",
    "Branding",
    "Apllications Mobiles",
    "UI/UX",
    "Design Graphique",
  ];

  const projects = [
    {
      id: 1,
      title: "Système de Gestion Hospitalière",
      category: "Applications Bureau",
      description:
        "Application de bureau basée sur Java, permettant de gérer les rendez-vous et dossiers patients. Le système permet aux utilisateurs de créer, mettre à jour et organiser les rendez-vous via une interface simple, en appliquant les principes de la programmation orientée objet et la gestion structurée des données.",
      image: (
        <img
          src={hospitaImage}
          alt="Hospital Management"
          className="w-full h-full object-cover"
        />
      ),
      tags: ["jAVA", "POO", "MYSQL"],
    },
    {
      id: 2,
      title: "SkillTracker Application",
      category: "sites Web",
      description:
        "Application web full-stack créée pour aider les utilisateurs à suivre leur parcours d’apprentissage. L’application permet de gérer les compétences, enregistrer les progrès quotidiens, définir des objectifs et organiser les ressources d’apprentissage en un seul endroit. Elle inclut l’authentification des utilisateurs, la gestion des profils, des graphiques de progression et un tableau de bord personnalisé pour visualiser l’évolution dans le temps.",
      image: (
        <img
          src={skillTrackerImage}
          alt="Hospital Management"
          className="w-full h-full object-cover"
        />
      ),
      tags: ["Python", "Django", "SQLite", "HTML", "CSS", "Chart.js"],
    },
    {
      id: 3,
      title: "Partners SARL - Identité Visuelle",
      category: "Branding",
      description:
        "Conception d'une identité de marque forte et solidaire. Le design s'appuie sur un monogramme 'PS' stylisé, alliant un bleu de confiance et un jaune dynamique pour refléter l'engagement de l'entreprise envers des solutions sur mesure et un esprit de partenariat durable. Le logo incarne la collaboration et l'innovation, positionnant Partners SARL comme un acteur de confiance dans son secteur.",
      image: (
        <img
          src={Branding1Image}
          alt="Partners sarl"
          className="w-full h-full object-cover"
        />
      ),
      tags: ["Adobe Illustrator", "Branding", "Design Graphique"],
    },
    {
      id: 4,
      title: "Lobickam - Identité Multi-services",
      category: "Branding",
      description:
        "Création d'un univers visuel hybride pour Lobickam, combinant la location de véhicules et la restauration. Le logo utilise une séparation diagonale dynamique pour unir deux secteurs distincts sous une image de marque cohérente, professionnelle et mémorable.",
      image: (
        <img
          src={Branding2Image}
          alt="Lobickam Location Véhicule & Restauration"
          className="w-full h-full object-cover"
        />
      ),
      tags: ["Multi-service", "Design de Logo", "Logistique", "Gastronomie"],
    },
    {
      id: 5,
      title: "Blog recepies",
      category: "sites Web",
      description:
        "Développement d'un espace blog dédié à l'art culinaire de Lobickam. Cette plateforme interactive propose des recettes exclusives, des astuces de chefs et un carnet de voyage gourmand, alliant la passion de la table à l'esprit d'évasion pour une expérience utilisateur savoureuse et immersive.",
      image: (
        <img
          src={BlogImage}
          alt="Recipies"
          className="w-full h-full object-cover"
        />
      ),
      tags: ["Laravel", "MYSQL", "Tailwind CSS", "JavaScript"],
    },
    {
      id: 6,
      title: "Éboloko Sunday Juice - Design Event",
      category: "Design Graphique",
      description:
        "Conception d'un visuel publicitaire percutant pour l'événement 'Sunday Juice' mettant en vedette l'artiste Éboloko. Le design utilise des couleurs vibrantes, des jeux de typographie dynamiques et une mise en page optimisée pour les réseaux sociaux afin de maximiser l'engagement et la billetterie.",
      image: (
        <img
          src={EbolokoImage}
          alt="Éboloko Sunday Juice"
          className="w-full h-full object-cover"
        />
      ),
      tags: ["Event Design", "Affiche", "Social Media", "Entertainment"],
    },
  ];

  const filteredProjects =
    activeFilter === "tous"
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold">
              Notre{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-roboto leading-relaxed">
              Découvrez notre collection de projets réussis qui mettent en
              valeur notre expertise et notre créativité.
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
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-16"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 md:px-6 py-2.5 md:py-3 text-sm md:text-base rounded-lg font-montserrat font-semibold transition-all duration-300 ${
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
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
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
                  className="card overflow-hidden group cursor-pointer h-full"
                >
                  {/* Project Image */}
                  <div className="relative h-56 md:h-64 bg-gradient-primary flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full transform group-hover:scale-110 transition-transform duration-300">
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
                  <div className="p-5 md:p-6">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-primary-blue/10 text-primary-blue text-xs font-montserrat font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-montserrat font-bold mb-2">
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
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "5+", label: "Projects Completed" },
              { number: "3", label: "Experts" },
              { number: "99%", label: "Client Satisfaction" },
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-4">
              Ce Que Disent{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Nos Clients
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-roboto max-w-2xl mx-auto">
              Ne vous fiez pas uniquement à notre parole — découvrez les
              témoignages de nos clients satisfaits.{" "}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                quote:
                  "Réussir à lier la location de véhicules et la restauration était un défi de taille. L'identité hybride créée et le blog de recettes ont donné une âme à notre marque. Nos clients adorent l'immersion culinaire !",
                author: "Jean-Paul Mbengue",
                role: "Gérant de Lobickam",
              },
              {
                quote:
                  "SkillTracker est l'outil que je recommande à mes étudiants. L'interface Full-stack est propre, les graphiques de progression avec Chart.js sont hyper motivants. C'est du travail de pro.",
                author: "khalid mahmoud",
                role: "Formateur",
              },
              // {
              //   quote:
              //     "Outstanding work! They delivered a beautiful, functional website that perfectly captures our brand identity.",
              //   author: "Michael Brown",
              //   role: "Founder, Creative Studio",
              // },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 md:p-8"
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
