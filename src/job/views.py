# coding: utf-8
# Core and 3th party packages
from rest_framework.views import APIView
from rest_framework.response import Response

# Project imports
from .models import Job, Category


class JobListApi(APIView):
    def get(self, request, format=None):
        data = []
        for job in Job.objects.all():
            data.append({
                'id': job.id,
                'title': job.title,
                'created_at': job.created_at,
                'description': job.description,
                'image': job.image.url if job.image else None,
                'pdf': job.pdf.url if job.pdf else None
            })
        return Response(data)


class CategoryListApi(APIView):
    def get(self, request, format=None):
        data = []
        for category in Category.objects.all():
            data.append({
                'id': category.id,
                'name': category.name,
            })
        return Response(data)
