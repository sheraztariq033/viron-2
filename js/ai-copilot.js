/**
 * VIREON DIGITAL - Interactive AI Growth Copilot Simulator
 * Multi-step interactive diagnostic that builds a custom revenue & AI roadmap for prospects.
 */

class VireonAICopilot {
  constructor() {
    this.currentStep = 1;
    this.answers = {
      businessType: '',
      bottleneck: '',
      targetRevenue: ''
    };

    this.steps = document.querySelectorAll('.copilot-step');
    this.optionButtons = document.querySelectorAll('.copilot-option-btn');
    this.restartBtn = document.getElementById('copilot-restart-btn');
    this.blueprintOutput = document.getElementById('copilot-blueprint-text');
    this.recommendationTag = document.getElementById('copilot-recommendation-tag');

    this.init();
  }

  init() {
    this.optionButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const stepNum = parseInt(btn.getAttribute('data-step') || '1', 10);
        const value = btn.getAttribute('data-value') || '';
        const key = btn.getAttribute('data-key') || '';

        if (window.vireonAudio) window.vireonAudio.playClick();

        if (key && value) {
          this.answers[key] = value;
        }

        // Highlight selected in current step
        const parentStep = btn.closest('.copilot-step');
        if (parentStep) {
          parentStep.querySelectorAll('.copilot-option-btn').forEach(b => b.classList.remove('selected'));
        }
        btn.classList.add('selected');

        // Advance to next step after brief micro-delay
        setTimeout(() => {
          this.goToStep(stepNum + 1);
        }, 220);
      });
    });

    if (this.restartBtn) {
      this.restartBtn.addEventListener('click', () => {
        if (window.vireonAudio) window.vireonAudio.playClick();
        this.reset();
      });
    }
  }

  goToStep(stepNumber) {
    this.currentStep = stepNumber;
    this.steps.forEach(step => {
      const stepIndex = parseInt(step.getAttribute('data-step-index') || '1', 10);
      if (stepIndex === this.currentStep) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });

    if (this.currentStep === 4) {
      this.generateAIBlueprint();
    }
  }

  generateAIBlueprint() {
    if (window.vireonAudio) window.vireonAudio.playSuccess();

    let strategyName = 'HYBRID REVENUE ACCELERATION';
    let recommendations = [];

    if (this.answers.bottleneck === 'sales_pipeline') {
      strategyName = 'AUTONOMOUS OUTBOUND & HIGH-TICKET CLOSING SYSTEM';
      recommendations = [
        'Deploy 2 dedicated Vireon SDRs targeting high-intent decision makers across verified email + LinkedIn.',
        'Integrate 1 trained High-Ticket Closer into your calendar to achieve a 25%+ deal close rate.',
        'Implement automated CRM lead routing with custom follow-up sequences to eliminate lead leakage.'
      ];
    } else if (this.answers.bottleneck === 'paid_ads') {
      strategyName = 'PREDICTIVE OMNICHANNEL AD FUNNEL & ROAS ENGINE';
      recommendations = [
        'Launch full-funnel Meta and Google Ads with server-side CAPI tracking for 4.5x+ target ROAS.',
        'Deploy weekly direct-response video ad hooks and psychological angle testing.',
        'Install omnichannel retargeting loops capturing 80%+ of abandoned landing page visitors.'
      ];
    } else if (this.answers.bottleneck === 'content_growth') {
      strategyName = 'VIRAL CREATOR MATRIX & HOLLYWOOD-GRADE REEL FACTORY';
      recommendations = [
        'Produce 25+ retention-optimized short-form videos/mo with cinematic subtitles & sound design.',
        'Execute multi-platform distribution across TikTok, Instagram Reels, and YouTube Shorts.',
        'Establish founder personal brand positioning to drive compounding organic inbound inquiries.'
      ];
    } else {
      strategyName = 'NEXT-GEN AI AUTOMATION & SPEED-TO-LEAD POD';
      recommendations = [
        'Install 24/7 AI Voice Calling Agents that dial incoming leads in < 30 seconds.',
        'Deploy automated WhatsApp & Instagram DM qualification bots that book meetings automatically.',
        'Fine-tune an LLM sales assistant on your brand knowledge base and objection handling.'
      ];
    }

    if (this.recommendationTag) {
      this.recommendationTag.textContent = strategyName;
    }

    if (this.blueprintOutput) {
      this.blueprintOutput.innerHTML = `
        <div style="margin-bottom: 1rem; color: #f1f5f9; font-size: 1.05rem; font-weight: 600;">
          Based on your <span style="color:#00f0ff;">${this.answers.businessType || 'business'}</span> targeting <span style="color:#00c49f;">${this.answers.targetRevenue || '$100K+/mo'}</span>, Vireon AI recommends:
        </div>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;">
          ${recommendations.map(r => `
            <li style="display: flex; align-items: flex-start; gap: 0.6rem; color: #cbd5e1; font-size: 0.92rem;">
              <span style="color: #00f0ff; font-weight: bold;">⚡</span>
              <span>${r}</span>
            </li>
          `).join('')}
        </ul>
        <div style="background: rgba(0,240,255,0.08); border: 1px solid rgba(0,240,255,0.25); border-radius: 8px; padding: 0.85rem 1rem; font-size: 0.85rem; color: #94a3b8;">
          <strong style="color: #34d399;">Estimated Growth Impact:</strong> +$45,000 - $120,000/mo net pipeline with 10-day deployment speed.
        </div>
      `;
    }
  }

  reset() {
    this.currentStep = 1;
    this.answers = { businessType: '', bottleneck: '', targetRevenue: '' };
    this.optionButtons.forEach(b => b.classList.remove('selected'));
    this.goToStep(1);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new VireonAICopilot();
});
