// VintageGearFord Master Client Script
document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Drawer Synchronization
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // 2. Interactive FAQs Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 3. Interactive Gear Train Ratio & Escapement Calculator
  const beatRate = document.getElementById('calc-beat-rate');
  const wheelTeeth = document.getElementById('calc-wheel-teeth');
  const gearRatio = document.getElementById('calc-gear-ratio');
  const resBph = document.getElementById('calc-bph-val');
  const resHz = document.getElementById('calc-hz-val');
  const resAccuracy = document.getElementById('calc-acc-val');

  function updateHorologyCalculations() {
    if (!beatRate || !wheelTeeth || !gearRatio) return;
    const bph = parseInt(beatRate.value, 10) || 18000;
    const teeth = parseInt(wheelTeeth.value, 10) || 15;
    const ratioVal = parseFloat(gearRatio.value) || 1.0;

    const hz = (bph / 7200).toFixed(1);
    let dailyVariance = "+/- 2.5 sec/day";

    if (bph >= 28800) {
      dailyVariance = "+/- 1.2 sec/day (COSC Benchmark)";
    } else if (bph >= 21600) {
      dailyVariance = "+/- 2.0 sec/day";
    } else {
      dailyVariance = "+/- 3.5 sec/day (Vintage Pocketwatch)";
    }

    if (resBph) resBph.textContent = bph.toLocaleString() + " vph";
    if (resHz) resHz.textContent = hz + " Hz Escapement";
    if (resAccuracy) resAccuracy.textContent = dailyVariance;
  }

  if (beatRate && wheelTeeth && gearRatio) {
    [beatRate, wheelTeeth, gearRatio].forEach(el => {
      el.addEventListener('change', updateHorologyCalculations);
      el.addEventListener('input', updateHorologyCalculations);
    });
    updateHorologyCalculations();
  }
});
