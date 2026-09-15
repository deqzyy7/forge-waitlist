# Prompt pour Claude - Création Waiting List Page

Salut Claude ! Je veux que tu crées une **waiting list page moderne** pour mon SaaS. Voici toutes les specs :

---

## 🎯 **Concept du projet**

**Nom du SaaS :** FORGE (ou autre nom court 1-2 syllabes comme Flux, Rend, Clip, Kino)

**Ce que fait le produit :**
- Automatisation de création de contenu e-commerce
- Montage de créatives publicitaires en batch
- Derushing automatique de vidéos
- Génération de créatives statiques et vidéos
- Pour agences, créateurs, et marques e-commerce qui veulent exécuter rapidement

---

## 🎨 **Design & Direction Artistique**

### Inspiration :
1. **shr.family** - Pour le fond avec nuages animés et l'ambiance ciel
2. **Framer sites** - Pour les animations ultra smooth
3. **feralui.dev/fur** - Pour l'effet "fur" (texte poilu) sur le logo

### Style général :
- Fond ciel bleu avec nuages animés (glassmorphism)
- Design clair et aérien (pas dark)
- Minimaliste, épuré, moderne
- Animations fluides et subtiles

---

## 📐 **Structure de la page**

### 1. Fond animé avec nuages
```
- Ciel bleu dégradé (type #87CEEB → #B0E0E6 → #F0F8FF)
- 25+ nuages générés dynamiquement
- Animation de défilement horizontal (différentes vitesses)
- Effet glassmorphism avec filtres SVG (feTurbulence + feDisplacementMap)
- 3 layers de profondeur (cloud-back, cloud-mid, cloud-front)
```

### 2. Logo principal (centré)
```
- Texte "FORGE" en ÉNORME (120-140px)
- Effet "FUR" avec multiples text-shadows pour texture poilue
- Font ultra bold (Inter 900 ou similaire)
- Animation de "respiration" du fur
- Couleur sombre (#1a1a1a) qui contraste avec le ciel
```

### 3. Badge "Now in Private Beta"
```
- Badge pill avec glassmorphism
- Dot bleu qui pulse
- Background: rgba(255, 255, 255, 0.7)
- Backdrop-filter: blur(10px)
```

### 4. Headline + Subheading
```
Headline: "Creative automation at scale"
- Font size: 48px
- Font weight: 700
- Couleur: #1a1a1a

Subheading: 
"From raw footage to ready-to-publish ads in minutes.
Video editing, derushing, and batch creative generation — all automated."
- Font size: 18px
- Couleur: #4a4a4a (text-secondary)
```

### 5. Features Grid (3 cards horizontales)
```
Card 1: ⚡ Batch Processing
Card 2: ✂️ Auto Derushing  
Card 3: 🎨 Static & Video Ads

Style :
- Background glassmorphism
- Hover: lift + shadow
- Border-radius: 12px
```

### 6. Formulaire d'inscription
```
- Input email + bouton "Join Waitlist" avec flèche →
- Background glassmorphism sur l'input wrapper
- Focus: border bleu + shadow glow
- Bouton: gradient bleu (#4169E1 → #1E90FF)
- Validation email avant submit
- Animation de succès après soumission
- Note en dessous: "No spam. Unsubscribe anytime."
```

### 7. Social Proof
```
- 4 avatars circulaires (gradients bleus)
- Texte: "Join 1,247 creators in line"
- Animation du nombre au scroll
```

### 8. Footer
```
"Built for agencies, creators, and e-commerce brands"
```

---

## 💻 **Code Structure**

### Fichiers à créer :
1. **index.html** - Structure HTML
2. **styles.css** - Tous les styles
3. **script.js** - Animations + logique formulaire

### Technologies :
- HTML5 sémantique
- CSS pur (pas de framework)
- JavaScript vanilla (pas de librairies)
- Font: Inter (Google Fonts)

---

## 🎭 **Animations requises**

### 1. Nuages :
```css
@keyframes animateCloud {
    0% { transform: translateX(-10%); }
    100% { transform: translateX(200%); }
}
```
- Chaque nuage a une vitesse aléatoire (100-300s)
- Position top aléatoire
- Taille aléatoire

