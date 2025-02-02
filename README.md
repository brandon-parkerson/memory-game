# Memory Game


This app is a memory game where in the player clicks the gif that they have not chosen yet. Once the player clicks the same gif twice, the score is set back to 0.

## Challenges making this

The biggest challenge I faced was how to get the gifs to re-render and shuffle after the player clicks a gif. The problem was that I forgot to utilize useState. I was so focused on useEffect that it gave me tunnel vision. I also had to lift the scores from the Cards component so that it communicates to the Scores component through the App parent component. 

## Going Forward

I will use this project as a reference in lifting and when to use useEffect and useState. 
