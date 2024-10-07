
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
    ___     __     ______ _  __  ___     _   __ ____   ____   ____ ___ 
   /   |   / /    / ____/| |/ / /   |   / | / // __ \ / __ \ /  _//   |
  / /| |  / /    / __/   |   / / /| |  /  |/ // / / // /_/ / / / / /| |
 / ___ | / /___ / /___  /   | / ___ | / /|  // /_/ // _, _/_/ / / ___ |
/_/  |_|/_____//_____/ /_/|_|/_/  |_|/_/ |_//_____//_/ |_|/___//_/  |_|
                                                                       
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
