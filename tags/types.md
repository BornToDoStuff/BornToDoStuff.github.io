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
