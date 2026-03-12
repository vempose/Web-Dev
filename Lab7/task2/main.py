from models import Book, CompactDisk


def main() -> None:
    products = [
        Book("War and Peace", 25.99, 5, "Leo Tolstoy", "Russian classic"),
        Book("Crime and Punishment", 18.50, 3, "Fyodor Dostoevsky", "Russian classic"),
        CompactDisk("The Eminem Show", 14.99, 4, "Eminem", "Hip-hop"),
        CompactDisk("Recovery", 12.99, 2, "Eminem", "Hip-hop"),
    ]

    print("## Product List ##")
    for product in products:
        print(product)
    print()

    print("## Descriptions (Polymorphism) ##")
    for product in products:
        print(product.get_description())
    print()

    print("## Availability ##")
    for product in products:
        print(f"{product.name}: {'In stock' if product.is_available() else 'Out of stock'}")
    print()

    print("## Child Methods ##")
    for product in products:
        if isinstance(product, Book):
            print(product.start_reading())
        elif isinstance(product, CompactDisk):
            print(product.start_playing())
    print()

    print("## Selling and Discount ##")
    first_product = products[0]
    print("Before:", first_product)
    first_product.sell(1)
    first_product.apply_discount(10)
    print("After: ", first_product)


if __name__ == "__main__":
    main()