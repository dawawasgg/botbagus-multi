let handler = async m => m.reply(`
      ππΌπΏππΌπ ππΌππ ππΌπππ
 π½.πππππππ / πππΌ / ππΌππππΌππππΌ / ππΌπ
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(jadwal kamis|jadwal hari kamis|kamis)$/i
handler.command = new RegExp

module.exports = handler