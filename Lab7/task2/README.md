# OOP Product Hierarchy in Python

This project demonstrates basic Object-Oriented Programming (OOP) in Python using a real-world product catalog.

## Project Structure

- `models.py` — contains the class hierarchy
- `main.py` — creates objects and demonstrates how the classes work

## Classes

### `Product`
Base class for all products.

Attributes:
- `name`
- `price`
- `stock`

Methods:
- `is_available()` — checks whether the product is in stock
- `apply_discount(percent)` — applies a discount to the price
- `sell(quantity)` — reduces stock after selling items
- `get_description()` — returns a product description
- `__str__()` — returns a readable string representation

### `Book`
Child class of `Product`.

Additional attributes:
- `author`
- `genre`

Additional method:
- `start_reading()`

Overrides:
- `get_description()`

### `CompactDisk`
Child class of `Product`.

Additional attributes:
- `artist`
- `music_style`

Additional method:
- `start_playing()`

Overrides:
- `get_description()`

## How to Run

Make sure you have Python 3.7+ installed.

Run:

```bash
python main.py