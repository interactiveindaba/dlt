# DTL by Zee — lead-generation showroom

A premium, editorial clothing showroom for DTL by Zee. The site showcases traditional attire, wedding wear, suits, denim and tracksuits, then moves every purchase conversation into WhatsApp.

No frameworks, no build step, no external CDN. Open `index.html` or serve the folder locally.

---

## 1. Set the WhatsApp number (required before publishing)

Open **`config.js`** and replace the demo number:

```js
window.DTL_CONFIG = {
  whatsappNumber: "27123456789",       // digits only, international format
  displayNumber: "+27 12 345 6789",     // shown on the site
  ...
};
```

Example: South African number `+27 82 123 4567` becomes `27821234567`.

Every call to action on the site uses this one setting:

- Header “WhatsApp a stylist”
- Hero “Start your fitting”
- Wedding atelier CTA
- Quick-view “Enquire on WhatsApp”
- Saved-pieces enquiry
- Fitting form submission
- Floating chat button and mobile bar

The form has no backend. On submit it opens WhatsApp with a neatly formatted message containing the visitor’s name, number, occasion, timeline and notes. The lead lands directly in the WhatsApp chat.

---

## 2. Run locally

From this folder:

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

You can also double-click `index.html`, although a tiny local server is recommended for consistent font loading.

---

## 3. Editing the site

| What | Where |
| --- | --- |
| WhatsApp number, display number, hours | `config.js` |
| Products, prices, descriptions, sizes, colours | `PRODUCTS` array in `app.js` |
| Colours, fonts, spacing, radii, breakpoints | `:root` and section styles in `styles.css` |
| Page copy and sections | `index.html` |
| Photography | `assets/images/` |
| Local fonts | `assets/fonts/` |

Filter counts are calculated from the product array automatically.

### Product fields

```js
{
  id: "rosewood",
  name: "The Rosewood Sherwani",
  category: "Wedding",
  meta: "Bespoke",
  price: "From R5,900",
  image: "assets/images/product-wedding.jpg",
  alt: "Description for accessibility and search",
  badge: "Most requested",
  badgeStyle: "plum", // optional
  blurb: "Short product story...",
  details: [["Category", "Wedding"], ["Make", "Bespoke"]],
  colors: [{ name: "Rosewood", hex: "#c7a09a" }],
  sizes: ["Made to measure"]
}
```

The demo prices and payment framing are placeholders. Update them to match DTL’s actual pricing, or replace prices with “On request” in the product data.

---

## 4. What is included

- Responsive editorial storefront (desktop, tablet, phone)
- Sticky navigation with mobile menu
- Dynamic product edit with category filters and “show more”
- Search overlay with live results
- Saved-pieces drawer with localStorage persistence
- Product quick-view with colour/size selection and prefilled WhatsApp enquiry
- WhatsApp-first fitting form
- Wedding atelier section
- Process, FAQ, trust and service sections
- Scroll reveals, image hover states, marquee and reduced-motion support
- Local fonts and images, no runtime dependencies
- Keyboard/focus support, accessible labels, semantic sections and `prefers-reduced-motion`

---

## 5. Photography credits

Brand/product photos were provided in the project folder and cropped for the storefront. Three editorial images are stock placeholders:

- Wedding couple — Jose Nicdao on Unsplash:  
  <https://unsplash.com/photos/wedding-couple-in-traditional-attire-NCrvRQdvTx8>
- Black suit portrait — Unsplash:  
  <https://unsplash.com/photos/man-in-black-suit-jacket-and-black-pants-standing-on-gray-concrete-floor-during-daytime-vS0Kya7E5V4>
- Blush sherwani portrait — Pexels:  
  <https://www.pexels.com/photo/stylish-man-in-traditional-indian-kurta-35542190/>

Replace these with DTL’s own campaign photography before launch for a fully owned brand library.

---

## 6. Deploy

This is a static site. Drag the folder into Netlify, or connect it to Vercel, Cloudflare Pages or GitHub Pages. No environment variables or server functions are needed.

After deployment, test the WhatsApp link from a phone and update the placeholder number first.
