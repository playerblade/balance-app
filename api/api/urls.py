"""
URL configuration for api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api_rest.views.Balance import *
from api_rest.views.Income import *
from api_rest.views.Outgo import *

urlpatterns = [
    path('admin/', admin.site.urls),

    # Balance model
    path('api/balance/', BalanceApiView.as_view(), name='balance-api-view'),
    path('api/balance/<int:pk>/', BalanceDetailView.as_view(), name='balance-detail-view'),
    path('api/balance/update_date/<int:balance_id>/', BalanceByUpdateDateView.as_view(), name='balance-by-update-date'),
    path('api/balance/last/', BalanceLastDetailView.as_view(), name='balance-last-detail-view'),

    path('api/income/', IncomeApiView.as_view(), name='income-api-view'),
    path('api/income/<int:pk>/', IncomeDetailView.as_view(), name='income-detail-view'),
    path('api/income/last/', IncomeLastDetailView.as_view(), name='income-last-detail-view'),

    path('api/outgo/', OutgoApiView.as_view(), name='outgo-api-view'),
    path('api/outgo/<int:pk>/', OutgoDetailView.as_view(), name='outgo-detail-view'),
    path('api/outgo/last/', OutgoLastDetailView.as_view(), name='outgo-last-detail-view'),
]

