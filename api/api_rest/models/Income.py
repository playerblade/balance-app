from django.db import models
from .Balance import BalanceModel

class IncomeModel(models.Model):
    class Meta:
        db_table = "api_rest_incomemodel"

    balance = models.ForeignKey(BalanceModel, on_delete=models.CASCADE, null=True)
    amount = models.DecimalField(max_digits=10,decimal_places=2)
    description = models.CharField(max_length=500, null=True)

    def __str__(self):
        return self.name
