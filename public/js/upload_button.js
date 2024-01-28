function uploadImage() {
    const input = document.getElementById('imageInput');
    const preview = document.getElementById('preview');
  
    const file = input.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const img = new Image();
        img.src = e.target.result;
        preview.innerHTML = '';
        preview.appendChild(img);
      };
  
      reader.readAsDataURL(file);
    } else {
      alert('Please select an image to upload.');
    }
  }
  