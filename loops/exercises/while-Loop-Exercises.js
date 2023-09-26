//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync')
let startingFuelLevel = 0
let numAstronauts = 0
let altitudeShuttle = 0





/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
  startingFuelLevel = Number(input.question('What is your starting fuel level?\n'))
  while (startingFuelLevel<5000 || startingFuelLevel>30000) {
    startingFuelLevel = Number(input.question('Sorry, ${startingFuelLevel} is not a valid fuel level input. Please enter a fuel level greater than 5000 and less than 30000: '))
  }



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
numAstronauts = Number(input.question("Please enter number of astronauts on board:\n" )) 
while (numAstronauts>7) {
    numAstronauts = Number(input.question("Sorry, that number is not acceptable. Please enter a value less than or equal to 7: "))
  }
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (startingFuelLevel>0 && altitudeShuttle <2000){
  startingFuelLevel = startingFuelLevel-(100*numAstronauts)
  altitudeShuttle = altitudeShuttle+50
}
console.log('Final fuel level is: '+startingFuelLevel)
console.log('Final altitude is: '+altitudeShuttle)


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
if (altitudeShuttle>=2000) {
  console.log("Orbit achieved!")
} else {
  console.log("Failed to reach orbit")
}