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
    static stake=100;
    static bet=1;

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
     * @method win_or_loss
     * @description Check win or loss
     */
    win_or_loss()
    {
        var random = Math.floor(Math.random() * 2);
        
        if(random==1)
        {
            console.log("Win !");
        }
        else
        {
            console.log("Loss !");
        }
    }
}
let gambler_object=new GamblingSimulation();
gambler_object.win_or_loss();