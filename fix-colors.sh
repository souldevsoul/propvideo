#!/bin/bash

# Script to replace non-approved colors with approved style guide colors
# Approved: sky-, slate-, emerald-, gray-, zinc-, neutral-, red-, green-
# Replace: purple- -> sky-, blue-[0-9] -> sky-, cyan- -> sky-, indigo- -> sky-, rose- -> red-, pink- -> red-

echo "Replacing non-approved colors with style guide colors..."

# Replace purple with sky (primary color)
find app components -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' \
  -e 's/purple-50/sky-50/g' \
  -e 's/purple-100/sky-100/g' \
  -e 's/purple-200/sky-200/g' \
  -e 's/purple-300/sky-300/g' \
  -e 's/purple-400/sky-400/g' \
  -e 's/purple-500/sky-500/g' \
  -e 's/purple-600/sky-600/g' \
  -e 's/purple-700/sky-700/g' \
  -e 's/purple-800/sky-800/g' \
  -e 's/purple-900/sky-900/g' \
  {} \;

# Replace blue-XX with sky-XX (primary color)
find app components -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' \
  -e 's/\([^a-z]\)blue-50\([^0-9]\)/\1sky-50\2/g' \
  -e 's/\([^a-z]\)blue-100\([^0-9]\)/\1sky-100\2/g' \
  -e 's/\([^a-z]\)blue-200\([^0-9]\)/\1sky-200\2/g' \
  -e 's/\([^a-z]\)blue-300\([^0-9]\)/\1sky-300\2/g' \
  -e 's/\([^a-z]\)blue-400\([^0-9]\)/\1sky-400\2/g' \
  -e 's/\([^a-z]\)blue-500\([^0-9]\)/\1sky-500\2/g' \
  -e 's/\([^a-z]\)blue-600\([^0-9]\)/\1sky-600\2/g' \
  -e 's/\([^a-z]\)blue-700\([^0-9]\)/\1sky-700\2/g' \
  -e 's/\([^a-z]\)blue-800\([^0-9]\)/\1sky-800\2/g' \
  -e 's/\([^a-z]\)blue-900\([^0-9]\)/\1sky-900\2/g' \
  {} \;

# Replace cyan with sky
find app components -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' \
  -e 's/cyan-50/sky-50/g' \
  -e 's/cyan-100/sky-100/g' \
  -e 's/cyan-200/sky-200/g' \
  -e 's/cyan-300/sky-300/g' \
  -e 's/cyan-400/sky-400/g' \
  -e 's/cyan-500/sky-500/g' \
  -e 's/cyan-600/sky-600/g' \
  -e 's/cyan-700/sky-700/g' \
  -e 's/cyan-800/sky-800/g' \
  -e 's/cyan-900/sky-900/g' \
  {} \;

# Replace indigo with sky
find app components -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' \
  -e 's/indigo-50/sky-50/g' \
  -e 's/indigo-100/sky-100/g' \
  -e 's/indigo-200/sky-200/g' \
  -e 's/indigo-300/sky-300/g' \
  -e 's/indigo-400/sky-400/g' \
  -e 's/indigo-500/sky-500/g' \
  -e 's/indigo-600/sky-600/g' \
  -e 's/indigo-700/sky-700/g' \
  -e 's/indigo-800/sky-800/g' \
  -e 's/indigo-900/sky-900/g' \
  {} \;

# Replace rose with red
find app components -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' \
  -e 's/rose-50/red-50/g' \
  -e 's/rose-100/red-100/g' \
  -e 's/rose-200/red-200/g' \
  -e 's/rose-300/red-300/g' \
  -e 's/rose-400/red-400/g' \
  -e 's/rose-500/red-500/g' \
  -e 's/rose-600/red-600/g' \
  -e 's/rose-700/red-700/g' \
  -e 's/rose-800/red-800/g' \
  -e 's/rose-900/red-900/g' \
  {} \;

# Replace pink with red
find app components -type f \( -name "*.tsx" -o -name "*.ts" \) -exec sed -i '' \
  -e 's/pink-50/red-50/g' \
  -e 's/pink-100/red-100/g' \
  -e 's/pink-200/red-200/g' \
  -e 's/pink-300/red-300/g' \
  -e 's/pink-400/red-400/g' \
  -e 's/pink-500/red-500/g' \
  -e 's/pink-600/red-600/g' \
  -e 's/pink-700/red-700/g' \
  -e 's/pink-800/red-800/g' \
  -e 's/pink-900/red-900/g' \
  {} \;

echo "Color replacement complete!"
echo "Replaced: purple -> sky, blue -> sky, cyan -> sky, indigo -> sky, rose -> red, pink -> red"
