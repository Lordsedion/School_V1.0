from curses.ascii import SP
from django.contrib import admin
from .models import *

# Register your models here.

@admin.action(description='Select SS1')

class SchoolAdmin(admin.ModelAdmin):
    ordering = ['term']

class UserAdmin(admin.ModelAdmin):
    exclude=("admission_no",)
    readonly_fields=('admission_no', )

admin.site.register(Ss1, SchoolAdmin)
admin.site.register(Class)
admin.site.register(Student, UserAdmin)
admin.site.register(Teacher)
admin.site.register(Attendance)
admin.site.register(Academics)
admin.site.register(Sports)
admin.site.register(Subject)
admin.site.register(SS2)
admin.site.register(SS3)
admin.site.register(Jss3)
admin.site.register(Jss2)
admin.site.register(Jss1)
admin.site.register(Term)
admin.site.register(Primary5)
admin.site.register(Primary4)
admin.site.register(Primary3)

admin.site.register(Primary2)
admin.site.register(Primary1, SchoolAdmin)

