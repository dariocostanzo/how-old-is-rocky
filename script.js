// Rocky's birth date: December 11, 2024
const birthDate = new Date('2024-12-11T00:00:00');

// Function to calculate and display Rocky's age
function updateAge() {
    const now = new Date();
    
    // If Rocky's birth date is in the future, show zeros
    if (now < birthDate) {
        document.getElementById('years').textContent = '0';
        document.getElementById('months').textContent = '0';
        document.getElementById('weeks').textContent = '0';
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        return;
    }
    
    // Calculate the difference in milliseconds
    const diffMs = now - birthDate;
    
    // Calculate years, months, days, hours, minutes, and seconds
    const msInSecond = 1000;
    const msInMinute = msInSecond * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;
    const msInWeek = msInDay * 7;
    
    // Calculate years and remaining milliseconds
    const ageDate = new Date(diffMs);
    const years = Math.abs(ageDate.getUTCFullYear() - 1970);
    
    // Calculate months (this is approximate)
    const months = ageDate.getUTCMonth();
    
    // Calculate total days and weeks
    const totalDays = Math.floor(diffMs / msInDay);
    const weeks = Math.floor(totalDays / 7);
    
    // Calculate remaining days after weeks
    const days = ageDate.getUTCDate() - 1;
    
    // Calculate hours, minutes, seconds
    const hours = ageDate.getUTCHours();
    const minutes = ageDate.getUTCMinutes();
    const seconds = ageDate.getUTCSeconds();
    
    // Update the DOM
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('weeks').textContent = weeks;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    
    // Check if it's Rocky's birthday
    checkBirthday(now);
}

// Function to check if it's Rocky's birthday
function checkBirthday(now) {
    const birthdayCelebration = document.getElementById('birthday-celebration');
    
    // Check if it's December 11th
    if (now.getMonth() === 11 && now.getDate() === 11) {
        // Show birthday celebration
        birthdayCelebration.classList.remove('hidden');
        
        // If we haven't created balloons yet, create them
        if (document.querySelectorAll('.balloon').length === 0) {
            createBalloons();
        }
    } else {
        // Hide birthday celebration
        birthdayCelebration.classList.add('hidden');
        
        // Remove any existing balloons
        document.querySelectorAll('.balloon').forEach(balloon => {
            balloon.remove();
        });
    }
}

// Function to create balloons for birthday celebration
function createBalloons() {
    // Only orange colors for the balloons, no blue
    const colors = ['#FF9800', '#FF7D00', '#FFA726', '#FF8F00', '#FFB74D', '#FFA000'];
    const confettiContainer = document.getElementById('confetti');
    
    // Create 50 balloons
    for (let i = 0; i < 50; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        
        // Random position
        const left = Math.random() * 100;
        
        // Random color
        const colorIndex = Math.floor(Math.random() * colors.length);
        
        // Random delay
        const delay = Math.random() * 15;
        
        // Set balloon styles
        balloon.style.left = `${left}%`;
        balloon.style.backgroundColor = colors[colorIndex];
        balloon.style.animationDelay = `${delay}s`;
        
        // Add balloon shape
        balloon.style.borderRadius = '50% 50% 50% 50% / 40% 40% 60% 60%';
        
        // Add string to balloon
        const string = document.createElement('div');
        string.style.position = 'absolute';
        string.style.width = '1px';
        string.style.height = '50px';
        string.style.backgroundColor = 'white';
        string.style.top = '100%';
        string.style.left = '50%';
        
        balloon.appendChild(string);
        document.body.appendChild(balloon);
    }
}

// Update age every second
setInterval(updateAge, 1000);

// Initial update
updateAge();