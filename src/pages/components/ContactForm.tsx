import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react";

interface ContactFormProps {
  formule: string;
  subject: string;
  setFormule?: (formule: string) => void; // Optional setter for formule
  setSubject?: (subject: string) => void; // Optional setter for subject
}

const ContactForm: React.FC<ContactFormProps> = ({ formule, subject, setFormule, setSubject }) => {
  const [isLoading, setIsLoading] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Envoie d'email
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const htmlTemplate = `
      <div>
        <h2 style="color:#c0392b;">Nouvelle demande de contact</h2>
        <table style="border-collapse: collapse; width:100%; max-width:600px;">
          <tr>
            <td style="padding:8px; border:1px solid #ddd;"><strong>👤 Nom</strong></td>
            <td style="padding:8px; border:1px solid #ddd;">${formData.fullName}</td>
          </tr>
          <tr>
            <td style="padding:8px; border:1px solid #ddd;"><strong>📧 Email</strong></td>
            <td style="padding:8px; border:1px solid #ddd;">${formData.email}</td>
          </tr>
          <tr>
            <td style="padding:8px; border:1px solid #ddd;"><strong>📱 Téléphone</strong></td>
            <td style="padding:8px; border:1px solid #ddd;">${formData.phone || "Non renseigné"}</td>
          </tr>
          <tr>
            <td style="padding:8px; border:1px solid #ddd;"><strong>🏢 Entreprise</strong></td>
            <td style="padding:8px; border:1px solid #ddd;">${formData.company || "Non renseignée"}</td>
          </tr>
          <tr>
            <td style="padding:8px; border:1px solid #ddd;"><strong>🛠 Service</strong></td>
            <td style="padding:8px; border:1px solid #ddd;">${formData.service || "Non renseigné"}</td>
          </tr>
          <tr>
            <td style="padding:8px; border:1px solid #ddd;"><strong>📝 Formule</strong></td>
            <td style="padding:8px; border:1px solid #ddd;">${formule || "Non renseignée"}</td>
          </tr>
          <tr>
            <td style="padding:8px; border:1px solid #ddd; vertical-align:top;"><strong>💬 Message</strong></td>
            <td style="padding:8px; border:1px solid #ddd; white-space:pre-line;">
              ${formData.message}
            </td>
          </tr>
        </table>
      </div>
    `;

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: formData.email,
          subject: `Demande de ${formData.fullName} - ${subject}`,
          html: htmlTemplate,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Erreur lors de l'envoi");
        setIsLoading("error");
      }

      setIsLoading("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Impossible d'envoyer l'email. Veuillez réessayer plus tard.");
      setIsLoading("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto border rounded-2xl p-8 space-y-6 mb-10"
      id="contact-form"
    >
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
          value={subject}
          onChange={(e) => setSubject?.(e.target.value)}
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
          value={formule}
          onChange={(e) => setFormule?.(e.target.value)}
          className="mt-1 block w-full rounded-xl border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring focus:ring-red-200"
        >
          <option value="">-- Sélectionnez une formule --</option>
          <option value="heure">Forfait à l'heure (100€ HT)</option>
          <option value="journalier">Forfait journalier (600€ HT)</option>
          <option value="mensuel">Forfait mensuel (2000€ HT)</option>
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
      <div className="gap-4 mx-[20%]">
        {isLoading === "success" ? (
          <Alert variant="success">
            <CheckCircle2Icon />
            <AlertTitle>Email envoyé avec succès !</AlertTitle>
            <AlertDescription>Vous allez recevoir un email de confirmation sous peu.</AlertDescription>
          </Alert>
        ) : isLoading === "error" ? (
          <Alert variant="destructive">
            <AlertCircleIcon />
            <AlertTitle>Une erreur s'est produite.</AlertTitle>
            <AlertDescription>
              <p>Vérifiez vos informations et réessayez. Certains champs sont manquants ou invalides.</p>
            </AlertDescription>
          </Alert>
        ) : null}
      </div>
    </form>
  );
};

export default ContactForm;
