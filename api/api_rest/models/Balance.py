from django.db import models

class BalanceModel(models.Model):
    total = models.CharField(max_length=1000)

    def __str__(self):
        return self.name
