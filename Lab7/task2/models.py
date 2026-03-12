class Product:
    def __init__(self, name: str, price: float, stock: int) -> None:
        if price < 0:
            raise ValueError("Price cannot be negative.")
        if stock < 0:
            raise ValueError("Stock cannot be negative.")

        self.name = name
        self.price = price
        self.stock = stock

    def is_available(self) -> bool:
        return self.stock > 0

    def apply_discount(self, percent: float) -> None:
        if not 0 <= percent <= 100:
            raise ValueError("Discount percent must be between 0 and 100.")
        self.price *= (1 - percent / 100)

    def sell(self, quantity: int = 1) -> None:
        if quantity <= 0:
            raise ValueError("Quantity must be positive.")
        if quantity > self.stock:
            raise ValueError(f"Not enough stock for '{self.name}'.")
        self.stock -= quantity

    def get_description(self) -> str:
        return f"{self.name} costs ${self.price:.2f}."

    def __str__(self) -> str:
        return f"{self.__class__.__name__}(name='{self.name}', price=${self.price:.2f}, stock={self.stock})"


class Book(Product):
    def __init__(
        self,
        name: str,
        price: float,
        stock: int,
        author: str,
        genre: str,
    ) -> None:
        super().__init__(name, price, stock)
        self.author = author
        self.genre = genre

    def start_reading(self) -> str:
        return f"You open '{self.name}' by {self.author} and begin reading."

    def get_description(self) -> str:
        return f"Book: '{self.name}' by {self.author} ({self.genre}) — ${self.price:.2f}."


class CompactDisk(Product):
    def __init__(
        self,
        name: str,
        price: float,
        stock: int,
        artist: str,
        music_style: str,
    ) -> None:
        super().__init__(name, price, stock)
        self.artist = artist
        self.music_style = music_style

    def start_playing(self) -> str:
        return f"Now playing a(n) '{self.name}' by {self.artist}."

    def get_description(self) -> str:
        return f"CD: '{self.name}' by {self.artist} ({self.music_style}) — ${self.price:.2f}."