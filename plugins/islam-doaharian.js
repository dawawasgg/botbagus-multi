let handler = async m => m.reply(`
ππππ πππ ππΌππ ππππ ππΌ ππΌπΌπ
`.trim()) // Tambah sendiri kalo mau
handler.help = ['doaharian']
handler.tags = ['islam']
handler.command = /^(doaharian)$/i

module.exports = handler
