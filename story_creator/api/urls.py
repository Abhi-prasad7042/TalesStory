from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenRefreshView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('token/', MyTokens.as_view()),
    path('token/refresh', TokenRefreshView.as_view()),
    path('register/', RegisterView.as_view()),
    path('dashboard/', DashboardView),
    path('api/user-profile/', user_profile, name='user-profile')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
