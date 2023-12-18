game.splash("Let's calculate the area of a trapezoid!")
let base1 = game.askForNumber("What is the base? (cm)")
let base2 = game.askForNumber("What is the top base? (cm)")
let height = game.askForNumber("What is the height? (cm)")
let area = (base1 + base2) % 2 * height
game.splash("The area of the trapezoid with base " + base1 + "cm and top base " + base2 + "cm and height " + height + "cm is " + area + " cm^2")
