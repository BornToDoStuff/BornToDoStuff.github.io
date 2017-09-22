---
---

//search index at the bottom

//assign id to forloop.index0 to reference it against the item at the same index in the item_cache.
var search_cache = [
  {% for post in site.posts %} {
      "id" : "{{ forloop.index0 }}",
      "title" : "{{ post.title | escape }}",
      "type" : "{{ post.item_type }}",
      "subtypes" : "{% for item in post.item_subtype %}{{ item.type }} {% endfor %}",
      "rarity" : "{{ post.item_rarity }}",
      "attunement" : {{ post.item_attunement }},
      "requirement" : "{{ post.item_requirement }}",
      "curse" : {{ post.item_curse }},
      "classes" : "{% for item in post.item_classes %}{{ item.class }} {% endfor %}",
      "school" : "{{ post.item_school }}",
      "role" : "{% for item in post.item_role %}{{ item.role }} {% endfor %}",
      "damage" : "{% for item in post.item_damage %}{{ item.type }} {% endfor %}",
      "tags" : "{% for item in post.item_tags %}{{ item.tag }} {% endfor %}",
      "searchtext" : {{ post.content | strip_html | strip_newlines | jsonify }}
    }{% unless forloop.last %},{% endunless %} {% endfor %}
];
var item_cache = [
  {% for post in site.posts %} {
      "id" : "{{ post.item_id }}",
      "title" : "{{ post.title | escape }}",
      "type" : "{{ post.item_type }}",
      "subtypes" : [ {% for item in post.item_subtype %} {"type" : "{{ item.type }}"}{% unless forloop.last %}, {% endunless %}{% endfor %} ],
      "rarity" : "{{ post.item_rarity }}",
      "attunement" : {{ post.item_attunement }},
      "requirement" : "{{ post.item_requirement }}",
      "curse" : {{ post.item_curse }},
      "classes" : [ {% for item in post.item_classes %} {"class" : "{{ item.class }}", "weight" : "{{ item.weight }}"}{% unless forloop.last %}, {% endunless %}{% endfor %} ],
      "school" : "{{ post.item_school }}",
      "role" : [ {% for item in post.item_role %} {"role" : "{{ item.role }}"}{% unless forloop.last %}, {% endunless %}{% endfor %} ],
      "damage" : [ {% for item in post.item_damage %} {"type" : "{{ item.type }}"}{% unless forloop.last %}, {% endunless %}{% endfor %} ],
      "tags" : [ {% for item in post.item_tags %} {"tag" : "{{ item.tag }}"}{% unless forloop.last %}, {% endunless %}{% endfor %} ],
      "idea" : "{{ post.item_idea }}",
      "co_creator" : "{{ post.item_co_creator }}",
      "updated" : "{{ post.item_updated }}",
      "content" : {{ post.content | smartify | jsonify }}
    }{% unless forloop.last %},{% endunless %} {% endfor %}
];

var search_index = lunr(function () {
  this.ref("id");
  this.field("title", {boost: 10});
  this.field('category');
  this.field("tags");
  this.field("searchtext");

  search_cache.forEach(function (item) {
    this.add(item)
  }, this)
});
