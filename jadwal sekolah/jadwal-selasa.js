let handler = async m => m.reply(`
      ππΌπΏππΌπ ππΌππ ππππΌππΌ
 π½.πππππππ / πππ/π½π / πππΌππΌπππΌ / πππ / ππΌππππΌππππΌ
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(jadwal selasa|jadwal hari selasa|selasa)$/i
handler.command = new RegExp

module.exports = handler