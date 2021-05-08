let table = document.getElementById('table-1').getElementsByTagName('tbody')[0];

/**
 * Metodo para obtener los datos 
 * 
*/
const getItems = async () => {
    const response = await fetch('https://my-json-server.typicode.com/dp-danielortiz/dptest_jsonplaceholder/items')
    if (!response.ok) {
        throw new Error(`Ocurrrió un error: ${response.status}`);
    } else {
        return await response.json();
    }
}

/**
 * 
 * Metodo que filtra y muestra los datos filtrados por color:red
*/
const displayData = async () => {
    try {
        let items =  await getItems();
        table.innerHTML = '';
        if (items.length) {
            const red = items.filter(item => item.color === 'red');
            console.log(red);
            red.forEach(element => {
                table.insertRow().innerHTML = `
                    <td>${element.id}</td>
                    <td class="text-capitalize">${element.type}</td>
                    <td class="text-capitalize">${element.color}</td>
                `;
            });
        }
    } catch (error) {
        table.innerHTML = `
            <td colspan="3" class="text-center text-danger">Ocurrió un error</td>
        `;
        console.error(error);
    }
}