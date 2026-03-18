import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus("success");
    setTimeout(() => {
      setFormStatus(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      details: "info@gecore360.com",
      subdetails: "support@gecore360.com",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone",
      details: "+212 631-821612",
      // subdetails: "+212 6",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Address",
      details: "Casablanca, Morocco",
      // subdetails: "cfc 20000",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Heures d’Ouverture",
      details: "Lundi - Vendredi : 9h - 18h",
      subdetails: "Samedi - Dimanche : Fermé",
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
              Contactez-{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Nous
              </span>
            </h1>
            <p className="text-xl text-gray-600 font-roboto leading-relaxed">
              Vous avez une question ou vous êtes prêt à commencer votre projet?
              Nous aimerions beaucoup entendre de vous.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="card p-8 md:p-10">
                <h2 className="text-3xl font-montserrat font-bold mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-600 font-roboto mb-8">
                  Remplissez le formulaire ci-dessous et nous vous répondrons
                  dans les 24 heures.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-montserrat font-semibold text-gray-700 mb-2"
                    >
                      Nom Complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all font-roboto"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-montserrat font-semibold text-gray-700 mb-2"
                      >
                        Adresse Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all font-roboto"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-montserrat font-semibold text-gray-700 mb-2"
                      >
                        Numéro de Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all font-roboto"
                        placeholder="+212 6xx-xxxxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-montserrat font-semibold text-gray-700 mb-2"
                    >
                      Sujet *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all font-roboto"
                      placeholder="Demande de Projet"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-montserrat font-semibold text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all resize-none font-roboto"
                      placeholder="Parlez-nous de votre projet…"
                    />
                  </div>

                  {formStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-primary-green/10 border border-primary-green text-primary-green rounded-lg font-roboto"
                    >
                      Merci ! Votre message a été envoyé avec succès.{" "}
                    </motion.div>
                  )}

                  <button type="submit" className="btn-gradient w-full">
                    Envoyer le message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl font-montserrat font-bold mb-2">
                  Informations de Contact
                </h2>
                <p className="text-gray-600 font-roboto mb-8">
                  Vous pouvez nous contacter par téléphone, email ou via le
                  formulaire ci-dessous.
                </p>
              </motion.div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center text-white">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-montserrat font-bold mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-700 font-roboto">
                        {info.details}
                      </p>
                      <p className="text-gray-600 font-roboto text-sm">
                        {info.subdetails}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div
                variants={fadeInUp}
                className="card overflow-hidden h-64 bg-gray-100 flex items-center justify-center"
              >
                <div className="text-center">
                  <svg
                    className="w-16 h-16 text-gray-400 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  <p className="text-gray-500 font-roboto">
                    Localisation sur la Carte
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Foire Aux Questions
            </h2>
            <p className="text-lg text-gray-600 font-roboto max-w-2xl mx-auto">
              Réponses rapides aux questions courantes concernant nos services
              et notre processus.{" "}
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto space-y-4"
          >
            {[
              {
                question: "Quel est votre délai de projet typique ?",
                answer:
                  "Les délais des projets varient en fonction de l'ampleur et de la complexité. Un site web standard prend généralement entre 4 et 8 semaines depuis la conception jusqu'au lancement.",
              },
              {
                question:
                  "Offrez-vous un support et une maintenance continus ?",
                answer:
                  "Oui, nous proposons des packages de maintenance complets pour nous assurer que vos actifs numériques restent sécurisés, à jour et optimisés.",
              },
              {
                question: "Quel est votre structure de tarification ?",
                answer:
                  "Nous proposons une tarification flexible basée sur les exigences du projet. Contactez-nous pour obtenir un devis détaillé adapté à vos besoins spécifiques.",
              },
              {
                question:
                  "Pouvez-vous travailler avec nos directives de marque existantes ?",
                answer:
                  "Absolument ! Nous collaborons en toute simplicité avec les directives de marque existantes ou nous aidons à en développer de nouvelles si nécessaire.",
              },
            ].map((faq, index) => (
              <motion.div key={index} variants={fadeInUp} className="card p-6">
                <h3 className="text-lg font-montserrat font-bold mb-3 text-primary-blue">
                  {faq.question}
                </h3>
                <p className="text-gray-600 font-roboto leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
