from django.core.management.base import BaseCommand

from api.models import Category, Product


class Command(BaseCommand):
    help = "Create 4 categories and 20 mock products"

    def handle(self, *args, **options):
        categories_data = [
            "Music",
            "Books",
            "Games",
            "Accessories",
        ]

        categories = {}
        for category_name in categories_data:
            category, _ = Category.objects.get_or_create(name=category_name)
            categories[category_name] = category

        products_data = [
            {
                "name": "Electric Guitar",
                "price": "799.99",
                "description": "Six-string electric guitar for rock and blues.",
                "count": 5,
                "is_active": True,
                "category": categories["Music"],
            },
            {
                "name": "Acoustic Guitar",
                "price": "499.99",
                "description": "Warm sounding acoustic guitar.",
                "count": 7,
                "is_active": True,
                "category": categories["Music"],
            },
            {
                "name": "Digital Piano",
                "price": "999.99",
                "description": "88-key digital piano for beginners and pros.",
                "count": 3,
                "is_active": True,
                "category": categories["Music"],
            },
            {
                "name": "Studio Headphones",
                "price": "199.99",
                "description": "Closed-back headphones for studio monitoring.",
                "count": 12,
                "is_active": True,
                "category": categories["Music"],
            },
            {
                "name": "USB Microphone",
                "price": "149.99",
                "description": "Microphone for podcasting and home recording.",
                "count": 10,
                "is_active": True,
                "category": categories["Music"],
            },
            {
                "name": "Fantasy Novel",
                "price": "24.99",
                "description": "Epic fantasy story with dragons and magic.",
                "count": 20,
                "is_active": True,
                "category": categories["Books"],
            },
            {
                "name": "Science Fiction Book",
                "price": "19.99",
                "description": "A journey through space and time.",
                "count": 15,
                "is_active": True,
                "category": categories["Books"],
            },
            {
                "name": "Python Programming Guide",
                "price": "34.99",
                "description": "Learn Python from basics to advanced concepts.",
                "count": 8,
                "is_active": True,
                "category": categories["Books"],
            },
            {
                "name": "History Encyclopedia",
                "price": "39.99",
                "description": "Illustrated encyclopedia of world history.",
                "count": 6,
                "is_active": True,
                "category": categories["Books"],
            },
            {
                "name": "Mystery Detective Book",
                "price": "17.99",
                "description": "A suspenseful detective story.",
                "count": 14,
                "is_active": True,
                "category": categories["Books"],
            },
            {
                "name": "Chess Set",
                "price": "29.99",
                "description": "Classic wooden chess set.",
                "count": 9,
                "is_active": True,
                "category": categories["Games"],
            },
            {
                "name": "Gaming Mouse",
                "price": "59.99",
                "description": "Ergonomic mouse with RGB lighting.",
                "count": 18,
                "is_active": True,
                "category": categories["Games"],
            },
            {
                "name": "Mechanical Keyboard",
                "price": "89.99",
                "description": "Gaming keyboard with tactile switches.",
                "count": 11,
                "is_active": True,
                "category": categories["Games"],
            },
            {
                "name": "Console Controller",
                "price": "69.99",
                "description": "Wireless controller for console gaming.",
                "count": 13,
                "is_active": True,
                "category": categories["Games"],
            },
            {
                "name": "Board Game Strategy Pack",
                "price": "44.99",
                "description": "Strategy board game for family evenings.",
                "count": 7,
                "is_active": True,
                "category": categories["Games"],
            },
            {
                "name": "Vinyl Record Sleeve Pack",
                "price": "12.99",
                "description": "Protective sleeves for vinyl records.",
                "count": 25,
                "is_active": True,
                "category": categories["Accessories"],
            },
            {
                "name": "Bookmark Set",
                "price": "7.99",
                "description": "Colorful bookmark collection for readers.",
                "count": 30,
                "is_active": True,
                "category": categories["Accessories"],
            },
            {
                "name": "Game Storage Case",
                "price": "18.99",
                "description": "Storage case for game discs and cartridges.",
                "count": 16,
                "is_active": True,
                "category": categories["Accessories"],
            },
            {
                "name": "Sheet Music Stand",
                "price": "27.99",
                "description": "Foldable stand for sheet music and notes.",
                "count": 10,
                "is_active": True,
                "category": categories["Accessories"],
            },
            {
                "name": "Reading Lamp",
                "price": "22.99",
                "description": "Clip-on lamp for comfortable night reading.",
                "count": 19,
                "is_active": True,
                "category": categories["Accessories"],
            },
        ]

        created_products = 0
        for product_data in products_data:
            _, created = Product.objects.get_or_create(
                name=product_data["name"],
                defaults=product_data,
            )
            if created:
                created_products += 1

        self.stdout.write(self.style.SUCCESS("Mock data command completed successfully."))
        self.stdout.write(self.style.SUCCESS(f"Categories available: {Category.objects.count()}"))
        self.stdout.write(self.style.SUCCESS(f"Products created now: {created_products}"))
        self.stdout.write(self.style.SUCCESS(f"Total products in database: {Product.objects.count()}"))