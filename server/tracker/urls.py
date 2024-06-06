from django.urls import path
from . import views
from .views import JournalEntryListCreate
from .views import scrape_psychology_today_articles
from .views import RegisterView, LoginView , ProfileView , BaseTokenRefreshView , LogoutView


urlpatterns = [
    path('profile/', ProfileView.as_view(), name='profile'),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', views.LogoutView.as_view(), name ='logout'),
    path('mood-entries/', views.MoodEntryListView.as_view(), name='mood-entry-list'),
    path('mood-entries/<int:pk>/', views.MoodEntryDetailView.as_view(), name='mood-entry-detail'),
    path('journal-entries/', JournalEntryListCreate.as_view(), name='journal-entries'),
    path('scrape-articles/', scrape_psychology_today_articles, name='scrape-articles'),


]







