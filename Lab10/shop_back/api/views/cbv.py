from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from ..models import Category, Product
from ..serializers import CategorySerializer, ProductSerializer


class ProductListAPIView(APIView):
    def get(self, request):
        serializer = ProductSerializer(Product.objects.all(), many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductDetailAPIView(APIView):
    def get_object(self, product_id):
        return get_object_or_404(Product, pk=product_id)

    def get(self, request, product_id):
        serializer = ProductSerializer(self.get_object(product_id))
        return Response(serializer.data)

    def put(self, request, product_id):
        product = self.get_object(product_id)
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, product_id):
        product = self.get_object(product_id)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CategoryListAPIView(APIView):
    def get(self, request):
        serializer = CategorySerializer(Category.objects.all(), many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CategoryDetailAPIView(APIView):
    def get_object(self, category_id):
        return get_object_or_404(Category, pk=category_id)

    def get(self, request, category_id):
        serializer = CategorySerializer(self.get_object(category_id))
        return Response(serializer.data)

    def put(self, request, category_id):
        category = self.get_object(category_id)
        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, category_id):
        category = self.get_object(category_id)
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CategoryProductsAPIView(APIView):
    def get_object(self, category_id):
        return get_object_or_404(Category, pk=category_id)

    def get(self, request, category_id):
        serializer = ProductSerializer(self.get_object(category_id).products.all(), many=True)
        return Response(serializer.data)
