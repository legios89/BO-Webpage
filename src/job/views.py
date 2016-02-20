# coding: utf-8
# Core and 3th party packages
from rest_framework.views import APIView
from rest_framework.response import Response

# Project imports
from .models import Job


class JobListApi(APIView):
    def get(self, request, format=None):
        data = []
        for job in Job.objects.all():
            data.append({
                'id': job.id,
                'title': job.title,
            })
        return Response(data)
