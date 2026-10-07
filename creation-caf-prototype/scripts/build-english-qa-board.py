from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
QA = ROOT / "qa"
SOURCE = QA / "implementation-desktop.png"
IMPLEMENTATION = QA / "english-home-desktop.png"
OUTPUT = QA / "english-comparison-board.jpg"


def normalized(path: Path, width: int = 1120) -> Image.Image:
    image = Image.open(path).convert("RGB")
    height = round(image.height * width / image.width)
    return image.resize((width, height), Image.Resampling.LANCZOS)


source = normalized(SOURCE)
implementation = normalized(IMPLEMENTATION)
label_height = 70
gap = 34
board = Image.new(
    "RGB",
    (source.width + implementation.width + gap, max(source.height, implementation.height) + label_height),
    "#eef1f4",
)
draw = ImageDraw.Draw(board)
font = ImageFont.load_default(size=24)
draw.text((24, 20), "SOURCE DESIGN SYSTEM — FRENCH LANDING", fill="#173a60", font=font)
draw.text((source.width + gap + 24, 20), "IMPLEMENTATION — ENGLISH SEO HOME", fill="#173a60", font=font)
board.paste(source, (0, label_height))
board.paste(implementation, (source.width + gap, label_height))
board.save(OUTPUT, quality=91, optimize=True)
print(OUTPUT)
