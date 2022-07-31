const createAbout = function(){
    const container = document.createElement("div");
    container.classList.add("container");
    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    
    const introText =  document.createElement("div");
    introText.classList.add("intro-text");
    const heading1 = document.createElement("h1");
    const paragraph1 = document.createElement("p");
    heading1.textContent = "The best pizza in Sarajevo..";
    paragraph1.textContent = "Taste the traditional pizza served with love for centuries";
    
    const seperator = document.createElement("hr");
    
    const whoText = document.createElement("div");
    whoText.classList.add("who-text");
    const heading2 = document.createElement("h2");
    const paragraph2 = document.createElement("p");
    heading2.textContent = "Who are we?";
    paragraph2.textContent = "We are a restaurant chain that has been running since 1983. We believe that good food is the root of happiness."
    
    const imageContainer = document.createElement("div");
    const image = document.createElement("img");
    imageContainer.classList.add("restaurant");
    image.src = "pizzeria.jpg";


    container.append(textContainer, imageContainer);
    textContainer.append(introText, seperator, whoText);
    introText.append(heading1, paragraph1);
    whoText.append(heading2,paragraph2);
    imageContainer.append(image);
    return container;
}  
export default createAbout; 