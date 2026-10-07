from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
QA = ROOT / "qa"
SOURCE = ROOT.parent / "tmp" / "pdfs" / "company" / "page-07.jpg"
SERVICES = QA / "english-services-responsive.png"
ABOUT = QA / "english-about-team-responsive.png"
OUTPUT = QA / "english-full-content-comparison.jpg"


def normalized(path: Path, width: int = 720) -> Image.Image:
    image = Image.open(path).convert("RGB")
    height = round(image.height * width / image.width)
    return image.resize((width, height), Image.Resampling.LANCZOS)


images = [normalized(SOURCE), normalized(SERVICES), normalized(ABOUT)]
labels = ["SOURCE DECK - TEAM", "IMPLEMENTATION - SERVICES", "IMPLEMENTATION - TEAM"]
label_height = 64
gap = 24
board = Image.new(
    "RGB",
    (sum(image.width for image in images) + gap * 2, max(image.height for image in images) + label_height),
    "#eef1f4",
)
draw = ImageDraw.Draw(board)
font = ImageFont.load_default(size=22)
x = 0
for image, label in zip(images, labels):
    draw.text((x + 18, 20), label, fill="#173a60", font=font)
    board.paste(image, (x, label_height))
    x += image.width + gap

board.save(OUTPUT, quality=91, optimize=True)
print(OUTPUT)
