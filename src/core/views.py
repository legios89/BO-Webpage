# coding: utf-8
# Core and 3th party packages
from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.generic import View, TemplateView
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.views.decorators.cache import never_cache
from django.contrib.staticfiles.templatetags.staticfiles import static
from django.utils.translation import ugettext_lazy as _
import logging

# Project imports
from job.models import Job
log = logging.getLogger('django')


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

    def get(self, request, *args, **kwargs):
        ctx = self.get_context_data(**kwargs)
        ctx['title'] = _('Birkás Orsolya Toborzási és Kiválasztási Tanácsadó')
        ctx['fb_image'] = static('img/profile.jpg')
        ctx['desc'] = _('Birkás Orsolya Toborzási és Kiválasztási '
                        'Tanácsadó honlapja és aktuális állás ajánlatai')
        if request.path[0:5] == '/job/':
            try:
                job = Job.objects.get(pk=int(request.path[5:]), is_active=True)
                ctx['title'] += ' - ' + job.title
                ctx['fb_image'] = job.image.url
                ctx['desc'] += ' - ' + job.title
            except:
                log.exception('Wrong url!')
        return self.render_to_response(ctx)


class UrlsApi(APIView):
    @never_cache
    def get(self, request, format=None):
        return Response({'job_list': reverse('job:api_job_list')})
