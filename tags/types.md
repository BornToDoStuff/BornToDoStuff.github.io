---
layout: page
title: Types
---

{% assign rawtags = "" %}
{% for post in site.posts %}
	{% assign item_types = post.item_type | join:'|' | append:'|' %}
	{% assign rawtags = rawtags | append:item_types %}
{% endfor %}
{% assign rawtags = rawtags | split:'|' | sort %}

{% assign item_types = "" %}
{% for type in rawtags %}
	{% if type != "" %}
		{% if item_types == "" %}
			{% assign item_types = type | split:'|' %}
		{% endif %}
		{% unless item_types contains type %}
			{% assign item_types = item_types | join:'|' | append:'|' | append:type | split:'|' %}
		{% endunless %}
	{% endif %}
{% endfor %}

{% for type in item_types %}
	<a href="#{{ type | slugify }}"> {{ type }} </a>
{% endfor %}

{% for type in item_types %}
	<h2 id="{{ type | slugify }}">{{ type }}</h2>
	<ul>
	 {% for post in site.posts %}
		 {% if post.item_type contains type %}
		 <li>
		   <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
		 </li>
		 {% endif %}
	 {% endfor %}
	</ul>
{% endfor %}
