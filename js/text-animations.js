/**
 * ========================================
 * HYPERFRAMES TEXT ANIMATIONS
 * After Effects-style kinetic typography
 * ========================================
 */

/**
 * Split text into characters for staggered animation
 * @param {string} selector - CSS selector for target element
 * @param {object} options - Animation options
 */
function splitTextChars(selector, options = {}) {
  const element = document.querySelector(selector);
  if (!element) return;

  const text = element.textContent;
  element.innerHTML = '';
  
  const defaults = {
    tag: 'span',
    className: 'char',
    stagger: 0.05,
    duration: 0.6,
    ease: 'power3.out',
    y: 50,
    opacity: 0,
    rotation: 0,
    scale: 1
  };
  
  const config = { ...defaults, ...options };
  
  // Split into characters
  text.split('').forEach((char, i) => {
    const span = document.createElement(config.tag);
    span.className = config.className;
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    span.style.opacity = '0';
    element.appendChild(span);
    
    // Animate each character
    if (window.gsap) {
      gsap.fromTo(span, 
        {
          y: config.y,
          opacity: 0,
          rotation: config.rotation,
          scale: config.scale
        },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: config.duration,
          ease: config.ease,
          delay: i * config.stagger
        }
      );
    }
  });
}

/**
 * Split text into words for word-by-word animation
 * @param {string} selector - CSS selector for target element
 * @param {object} options - Animation options
 */
function splitTextWords(selector, options = {}) {
  const element = document.querySelector(selector);
  if (!element) return;

  const text = element.textContent;
  element.innerHTML = '';
  
  const defaults = {
    tag: 'span',
    className: 'word',
    stagger: 0.1,
    duration: 0.8,
    ease: 'power3.out',
    x: 0,
    y: 30,
    opacity: 0,
    rotation: 0
  };
  
  const config = { ...defaults, ...options };
  
  // Split into words
  text.split(' ').forEach((word, i) => {
    const span = document.createElement(config.tag);
    span.className = config.className;
    span.textContent = word;
    span.style.display = 'inline-block';
    span.style.marginRight = '0.3em';
    span.style.opacity = '0';
    element.appendChild(span);
    
    if (window.gsap) {
      gsap.fromTo(span,
        {
          x: config.x,
          y: config.y,
          opacity: 0,
          rotation: config.rotation
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: config.duration,
          ease: config.ease,
          delay: i * config.stagger
        }
      );
    }
  });
}

/**
 * Typewriter effect
 * @param {string} selector - CSS selector for target element
 * @param {object} options - Animation options
 */
function typewriter(selector, options = {}) {
  const element = document.querySelector(selector);
  if (!element) return;

  const text = element.textContent;
  element.textContent = '';
  element.style.borderRight = '2px solid currentColor';
  
  const defaults = {
    speed: 0.05,
    cursorDuration: 0.5,
    onComplete: null
  };
  
  const config = { ...defaults, ...options };
  let i = 0;
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, config.speed * 1000);
    } else {
      // Blink cursor
      if (window.gsap) {
        gsap.to(element, {
          borderRightColor: 'transparent',
          duration: config.cursorDuration,
          repeat: 3,
          yoyo: true,
          onComplete: () => {
            element.style.borderRight = 'none';
            if (config.onComplete) config.onComplete();
          }
        });
      }
    }
  }
  
  type();
}

/**
 * Scramble text effect (like decoding)
 * @param {string} selector - CSS selector for target element
 * @param {object} options - Animation options
 */
function scrambleText(selector, options = {}) {
  const element = document.querySelector(selector);
  if (!element) return;

  const finalText = element.textContent;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
  
  const defaults = {
    duration: 1.5,
    speed: 0.03,
    revealDelay: 0.1
  };
  
  const config = { ...defaults, ...options };
  let iteration = 0;
  const totalIterations = finalText.length;
  
  const interval = setInterval(() => {
    element.textContent = finalText
      .split('')
      .map((char, index) => {
        if (index < iteration) {
          return finalText[index];
        }
        if (char === ' ') return ' ';
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');
    
    if (iteration >= totalIterations) {
      clearInterval(interval);
    }
    
    iteration += 1 / (config.duration / config.speed);
  }, config.speed * 1000);
}

/**
 * Text reveal with mask
 * @param {string} selector - CSS selector for target element
 * @param {object} options - Animation options
 */
function maskReveal(selector, options = {}) {
  const element = document.querySelector(selector);
  if (!element) return;

  element.style.clipPath = 'inset(0 100% 0 0)';
  
  const defaults = {
    duration: 1,
    ease: 'power3.inOut',
    delay: 0
  };
  
  const config = { ...defaults, ...options };
  
  if (window.gsap) {
    gsap.to(element, {
      clipPath: 'inset(0 0% 0 0)',
      duration: config.duration,
      ease: config.ease,
      delay: config.delay
    });
  }
}

/**
 * Wave text animation
 * @param {string} selector - CSS selector for target element
 * @param {object} options - Animation options
 */
function waveText(selector, options = {}) {
  const element = document.querySelector(selector);
  if (!element) return;

  const text = element.textContent;
  element.innerHTML = '';
  
  const defaults = {
    stagger: 0.05,
    amplitude: 20,
    frequency: 0.5,
    duration: 2
  };
  
  const config = { ...defaults, ...options };
  
  text.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.display = 'inline-block';
    element.appendChild(span);
    
    if (window.gsap) {
      gsap.to(span, {
        y: config.amplitude,
        duration: config.duration / 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: i * config.stagger
      });
    }
  });
}

