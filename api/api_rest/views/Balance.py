from rest_framework import generics
from api_rest.models.Balance import BalanceModel
from api_rest.serializers.Balance import BalanceSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from api_rest.alert.Message import Message
from django.http import Http404
from rest_framework import status
from datetime import datetime
from django.utils import timezone


class BalanceApiView(APIView):


    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.message = Message("Balance")

    def get(self, request, pk=None, format=None,  *args, **kwargs):
        entity = BalanceModel.objects.all()
        serializer = BalanceSerializer(entity, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        entity = request.data
        serializer = BalanceSerializer(data=entity)
        if serializer.is_valid():
            serializer.save()
            return Response(self.message.created(), status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BalanceDetailView(APIView):
    """
       Retrieve, update or delete a user instance.
    """

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.message = Message("Balance")

    def get_object(self, pk):
        try:
            return BalanceModel.objects.get(pk=pk)
        except BalanceModel.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        entity = self.get_object(pk)
        serializer = BalanceSerializer(entity)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        entity = self.get_object(pk)
        updated_data = request.data
        serializer = BalanceSerializer(entity, data=updated_data)
        if serializer.is_valid():
            serializer.save()
            return Response(self.message.updated(), status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        entity = self.get_object(pk)
        entity.deleted_at = timezone.now()
        entity.delete()
        return Response(self.message.deleted(), status=status.HTTP_200_OK)

class BalanceByUpdateDateView(APIView):

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.message = Message("Balance")

    def get(self, request, balance_id, format=None):
        try:
            # Query the database to get the specific BalanceModel record based on balance_id
            balance = BalanceModel.objects.get(pk=balance_id)
            
            # Retrieve the created_at and updated_at timestamps
            created_at = balance.created_at
            updated_at = balance.updated_at
            
            # Serialize the timestamps
            data = {
                'balance_id': balance_id,
                'created_at': created_at,
                'updated_at': updated_at,
            }
            
            return Response(data)
        except BalanceModel.DoesNotExist:
            raise Http404
        
class BalanceLastDetailView(APIView):
    """
    Retrieve the last BalanceModel instance.
    """

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.message = Message("Income")

    def get(self, request, pk=None, format=None, *args, **kwargs):
        try:
            entity = BalanceModel.objects.latest('id')
            serializer = BalanceSerializer(entity, context={'request': request})

            return Response(serializer.data, status=status.HTTP_200_OK)
        except BalanceModel.DoesNotExist:
            raise Http404("No IncomeModel instances found.")