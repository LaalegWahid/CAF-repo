from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "assets" / "extracted" / "deck1-p01-01.jpg"
OUTPUT_DIR = ROOT / "public" / "assets" / "brand"

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

with Image.open(SOURCE) as source:
    # The source contains a separate group-company line below the primary mark.
    # Crop only the symbol, wordmark, and service descriptor for web navigation.
    cropped = source.crop((58, 35, 1152, 800))
    cropped.save(OUTPUT_DIR / "caf-primary-mark.png", optimize=True)
    cropped.save(OUTPUT_DIR / "caf-primary-mark.webp", "WEBP", quality=90, method=6)

print(OUTPUT_DIR / "caf-primary-mark.webp")
