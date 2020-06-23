## PUPPISCRAPER

This is a little project to scraping web pages with realtime data.

The objective of this project is be able to consume changing data on a website without do http request,
that allow you to scrap data in realtime without wait for download a webpage with request

Puppeter dependencie will ensure that task.


# Advantages : 
1. Real time scraping react data
2. No request wait time


# Disadvantages : 
1. Every instance of puppeter will open a crhomium browser so this *consume a huge a mount of ram* ( maybe we can get an approach with 'new tab' function)
2. Not intuitive


# TODO : 
1. More scraping use cases
2. Aprroach to multiple web pages scraping
3. Be able to control browser.close()