/**
 * Text along SVG path
 * @param {string} selector - CSS selector for container
 * @param {string} pathD - SVG path data
 * @param {object} options - Animation options
 */
function textOnPath(selector, pathD, options = {}) {
  const container = document.querySelector(selector);
  if (!container) return;

  const text = container.textContent;
  
  const defaults = {
    duration: 3,
    ease: 'none',
    startOffset: 0,
    endOffset: 100
  };
  
  const config = { ...defaults, ...options };
  
  container.innerHTML = `
    <svg width="100%" height="200" viewBox="0 0 800 200">
      <defs>
        <path id="textPath" d="${pathD}" fill="none"/>
      </defs>
      <text font-size="40" fill="currentColor">
        <textPath href="#textPath" startOffset="${config.startOffset}%">
          ${text}
        </textPath>
      </text>
    </svg>
  `;
  
  const textPath = container.querySelector('textPath');
  
  if (window.gsap) {
    gsap.to(textPath, {
      attr: { startOffset: config.endOffset + '%' },
      duration: config.duration,
      ease: config.ease
    });
  }
}

/**
 * Counter animation for numbers
 * @param {string} selector - CSS selector for target element
 * @param {object} options - Animation options
 */
function countUp(selector, options = {}) {
  const element = document.querySelector(selector);
  if (!element) return;

  const finalNumber = parseInt(element.textContent);
  
  const defaults = {
    duration: 2,
    ease: 'power2.out',
    suffix: '',
    prefix: ''
  };
  
  const config = { ...defaults, ...options };
  
  const obj = { value: 0 };
  
  if (window.gsap) {
    gsap.to(obj, {
      value: finalNumber,
      duration: config.duration,
      ease: config.ease,
      onUpdate: () => {
        element.textContent = config.prefix + Math.round(obj.value) + config.suffix;
      }
    });
  }
}

/**
 * Text gradient animation
 * @param {string} selector - CSS selector for target element
 * @param {object} options - Animation options
 */
function gradientText(selector, options = {}) {
  const element = document.querySelector(selector);
  if (!element) return;

  const defaults = {
    colors: ['#ff0080', '#ff8c00', '#40e0d0', '#ff0080'],
    duration: 3
  };
  
  const config = { ...defaults, ...options };
  
  element.style.background = `linear-gradient(90deg, ${config.colors.join(', ')})`;
  element.style.backgroundSize = '300% 100%';
  element.style.webkitBackgroundClip = 'text';
  element.style.backgroundClip = 'text';
  element.style.color = 'transparent';
  element.style.animation = `gradient-shift ${config.duration}s linear infinite`;
  
  // Add keyframes if not present
  if (!document.getElementById('gradient-anim')) {
    const style = document.createElement('style');
    style.id = 'gradient-anim';
    style.textContent = `
      @keyframes gradient-shift {
        0% { background-position: 0% 50%; }
        100% { background-position: 300% 50%; }
      }
    `;
    document.head.appendChild(style);
  }
}

/**
 * Stagger reveal for multiple elements
 * @param {string} selector - CSS selector for elements
 * @param {object} options - Animation options
 */
function staggerReveal(selector, options = {}) {
  const elements = document.querySelectorAll(selector);
  
  const defaults = {
    stagger: 0.1,
    duration: 0.8,
    ease: 'power3.out',
    y: 50,
    opacity: 0,
    from: 'start' // 'start', 'center', 'edges', 'random'
  };
  
  const config = { ...defaults, ...options };
  
  if (window.gsap) {
    let staggerConfig = config.stagger;
    
    if (config.from === 'center') {
      staggerConfig = { amount: config.stagger * elements.length, from: 'center' };
    } else if (config.from === 'edges') {
      staggerConfig = { amount: config.stagger * elements.length, from: 'edges' };
    } else if (config.from === 'random') {
      staggerConfig = { amount: config.stagger * elements.length, from: 'random' };
    }
    
    gsap.fromTo(elements,
      {
        y: config.y,
        opacity: config.opacity
      },
      {
        y: 0,
        opacity: 1,
        duration: config.duration,
        ease: config.ease,
        stagger: staggerConfig
      }
    );
  }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    splitTextChars,
    splitTextWords,
    typewriter,
    scrambleText,
    maskReveal,
    waveText,
    textOnPath,
    countUp,
    gradientText,
    staggerReveal
  };
}