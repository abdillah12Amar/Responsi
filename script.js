// Fungsi untuk menampilkan detail project dengan SweetAlert2
function showProjectDetail() {
    Swal.fire({
        title: 'Project 1 Details',
        text: 'Detailed information about Project 1.',
        icon: 'info',
        confirmButtonText: 'Close'
    });
}

// Fungsi untuk download CV
function downloadCV() {
    window.location.href = 'CV_Anda.pdf';
}

// Smooth scrolling untuk navigasi
$(document).ready(function(){
    $("a.nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
});
