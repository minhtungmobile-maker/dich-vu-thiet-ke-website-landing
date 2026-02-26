document.addEventListener('DOMContentLoaded', function() {
    
    // 1. MOBILE MENU TOGGLE
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if(mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 2. STICKY HEADER EFFECT
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
            header.style.padding = "10px 0";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
            header.style.padding = "15px 0";
        }
    });

    // 3. SMOOTH SCROLL FOR ANCHOR LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navMenu.classList.remove('active'); // Close menu on click
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 4. FORM HANDLING (MOCKUP)
    // Lưu ý: Đây là xử lý frontend. Bạn cần kết nối API backend thực tế để lưu lead.
    const leadForm = document.getElementById('leadForm');
    if(leadForm) {
        leadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Lấy dữ liệu
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;

            // Validate đơn giản
            if(name.length < 2 || phone.length < 10) {
                alert('Vui lòng nhập đầy đủ thông tin hợp lệ!');
                return;
            }

            // Giả lập gửi thành công
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = 'ĐANG GỬI...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(`Cảm ơn ${name}! Yêu cầu của bạn đã được ghi nhận. Chúng tôi sẽ liên hệ số ${phone} sớm nhất.`);
                leadForm.reset();
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
                
                // TODO: Gửi dữ liệu về Server/CRM/Email tại đây
                // fetch('/api/submit-lead', { method: 'POST', body: ... })
            }, 1500);
        });
    }

    // 5. LAZY LOADING IMAGES (Native support check)
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.src;
        });
    } else {
        // Fallback for older browsers (optional library needed)
        // Dynamically load a lazy load script if needed
    }
});