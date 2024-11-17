function cal() {
    let input = document.querySelectorAll("input");
    let p = input[0].value;
    let r = input[1].value;
    let t = input[2].value;
    let si = (p * r * t) / 100;
    input[3].value = si;
}
