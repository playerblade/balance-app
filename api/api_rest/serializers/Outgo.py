from rest_framework import serializers
from api_rest.models.Outgo import OutgoModel
from .Balance import BalanceSerializer

class OutgoSerializer(serializers.ModelSerializer):
    balance_data = BalanceSerializer(source='balance', read_only=True)
    class Meta:
        model = OutgoModel
        fields = '__all__'
