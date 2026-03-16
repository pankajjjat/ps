// Configuration
const startDate = new Date('2025-07-01T00:00:00');

// Image files - ONLY files that actually exist in the folder
const imageFiles = [
    'Screenshot_2025-10-15-05-55-03-11_a63b0f8076346d26cbdc1b971a1da2a7.webp',
    'Screenshot_2025-10-16-14-22-25-39_a63b0f8076346d26cbdc1b971a1da2a7.webp',
    'Screenshot_2025-10-17-13-47-20-00_a63b0f8076346d26cbdc1b971a1da2a7.webp',
    'Screenshot_2025-11-03-11-06-05-66_a63b0f8076346d26cbdc1b971a1da2a7.webp',
    'Screenshot_2025-11-03-11-07-04-28_a63b0f8076346d26cbdc1b971a1da2a7.webp',
    'Screenshot_2025-11-03-11-07-30-03_a63b0f8076346d26cbdc1b971a1da2a7.webp',
    'Screenshot_2025-11-03-11-07-43-51_a63b0f8076346d26cbdc1b971a1da2a7.webp',
    'Screenshot_2025-12-27-07-02-03-24_6012fa4d4ddec268fc5c7112cbb265e7.webp',
    'Screenshot_2026-01-04-16-19-01-49_a63b0f8076346d26cbdc1b971a1da2a7.webp',
    'Screenshot_2026-01-06-21-22-36-03_a63b0f8076346d26cbdc1b971a1da2a7.webp',
    'Screenshot_2026-01-14-20-33-35-04_a63b0f8076346d26cbdc1b971a1da2a7.webp',
    'IMG_20251106_145814.webp',
    '20251106_205202-COLLAGE.webp',
    'IMG-20251114-WA0005.webp',
    'IMG-20251114-WA0008.webp',
    'IMG-20251114-WA0010.webp',
    'IMG-20251114-WA0012.webp',
    'IMG-20251114-WA0031.webp',
    'IMG-20251114-WA0032.webp',
    'IMG-20251114-WA0037.webp',
    'IMG-20251114-WA0046.webp',
    'IMG-20251114-WA0047.webp',
    'IMG-20251114-WA0048.webp',
    'IMG-20251114-WA0049.webp',
    'IMG-20251114-WA0053.webp',
    'IMG-20251114-WA0055.webp',
    'IMG-20251114-WA0056.webp',
    'IMG-20251114-WA0058.webp',
    'IMG-20251114-WA0060.webp',
    'IMG-20251114-WA0063.webp',
    'IMG-20251114-WA0065.webp',
    'IMG-20251120-WA0004.webp',
    'IMG-20251120-WA0005.webp',
    'IMG-20251120-WA0006.webp',
    'IMG-20251120-WA0007.webp',
    'IMG-20251120-WA0013.webp',
    'IMG-20251120-WA0014.webp',
    'IMG-20251120-WA0017.webp',
    'IMG-20251120-WA0018.webp',
    'IMG-20251120-WA0019.webp',
    'IMG-20251120-WA0020.webp',
    'IMG-20251120-WA0021.webp',
    'IMG-20251211-WA0005.webp',
    'IMG-20251211-WA0006.webp',
    'IMG-20251211-WA0007.webp',
    'IMG-20251211-WA0008.webp',
    'IMG-20251211-WA0009.webp',
    'IMG-20251211-WA0011.webp',
    'IMG-20251211-WA0012.webp',
    'IMG20251211164738.webp',
    'IMG20251211164745.webp',
    'IMG20251211174259.webp',
    'IMG20251211174307.webp',
    'IMG20260217152254.webp',
    'IMG20260222182256.webp',
    'Snapchat-1022604797.webp',
    'Snapchat-1029898938.webp',
    'Snapchat-1039549150.webp',
    'Snapchat-1058061286.webp',
    'Snapchat-1061077237.webp',
    'Snapchat-1073641994.webp',
    'Snapchat-1079767463.webp',
    'Snapchat-1079981520.webp',
    'Snapchat-109398558.webp',
    'Snapchat-1094858749.webp',
    'Snapchat-1115606383.webp',
    'Snapchat-1124922.webp',
    'Snapchat-1128334285.webp',
    'Snapchat-1156747725.webp',
    'Snapchat-1158115049.webp',
    'Snapchat-1184845957.webp',
    'Snapchat-1192505483.webp',
    'Snapchat-1193112505.webp',
    'Snapchat-1232618603.webp',
    'Snapchat-1245677386.webp',
    'Snapchat-1250031606.webp',
    'Snapchat-1299516016.webp',
    'Snapchat-1310598520.webp',
    'Snapchat-1318599085.webp',
    'Snapchat-1378045126.webp',
    'Snapchat-1396028959.webp',
    'Snapchat-1398356481.webp',
    'Snapchat-1442098340.webp',
    'Snapchat-1457877563.webp',
    'Snapchat-1547885281.webp',
    'Snapchat-1569198563.webp',
    'Snapchat-1584006172.webp',
    'Snapchat-1599523677.webp',
    'Snapchat-1684407756.webp',
    'Snapchat-1691809235.webp',
    'Snapchat-169429264.webp',
    'Snapchat-1743617278.webp',
    'Snapchat-1743886107.webp',
    'Snapchat-1750707387.webp',
    'Snapchat-1754338726.webp',
    'Snapchat-1755926564.webp',
    'Snapchat-1767116474.webp',
    'Snapchat-18124042.webp',
    'Snapchat-1845659353.webp',
    'Snapchat-1848394842.webp',
    'Snapchat-1883510612.webp',
    'Snapchat-1895300823.webp',
    'Snapchat-1935451800.webp',
    'Snapchat-1943216739.webp',
    'Snapchat-1964706546.webp',
    'Snapchat-1971387151.webp',
    'Snapchat-1983611316.webp',
    'Snapchat-1999153428.webp',
    'Snapchat-2026270499.webp',
    'Snapchat-2040299448.webp',
    'Snapchat-2046237845.webp',
    'Snapchat-2048514065.webp',
    'Snapchat-206085954.webp',
    'Snapchat-2061207138.webp',
    'Snapchat-2070434835.webp',
    'Snapchat-2081244433.webp',
    'Snapchat-2104100132.webp',
    'Snapchat-2120758615.webp',
    'Snapchat-2122658624.webp',
    'Snapchat-2145810629.webp',
    'Snapchat-2145982791.webp',
    'Snapchat-229640733.webp',
    'Snapchat-251908581.webp',
    'Snapchat-255374205.webp',
    'Snapchat-259467132.webp',
    'Snapchat-304118186.webp',
    'Snapchat-308886457.webp',
    'Snapchat-30899500.webp',
    'Snapchat-309958430.webp',
    'Snapchat-316382755.webp',
    'Snapchat-35801643.webp',
    'Snapchat-366545586.webp',
    'Snapchat-393329131.webp',
    'Snapchat-396387778.webp',
    'Snapchat-42023042.webp',
    'Snapchat-430370917.webp',
    'Snapchat-430744799.webp',
    'Snapchat-442525632.webp',
    'Snapchat-448978265.webp',
    'Snapchat-4561931.webp',
    'Snapchat-458561761.webp',
    'Snapchat-477197286.webp',
    'Snapchat-491403724.webp',
    'Snapchat-519820579.webp',
    'Snapchat-537768433.webp',
    'Snapchat-578823241.webp',
    'Snapchat-596602384.webp',
    'Snapchat-600238128.webp',
    'Snapchat-606125658.webp',
    'Snapchat-607039542.webp',
    'Snapchat-623488022.webp',
    'Snapchat-636754679.webp',
    'Snapchat-6591215.webp',
    'Snapchat-663246005.webp',
    'Snapchat-679708655.webp',
    'Snapchat-704239286.webp',
    'Snapchat-707338778.webp',
    'Snapchat-717928051.webp',
    'Snapchat-731549199.webp',
    'Snapchat-744593983.webp',
    'Snapchat-756641016.webp',
    'Snapchat-766136444.webp',
    'Snapchat-81075581.webp',
    'Snapchat-811061868.webp',
    'Snapchat-813476058.webp',
    'Snapchat-857428716.webp',
    'Snapchat-905286351.webp',
    'Snapchat-914202.webp',
    'Snapchat-915623506.webp'
];

