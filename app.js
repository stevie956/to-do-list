console.log("App is running");
const onToDoFormSubmit = (event) => {
event.preventDefault();
console.log("form submit");
}
$('#to-do-form').on("submit", onToDoFormSubmit);