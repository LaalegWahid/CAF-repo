from pathlib import Path

from PIL import Image


ASSET_DIR = Path(__file__).resolve().parents[1] / "public" / "assets" / "generated"

for source in sorted(ASSET_DIR.glob("*.png")):
    destination = source.with_suffix(".webp")
    with Image.open(source) as image:
        image.save(destination, "WEBP", quality=84, method=6)
    print(f"{source.name} -> {destination.name} ({destination.stat().st_size} bytes)")
