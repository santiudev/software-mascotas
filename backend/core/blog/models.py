from django.db import models
from PIL import Image
import io
from django.core.files.base import ContentFile
from ckeditor.fields import RichTextField


class Post(models.Model):
    title = models.CharField(max_length=50)
    content = RichTextField()
    img = models.ImageField(upload_to='images')
    created_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if self.img:
            # abre la imagen
            img = Image.open(self.img)
            # crea un buffer de memoria
            buffer = io.BytesIO()
            # guarda la imagen en el buffer con una calidad del 80%
            img.save(buffer, format='WEBP', quality=80)
            # guarda los datos de la imagen en una variable de bytes
            image_data = buffer.getvalue()
            # sobrescribe el archivo de imagen original con la imagen comprimida
            self.img.save(self.img.name.split('.')[0] + '.webp', ContentFile(image_data), save=False)
        super().save(*args, **kwargs)