const LF=
        document.getElementById("loginForm");

LF.addEventListener
(
    "submit",
    function(event)
    {
        event.preventDefault();
    
        const email=
            document.getElementById("email").value.trim();
        
        const password=
            document.getElementById("password").value;

        if (email==="")
        {
                alert("Please enter your email.");
                return;
        } 
        if (email.includes(" "))
        {
                alert("Email should not contain spaces.");
                return;
        }
        if (!email.includes("@"))
        {
                alert("Email must contain @ symbol.");
                return;
        }
        if (!email.includes("."))
        {
                alert("Email must contain a dot (.).");
                return;
        }
        if (password==="")
        {
            alert("Please enter your password.");
            return;
        }
        if (password.length < 6)
        {
            alert("Password must contain at least 6 characters.");
            return;
        }
        if (password.length > 15)
        {
            alert("Password cannot exceed 15 characters.");
            return;
        }
        if (password.includes(" "))
        {
            alert("Password should not contain spaces.");
            return;
        }
        if (!/[A-Z]/.test(password))
        {
            alert("Password must contain atlest one uppercase letter.");
            return;
        }
        if (!/[a-z]/.test(password))
        {
            alert("Password must contain atlest one lowercase letter.");
            return;
        }
        if (!/[0-9]/.test(password))
        {
            alert("Password must contain atlest one number.");
            return;
        }
        if (!/[!@#$%^&*]/.test(password))
        {
            alert("Password must contain atlest one special character");
            return;
        }
    }
);

