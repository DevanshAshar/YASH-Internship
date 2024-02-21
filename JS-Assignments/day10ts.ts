function submitForm(event: Event) {
    event.preventDefault();
    const formElement = document.getElementById("registration-form") as HTMLFormElement;
    const formData = new FormData(formElement);
    const table = document.getElementById('registration-table');
    const confirmPassword = document.getElementById('confirmPassword') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    const confirmPasswordError = document.getElementById('confirmPassword-error') as HTMLElement;
    confirmPasswordError.textContent = '';
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        return;
    }
    for (const [name, value] of formData.entries()) {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = name;
        cell2.textContent = value.toString();
    }
    document.getElementById('registration-container')!.style.display = 'none';
    document.getElementById('registration-details')!.style.display = 'block';
}
document.getElementById("registration-form")?.addEventListener("submit", submitForm);