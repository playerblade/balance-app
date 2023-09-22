from django.db import models
from .Balance import BalanceModel

class OutgoModel(models.Model):
    class Meta:
        db_table = "api_rest_outgomodel"

    balance = models.ForeignKey(BalanceModel, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10,decimal_places=2)
    items = models.CharField(max_length=500)
    description = models.CharField(max_length=500, null=True)

    def __str__(self):
        return self.name
