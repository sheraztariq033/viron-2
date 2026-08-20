/**
 * VIREON DIGITAL - Main Application Controller
 * Handles navigation, interactive effects, scroll reveal, forms, and WhatsApp triggers.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileDrawer();
  initAudioToggle();
  initScrollReveals();
  initFormHandler();
  initWhatsAppButtons();
  initYear();
});

// 1. Sticky Header with Blur on Scroll
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  const topDockBtn = document.querySelector('.dock-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    if (scrollY > 400) {
      topDockBtn?.classList.add('visible');
    } else {
      topDockBtn?.classList.remove('visible');
    }
  });

  if (topDockBtn) {
    topDockBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.vireonAudio) window.vireonAudio.playClick();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// 2. Mobile Navigation Drawer
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const links = drawer?.querySelectorAll('a');

  if (!toggleBtn || !drawer) return;

  const toggle = () => {
    if (window.vireonAudio) window.vireonAudio.playClick();
    toggleBtn.classList.toggle('open');
    drawer.classList.toggle('open');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
  };

  toggleBtn.addEventListener('click', toggle);

  links?.forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.classList.remove('open');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// 3. Cyber Audio Toggle
function initAudioToggle() {
  const audioBtn = document.getElementById('audio-toggle-btn');
  if (!audioBtn) return;

  const isMuted = localStorage.getItem('vireon_audio_muted') === 'true';
  if (isMuted) audioBtn.classList.add('muted');

  audioBtn.addEventListener('click', () => {
    if (window.vireonAudio) {
      const muted = window.vireonAudio.toggleMute();
      audioBtn.classList.toggle('muted', muted);
      audioBtn.setAttribute('title', muted ? 'Unmute Futuristic UI Sounds' : 'Mute UI Sounds');
    }
  });

  // Attach hover sounds to buttons and links
  document.querySelectorAll('button, .btn-primary, .btn-secondary, .service-card, .video-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (window.vireonAudio) window.vireonAudio.playHover();
    });
  });
}

// 4. Scroll Reveal Animations via Intersection Observer
function initScrollReveals() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// 5. Consultation & Booking Form Submission
function initFormHandler() {
  const form = document.getElementById('growth-consultation-form');
  const statusBox = document.getElementById('form-status-message');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (window.vireonAudio) window.vireonAudio.playSuccess();

    const name = form.querySelector('[name="name"]')?.value || 'Prospective Partner';
    const email = form.querySelector('[name="email"]')?.value || '';
    const service = form.querySelector('[name="service"]')?.value || 'Growth Strategy';

    if (statusBox) {
      statusBox.innerHTML = `
        <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; padding: 1.25rem; border-radius: 12px; margin-top: 1rem; color: #f1f5f9;">
          <h4 style="color: #34d399; margin-bottom: 0.35rem;">🚀 Growth Request Initialized!</h4>
          <p style="font-size: 0.9rem; color: #cbd5e1;">Thank you, <strong>${name}</strong>. Our revenue team has received your priority inquiry for <em>${service}</em> and will review your profile within 2 hours.</p>
        </div>
      `;
    }

    form.reset();
  });
}

// 6. Direct WhatsApp & Phone Click Handlers
function initWhatsAppButtons() {
  const whatsappBtns = document.querySelectorAll('.whatsapp-trigger');
  const cfg = window.VIREON_CONFIG?.contact;

  if (!cfg) return;

  whatsappBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.vireonAudio) window.vireonAudio.playClick();
      const text = encodeURIComponent(cfg.whatsappMessage);
      const url = `https://wa.me/${cfg.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`;
      window.open(url, '_blank');
    });
  });
}

// 7. Dynamic Year
function initYear() {
  const yr = document.getElementById('current-year');
  if (yr) yr.textContent = new Date().getFullYear();
}

// 8. FAQ Accordion Click
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.faq-question-btn');
  if (!btn) return;

  const item = btn.closest('.faq-item');
  if (!item) return;

  if (window.vireonAudio) window.vireonAudio.playClick();

  const isActive = item.classList.contains('active');
  document.querySelectorAll('.faq-item').forEach(i => {
    i.classList.remove('active');
    const ans = i.querySelector('.faq-answer');
    if (ans) ans.style.maxHeight = '0px';
  });

  if (!isActive) {
    item.classList.add('active');
    const answer = item.querySelector('.faq-answer');
    if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
  }
});
