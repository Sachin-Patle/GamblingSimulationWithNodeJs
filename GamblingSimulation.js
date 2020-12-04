const { exit } = require("process");

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
    stake=100;
    bet=1;
    no_of_wins=0;
    no_of_loss=0;
    result=0;

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
     * Method to check either win or loss
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
     * Method to check either win or loss
     * 
     * @method get_input
     * @description Get input from User
     * Getting Stake, No of Trials, Bet and Goal Amount from user
     * Performed validations to enter numeric data
     */
    get_input(read)
    {
        let that=this;
       this.read=read;
        read.question("How many trials you want ? ", function get_trial(trials) {
            if(trials>0){
                read.question("Enter Stake : ", function get_stake(stake) {
                    if(stake>0){
                        read.question("Enter Bet : ", function get_bet(bet) {
                            if(bet>0){
                                read.question("Enter Your Goal Amount : ", function get_goal(goal) {
                                    if(goal>0){
                                        // console.log("success ",that.win_or_loss);
                                        that.play(trials, stake, bet, goal);
                                    }
                                    console.log(`${trials}, is a trial and stake is ${stake}`);
                                    read.close();
                                });
                            }
                        });
                    }
                });
            }
            
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

        for(var i=0; i<trials; i++)
        {
            this.cash=stake;     //Putting value of Stake in cash variable    
            while (this.cash > 0 && this.cash < goal)
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
        console.log("Game won by = " + 100.0 * this.no_of_wins / trials+" %");
        console.log("Avg  bets           = " + 1.0 * bets / trials);
    }
}

let gambler_object=new GamblingSimulation();

readline=gambler_object.setup();
gambler_object.get_input(readline);