/**
 * VIREON DIGITAL - Main Application Controller
 * Handles navigation, interactive effects, scroll reveal, forms, and WhatsApp triggers.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileDrawer();
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

// 3. Scroll Reveal Animations via Intersection Observer
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

// 4. Consultation & Booking Form Submission (Connected to WhatsApp & Email)
function initFormHandler() {
  const form = document.getElementById('growth-consultation-form');
  const statusBox = document.getElementById('form-status-message');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const name = form.querySelector('[name="name"]')?.value || 'Prospective Partner';
    const email = form.querySelector('[name="email"]')?.value || '';
    const service = form.querySelector('[name="service"]')?.value || 'Growth Strategy';
    const details = form.querySelector('[name="details"]')?.value || 'Not provided';
    const cfg = window.VIREON_CONFIG?.contact;
    const phone = (cfg?.whatsappNumber || '+12494867256').replace(/[^0-9]/g, '');

    // Button loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>⚡ Connecting Your Request...</span>`;
    }

    // Pre-format WhatsApp Message
    const waText = encodeURIComponent(
      `🦅 *New Client Inquiry — Vireon Digital*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📧 *Email:* ${email}\n` +
      `🎯 *Focus Area:* ${service}\n` +
      `📝 *Details & Goals:* ${details}\n\n` +
      `_Sent from vireondigital.com web portal_`
    );
    const waUrl = `https://wa.me/${phone}?text=${waText}`;

    // Background Email Dispatch via FormSubmit API directly to sam.nielson428@gmail.com
    const recipientEmail = cfg?.formRecipientEmail || cfg?.email || 'sam.nielson428@gmail.com';
    try {
      fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          'Client Name': name,
          'Work Email': email,
          'Selected Service': service,
          'Goals & Current Revenue': details,
          '_subject': `🔥 New Vireon Lead: ${name} — ${service}`,
          '_replyto': email,
          '_captcha': 'false',
          '_template': 'table'
        })
      }).catch(() => {});
    } catch(err) {
      // Ignore background error
    }

    // Display rich confirmation box on screen
    if (statusBox) {
      statusBox.innerHTML = `
        <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; padding: 1.25rem; border-radius: 12px; margin-top: 1rem; color: #f1f5f9; animation: fadeIn 0.4s ease;">
          <h4 style="color: #34d399; margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.5rem; font-size: 1rem;">
            <span>🚀</span> <span>Inquiry Connected Successfully!</span>
          </h4>
          <p style="font-size: 0.88rem; color: #cbd5e1; margin-bottom: 0.85rem; line-height: 1.45;">
            Thank you, <strong>${name}</strong>! Your inquiry for <em>${service}</em> has been logged and is opening in WhatsApp to connect directly with Uzair & the Vireon team.
          </p>
          <a href="${waUrl}" target="_blank" class="btn-primary" style="padding: 0.65rem 1.2rem; font-size: 0.85rem; display: inline-flex; width: 100%; justify-content: center; text-decoration: none;">
            <span>💬 Chat on WhatsApp Now</span>
          </a>
        </div>
      `;
    }

    // Open WhatsApp in new tab after brief feedback
    setTimeout(() => {
      window.open(waUrl, '_blank');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>⚡ Book 1-on-1 Growth Diagnostic</span>`;
      }
    }, 450);

    form.reset();
  });
}

// 5. Direct WhatsApp & Phone Click Handlers
function initWhatsAppButtons() {
  const whatsappBtns = document.querySelectorAll('.whatsapp-trigger');
  const cfg = window.VIREON_CONFIG?.contact;

  if (!cfg) return;

  whatsappBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = encodeURIComponent(cfg.whatsappMessage);
      const url = `https://wa.me/${cfg.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`;
      window.open(url, '_blank');
    });
  });
}

// 6. Dynamic Year
function initYear() {
  const yr = document.getElementById('current-year');
  if (yr) yr.textContent = new Date().getFullYear();
}

// 7. FAQ Accordion Click
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.faq-question-btn');
  if (!btn) return;

  const item = btn.closest('.faq-item');
  if (!item) return;

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
