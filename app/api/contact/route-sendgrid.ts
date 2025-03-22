import { NextResponse } from 'next/server';

/*
Pour utiliser SendGrid, vous devrez d'abord installer le paquet:
npm install @sendgrid/mail

Ensuite, créez un compte sur sendgrid.com, configurez un expéditeur vérifié 
et obtenez votre clé API pour l'ajouter à vos variables d'environnement.
*/

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

    // Configuration SendGrid (décommenter après installation)
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: 'votre-email@domaine.com', // Remplacez par votre email
      from: process.env.VERIFIED_SENDER_EMAIL, // Expéditeur vérifié dans SendGrid
      subject: `Nouveau message: ${subject}`,
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<div>
          <h1>Nouveau message de contact</h1>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Sujet:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>`,
    };
    
    await sgMail.send(msg);
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