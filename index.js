function submitRequest() {
    var club = document.getElementById('club').value;
    var requestText = document.getElementById('requestText').value;
    var attachment = document.getElementById('attachment').value;
    var amount = document.getElementById('amount').value;
    var priority = document.getElementById('priority').value;

    var approvalChain = getApprovalChain(amount);

    displayApprovalChain(approvalChain);
}

function getApprovalChain(amount) {
    // Logic to determine the approval chain based on the amount
    // This is a simplified example, in a real scenario, you'd use more sophisticated logic
    if (amount <= 15000) {
        return ["Secretary", "Club FA"];
    } else if (amount > 15000 && amount <= 50000) {
        return ["Secretary", "Club FA", "Society FA", "ChairSAP"];
    } else {
        return ["Secretary", "Club FA", "Society FA", "ChairSAP", "Dean Students"];
    }
}

function displayApprovalChain(approvalChain) {
    var approvalList = document.getElementById('approvalList');
    approvalList.innerHTML = "";

    approvalChain.forEach(function (approver) {
        var listItem = document.createElement('li');
        listItem.textContent = approver;
        approvalList.appendChild(listItem);
    });

    document.getElementById('approvalChain').style.display = 'block';
}
