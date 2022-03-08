from newsapi import NewsApiClient
import datetime as dt


newsapi = NewsApiClient(api_key="e38d8ead420a418e87144510c0222957")


data = newsapi.get_everything(q="ukraine", language ="en")

print(data.keys())