from django.contrib import admin
from .models import Job, Category, JobCategory


class JobCategoryInline(admin.TabularInline):
    model = JobCategory


class JobAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'created_at')
    list_display_links = list_display
    search_fields = ['title']
    inlines = [JobCategoryInline, ]

admin.site.register(Job, JobAdmin)
admin.site.register(Category)
