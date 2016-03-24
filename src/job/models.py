# coding: utf-8
# Core and 3th party packages
from django.db import models
from django.conf import settings
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit
from tinymce import models as tinymce_models
import datetime


def media_file_path(instance, filename, directory):
    now = datetime.datetime.now()
    year = now.strftime('%Y')
    now = now.strftime('%s')
    # file will be uploaded to MEDIA_ROOT/job_images/<year>/<time><filename>
    return '{0}/{1}/{2}{3}'.format(directory, year, now, filename)


def job_image_path(instance, filename):
    return media_file_path(instance, filename, 'job_images')


def job_pdf_path(instance, filename):
    return media_file_path(instance, filename, 'job_pdf')


class Job(models.Model):
    title = models.CharField(max_length=50)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL)
    created_at = models.DateTimeField(auto_now_add=True)
    description = tinymce_models.HTMLField()
    image = ProcessedImageField(
        upload_to=job_image_path, format='JPEG', null=True,
        processors=[ResizeToFit(600)], options={'quality': 60})
    pdf = models.FileField(upload_to=job_pdf_path, null=True, blank=True)

    def __str__(self):
        return('#%s %s' % (self.id, self.title))


class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return('#%s %s' % (self.id, self.name))


class JobCategory(models.Model):
    job = models.ForeignKey(Job, related_name="categories")
    category = models.ForeignKey(Category, related_name="jobs")

    def __str__(self):
        return('#%s %s %s' % (self.id, self.job.title, self.category.name))
