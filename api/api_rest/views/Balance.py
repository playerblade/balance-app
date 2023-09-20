from rest_framework import generics
from api_rest.models.Balance import BalanceModel
from api_rest.serializers.Balance import BalanceSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from api_rest.alert.Message import Message
from django.http import Http404
from rest_framework import status

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
        entity.delete()
        return Response(self.message.deleted(), status=status.HTTP_200_OK)
