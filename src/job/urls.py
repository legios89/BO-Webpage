# coding: utf-8
# Core and 3th party packages
from django.conf.urls import url

# Project imports
from .views import JobListApi, CategoryListApi


urlpatterns = [
    url(r'^list/$', JobListApi.as_view(), name='api_job_list'),
    url(r'^category/list/$', CategoryListApi.as_view(),
        name='api_category_list'),
]
