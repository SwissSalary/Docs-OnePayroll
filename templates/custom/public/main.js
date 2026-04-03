export default {
    defaultTheme: 'light',
    iconLinks: [
        {
            icon: 'linkedin',
            href: 'https://www.linkedin.com/company/onepayrollusa',
            title: 'LinkedIn'
        },
        {
            icon: 'youtube',
            href: 'https://www.youtube.com/@OnePayrollUSA',
            title: 'YouTube'
        },
        {
            icon: 'globe',
            href: 'https://onepayroll.com',
            title: 'OnePayroll'
        }
    ],
    anchors: {
        placement: 'left',
        icon: '\u{F470}'  // Bootstrap Icons: bi-link-45deg
    },
    start: () => {

    // ===== Footer slogans =====
    const target = document.getElementById('sws-slogans');
    if (!target) return; // Footer not present, nothing to do

    // Use RAW HTML for the known-safe inline heart SVG; everything else is plain text.
    const heart = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 21.4"
           style="width:auto;height:12px;margin:0 2px 4px 2px" aria-hidden="true" focusable="false">
        <path fill="#d03b6a" d="M2.3,12.6l8.8,8.2c.8.7,1.9.7,2.7,0l8.8-8.2c1.5-1.4,2.3-3.3,2.3-5.4v-.3C25,3.1,21.9,0,18,0
        c-1.8,0-3.6.7-4.9,2l-.6.6-.6-.6c-2.7-2.7-7.1-2.7-9.9,0C.7,3.4,0,5.1,0,7v.3c0,2,.8,4,2.3,5.3Z"/>
      </svg>`;

    const slogans = [
      'Next-generation payroll for Microsoft Dynamics 365 Business Central',
      'Driven by people, powered by technology',
      'Enjoy your job',
      'There is a Passion that drives us',
      `Made with ${heart} not just code`,
      `Made with ${heart} from New York`
    ];

    // Optional: seed with a deterministic first slogan
    let idx = Math.floor(Math.random() * slogans.length);

    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    function setSlogan(nextIdx) {
      const next = slogans[nextIdx % slogans.length];

      if (prefersReduced) {
        // Swap without animation
        target.innerHTML = next;
        return;
      }

      // Fade out → swap → fade in
      target.classList.add('is-fading-out');
      // Use a micro-delay slightly > CSS transition for consistency
      setTimeout(() => {
        target.innerHTML = next;
        target.classList.remove('is-fading-out');
      }, 220);
    }

    // Initialize immediately
    setSlogan(idx++);

    // Rotate every 8s
    const ROTATE_MS = 8000;
    const intervalId = window.setInterval(() => setSlogan(idx++), ROTATE_MS);

    // Clean up on unload (defensive)
    window.addEventListener('beforeunload', () => clearInterval(intervalId), { once: true });

/*--------------------------------- Logo Animation ----------------------------------------------*/
    
const svg = document.querySelector('.op-logo');
    if (!svg) return;

    let scrollTimeout = null;
    const THRESHOLD = 80; // px of scroll before fade/slide

    const onScroll = () => {
      if (scrollTimeout) return; // throttle
      scrollTimeout = setTimeout(() => {
        const scrolled = window.scrollY > THRESHOLD;
        svg.classList.toggle('logo-fade', scrolled);
        scrollTimeout = null;
      }, 50); // 50ms smoothing
    };

    onScroll();                               // set initial state on load
    window.addEventListener('scroll', onScroll, { passive: true });

    }
}