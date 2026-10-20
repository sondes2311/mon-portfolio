# Script PowerShell pour copier vos images et vidéos dans le portfolio
# Utilisation : .\copy-images.ps1

Write-Host "=== Script de copie de médias pour le portfolio de Sondes Affes ===" -ForegroundColor Cyan
Write-Host ""

$imagesDir = "src\assets\images"
$videosDir = "src\assets\videos"

$requiredImages = @(
    "sondes-profile.jpg",
    "finlogik.png", 
    "webvue-erp.jpg",
    "sifast-ecommerce.jpg",
    "porteflio.PNG",
    "mediflow.png",
    "shopflow.png", 
    "maisonhs.png",
    "systeme-hospitalier.png",
    "eventPlanner.png"
)

$requiredVideos = @(
    "webvue-demo.mp4",
    "pfesifast.webm"
)

Write-Host "Images requises :" -ForegroundColor Yellow
foreach ($img in $requiredImages) {
    Write-Host "  - $img" -ForegroundColor White
}
Write-Host ""

Write-Host "Vidéos optionnelles :" -ForegroundColor Yellow
foreach ($vid in $requiredVideos) {
    Write-Host "  - $vid" -ForegroundColor White
}
Write-Host ""

Write-Host "Instructions :" -ForegroundColor Green
Write-Host "1. Placez vos fichiers dans le dossier courant avec les noms exacts ci-dessus"
Write-Host "2. Exécutez ce script pour les copier automatiquement"
Write-Host "3. Ou copiez manuellement dans : $imagesDir et $videosDir"
Write-Host ""

# Créer les dossiers de destination
foreach ($dir in @($imagesDir, $videosDir)) {
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        Write-Host "Dossier créé : $dir" -ForegroundColor Green
    }
}

# Copier les images
$copiedImages = 0
Write-Host "=== IMAGES ===" -ForegroundColor Cyan
foreach ($img in $requiredImages) {
    if (Test-Path $img) {
        Copy-Item $img -Destination "$imagesDir\$img" -Force
        Write-Host "✓ Copié : $img" -ForegroundColor Green
        $copiedImages++
    } else {
        Write-Host "✗ Non trouvé : $img" -ForegroundColor Red
    }
}

# Copier les vidéos
$copiedVideos = 0
Write-Host ""
Write-Host "=== VIDÉOS ===" -ForegroundColor Cyan
foreach ($vid in $requiredVideos) {
    if (Test-Path $vid) {
        Copy-Item $vid -Destination "$videosDir\$vid" -Force
        $size = [math]::Round((Get-Item $vid).Length / 1MB, 2)
        Write-Host "✓ Copié : $vid ($size MB)" -ForegroundColor Green
        $copiedVideos++
    } else {
        Write-Host "✗ Non trouvé : $vid (optionnel)" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "=== RÉSUMÉ ===" -ForegroundColor Cyan
Write-Host "$copiedImages image(s) copiée(s)" -ForegroundColor $(if ($copiedImages -gt 0) { "Green" } else { "Red" })
Write-Host "$copiedVideos vidéo(s) copiée(s)" -ForegroundColor $(if ($copiedVideos -gt 0) { "Green" } else { "Yellow" })

if ($copiedImages -eq 0 -and $copiedVideos -eq 0) {
    Write-Host ""
    Write-Host "Aucun fichier trouvé à copier." -ForegroundColor Yellow
    Write-Host "Vérifiez que vos fichiers sont dans le dossier courant avec les bons noms." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Dossiers de destination :" -ForegroundColor Cyan
Write-Host "  Images : $(Resolve-Path $imagesDir)" -ForegroundColor White
Write-Host "  Vidéos : $(Resolve-Path $videosDir)" -ForegroundColor White