from rest_framework import serializers
from api_rest.models.Income import IncomeModel
from .Balance import BalanceSerializer
from api_rest.models.Balance import BalanceModel

class IncomeSerializer(serializers.ModelSerializer):
    balance_data = BalanceSerializer(source='balance', read_only=True)

    class Meta:
        model = IncomeModel
        fields = '__all__'
