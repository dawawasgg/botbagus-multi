let handler = async m => m.reply(`
πππ ππΌπ πΌππΌπ πππΏπΌπ πΏπΌπ π½πΌππΌππππΌ πππππ πππ π€­
`.trim()) // Tambah sendiri kalo mau
handler.customPrefix = /^(datasuci|suci|siapakah suci|siapakah bibah|bibah|habibah)$/i
handler.command = new RegExp

module.exports = handler