### 2. Effet Fur sur le logo :
```
- Multiples text-shadows avec opacité décroissante
- Animation de "breathing" (4s ease-in-out infinite)
- Blur effect subtil qui pulse
```

### 3. Fade in séquentiel :
```
- Chaque élément fade in avec translateY
- Délais progressifs (100ms, 200ms, 300ms...)
- cubic-bezier(0.4, 0, 0.2, 1)
```

### 4. Interactions :
```
- Hover sur cards: translateY(-2px) + shadow
- Button hover: translateY(-2px) + flèche se décale
- Input focus: border glow animé
- Shake animation sur erreur email
```

---

## 🎨 **Palette de couleurs**

```css
:root {
    --sky-blue: #87CEEB;
    --text-primary: #1a1a1a;
    --text-secondary: #4a4a4a;
    --glass-bg: rgba(255, 255, 255, 0.7);
    --glass-border: rgba(255, 255, 255, 0.9);
    --accent-blue: #4169E1;
    --accent-light-blue: #1E90FF;
}
```

---

## ⚙️ **Fonctionnalités JavaScript**

### 1. Génération dynamique des nuages :
```javascript
// Créer 25 nuages avec propriétés randomisées
for (let num = 1; num < 26; num++) {
    // Clone le template cloud
    // Random: speed, top position, width, height, opacity
    // Append to sky container
}
```

### 2. Validation formulaire :
```javascript
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
```

### 3. Animation du compteur social proof :
```javascript
function animateNumber(element, start, end, duration) {
    // Anime de 1000 à 1247 en 2 secondes
    // Intersection Observer pour trigger au scroll
}
```

### 4. Success state après submit :
```javascript
// Fade out du formulaire
// Fade in du message de succès
// Save email dans localStorage (pour demo)
// TODO: Connecter à votre API backend
```

---

## 📱 **Responsive**

```css
@media (max-width: 640px) {
    - Fur logo: 60px
    - Headline: 32px
    - Features: stack vertical
    - Input + button: stack vertical
    - Padding réduit
}
```

---

## 🔧 **Effet Glassmorphism détaillé**

```css
.glass-card {
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
}
```

---

## 🌊 **Effet Fur (texture poilue) détaillé**

```css
.fur-logo {
    text-shadow: 
        /* Layers de profondeur */
        0 0 1px rgba(26, 26, 26, 0.8),
        0 1px 2px rgba(26, 26, 26, 0.7),
        0 2px 3px rgba(26, 26, 26, 0.6),
        0 3px 4px rgba(26, 26, 26, 0.5),
        0 4px 5px rgba(26, 26, 26, 0.4),
        0 5px 6px rgba(26, 26, 26, 0.3),
        /* Fuzzy outer glow */
        0 0 10px rgba(26, 26, 26, 0.2),
        0 0 20px rgba(26, 26, 26, 0.15),
        0 0 30px rgba(26, 26, 26, 0.1),
        /* Shadow profondeur */
        0 10px 15px rgba(0, 0, 0, 0.2),
        0 15px 25px rgba(0, 0, 0, 0.15);
    
    filter: contrast(1.1) brightness(1.05);
}
```

---

## 🎯 **Checklist finale**

- [ ] Fond ciel bleu avec gradient
- [ ] 25+ nuages animés qui flottent
- [ ] Logo FORGE avec effet fur
- [ ] Badge "Private Beta" qui pulse
- [ ] Headline + subheading
- [ ] 3 feature cards glassmorphism
- [ ] Formulaire email avec validation
- [ ] Message de succès animé
- [ ] Social proof avec compteur animé
- [ ] Footer
- [ ] Animations fade in séquentielles
- [ ] Hover effects smooth
- [ ] Responsive mobile
- [ ] Accessibility (keyboard nav, reduced motion)

---

## 🚀 **Pour lancer le site**

```bash
python3 -m http.server 8000
```

Puis ouvrir : `http://localhost:8000`

---

**Note importante :** 
Le site doit être **100% fonctionnel** sans build step. Tout en HTML/CSS/JS vanilla. Aucune dépendance externe sauf la font Inter de Google Fonts.

L'effet le plus important c'est le **logo FORGE avec texture fur** et les **nuages animés en fond**. Ces deux éléments doivent être ultra smooth et impressionnants visuellement.

---

Voilà toute la data ! Crée-moi cette waiting list page maintenant 🚀
