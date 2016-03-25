from django.contrib import admin
from django import forms
from tinymce.widgets import TinyMCE

from .models import Job, Category, JobCategory


class JobCategoryInline(admin.TabularInline):
    model = JobCategory


class JobAdminForm(forms.ModelForm):
    class Meta:
        model = Job
        fields = ('title', 'description', 'is_active', 'image', 'pdf')
        widgets = {'description': TinyMCE(attrs={'cols': 80, 'rows': 30}), }


class JobAdmin(admin.ModelAdmin):
    form = JobAdminForm
    list_display = ('id', 'title', 'created_at')
    list_display_links = list_display
    search_fields = ['title']
    inlines = [JobCategoryInline, ]
    readonly_fields = ('created_by', 'created_at')

    def save_model(self, request, obj, form, change):
        if obj.id is None:
            obj.created_by = request.user
        obj.save()

admin.site.register(Job, JobAdmin)
admin.site.register(Category)
