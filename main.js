const main = document.querySelector('main');

var joke1 = "What’s a Jedi’s favourite programming language? JabbaScript.";
var joke2 = "I don’t enjoy computer jokes. Not one bit.";
var joke3 = "Why did the programmer quit his job? Because he didn’t get arrays.";
var ending = "That's all folks!";

const template = `
    <section>
        <h1>My Jokes</h1>
        <ol>
            <li>${joke1}</li>
            <li>${joke2}</li>
            <li>${joke3}</li>
        </ol>
    </section>
`;

main.innerHTML = template;

const p = document.createElement('p');
p.textContent = ending;
main.appendChild(p);