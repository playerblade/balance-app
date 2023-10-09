from rest_framework import generics
from api_rest.models.Outgo import OutgoModel
from api_rest.serializers.Outgo import OutgoSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from api_rest.alert.Message import Message
from django.http import Http404
from rest_framework import status
from api_rest.controllers.Balance import BalanceController

class OutgoApiView(APIView):


    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.message = Message("Outgo")

    def get(self, request, pk=None, format=None,  *args, **kwargs):
        entity = OutgoModel.objects.all()
        serializer = OutgoSerializer(entity, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        entity = request.data
        balance_id = entity.get('balance')
        outgo_amount = entity.get('amount')
        BalanceController.substract_total(self=self,id=balance_id,amount=outgo_amount)
        serializer = OutgoSerializer(data=entity, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(self.message.created(), status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OutgoDetailView(APIView):
    """
       Retrieve, update or delete a user instance.
    """

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.message = Message("Outgo")

    def get_object(self, pk):
        try:
            return OutgoModel.objects.get(pk=pk)
        except OutgoModel.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        entity = self.get_object(pk)
        serializer = OutgoSerializer(entity)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        entity = self.get_object(pk)
        updated_data = request.data
        serializer = OutgoSerializer(entity, data=updated_data)
        if serializer.is_valid():
            serializer.save()
            return Response(self.message.updated(), status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        entity = self.get_object(pk)
        entity.delete()
        return Response(self.message.deleted(), status=status.HTTP_200_OK)
