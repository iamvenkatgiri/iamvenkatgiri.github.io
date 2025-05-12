#!/bin/bash

# Check if a directory is provided
if [ -z "$1" ]; then
    echo "Usage: ./convert-to-webp.sh <directory> [quality]"
    echo "Example: ./convert-to-webp.sh ./images 80"
    exit 1
fi

# Set quality (default to 80 if not provided)
QUALITY=${2:-80}

# Check if directory exists
if [ ! -d "$1" ]; then
    echo "Directory $1 does not exist"
    exit 1
fi

# Create output directory
OUTPUT_DIR="${1}/webp"
mkdir -p "$OUTPUT_DIR"

# Convert all images
echo "Converting images in $1 to WebP format (quality: $QUALITY)..."
echo "Output will be saved in $OUTPUT_DIR"

# Convert JPG/JPEG
for file in "$1"/*.{jpg,jpeg,JPG,JPEG}; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        name="${filename%.*}"
        echo "Converting $filename..."
        cwebp "$file" -q "$QUALITY" -o "$OUTPUT_DIR/${name}.webp"
    fi
done

# Convert PNG
for file in "$1"/*.{png,PNG}; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        name="${filename%.*}"
        echo "Converting $filename..."
        cwebp "$file" -q "$QUALITY" -o "$OUTPUT_DIR/${name}.webp"
    fi
done

echo "Conversion complete! Check the $OUTPUT_DIR directory for your WebP images." 