function togglePassword() {
  const pwInput = document.getElementById("password");
  const pwIcon = document.getElementById("pw-icon");
  if (pwInput.type === "password") {
    pwInput.type = "text";
    pwIcon.textContent = "visibility_off";
  } else {
    pwInput.type = "password";
    pwIcon.textContent = "visibility";
  }
}

// Simple validation visualization
const inputs = document.querySelectorAll("input[required]");
inputs.forEach((input) => {
  input.addEventListener("blur", () => {
    if (input.value && input.checkValidity()) {
      input.classList.remove("border-outline-variant", "border-error");
      input.classList.add("border-secondary");
    } else if (input.value && !input.checkValidity()) {
      input.classList.remove("border-outline-variant", "border-secondary");
      input.classList.add("border-error");
    }
  });
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  // Mock login behavior
  const btn = e.target.querySelector('button[type="submit"]');
  const originalText = btn.innerHTML;
  btn.innerHTML =
    '<span class="material-symbols-outlined animate-spin" data-icon="progress_activity">progress_activity</span> Entrando...';
  btn.disabled = true;
  window.location.href = "painel_do_aluno.html";
});
