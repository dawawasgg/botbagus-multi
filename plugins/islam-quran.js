let handler = async m => m.reply(`
ππππ πππ ππΌππ ππππ ππΌ ππΌπΌπ
`.trim()) // Tambah sendiri kalo mau
handler.help = ['ayatquran']
handler.tags = ['quotes']
handler.command = /^(quran)$/i

module.exports = handler
