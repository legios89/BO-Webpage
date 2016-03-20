from django.contrib import admin
from django import forms
from tinymce.widgets import TinyMCE

from .models import Job, Category, JobCategory


class JobCategoryInline(admin.TabularInline):
    model = JobCategory


class JobAdminForm(forms.ModelForm):
    class Meta:
        model = Job
        fields = '__all__'
        widgets = {
            'description': TinyMCE(attrs={'cols': 80, 'rows': 30}),
        }


class JobAdmin(admin.ModelAdmin):
    form = JobAdminForm
    list_display = ('id', 'title', 'created_at')
    list_display_links = list_display
    search_fields = ['title']
    inlines = [JobCategoryInline, ]

admin.site.register(Job, JobAdmin)
admin.site.register(Category)
