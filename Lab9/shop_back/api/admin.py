from django.contrib import admin

from .models import Category, Product


class ProductInline(admin.TabularInline):
    model = Product
    extra = 0
    fields = ("name", "price", "count", "is_active")
    show_change_link = True


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "products_count", "products_list")
    search_fields = ("name",)
    inlines = [ProductInline]

    def products_count(self, obj):
        return obj.products.count()

    products_count.short_description = "Products count"

    def products_list(self, obj):
        return ", ".join(product.name for product in obj.products.all()[:5])

    products_list.short_description = "Products"


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "category", "price", "count", "is_active")
    list_filter = ("is_active", "category")
    search_fields = ("name", "description", "category__name")
    list_select_related = ("category",)