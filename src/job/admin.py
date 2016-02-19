from django.contrib import admin
from .models import Job


class JobAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'created_at')
    list_display_links = list_display
    search_fields = ['title']

admin.site.register(Job, JobAdmin)
