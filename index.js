//----- Primer Ejercicio -----
const personas = [
	{
		nombre: 'Laura',
		edad: 20,
	},
	{
		nombre: 'Ana',
		edad: 18,
	},
	{
		nombre: 'Cris',
		edad: 18,
	},
];

// personas.edad //Esto solo con objetos

const sumarEdades = (arreglo) => {
	let sumaEdades = 0;

	for (let i = 0; i < arreglo.length; i++) {
		//Cada que se ejecuta da una vuelta en el arreglo y obtiene la posición
		sumaEdades = sumaEdades + arreglo[i].edad; // index suele cambiar a => i
	}

	//La misma forma pero con forEach
	// arreglo.forEach(producto => {
	//   sumaEdades = sumaEdades + producto.edad;
	// });

	return sumaEdades;
};

const sumaTotalEdad = sumarEdades(personas);
console.log(sumaTotalEdad);

// ----------------------------------------------------------------------------------
