const rsvpSubmitButton = document.getElementById('submit-rsvp');
rsvpSubmitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit
    const name = document.querySelector('#guest-name').value;
    const attending = document.querySelector('input[name="attendance"]:checked').value;
    const guests = document.querySelector('#guest-count').value;
    const message = document.querySelector('#guest-wishes').value;
    const googleSheetAppScriptURL = 'https://script.google.com/macros/s/AKfycby5giosede14eAUK3OnWdNhy2srXpPH28qaPfUd8Ob2JZkf0iz1PXDx_nlhNeKmHUdg5g/exec'
    fetch(googleSheetAppScriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'name': name,
            'attending': attending,
            'guests': guests,
            'message': message
        })
    })
    .then(response => {
        alert('Cảm ơn bạn đã xác nhận! Chúng tôi rất mong được gặp bạn tại đám cưới.');
        // Reset form sau khi submit
        document.querySelector('.rsvp-form').reset();
    })
    .catch(error => {
        alert('Đã có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau.');
        console.error('Error!', error.message);
    });
});