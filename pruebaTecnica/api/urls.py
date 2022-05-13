from django.urls import path
from .views import VistasEmpresas

urlpatterns = [
    path('empresas/', VistasEmpresas.as_view(), name='empress_list'),
    path('empresas/<int:id>', VistasEmpresas.as_view(), name='empress_process')
]