
const chatBox = document.getElementById('chatbox')
const  modal  = document.getElementById('modal')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const cancelBtn = document.getElementById('decline-btn')

chatBox.addEventListener('click', () => {
     modal.style.display = 'inline'
    
})

cancelBtn.addEventListener('click', () => {
     modal.style.display = 'none'
})



consentForm.addEventListener('submit', (e) => {
     e.preventDefault() /* prevent the default behavior of the form */
     const consentFormData = new FormData(consentForm) /* get the form data */
     const fullName = consentFormData.get('fullName')

     modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Sending your message to our team</p>
    </div>` 

    setTimeout(function(){
     document.getElementById('modal-inner').innerHTML = `
        <h3>Thanks <span class="modal-display-name">${fullName}</span>, we have received your message</h3>
        <p class="modal-display-text">We will get back to you shortly</p> `

    },3000)

    setTimeout(function(){
        close()
        modal.style.display = 'none'
    },4500)



})

