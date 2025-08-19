document.addEventListener('DOMContentLoaded', () => {
    const showMainBtn = document.getElementById('show-main-btn');
    if (showMainBtn) {
        showMainBtn.addEventListener('click', displayContent);
    }
    setupFloatingCollage();
});

async function displayContent() {
    const contentArea = document.getElementById('content-area');
    const efemerideContainer = document.getElementById('efemeride-card-container');
    const logrosContainer = document.getElementById('logros-container');
    const audioPlayer = document.getElementById('himno-audio');

    const showMainBtn = document.getElementById('show-main-btn');
    if (showMainBtn) {
        showMainBtn.classList.add('fade-out');
        setTimeout(() => {
            showMainBtn.style.display = 'none'; // Remove from layout after animation
        }, 300);
    }
    contentArea.classList.add('visible');

    const hasEfeméride = await mostrarEfemérideDelDia(efemerideContainer);
    await mostrarLogrosDestacados(logrosContainer);

    if (hasEfeméride) {
        audioPlayer.classList.remove('hidden');
        audioPlayer.play().catch(e => console.error("Error al reproducir audio:", e));
    }
}

async function obtenerDatos(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error al obtener los datos desde ${url}:`, error);
        return null;
    }
}

function crearEfemérideHTML(efemeride) {
    const imagenSrc = efemeride.imagen || 'carpincho.jpeg';
    const altText = efemeride.descripcion || 'Imagen de efeméride';
    return `
        <figure class="efemeride-figure">
            <img src="${imagenSrc}" alt="${altText}" class="efemeride-image">
        </figure>
        <div class="efemeride-info">
            <p class="efemeride-fecha">${efemeride.fecha}</p>
            <h2 class="efemeride-descripcion">${efemeride.descripcion}</h2>
        </div>
    `;
}

function crearLogroHTML(logro) {
    return `
        <div class="logro-item">
            <p class="logro-descripcion">${logro.descripcion}</p>
            <p class="logro-fecha">${logro.fecha}</p>
        </div>
    `;
}

async function mostrarEfemérideDelDia(container) {
    if (!container) return false;
    container.innerHTML = '<p class="text-white">Buscando glorias pasadas...</p>';
    const efemerides = await obtenerDatos('efemerides.json');

    if (!efemerides) {
        container.innerHTML = '<p class="text-red-400">Error al cargar las efemérides.</p>';
        return false;
    }

    const hoy = new Date();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    const fechaActual = `${mes}-${dia}`;

    const efemerideDelDia = efemerides.find(e => e.fecha.substring(5) === fechaActual);

    if (efemerideDelDia) {
        container.parentElement.classList.add('efemeride-card');
        container.innerHTML = crearEfemérideHTML(efemerideDelDia);
        return true;
    } else {
        container.innerHTML = `
            <div class="no-efemeride-mensaje">
                <svg class="empty-state-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <p>Un día como hoy aún no nos hemos llenado de gloria</p>
            </div>
        `;
        return false;
    }
}

async function mostrarLogrosDestacados(container) {
    if (!container) return;
    const logros = await obtenerDatos('logros.json');

    if (!logros || logros.length === 0) {
        container.style.display = 'none';
        return;
    }

    const logrosHTML = logros.map(crearLogroHTML).join('');
    container.innerHTML = `<h3>Logros Destacados</h3><div class="logros-list">${logrosHTML}</div>`;
}

function setupFloatingCollage() {
    const collageImages = document.querySelectorAll('#floating-collage-container img');
    const container = document.getElementById('floating-collage-container');

    if (!container || collageImages.length === 0) return;

    collageImages.forEach(img => {
        const x = Math.random() * (window.innerWidth - 150);
        const y = Math.random() * (window.innerHeight - 150);
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
        img.vx = (Math.random() - 0.5) * 0.4;
        img.vy = (Math.random() - 0.5) * 0.4;
    });

    function animate() {
        collageImages.forEach(img => {
            let newX = img.offsetLeft + img.vx;
            let newY = img.offsetTop + img.vy;

            if (newX <= 0 || (newX + img.width) >= window.innerWidth) {
                img.vx *= -1;
            }
            if (newY <= 0 || (newY + img.height) >= window.innerHeight) {
                img.vy *= -1;
            }

            img.style.left = `${newX}px`;
            img.style.top = `${newY}px`;
        });
        requestAnimationFrame(animate);
    }

    animate();
}