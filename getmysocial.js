// Navigation Menu
const handleNavigation = () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = ['features', 'how-it-works', 'pricing', 'reviews'].map(id => ({
      id,
      element: document.getElementById(id)
    }));
  
    // Function to update active navigation link
    const updateActiveNavLink = () => {
      if (!navLinks.length) return; // Exit if no nav links found
      const scrollPosition = window.scrollY + window.innerHeight / 3;
  
      // Reset all first
      navLinks.forEach(link => {
         const indicator = link.querySelector('.nav-indicator');
         if (indicator) {
             indicator.style.transform = 'scaleX(0)';
         }
         link.classList.remove('text-[#785EFF]');
      });
  
      // Find and activate the current section's link
      let activeSectionFound = false;
      for (const section of sections) {
        if (!section.element) continue;
        
        const sectionTop = section.element.offsetTop;
        const sectionHeight = section.element.offsetHeight;
        // Adjust trigger point if needed
        const triggerTop = sectionTop - nav.offsetHeight; 
        const triggerBottom = triggerTop + sectionHeight;
        
        if (scrollPosition >= triggerTop && scrollPosition < triggerBottom) {
          const navLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
          if (navLink) {
               const indicator = navLink.querySelector('.nav-indicator');
               if (indicator) {
                   indicator.style.transform = 'scaleX(1)';
               }
               navLink.classList.add('text-[#785EFF]');
               activeSectionFound = true;
               break; // Stop after finding the first active section
          }
        }
      }
      
      // Optional: Highlight first link if no section is active (e.g., at the very top)
      // if (!activeSectionFound && window.scrollY < sections[0]?.element?.offsetTop - nav.offsetHeight) {
      //    const firstNavLink = navLinks[0];
      //    if(firstNavLink) {
      //       const firstIndicator = firstNavLink.querySelector('.nav-indicator');
      //        if (firstIndicator) firstIndicator.style.transform = 'scaleX(1)';
      //        firstNavLink.classList.add('text-[#785EFF]');
      //    }
      // }
    };
  
    // Add scroll event listener for navigation highlighting
    window.addEventListener('scroll', updateActiveNavLink);
    window.addEventListener('resize', updateActiveNavLink);
  
    // Initial check for active section
    updateActiveNavLink();
  
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      menu.classList.toggle('hidden');
      menu.classList.toggle('flex');
      
      if (!menu.classList.contains('hidden') && window.innerWidth < 768) {
        nav.classList.add('bg-white', 'shadow-lg');
        menu.classList.add('animate-fade-in');
      } else {
        nav.classList.remove('bg-white', 'shadow-lg');
        menu.classList.remove('animate-fade-in');
      }
    });
  
    document.addEventListener('click', function(event) {
      const isClickInsideMenu = menu.contains(event.target);
      const isClickInsideToggle = menuToggle.contains(event.target);
  
      if (!isClickInsideMenu && !isClickInsideToggle && !menu.classList.contains('hidden') && window.innerWidth < 768) {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        nav.classList.remove('bg-white', 'shadow-lg');
      }
    });
  
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 768) {
        // Ensure mobile menu is hidden on desktop
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        nav.classList.remove('bg-white', 'shadow-lg');
      }
    });
  
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  };
  
  // Username Form Handling
  const handleUsernameForm = () => {
    const usernameInput = document.getElementById('username');
    const claimButton = document.getElementById('claim-button');
    const validationMessage = document.querySelector('.validation-message');
    const formElement = usernameInput ? usernameInput.closest('form') : null;
  
    if (!usernameInput || !claimButton || !validationMessage || !formElement) {
        console.warn('Username form elements not found.');
        return;
    }
  
    const handleUsernameSubmit = (event) => {
      event.preventDefault();
      const username = usernameInput.value;
      window.location.href = `/register?username=${encodeURIComponent(username)}`;
    };
  
    usernameInput.addEventListener('input', function() {
      const isValid = this.checkValidity();
      claimButton.disabled = !isValid;
      
      if (this.value) {
        validationMessage.classList.remove('hidden');
        if (isValid) {
          validationMessage.textContent = '✓ Link is available';
          validationMessage.className = 'validation-message text-sm mt-1 text-green-600 h-5';
        } else {
          validationMessage.textContent = 'Link must be 3-20 characters, letters, numbers, _, -';
          validationMessage.className = 'validation-message text-sm mt-1 text-red-600 h-5';
        }
      } else {
        validationMessage.textContent = '';
      }
    });
  
    formElement.addEventListener('submit', handleUsernameSubmit);
  };
  
  // How It Works Toggle
  const handleHowItWorksToggle = () => {
      const toggle = document.getElementById('how-it-works-toggle');
      const withoutDiagram = document.getElementById('without-diagram');
      const withDiagram = document.getElementById('with-diagram');
      const withoutLabel = document.getElementById('without-label');
      const withLabel = document.getElementById('with-label');
  
      // Check essential elements exist
      if (!toggle || !withoutDiagram || !withDiagram || !withoutLabel || !withLabel) {
          console.warn('How It Works toggle elements not found.');
          return;
      }
  
      const switchDiagrams = () => {
          const isChecked = toggle.checked;
          const transitionDuration = 500; // Match CSS transition duration in milliseconds
  
          // Determine which diagram is currently visible and which is hidden
          const outgoingDiagram = isChecked ? withoutDiagram : withDiagram;
          const incomingDiagram = isChecked ? withDiagram : withoutDiagram;
  
          // 1. Start fade-out transition for the outgoing diagram
          outgoingDiagram.classList.add('opacity-0', 'scale-95');
          outgoingDiagram.style.pointerEvents = 'none';
  
          // 2. After a very short delay (allow DOM update), remove 'hidden' from incoming
          //    This makes it part of the layout but still invisible (due to opacity/scale classes)
          setTimeout(() => {
              incomingDiagram.classList.remove('hidden');
  
              // 3. Immediately start the fade-in transition for the incoming diagram
              //    by removing the opacity/scale classes. Needs a tiny delay sometimes for browser paint cycle.
               requestAnimationFrame(() => { // Use requestAnimationFrame for smoother timing
                   incomingDiagram.classList.remove('opacity-0', 'scale-95');
                   incomingDiagram.style.pointerEvents = 'auto';
               });
  
          }, 10); // Small delay like 10ms
  
          // 4. After the transition duration, add 'hidden' to the outgoing diagram
          //    to completely remove it from the layout/accessibility tree.
          setTimeout(() => {
              outgoingDiagram.classList.add('hidden');
          }, transitionDuration);
  
  
          // Update labels immediately
          if (isChecked) { // Show 'With'
              withoutLabel.classList.remove('text-[#785EFF]');
              withoutLabel.classList.add('text-gray-500');
              withLabel.classList.add('text-[#785EFF]');
              withLabel.classList.remove('text-gray-500');
          } else { // Show 'Without'
              withoutLabel.classList.add('text-[#785EFF]');
              withoutLabel.classList.remove('text-gray-500');
              withLabel.classList.remove('text-[#785EFF]');
              withLabel.classList.add('text-gray-500');
          }
      };
  
      toggle.addEventListener('change', switchDiagrams);
  
      // Initial label state sync (EJS handles initial diagram visibility)
      if (toggle.checked) {
           withoutLabel.classList.remove('text-[#785EFF]');
           withoutLabel.classList.add('text-gray-500');
           withLabel.classList.add('text-[#785EFF]');
           withLabel.classList.remove('text-gray-500');
      } else {
           withoutLabel.classList.add('text-[#785EFF]');
           withoutLabel.classList.remove('text-gray-500');
           withLabel.classList.remove('text-[#785EFF]');
           withLabel.classList.add('text-gray-500');
      }
  };
  
  // Pricing Toggle and Subscription Handling
  const handlePricing = () => {
    // Access data passed from EJS
    const isAuthenticated = window.isAuthenticated === 'true';
    const priceIdMap = window.PRICE_ID_MAP;
    const paddleAgencyPrices = window.paddleAgencyPrices || null;
    const paddleCreatorPrices = window.paddleCreatorPrices || null;
    const currentUserPriceId = window.currentUserPriceId?.trim(); 
  
    // Debug logging to help identify issues
   /* console.log('HandlePricing Debug:', {
      isAuthenticated,
      priceIdMapAvailable: !!priceIdMap,
      priceIdMapKeys: priceIdMap ? Object.keys(priceIdMap) : null,
      currentUserPriceId,
      currentUserPriceIdType: typeof currentUserPriceId
    });*/
  
    const pricingToggle = document.getElementById('pricing-toggle');
    const monthlyLabels = document.querySelectorAll('#monthly-label');
    const annualLabels = document.querySelectorAll('#annual-label');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const annualPrices = document.querySelectorAll('.annual-price');
    const linkQuantitySelect = document.getElementById('link-quantity'); 
    const subscribeButtons = document.querySelectorAll('.subscribe-button');
  
    // New slider elements for Agency plan
    const pagesSlider = document.getElementById('pricing-pages');
    const linksSlider = document.getElementById('pricing-links');
    const socialSlider = document.getElementById('pricing-social');
    const pagesValueEl = document.getElementById('pricing-pages-value');
    const linksValueEl = document.getElementById('pricing-links-value');
    const socialValueEl = document.getElementById('pricing-social-value');
    const agencyCard = document.querySelector('.pricing-card.agency-plan');
    const agencyUnavailableEl = document.querySelector('.agency-plan .agency-unavailable');
  
    // Slider step arrays
    const pagesSteps = [25, 50, 100, 200, 400, 600, 800, 'unlimited'];
    const linksSteps = [25, 50, 100, 200, 400, 600, 800, 'unlimited'];
    const socialSteps = [50, 100, 200, 400, 600, 800];
  
    const toLabel = (v) => (v === 'unlimited' ? 'Unlimited' : String(v));
  
    const readSliderIndex = (key, max) => {
      try {
        const raw = localStorage.getItem(key);
        const idx = Number(raw);
        if (Number.isFinite(idx) && idx >= 0 && idx <= max) return idx;
      } catch (_) {}
      return 0;
    };
  
    const persistSliderIndex = (key, idx) => {
      try { localStorage.setItem(key, String(idx)); } catch (_) {}
    };
  
    const getSelectedAgencyConfig = () => {
      if (!pagesSlider || !linksSlider || !socialSlider) return null;
      const pIdx = Number(pagesSlider.value || 0);
      const lIdx = Number(linksSlider.value || 0);
      const sIdx = Number(socialSlider.value || 0);
      const pages = pagesSteps[pIdx];
      const links = linksSteps[lIdx];
      const social = socialSteps[sIdx];
      return { pages, links, social, pIdx, lIdx, sIdx };
    };
  
    const findPriceEntry = (cycle, pages, links, social) => {
      if (!paddleAgencyPrices?.[cycle]) return null;
      const key = `${pages}_${links}_${social}`;
      return paddleAgencyPrices[cycle][key] || null;
    };
  
    const computeAgencyPriceData = () => {
      const sel = getSelectedAgencyConfig();
      if (!sel) return { monthly: null, annual: null };
      const monthly = findPriceEntry('monthly', sel.pages, sel.links, sel.social);
      const annual = findPriceEntry('annual', sel.pages, sel.links, sel.social);
      return { monthly, annual };
    };
  
    const agencyPrices = { 
      '25': { monthly: 37, annual: 29 },
      '50': { monthly: 57, annual: 46 },
      '100': { monthly: 97, annual: 76 },
      '200': { monthly: 157, annual: 126 },
      '400': { monthly: 257, annual: 206 }
    };
    const creatorPrices = { monthly: 7, annual: 5 };
  
    const updatePrices = () => {
      if (!pricingToggle) return; 
      const isAnnual = pricingToggle.checked;
  
      // Toggle price visibility
      monthlyPrices.forEach(price => price.classList.toggle('hidden', isAnnual));
      annualPrices.forEach(price => price.classList.toggle('hidden', !isAnnual));
  
      // Toggle label emphasis
      monthlyLabels.forEach(label => {
          label.classList.toggle('text-[#785EFF]', !isAnnual);
          label.classList.toggle('text-gray-900', isAnnual);
      });
      annualLabels.forEach(label => {
          label.classList.toggle('text-[#785EFF]', isAnnual);
          label.classList.toggle('text-gray-900', !isAnnual);
      });
  
      // Update Agency plan price using paddlePrices + sliders (preferred)
      if (agencyCard && paddleAgencyPrices && pagesSlider && linksSlider && socialSlider) {
        const agencyMonthlyPriceEl = agencyCard.querySelector('.monthly-price');
        const agencyAnnualPriceEl = agencyCard.querySelector('.annual-price');
        const { monthly, annual } = computeAgencyPriceData();
        let monthlyDisplay = '—';
        let annualDisplay = '—';
        if (monthly && typeof monthly.priceUsd === 'number') {
          monthlyDisplay = `$${Number(monthly.priceUsd).toFixed(0)}`;
        }
        if (annual && typeof annual.priceUsd === 'number') {
          let perMonth = (Number(annual.priceUsd) / 12).toFixed(2);
          if (perMonth.endsWith('.00')) perMonth = perMonth.slice(0, -3);
          annualDisplay = `$${perMonth}`;
        }
        if (agencyMonthlyPriceEl) agencyMonthlyPriceEl.textContent = monthlyDisplay;
        if (agencyAnnualPriceEl) agencyAnnualPriceEl.textContent = annualDisplay;
        if (agencyUnavailableEl) {
          const showUnavailable = isAnnual ? !annual : !monthly;
          agencyUnavailableEl.classList.toggle('hidden', !showUnavailable);
        }
      } else if (linkQuantitySelect) {
        // Fallback legacy dropdown
        const selectedLinks = linkQuantitySelect.value;
        const agencyCardEl = document.querySelector('.pricing-card.agency-plan');
        if (agencyCardEl) {
            const agencyMonthlyPriceEl = agencyCardEl.querySelector('.monthly-price');
            const agencyAnnualPriceEl = agencyCardEl.querySelector('.annual-price');
            const agencyAnnualTotalEl = agencyCardEl.querySelector('.annual-total');
            
            const monthlyPrice = agencyPrices[selectedLinks]?.monthly || 0;
            const annualPrice = agencyPrices[selectedLinks]?.annual || 0;
            
            if (agencyMonthlyPriceEl) agencyMonthlyPriceEl.textContent = `$${monthlyPrice}`; 
            if (agencyAnnualPriceEl) agencyAnnualPriceEl.textContent = `$${annualPrice}`;
            if (agencyAnnualTotalEl) agencyAnnualTotalEl.textContent = `${annualPrice * 12}`;
        }
      }
      // Update creator plan price (prefer creator JSON)
       const creatorCard = document.querySelector('.pricing-card:not(.agency-plan):not(.free-plan)'); // Assuming creator is not free or agency
       if (creatorCard) {
            const creatorMonthlyPriceEl = creatorCard.querySelector('.monthly-price');
            const creatorAnnualPriceEl = creatorCard.querySelector('.annual-price');
            const creatorAnnualTotalEl = creatorCard.querySelector('.annual-total');
            let monthlyDisplay = null;
            let annualDisplay = null;
            if (paddleCreatorPrices?.monthly?.['creator']) {
              const m = Number(paddleCreatorPrices.monthly['creator'].priceUsd);
              if (!Number.isNaN(m)) monthlyDisplay = `$${m}`;
            }
            if (paddleCreatorPrices?.annual?.['creator']) {
              const a = Number(paddleCreatorPrices.annual['creator'].priceUsd);
              if (!Number.isNaN(a)) {
                let perMonth = (a / 12).toFixed(2);
                if (perMonth.endsWith('.00')) perMonth = perMonth.slice(0, -3);
                annualDisplay = `$${perMonth}`;
                if (creatorAnnualTotalEl) creatorAnnualTotalEl.textContent = `${a}`;
              }
            }
            if (!monthlyDisplay) monthlyDisplay = `$${creatorPrices.monthly}`; // fallback
            if (!annualDisplay) {
              annualDisplay = `$${creatorPrices.annual}`;
              if (creatorAnnualTotalEl) creatorAnnualTotalEl.textContent = `${creatorPrices.annual * 12}`;
            }
            if (creatorMonthlyPriceEl) creatorMonthlyPriceEl.textContent = monthlyDisplay;
            if (creatorAnnualPriceEl) creatorAnnualPriceEl.textContent = annualDisplay;
       }
    };
  
    // Visual slider UI updater
    const updateSliderUI = (kind, steps) => {
      const slider = document.getElementById(`pricing-${kind}`);
      const fill = document.getElementById(`pricing-${kind}-fill`);
      const thumb = document.getElementById(`pricing-${kind}-thumb`);
      const ticks = document.getElementById(`pricing-${kind}-ticks`);
      if (!slider || !fill || !thumb) return;
      const idx = Number(slider.value || 0);
      const maxIdx = steps.length - 1;
      const percent = maxIdx > 0 ? (idx / maxIdx) * 100 : 0;
      fill.style.width = `${percent}%`;
      thumb.style.left = `${percent}%`;
      if (ticks) {
        Array.from(ticks.children).forEach((el, i) => {
          el.classList.toggle('text-[#785EFF]', i === idx);
          el.classList.toggle('font-semibold', i === idx);
          el.classList.toggle('text-gray-400', i !== idx);
        });
      }
    };
  
    // Remove focus ring around wrapper per design request
  
    // Get Price ID Helper (creator uses JSON only; agency prefers JSON sliders with legacy fallback)
    const getPriceId = (plan, billingType, quantity = null) => {
        if (plan === "creator") {
            if (paddleCreatorPrices?.[billingType]?.['creator']) {
              return paddleCreatorPrices[billingType]['creator'].priceId || null;
            }
            return null; // stop using legacy priceIdMap for creator selection
        } else if (plan === "agency") {
            // Prefer new JSON mapping using sliders if available
            const cfg = getSelectedAgencyConfig();
            if (paddleAgencyPrices && cfg) {
              const entry = findPriceEntry(billingType, cfg.pages, cfg.links, cfg.social);
              return entry?.priceId || null;
            }
            // Fallback to legacy dropdown if present
            if (quantity) {
              return priceIdMap.agency?.[billingType]?.[quantity];
            }
            return null;
        } else if (plan === "free") {
            return 'free_plan_id'; // Or null/undefined if no specific ID
        }
        return null;
    };
  
    // Update Button States Function (NEW - replaces part of old updatePrices)
    const updateButtonStates = () => {
          if (!pricingToggle) return;
  
          // Check if pricing data is available
          if (!paddleCreatorPrices && !paddleAgencyPrices && !priceIdMap) {
              console.warn("Pricing data not available. Buttons will show as unavailable.");
              // Disable all paid plan buttons if priceIdMap is not available
              subscribeButtons.forEach(button => {
                  const planType = button.getAttribute('data-plan');
                  if (planType !== 'free') {
                      button.textContent = 'Unavailable';
                      button.disabled = true;
                      button.classList.add('opacity-50', 'cursor-not-allowed');
                  } else {
                      button.textContent = 'Get Started';
                      button.disabled = false;
                      button.classList.remove('opacity-50', 'cursor-not-allowed');
                  }
              });
              return;
          }
  
          const isAnnual = pricingToggle.checked;
          const billingType = isAnnual ? 'annual' : 'monthly';
  
          const isHighVolumeSelected = () => {
              const cfg = getSelectedAgencyConfig();
              if (!cfg) return false;
              const pagesVal = cfg.pages === 'unlimited' ? Infinity : Number(cfg.pages || 0);
              const linksVal = cfg.links === 'unlimited' ? Infinity : Number(cfg.links || 0);
              const socialVal = Number(cfg.social || 0);
              return (pagesVal >= 100) || (linksVal >= 100) || (socialVal >= 100);
          };
  
          subscribeButtons.forEach(button => {
              const planType = button.getAttribute('data-plan');
              const cardDiv = button.closest('.pricing-card');
  
              // Reset
              button.disabled = false;
              button.classList.remove('opacity-50', 'cursor-not-allowed');
              // Default copy - dynamically show trial period if applicable
              const trialPeriod = window.trialPeriod || '0';
              const trialText = (trialPeriod !== '0') ? `Start ${trialPeriod}-Day Free Trial` : 'Get Started';
              button.textContent = (planType === 'free')
                  ? 'Get Started'
                  : (isAuthenticated ? 'Select Plan' : trialText);
  
              let priceIdForButton = null;
  
              if (planType === 'creator') {
                  priceIdForButton = getPriceId('creator', billingType);
                  if (!priceIdForButton) {
                    // If creator JSON missing, mark unavailable
                    button.textContent = 'Unavailable';
                    button.disabled = true;
                    button.classList.add('opacity-50', 'cursor-not-allowed');
                    return;
                  }
              } else if (planType === 'agency') {
                  // Compute from sliders/new JSON mapping
                  const cfg = getSelectedAgencyConfig();
                  if (paddleAgencyPrices && cfg) {
                    const entry = findPriceEntry(billingType, cfg.pages, cfg.links, cfg.social);
                    priceIdForButton = entry?.priceId || null;
                  } else if (linkQuantitySelect?.value) {
                    // Fallback legacy dropdown
                    priceIdForButton = getPriceId('agency', billingType, linkQuantitySelect.value);
                  }
              }
  
              // If the user is authenticated and has a current plan ID
              if (isAuthenticated && currentUserPriceId && currentUserPriceId !== 'null' && currentUserPriceId !== 'undefined' && currentUserPriceId.trim() !== '') {
                  if (priceIdForButton && priceIdForButton.trim() === currentUserPriceId.trim()) {
                      button.textContent = 'Current Plan';
                      button.disabled = true;
                      button.classList.add('opacity-50', 'cursor-not-allowed');
                  } else if (planType === 'free') {
                       // If authenticated and on paid plan, disable free button
                       button.textContent = 'Downgrade via Billing';
                       button.disabled = true;
                       button.classList.add('opacity-50', 'cursor-not-allowed');
                  } else {
                       button.textContent = 'Change Plan';
                  }
              } else if (isAuthenticated && (!currentUserPriceId || currentUserPriceId === 'null' || currentUserPriceId === 'undefined' || currentUserPriceId.trim() === '')) {
                   // Authenticated but on Free plan (or issue getting priceId)
                   if (planType === 'free') {
                        button.textContent = 'Current Plan';
                        button.disabled = true;
                        button.classList.add('opacity-50', 'cursor-not-allowed');
                   } else {
                        button.textContent = 'Upgrade Plan';
                   }
              } else {
                  // Not authenticated
                  if (planType === 'free') {
                      button.textContent = 'Get Started';
                  } else {
                      const trialPeriod = window.trialPeriod || '0';
                      button.textContent = (trialPeriod !== '0') ? `Start ${trialPeriod}-Day Free Trial` : 'Get Started';
                  }
              }
  
              // Override CTA only for Agency high-volume selections (no trial copy)
              if (planType === 'agency' && isHighVolumeSelected() && !button.disabled) {
                  button.textContent = 'Subscribe Now';
              }
  
              // Handle case where price ID couldn't be determined for Creator/Agency
              if (!priceIdForButton && planType !== 'free') {
                  button.textContent = 'Unavailable';
                  button.disabled = true;
                  button.classList.add('opacity-50', 'cursor-not-allowed');
              } else if (priceIdForButton) {
                  button.setAttribute('data-price-id', priceIdForButton);
              }
          });
      };
  
    // --- Subscription Click Handler (kept mostly the same logic) ---
    const handleSubscriptionClick = async (event) => { 
      // Prevent duplicate handling when both direct and delegated listeners fire
      if (event.__subscribeHandled) return;
      event.__subscribeHandled = true;
      const button = (event.currentTarget && event.currentTarget.classList && event.currentTarget.classList.contains('subscribe-button'))
        ? event.currentTarget
        : (event.target && event.target.closest ? event.target.closest('.subscribe-button') : null);
      if (!button) return;
      if (button.disabled) return; // Ignore clicks on disabled buttons
  
      const clickedPlan = button.getAttribute('data-plan');
  
      // --- Handle 'Free' plan click --- 
      if (clickedPlan === 'free') {
          // If not logged in, redirect to register
          window.location.href = '/register/';
          // If logged in, this button should be disabled ('Current Plan' or 'Downgrade')
          return; 
      }
  
      // --- Handle Paid Plan Click ('creator' or 'agency') ---
      if (!pricingToggle) {
          console.error("Pricing toggle not found.");
          alert("Error selecting plan. Please try refreshing the page.");
          return;
      }
  
      // Check if pricing data is available
      if (!priceIdMap && !paddleAgencyPrices) {
          console.error("Pricing data not available. Cannot proceed with subscription.");
          alert("Pricing data not available. Please try refreshing the page.");
          return;
      }
  
      const isAnnual = pricingToggle.checked;
      let targetPriceId = '';
      const billingCycle = isAnnual ? 'annual' : 'monthly';
  
      // Determine the target Price ID based on the clicked plan
      if (clickedPlan === 'creator') {
        targetPriceId = getPriceId('creator', billingCycle);
      } else if (clickedPlan === 'agency') {
        if (paddleAgencyPrices && pagesSlider && linksSlider && socialSlider) {
          const cfg = getSelectedAgencyConfig();
          const entry = cfg ? findPriceEntry(billingCycle, cfg.pages, cfg.links, cfg.social) : null;
          if (entry && entry.priceId) {
            targetPriceId = entry.priceId;
          } else {
            console.error("Selected Agency combination unavailable.");
            alert("This combination is unavailable.");
            return;
          }
        } else if (linkQuantitySelect?.value) {
          // Fallback legacy dropdown
          targetPriceId = getPriceId('agency', billingCycle, linkQuantitySelect.value);
        } else {
          console.error("No Agency selection UI found.");
          alert("Please configure the Agency plan.");
          return;
        }
      }
  
      // Validate if targetPriceId was found
      if (!targetPriceId) {
        console.error(`Could not find priceId for plan: ${clickedPlan}, cycle: ${billingCycle}, quantity: ${linkQuantitySelect?.value}`);
        alert('Error selecting plan. Please try refreshing the page.');
        return;
      }
  
      // --- Logic based on Authentication and Current Plan ---
      if (!isAuthenticated) {
          // Scenario: User is NOT authenticated 
          // Action: Set cookie and redirect to payment page for NEW subscription checkout.
          console.log(`User is not authenticated. Redirecting to /payment with priceId: ${targetPriceId}`);
          document.cookie = `priceId=${targetPriceId}; path=/; max-age=600; SameSite=Lax`; // Set cookie for 10 mins
          window.location.href = '/payment';
      
      } else if (isAuthenticated && (!currentUserPriceId || currentUserPriceId === 'null' || currentUserPriceId === 'undefined' || currentUserPriceId.trim() === '')) {
          // Scenario: User IS authenticated but ON FREE plan (no current paid price ID or empty string)
          // Action: Set cookie and redirect to payment page for NEW subscription checkout.
          console.log(`Authenticated Free User is UPGRADING. Redirecting to /payment with priceId: ${targetPriceId}`);
          document.cookie = `priceId=${targetPriceId}; path=/; max-age=600; SameSite=Lax`; // Set cookie for 10 mins
          window.location.href = '/payment';
  
      } else if (isAuthenticated && currentUserPriceId && currentUserPriceId.trim() !== '') {
          // Scenario: User IS authenticated AND HAS an active paid subscription (currentUserPriceId exists)
          // Action: Compare target plan with current plan and call backend API to update if different.
      
          if (targetPriceId.trim() === currentUserPriceId.trim()) {
              // User clicked the plan they are already on - should be disabled, but good to check
              console.log('User clicked their current plan. No action needed.');
              return;
          } else {
              // User clicked a DIFFERENT paid plan - Call backend to update
              console.log(`Authenticated user changing plan. Current: ${currentUserPriceId}, Target: ${targetPriceId}. Calling API.`);
              button.disabled = true; // Disable button while processing
              button.textContent = 'Processing...'; // Provide feedback
      
              try {
                // Use modalController for confirmation and API call (similar to billingPricing.js)
                modalController.show('confirmation', {
                    title: 'Confirm Plan Change',
                    description: `Are you sure you want to change your subscription to the (${billingCycle}) ${clickedPlan} plan? Your saved payment method will be charged. If you need to update your payment method, please cancel and use the "Manage subscription" button first.`,
                    primaryButtonText: 'Confirm Change',
                    secondaryButtonText: 'Cancel',
                    onPrimaryClick: async () => {
                        // Replace confirmation with loading for smoother UX
                        modalController.show('loading', { title: 'Updating Subscription...', description: 'Please wait.', replace: true });
                        
                        // Call backend API (copied from old handler)
                        const response = await fetch('/api/subscriptions/subscription/update-plan/', {
                            method: 'POST', 
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ newPriceId: targetPriceId })
                        });
                        const result = await response.json();
                        
                        // Hide loading modal; controller will sequence the result modal
                        if (modalController.currentModalType === 'loading') modalController.hide();
  
                        if (response.ok && result.success) {
                             modalController.show('success', {
                                  title: 'Subscription Updated!',
                                  description: result.message || 'Subscription updated successfully! Reloading...', // Added message
                                  primaryButtonText: 'OK',
                                  onPrimaryClick: () => window.location.reload()
                             });
                             // Don't need to re-enable button, page will reload
                        } else {
                            modalController.show('error', {
                                title: 'Update Failed',
                                description: result.error || 'Failed to update subscription. Please try again or contact support.',
                                primaryButtonText: 'OK',
                                onPrimaryClick: () => modalController.hide()
                            });
                            // Re-enable the button after error modal is closed
                            button.disabled = false;
                            updateButtonStates(); // Reset button text/state
                        }
                    },
                    onSecondaryClick: () => { // Handle Cancel action
                        modalController.hide();
                        button.disabled = false; // Re-enable button if cancelled
                        updateButtonStates(); // Reset button text/state
                    }
                });
              } catch (error) {
                console.error('Error initiating plan change:', error);
                 modalController.show('error', {
                    title: 'Error',
                    description: 'An unexpected error occurred. Please try again.',
                    primaryButtonText: 'OK',
                    onPrimaryClick: () => modalController.hide()
                 });
                button.disabled = false; // Re-enable on catch
                updateButtonStates(); // Reset button text/state
              }
          }
      } else {
           // This should now be a rare case, but log it for debugging
           console.error("Unexpected authentication/subscription state.", {
             isAuthenticated,
             currentUserPriceId,
             targetPriceId
           });
           alert("An unexpected error occurred. Please try refreshing the page or contact support.");
      }
    };
    // --- END Subscription Click Handler ---
  
    // Add event listeners
    if (pricingToggle) {
        pricingToggle.addEventListener('change', () => {
            updatePrices();
            updateButtonStates(); // Update buttons when toggle changes
        });
    }
    if (linkQuantitySelect) {
        linkQuantitySelect.addEventListener('change', () => {
            updatePrices();
            updateButtonStates(); // Update buttons when quantity changes
        });
    }
    // Slider event listeners (input for smooth updates)
    if (pagesSlider && pagesValueEl) {
      // Restore saved index
      const savedIdx = readSliderIndex('pricing_pages_idx', pagesSteps.length - 1);
      pagesSlider.value = String(savedIdx);
      pagesSlider.setAttribute('aria-valuenow', String(savedIdx));
      pagesValueEl.textContent = toLabel(pagesSteps[savedIdx]);
      updateSliderUI('pages', pagesSteps);
      pagesSlider.addEventListener('input', () => {
        const idx = Number(pagesSlider.value || 0);
        pagesSlider.setAttribute('aria-valuenow', String(idx));
        pagesValueEl.textContent = toLabel(pagesSteps[idx]);
        updateSliderUI('pages', pagesSteps);
        persistSliderIndex('pricing_pages_idx', idx);
        updatePrices();
        updateButtonStates();
      });
    }
    if (linksSlider && linksValueEl) {
      const savedIdx = readSliderIndex('pricing_links_idx', linksSteps.length - 1);
      linksSlider.value = String(savedIdx);
      linksSlider.setAttribute('aria-valuenow', String(savedIdx));
      linksValueEl.textContent = toLabel(linksSteps[savedIdx]);
      updateSliderUI('links', linksSteps);
      linksSlider.addEventListener('input', () => {
        const idx = Number(linksSlider.value || 0);
        linksSlider.setAttribute('aria-valuenow', String(idx));
        linksValueEl.textContent = toLabel(linksSteps[idx]);
        updateSliderUI('links', linksSteps);
        persistSliderIndex('pricing_links_idx', idx);
        updatePrices();
        updateButtonStates();
      });
    }
    if (socialSlider && socialValueEl) {
      const savedIdx = readSliderIndex('pricing_social_idx', socialSteps.length - 1);
      socialSlider.value = String(savedIdx);
      socialSlider.setAttribute('aria-valuenow', String(savedIdx));
      socialValueEl.textContent = toLabel(socialSteps[savedIdx]);
      updateSliderUI('social', socialSteps);
      socialSlider.addEventListener('input', () => {
        const idx = Number(socialSlider.value || 0);
        socialSlider.setAttribute('aria-valuenow', String(idx));
        socialValueEl.textContent = toLabel(socialSteps[idx]);
        updateSliderUI('social', socialSteps);
        persistSliderIndex('pricing_social_idx', idx);
        updatePrices();
        updateButtonStates();
      });
    }
  
    // Initial setup on load
    updatePrices();
    updateButtonStates(); // Set initial button states
    
    // Bind CTA click handlers (direct + delegated)
    if (subscribeButtons && subscribeButtons.length) {
      subscribeButtons.forEach((btn) => {
        // Avoid duplicate bindings by removing then adding
        btn.removeEventListener('click', handleSubscriptionClick);
        btn.addEventListener('click', handleSubscriptionClick);
      });
    }
    
    // Delegated handler as safety net (covers dynamically updated DOM)
    document.removeEventListener('click', handleSubscriptionClick, true);
    document.addEventListener('click', (e) => {
      const targetBtn = e.target && e.target.closest ? e.target.closest('.subscribe-button') : null;
      if (!targetBtn) return;
      // Let the dedicated handler run
      handleSubscriptionClick(e);
    });
  };
  
  // Initialize all relevant functionality
  document.addEventListener('DOMContentLoaded', () => {
    handleNavigation();
    handleUsernameForm();
    handleHowItWorksToggle();
    handlePricing();
  }); 