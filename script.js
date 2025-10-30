const apiKey = "xxxxxxxxxxxxxxxxxxxxxx"; // Replace with your actual API key
const promt = document.getElementById("image-description");
const images = document.querySelector(".images");

const generateImage = async () => {
  // Define the methods for the fetch request
  const methods = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt: promt.value,
      n: 3,
      size: "512x512",
    }),
  };
  // Make the fetch request to the OpenAI API
  const response = await fetch(
    "https://api.openai.com/v1/images/generations",
    methods
  );

  // Parse the JSON response as json
  const data = await response.json();
  // Extract the list of images from the response data
  const listImages = data.data;
  console.log(data);
  // Clear previous images
  images.innerHTML = "";
  // Loop through the list of images and create img elements
  listImages.map((image) => {
    const container = document.createElement("div");
    images.append(container);
    const img = document.createElement("img");
    container.append(img);
    img.src = image.url;
  });
};
