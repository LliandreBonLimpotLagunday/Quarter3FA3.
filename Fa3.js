function generateItems() {
    let num1 = Math.ceil(Math.random() * 20);
    let num2 = Math.ceil(Math.random() * 20);
    let num3 = Math.ceil(Math.random() * 20);
    
    let biggest = Math.max(num1, num2, num3);
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letter = alphabet[num1 - 1] || "Z";
    let totalMinutes = num2 * num3;
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;
    
    let foods = ["Pizza", "Burger", "Pasta", "Sushi", "Tacos", "Salad", "Steak", "Curry", "Soup", "Sandwich"];
    let drinks = ["Tea", "Coffee", "Juice", "Soda", "Milkshake", "Smoothie", "Wine", "Beer", "Water", "Lemonade"];
    
    let foodChoice = foods[num1 % foods.length];
    let drinkChoice = drinks[num3 % drinks.length];
    
    document.getElementById("biggest-number").innerText = `Biggest number: ${biggest}`;
    document.getElementById("alphabet-letter").innerText = `The ${num1}th letter in the alphabet: ${letter}`;
    document.getElementById("time-conversion").innerText = `Time: ${totalMinutes} minutes (${hours} hours and ${minutes} minutes)`;
    document.getElementById("story").innerText = `You get to enjoy a delicious ${foodChoice} with a refreshing ${drinkChoice}!`;
}
