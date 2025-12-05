# Engineering Intelligence (EI) - Branding Guide

## 🎨 Brand Overview

Engineering Intelligence (EI) is a modern technology company specializing in end-to-end digital solutions. The brand identity reflects:
- **Innovation** through AI and neural network symbolism
- **Precision** through geometric microchip design
- **Technology Leadership** through futuristic color palette and clean typography

---

## 🎯 Logo Concept

### Primary Symbol: Neural Network Microchip
The logo combines two key technological concepts:
1. **Microchip/Circuit Board** - Representing engineering precision and hardware intelligence
2. **Neural Network** - Representing artificial intelligence and connected systems

The design features:
- Geometric chip outline with circuit pins
- Five neural nodes connected in a network pattern
- "EI" monogram integrated into the center
- Clean, minimal lines suitable for all sizes

---

## 🎨 Color Palette

### Primary Colors
```
Electric Blue:  #2979FF  RGB(41, 121, 255)
Tech Teal:      #00D4CF  RGB(0, 212, 207)
```

### Gradient Usage
```css
background: linear-gradient(135deg, #2979FF 0%, #00D4CF 100%);
```

### Supporting Colors (for UI)
```
Graphite Gray:  #1E1E1E  (dark backgrounds)
Slate:          #334155  (secondary backgrounds)
White:          #FFFFFF  (primary text on dark)
```

### Color Applications
- **Primary gradient**: Logo, CTAs, highlights
- **Electric Blue**: Icons, links, primary actions
- **Tech Teal**: Accents, secondary highlights
- **Graphite Gray**: Backgrounds, cards

---

## 📐 Logo Files & Usage

### Available Assets

#### 1. **logo-full.svg** (280×60px)
- **Use for**: Website headers, email signatures, presentations
- **Layout**: Horizontal (icon + text)
- **Minimum width**: 140px
- **Clear space**: 20px around logo

#### 2. **logo-vertical.svg** (200×140px)
- **Use for**: Mobile headers, app splash screens, print materials
- **Layout**: Vertical (icon above text)
- **Minimum width**: 100px
- **Clear space**: 20px around logo

#### 3. **logo-icon.svg** (48×60px)
- **Use for**: App icons, social media avatars, small UI elements
- **Minimum size**: 32×32px
- **Works standalone** without text

#### 4. **favicon.svg** (32×32px)
- **Use for**: Browser favicons, PWA icons
- **Ultra-minimal** version for tiny sizes
- **Optimized** for 16×16 and 32×32 display

---

## 🖋️ Typography

### Primary Font: **Inter**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

**Alternative options**: IBM Plex Sans, SF Pro Display, Helvetica Neue

### Font Weights
- **Bold (700)**: Headlines, logo text, CTAs
- **SemiBold (600)**: Subheadings
- **Medium (500)**: Navigation, buttons
- **Regular (400)**: Body text

### Logo Typography
```
"Engineering" - Inter Bold 18px, White
"Intelligence" - Inter Bold 18px, Gradient (Blue→Teal)
```

---

## 📏 Logo Usage Guidelines

### ✅ DO:
- Use on dark backgrounds (#1E1E1E or darker)
- Maintain minimum sizes (see above)
- Preserve gradient colors
- Keep clear space around logo
- Use SVG format when possible for sharpness

### ❌ DON'T:
- Place on light backgrounds without adjustment
- Stretch or distort proportions
- Change gradient colors
- Remove glow effect
- Add drop shadows or additional effects
- Rotate logo at angles

---

## 🌐 Digital Applications

### Website Favicon Implementation
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

### Open Graph / Social Media
- **Recommended size**: 1200×630px
- Use `logo-vertical.svg` centered on dark gradient background
- Maintain 100px padding on all sides

### Email Signature
```
[Logo: 140px width]
Engineering Intelligence
Technology Solutions
```

---

## 🎭 Logo Variations

### 1. **Full Logo** (Primary)
- Icon + "Engineering Intelligence" text
- Default for all major applications

### 2. **Icon Only**
- Standalone chip icon with EI monogram
- For tight spaces, app icons, social avatars

### 3. **Monochrome** (if needed)
- White version for very dark backgrounds
- Single color #2979FF for special cases

---

## 📱 Icon Sizes & Export Guidelines

### Favicon Sizes (Generate from favicon.svg)
```
16×16   - Browser tab
32×32   - Browser bookmark
48×48   - Windows site icon
64×64   - Windows high-DPI
```

### Mobile App Icons (Generate from logo-icon.svg)
```
180×180   - Apple Touch Icon
192×192   - Android Chrome
512×512   - Android Splash
```

### Social Media Profile Images
```
400×400   - LinkedIn, Twitter, Facebook
500×500   - Instagram
```

---

## 🔧 Technical Specifications

### SVG Guidelines
- All logos use embedded gradients (`<linearGradient>`)
- Glow effect uses `<filter>` with Gaussian blur
- Fonts embedded as system fallbacks
- Optimized for web performance

### Export Settings
```
Format:         SVG (vector)
Alternative:    PNG with transparency
Color space:    RGB
DPI:            72 (web) / 300 (print)
```

---

## 🎬 Animation Guidelines (Optional)

### Logo Reveal Animation
```css
/* Fade in with slight scale */
@keyframes logoReveal {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Glow Pulse (Hover Effect)
```css
.logo:hover {
  filter: drop-shadow(0 0 20px rgba(41, 121, 255, 0.6));
  transition: filter 0.3s ease;
}
```

---

## 📞 Brand Contact

For questions about brand usage or to request additional formats:
- **Email**: hello@engineeringintelligence.io
- **Website**: [Your website]

---

## 📄 File Formats Available

- ✅ **SVG** (scalable vector - recommended)
- ✅ **PNG** (with transparency - generate from SVG)
- ✅ **ICO** (favicon - generate from SVG)
- ⏳ **PDF** (print-ready - export from SVG)
- ⏳ **EPS** (Adobe Illustrator - export from SVG)

---

## 🚀 Quick Start

1. Use `logo-full.svg` in your website header
2. Use `favicon.svg` for browser icon
3. Use `logo-icon.svg` for app icons and avatars
4. Follow color palette for all brand materials
5. Use Inter font for consistency

---

**Version**: 1.0  
**Last Updated**: December 2025  
**Created by**: Engineering Intelligence Design Team
