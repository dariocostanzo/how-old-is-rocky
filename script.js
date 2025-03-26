const birthDate = new Date('2024-12-11T00:00:00');

function updateAge() {
    const now = new Date();
    
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
    
    const diffMs = now - birthDate;
    
    const msInSecond = 1000;
    const msInMinute = msInSecond * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;
    const msInWeek = msInDay * 7;
    
    const ageDate = new Date(diffMs);
    const years = Math.abs(ageDate.getUTCFullYear() - 1970);
    
    const months = ageDate.getUTCMonth();
    
    const totalDays = Math.floor(diffMs / msInDay);
    const weeks = Math.floor(totalDays / 7);
    
    const days = ageDate.getUTCDate() - 1;
    
    const hours = ageDate.getUTCHours();
    const minutes = ageDate.getUTCMinutes();
    const seconds = ageDate.getUTCSeconds();
    
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('weeks').textContent = weeks;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    
    checkBirthday(now);
}

function checkBirthday(now) {
    const birthdayCelebration = document.getElementById('birthday-celebration');
    
    if (now.getMonth() === 11 && now.getDate() === 11) {
        birthdayCelebration.classList.remove('hidden');
        
        if (document.querySelectorAll('.balloon').length === 0) {
            createBalloons();
        }
    } else {
        birthdayCelebration.classList.add('hidden');
        
        document.querySelectorAll('.balloon').forEach(balloon => {
            balloon.remove();
        });
    }
}

function createBalloons() {
    const colors = ['#FF9800', '#FF7D00', '#FFA726', '#FF8F00', '#FFB74D', '#FFA000'];
    const confettiContainer = document.getElementById('confetti');
    
    for (let i = 0; i < 50; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        
        const left = Math.random() * 100;
        
        const colorIndex = Math.floor(Math.random() * colors.length);
        
        const delay = Math.random() * 15;
        
        balloon.style.left = `${left}%`;
        balloon.style.backgroundColor = colors[colorIndex];
        balloon.style.animationDelay = `${delay}s`;
        
        balloon.style.borderRadius = '50% 50% 50% 50% / 40% 40% 60% 60%';
        
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

setInterval(updateAge, 1000);

updateAge();