// Set due date to 7 days from today
const dueDateElement = document.getElementById("due-date");
const today = new Date();
const dueDate = new Date(today);
dueDate.setDate(today.getDate() + 7);

const options = { day: "numeric", month: "long", year: "numeric" };
dueDateElement.textContent = dueDate.toLocaleDateString("pt-BR", options);

function confirmLoan() {
  const modal = document.getElementById("success-modal");
  const modalContent = modal.querySelector("div");

  modal.classList.remove("opacity-0", "pointer-events-none");
  modalContent.classList.remove("scale-90");
  modalContent.classList.add("scale-100");

  // Create some confetti-like interaction
  console.log(
    "Empréstimo confirmado com sucesso para a data: " +
      dueDate.toLocaleDateString("pt-BR"),
  );
}

function closeModal() {
  const modal = document.getElementById("success-modal");
  const modalContent = modal.querySelector("div");

  modal.classList.add("opacity-0", "pointer-events-none");
  modalContent.classList.remove("scale-100");
  modalContent.classList.add("scale-90");
}
