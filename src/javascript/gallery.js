  // Image gallery data with MULTIPLE categories per image
  const galleryItems = [
    // group-photos
    {
        id: 1,
        title: "Team Photo 2023",
        // Each image can have multiple categories in an array
        categories: ["Group-Photos", "all" , "aissms"],
        imageUrl: "src/Assets/gallery/Group Photos/1694715063934-01.jpeg" // Replace with your image path
    },
    {
        id: 2,
        title: "Traditional Ceremony",
        categories: ["all", "Group-Photos"],
        imageUrl: "src/Assets/gallery/Group Photos/20240215021143_IMG_2581.jpg" // Replace with your image path
    },
    {
        id: 3,
        title: "Competition Performance",
        categories: ["Group-Photos", "all"],
        imageUrl: "src/Assets/gallery/Group Photos/IMG-20240810-WA0018.jpg" // Replace with your image path
    },
    {
        id: 4,
        title: "New Member Drive",
        categories: ["Group-Photos", "all" , "tradition"],
        imageUrl: "src/Assets/gallery/Group Photos/IMG-20241012-WA0106.jpg" // Replace with your image path
    },
    {
        id: 5,
        title: "Championship Trophy",
        categories: ["Group-Photos", "all" , "aissms"],
        imageUrl: "src/Assets/gallery/Group Photos/IMG-20250220-WA0013.jpg" // Replace with your image path
    },
    {
        id: 6,
        title: "AISSMS Campus Event",
        categories: ["Group-Photos", "all"],
        imageUrl: "src/Assets/gallery/Group Photos/IMG_20241020_164551734.jpg" // Replace with your image path
    },
    {
        id: 7,
        title: "Keystone College Team",
        categories: ["Group-Photos", "all" , "aissms"],
        imageUrl: "src/Assets/gallery/Group Photos/IMG-20250220-WA0026.jpg" // Replace with your image path
    },
    {
        id: 8,
        title: "VIT Pune Competition",
        categories:["Group-Photos", "all" , "winning" , "keystone"],
        imageUrl: "src/Assets/gallery/Group Photos/IMG-20250228-WA0022.jpg" // Replace with your image path
    },
    {
        id: 9,
        title: "VJTI Annual Event",
        categories: ["Group-Photos", "all"],
        imageUrl: "src/Assets/gallery/Group Photos/IMG-20250228-WA0046.jpg" // Replace with your image path
    },
    {
        id: 10,
        title: "Award Ceremony",
        categories: ["Group-Photos", "all"],
        imageUrl: "src/Assets/gallery/Group Photos/IMG-20250324-WA0007.jpg" // Replace with your image path
    },
    {
        id: 11,
        title: "Team Huddle",
        categories: ["Group-Photos", "all" , "vit"],
        imageUrl: "src/Assets/gallery/Group Photos/IMG-20250407-WA0007.jpg" // Replace with your image path
    },
    {
        id: 12,
        title: "Recruitment Drive",
        categories: ["Group-Photos", "all" , "winning"],
        imageUrl: "src/Assets/gallery/Group Photos/IMG-20250407-WA0010.jpg" // Replace with your image path
    },
    {
        id: 13,
        title: "Recruitment Drive",
        categories: ["Group-Photos", "all" ],
        imageUrl: "src/Assets/gallery/Group Photos/IMG-20250407-WA0012.jpg" // Replace with your image path
    }
    ,
    {
        id: 14,
        title: "Recruitment Drive",
        categories: ["Group-Photos", "all"],
        imageUrl: "src/Assets/gallery/Group Photos/IMG-20250407-WA0019.jpg" // Replace with your image path
    }
    ,
    {
        id: 15,
        title: "Recruitment Drive",
        categories: ["Group-Photos", "all" , "aissms"],
        imageUrl: "src/Assets/gallery/Group Photos/IMG-20250220-WA0024.jpg" // Replace with your image path
    }
    ,
    {
        id: 16,
        title: "Recruitment Drive",
        categories: ["Group-Photos", "all ", "vjti"],
        imageUrl: "src/Assets/gallery/Group Photos/IMG_20241223_205053478_HDR.jpg" // Replace with your image path
    }
    ,
    {
        id: 17,
        title: "Recruitment Drive",
        categories: ["Group-Photos", "all" , "vit"],
        imageUrl: "src/Assets/gallery/Group Photos/IMG_20250329_205723.jpg" // Replace with your image path
    },

    // tradition
  
    {
        id: 18,
        title: "Recruitment Drive",
        categories:  ["tradition", "all"],
        imageUrl: "src/Assets/gallery/Tradition/20241012_122314-1.jpeg" // Replace with your image path
    },
    {
        id: 19,
        title: "Recruitment Drive",
        categories:  ["tradition", "all"],
        imageUrl: "src/Assets/gallery/Tradition/IMG-20241012-WA0098.jpg" // Replace with your image path
    },
    {
        id: 20,
        title: "Recruitment Drive",
        categories:  ["tradition", "all"],
        imageUrl: "src/Assets/gallery/Tradition/20241012_120959.jpeg" // Replace with your image path
    },
    {
        id: 21,
        title: "Recruitment Drive",
        categories:  ["tradition", "all"],
        imageUrl: "src/Assets/gallery/Tradition/IMG-20250406-WA0047.jpg" // Replace with your image path
    },

    // IN action
    {
        id: 22,
        title: "Recruitment Drive",
        categories:  ["in-action", "all"],
        imageUrl: "src/Assets/gallery/In action/IMG-20241022-WA0002.jpg" // Replace with your image path
    },
    {
        id: 23,
        title: "Recruitment Drive",
        categories:  ["in-action", "all"],
        imageUrl: "src/Assets/gallery/In action/IMG-20250219-WA0002.jpg" // Replace with your image path
    },
    {
        id: 24,
        title: "Recruitment Drive",
        categories:  ["in-action", "all"  , "keystone"],
        imageUrl: "src/Assets/gallery/In action/IMG-20250228-WA0059.jpg" // Replace with your image path
    },
    {
        id: 25,
        title: "Recruitment Drive",
        categories:  ["in-action", "all" , "vit"],
        imageUrl: "src/Assets/gallery/In action/IMG-20250407-WA0011.jpg" // Replace with your image path
    }
    ,
    {
        id: 26,
        title: "Recruitment Drive",
        categories:  ["in-action", "all"],
        imageUrl: "src/Assets/gallery/In action/IMG-20250221-WA0034.jpg" // Replace with your image path
    },
    {
        id: 27,
        title: "Recruitment Drive",
        categories:  ["in-action", "all"],
        imageUrl: "src/Assets/gallery/In action/IMG-20250219-WA0003.jpg" // Replace with your image path
    },
    {
        id: 28,
        title: "Recruitment Drive",
        categories:  ["in-action", "all" , "vit"],
        imageUrl: "src/Assets/gallery/In action/IMG-20250407-WA0014.jpg" // Replace with your image path
    },
    {
        id: 29,
        title: "Recruitment Drive",
        categories:  ["in-action", "all"],
        imageUrl: "src/Assets/gallery/In action/IMG-20250407-WA0015.jpg" // Replace with your image path
    },
    {
        id: 30,
        title: "Recruitment Drive",
        categories:  ["in-action", "all" , "vjti"],
        imageUrl: "src/Assets/gallery/In action/IMG_20241223_130421218_HDR_PORTRAIT.jpg" // Replace with your image path
    },
    {
        id: 31,
        title: "Recruitment Drive",
        categories:  ["in-action", "all" , "vjti"],
        imageUrl: "src/Assets/gallery/In action/IMG_20241223_194521214_HDR.jpg" // Replace with your image path
    },
    
    //Recruitment 
    {
        id: 32,
        title: "Recruitment Drive",
        categories:  ["recruitment", "all"],
        imageUrl: "src/Assets/gallery/Recruitment/IMG-20240920-WA0009.jpg" // Replace with your image path
    },
    {
        id: 33,
        title: "Recruitment Drive",
        categories:  ["recruitment", "all"],
        imageUrl: "src/Assets/gallery/Recruitment/IMG_20240920_123830.jpg" // Replace with your image path
    }

    // winning
    ,
    {
        id: 34,
        title: "Recruitment Drive",
        categories:  ["winning", "all"],
        imageUrl: "src/Assets/gallery/Winning/IMG-20250407-WA0003.jpg" // Replace with your image path
    },

    // AISSMS
   
    {
        id: 35,
        title: "Recruitment Drive",
        categories:  ["aissms", "all"],
        imageUrl: "src/Assets/gallery/AISSMS/IMG-20250220-WA0022.jpg" // Replace with your image path
    },
   
//    KEYSTONE
    {
        id: 36,
        title: "Recruitment Drive",
        categories:  ["keystone", "all"],
        imageUrl: "src/Assets/gallery/Keystone College/IMG-20250228-WA0011.jpg" // Replace with your image path
    },
    {
        id: 37,
        title: "Recruitment Drive",
        categories:  ["keystone", "all"],
        imageUrl: "src/Assets/gallery/Keystone College/IMG-20250228-WA0040.jpg" // Replace with your image path
    }
    ,
    {
        id: 38,
        title: "Recruitment Drive",
        categories:  ["keystone", "all"],
        imageUrl: "src/Assets/gallery/Keystone College/IMG-20250228-WA0046.jpg" // Replace with your image path
    },
    {
        id: 39,
        title: "Recruitment Drive",
        categories:  ["keystone", "all"],
        imageUrl: "src/Assets/gallery/Keystone College/IMG-20250228-WA0052.jpg" // Replace with your image path
    },
    {
        id: 40,
        title: "Recruitment Drive",
        categories:  ["keystone", "all"],
        imageUrl: "src/Assets/gallery/Keystone College/IMG-20250301-WA0001.jpg" // Replace with your image path
    },

    // VIT ,PUNE
    {
        id: 41,
        title: "Recruitment Drive",
        categories:  ["vit", "all"],
        imageUrl: "src/Assets/gallery/VIT, Pune/IMG-20250407-WA0013.jpg" // Replace with your image path
    },

    
    
    
];

// Function to create gallery items
function createGalleryItem(item) {
    // Create a data-categories attribute with all categories joined by spaces
    const categoriesString = item.categories.join(' ');
    
    return `
        <div class="gallery-item" data-categories="${categoriesString}">
            <img src="${item.imageUrl}" alt="${item.title}">
        </div>
    `;
}

// Function to display gallery items based on selected category
function displayGalleryItems(category = 'all') {
    const galleryContainer = document.getElementById('gallery');
    galleryContainer.innerHTML = '';
    
    let itemsToDisplay;
    
    if (category === 'all') {
        // Show all items
        itemsToDisplay = galleryItems;
    } else {
        // Filter items that include the selected category
        itemsToDisplay = galleryItems.filter(item => 
            item.categories.includes(category)
        );
    }
    
    // Add each filtered item to the gallery
    itemsToDisplay.forEach(item => {
        galleryContainer.innerHTML += createGalleryItem(item);
    });
}

// Initialize gallery when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Display all items initially
    displayGalleryItems();
    
    // Add event listeners to filter buttons
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter category
            const filterCategory = button.getAttribute('data-filter');
            
            // Display filtered items
            displayGalleryItems(filterCategory);
        });
    });
});


  