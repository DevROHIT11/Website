// Card data (simulating database content)
const cardData = [
    {
        id: 1,
        title: "Sumo Bot",
        techSpecs: {
            weightCategory: "3kg, 5kg, 8kg, 15kg",
            motors: "Mabuchi RZ735 with custom high-torque gearbox",
            control: "Wired & Wireless",
            mechanism: "Chain drive",
            powerSupply: "12VDC to 24VDC"
        }
    },
    {
        id: 2,
        title: "Ocean Exploration",
        techSpecs: {
            weightCategory: "3kg, 5kg",
            motors: "Mabuchi RS775 with high-torque gearbox ",
            control: "Wired & Wireless",
            mechanism: "Chain drive, using a modified sumo bot with a clamp to achieve high torque and precision while following competition rules",
            powerSupply: "12VDC to 24VDC "
        }
    },
    {
        id: 3,
        title: "Desert Safari",
        techSpecs: {
            weightCategory: "2.5kg, 3kg, 5kg",
            motors: "Generic motors with Torque series gearboxes  ",
            control: "Wired & Wireless",
            mechanism: "Belt drive, direct transmission",
            wheels:"Na",
            powerSupply: "Na"
        }
    },
    {
        id: 4,
        title: "Forest Retreat",
        techSpecs: {
            weightCategory: "3kg, 5kg, 8kg, 15kg",
            motors: "Mabuchi RS775 With Custom Gearbox.",
            // control: "Wired & Wireless",
            // mechanism: "Chain drive",
            // powerSupply: "12VDC to 24VDC"
        }
    }
];

// Get DOM elements
const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const techSpecsContainer = document.createElement('div');
techSpecsContainer.className = 'tech-specs';

// Add click event to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        const cardId = parseInt(card.getAttribute('data-id'));
        const cardInfo = cardData.find(item => item.id === cardId);
        
        if (cardInfo) {
            // Set title and description
            modalTitle.textContent = cardInfo.title;
            modalDescription.textContent = cardInfo.description;
            
            // Create and append technical specifications
            const existingTechSpecs = document.querySelector('.tech-specs');
            if (existingTechSpecs) {
                existingTechSpecs.remove();
            }
            
            const techSpecsDiv = document.createElement('div');
            techSpecsDiv.className = 'tech-specs';
            
            const heading = document.createElement('h3');
            heading.textContent = 'Technical Specifications:';
            techSpecsDiv.appendChild(heading);
            
            const specsList = document.createElement('ul');
            
            const specs = cardInfo.techSpecs;
            for (const [key, value] of Object.entries(specs)) {
                const listItem = document.createElement('li');
                // Format the key from camelCase to Title Case with spaces
                const formattedKey = key.replace(/([A-Z])/g, ' $1')
                    .replace(/^./, str => str.toUpperCase());
                listItem.textContent = `${formattedKey}: ${value}`;
                specsList.appendChild(listItem);
            }
            
            techSpecsDiv.appendChild(specsList);
            document.querySelector('.modal-content').appendChild(techSpecsDiv);
            
            // Show modal
            modal.classList.add('active');
        }
    });
});

// Close modal when clicking anywhere
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Prevent closing when clicking inside modal content (optional)
document.querySelector('.modal-content').addEventListener('click', (e) => {
    e.stopPropagation();
});