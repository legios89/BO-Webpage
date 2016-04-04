# coding: utf-8
# Core and 3th party packages
import os
from django.utils.translation import ugettext_lazy as _


def getvar(name, default=None, required=True):
    """
    Returns the value of an environment variable.
    If the variable is not present, default will be used.
    If required is True, only not None values will be returned,
    will raise an exception instead of returning None.
    """
    ret = os.environ.get(name, default)
    if required and ret is None:
        raise Exception('Environment variable %s is not set' % name)
    return ret


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SECRET_KEY = getvar('DJANGO_SECRET_KEY')
DEBUG = getvar('DEBUG', 'True') == 'True'
ALLOWED_HOSTS = getvar('ALLOWED_HOSTS', '').split(',')
LOGIN_URL = '/admin/login/'
LOGIN_REDIRECT_URL = '/admin/'

# Application definition
INSTALLED_APPS = (
    # project apps
    'core',
    'modeltranslation',
    # django core
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # 3rd party
    'debug_toolbar',
    'rest_framework',
    'django_cleanup',
    'django_extensions',
    'compressor',
    'rosetta',
    'tinymce',
    # project apps
    'job'
)

MIDDLEWARE_CLASSES = (
    'debug_toolbar.middleware.DebugToolbarMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',
)

ROOT_URLCONF = 'core.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
            'loaders': [
                'django.template.loaders.filesystem.Loader',
                'django.template.loaders.app_directories.Loader',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'HOST': 'postgres',
        'PORT': '5432',
        'NAME': 'django',
        'USER': 'postgres',
        'PASSWORD': getvar('DB_PASSWORD')
    }
}

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.db.DatabaseCache',
        'LOCATION': 'cache_table',
    }
}

LANGUAGE_CODE = 'hu'
LANGUAGES = [('hu', _('Hungarian'))]
LOCALE_PATHS = ('/data/locale/',)
if getvar('YANDEX_TRANSLATE_KEY', required=False):
    ROSETTA_ENABLE_TRANSLATION_SUGGESTIONS = True
    YANDEX_TRANSLATE_KEY = getvar('YANDEX_TRANSLATE_KEY')

TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True
STATIC_URL = '/static/'
STATIC_ROOT = getvar('STATIC_ROOT')
MEDIA_ROOT = '/data/media/'
MEDIA_URL = '/media/'

STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    'compressor.finders.CompressorFinder'
)

COMPRESS_CSS_HASHING_METHOD = None

# Debug toolbar visibility fix
DEBUG_TOOLBAR_CONFIG = {
    'SHOW_TOOLBAR_CALLBACK': lambda x: DEBUG,
}

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'simple': {
            'format': '%(levelname)s %(asctime)s %(module)s %(message)s'
        }
    },
    'filters': {
        'require_debug_true': {
            '()': 'django.utils.log.RequireDebugTrue',
        },
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse',
        },
    },
    'handlers': {
        'console': {
            'level': 'INFO',
            'filters': ['require_debug_true'],
            'class': 'logging.StreamHandler',
            'formatter': 'simple'
        },
        'mail_admins': {
            'level': 'ERROR',
            'filters': ['require_debug_false'],
            'class': 'django.utils.log.AdminEmailHandler'
        },
        'django_file': {
            'level': 'INFO',
            'class': 'logging.handlers.TimedRotatingFileHandler',
            'filename': '/data/logs/django/django.log',
            'when': 'midnight',
            'backupCount': 30,
            'formatter': 'simple',
        },
    },
    'loggers': {
        'django': {
            'handlers': ['console', 'django_file'],
            'propagate': True,
        },
        'django.request': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': True,
        },
        'django.template': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': True,
        },
    }
}

ADMINS = [('zoltan', 'zoltan.egyed@vertis.com'), ]
EMAIL_SUBJECT_PREFIX = '[Django birkas_orsi] '
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = getvar('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = getvar('EMAIL_HOST_PASSWORD')
SERVER_EMAIL = getvar('EMAIL_HOST_USER')
DEFAULT_FROM_EMAIL = getvar('EMAIL_HOST_USER')

BUTTONS = 'bold,italic,underline,separator,bullist,numlist,separator,outdent,'
BUTTONS += 'indent,separator,undo,redo,forecolor,backcolor'
BUTTONS2 = 'justifyleft,justifycenter,justifyright,justifyfull,fontselect,'
BUTTONS2 += 'fontsizeselect,code,emotions,'

TINYMCE_DEFAULT_CONFIG = {
    'plugins': "paste,emotions",
    'theme': "advanced",
    'theme_advanced_toolbar_location': "top",
    'theme_advanced_buttons1': BUTTONS,
    'theme_advanced_buttons2': BUTTONS2,
    'theme_advanced_buttons3': "",
    'cleanup_on_startup': True,
    'custom_undo_redo_levels': 10
}
