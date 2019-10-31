/**
 * # Game stages definition file
 * Copyright(c) 2019 Lenka <>
 * MIT Licensed
 *
 * Stages are defined using the stager API
 *
 * http://www.nodegame.org
 * ---
 */

module.exports = function(stager, settings) {

     stager
        // This is warmUp phase of the code 
        .next('warmUp')
        .step('survey')
        .step('roleTaking')
        .step('instructions')
        
        .repeat('wallet', settings.REPEAT)
        .step('eventLottery')
        .step('solvingEvents')
        .step('checkSolutionValidity')
        .step('roundFeedBack')
        .step('roundFeeling')
        
        .next('end')
        .step('gameFeedBack')
        .step('gameFeelings')
        .step('comments')
        .gameover();

    // Modify the stager to skip one stage.
    // stager.skip('instructions');
};
