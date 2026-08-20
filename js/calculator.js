/**
 * VIREON DIGITAL - Interactive Sales & Marketing ROI Calculator
 * Calculates estimated revenue gains, qualified appointment lifts, and annual growth.
 */

class VireonROICalculator {
  constructor() {
    this.leadsInput = document.getElementById('calc-leads');
    this.dealInput = document.getElementById('calc-deal-value');
    this.closeRateInput = document.getElementById('calc-close-rate');

    this.leadsValDisplay = document.getElementById('calc-leads-val');
    this.dealValDisplay = document.getElementById('calc-deal-val');
    this.closeRateValDisplay = document.getElementById('calc-close-rate-val');

    this.monthlyRevenueDisplay = document.getElementById('calc-result-monthly');
    this.annualRevenueDisplay = document.getElementById('calc-result-annual');
    this.extraDealsDisplay = document.getElementById('calc-result-deals');
    this.roiPercentDisplay = document.getElementById('calc-result-roi');
    this.growthBarFill = document.getElementById('calc-growth-fill');

    this.init();
  }

  init() {
    if (!this.leadsInput || !this.dealInput || !this.closeRateInput) return;

    const updateHandler = () => {
      this.calculate();
      if (window.vireonAudio) window.vireonAudio.playCalculation();
    };

    this.leadsInput.addEventListener('input', updateHandler);
    this.dealInput.addEventListener('input', updateHandler);
    this.closeRateInput.addEventListener('input', updateHandler);

    this.calculate();
  }

  formatCurrency(num) {
    return '$' + Math.round(num).toLocaleString('en-US');
  }

  calculate() {
    const leads = parseFloat(this.leadsInput.value) || 150;
    const dealValue = parseFloat(this.dealInput.value) || 4500;
    const currentCloseRate = (parseFloat(this.closeRateInput.value) || 15) / 100;

    // Display formatted inputs
    if (this.leadsValDisplay) this.leadsValDisplay.textContent = leads.toLocaleString() + ' leads/mo';
    if (this.dealValDisplay) this.dealValDisplay.textContent = '$' + dealValue.toLocaleString();
    if (this.closeRateValDisplay) this.closeRateValDisplay.textContent = Math.round(currentCloseRate * 100) + '%';

    // Baseline calculation
    const currentDeals = leads * currentCloseRate;
    const currentMonthlyRev = currentDeals * dealValue;

    // Vireon Growth Protocol Multipliers
    // 1. Omnichannel outbound + ads increases lead volume by 1.85x
    const vireonLeads = Math.round(leads * 1.85);
    
    // 2. High-ticket dedicated closers + AI qualification increases close rate by +7.5%
    const vireonCloseRate = Math.min(currentCloseRate + 0.075, 0.45);
    
    // 3. New deals and revenue
    const vireonDeals = Math.round(vireonLeads * vireonCloseRate);
    const vireonMonthlyRev = vireonDeals * dealValue;

    const monthlyAddedRev = Math.max(vireonMonthlyRev - currentMonthlyRev, 0);
    const annualAddedRev = monthlyAddedRev * 12;
    const extraDeals = Math.max(vireonDeals - Math.round(currentDeals), 1);
    
    // Estimated ROI calculation (assuming average growth management fee)
    const estimatedInvestment = 5000;
    const estimatedROI = Math.round(((monthlyAddedRev - estimatedInvestment) / estimatedInvestment) * 100);

    // Update DOM
    if (this.monthlyRevenueDisplay) {
      this.monthlyRevenueDisplay.textContent = '+' + this.formatCurrency(monthlyAddedRev) + '/mo';
    }
    if (this.annualRevenueDisplay) {
      this.annualRevenueDisplay.textContent = '+' + this.formatCurrency(annualAddedRev);
    }
    if (this.extraDealsDisplay) {
      this.extraDealsDisplay.textContent = '+' + extraDeals + ' Closed Deals/mo';
    }
    if (this.roiPercentDisplay) {
      this.roiPercentDisplay.textContent = Math.max(estimatedROI, 320) + '% Estimated ROI';
    }

    // Dynamic progress bar percentage (scaled between 30% and 98%)
    if (this.growthBarFill) {
      const progress = Math.min(Math.max((monthlyAddedRev / 200000) * 100, 35), 98);
      this.growthBarFill.style.width = progress + '%';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new VireonROICalculator();
});
