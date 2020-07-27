---
---

//assign loop to forloop.index0 to reference it against the item location
var item_cache = [
  {% for post in site.posts %} {
    "ord" : "{{ forloop.index0 }}",
    "id" : {{ post.item_id }},
    "url" : {{ post.url | jsonify }},
    "title" : {{ post.title | jsonify }},
    "type" : "{{ post.category }}",
    "subtypes" : {% if post.item_subtypes %}[{% for subtype in post.item_subtypes %}"{{subtype}}"{% unless forloop.last %}, {% endunless %}{% endfor %}]{% else %}""{% endif %},
    "rarity" : "{{ post.item_rarity }}",
    "attunement" : {{ post.item_attunement }},
    "requirement" : "{{ post.item_requirement }}",
    "curse" : {{ post.item_curse }},
    "classes" : [{% for class in post.item_classes %}"{{class}}"{% unless forloop.last %}, {% endunless %}{% endfor %}],
    "school" : "{{ post.item_school }}",
    "role" : [{% for role in post.item_role %}"{{role}}"{% unless forloop.last %}, {% endunless %}{% endfor %}],
    "damage" : {% if post.item_damage %}[{% for damage in post.item_damage %}"{{damage}}"{% unless forloop.last %}, {% endunless %}{% endfor %}]{% else %}""{% endif %},
    "tags" : {% if post.tags.size > 0 %}[{% for tag in post.tags %}"{{tag}}"{% unless forloop.last %}, {% endunless %}{% endfor %}]{% else %}""{% endif %},
    "idea" : "{{ post.item_idea }}",
    "co_creator" : "{{ post.item_co_creator }}",
    "updated" : "{{ post.item_updated }}",
    "content" : {{ post.excerpt | jsonify}},
    "searchtext" : {{ post.content | strip_html | strip_newlines | jsonify}}
    }{% unless forloop.last %},{% endunless %} {% endfor %}
];

var search_index = elasticlunr(function () {
  this.setRef('ord');
  this.addField('title');
  this.addField("type");
  this.addField("subtypes");
  this.addField("classes");
  this.addField("damage");
  this.addField("tags");
  this.addField("searchtext");
});

item_cache.forEach(function(item) {
  search_index.addDoc(item);
});
