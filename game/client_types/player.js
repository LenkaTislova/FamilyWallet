/**
 * # Player type implementation of the game stages
 * Copyright(c) 2019 Lenka <>
 * MIT Licensed
 *
 * Each client type must extend / implement the stages defined in `game.stages`.
 * Upon connection each client is assigned a client type and it is automatically
 * setup with it.
 *
 * http://www.nodegame.org
 * ---
 */

"use strict";

var ngc = require('nodegame-client');

module.exports = function(treatmentName, settings, stager, setup, gameRoom) {


	//stager.setDefaultStepRule(ngc.stepRules.SOLO);

    stager.setOnInit(function() {

        // Initialize the client.

        var header, frame;

        // Bid is valid if it is a number between 0 and 100.
        this.isValidBid = function(n) {
            return node.JSUS.isInt(n, -1, 101);
        };

        this.randomOffer = function(offer, submitOffer) {
            var n;
            n = J.randomInt(-1,100);
            offer.value = n;
            submitOffer.click();
        };

        // Setup page: header + frame.
        header = W.generateHeader();
        frame = W.generateFrame();

        // Add widgets.
        this.visualRound = node.widgets.append('VisualRound', header, {
            title: false
        });
        this.visualTimer = node.widgets.append('VisualTimer', header);

        this.doneButton = node.widgets.append('DoneButton', header);

        // Additional debug information while developing the game.
        //this.debugInfo = node.widgets.append('DebugInfo', header)
        
        
        
        
    });
    
    ////////////////////////////////////////////////////////////
    // nodeGame hint: step propreties.
    //
    // A step is a set of properties under a common label (id).
    //
    // Properties are looked up with a cascade mechanism. That is,
    // all steps inherit the properties defined at the stage level in
    // which they are inserted. All stages inherit the properties
    // defined at the game level. Finally, it fallbacks on nodeGame defaults.
    //
    // The property named `cb` is one of the most important.
    //
    // It defines the callback that will be called during the step.
    // By default, each steps inherits an empty callback, so that
    // it is not necessary to implement the cb property, if the
    // player has, for example, only to read a text.
    //
    // To add/modify properties use the commands:
    //
    // `stager.extendStep`: modifies a step
    // `stager.extendStage`: modifies a stage, and all enclosed steps
    // `stager.setDefaultProperty`: modifies all stages and steps
    //
    ////////////////////////////////////////////////////////////   

    // // // WARM UP!
    stager.extendStage('warmUp', {
        frame: 'warmUp.htm'
    });

    stager.extendStep('survey', {
        frame: 'warmUp.htm'
    });

    stager.extendStep('roleTaking', {
        frame: 'warmUp.htm'
    });

    stager.extendStep('instructions', {
        frame: 'instructions.htm'
    });

	// // // WALLET!
    stager.extendStage('wallet', {
        frame: 'wallet.htm'
    });
    
    
    //Tady bude babička 
	var Babicka = {
		id: 'Grandma', 
		forms: [
					{
						id: 'Otázka 1',
						name: 'ChoiceTable',
						mainText: 'Babička nechce, aby se o ní starala její vlastní dcera, přijde si na obtíž a tak…',
						requiredChoice: 1,
						selectMultiple: 1, 
						// orientation: 'v',
						choices: ['půjde do stacionáře, který ale stojí hodně peněz -3000,-', 'zůstane u své dcery, která si bude muset vzít neplacené volno a přijde o hodně peněz -3000,-', 'poprosí svého vnuka, aby se o ní staral, aby matka mohla chodit do práce. 0,-']
					},
					{
						id: 'Otázka 2',
						name: 'ChoiceTable',
						mainText: 'Babička se dostane do situace, kdy si rozbije své brýle',
						requiredChoice: 1,
						selectMultiple: 1, 
						// orientation: 'v',
						choices: ['pořídí si nové a zaplatí si je sama -1500,-', 'požádá dceru o finanční pomoc na nové brýle -750,-', 'půjčí si na ně v bance a po dobu tří měsíců bude splácet -500 x 3,-']
					}
				]
			};


    stager.extendStep('eventLottery', {
        frame: 'wallet.htm'
    });
    
    stager.extendStep('solvingEvents', {
        frame: 'wallet.htm'
    });

    stager.extendStep('checkSolutionValidity', {
        frame: 'wallet.htm'
    });
    
    stager.extendStep('roundFeedBack', {
        frame: 'wallet.htm'
    });

    stager.extendStep('roundFeeling', {
        frame: 'wallet.htm'
    });

	// // // END!
    stager.extendStep('end', {
        donebutton: false,
        frame: 'end.htm',
        init: function() {
            node.game.visualTimer.setToZero();
        }
    });

    stager.extendStep('gameFeedBack', {
        frame: 'end.htm'
    });

    stager.extendStep('gameFeeling', {
        frame: 'end.htm'
    });

    stager.extendStep('comments', {
		donebutton: false,
        frame: 'end.htm'
    });
};
