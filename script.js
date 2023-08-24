    const api = "https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817";
	async function getUser() {

	const response = await fetch(api);
    
    console.log(response);
	const data = await response.json();
	console.log(data);
    let employee = data.data;
    let str = '';
    employee.forEach((item) => {
        str += `
        <tr>
        <td>${item.name}</td>
        <td>${item.office}</td>
        <td>${item.position}</td>
        <td>$${item.salary}</td>
        </tr>
        ` 
    });
    document.getElementById("table").innerHTML += str
	}
	getUser();
