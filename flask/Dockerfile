FROM python:3.7.9

ADD . /flask
WORKDIR /flask
VOLUME /flask
RUN python -m pip install --upgrade pip
RUN pip3 install Flask
RUN pip3 install uwsgi
RUN pip3 install mariadb
RUN pip3 install flask-restplus
RUN pip3 install pymysql
RUN pip3 install flask-cors
RUN pip3 install APScheduler
RUN pip3 install requests

CMD ["python","./src/run.py"]
