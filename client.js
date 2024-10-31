let getData = document.querySelector('#table-Worker tbody');

function displayWorker(workers = dataWorkerS) {
    getData.innerHTML = '';
    workers.forEach((worker, index) => {
        worker.ID = index + 1;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${worker.ID}</td>
            <td>${worker.name}</td>
            <td>${worker.date}</td>
            <td>${worker.address}</td>
            <td>${worker.salary}</td>
            <td>${worker.position}</td>
        `;
        getData.appendChild(row);
    });
}

dataWorkerS.sort((a, b) => a.name.localeCompare(b.name));
displayWorker();

function addWorker() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const address = document.getElementById('address').value;
    const salary = document.getElementById('salary').value;
    const position = document.getElementById('position').value;

    if (name && salary) {
        const newWorker = {
            ID: dataWorkerS.length + 1,
            name: name,
            date: date,
            address: address,
            salary: salary,
            position: position,
        };
        dataWorkerS.push(newWorker);
        displayWorker();
        resetForm();
    } else {
        alert('Vui lòng nhập đúng tên và lương');
    }
}

// Hàm reset form (bạn có thể định nghĩa thêm hàm này)
function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
    document.getElementById('address').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('position').value = '';
}
