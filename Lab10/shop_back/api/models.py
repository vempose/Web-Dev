from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200, unique=True)

    class Meta:
        ordering = ["id"]
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True)
    count = models.PositiveIntegerField()
    is_active = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="products")

    class Meta:
        ordering = ["id"]
        verbose_name = "Product"
        verbose_name_plural = "Products"

    def __str__(self):
        return self.name