// Video files - check which exist
const videoFiles = [
    'VID-20251114-WA0079.mp4',
    'VID-20251114-WA0080.mp4',
    'VID-20251114-WA0081.mp4',
    'VID-20251114-WA0082.mp4',
    'Snapchat-1029246640.mp4',
    'Snapchat-1043022632.mp4',
    'Snapchat-1048453331.mp4',
    'Snapchat-1175437378.mp4',
    'Snapchat-1232719909.mp4',
    'Snapchat-1280914835.mp4',
    'Snapchat-133566786.mp4',
    'Snapchat-14619504.mp4',
    'Snapchat-1513273442.mp4',
    'Snapchat-1516554116.mp4',
    'Snapchat-1517318989.mp4',
    'Snapchat-1518417031.mp4',
    'Snapchat-166226409.mp4',
    'Snapchat-1694944250.mp4',
    'Snapchat-174816772.mp4',
    'Snapchat-1758571974.mp4',
    'Snapchat-1759097515.mp4',
    'Snapchat-212928108.mp4',
    'Snapchat-244567173.mp4',
    'Snapchat-309434086.mp4',
    'Snapchat-319759324.mp4',
    'Snapchat-472749060.mp4',
    'Snapchat-482732312.mp4',
    'Snapchat-979149513.mp4'
];

