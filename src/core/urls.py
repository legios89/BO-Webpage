# coding: utf-8
# Core and 3th party packages
from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.views.i18n import javascript_catalog
from django.conf.urls.i18n import i18n_patterns

# Project imports
from .views import HomePageView, PublishRosetta, UrlsApi

urlpatterns = i18n_patterns(
    url(r'^$', HomePageView.as_view(), name='home'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api-auth/', include('rest_framework.urls',
        namespace='rest_framework')),
    url(r'^jsi18n/$', javascript_catalog, name='javascript-catalog'),
    url(r'^api/urls/$', UrlsApi.as_view(), name='api_urls'),
    url(r'^rosetta/', include('rosetta.urls')),
    url(r'^publish/rosetta/', PublishRosetta.as_view(), name='publish_rosetta')
) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    import debug_toolbar
    urlpatterns.append(url(r'^__debug__/', include(debug_toolbar.urls)))
