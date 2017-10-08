---
---

//search index at the bottom

//assign id to forloop.index0 to reference it against the item at the same index in the item_cache.
var search_cache = [
  {% for post in site.posts %} {
      "id" : "{{ forloop.index0 }}",
      "title" : {{ post.title | jsonify }},
      "type" : "{{ post.category }}",
      "subtypes" : "{% for item in post.item_subtype %}{{ item }} {% endfor %}",
      "rarity" : "{{ post.item_rarity }}",
      "attunement" : {{ post.item_attunement }},
      "requirement" : "{{ post.item_requirement }}",
      "curse" : {{ post.item_curse }},
      "classes" : "{% for item in post.item_classes %}{{ item }} {% endfor %}",
      "school" : "{{ post.item_school }}",
      "role" : "{% for item in post.item_role %}{{ item }} {% endfor %}",
      "damage" : "{% for item in post.item_damage %}{{ item }} {% endfor %}",
      "tags" : "{% for item in post.tags %}{{ item }} {% endfor %}",
      "searchtext" : {{ post.content | strip_html | strip_newlines | jsonify }}
    }{% unless forloop.last %},{% endunless %} {% endfor %}
];
var item_cache = [
  {% for post in site.posts %}
    {
      "id" : {{ post.item_id }},
      "url" : {{ post.url | jsonify }},
      "title" : {{ post.title | jsonify }},
      "type" : "{{ post.category }}",
      "subtypes" : {% if post.item_subtypes %}{{ post.item_subtypes | replace '\"\"', '\", \"'}}{% else %}""{% endif %},
      "rarity" : "{{ post.item_rarity }}",
      "attunement" : {{ post.item_attunement }},
      "requirement" : "{{ post.item_requirement }}",
      "curse" : {{ post.item_curse }},
      "classes" : {{ post.item_classes | replace '\"\"', '\", \"'}},
      "school" : "{{ post.item_school }}",
      "role" : {{ post.item_role | replace '\"\"', '\", \"'}},
      "damage" : {% if post.item_damage %}{{ post.item_damage | replace '\"\"', '\", \"'}}{% else %}""{% endif %},
      "tags" : {% if post.tags.size > 0 %}{{ post.tags | replace '\"\"', '\", \"'}}{% else %}""{% endif %},
      "idea" : "{{ post.item_idea }}",
      "co_creator" : "{{ post.item_co_creator }}",
      "updated" : "{{ post.item_updated }}",
      "content" : {{ post.excerpt | jsonify}}
    }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];

var search_index = lunr(function () {
  this.ref("id");
  this.field("title", {boost: 10});
  this.field("type");
  this.field("subtypes");
  this.field("rarity", {boost: 5});
  this.field("classes");
  this.field("damage");
  this.field("tags", {boost: 5});
  this.field("searchtext");

  search_cache.forEach(function (item) {
    this.add(item)
  }, this)
});
