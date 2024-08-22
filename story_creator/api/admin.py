from django.contrib import admin
from .models import *

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email']
    search_fields = ('email', 'username')

class ProfileAdmin(admin.ModelAdmin):
    list_editable = ['verified']
    list_display = ['user', 'full_name', 'verified']
    list_filter = ['verified'] 

admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)