const checkbox = document.querySelector("#nav-menu-options");
const media = window.matchMedia("(min-width: 1150px)");
function handleResize(e) {
  if (e.matches) {
    checkbox.checked = false;
  }
}
media.addEventListener("change", handleResize);
handleResize(media);

const toggle = document.getElementById("page-them");
const img = document.querySelector(".page-theme figure img");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    img.src = "./assets/images/dark.png";
  } else {
    img.src = "./assets/images/light.png";
  }
});

const toggle2 = document.getElementById("page-them");

toggle2.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

const tooltip = document.getElementById("tooltip");
const wrapper = document.querySelector(".radar-wrapper");

function attachTooltip(elements) {
  elements.forEach(el => {
    el.addEventListener("mouseenter", () => {
      tooltip.textContent = el.dataset.value + " / 100";
      tooltip.style.opacity = 1;
    });

    el.addEventListener("mousemove", e => {
      const rect = wrapper.getBoundingClientRect();
      tooltip.style.left = e.clientX - rect.left + "px";
      tooltip.style.top = e.clientY - rect.top + "px";
    });

    el.addEventListener("mouseleave", () => {
      tooltip.style.opacity = 0;
    });
  });
}

attachTooltip(document.querySelectorAll(".data-point"));
attachTooltip(document.querySelectorAll(".labels span"));

const container = document.querySelector(".snake-container");
const path = document.querySelector(".progress");

let pathLength;

window.addEventListener("load", () => {
  pathLength = path.getTotalLength();
  path.style.strokeDasharray = pathLength;
  path.style.strokeDashoffset = 0;
});

function getScrollProgress() {
  const rect = container.getBoundingClientRect();
  const total = rect.height - window.innerHeight;

  if (total <= 0) return 0;

  return Math.min(Math.max(-rect.top / total, 0), 1);
}

function getMouseProgress(e) {
  const rect = container.getBoundingClientRect();
  const mouseY = e.clientY - rect.top;
  const clamped = Math.min(Math.max(mouseY, 0), rect.height);
  return clamped / rect.height;
}

function update(progress) {
  path.style.strokeDashoffset = pathLength * progress;
}

window.addEventListener("scroll", () => {
  const scrollProgress = getScrollProgress();
  update(scrollProgress);
});

container.addEventListener("mousemove", (e) => {
  const scrollProgress = getScrollProgress();
  const mouseProgress = getMouseProgress(e);

  const finalProgress = Math.max(scrollProgress, mouseProgress);

  update(finalProgress);
});