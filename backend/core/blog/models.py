from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField(max_length=350)
    img = models.ImageField(upload_to='images/blog/')
    created_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return self.title
