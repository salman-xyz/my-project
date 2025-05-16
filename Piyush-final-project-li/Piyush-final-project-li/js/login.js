document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('loginContainer');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');
    const loginBtn = document.getElementById('loginBtn');
    const togglePassword = document.getElementById('togglePassword');
    
    // Password toggle functionality
    togglePassword.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.classList.remove('fa-eye');
            togglePassword.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            togglePassword.classList.remove('fa-eye-slash');
            togglePassword.classList.add('fa-eye');
        }
    });
    
    // Login validation
    loginBtn.addEventListener('click', handleLogin);
    
    // Allow Enter key to submit
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    });
    
    function handleLogin() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        // Password data (replace with your own passwords)
        const users = [
            { username: "admin", password: "admin123", access: "all" },
            { username: "user", password: "user123", access: "basic" },
            { username: "lucix", password: "lucix123", access: "all" },
            { username: "1", password: "1", access: "all" },
            { username: "sabbir12@", password: "sabbir123", access: "all" }
        ];
        
        // Find matching user
        const user = users.find(u => u.username === username && u.password === password);
        
        if (user) {
            // Set session storage
            sessionStorage.setItem('isAuthenticated', 'true');
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('accessLevel', user.access);
            
            // Redirect to main app
            window.location.href = 'index.html';
        } else {
            // Show error and shake animation
            errorMessage.style.display = 'block';
            loginContainer.classList.add('shake');
            
            // Remove shake class after animation completes
            setTimeout(() => {
                loginContainer.classList.remove('shake');
            }, 500);
        }
    }
});