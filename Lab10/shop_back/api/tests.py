from rest_framework import status
from rest_framework.test import APITestCase

from .models import Category, Product


class ProductAPITests(APITestCase):
    def setUp(self):
        self.category = Category.objects.create(name="Electronics")
        self.product = Product.objects.create(
            name="Phone",
            price="499.99",
            description="Smartphone",
            count=10,
            is_active=True,
            category=self.category,
        )

    def test_products_list_returns_all_products(self):
        response = self.client.get("/api/products/")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["name"], self.product.name)

    def test_product_create_returns_created_product(self):
        payload = {
            "name": "Laptop",
            "price": "1299.99",
            "description": "Workstation",
            "count": 5,
            "is_active": True,
            "category": self.category.id,
        }

        response = self.client.post("/api/products/", payload, format="json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Product.objects.count(), 2)
        self.assertEqual(response.data["name"], payload["name"])

    def test_product_update_and_delete(self):
        response = self.client.put(
            f"/api/products/{self.product.id}/",
            {
                "name": "Phone Pro",
                "price": "599.99",
                "description": "Updated smartphone",
                "count": 8,
                "is_active": True,
                "category": self.category.id,
            },
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.product.refresh_from_db()
        self.assertEqual(self.product.name, "Phone Pro")

        delete_response = self.client.delete(f"/api/products/{self.product.id}/")

        self.assertEqual(delete_response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Product.objects.filter(id=self.product.id).exists())


class CategoryAPITests(APITestCase):
    def setUp(self):
        self.category = Category.objects.create(name="Books")
        self.product = Product.objects.create(
            name="Novel",
            price="19.99",
            description="Paperback",
            count=12,
            is_active=True,
            category=self.category,
        )

    def test_category_crud_endpoints(self):
        list_response = self.client.get("/api/categories/")
        self.assertEqual(list_response.status_code, status.HTTP_200_OK)
        self.assertEqual(list_response.data[0]["name"], self.category.name)

        create_response = self.client.post("/api/categories/", {"name": "Games"}, format="json")
        self.assertEqual(create_response.status_code, status.HTTP_201_CREATED)

        update_response = self.client.put(
            f"/api/categories/{self.category.id}/",
            {"name": "Literature"},
            format="json",
        )
        self.assertEqual(update_response.status_code, status.HTTP_200_OK)
        self.category.refresh_from_db()
        self.assertEqual(self.category.name, "Literature")

        delete_response = self.client.delete(f"/api/categories/{self.category.id}/")
        self.assertEqual(delete_response.status_code, status.HTTP_204_NO_CONTENT)

    def test_category_products_endpoint(self):
        response = self.client.get(f"/api/categories/{self.category.id}/products/")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["name"], self.product.name)
