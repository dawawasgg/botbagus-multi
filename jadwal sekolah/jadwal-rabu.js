let handler = async m => m.reply(`
      ππΌπΏππΌπ ππΌππ ππΌπ½π
 πππππΌππππ / πππ / π½.πππΏππππππΌ / π½ππΌ
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(jadwal rabu|jadwal hari rabu|rabu)$/i
handler.command = new RegExp

module.exports = handler