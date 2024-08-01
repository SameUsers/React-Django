import requests
from bs4 import BeautifulSoup
import psycopg2
import datetime
import random

url=["https://sutochno.ru/belarus"]
page = requests.get(url[0])
soup = BeautifulSoup(page.text, "html.parser")
object_desc=soup.findAll('a', class_='card-content__object-type js-name-click')
description=[]
try:
    for i in object_desc:
        description.append(i.contents[0])
        print(i.contents)
except:
    description.append("None")


name=[]
object_name=soup.findAll('span', class_='object-hotel__type')
for i in object_name:
    name.append(i.text)
    print(i.text)


conn = psycopg2.connect(dbname='postgres', user='postgres', password='postgres', host='127.0.0.1', port="5432")
cursor = conn.cursor()
for i in name:
    for a in description:
        cursor.execute(f"""INSERT INTO "Django_main_flat" (name,description,date,price) VALUES('{i}','{a}','{datetime.date.today()}',{random.randint(100,1000)})""")
        conn.commit()
cursor.close()
conn.close()