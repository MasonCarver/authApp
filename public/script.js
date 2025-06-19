const API_URL = "http://localhost:5000/api";

// ==== REGISTER ====
const registerForm = document.getElementById("register-form");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Registration successful. Please log in.");
        window.location.href = "login.html";
      } else {
        alert(data.message || "Registration failed.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  });
}

// ==== LOGIN ====
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "dashboard.html";
      } else {
        alert(data.message || "Login failed.");
      }
    } catch (err) {
      alert("Something went wrong.");
    }
  });
}

// ==== DASHBOARD (Protected) ====
const welcomeMessage = document.getElementById("welcome-message");
const userEmail = document.getElementById("user-email");

if (welcomeMessage && userEmail) {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("You must be logged in to view this page.");
    window.location.href = "login.html";
  } else {
    fetch(`${API_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.email) {
          welcomeMessage.textContent = `Welcome, ${user.name || "User"}!`;
          userEmail.textContent = user.email;
        } else {
          throw new Error("Invalid token or session expired.");
        }
      })
      .catch(() => {
        alert("Session expired. Please log in again.");
        localStorage.removeItem("token");
        window.location.href = "login.html";
      });
  }
}

// ==== LOGOUT ====
const logoutBtn = document.getElementById("logout-btn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.href = "login.html";
  });
}

// ==== SHOW/HIDE PASSWORD ====
function setupPasswordToggle(inputId, toggleId) {
  const input = document.getElementById(inputId);
  const toggle = document.getElementById(toggleId);

  if (input && toggle) {
    let visible = false;

    toggle.addEventListener("click", () => {
      visible = !visible;
      input.type = visible ? "text" : "password";

      toggle.innerHTML = visible
        ? `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
             d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a10.05 10.05 0 012.179-3.315M6.21 6.21A9.964 9.964 0 0112 5c4.478 0 8.268 2.943 9.542 7a10.05 10.05 0 01-4.221 5.302M3 3l18 18" />`
        : `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
             d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
             d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />`;
    });
  }
}

setupPasswordToggle("password", "toggle-password");
setupPasswordToggle("login-password", "toggle-login-password");
