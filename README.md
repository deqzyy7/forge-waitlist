# Forge - Waiting List Page

Une page d'attente moderne et élégante pour votre SaaS de création de contenu automatisé.

## 🎨 Design Features

- **Fond animé** avec effets glassmorphism et orbes flottants
- **Animations ultra-smooth** type Framer avec parallax au survol
- **Design sombre moderne** inspiré de wearerelic.xyz
- **Responsive** et optimisé mobile
- **Accessibilité** avec support clavier et reduced motion

## 🚀 Quick Start

1. Ouvrez simplement `index.html` dans votre navigateur
2. Aucune dépendance ou build nécessaire
3. Tout fonctionne en local

## 📝 Propositions de nom (1-2 syllabes)

Voici des alternatives au nom "Forge" :

1. **Forge** ⚡ (recommandé) - Court, impactant, évoque la création
2. **Flux** - Smooth, évoque le workflow
3. **Rend** - Moderne, de "render"
4. **Clip** - Simple, direct
5. **Kino** - Cool, référence au cinéma
6. **Spark** - Énergique, créatif
7. **Vex** - Tech, moderne

## 🔧 Personnalisation

### Changer le nom de marque

Dans `index.html`, modifiez :
- Le `<title>` (ligne 7)
- Le texte `.logo-text` (ligne 25)
- Le contenu de la page selon vos besoins

### Couleurs

Dans `styles.css`, ajustez les variables CSS (lignes 11-20) :
```css
--accent-primary: #6366F1;  /* Bleu principal */
--accent-secondary: #8B5CF6; /* Violet */
--accent-pink: #EC4899;      /* Rose */
```

### Intégrer votre API

Dans `script.js`, fonction `saveToWaitlist()` (ligne 105), décommentez et configurez :
```javascript
fetch('https://your-api.com/waitlist', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email })
})
```

## 📊 Fonctionnalités

- ✅ Validation d'email en temps réel
- ✅ Animation de succès après soumission
- ✅ Sauvegarde locale (localStorage) pour démo
- ✅ Compteur animé de personnes inscrites
- ✅ Effet parallax sur les orbes au mouvement de la souris
- ✅ Animations séquencées au chargement
- ✅ Support reduced motion pour accessibilité

## 🎯 Services d'email recommandés

Pour connecter votre formulaire :

1. **Mailchimp** - Simple, gratuit jusqu'à 500 contacts
2. **ConvertKit** - Parfait pour les créateurs
3. **Loops.so** - Moderne, simple API
4. **Resend** - Developer-friendly
5. **Airtable** - Comme base de données simple

## 📱 Preview

La page inclut :
- Logo avec icône SVG animée
- Badge "Now in Private Beta"
- Headline avec texte gradient animé
- 3 feature cards (Batch Processing, Auto Derushing, Static & Video Ads)
- Formulaire d'inscription avec bouton animé
- Social proof avec avatars
- Footer minimaliste

## 🌐 Déploiement

### Netlify / Vercel (recommandé)
1. Push le dossier sur GitHub
2. Connectez votre repo à Netlify ou Vercel
3. Déployez en un clic

### GitHub Pages
```bash
# Dans le dossier du projet
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin [your-repo-url]
git push -u origin main
```
Puis activez GitHub Pages dans les settings du repo.

## 💡 Conseils

- La page est optimisée pour la conversion
- Le design minimaliste réduit les distractions
- Les animations attirent l'attention sans surcharger
- Le formulaire est au centre de l'expérience

## 🎨 Inspiration

Design inspiré de :
- wearerelic.xyz (branding sombre et premium)
- Framer (animations ultra-smooth)
- Higgsfield (clarté du messaging)

---

Made with ❤️ pour AdForge (ou le nom que vous choisirez !)
