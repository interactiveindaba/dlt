/* ==========================================================================
   DTL by Zee — storefront interactions
   Vanilla JS / no build step / no dependencies.
   ========================================================================== */

(() => {
  "use strict";

  const CONFIG = Object.assign(
    {
      whatsappNumber: "27123456789",
      displayNumber: "+27 12 345 6789",
      whatsappHours: "Mon–Sat · 9am–6pm",
      deliveryNote: "South Africa & worldwide",
      generalMessage:
        "Hello DTL, I'd like to chat about a piece or a custom fitting.",
    },
    window.DTL_CONFIG || {}
  );

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  const PRODUCTS = [
    {
      id: "heritage",
      name: "The Heritage Co-ord",
      category: "Traditional",
      meta: "Made to order",
      price: "From R3,650",
      image: "assets/images/product-traditional.jpg",
      alt: "Deep aubergine DTL heritage co-ord with patterned fabric",
      badge: "Atelier piece",
      blurb:
        "A celebration of pattern, movement and colour. Each co-ord is cut to order in a rich aubergine palette with hand-finished detailing.",
      details: [
        ["Category", "Traditional"],
        ["Make", "Made to measure"],
        ["Fabric", "Patterned crepe"],
        ["Finish", "Hand-finished"],
      ],
      colors: [
        { name: "Aubergine", hex: "#5a2940" },
        { name: "Umber", hex: "#7c4d3c" },
        { name: "Cream", hex: "#e5d8c3" },
      ],
      sizes: ["Made to measure"],
    },
    {
      id: "rosewood",
      name: "The Rosewood Sherwani",
      category: "Wedding",
      meta: "Bespoke",
      price: "From R5,900",
      image: "assets/images/product-wedding.jpg",
      alt: "Blush pink wedding sherwani with tonal embroidery",
      badge: "Most requested",
      badgeStyle: "plum",
      blurb:
        "A soft, contemporary take on ceremony dressing. Tonal embroidery, a clean silhouette and a lining chosen for long days and late nights.",
      details: [
        ["Category", "Wedding"],
        ["Make", "Bespoke"],
        ["Fabric", "Embroidered silk blend"],
        ["Lining", "Breathable cupro"],
      ],
      colors: [
        { name: "Rosewood", hex: "#c7a09a" },
        { name: "Ivory", hex: "#e8e0d0" },
        { name: "Sage", hex: "#7e8d78" },
      ],
      sizes: ["Made to measure"],
    },
    {
      id: "midnight",
      name: "The Midnight Suit",
      category: "Suits",
      meta: "Tailored",
      price: "From R4,200",
      image: "assets/images/product-suit.jpg",
      alt: "Man wearing a sharply tailored black suit",
      badge: "Tailoring",
      blurb:
        "A clean, modern suit built for presence without stiffness. We refine the shoulder, sleeve and trouser break around the way you actually move.",
      details: [
        ["Category", "Suits"],
        ["Make", "Made to measure"],
        ["Fabric", "Wool blend"],
        ["Fit", "Modern slim"],
      ],
      colors: [
        { name: "Midnight", hex: "#17191b" },
        { name: "Charcoal", hex: "#414345" },
        { name: "Camel", hex: "#aa865f" },
      ],
      sizes: ["Made to measure"],
    },
    {
      id: "wave",
      name: "The Wave Tee",
      category: "Essentials",
      meta: "Ready to wear",
      price: "R499",
      image: "assets/images/product-wave.jpg",
      alt: "Oversized black DTL t-shirt with a wave print",
      badge: "New drop",
      blurb:
        "An oversized black tee with a sculptural wave print. Heavyweight cotton, dropped shoulder and a print made to feel like a piece of art.",
      details: [
        ["Category", "Essentials"],
        ["Fit", "Oversized"],
        ["Fabric", "Heavyweight cotton"],
        ["Care", "Cold wash"],
      ],
      colors: [
        { name: "Black", hex: "#171513" },
        { name: "Stone", hex: "#c9bead" },
        { name: "Cobalt", hex: "#27518d" },
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    {
      id: "rouge",
      name: "Rouge Graphic Tee",
      category: "Essentials",
      meta: "Ready to wear",
      price: "R499",
      image: "assets/images/product-lip.jpg",
      alt: "Black DTL t-shirt with a bold red lips graphic",
      badge: "Statement",
      blurb:
        "A bold graphic, an easy shape. Cut in a relaxed oversized silhouette with a high-density print and a soft hand feel.",
      details: [
        ["Category", "Essentials"],
        ["Fit", "Relaxed"],
        ["Fabric", "Combed cotton"],
        ["Care", "Cold wash"],
      ],
      colors: [
        { name: "Black", hex: "#151412" },
        { name: "Bone", hex: "#e8dfd0" },
        { name: "Rouge", hex: "#a62432" },
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    {
      id: "onyx-denim",
      name: "Onyx Distressed Denim",
      category: "Denim",
      meta: "Ready to wear",
      price: "R949",
      image: "assets/images/product-noir-denim.jpg",
      alt: "Black distressed DTL denim jeans",
      badge: "Best seller",
      blurb:
        "A broken-in black denim with considered distressing. Cut close through the thigh and straight through the leg for an easy, lived-in line.",
      details: [
        ["Category", "Denim"],
        ["Fit", "Slim straight"],
        ["Wash", "Washed black"],
        ["Fabric", "Stretch denim"],
      ],
      colors: [
        { name: "Onyx", hex: "#2c2b29" },
        { name: "Washed black", hex: "#47433f" },
        { name: "Indigo", hex: "#2f4563" },
      ],
      sizes: ["28", "30", "32", "34", "36", "38", "40"],
    },
    {
      id: "cobalt-denim",
      name: "Cobalt Utility Denim",
      category: "Denim",
      meta: "Ready to wear",
      price: "R1,050",
      image: "assets/images/product-cobalt-denim.jpg",
      alt: "Cobalt blue utility jeans with zip and pocket details",
      badge: "Editor's pick",
      badgeStyle: "plum",
      blurb:
        "Utility detailing meets a clean cobalt wash. Zip pockets, leather tabs and a tapered leg that works with sneakers or boots.",
      details: [
        ["Category", "Denim"],
        ["Fit", "Tapered"],
        ["Wash", "Rich cobalt"],
        ["Fabric", "Rigid cotton denim"],
      ],
      colors: [
        { name: "Cobalt", hex: "#27518d" },
        { name: "Indigo", hex: "#263b5f" },
        { name: "Black", hex: "#232322" },
      ],
      sizes: ["28", "30", "32", "34", "36", "38", "40"],
    },
    {
      id: "obsidian-cargo",
      name: "Obsidian Cargo",
      category: "Denim",
      meta: "Ready to wear",
      price: "R1,150",
      image: "assets/images/product-obsidian-cargo.jpg",
      alt: "Black cargo trousers with gold hardware and stitching",
      badge: "Limited",
      blurb:
        "Structured cargo denim in a deep black wash. Statement hardware, asymmetric pockets and a sharp taper make this the off-duty piece with intent.",
      details: [
        ["Category", "Denim"],
        ["Fit", "Tapered cargo"],
        ["Wash", "Deep black"],
        ["Fabric", "12oz cotton"],
      ],
      colors: [
        { name: "Obsidian", hex: "#1d1c1b" },
        { name: "Graphite", hex: "#4a4845" },
        { name: "Olive", hex: "#555d4b" },
      ],
      sizes: ["28", "30", "32", "34", "36", "38", "40"],
    },
    {
      id: "olive-utility",
      name: "Olive Utility Denim",
      category: "Denim",
      meta: "Ready to wear",
      price: "R1,050",
      image: "assets/images/product-utility-denim.jpg",
      alt: "Olive grey utility denim with zip pocket and contrast stitching",
      badge: "Utility",
      blurb:
        "A muted olive utility jean with exposed zips and contrast topstitching. Built for movement and made to look even better with wear.",
      details: [
        ["Category", "Denim"],
        ["Fit", "Straight utility"],
        ["Wash", "Olive grey"],
        ["Fabric", "Cotton twill denim"],
      ],
      colors: [
        { name: "Olive", hex: "#5c6156" },
        { name: "Sand", hex: "#b9a88e" },
        { name: "Black", hex: "#282824" },
      ],
      sizes: ["28", "30", "32", "34", "36", "38", "40"],
    },
    {
      id: "court-track",
      name: "Court Track Jacket",
      category: "Tracksuits",
      meta: "Ready to wear",
      price: "R1,250",
      image: "assets/images/product-track.jpg",
      alt: "Forest green DTL track jacket with a white chest stripe",
      badge: "Off-duty",
      blurb:
        "A retro court silhouette with a clean forest-green finish. Lightweight, easy to layer and designed to look as good leaving the gym as it does in it.",
      details: [
        ["Category", "Tracksuits"],
        ["Fit", "Relaxed"],
        ["Fabric", "Recycled poly"],
        ["Finish", "Contrast stripe"],
      ],
      colors: [
        { name: "Forest", hex: "#28483d" },
        { name: "Black", hex: "#1d1d1c" },
        { name: "Cream", hex: "#e4ddcd" },
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: "indigo-trucker",
      name: "Indigo Trucker Jacket",
      category: "Denim",
      meta: "Ready to wear",
      price: "R1,450",
      image: "assets/images/product-trucker.jpg",
      alt: "Dark indigo DTL trucker jacket displayed on a stand",
      badge: "New drop",
      blurb:
        "A modern trucker in a deep indigo wash. Roomy enough to layer, sharp enough to wear on its own, and finished with antique brass hardware.",
      details: [
        ["Category", "Denim"],
        ["Fit", "Boxy"],
        ["Wash", "Dark indigo"],
        ["Fabric", "Rigid denim"],
      ],
      colors: [
        { name: "Indigo", hex: "#2d405a" },
        { name: "Washed blue", hex: "#6b84a1" },
        { name: "Ecru", hex: "#ddd3c2" },
      ],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    {
      id: "bucket",
      name: "The DTL Bucket Hat",
      category: "Essentials",
      meta: "Ready to wear",
      price: "R299",
      image: "assets/images/product-bucket.jpg",
      alt: "Black and cream DTL bucket hats embroidered in gold",
      badge: "Accessory",
      blurb:
        "A soft, packable bucket hat embroidered with the DTL mark. Black or cream, one size, made for long days in the sun.",
      details: [
        ["Category", "Essentials"],
        ["Fit", "One size"],
        ["Fabric", "Cotton twill"],
        ["Detail", "Gold embroidery"],
      ],
      colors: [
        { name: "Black", hex: "#1b1a18" },
        { name: "Cream", hex: "#e7dfd1" },
        { name: "Olive", hex: "#6c735d" },
      ],
      sizes: ["One size"],
    },
  ];

  const state = {
    filter: "All",
    showAll: false,
    saved: new Set(readSaved()),
    activeProduct: null,
    selectedSize: null,
    selectedColor: null,
  };

  let toastTimer;

  /* ------------------------------------------------------------------------
     Utilities
     ------------------------------------------------------------------------ */

  function readSaved() {
    try {
      const raw = localStorage.getItem("dtl-saved");
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function writeSaved() {
    try {
      localStorage.setItem("dtl-saved", JSON.stringify([...state.saved]));
    } catch {
      /* Storage can be unavailable in strict privacy modes. */
    }
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function waLink(message) {
    return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  function generalLink(message = CONFIG.generalMessage) {
    return waLink(message);
  }

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3200);
  }

  function lockBody() {
    const dialogOpen = $$("dialog[open]").length > 0;
    const menuOpen = $("#mobileMenu")?.classList.contains("is-open");
    document.body.classList.toggle("lock", dialogOpen || Boolean(menuOpen));
  }

  function openDialog(dialog) {
    if (!dialog || dialog.open) return;
    dialog.showModal();
    lockBody();
  }

  function closeDialog(dialog) {
    if (!dialog || !dialog.open) return;
    dialog.close();
  }

  function scrollToEdit() {
    $("#edit")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function getProduct(id) {
    return PRODUCTS.find((product) => product.id === id);
  }

  function productByAnyId(id) {
    return getProduct(id) || null;
  }

  /* ------------------------------------------------------------------------
     WhatsApp links and settings
     ------------------------------------------------------------------------ */

  function setExternalLink(link, href) {
    if (!link) return;
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener";
  }

  function hydrateSettings() {
    $$("[data-phone]").forEach((node) => {
      node.textContent = CONFIG.displayNumber;
    });
    $$("[data-hours]").forEach((node) => {
      node.textContent = CONFIG.whatsappHours;
    });
    $$("[data-delivery]").forEach((node) => {
      node.textContent = CONFIG.deliveryNote;
    });

    $$('[data-wa="general"]').forEach((link) => {
      setExternalLink(link, generalLink());
    });

    $$("[data-wa-message]").forEach((link) => {
      setExternalLink(link, waLink(link.dataset.waMessage));
    });

    const year = $("#year");
    if (year) year.textContent = new Date().getFullYear();

    const schema = $('script[type="application/ld+json"]');
    if (schema) {
      try {
        const data = JSON.parse(schema.textContent);
        data.telephone = `+${CONFIG.whatsappNumber}`;
        schema.textContent = JSON.stringify(data);
      } catch {
        /* Keep the static structured data if it cannot be parsed. */
      }
    }
  }

  /* ------------------------------------------------------------------------
     Product rendering
     ------------------------------------------------------------------------ */

  function filterProducts() {
    return state.filter === "All"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === state.filter);
  }

  function productCard(product) {
    const isSaved = state.saved.has(product.id);
    const swatches = product.colors
      .slice(0, 3)
      .map((color) => `<i style="--swatch:${color.hex}" title="${escapeHtml(color.name)}"></i>`)
      .join("");

    return `
      <article class="product-card reveal" data-product-card="${product.id}">
        <div class="product-media">
          <button class="product-media__open" type="button" data-open-product="${product.id}" aria-label="View ${escapeHtml(product.name)}">
            <img src="${product.image}" alt="${escapeHtml(product.alt)}" width="1200" height="1500" loading="lazy">
          </button>
          ${product.badge ? `<span class="product-badge ${product.badgeStyle === "plum" ? "product-badge--plum" : ""}">${escapeHtml(product.badge)}</span>` : ""}
          <button class="save-btn ${isSaved ? "is-saved" : ""}" type="button" data-save="${product.id}" aria-label="${isSaved ? "Remove from" : "Save"} ${escapeHtml(product.name)}" aria-pressed="${isSaved}">
            <svg class="icon"><use href="#icon-heart"/></svg>
          </button>
          <button class="quick-view-btn" type="button" data-open-product="${product.id}">
            Quick view <svg class="icon"><use href="#icon-plus"/></svg>
          </button>
        </div>
        <div class="product-card__body">
          <div class="product-card__meta">
            <span>${escapeHtml(product.category)}</span>
            <span>${escapeHtml(product.meta)}</span>
          </div>
          <h3><button type="button" data-open-product="${product.id}">${escapeHtml(product.name)}</button></h3>
          <div class="product-card__bottom">
            <span class="product-price">${escapeHtml(product.price)}</span>
            <span class="product-swatches" aria-label="Available colourways">${swatches}</span>
          </div>
        </div>
      </article>
    `;
  }

  function hydrateFilterCounts() {
    $$(".filter-pill").forEach((button) => {
      const filter = button.dataset.filter;
      const count =
        filter === "All"
          ? PRODUCTS.length
          : PRODUCTS.filter((product) => product.category === filter).length;
      const countNode = $("span", button);
      if (countNode) countNode.textContent = String(count).padStart(2, "0");
    });
  }

  function renderProducts() {
    const grid = $("#productGrid");
    if (!grid) return;

    const available = filterProducts();
    const displayCount = state.showAll ? available.length : Math.min(8, available.length);
    const visible = available.slice(0, displayCount);

    $("#productCount").textContent = `${String(available.length).padStart(2, "0")} ${available.length === 1 ? "piece" : "pieces"}`;

    grid.innerHTML = visible.length
      ? visible.map(productCard).join("")
      : `
        <div class="product-empty">
          <h3>Nothing here yet.</h3>
          <p>This edit is still being prepared. Ask us what is coming next.</p>
        </div>
      `;

    const loadMore = $("#loadMoreBtn");
    if (loadMore) {
      loadMore.hidden = state.showAll || available.length <= 8;
    }

    observeReveals();
  }

  function setFilter(filter) {
    const known = ["All", ...new Set(PRODUCTS.map((product) => product.category))];
    if (!known.includes(filter)) return;

    state.filter = filter;
    state.showAll = false;
    $$(".filter-pill").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.filter === filter);
    });
    renderProducts();
  }

  function setSavedButtonState(id, saved) {
    $$(`[data-save="${id}"]`).forEach((button) => {
      button.classList.toggle("is-saved", saved);
      button.setAttribute("aria-pressed", String(saved));
      const product = getProduct(id);
      button.setAttribute(
        "aria-label",
        `${saved ? "Remove from saved" : "Save"} ${product ? product.name : "this piece"}`
      );
    });
  }

  function updateSavedUi() {
    const count = state.saved.size;
    const counter = $("#savedCount");
    if (counter) {
      counter.textContent = String(count);
      counter.hidden = count === 0;
    }
    const mobileCounter = $("#mobileSavedCount");
    if (mobileCounter) mobileCounter.textContent = String(count);
    renderSaved();
  }

  function toggleSaved(id) {
    if (!getProduct(id)) return;
    if (state.saved.has(id)) {
      state.saved.delete(id);
      setSavedButtonState(id, false);
      showToast("Removed from your edit.");
    } else {
      state.saved.add(id);
      setSavedButtonState(id, true);
      showToast("Saved to your edit.");
    }
    writeSaved();
    updateSavedUi();
  }

  function renderSaved() {
    const list = $("#savedList");
    const footer = $("#savedWa");
    if (!list) return;

    const savedProducts = [...state.saved].map(getProduct).filter(Boolean);

    if (!savedProducts.length) {
      list.innerHTML = `
        <div class="saved-empty">
          <span>Your shortlist is empty.</span>
          Tap the heart on any piece to keep it here, then send the whole edit to us in one message.
        </div>
      `;
    } else {
      list.innerHTML = savedProducts
        .map(
          (product) => `
            <div class="saved-item">
              <img src="${product.image}" alt="${escapeHtml(product.alt)}" width="1200" height="1500" loading="lazy">
              <div>
                <button class="saved-item__name" type="button" data-open-product="${product.id}">${escapeHtml(product.name)}</button>
                <span class="saved-item__meta">${escapeHtml(product.category)} · ${escapeHtml(product.price)}</span>
              </div>
              <button class="saved-item__remove" type="button" data-remove-saved="${product.id}" aria-label="Remove ${escapeHtml(product.name)} from saved pieces">
                <svg class="icon"><use href="#icon-close"/></svg>
              </button>
            </div>
          `
        )
        .join("");
    }

    if (footer) {
      if (savedProducts.length) {
        const lines = savedProducts
          .map((product) => `• ${product.name} (${product.category}) — ${product.price}`)
          .join("\n");
        setExternalLink(
          footer,
          waLink(
            `Hello DTL, I've saved these pieces and would like to know more:\n\n${lines}\n\nCould you help me with sizing, customisation and availability?`
          )
        );
        footer.removeAttribute("aria-disabled");
      } else {
        setExternalLink(
          footer,
          generalLink("Hello DTL, I'd like help finding a piece for an occasion.")
        );
      }
    }
  }

  /* ------------------------------------------------------------------------
     Search
     ------------------------------------------------------------------------ */

  function searchResultMarkup(product) {
    return `
      <button class="search-result" type="button" data-open-product="${product.id}">
        <img src="${product.image}" alt="" width="1200" height="1500" loading="lazy">
        <span>
          <span class="search-result__name">${escapeHtml(product.name)}</span>
          <span class="search-result__meta">${escapeHtml(product.category)} · ${escapeHtml(product.meta)}</span>
        </span>
        <span class="search-result__price">${escapeHtml(product.price)}</span>
      </button>
    `;
  }

  function renderSearch(query = "") {
    const results = $("#searchResults");
    if (!results) return;

    const term = query.trim().toLowerCase();
    const matches = term
      ? PRODUCTS.filter((product) =>
          [product.name, product.category, product.meta, product.blurb, ...product.colors.map((color) => color.name)]
            .join(" ")
            .toLowerCase()
            .includes(term)
        )
      : PRODUCTS.slice(0, 4);

    const suggestions = ["Traditional", "Wedding", "Sherwani", "Denim", "Tracksuit"];

    results.innerHTML = `
      ${
        matches.length
          ? matches.map(searchResultMarkup).join("")
          : `<p class="search-empty">No pieces match “${escapeHtml(query)}”. Try a category, or ask us directly.</p>`
      }
      <div class="search-suggestions" aria-label="Search suggestions">
        ${suggestions
          .map(
            (suggestion) =>
              `<button type="button" data-search-suggestion="${suggestion}">${suggestion}</button>`
          )
          .join("")}
      </div>
    `;
  }

  function openSearch() {
    renderSearch($("#searchInput")?.value || "");
    openDialog($("#searchDialog"));
    requestAnimationFrame(() => $("#searchInput")?.focus());
  }

  /* ------------------------------------------------------------------------
     Quick view
     ------------------------------------------------------------------------ */

  function updateQuickLinks() {
    if (!state.activeProduct) return;
    const product = state.activeProduct;
    const size = state.selectedSize || product.sizes[0];
    const colour = state.selectedColor || product.colors[0].name;

    const message = `Hello DTL, I'm interested in the ${product.name} in ${colour}, size ${size}. Could you help me with availability, pricing and the next steps?`;
    setExternalLink($("#quickWa"), waLink(message));
    setExternalLink(
      $("#quickCall"),
      waLink(
        `Hello DTL, I'd like to book a styling call about the ${product.name}. When would you be available?`
      )
    );
  }

  function openQuick(id) {
    const product = productByAnyId(id);
    if (!product) return;

    closeDialog($("#searchDialog"));
    closeDialog($("#savedDialog"));

    state.activeProduct = product;
    state.selectedSize = product.sizes[0];
    state.selectedColor = product.colors[0].name;

    $("#quickImage").src = product.image;
    $("#quickImage").alt = product.alt;
    $("#quickCategory").textContent = `${product.category} · ${product.meta}`;
    $("#quickName").textContent = product.name;
    $("#quickPrice").textContent = product.price;
    $("#quickBlurb").textContent = product.blurb;
    $("#quickBadge").textContent = product.badge || "";
    $("#quickDetails").innerHTML = product.details
      .map(
        ([label, value]) =>
          `<li><strong>${escapeHtml(label)}</strong><span>${escapeHtml(value)}</span></li>`
      )
      .join("");

    $("#quickColors").innerHTML = product.colors
      .map(
        (color, index) =>
          `<button class="swatch ${index === 0 ? "is-active" : ""}" type="button" data-quick-color="${escapeHtml(color.name)}"><i style="--swatch:${color.hex}"></i>${escapeHtml(color.name)}</button>`
      )
      .join("");

    $("#quickSizes").innerHTML = product.sizes
      .map(
        (size, index) =>
          `<button class="size-chip ${index === 0 ? "is-active" : ""}" type="button" data-quick-size="${escapeHtml(size)}">${escapeHtml(size)}</button>`
      )
      .join("");

    updateQuickLinks();
    openDialog($("#quickDialog"));
  }

  function bindQuickOptions() {
    $("#quickColors")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-quick-color]");
      if (!button) return;
      state.selectedColor = button.dataset.quickColor;
      $$(".swatch", $("#quickColors")).forEach((node) =>
        node.classList.toggle("is-active", node === button)
      );
      updateQuickLinks();
    });

    $("#quickSizes")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-quick-size]");
      if (!button) return;
      state.selectedSize = button.dataset.quickSize;
      $$(".size-chip", $("#quickSizes")).forEach((node) =>
        node.classList.toggle("is-active", node === button)
      );
      updateQuickLinks();
    });
  }

  /* ------------------------------------------------------------------------
     Lead form
     ------------------------------------------------------------------------ */

  function bindLeadForm() {
    const form = $("#leadForm");
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const interest = String(data.get("interest") || "").trim();
      const timeline = String(data.get("timeline") || "").trim();
      const note = String(data.get("note") || "").trim();

      const message = [
        "Hello DTL, I'd like to start a private fitting.",
        "",
        `Name: ${name}`,
        `WhatsApp: ${phone}`,
        `Dressing for: ${interest}`,
        `Timeline: ${timeline}`,
        note ? `Notes: ${note}` : "",
        "",
        "Please let me know the next steps.",
      ]
        .filter(Boolean)
        .join("\n");

      const submit = $("#leadSubmit");
      const original = submit.innerHTML;
      submit.classList.add("is-loading");
      submit.textContent = "Opening WhatsApp…";

      const waUrl = waLink(message);
      const opened = window.open(waUrl, "_blank");
      if (opened) {
        try {
          opened.opener = null;
        } catch {
          /* Cross-origin window handles are intentionally restricted. */
        }
      } else {
        window.location.href = waUrl;
      }

      showToast("Opening WhatsApp with your fitting details.");
      setTimeout(() => {
        submit.classList.remove("is-loading");
        submit.innerHTML = original;
      }, 1700);
    });
  }

  /* ------------------------------------------------------------------------
     Dialogs & menu
     ------------------------------------------------------------------------ */

  function bindDialogs() {
    $$("[data-close-dialog]").forEach((button) => {
      button.addEventListener("click", () => {
        closeDialog(document.getElementById(button.dataset.closeDialog));
      });
    });

    $$("dialog").forEach((dialog) => {
      dialog.addEventListener("close", lockBody);
      dialog.addEventListener("cancel", () => {
        window.setTimeout(lockBody, 0);
      });
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
          closeDialog(dialog);
        }
      });
    });

    $("#searchBtn")?.addEventListener("click", openSearch);
    $("#mobileSearchBtn")?.addEventListener("click", () => {
      closeMenu();
      openSearch();
    });
    $("#savedBtn")?.addEventListener("click", () => {
      renderSaved();
      openDialog($("#savedDialog"));
    });
    $("#mobileSavedBtn")?.addEventListener("click", () => {
      closeMenu();
      renderSaved();
      openDialog($("#savedDialog"));
    });

    $("#searchInput")?.addEventListener("input", (event) => {
      renderSearch(event.target.value);
    });

    $("#searchResults")?.addEventListener("click", (event) => {
      const suggestion = event.target.closest("[data-search-suggestion]");
      if (suggestion) {
        const input = $("#searchInput");
        input.value = suggestion.dataset.searchSuggestion;
        renderSearch(input.value);
        input.focus();
      }
    });

    $("#savedList")?.addEventListener("click", (event) => {
      const remove = event.target.closest("[data-remove-saved]");
      if (!remove) return;
      toggleSaved(remove.dataset.removeSaved);
    });

    bindQuickOptions();
    bindLeadForm();
  }

  function openMenu() {
    const menu = $("#mobileMenu");
    if (!menu) return;
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    $("#menuBtn")?.setAttribute("aria-expanded", "true");
    lockBody();
  }

  function closeMenu() {
    const menu = $("#mobileMenu");
    if (!menu) return;
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    $("#menuBtn")?.setAttribute("aria-expanded", "false");
    lockBody();
  }

  function bindMenu() {
    $("#menuBtn")?.addEventListener("click", openMenu);
    $("#menuClose")?.addEventListener("click", closeMenu);
    $$("[data-menu-link]").forEach((link) =>
      link.addEventListener("click", () => closeMenu())
    );
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && $("#mobileMenu")?.classList.contains("is-open")) {
        closeMenu();
      }
    });
  }

  /* ------------------------------------------------------------------------
     Global interactions
     ------------------------------------------------------------------------ */

  function observeReveals() {
    const elements = $$(".reveal:not(.is-visible)");
    if (!elements.length) return;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
  }

  function bindGlobalClicks() {
    document.addEventListener("click", (event) => {
      const openProduct = event.target.closest("[data-open-product]");
      if (openProduct) {
        event.preventDefault();
        openQuick(openProduct.dataset.openProduct);
        return;
      }

      const save = event.target.closest("[data-save]");
      if (save) {
        event.preventDefault();
        event.stopPropagation();
        toggleSaved(save.dataset.save);
        return;
      }

      const filterLink = event.target.closest("[data-filter-link]");
      if (filterLink) {
        event.preventDefault();
        setFilter(filterLink.dataset.filterLink);
        scrollToEdit();
        return;
      }
    });

    $$(".filter-pill").forEach((button) => {
      button.addEventListener("click", () => setFilter(button.dataset.filter));
    });

    $("#loadMoreBtn")?.addEventListener("click", () => {
      state.showAll = true;
      renderProducts();
    });
  }

  function bindHeader() {
    const header = $("#siteHeader");
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function init() {
    hydrateSettings();
    hydrateFilterCounts();
    bindHeader();
    bindDialogs();
    bindMenu();
    bindGlobalClicks();
    renderProducts();
    updateSavedUi();
    observeReveals();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
