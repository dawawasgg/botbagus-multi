let handler = async m => m.reply(`
      ππΌπΏππΌπ ππΌππ ππππΌπ
 ππππ π½ππΏπΌππΌ
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(jadwal jumat|jadwal hari jumat|jumat)$/i
handler.command = new RegExp

module.exports = handler