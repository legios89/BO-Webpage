# coding: utf-8
# Core and 3th party packages
from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.generic import View, TemplateView
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.views.decorators.cache import never_cache


class PublishRosetta(View):
    def get(self, request):
        try:
            import uwsgi
            uwsgi.reload()
        except ImportError:
            pass  # Probably the django started with runserver
        return HttpResponseRedirect(reverse('rosetta-home'))


class HomePageView(TemplateView):
    template_name = "home.html"


class UrlsApi(APIView):
    @never_cache
    def get(self, request, format=None):
        return Response({'job_list': reverse('job:api_job_list')})
