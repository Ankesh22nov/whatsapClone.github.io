let btns = document.querySelectorAll('.tab button');
let statusArea = document.querySelector('.status_area');
let callArea = document.querySelector('.call_area');
let contactArea = document.querySelector('.contact_list');
let messageIcon = document.querySelector('.message_icon');
let statusBtn = document.querySelector('.status_btn');
let callBtn = document.querySelector('.call_btn');

btns.forEach((Element) => {
    statusBtn.style.display = "none";
                callBtn.style.display = "none";
        Element.addEventListener('click', () => {
            // document.querySelector('.active').classList.remove('active');
            if (Element.id === "chat") {
                statusArea.style.left = '100%';
                contactArea.style.left = '0%';
                callArea.style.left = '100%';
                messageIcon.style.display = "block";
                statusBtn.style.display = "none";
                callBtn.style.display = "none";
                // Element.classList.add('active');
             


            }else if (Element.id === "status") {
                statusArea.style.opacity = '1';
                statusArea.style.left = '0%';
                contactArea.style.left = '-100%';
                callArea.style.left = '100%';
                messageIcon.style.display = "none";
                statusBtn.style.display = "block";
                callBtn.style.display = "none";
                // Element.classList.add('active');

            
            }
            
             else if (Element.id === "call") {
                callArea.style.opacity = '1';
                statusArea.style.left = '-100%';
                contactArea.style.left = '-100%';
                callArea.style.left = '0%';
                messageIcon.style.display = "none";
                statusBtn.style.display = "none";
                callBtn.style.display = "block";
                // Element.classList.add('active');

            }
        })
    }

)
