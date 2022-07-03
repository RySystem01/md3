const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstore',
}

// Other
global.namabot = ['RySys-Md']
global.namaowner = ['Rayy']
global.owner = ['6285888730976']
global.premium = ['6285888730976']
global.packname = '© RySys-Md'
global.author = 'Rayy'
global.sessionName = 'zxyn'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'udah nih',
    admin: 'cuman admin yang bisa make ini bang/mbak',
    botAdmin: 'jadiin bot sebagai admin dulu bang/mbak baru bisa make ini',
    owner: 'cuman owner yang bisa make ini bang/mbak',
    group: 'cuman bisa di grup bang/mbak',
    private: 'cuman bisa di chat pribadi bang/mbak',
    bot: 'sorry you are not bot user',
    wait: 'sabar....',
    endLimit: 'yahhh limit harian kamu udah habis nih, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/zxyn.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
