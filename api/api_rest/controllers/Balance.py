from api_rest.models.Balance import BalanceModel
from django.http import Http404

class BalanceController:
    def __init__(self, entity_name):
        self.entity_name = entity_name
        pass

    def substract_total(self, id, amount):
        try:
            balance = BalanceModel.objects.get(pk=id)
            balance.total-=amount
            balance.save()
        
        except BalanceModel.DoesNotExist:
            raise Http404(f"Balance with ID {id} does not exist.")
        
    def increase_total(self, id, amount):
        try:
            balance = BalanceModel.objects.get(pk=id)
            balance.total+=amount
            balance.save()
        except BalanceModel.DoesNotExist:
            raise Http404(f"Balance with ID {id} does not exist.")

