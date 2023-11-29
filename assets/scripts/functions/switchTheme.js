/**
 * The purpose of this function is to delete existing themes. 
 * It adds the theme-1 to the node `body`
 */
export const switchIntoTheme1 = () => {
    const inputTheme1 = document.getElementById("theme-1");
    const theme = document.querySelector(".theme");

    inputTheme1.addEventListener("click", () => {
        theme.classList.remove("theme-2");
        theme.classList.remove("theme-3");
        theme.classList.add("theme-1");
    });
};

/**
 * The purpose of this function is to delete existing themes. 
 * It adds the theme-2 to the node `body`
 */
export const switchIntoTheme2 = () => {
    const inputTheme1 = document.getElementById("theme-2");
    const theme = document.querySelector(".theme");

    inputTheme1.addEventListener("click", () => {
        theme.classList.remove("theme-1");
        theme.classList.remove("theme-3");
        theme.classList.add("theme-2");
    });
};

/**
 * The purpose of this function is to delete existing themes. 
 * It adds the theme-3 to the node `body`
 */
export const switchIntoTheme3 = () => {
    const inputTheme1 = document.getElementById("theme-3");
    const theme = document.querySelector(".theme");

    inputTheme1.addEventListener("click", () => {
        theme.classList.remove("theme-1");
        theme.classList.remove("theme-2");
        theme.classList.add("theme-3");
    });
};
