const elementy = [
    [true, true, true, false, false, false, false, false, false, false],
    [false, false, true, false, true, true, true, false, false, false],
    [false, false, true, false, false, false, true, false, true, true],
    [false, false, true, true, true, false, true, false, true, true],
    [false, false, false, false, true, false, true, true, true, false],
    [false, false, false, false, true, false, false, false, true, false],
    [false, true, true, true, true, false, false, false, true, false],
    [false, false, false, false, true, true, true, true, true, false],
    [false, false, false, false, false, false, false, false, true, false],
    [false, false, false, false, false, false, false, false, true, false]
]
const lokalizacjaGracza = [0, 0];
document.querySelectorAll("tr")[lokalizacjaGracza[0]].querySelectorAll("td")[lokalizacjaGracza[1]].style.backgroundColor = "rgb(4, 255, 4)";
addEventListener("keydown", function (zdarzenie) {
    if (zdarzenie.code === "ArrowUp" && elementy[lokalizacjaGracza[0] - 1][lokalizacjaGracza[1]]) {
        document.querySelectorAll("tr")[lokalizacjaGracza[0]].querySelectorAll("td")[lokalizacjaGracza[1]].style.backgroundColor = "white";
        lokalizacjaGracza[0] -= 1;
        document.querySelectorAll("tr")[lokalizacjaGracza[0]].querySelectorAll("td")[lokalizacjaGracza[1]].style.backgroundColor = "rgb(4, 255, 4)";
    }
    if (zdarzenie.code === "ArrowDown" && elementy[lokalizacjaGracza[0] + 1][lokalizacjaGracza[1]]) {
        document.querySelectorAll("tr")[lokalizacjaGracza[0]].querySelectorAll("td")[lokalizacjaGracza[1]].style.backgroundColor = "white";
        lokalizacjaGracza[0] += 1;
        document.querySelectorAll("tr")[lokalizacjaGracza[0]].querySelectorAll("td")[lokalizacjaGracza[1]].style.backgroundColor = "rgb(4, 255, 4)";
    }
    if (zdarzenie.code === "ArrowRight" && elementy[lokalizacjaGracza[0]][lokalizacjaGracza[1] + 1]) {
        document.querySelectorAll("tr")[lokalizacjaGracza[0]].querySelectorAll("td")[lokalizacjaGracza[1]].style.backgroundColor = "white";
        lokalizacjaGracza[1] += 1;
        document.querySelectorAll("tr")[lokalizacjaGracza[0]].querySelectorAll("td")[lokalizacjaGracza[1]].style.backgroundColor = "rgb(4, 255, 4)";
    }
    if (zdarzenie.code === "ArrowLeft" && elementy[lokalizacjaGracza[0]][lokalizacjaGracza[1] - 1]) {
        document.querySelectorAll("tr")[lokalizacjaGracza[0]].querySelectorAll("td")[lokalizacjaGracza[1]].style.backgroundColor = "white";
        lokalizacjaGracza[1] -= 1;
        document.querySelectorAll("tr")[lokalizacjaGracza[0]].querySelectorAll("td")[lokalizacjaGracza[1]].style.backgroundColor = "rgb(4, 255, 4)";
    }
    if (lokalizacjaGracza[0] === 9 && lokalizacjaGracza[1] === 8) {
        setTimeout(() => alert("wygrałeś"), 200)
    }
})
