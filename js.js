document.addEventListener('DOMContentLoaded', function(){
	const navToggle = document.querySelector('.nav-toggle');
	const nav = document.getElementById('primary-nav');
	if(navToggle && nav){
		navToggle.addEventListener('click', function(){
			const expanded = this.getAttribute('aria-expanded') === 'true';
			this.setAttribute('aria-expanded', String(!expanded));
			nav.classList.toggle('open');
		});
	}

	const yearEl = document.getElementById('year');
	if(yearEl) yearEl.textContent = new Date().getFullYear();
});

document.addEventListener('DOMContentLoaded', function(){
	const form = document.getElementById('contact-form');
	const status = document.getElementById('form-status');
	if(!form) return;

	form.addEventListener('submit', function(e){
		e.preventDefault();
		status.textContent = '';

		if(!form.checkValidity()){
			status.textContent = 'Please complete the form correctly.';
			status.style.color = '#f55a33ff';
			form.reportValidity();
			return;
		}

		const data = {
			name: form.name.value.trim(),
			email: form.email.value.trim(),
			subject: form.subject.value.trim(),
			message: form.message.value.trim()
		};

		status.textContent = 'Thanks ill get back to you soon.';
		status.style.color = '#90ee90';
		form.reset();
	});
});
