from django.http import JsonResponse
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from .models import Empresas
import json


# Create your views here.

class VistasEmpresas(View):
    
    #caragr las vistas de las empresas
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    
    def get(self, request, id=0):
        if(id>0):
            empresas = list(Empresas.objects.filter(id=id).values())
            if(len(empresas)>0):
                empress = empresas[0]
                datos = {'message':"Exitoso",'company':empress}
            else:
                datos = {'message':"empresa no encontrada"}
            return JsonResponse(datos)
        else:
            empresas = list(Empresas.objects.values())
            if len(empresas)>0:
                datos = {'message':"Exitoso",'empresas':empresas}
            else:
                datos = {'message':"empresas no encontradas"}
            return JsonResponse(datos)
    

    #capturar los datos del cliente
    def post(sel, request):
        #datos del body
        pjd = json.loads(request.body)

        Empresas.objects.create(name=pjd['name'],address=pjd['address'],NIT=pjd['NIT'],phone=pjd['phone'])
        datos = {'message':"Exitoso"}
        return JsonResponse(datos)

    #modificar los datos
    def put(self, request, id):
        pjd = json.loads(request.body)
        empresas = list(Empresas.objects.filter(id=id).values())
        if len(empresas) > 0:
            empress = Empresas.objects.get(id=id)
            empress.name = pjd['name']
            empress.address = pjd['address']
            empress.NIT = pjd['NIT']
            empress.phone = pjd['phone']
            empress.save()
            datos = {'message': "Exitoso"}
        else:
            datos = {'message': "empresa no encontrada"}
        return JsonResponse(datos)



    #eliminar datos
    def delete(self,reuqest, id):
        empresas = list(Empresas.objects.filter(id=id).values())
        if len(empresas)>0:
            Empresas.objects.filter(id=id).delete()
            datos = {'message':"Exitoso"}
        else:
            datos = {'message':"Empresa no encontrada..."}
        return JsonResponse(datos)
    
