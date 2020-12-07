/**
 * Class Declaration
 * 
 * @class  GamblingSimulation
 * @description  Computing Gambling Simalation problem
 */
class GamblingSimulation
{
    /**
     * Variable Declarations
     */
    stake=0;
    bet=0;
    goal=0;
    trial=0;
    no_of_wins=0;
    no_of_loss=0;

    /**
     * @constructor
     * @description Displays welcome message
     */
    constructor()
    {
        console.log("=======================================");
        console.log("Welcome to Gambling Simulation Problem")
        console.log("=======================================");
    }
    /**
     * Method to set readline object
     * 
     * @method setup
     * @description Declaring readline object
     * @return readline
     * Setting readline to get input from user
     */
    setup()
    {
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });
        return readline;
    }
    /**
     * Method to read number of trials
     * 
     * @method get_input
     * @description Get input from User
     * Getting No of Trials from user
     */
    get_trial(read) {
        return new Promise((resolve, reject) => {
            read.question("How many trials you want ? ", (trials) => {
                if(typeof trials === undefined || isNaN(trials) ){
                    return reject("Please enter valid input");
                }
                else{
                    this.trial=trials;
                    return resolve(trials);
                }
            });
        });
    }
    /**
     * Method to read Stake
     * 
     * @method get_stake
     * @description Get input from User
     * Getting Stake Amount from user
     */
    get_stake(read) {
        return new Promise((resolve, reject) => {
            read.question("Enter Stake : ", (stake) => {
                if(typeof stake === undefined || isNaN(stake) ){
                    return reject("Please enter valid input");
                }
                else{
                    this.stake=stake;
                    return resolve(stake);
                }
            });
        });
    }
    /**
     * Method to read bet
     * 
     * @method get_bet
     * @description Get input from User
     * Getting Bet Amount from user
     */
    get_bet(read) {
        return new Promise((resolve, reject) => {
            read.question("Enter Bet : ", (bet) => {
                if(typeof bet === undefined || isNaN(bet) ){
                    return reject("Please enter valid input");
                }
                else{
                    this.bet=bet;
                    return resolve(bet);
                }
            });
        });
    }
    /**
     * Method to read goal
     * 
     * @method get_goal
     * @description Get input from User
     * Getting Goal Amout from user
     */
    get_goal(read) {
        return new Promise((resolve, reject) => {
            read.question("Enter Goal : ", (goal) => {
                if(typeof goal === undefined || isNaN(goal) ){
                    return reject("Please enter valid input");
                }
                else{
                    this.goal=goal;
                    return resolve(goal);
                }
            });
        });
    }
    /**
     * Method to read inputs from user
     * 
     * @method get_input
     * @description Get input from User
     * Getting Stake, No of Trials, Bet and Goal Amount from user
     * Performed validations to enter numeric data
     */        
    get_input(read)
    {
        this.get_trial(read)
        .then((stake) => { console.log(stake); return this.get_stake(read); })
        .then((bet) => { console.log(bet); return this.get_bet(read); })
        .then((goal) => { console.log(goal); return this.get_goal(read); })
        .then(result => { console.log(result); read.close() })
        .then((game_result) => { console.log(game_result); return this.play(this.trial,this.stake,this.bet,this.goal); })
        .catch(error => { 
            console.error("Please enter valid input");
        });
    
    }
    /**
     * Method to check either win or loss
     * 
     * @method play
     * @description Playing game and checking win or loss
     * If Win number of wins will incremented
     * If Loss number of losses will be incremented
     */
    play(trials, stake, bet, goal)
    {
        var win=1;
        var bets=0;
        var half_of_stake=Math.floor(stake/2);

        for(var i=0; i<trials; i++)
        {
            this.cash=stake;     //Putting value of Stake in cash variable    
            while (this.cash > 0 && this.cash < goal || this.cash <= half_of_stake)
            {
                bets++;
                var random = Math.floor(Math.random() * 2);     //Getting 0 or 1 by using random function
                /**
                 * Checking win or loss by random value
                 */
                if(random==win)
                {
                    this.cash=parseInt(this.cash)+parseInt(bet);
                }
                else
                {
                    this.cash=parseInt(this.cash)-parseInt(bet);
                }
            }
            if (this.cash == goal)
            {
                this.no_of_wins++;
            }
        }
        console.clear();
        console.log("=======================================");
        console.log("Game Results")
        console.log("=======================================");
        console.log(this.no_of_wins + " wins of " + trials);
        console.log(this.no_of_loss + " loss of " + trials);
        console.log("Game won by = " + 100.0 * this.no_of_wins / trials+" %");
        console.log("Available Cash = " + this.cash);
    }
}


let gambler_object=new GamblingSimulation();

readline=gambler_object.setup();
gambler_object.get_input(readline);