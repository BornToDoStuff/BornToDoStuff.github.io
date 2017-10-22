---
---
/* ==================== */
/* JQuery-3.1.1.min.js */
/* ==================== */
{% include /js/jquery-3.1.1.min.js %}
/* ==================== */
/* custom-bootstrap.min.js */
/* ==================== */
{% include /js/custom-bootstrap.min.js %}
{% if page.search %}
/* ==================== */
/* lunr.min.js */
/* ==================== */
{% include /js/lunr.min.js %}
{% endif %}
{% comment %}
/* ==================== */
/* custom-elements.js */
/* ==================== */
{% include /js/custom-elements.js %}
{% endcomment %}
