fx_version 'cerulean'
rdr3_warning 'I acknowledge that this is a prerelease build of RedM, and I am aware my resources *will* become incompatible once RedM ships.'

game 'rdr3'
lua54 'yes'


author 'BCC Scripts'
description 'Redm, NUI, Vuejs boilerplate'

client_script {
    'client/client.lua'
}

ui_page {
    "ui/index.html"
}

files {
    "ui/dist/index.html",
    "ui/dist/**/*"
}

version '1.0.0'