var _a;
function submitForm(event) {
    event.preventDefault();
    var formElement = document.getElementById("registration-form");
    var formData = new FormData(formElement);
    var table = document.getElementById('registration-table');
    var confirmPassword = document.getElementById('confirmPassword');
    var password = document.getElementById('password');
    var confirmPasswordError = document.getElementById('confirmPassword-error');
    confirmPasswordError.textContent = '';
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        return;
    }
    for (var _i = 0, _a = formData.entries(); _i < _a.length; _i++) {
        var _b = _a[_i], name_1 = _b[0], value = _b[1];
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.textContent = name_1;
        cell2.textContent = value.toString();
    }
    document.getElementById('registration-container').style.display = 'none';
    document.getElementById('registration-details').style.display = 'block';
}
(_a = document.getElementById("registration-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", submitForm);
