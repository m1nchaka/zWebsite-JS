const coursePages = ['public/cSharp.html', 'public/python.html'];
const homeButton = document.querySelectorAll('.homeButton');

const courseBox = document.querySelectorAll('.courseBox')
                        .forEach((btn, index) => btn.addEventListener('click', function() { 
                            // Проверка дали потребителя се е логнал
                            if (localStorage.getItem('user')) {
                                location.href = coursePages[index];
                            } else { 
                                window.location = "indexMain.html";
                                alert("Log in first!");
                            }
                        }))

const signout = document.querySelectorAll('.signout');
signout.forEach(btn => btn.addEventListener('click', function() { 
        localStorage.removeItem('user');
        alert("Signout successful!");   
        window.location = "indexMain.html";
}));

if(localStorage.getItem('user')) {
    signout.forEach(btn => btn.style.opacity = 1);
    homeButton.forEach(btn => btn.addEventListener('click', function() { 
        window.location = "afterLoginPage.html";
    }))
} else { 
    signout.forEach(btn => btn.style.opacity = 0);
    homeButton.forEach(btn => btn.addEventListener('click', function() { 
        window.location = "indexMain.html";
    }))
}