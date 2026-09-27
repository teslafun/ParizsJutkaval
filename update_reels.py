
import json
from pathlib import Path

FILE = Path("data/videos.json")

REELS = {
    "001": "https://www.facebook.com/reel/2095173488099029",
    "002": "https://www.facebook.com/reel/2137249670177772",
    "003": "https://www.facebook.com/reel/1324417502952644",
    "004": "https://www.facebook.com/reel/1916934712340936",
    "005": "https://www.facebook.com/reel/36049970434647802",
    "006": "https://www.facebook.com/reel/1502104838040821",
    "007": "https://www.facebook.com/reel/980800928251857",
    "008": "https://www.facebook.com/reel/1031775829521381",
}

with FILE.open("r", encoding="utf-8") as f:
    data = json.load(f)

updated = 0

for video in data["videos"]:
    video_id = video["id"]

    if video_id in REELS:
        video["facebook_url"] = REELS[video_id]
        updated += 1

FILE.write_text(
    json.dumps(data, ensure_ascii=False, indent=2) + "\n",
    encoding="utf-8"
)

print(f"Frissítve: {updated} videó")