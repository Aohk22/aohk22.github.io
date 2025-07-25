---
layout: post_layout
title: "Home Page"
---
# {{ title }}

## My Posts

{% for post in collections.posts %}
[{{ post.data.title }}]({{ post.url }})
{% endfor %}
