from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics, permissions
from oauth2_provider.contrib.rest_framework import TokenHasReadWriteScope, TokenHasScope
from .models import UserProfile
from .serializers import UserProfileSerializer

class UserProfileList(generics.ListCreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated, TokenHasReadWriteScope]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class UserProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated, TokenHasReadWriteScope]

# Create your views here.
