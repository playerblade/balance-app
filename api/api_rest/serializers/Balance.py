# api/serializers.py
from rest_framework import serializers
from api_rest.models.Balance import BalanceModel

class BalanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = BalanceModel
        fields = '__all__'
