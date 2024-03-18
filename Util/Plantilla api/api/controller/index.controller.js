

// Función principal, verifica que funcione la api
const index = (req, res) => {
    res.status(200).json({message: "Estoy funcionando!"}) // respuesta
}



// Exportar para usarlo en otros archivos
module.exports = {
    index
}