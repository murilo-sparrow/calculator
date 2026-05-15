#!/usr/bin/env bash

set -euo pipefail

OLD="./dist/assets/node_modules"
NEW="./dist/assets/_npm"

[ ! -d "$OLD" ] && echo "No $OLD found, nothing to do." && exit 0

mv "$OLD" "$NEW"
echo "Renamed $OLD → $NEW"

[[ "$OSTYPE" == "darwin"* ]] && I=(-i "") || I=(-i)
find dist -type f \( -name "*.js" -o -name "*.html" -o -name "*.json" -o -name "*.css" \) -exec sed "${I[@]}" \
        -e 's|/assets/node_modules/|/assets/_npm/|g' \
        {} +

echo "Done."
