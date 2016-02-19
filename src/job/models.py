# coding: utf-8
# Core and 3th party packages
from django.db import models
from django.conf import settings


class Job(models.Model):
    title = models.CharField(max_length=50)
    created_by = models.ForeignKey(settings.AUTH_USER_MODEL)
    created_at = models.DateTimeField(auto_now_add=True)
    description = models.TextField()

    def __str__(self):
        return('#%s %s' % (self.id, self.title))
