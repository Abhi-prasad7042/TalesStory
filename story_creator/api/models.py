from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.dispatch import receiver

# Custom User model
class User(AbstractUser):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self) -> str:
        return self.email  # or self.username, based on your preference

# Profile model
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=200)
    comp_name = models.CharField(max_length=100, blank=True, null=True)
    bio = models.TextField(blank=True)
    image = models.ImageField(upload_to="profileImg", blank=True, null=True)
    verified = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f"{self.full_name} ({self.comp_name})"

# Signals to automatically create and save a profile when a user is created
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
