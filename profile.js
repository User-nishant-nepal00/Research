// profile.js
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const profId = urlParams.get("id");

  if (professors[profId]) {
    const prof = professors[profId];

    // Profile picture + link
    document.getElementById("prof-pic").src = prof.photo || "default.png";
    document.getElementById("prof-pic-link").href = prof.photo || "#";

    // Basic info
    document.getElementById("prof-name").textContent = prof.name;
    document.getElementById("prof-role").textContent = prof.role;
    document.getElementById("prof-email").textContent = prof.email;
    document.getElementById("prof-address").textContent = prof.address;

    // LinkedIn
    document.getElementById("prof-linkedin").href = prof.linkedin;

    // ✅ Google Scholar
    const scholarBtn = document.getElementById("prof-scholar");
    if (prof.scholar) {
      scholarBtn.href = prof.scholar;
      scholarBtn.style.display = "inline-block";
    } else {
      scholarBtn.style.display = "none"; // hide if no scholar link
    }

    // Education
    const eduList = document.getElementById("prof-education");
    eduList.innerHTML = "";
    prof.education.forEach(e => {
      const li = document.createElement("li");
      li.textContent = e;
      eduList.appendChild(li);
    });

    // Subjects
    const subjList = document.getElementById("prof-subjects");
    subjList.innerHTML = "";
    prof.subjects.forEach(s => {
      const li = document.createElement("li");
      li.textContent = s;
      subjList.appendChild(li);
    });

    // Articles
    const artList = document.getElementById("prof-articles");
    artList.innerHTML = "";
    prof.articles.forEach(a => {
      const li = document.createElement("li");
      li.textContent = a;
      artList.appendChild(li);
    });
  } else {
    document.querySelector("main").innerHTML = "<p>Professor not found.</p>";
  }
});
