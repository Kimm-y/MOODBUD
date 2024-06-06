from django.contrib import admin

# Register your models here.
from .models import MoodEntry
from .models import JournalEntry
from .models import Article

class MoodEntryAdmin(admin.ModelAdmin):
    list_display = ('mood','created_at')

# Register your models here.

admin.site.register(MoodEntry, MoodEntryAdmin)
admin.site.register(JournalEntry)

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'content')  
    search_fields = ('title', 'content')  
