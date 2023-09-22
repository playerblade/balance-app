from django.db import models

class BalanceModel(models.Model):
    class Meta:
        db_table = "api_rest_balancemodel"
    total = models.DecimalField(max_digits=10,decimal_places=2)
    currency = models.CharField(max_length=20, null=True)

    def __str__(self):
        return self.name
