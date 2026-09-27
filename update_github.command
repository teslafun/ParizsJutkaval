#!/bin/bash

# ============================================================
# PÁRIZS JUTKÁVAL – GitHub automatic update
# ============================================================

PROJECT="$HOME/Documents/Python/ParizsJutkaval"
BRANCH="main"

cd "$PROJECT" || {
    echo "❌ Nem találom a projekt mappát:"
    echo "$PROJECT"
    read -p "Nyomj Entert a kilépéshez..."
    exit 1
}

echo ""
echo "========================================"
echo " PÁRIZS JUTKÁVAL – GITHUB UPDATE"
echo "========================================"
echo ""
echo "Projekt: $PROJECT"
echo ""

echo "[1/4] Git állapot ellenőrzése..."
git status --short

if [ -z "$(git status --porcelain)" ]; then
    echo ""
    echo "✓ Nincs új módosítás."
    echo "✓ GitHub már naprakész."
    echo ""
    read -p "Nyomj Entert a bezáráshoz..."
    exit 0
fi

echo ""
echo "[2/4] Módosítások hozzáadása..."
git add .

if [ $? -ne 0 ]; then
    echo "❌ A git add sikertelen."
    read -p "Nyomj Entert a bezáráshoz..."
    exit 1
fi

echo ""
echo "[3/4] Commit készítése..."

DATE=$(date "+%Y-%m-%d %H:%M")
git commit -m "Update website $DATE"

if [ $? -ne 0 ]; then
    echo "❌ A commit sikertelen."
    read -p "Nyomj Entert a bezáráshoz..."
    exit 1
fi

echo ""
echo "[4/4] Feltöltés GitHubra..."
git push origin "$BRANCH"

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ A GitHub feltöltés sikertelen."
    echo "Ellenőrizd az internetkapcsolatot és a GitHub hitelesítést."
    read -p "Nyomj Entert a bezáráshoz..."
    exit 1
fi

echo ""
echo "========================================"
echo " ✓ GITHUB FRISSÍTVE"
echo "========================================"
echo ""
echo "A GitHub Pages automatikusan újraépül."
echo "Néhány pillanat múlva az oldal frissül."
echo ""

read -p "Nyomj Entert a bezáráshoz..."
