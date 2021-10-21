const hideAndShowClickFocus = (Onclickelementid, elementtobehiddenid) => {
    const ProfileButton = document.getElementById(Onclickelementid);
    const ProfiledropDown = document.getElementById(elementtobehiddenid);
    ProfileButton.addEventListener('click', () => {
        console.log(ProfiledropDown.className);
        ProfiledropDown.className.search('hidden') == -1
            ? (ProfiledropDown.className += 'hidden')
            : (ProfiledropDown.className = ProfiledropDown.className.replace(
                  'hidden',
                  ''
              ));
    });
    ProfileButton.addEventListener('focusout', () => {
        ProfiledropDown.className.search('hidden') == -1
            ? (ProfiledropDown.className += 'hidden')
            : '';
    });
};
hideAndShowClickFocus('user-menu-button', 'ProfileMenu');
hideAndShowClickFocus('Open_main_menu', 'mobile-menu');
