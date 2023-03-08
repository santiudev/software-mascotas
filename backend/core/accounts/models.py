from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager


## Manejador del Modelo de Usuario para modificar el evento create
## si no hay email lanza un error, y tambien crea al usuario con contraseña
## pero no permite que se muestre ene el serializer
class CustomAccountManager(BaseUserManager):
    def create_user(self, email, name, password, **other_fields):
        if not email:
            raise ValueError(_('You must provide an email address'))
        email = self.normalize_email(email)
        user = self.model(email=email, name=name)
        user.set_password(password)
        user.save()
        return user
    
    def create_superuser(self, email, user_name, first_name, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError('Superuser must be assigned to is_staff=True.')
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')
        return self.create_user(email, user_name, first_name, password, **other_fields)

## Modelo Usuario, Creado apartir del modelo "AbstractBaseUser"
## El modelo define los campos del usuario y el manageador del modelo
class User(AbstractBaseUser):
    email       = models.EmailField(_('email address'), unique=True)
    name   = models.CharField(max_length=30)
    age = models.CharField(max_length=30)
    phone  = models.DateTimeField(default=timezone.now)
    bio         = models.TextField(_('bio'), max_length=256, blank=True)
    image       = models.ImageField(null=True, blank=True, default='/pic.jpg')
    is_staff    = models.BooleanField(default=False)
    is_active   = models.BooleanField(default=True)
    
    objects     = CustomAccountManager()
    USERNAME_FIELD = 'email'
