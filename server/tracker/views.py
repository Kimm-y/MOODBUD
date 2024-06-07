# from rest_framework import generics, permissions
# from bs4 import BeautifulSoup
# import requests
# from django.http import Http404, JsonResponse
# from django.contrib.auth.models import User
# from .models import MoodEntry, JournalEntry, Article , Profile
# from .serializers import JournalEntrySerializer, MoodEntrySerializer, ArticleSerializer ,  ProfileSerializer
# from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated
# from django.contrib.auth import authenticate
# from rest_framework import generics, status
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from rest_framework_simplejwt.tokens import RefreshToken
# from .serializers import UserSerializer
# from rest_framework_simplejwt.views import TokenRefreshView as BaseTokenRefreshView
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated
# from rest_framework import generics
# from django.shortcuts import get_object_or_404
# from .models import Profile
# from .serializers import ProfileSerializer
# from rest_framework import permissions



# class HomeView(APIView):
     
#     permission_classes = (IsAuthenticated, )  
     
#     def get(self, request):      
#         content = {'message': 'Welcome to the JWT Authentication page using React Js and Django!'}  
#         return Response(content)


# # class TokenRefreshView(BaseTokenRefreshView):
# #     """
# #     Token refresh endpoint.
# #     """




# class RegisterView(generics.CreateAPIView):
#     serializer_class = UserSerializer

# class LoginView(APIView):
#     def post(self, request, *args, **kwargs):
#         username = request.data.get("username")
#         password = request.data.get("password")
#         user = authenticate(username=username, password=password)
#         if user is not None:
#             refresh = RefreshToken.for_user(user)
#             return Response({
#                 'refresh': str(refresh),
#                 'access': str(refresh.access_token),
#             })
#         return Response({"detail": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)


    
# class LogoutView(APIView):
#     permission_classes = (IsAuthenticated,)

#     def post(self, request):
#         try:
#             refresh_token = request.data["refresh_token"]
#             token = RefreshToken(refresh_token)
#             token.blacklist()
#             return Response(status=status.HTTP_205_RESET_CONTENT)
#         except Exception as e:
#             return Response(status=status.HTTP_400_BAD_REQUEST)


# class MoodEntryListView(generics.ListCreateAPIView):
#     serializer_class = MoodEntrySerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         return MoodEntry.objects.filter(user=self.request.user)

#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)

# class MoodEntryDetailView(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = MoodEntrySerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         return MoodEntry.objects.filter(user=self.request.user)
    

#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)

# class JournalEntryListCreate(generics.ListCreateAPIView):
#     serializer_class = JournalEntrySerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         return JournalEntry.objects.filter(user=self.request.user)

#     def perform_create(self, serializer):
#         serializer.save(user=self.request.user)

# class ArticleListCreateView(generics.ListCreateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# def scrape_psychology_today_articles(request):
#     url = 'https://www.psychologytoday.com/us'
#     response = requests.get(url)
#     if response.status_code != 200:
#         return JsonResponse({'error': 'Failed to retrieve articles'}, status=500)
    
#     soup = BeautifulSoup(response.content, 'html.parser')
#     articles = []

#     for article in soup.find_all('div', class_='teaser-lg__details'):  
#         title_tag = article.find('h2', class_='teaser-lg__title')
#         content_tag = article.find('p', class_='teaser-lg__summary teaser-lg__teaser--desktop')

#         if title_tag and content_tag:
#             title = title_tag.get_text()
#             content = content_tag.get_text()
#             articles.append({'title': title, 'content': content})
    
#     return JsonResponse(articles, safe=False)


# class ProfileView(generics.RetrieveUpdateAPIView):
#     serializer_class = ProfileSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
       
#         return Profile.objects.filter(user=self.request.user)

#     def get_object(self):
#         queryset = self.get_queryset()
#         obj = queryset.first()
#         if not obj:
#             raise Http404("Profile not found")
#         return obj

    
# class LogoutView(APIView):
#     permission_classes = (IsAuthenticated, )

#     def post(self, request):
#         try:
#             refresh_token = request.data["refresh_token"]
#             token = RefreshToken(refresh_token)
#             token.blacklist()
#             return Response(status=status.HTTP_205_RESET_CONTENT)
#         except Exception as e:
#             return Response(status=status.HTTP_400_BAD_REQUEST)


from rest_framework import generics, permissions
from bs4 import BeautifulSoup
import requests
from django.http import Http404, JsonResponse
from django.contrib.auth.models import User
from .models import MoodEntry, JournalEntry, Article , Profile
from .serializers import JournalEntrySerializer, MoodEntrySerializer, ArticleSerializer ,  ProfileSerializer
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer
from rest_framework_simplejwt.views import TokenRefreshView as BaseTokenRefreshView
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from django.shortcuts import get_object_or_404
from .models import Profile
from rest_framework import permissions
from rest_framework import generics, permissions, status
from rest_framework.response import Response


from .models import MoodEntry, JournalEntry, Article, Profile
from .serializers import JournalEntrySerializer, MoodEntrySerializer, ArticleSerializer, ProfileSerializer, RegistrationSerializer

# Home view
class HomeView(APIView):
    permission_classes = [IsAuthenticated]
     
    def get(self, request):      
        content = {'message': 'Welcome to the JWT Authentication page using React Js and Django!'}  
        return Response(content)

# Register view
class RegistrationView(generics.CreateAPIView):
    serializer_class = RegistrationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

# Login view
class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username, password=password)
        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        return Response({"detail": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

# Logout view
class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception:
            return Response(status=status.HTTP_400_BAD_REQUEST)

# Mood entry views
class MoodEntryListView(generics.ListCreateAPIView):
    serializer_class = MoodEntrySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return MoodEntry.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class MoodEntryDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = MoodEntrySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return MoodEntry.objects.filter(user=self.request.user)

# Journal entry views
class JournalEntryListCreate(generics.ListCreateAPIView):
    serializer_class = JournalEntrySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return JournalEntry.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

# Article views
class ArticleListCreateView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

# Article scraping view
def scrape_psychology_today_articles(request):
    url = 'https://www.psychologytoday.com/us'
    response = requests.get(url)
    if response.status_code != 200:
        return JsonResponse({'error': 'Failed to retrieve articles'}, status=500)
    
    soup = BeautifulSoup(response.content, 'html.parser')
    articles = []

    for article in soup.find_all('div', class_='teaser-lg__details'):  
        title_tag = article.find('h2', class_='teaser-lg__title')
        content_tag = article.find('p', class_='teaser-lg__summary teaser-lg__teaser--desktop')

        if title_tag and content_tag:
            title = title_tag.get_text()
            content = content_tag.get_text()
            articles.append({'title': title, 'content': content})
    
    return JsonResponse(articles, safe=False)

# Profile view
class ProfileView(generics.ListCreateAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Profile.objects.filter(user=self.request.user)

    def get_object(self):
        queryset = self.get_queryset()
        obj = queryset.first()
        if not obj:
            raise Http404("Profile not found")
        return obj
