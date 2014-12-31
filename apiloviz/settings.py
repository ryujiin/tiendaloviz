"""
Django settings for apiloviz project.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.7/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os
BASE_DIR = os.path.dirname(os.path.dirname(__file__))
location = lambda x: os.path.join(
    os.path.dirname(os.path.realpath(__file__)), x)

import config

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.7/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config.SECRET_KEY

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

TEMPLATE_DEBUG = False

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    #apps de terceros
    'rest_framework',
    'rest_framework.authtoken',
    'sorl.thumbnail',
    'gunicorn',
    #mis apps
    'carro',
    'cliente',
    'catalogo',
    'contabilidad',
    'cmsloviz',
    'desboard',
    'pedido',
    'ubigeo',
    'tienda',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'apiloviz.urls'

WSGI_APPLICATION = 'apiloviz.wsgi.application'

SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': config.DB_NAME,
        'USER': config.DB_USER,
        'PASSWORD': config.DB_PASS,
        'HOST': 'localhost',
        'PORT': '',
    }
}

#import dj_database_url

#DATABASES['default'] =  dj_database_url.config()
# Internationalization
# https://docs.djangoproject.com/en/1.7/topics/i18n/

LANGUAGE_CODE = 'es-mx'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.7/howto/static-files/

MEDIA_ROOT = location("public/media")
MEDIA_URL = '/media/'

STATIC_ROOT = location('public/static')
STATIC_URL = '/static/'

TEMPLATE_DIRS = (
    location('templates'),
)
from django.conf.global_settings import TEMPLATE_CONTEXT_PROCESSORS as TCP

#TEMPLATE_CONTEXT_PROCESSORS = TCP + (
    #'social.apps.django_app.context_processors.backends',
    #'social.apps.django_app.context_processors.login_redirect',
#)
THUMBNAIL_QUALITY = '80'
THUMBNAIL_FORMAT = 'JPEG'

SOUTH_MIGRATION_MODULES = {
    'easy_thumbnails': 'easy_thumbnails.south_migrations',
}

try:
    from .local import *
except ImportError:
    pass