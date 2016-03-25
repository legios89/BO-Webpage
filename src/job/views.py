# coding: utf-8
# Core and 3th party packages
from rest_framework.views import APIView
from rest_framework.response import Response

# Project imports
from .models import Job, Category


class JobListApi(APIView):
    def get(self, request, format=None):
        data = []
        pf = ('categories__category', )
        for job in Job.objects.filter(is_active=True).prefetch_related(*pf):
            categories = []
            for jobcategory in job.categories.all():
                categories.append({
                    'id': jobcategory.category.id,
                    'name': jobcategory.category.name
                })

            data.append({
                'id': job.id,
                'title': job.title,
                'created_at': job.created_at,
                'description': job.description,
                'image': {
                    'url': job.image.url,
                    'height': job.image.height,
                    'width': job.image.width
                },
                'pdf': job.pdf.url if job.pdf else None,
                'categories': categories
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
