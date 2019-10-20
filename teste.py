import requests

month = '01'
name_month = 'janeiro'

for day in range(1,31):
    if (day >= 1 and day < 10):
        day = '0' + str(day)
    url = 'http://viirsfire.geog.umd.edu/web_data/GLOBAL/NOAA/2018' + month + str(day) + '_NOAA.txt'
    r = requests.get(url, allow_redirects=True)
    open(name_month + str(day) + '.csv', 'wb').write(r.content)