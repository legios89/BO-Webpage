FROM birkas_orsi-base
WORKDIR /src/
RUN set -x && apt-get update && DEBIAN_FRONTEND=noninteractive \
      apt-get install -y --no-install-recommends \
        libpq5 \
        libpython3.4 \
        python3-pip \
        libpq-dev \
        build-essential \
        python3-dev \
        gettext \
        libjpeg-dev

RUN pip3 install \
      uwsgi==2.0.12 \
      django==1.9.5 \
      psycopg2==2.6.1 \
      django-debug-toolbar==1.4 \
      djangorestframework==3.3.3 \
      markdown==2.6.6 \
      django-filter==0.13.0 \
      django-crispy-forms==1.6.0 \
      django-cleanup==0.4.2 \
      django-extensions==1.6.1 \
      django-compressor==2.0 \
      django-imagekit==3.3 \
      django-modeltranslation==0.11 \
      django-rosetta==0.7.11 \
      pillow==3.2.0 \
      django-tinymce==2.3.0
