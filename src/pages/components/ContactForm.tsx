import React, { useState } from "react";
import { Button } from "../../components/ui/button";


const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    service: "",
    formule: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Envoie d'email
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setIsLoading(true); // Ajoute un état de chargement

  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: process.env.NEXT_PUBLIC_EMAIL_TO, // Optionnel : si tu veux que le destinataire soit dynamique
        subject: `Demande de ${formData.fullName} - ${formData.subject}`,
        text: `
          Nom: ${formData.fullName}
          Email: ${formData.email}
          Téléphone: ${formData.phone}
          Entreprise: ${formData.company}
          Service: ${formData.service}
          Formule: ${formData.formule}
          Message: ${formData.message}
        `
      })
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Erreur lors de l'envoi");
    }

    alert("Email envoyé avec succès !");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      service: "",
      formule: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    alert("Impossible d'envoyer l'email. Veuillez réessayer plus tard.");
  } finally {
    setIsLoading(false);
  }
};


  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto border rounded-2xl p-8 space-y-6 mb-10">
      <h1 className="pb-4">Obtenir un devis personnalisé</h1>
            <p className="pb-3">Pour obtenir un devis personnalisé, veuillez me contacter via le formulaire ci-dessous.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nom complet *</label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring focus:ring-red-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring focus:ring-red-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Téléphone *</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring focus:ring-red-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Entreprise</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring focus:ring-red-200"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Sujet *</label>
        <input
          type="text"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring focus:ring-red-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Type de service *</label>
        <select
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring focus:ring-red-200"
        >
          <option value="">-- Sélectionnez un service --</option>
          <option value="Gestion">Gestion</option>
          <option value="ressources_humaines">Ressources humaines</option>
          <option value="hygiene_securite">Hygiène et sécurité</option>
          <option value="controle_gestion">Contrôle de gestion</option>
          <option value="transformation">Transformation des offres ou locaux</option>
          <option value="appel_d_offres">Appel d’Offres</option>
          <option value="ne_sais_pas">Je ne sais pas encore</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Formule souhaitée *</label>
        <select
          name="formule"
          required
          value={formData.formule}
          onChange={handleChange}
          className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring focus:ring-red-200"
        >
          <option value="">-- Sélectionnez une formule --</option>
          <option value="à_l_heure">À l'heure</option>
          <option value="journalier">Journalier</option>
          <option value="mensuel">Mensuel</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Détails *</label>
        <textarea
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Décrivez votre demande ou vos besoins..."
          className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring focus:ring-red-200"
        ></textarea>
      </div>

      <div className="pt-4">
        <Button type="submit" className="w-full bg-gray-800 hover:bg-gray-700 text-white rounded-xl py-3 text-lg">
          Envoyer la demande
        </Button>
      </div>
      {isLoading ? "Envoi en cours..." : "Envoyer"}
    </form>
  );
};

export default ContactForm;