// Countdown Timer
function updateCountdown() {
    const now = new Date();
    const diff = now - startDate;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Initialize countdown
updateCountdown();
setInterval(updateCountdown, 1000);

// Create floating hearts
function createHearts() {
    const container = document.getElementById('heartsContainer');
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 8 + 's';
        heart.style.animationDuration = (6 + Math.random() * 4) + 's';
        container.appendChild(heart);
    }
}

// Build Photo Gallery
function buildGallery() {
    const gallery = document.getElementById('gallery');
    
    imageFiles.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = `images/${image}`;
        img.alt = `Memory ${index + 1}`;
        img.loading = 'lazy';
        img.onclick = () => openLightbox('image', index);
        
        // Handle image load - hide shimmer
        img.onload = function() {
            this.classList.add('loaded');
            this.parentElement.classList.add('loaded');
        };
        
        // Handle image error - show placeholder but DON'T hide completely
        img.onerror = function() {
            // Mark as loaded to hide shimmer
            this.classList.add('loaded');
            this.parentElement.classList.add('loaded');
            // Keep the broken image but add error class for styling
            this.classList.add('image-error');
        };
        
        item.appendChild(img);
        gallery.appendChild(item);
    });
}

// Build Video Gallery with thumbnails
function buildVideos() {
    const grid = document.getElementById('videosGrid');
    
    videoFiles.forEach((video, index) => {
        const item = document.createElement('div');
        item.className = 'video-item';
        item.onclick = () => openLightbox('video', index);
        
        // Create thumbnail image
        const thumbImg = document.createElement('img');
        const thumbFilename = video.replace('.mp4', '_thumb.jpg');
        thumbImg.src = `images/${thumbFilename}`;
        thumbImg.alt = 'Video thumbnail';
        thumbImg.className = 'video-thumb';
        
        const videoEl = document.createElement('video');
        videoEl.src = `videos/${video}`;
        videoEl.muted = true;
        videoEl.preload = 'none';
        
        videoEl.onloadeddata = function() {
            this.parentElement.classList.add('loaded');
        };
        
        videoEl.onerror = function() {
            this.parentElement.classList.add('loaded');
        };
        
        const playBtn = document.createElement('div');
        playBtn.className = 'play-button';
        
        item.appendChild(thumbImg);
        item.appendChild(videoEl);
        item.appendChild(playBtn);
        grid.appendChild(item);
    });
}

// Lightbox functionality
let currentIndex = 0;
let currentType = 'image';
let allMedia = [];

function openLightbox(type, index) {
    currentType = type;
    currentIndex = index;
    allMedia = type === 'image' ? imageFiles.map(f => ({type: 'image', src: `images/${f}`})) : 
                             videoFiles.map(f => ({type: 'video', src: `videos/${f}`}));
    
    updateLightboxContent();
    document.getElementById('lightbox').classList.add('active');
}

function updateLightboxContent() {
    const content = document.getElementById('lightboxContent');
    const media = allMedia[currentIndex];
    
    if (media.type === 'image') {
        content.innerHTML = `<img src="${media.src}" alt="Memory">`;
    } else {
        content.innerHTML = `<video src="${media.src}" controls autoplay></video>`;
    }
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    const content = document.getElementById('lightboxContent');
    content.innerHTML = '';
}

function navigateLightbox(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = allMedia.length - 1;
    if (currentIndex >= allMedia.length) currentIndex = 0;
    updateLightboxContent();
}

// Music Player
let isPlaying = false;
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicIcon = document.getElementById('musicIcon');

// Set volume low
bgMusic.volume = 0.3;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicIcon.textContent = '🎵';
    } else {
        bgMusic.play().catch(e => console.log('Audio autoplay blocked'));
        musicIcon.textContent = '🎶';
    }
    isPlaying = !isPlaying;
});

// Lightbox event listeners
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', () => navigateLightbox(-1));
document.getElementById('lightboxNext').addEventListener('click', () => navigateLightbox(1));

document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!document.getElementById('lightbox').classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
});

// Initialize
createHearts();
buildGallery();
buildVideos();

// Log info
console.log(`Loaded ${imageFiles.length} images and ${videoFiles.length} videos`);
