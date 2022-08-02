const createContact = function(){
    const helperContainer = document.createElement("div");
    helperContainer.classList.add("helper");
    
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("flexy")

    const contactList = document.createElement("div");
    contactList.classList.add("list-style")

    const address = document.createElement("span");
    const addressIcon = document.createElement("i");
    addressIcon.classList.add("fas")
    addressIcon.classList.add("fa-map-marker-alt")
    const addressText = document.createElement("p");
    addressText.textContent = "1024 Oakwood Ave San Diego, CA 22434"
    address.append(addressIcon, addressText);
    console.log(address)
    console.log(addressIcon)

    const workingHours = document.createElement("span");
    const workingHoursIcon = document.createElement("i");
    workingHoursIcon.classList.add("fas")
    workingHoursIcon.classList.add("fa-clock")
    const workingHoursText = document.createElement("p")
    workingHoursText.textContent = "Mon-Thurs: 8am-8pm Fri-Sun: 8am-11pm"
    workingHours.append(workingHoursIcon, workingHoursText)
    
    const phoneNumber = document.createElement("span");
    const phoneNumberIcon = document.createElement("i");
    phoneNumberIcon.classList.add("fa")
    phoneNumberIcon.classList.add("fa-phone")
    const phoneNumberText = document.createElement("p")
    phoneNumberText.textContent = "(222)-888 5555"
    phoneNumber.append(phoneNumberIcon, phoneNumberText);

    contactList.append(address,workingHours,phoneNumber)
    const googleMap = document.createElement("div");
    googleMap.setAttribute("id", "map");
    contactContainer.append(contactList, googleMap);
    helperContainer.append(contactContainer);
    return helperContainer
}
export default createContact