#!/bin/bash
# Setup script for Nanda Portfolio - Node.js/Express version

echo "======================================"
echo "Nanda Portfolio - Express Setup"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Check if assets folder exists
if [ ! -d "assets" ]; then
    echo "❌ Assets folder not found in current directory"
    exit 1
fi

# Create public/assets directory
echo "📁 Creating public/assets directory..."
mkdir -p public/assets

# Copy assets
echo "📋 Copying assets to public folder..."
cp -r assets/* public/assets/ 2>/dev/null || cp assets/* public/assets/ 2>/dev/null

if [ -d "public/assets" ]; then
    echo "✅ Assets copied successfully"
else
    echo "⚠️  Could not copy assets - please do it manually"
fi

echo ""
echo "📦 Installing npm dependencies..."
npm install

echo ""
echo "======================================"
echo "✅ Setup Complete!"
echo "======================================"
echo ""
echo "To start the server, run:"
echo "  npm start          (production)"
echo "  npm run dev        (development with auto-reload)"
echo ""
echo "Then open: http://localhost:3000"
echo ""
