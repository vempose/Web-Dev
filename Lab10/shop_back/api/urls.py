from django.urls import path

from .views import (
    CategoryDetailAPIView,
    CategoryListAPIView,
    CategoryProductsAPIView,
    ProductDetailAPIView,
    ProductListAPIView,
)

# helper function
def resolve_view(view):
    return view.as_view() if hasattr(view, "as_view") else view


urlpatterns = [
    path("products/", resolve_view(ProductListAPIView), name="product-list"),
    path("products/<int:product_id>/", resolve_view(ProductDetailAPIView), name="product-detail"),
    path("categories/", resolve_view(CategoryListAPIView), name="category-list"),
    path("categories/<int:category_id>/", resolve_view(CategoryDetailAPIView), name="category-detail"),
    path("categories/<int:category_id>/products/", resolve_view(CategoryProductsAPIView), name="category-products"),
]
