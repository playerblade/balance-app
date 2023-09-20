from django.db import models

class IncomeModel(models.Model):
    amout = models.CharField(max_length=1000)
    description = models.CharField(max_length=500, null=True)

    def __str__(self):
        return self.name
