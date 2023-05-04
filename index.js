var fileInput = document.getElementById('attach_file_input');
const apiKey = '62c18fb1790c4f52bb1a031c0332b453';
            const file = fileInput.files[0];
            const formData = new FormData();
            formData.append('key', apiKey);
            formData.append('image', file);

            const response = await fetch('https://api.imgbb.com/1/upload', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                const imageUrl = jsonResponse.data.url;
                
                // alert(imageUrl);
                // console.log(imageUrl);
            } else {
                console.log('Error uploading image. Status code: ' + response.status);
            }
        }
