#!/usr/bin/env bash
set -e

REPO="vatistasdimitris01/pandacli"
BIN="pandacli"

OS="$(uname | tr '[:upper:]' '[:lower:]')"
ARCH="$(uname -m)"

case "$OS" in
  darwin) OS="darwin" ;;
  linux) OS="linux" ;;
  *) echo "Unsupported OS: $OS" && exit 1 ;;
esac

case "$ARCH" in
  x86_64) ARCH="amd64" ;;
  arm64|aarch64) ARCH="arm64" ;;
  *) echo "Unsupported ARCH: $ARCH" && exit 1 ;;
esac

FILE="$BIN-$OS-$ARCH"
URL="https://github.com/$REPO/releases/latest/download/$FILE"

echo "Downloading $FILE..."
curl -L "$URL" -o /tmp/$BIN
chmod +x /tmp/$BIN
sudo mv /tmp/$BIN /usr/local/bin/$BIN

echo "Installed!"
echo "Run: pandacli --help"
