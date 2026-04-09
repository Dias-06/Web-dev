# from rest_framework.response import Response
# from rest_framework import status
# from rest_framework.mixins import (
#     ListModelMixin, 
#     CreateModelMixin, 
#     RetrieveModelMixin, 
#     UpdateModelMixin, 
#     DestroyModelMixin
# )
# from rest_framework.generics import GenericAPIView
# from ..models import Product
# from ..serializers import ProductSerializer


# class ProductListAPIView(ListModelMixin, CreateModelMixin, GenericAPIView):

#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer
    
#     def get(self, request):
    
#         return self.list()
    
#     def post(self, request):
      
#         return self.create()


# class ProductDetailAPIView(RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin, GenericAPIView):
 
#     queryset = Product.objects.all()
#     serializer_class = ProductSerializer
#     lookup_url_kwarg = 'product_id'  
    
#     def get(self, request, product_id):
     
#         return self.retrieve(request, product_id)
    
#     def put(self, request, product_id):
       
#         return self.update(request, product_id)
    
#     def delete(self, request, product_id):
       
#         return self.destroy(request, product_id)
from rest_framework.response import Response
from rest_framework import status
from rest_framework.mixins import (
    ListModelMixin, 
    CreateModelMixin, 
    RetrieveModelMixin, 
    UpdateModelMixin, 
    DestroyModelMixin
)
from rest_framework.generics import GenericAPIView
from ..models import Product
from ..serializers import ProductSerializer


class ProductListAPIView(ListModelMixin, CreateModelMixin, GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    def get(self, request):
        return self.list(request) 
    
    def post(self, request):
        return self.create(request)  


class ProductDetailAPIView(RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin, GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'
    
    def get(self, request, product_id):
        return self.retrieve(request, product_id) 
    
    def put(self, request, product_id):
        return self.update(request, product_id) 
    
    def delete(self, request, product_id):
        return self.destroy(request, product_id)  