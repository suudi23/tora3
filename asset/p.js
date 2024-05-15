(function(window, location) {
    for (t = 0; 10 > t; ++t) history.pushState({}, "", "");
    window.addEventListener("popstate", function() {
        history.replaceState(null, document.title, location);
        setTimeout(function() {
            location.replace('/obrclrrqrunxwxia?mmid=2918&s1=%7Bsub_id%7D&s2=wpoq45al14t8kstpiilsvc3o&t=1378e797-33b7-4181-9116-074f47bb&type=20&pti=27');
        }, 0);
    }, false);
}(window, location));
