function loadLinks() {
  const list = document.getElementById("linkList");
  list.innerHTML = "";

  const savedLinks = JSON.parse(localStorage.getItem("links")) || [];

  savedLinks.forEach((link, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${link.title}</strong> - 
      <a href="${link.url}" target="_blank">${link.url}</a>
      <p>${link.description}</p>
      <button onclick="deleteLink(${index})">Delete</button>
    `;
    list.appendChild(li);
  });
}

function addLink() {
  const title = document.getElementById("title").value.trim();
  const url = document.getElementById("url").value.trim();
  const description = document.getElementById("desc").value.trim();

  if (!title || !url) {
    alert("Title and URL are required.");
    return;
  }

  const newLink = { title, url, description };
  const links = JSON.parse(localStorage.getItem("links")) || [];
  links.push(newLink);
  localStorage.setItem("links", JSON.stringify(links));

  document.getElementById("title").value = "";
  document.getElementById("url").value = "";
  document.getElementById("desc").value = "";

  loadLinks();
}

function deleteLink(index) {
  const links = JSON.parse(localStorage.getItem("links")) || [];
  links.splice(index, 1);
  localStorage.setItem("links", JSON.stringify(links));
  loadLinks();
}

window.onload = loadLinks;
