from __future__ import annotations

import json
from pathlib import Path

from PIL import Image
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "content" / "source"
ASSET_DIR = ROOT / "public" / "assets" / "extracted"

PDFS = [
    (
        "CAF_Management_Presentation_EN",
        Path(r"C:\Users\sohai\Downloads\CAF_Management_Presentation_EN.pptx.pdf"),
    ),
    (
        "CAF_MANAGEMENT_ENGL_2",
        Path(r"C:\Users\sohai\Downloads\CAF MANAGEMENT ENGL_ (2).pdf"),
    ),
]


def extract_pdf_text(label: str, path: Path) -> dict:
    reader = PdfReader(str(path))
    pages = []
    chunks = []
    for number, page in enumerate(reader.pages, start=1):
        text = (page.extract_text() or "").strip()
        pages.append({"page": number, "text": text})
        chunks.append(f"# Page {number}\n\n{text}\n")

    (SOURCE_DIR / f"{label}.txt").write_text(
        "\n".join(chunks), encoding="utf-8"
    )
    return {
        "label": label,
        "source_path": str(path),
        "page_count": len(reader.pages),
        "pages": pages,
    }


def build_asset_manifest() -> list[dict]:
    records = []
    for path in sorted(ASSET_DIR.iterdir()):
        if not path.is_file():
            continue
        record = {
            "filename": path.name,
            "relative_path": f"/assets/extracted/{path.name}",
            "bytes": path.stat().st_size,
        }
        try:
            with Image.open(path) as image:
                record.update(
                    {
                        "width": image.width,
                        "height": image.height,
                        "format": image.format,
                        "mode": image.mode,
                    }
                )
        except Exception as exc:  # JP2 support varies across Pillow builds.
            record["inspection_error"] = str(exc)
        records.append(record)
    return records


def main() -> None:
    SOURCE_DIR.mkdir(parents=True, exist_ok=True)
    documents = [extract_pdf_text(label, path) for label, path in PDFS]
    assets = build_asset_manifest()
    payload = {
        "documents": documents,
        "assets": assets,
        "notes": {
            "source_policy": "Facts come from the source PDFs; generated campaign imagery is stored separately.",
            "title_conflict": "Some team titles differ between the two decks and should be confirmed before publication.",
        },
    }
    (SOURCE_DIR / "source-library.json").write_text(
        json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(
        json.dumps(
            {
                "documents": [
                    {"label": d["label"], "pages": d["page_count"]}
                    for d in documents
                ],
                "assets": len(assets),
                "output": str(SOURCE_DIR),
            },
            indent=2,
        )
    )


if __name__ == "__main__":
    main()
