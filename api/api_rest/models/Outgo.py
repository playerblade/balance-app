from django.db import models

class OutgoModel(models.Model):
    amout = models.CharField(max_length=500)
    products = models.CharField(max_length=500)
    description = models.CharField(max_length=500, null=True)

    def __str__(self):
        return self.name
