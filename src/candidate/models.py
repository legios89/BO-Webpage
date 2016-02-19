# coding: utf-8
# Core and 3th party packages
from django.db import models
from job.models import Job


class Candidate(models.Model):
    job = models.ForeignKey(Job)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return('#%s %s %s' % (
            self.id, self.job.title, self.created_at.strftime('%Y-%B-%d')))
