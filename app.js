const sign_up_link = document.queryselector( "#sing-up-link");
const sign_in_link = document.queryselector( "#sing-in-link");
const container = document.queryselector(".container")

sign_up_link.addEventlistener("click", () =>{
	container.classList.add("Sign-up-mode"):
});

sign_in_link.addEventlistener("click", () => {
	container.classList.remove(Sign-up-mode)
})