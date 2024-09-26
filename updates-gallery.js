async function loadImages(folderName, galleryDivID) {
    try {
      const response = await fetch(`https://backblaze-b2.vercel.app/getImages?folder=${folderName}`);
      if (!response.ok) {
        throw new Error('Failed to fetch images from server');
      }
      const imageUrls = await response.json();

      const galleryContainer = document.getElementById(galleryDivID);


      imageUrls.images.forEach(imageUrl => {
        const imageDiv = document.createElement('a');
        imageDiv.classList.add("f-carousel__slide");
        imageDiv.href = imageUrl.url;
        imageDiv.setAttribute('data-fancybox', 'gallery');
        imageDiv.setAttribute('data-thumb-src', imageUrl.url); 

        const img = document.createElement('img');
        img.src = imageUrl.url;
        img.alt = 'Gallery Image';
        img.style = 'width: 100%; height: auto; margin: 5px; object-fit: cover; border-radius: 8px;';

        imageDiv.appendChild(img);
        galleryContainer.appendChild(imageDiv);
      });

      
//      Fancybox.bind("[data-fancybox]", {});
      new Carousel(document.getElementById(galleryDivID), {
        Dots: false,
        Thumbs: {
          type: "classic",
        },
      }, { Thumbs });

    } catch (error) {
      console.error('Error fetching and displaying images:', error);
    }
  }
