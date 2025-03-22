import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation des données
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Pour une solution gratuite, vous pouvez utiliser :
    // 1. Nodemailer avec un service gratuit comme Gmail (limité)
    // 2. Resend.com (offre un quota gratuit)
    // 3. Enregistrer dans une base de données (MongoDB Atlas a un tier gratuit)
    
    // Pour une solution payante plus robuste :
    // 1. SendGrid (offre une version gratuite limitée aussi)
    // 2. Mailchimp
    // 3. Amazon SES

    // Exemple de configuration à implémenter avec l'une des solutions ci-dessus
    /*
    // Exemple avec Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
      secure: process.env.EMAIL_SERVER_SECURE === 'true',
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: 'votre-email@domaine.com',
      subject: `Nouveau message: ${subject}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<div>
          <h1>Nouveau message de contact</h1>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Sujet:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>`,
    });
    */

    // Pour l'instant, simulons une réponse réussie
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur de soumission du formulaire:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
} 