const obtenerDatosEquipo = (req, res) => {
    const queryEquipo = 'SELECT * FROM equipo';
    connection.query(queryEquipo, (err, resultadosEquipo) => {
        if (err) {
            console.error('Error al obtener datos del equipo:', err);
            res.status(500).send('Error al obtener datos del equipo');
            return;
        }

        const queryTrabajos = 'SELECT * FROM trabajos_equipo';
        connection.query(queryTrabajos, (err, resultadosTrabajos) => {
            if (err) {
                console.error('Error al obtener datos de los trabajos:', err);
                res.status(500).send('Error al obtener datos de los trabajos');
                return;
            }

            // Renderizar la vista con los datos obtenidos
            res.render('main', {
                title: 'Bienvenido a mi Portfolio',
                equipo: resultadosEquipo,
                trabajos: resultadosTrabajos
            });
        });
    });
};

module.exports = { obtenerDatosEquipo };






