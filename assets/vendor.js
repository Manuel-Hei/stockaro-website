// website/assets/vendor.js
// ─────────────────────────────────────────────────────────────────────────────
// Substituiert beim Page-Load alle Elemente mit data-vendor="<feldname>" durch
// den passenden Wert aus SITE_CONFIG.vendor (siehe assets/config.js).
//
// Erwartete Feldnamen: legalName, addressLine1, addressLine2, zip, city,
// country, email, phone, representative, vatId, hrb, taxRemark.
//
// Spezialformen:
//   data-vendor="addressBlock" → mehrzeilige Adresse als <br>-getrennter Block
//   data-vendor-href="email"   → setzt href="mailto:..." auf vendor.email
//
// Diese Datei ist die einzige Stelle, an der Vendor-Daten auf der Website in
// das DOM einfliessen. Niemals Adresse oder E-Mail direkt in *.html schreiben.
// ─────────────────────────────────────────────────────────────────────────────
(function () {
  if (typeof SITE_CONFIG === 'undefined' || !SITE_CONFIG.vendor) return;
  var v = SITE_CONFIG.vendor;

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function addressBlockHtml() {
    var lines = [];
    if (v.addressLine1) lines.push(escapeHtml(v.addressLine1));
    if (v.addressLine2) lines.push(escapeHtml(v.addressLine2));
    var zipCity = [v.zip, v.city].filter(Boolean).join(' ');
    if (zipCity) lines.push(escapeHtml(zipCity));
    if (v.country) lines.push(escapeHtml(v.country));
    return lines.join('<br>');
  }

  function apply() {
    document.querySelectorAll('[data-vendor]').forEach(function (el) {
      var key = el.getAttribute('data-vendor');
      if (key === 'addressBlock') {
        el.innerHTML = addressBlockHtml();
        return;
      }
      var val = v[key];
      if (val === undefined || val === '') return;
      el.textContent = val;
    });
    document.querySelectorAll('[data-vendor-href]').forEach(function (el) {
      var key = el.getAttribute('data-vendor-href');
      if (key === 'email' && v.email) {
        el.setAttribute('href', 'mailto:' + v.email);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();
