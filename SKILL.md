# HyperFrames Motion Design Skill

After Effects-style motion graphics for HyperFrames video generation. Transform HTML into cinematic 4-scene videos with 3D camera moves, kinetic typography, and particle effects.

## What This Skill Does

Makes your HyperFrames videos look like professional motion graphics — not basic HTML slideshows.

| Before | After |
|--------|-------|
| Simple fades | Motion blur + elastic bounce |
| Static text | Kinetic typography |
| Flat 2D | 3D camera moves (pan, tilt, zoom) |
| Hard cuts | Smooth scene transitions |

## Templates Included

### 1. `cinematic-product.html`
4-scene product reveal:
- Logo opening with spotlight
- 3D product showcase with rotation
- Feature grid with stagger animation
- CTA with gradient text

### 2. `kinetic-typo.html`
Aggressive typography animations:
- Glitch effects
- Character-by-character reveals
- Elastic bounces
- High-energy transitions

### 3. `brand-story.html`
Elegant brand narrative:
- Smooth gradients
- Parallax elements
- Clip-path reveals
- Refined motion

### 4. `social-ad.html`
Quick social media ads:
- Flash sale format
- Bold typography
- Fast cuts
- Conversion-focused CTA

## Motion Effects Library

### CSS Effects (`css/motion-effects.css`)

**3D Camera Moves:**
- `camera-dolly` — Push in/pull out
- `camera-pan` — Horizontal sweep
- `camera-tilt` — Vertical angle change
- `camera-orbit` — 360° rotation around subject

**Visual Effects:**
- `motion-blur` — Speed-based blur
- `light-leak` — Film light leak overlay
- `lens-flare` — Cinematic flare
- `chromatic-aberration` — RGB split
- `film-grain` — Noise texture
- `vignette` — Edge darkening

**Scene Transitions:**
- `transition-iris` — Circular wipe
- `transition-wipe` — Directional wipe
- `transition-morph` — Liquid morph
- `transition-glitch` — Digital glitch

### Text Animations (`js/text-animations.js`)

```javascript
// Split text into characters and animate
splitTextChars(element, {
  stagger: 0.05,
  duration: 0.8,
  ease: 'back.out(1.7)'
});

// Typewriter effect
typewriter(element, {
  text: 'Your message here',
  speed: 0.1
});

// Scramble reveal
scrambleText(element, {
  chars: '!<>-_\\/[]{}—=+*^?#',
  duration: 1.5
});

// Mask wipe reveal
maskReveal(element, {
  direction: 'left',
  duration: 1
});
```

## Usage

### Basic Workflow

1. **Copy a template** to your workspace
2. **Customize** text, colors, emojis
3. **Render** with hyperframes:

```bash
npx hyperframes render --output my-video.mp4
```

### Customizing Templates

**Change brand name:**
```html
<h1 class="brand-logo">YOUR BRAND</h1>
```

**Change product emoji/icon:**
```html
<span class="product-icon">📦</span>
```

**Change colors:**
```css
.tagline { color: #ff0080; } /* Your brand color */
```

**Modify timing:**
```javascript
// In the timeline
.from('.element', { duration: 1.2 }) // Change duration
```

## HyperFrames Requirements

Your HTML must include:

```html
<div id="composition" 
     data-composition-id="unique-id"
     data-width="1080" 
     data-height="1920"
     data-start="0"
     data-duration="20">
  <!-- scenes here -->
</div>

<script>
  // Register timelines
  window.__timelines = {
    'unique-id': [scene1Timeline, scene2Timeline, ...]
  };
</script>
```

## Installation

```bash
# Clone to your OpenClaw skills
git clone https://github.com/2boysfromtown/hyperframes-motion.git ~/.openclaw/skills/hyperframes-motion
```

## About 2BFT

Built by 2 underqualified founders in a jewellery shop in Vaniyambadi, Tamil Nadu. Documenting the real process of building AI products from India.

- 🌐 https://2bft.in
- 🎒 https://stashed.in

---

_150+ hours of motion design research compressed into copy-paste templates._