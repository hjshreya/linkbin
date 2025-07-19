function addLink() {
    const titleInput = document.getElementById("title-input");
    const descInput = document.getElementById("desc-input");
    const linkInput = document.getElementById("link-input");
  
    const title = titleInput.value.trim();
    const description = descInput.value.trim();
    const url = linkInput.value.trim();
  
    if (!url || !url.startsWith("http")) {
      alert("Please enter a valid link (starting with http or https).");
      return;
    }
  
    const list = document.getElementById("link-list");
  
    const li = document.createElement("li");
  
    const titleElem = document.createElement("div");
    titleElem.className = "link-item-title";
    titleElem.textContent = title || "Untitled";
  
    const descElem = document.createElement("div");
    descElem.className = "link-item-desc";
    descElem.textContent = description;
  
    const linkElem = document.createElement("a");
    linkElem.className = "link-item-url";
    linkElem.href = url;
    linkElem.textContent = url;
    linkElem.target = "_blank";
  
    // COPY BUTTON
    const copyBtn = document.createElement("button");
    copyBtn.className = "copy-btn";
    copyBtn.textContent = "📋";
    copyBtn.title = "Copy Link";
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(url)
        .then(() => {
          copyBtn.textContent = "✅";
          setTimeout(() => {
            copyBtn.textContent = "📋";
          }, 1500);
        })
        .catch(() => alert("Failed to copy the link."));
    };
  
    // DELETE BUTTON
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "❌";
    deleteBtn.title = "Delete";
    deleteBtn.onclick = () => li.remove();
  
    // Append everything
    li.appendChild(titleElem);
    if (description) li.appendChild(descElem);
    li.appendChild(linkElem);
    li.appendChild(copyBtn);
    li.appendChild(deleteBtn);
  
    list.appendChild(li);
  
    // Clear input fields
    titleInput.value = "";
    descInput.value = "";
    linkInput.value = "";
  }
  
