#!/bin/sh

# Panda CLI Installation Script
# This is a simulation of the installation process

set -e

RESET='\033[0m'
BOLD='\033[1m'
GREEN='\033[32m'
GRAY='\033[90m'

echo ""
echo "${BOLD}🐼 Panda CLI Installer${RESET}"
echo "${GRAY}--------------------------------${RESET}"
echo ""

echo "🔍 Checking system compatibility..."
sleep 0.5

echo "📦 Downloading latest binary..."
sleep 0.8

echo "📂 Extracting to /usr/local/bin/panda..."
sleep 0.5

echo "⚙️  Configuring environment variables..."
sleep 0.3

echo ""
echo "${GREEN}✅ Panda CLI has been installed successfully!${RESET}"
echo ""
echo "Get started by running:"
echo "  ${BOLD}panda --help${RESET}"
echo ""
