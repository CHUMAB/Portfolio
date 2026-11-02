

$( document ).ready(function() {
    
    

    $("#start").click(function() {      
        $('#settingsModal').modal("hide");     
    })

    $('#confirmName').click(function() {
        
        const enteredName = $("#inputName").val();
        const nameNotNumbers = /^((?![0-9.,!?:;_|+\-*\\/=%°@&#§$"'`¨^ˇ()\[\]<>{}])[\S])+$/;//checks if name has numbers
        //regex block

        if (enteredName == "") {
            $("#inputName").addClass("invalid-feedback");
            $("#inputName").show();
            $("#feedback").text("Please enter a name!");
            $("#feedback").css("color", "red");
        }
        else if (nameNotNumbers.test(enteredName)) {
            var confirmedName = enteredName.toUpperCase();
            $("#headerName").text(confirmedName);
            load_data_with_fetch();
            $("#landingPage").css("display", "none");

            $('#nameModal').modal('hide');
        } else {            
            $("#inputName").addClass("invalid-feedback");
            $("#inputName").show();
            $("#feedback").text("Name cannot contain numbers!");
            $("#feedback").css("color", "red");
        }

    })

    $(".list-group").on("mouseenter", ".list-group-item", function() {//updated dynamic version of original function! Use of classes demonstrated here and throughout
        $(this).css("background-color", "rgb(25, 98, 25)");//this now uses the parent element to ensure that dynamically added
        $(this).css("border-radius", "5px");//<li>'s are affected too!
        $(this).css("border-color", "white");
        $(this).css('cursor','pointer');
    });

    $(".list-group").on("mouseleave", ".list-group-item", function() {//same function for mouseleave
        $(this).css("background-color", "rgb(72, 3, 72)");
        $(this).css("border-radius", "0px");
        $(this).css("border-color", "black");
    });

    $("#notoSans").click(function() {//this is just for font changes - one of many, many event handlers used throughout
        $("#landingPage").css("font-family", "Noto Sans");
        $("#beginnings").css("font-family", "Noto Sans");

    })

    $("#medievalSharp").click(function() {
        $("#landingPage").css("font-family", "MedievalSharp");
        $("#beginnings").css("font-family", "MedievalSharp");
    })

  async function getData(){
        try{
            const response =  await import('../json.story.json')
            console.log(response.json)
            return response.json()
        }catch(err){
            return err
        }}


let load_data_with_fetch = (value) => {//big fetch of JSON data, everything else is contained in this function - error catch is at bottom of page

    fetch("https://aylfxdea9iuc4d4g.public.blob.vercel-storage.com/story.json").//fixed to allow the project to run on my website
        then(response => response.json()).

            then((data) => {
            console.log(data)
            var gold = 12;//default value
            var ogreBeaten = true;//these 2 check if you have beaten the ogre and crabs respectively
            var crabsBeaten = true;//once they are both true you can go north
            console.log(data)
            $("#gold").text(gold);             
            $("#bgInstructions").text(data.instructions);
            $("#beginnings").show();
            $("#stats").show();

var enteredName = $("#inputName").val();//gets users name
   const nameValue = {
    Name: enteredName
   } 
   var start = new Date;

   setInterval(function() {//very basic timer counts up seconds
       $('#timer').text(Math.round((new Date - start) / 1000));

   }, 1000);
                

$("#bgChoice1").click(function() {//baseline damage function demonstrates DOM manipulation 

    var healthPer = parseInt($("#healthBar").css('width'));//value is an INT value of the HP bar width value
    var healthFull = parseInt($("#healthFullWidth").css('width'));//value is INT value of HP bar max width
    var damageToTake = 10;


    var damageTaken = (damageToTake / 100) * healthFull;//10% of max health taken                    
    damageTaken = (damageTaken / healthFull) *100;//converts raw number to % value of the max health

    let currentHealth = (healthPer / healthFull) * 100;//% value of current health
   
    let newHealth = currentHealth - damageTaken;//newhealth takes damage away from current hp value
    newHealth = Math.round(newHealth);//nice round number

    $("#healthBar").css("width", newHealth + '%');//changes width to newhealth value
    $("#healthBar").text(newHealth);//changes text value to match

    //consider turning button off after taking damage

   // $("#bgInstructions").text();
   $("#choices1").hide();//any code like this is for showing and hiding different cards
   $("#cardFood").show();
   $("#tunnelsInstructions").text(data.choices.get_up.instructions);

   $("#foodChoice1").show();
   $("#foodChoice2").show();
   $("#foodChoice1").text("Eat a large breakfast");
   $("#foodChoice2").text("Grab a snack and go");

})

$("#bgChoice2").click(function() {//baseline healing block code - used here as part of the intro section

    var healthPer = parseInt($("#healthBar").css('width'));//value is an INT value of the HP bar width value
    var healthFull = parseInt($("#healthFullWidth").css('width'));//value is INT value of HP bar max width
    var healthToHeal = 15;

    var damageHealed = (healthToHeal / 100) * healthFull;//10% of max health taken  
                        //this value is how much to heal 
    damageHealed = (damageHealed / healthFull) *100;//converts raw number to % value of the max health

    let currentHealth = (healthPer / healthFull) * 100;//% value of current health
   
    let newHealth = currentHealth + damageHealed;//newhealth adds health to current hp value
    newHealth = Math.round(newHealth);//nice round number

    $("#healthBar").css("width", newHealth + '%');//changes width to newhealth value
    $("#healthBar").text(newHealth);//changes text value to match

    //consider turning button off after healing damage

    //$("#tunnelsInstructions").text();
    $("#choices1").hide();
    $("#cardFood").show();
    $("#tunnelsInstructions").text(data.choices.snooze_a_little.instructions);

    $("#foodChoice3").show();
    $("#foodChoice4").show();
    $("#foodChoice3").text("Eat leftover breakfast");
    $("#foodChoice4").text("1 coffee no food");
})


$("#foodChoice1").click(function() {//different intro choice options

    $("#cardFood").hide();
    $("#cardWhichWay").show(); 
    $("#whichWayInstructions").text(data.choices.get_up.choices.eat_large_breakfast.instructions);
    $("#WhichWaySecondary").text(data.which_way.instructions);
})

$("#foodChoice2").click(function() {//different intro choice options

    $("#cardFood").hide();
    $("#cardWhichWay").show(); 
    $("#whichWayInstructions").text(data.choices.get_up.choices.grab_snack_and_leave.instructions);
    $("#WhichWaySecondary").text(data.which_way.instructions);
})

$("#foodChoice3").click(function() {//different intro choice options

    $("#cardFood").hide();
    $("#cardWhichWay").show(); 
    $("#whichWayInstructions").text(data.choices.snooze_a_little.choices.eat_leftover_breakfast.instructions);
    $("#WhichWaySecondary").text(data.which_way.instructions);
})

$("#foodChoice4").click(function() {//different intro choice options

    $("#cardFood").hide();
    $("#cardWhichWay").show(); 
    $("#whichWayInstructions").text(data.choices.snooze_a_little.choices.one_coffee_no_food.instructions);
    $("#WhichWaySecondary").text(data.which_way.instructions);
})

$("#whichWay4").click(function() {//shop functionality
    $("#cardWhichWay").hide(); 
    $("#cardShop").show(); 
    $("#shopInstructions").text("A variety of goods! Each costs [5 gold]");
    $("#shop1").text("Buy sword - " + data.choices.get_up.choices.eat_large_breakfast.choices.adventure_shop.choices.buy_sword.instructions);
    $("#shop2").text("Buy armor - " + data.choices.get_up.choices.eat_large_breakfast.choices.adventure_shop.choices.buy_armor.instructions);
    $("#shop3").text("Buy potion - " + data.choices.get_up.choices.eat_large_breakfast.choices.adventure_shop.choices.buy_health_potion.instructions);
})


$("#shop1").click(function() {//functions for checking gold, checking for already having an item, and purchasing
//currently all 3 function identically aside from having different items
var hasSword = $("#inventory").hasClass("swordBought");

if (hasSword) {
    $("#shop1").text("Looks like you bought the only one");//cant buy 2
} else if (gold > 5) {
    $("#inventory").append("⚔  Adventurer's Sword <br>");
    $("#inventory").addClass("swordBought");
    gold = gold - 5;//changes your total gold amount
    $("#gold").text(gold);
    $("#shop1").text("Sword purchased, very cool!");
} else {
    $("#shop1").text("You need more money for that!");//cant afford message
}
    
})

$("#shop2").click(function() {
    
    var hasArmor = $("#inventory").hasClass("armorBought");

if (hasArmor) {
    $("#shop2").text("Looks like you bought the only one");//cant buy 2
} else if (gold > 5) {
    $("#inventory").append("🛡  Adventurer's armor <br>");
    $("#inventory").addClass("armorBought");
    gold = gold - 5;//changes your total gold amount
    $("#gold").text(gold);
    $("#shop2").text("Armor purchased!");
}else {
    $("#shop2").text("You need more money for that!");//cant afford message
}

    
})

$("#shop3").click(function() {
    var hasPotion = $("#inventory").hasClass("potionBought");
    var potionAmount = 0;
    if (hasPotion) {
        $("#shop3").text("Looks like you bought the only one");//cant buy 2
    } else if (gold > 5) {
        potionAmount++;
        $("#potions").append("☕  Adventurer's potion (x"+ potionAmount + ") <br>");
        $("#inventory").addClass("potionBought");
        gold = gold - 5;//changes your total gold amount
        $("#gold").text(gold);
        $("#shop3").text("Potion purchased!");
    } else {
        $("#shop3").text("You need more money for that!");//cant afford message
    }
    
})

$("#shopSellOgreTrinket").click(function() {//player can sell their loot
    gold = gold + 20;//set value of trinket more gold than player should need anyway
    $("#gold").text(gold);
    $("#shopSellOgreTrinket").hide();
    $("#shopInstructions").text("You sell the Ogre Trinket for 20 Gold. Would have been enough for your parents to retire.");
    $("#ogreTreasure").hide();
})

$("#shopSellOgreSword").click(function() {//player can sell their loot
    gold = gold + 10;//sword is kinda low value option is here so players can opt out of weapons
    $("#gold").text(gold);
    $("#shopSellOgreSword").hide();
    $("#shopInstructions").text("You sell the Ogre Sword for 10 Gold. Seems like a rip-off.");
    $("#ogreSword").hide();
})


$("#shopSellCrabHelmet").click(function() {//player can sell their loot
    gold = gold + 10;//set value of trinket more gold than player should need anyway
    $("#gold").text(gold);
    $("#shopSellCrabHelmet").hide();
    $("#shopInstructions").text("You sell the Crab Helmet for 10 Gold. Hope your head is ok without it.");
    $("#crabHelmet").hide();
})

$("#potions").hover(function() {//basic potion inventory hover
    $("#potions").css({"background-color": "rgb(31, 18, 87)", "border-style": "solid", "border-width": "1px"});
    $(this).css('cursor','pointer');
}, function() {
    $("#potions").css({"background-color": "rgb(33, 33, 33)", "border-style": "none"});
});

$("#ogrePotions").hover(function() {//basic potion inventory hover
    $("#ogrePotions").css({"background-color": "rgb(31, 18, 87)", "border-style": "solid", "border-width": "1px"});
    $(this).css('cursor','pointer');
}, function() {
    $("#ogrePotions").css({"background-color": "rgb(33, 33, 33)", "border-style": "none"});
});

$("#crabJuice").hover(function() {//basic potion inventory hover
    $("#crabJuice").css({"background-color": "rgb(31, 18, 87)", "border-style": "solid", "border-width": "1px"});
    $(this).css('cursor','pointer');
}, function() {
    $("#crabJuice").css({"background-color": "rgb(33, 33, 33)", "border-style": "none"});
});

$("#dragonPotion").hover(function() {//basic potion inventory hover
    $("#dragonPotion").css({"background-color": "rgb(31, 18, 87)", "border-style": "solid", "border-width": "1px"});
    $(this).css('cursor','pointer');
}, function() {
    $("#dragonPotion").css({"background-color": "rgb(33, 33, 33)", "border-style": "none"});
});

$("#potions").click(function() {//click potion to heal
    var healthPer = parseInt($("#healthBar").css('width'));//value is an INT value of the HP bar width value
    var healthFull = parseInt($("#healthFullWidth").css('width'));//value is INT value of HP bar max width
    var healthToHeal = 50;

    var damageHealed = (healthToHeal / 100) * healthFull;//10% of max health taken  
                        //this value is how much to heal 
    damageHealed = (damageHealed / healthFull) *100;//converts raw number to % value of the max health

    let currentHealth = (healthPer / healthFull) * 100;//% value of current health
   
    let newHealth = currentHealth + damageHealed;//newhealth adds health to current hp value
    newHealth = Math.round(newHealth);//nice round number

    if (newHealth > 100) {
        newHealth = 100;
    }

    $("#healthBar").css("width", newHealth + '%');//changes width to newhealth value
    $("#healthBar").text(newHealth);//changes text value to match

    $("#potions").hide();
    
})

$("#ogrePotions").click(function() {//drink the ogre potion
    var healthPer = parseInt($("#healthBar").css('width'));//value is an INT value of the HP bar width value
    var healthFull = parseInt($("#healthFullWidth").css('width'));//value is INT value of HP bar max width
    var healthToHeal = 40;

    var damageHealed = (healthToHeal / 100) * healthFull;//10% of max health taken  
                        //this value is how much to heal 
    damageHealed = (damageHealed / healthFull) *100;//converts raw number to % value of the max health

    let currentHealth = (healthPer / healthFull) * 100;//% value of current health
   
    let newHealth = currentHealth + damageHealed;//newhealth adds health to current hp value
    newHealth = Math.round(newHealth);//nice round number

    if (newHealth > 100) {
        newHealth = 100;
    }

    $("#healthBar").css("width", newHealth + '%');//changes width to newhealth value
    $("#healthBar").text(newHealth);//changes text value to match

    $("#ogrePotions").hide();
    
})

$("#crabJuice").click(function() {//drink the crab juice
    var healthPer = parseInt($("#healthBar").css('width'));//value is an INT value of the HP bar width value
    var healthFull = parseInt($("#healthFullWidth").css('width'));//value is INT value of HP bar max width
    var healthToHeal = 60;

    var damageHealed = (healthToHeal / 100) * healthFull;//10% of max health taken  
                        //this value is how much to heal 
    damageHealed = (damageHealed / healthFull) *100;//converts raw number to % value of the max health

    let currentHealth = (healthPer / healthFull) * 100;//% value of current health
   
    let newHealth = currentHealth + damageHealed;//newhealth adds health to current hp value
    newHealth = Math.round(newHealth);//nice round number

    if (newHealth > 100) {
        newHealth = 100;
    }

    $("#healthBar").css("width", newHealth + '%');//changes width to newhealth value
    $("#healthBar").text(newHealth);//changes text value to match

    $("#crabJuice").hide();
    
})

$("#dragonPotion").click(function() {//drink the dragon potion
    var healthPer = parseInt($("#healthBar").css('width'));//value is an INT value of the HP bar width value
    var healthFull = parseInt($("#healthFullWidth").css('width'));//value is INT value of HP bar max width
    var healthToHeal = 60;

    var damageHealed = (healthToHeal / 100) * healthFull;//10% of max health taken  
                        //this value is how much to heal 
    damageHealed = (damageHealed / healthFull) *100;//converts raw number to % value of the max health

    let currentHealth = (healthPer / healthFull) * 100;//% value of current health
   
    let newHealth = currentHealth + damageHealed;//newhealth adds health to current hp value
    newHealth = Math.round(newHealth);//nice round number

    if (newHealth > 100) {
        newHealth = 100;
    }

    $("#healthBar").css("width", newHealth + '%');//changes width to newhealth value
    $("#healthBar").text(newHealth);//changes text value to match

    $("#dragonPotion").hide();
    
})

$("#backButton").click(function() {//return from shop interface
    $("#cardWhichWay").show(); 
    $("#cardShop").hide(); 
})

$("#whichWay3").click(function() {//player goes west
    $("#westCard").show();
    $("#cardWhichWay").hide();

    $("#westInstructions").text(data.which_way.choices.west.instructions);
    $("#westScenario").text(data.which_way.choices.west.scenario);
    $("#westDialogue").text(data.which_way.choices.west.dialogue);
    $("#west1").text("Sure, I can help");
    $("#west2").text("No thanks, Ogres are scary");
    //$("#beginnings").css('background-image', 'url(includes/forest.jpg)');//might do backgrounds properly if have time its a pain

})

$("#backToTownButton").click(function() {//return from shop interface
    $("#cardWhichWay").show(); 
    $("#westCard").hide()
})

$("#ogreBackToTownButton").click(function() {//post ogre fight return button
    $("#ogreCombatOver").hide();
    $("#ogreCard").hide();
    $("#cardWhichWay").show(); 
    $('#whichWay3').hide();
    $('#whichWay3completed').show();

})

$("#eastBackToTownButton").click(function() {//back to town from east interface
    $("#cardWhichWay").show(); 
    $("#eastCard").hide();
})


$("#west1").click(function() {//"diraction""number" buttons are all to label where you are and which button you press
    $("#ogreCard").show();
    $("#westCard").hide();
    $("#combatCard1").show();
})

$("#west2").click(function() {//"diraction""number" buttons are all to label where you are and which button you press
    $("#westCard").hide();
    $("#retirementCard").show();
    $("#retirementText").text(data.which_way.choices.west.no_thanks);
    
})

$("#retireButton").click(function() {//retirement
    $("#retirementText").text(data.which_way.choices.west.retirement);
    $("#retireTitle").text("Village");
})


$("#combatOgreAttack").click(function() {//attacking the ogre deals damage, and it returns some damage too
//this code block is reused for all combat encounters, each modifies it in their own ways   
    var ogreHealthPer = parseInt($("#ogreHealthBar").css('width'));//value is an INT value of the HP bar width value
    var ogreHealthFull = parseInt($("#ogreHealthFullWidth").css('width'));//value is INT value of HP bar max width
    var hasSword = $("#inventory").hasClass("swordBought");
    var critChance = Math.round((Math.random() * 10) + 1);
    let  randomHit = (min, max) => {
        if (critChance === 10) {//1 in 10 chance to deal 2x damage
            return damage = Math.floor(Math.random() * (max - min + 1) + min) * 2;
        } else {
            return damage = Math.floor(Math.random() * (max - min + 1) + min);
        }//simple example of many conditional statements throughout - most of them contained in combat
        
    }

    if (hasSword) {//more damage if holding sword
        var ogreDamageToTake = randomHit(10, 15); 
        ogreDamageToTake = Math.round(ogreDamageToTake);
    } else {
        var ogreDamageToTake = randomHit(6, 10);
        ogreDamageToTake = Math.round(ogreDamageToTake);
    }
    var ogreDamageTaken = (Math.round(ogreDamageToTake) / 100) * ogreHealthFull;//10% of max health taken                    
    ogreDamageTaken = (ogreDamageTaken / ogreHealthFull) *100;//converts raw number to % value of the max health

    let ogreCurrentHealth = (ogreHealthPer / ogreHealthFull) * 100;//% value of current health
   
    let ogreNewHealth = ogreCurrentHealth - ogreDamageTaken;//newhealth takes damage away from current hp value
    ogreNewHealth = Math.round(ogreNewHealth);//nice round number

    $("#ogreHealthBar").css("width", ogreNewHealth + '%');//changes width to newhealth value
    $("#ogreHealthBar").text(ogreNewHealth);//changes text value to match
    $("#ogreHealthLoss").text("-" + Math.round(ogreDamageTaken));
    $("#combatText2").text("You strike the ogre for " + Math.round(ogreDamageTaken) + " damage!");
    
    //end of ogre health calculation, begining of player health calculation

    var healthPer = parseInt($("#healthBar").css('width'));//value is an INT value of the HP bar width value
    var healthFull = parseInt($("#healthFullWidth").css('width'));//value is INT value of HP bar max width
    var damageToTake = randomHit(8, 10);
    damageToTake = Math.round(damageToTake);//random value each time ogre hits
    var hasArmor = $("#inventory").hasClass("armorBought");

    if (hasArmor) {//less damage if wearing armor
        damageToTake = damageToTake - 4;
    }

    var damageTaken = (damageToTake / 100) * healthFull;//10% of max health taken                    
    damageTaken = (damageTaken / healthFull) *100;//converts raw number to % value of the max health

    let currentHealth = (healthPer / healthFull) * 100;//% value of current health
   
    let newHealth = currentHealth - damageTaken;//newhealth takes damage away from current hp value
    newHealth = Math.round(newHealth);//nice round number

    $("#healthBar").css("width", newHealth + '%');//changes width to newhealth value
    $("#healthBar").text(newHealth);//changes text value to match
    $("#combatText3").text("The ogre bashes you for " + Math.round(damageTaken) + " damage!");

    if (ogreNewHealth < 1) {//ogredeath code
        ogreBeaten = true;
        $("#ogreStatus").text("(dead)");
        $("#ogreCombatOver").show();
        $("#combatCard1").hide();
        $("#combatOverInstructions").append(data.which_way.choices.west.ogre_defeated);
        $("#westInstructions").text(data.which_way.choices.west.new_which_way_instructions);

        if (crabsBeaten == true) {//this is kinda hardcoded but there's only 2 routes so saves me time doing calculations to just use my already existing variables - for a larger project this would be using existing values and adding the new %
            $("#progressBar").css("width", "66%");
            $("#progressBar").text("66%");
        } else {
            $("#progressBar").text("33%");
            $("#progressBar").css("width", "33%");   
        }

        let goldLoot = Math.round((Math.random() * 10) + 1);
        let rollValue = Math.round((Math.random() * 10) + 1);//random 1-10
        let potionAmount = 0;
        if (rollValue < 5) {//sword roll
            $("#inventory").addClass("ogreSword");
            $("#ogreSword").append("⚔  Ogre Sword <br>");
            $("#loot").text(data.which_way.choices.west.loot.ogre_sword);
            gold = gold + goldLoot;
            $("#gold").text(gold);
            $("#shopSellOgreSword").show();

        } else if (rollValue <= 9 && rollValue >= 5) {//potion roll (2x?)
            potionAmount++;     
            $("#ogrePotions").append("☕  Ogre potion (x"+ potionAmount + ") <br>");
            $("#inventory").addClass("ogrePotionBought");
            $("#loot").text(data.which_way.choices.west.loot.ogre_potion);
            gold = gold + goldLoot;
            $("#gold").text(gold);
        } else {
            $("#ogreTreasure").append("💎  Ogre Trinket <br>");
            $("#loot").text(data.which_way.choices.west.loot.ogre_trinket);
            gold = gold + goldLoot;
            $("#gold").text(gold);
            $("#shopSellOgreTrinket").show();
    }
    }

    if (newHealth < 1) {//player death code very simple
        $("#deadCard").show();
        $("#combatCard1").hide();
        $("#ogreCard").hide();
        $("#ogreCombatOver").hide();//hides this in case of simultaious death - in this case the player still loses

    }
})

$("#whichWay2").click(function() {//player goes east
//for the east section i'm going to try to use more choices and options to practice dynamically updating just one card with all the options it needs
let eastRoot = data.which_way.choices.east.choices;    
var choiceNum = 1;
    $("#eastCard").show();
    $("#cardWhichWay").hide();
    $(".eastChoices *").hide();//this clears any option boxes that remain after the user clicks return to village
    $("#eastInstructions").text(data.which_way.choices.east.instructions);
    $("#eastScenario").text(data.which_way.choices.east.scenario);
    let replaceUnderscores = (str) => {//takes the JSON choice names and replaces the underscores with spaces
        str = str.replace(/_/g, " ");//replacement happens here with REGEX
        str = str.substr(0,1).toUpperCase()+str.substr(1);//found tyhis code online, used it to capitalize only the first letter of the string very clever looks better then all uppercase
        $(".eastChoices").append('<li id="east' + choiceNum +'" class="list-group-item option-select">'+ str +'</li>');
    }

    for (const i in eastRoot) {//loop just sends in the data one at a time to be formatted and appended
        replaceUnderscores(i); 
        choiceNum++;
    }
})

$(".eastChoices").on("click", "#east1", function() {//go over to the knight 
    let eastRoot = data.which_way.choices.east.choices.go_over_there.choices;
    //manipulating JSON data in this way thoughtout the east section - buttons dynamically change and populate with json data
    //based on how many choices there are and what other text needs to be displayed
    let eastText = data.which_way.choices.east.choices.go_over_there;
    var choiceNum = 4;//starts at 4 to count up from last ones
    $("#eastInstructions").text(eastText.instructions);
    $("#eastScenario").text("");
    $("#eastDialogue").text(eastText.dialogue);
    $("#east1, #east2, #east3").hide();
    

    let replaceUnderscores = (str) => {//takes the JSON choice names and replaces the underscores with spaces
        str = str.replace(/_/g, " ");//replacement happens here with REGEX
        str = str.substr(0,1).toUpperCase()+str.substr(1);//found tyhis code online, used it to capitalize only the first letter of the string very clever looks better then all uppercase
        $(".eastChoices").append('<li id="east' + choiceNum +'" class="list-group-item option-select">'+ str +'</li>');
    }

    for (const i in eastRoot) {//loop just sends in the data one at a time to be formatted and appended
        replaceUnderscores(i); 
        choiceNum++;
    }
})

$(".eastChoices").on("click", "#east4", function() {//ask for help
    let eastRoot = data.which_way.choices.east.choices.go_over_there.choices.ask_for_help.choices;
    let eastText = data.which_way.choices.east.choices.go_over_there.choices.ask_for_help;
    var choiceNum = 6;//starts at 6 to count up from last ones
    $("#eastInstructions").text(eastText.instructions);
    $("#eastScenario").text("");
    $("#eastDialogue").text("");
    $("#east4, #east5").hide();
    

    let replaceUnderscores = (str) => {//takes the JSON choice names and replaces the underscores with spaces
        str = str.replace(/_/g, " ");//replacement happens here with REGEX
        str = str.substr(0,1).toUpperCase()+str.substr(1);//found this code online, used it to capitalize only the first letter of the string very clever looks better then all uppercase
        $(".eastChoices").append('<li id="east' + choiceNum +'" class="list-group-item option-select">'+ str +'</li>');
    }

    for (const i in eastRoot) {//loop just sends in the data one at a time to be formatted and appended
        replaceUnderscores(i); 
        choiceNum++;
    }
})

$(".eastChoices").on("click", "#east6", function()  {//attack the crabs, combat cards appear here
    $("#eastCard").hide();
    $("#combatCard2").show();
    $("#crabCard1").show();
    $("#crabCard2").show();
    $("#crabCard3").show();
    $("#allCrabs").show();
})

$("#combatCrab1Attack").click(function() {
//uses the skeleton base combat code with differences i will highlight when i get to them
    var crab1HealthPer = parseInt($("#crab1HealthBar").css('width'));//value is an INT value of the HP bar width value
    var crab1HealthFull = parseInt($("#crab1HealthFullWidth").css('width'));//value is INT value of HP bar max width
    var hasSword = $("#inventory").hasClass("swordBought");
    var critChance = Math.round((Math.random() * 10) + 1);
    let randomHit = (min, max) => {
        if (critChance === 10) {//1 in 10 chance to deal 2x damage
            return damage = Math.floor(Math.random() * (max - min + 1) + min) * 2;
        } else {
            return damage = Math.floor(Math.random() * (max - min + 1) + min);
        }
        
    }

    if (hasSword) {
        var crab1DamageToTake = randomHit(20, 30); 
        crab1DamageToTake = Math.round(crab1DamageToTake);
    } else {
        var crab1DamageToTake = randomHit(10, 15);
        crab1DamageToTake = Math.round(crab1DamageToTake);
    }
    var crab1DamageTaken = (Math.round(crab1DamageToTake) / 100) * crab1HealthFull;//10% of max health taken                    
    crab1DamageTaken = (crab1DamageTaken / crab1HealthFull) *100;//converts raw number to % value of the max health

    let crab1CurrentHealth = (crab1HealthPer / crab1HealthFull) * 100;//% value of current health
   
    let crab1NewHealth = crab1CurrentHealth - crab1DamageTaken;//newhealth takes damage away from current hp value
    crab1NewHealth = Math.round(crab1NewHealth);//nice round number

    $("#crab1HealthBar").css("width", crab1NewHealth + '%');//changes width to newhealth value
    $("#crab1HealthBar").text(crab1NewHealth);//changes text value to match
    $("#crab1HealthLoss").text("-" + Math.round(crab1DamageTaken));
    let crab3Alive = parseInt($("#crab3HealthBar").css("width"));
    let crab1Alive = parseInt($("#crab1HealthBar").css("width"));
    let crab2Alive = parseInt($("#crab2HealthBar").css("width"));

    if (crab1Alive < 1) {
        $("#crabCombatText2").text("You strike the dead crab. That was stupid. And a bit disrespectful. You do 0 damage.");
        $("#crab1Status").text("(dead)");

    } else {
        $("#crabCombatText2").text("You strike the crab for " + Math.round(crab1DamageTaken) + " damage!");
    }

    //end of damage to crab start of damage recieved
    //calculating damage 3 times once for each crab

    $("#combatCrab1Attack, #combatCrab2Attack, #combatCrab3Attack").hide();
  
    $("#combatCrab1Cooldown, #combatCrab2Cooldown, #combatCrab3Cooldown").show();
    
    $("#crab1CombatText, #crab2CombatText, #crab3CombatText").text("-");

    let multipleDamage = () => {
//this function is called 3 times whenever the user attacks. each time it returns a different damage value
//this is my solution to the fact that loops would not work due to the nature of the damage system,
//the program requires about a second to pass to move the health bar so this was the best option
        var healthPer = parseInt($("#healthBar").css('width'));//value is an INT value of the HP bar width value
        var healthFull = parseInt($("#healthFullWidth").css('width'));//value is INT value of HP bar max width

        var damageToTake = randomHit(0, 4);
        damageToTake = Math.round(damageToTake);//random value each time crab hits
        var hasArmor = $("#inventory").hasClass("armorBought");

        if (hasArmor && damageToTake != 0) {
            damageToTake = damageToTake - 1;
        }

        var damageTaken = (damageToTake / 100) * healthFull;//10% of max health taken                    
        damageTaken = (damageTaken / healthFull) *100;//converts raw number to % value of the max health

        let currentHealth = (healthPer / healthFull) * 100;//% value of current health
    
        let newHealth = currentHealth - damageTaken;//newhealth takes damage away from current hp value
        newHealth = Math.round(newHealth);//nice round number

        if (newHealth < 1) {//player death code very simple
            $("#deadCard").show();
            $("#combatCard2").hide();
            $("#crabsCard").hide();
            $("#crabsCombatOver").hide();//hides this in case of simultaious death - in this case the player still loses
    
        }

        let crab2Alive = parseInt($("#crab2HealthBar").css("width"));
        let crab3Alive = parseInt($("#crab3HealthBar").css("width"));
        

        if ($("#crab2CombatText").text().length > 1) {//block activates for crab 3 attacking
            $("#crab3CombatText").text("The crab claws you for " + Math.round(damageTaken) + " damage!");
            $("#combatCrab3Cooldown, #combatCrab2Cooldown, #combatCrab1Cooldown").text("COOLDOWN 1");

            if (crab3Alive < 1) {//checks if crab 1 is alive before attack goes through
                $("#crab3CombatText").text("Crab 3 is dead and does no damage");
                $("#crab3Status").text("(dead)");
            } else {
                $("#healthBar").css("width", newHealth + '%');//changes width to newhealth value
                $("#healthBar").text(newHealth);//changes text value to match
            }


        } else if ($("#crab1CombatText").text().length > 1) {//block activates for crab 2 attacking
            $("#crab2CombatText").text("The crab claws you for " + Math.round(damageTaken) + " damage!");
            $("#combatCrab3Cooldown, #combatCrab2Cooldown, #combatCrab1Cooldown").text("COOLDOWN 2");

            if (crab2Alive < 1) {//checks if crab 1 is alive before attack goes through
                $("#crab2CombatText").text("Crab 2 is dead and does no damage");
                $("#crab2Status").text("(dead)");
            } else {
                $("#healthBar").css("width", newHealth + '%');//changes width to newhealth value
                $("#healthBar").text(newHealth);//changes text value to match
            }


        } else {//block activates for crab 1 attacking
            $("#crab1CombatText").text("The crab claws you for " + Math.round(damageTaken) + " damage!");
            $("#combatCrab3Cooldown, #combatCrab2Cooldown, #combatCrab1Cooldown").text("COOLDOWN 3");

            if (crab1NewHealth < 1) {//checks if crab 1 is alive before attack goes through
                $("#crab1CombatText").text("Crab 1 is dead and does no damage");
                $("#crab1Status").text("(dead)");
            } else {
                $("#healthBar").css("width", newHealth + '%');//changes width to newhealth value
                $("#healthBar").text(newHealth);//changes text value to match
            }

        }
        
    }

    let cooldownOff = () => {//turns off the cooldown blocks after 3 seconds
        $("#combatCrab1Cooldown, #combatCrab2Cooldown, #combatCrab3Cooldown").hide();
        $("#combatCrab1Attack, #combatCrab2Attack, #combatCrab3Attack").show();
    }


        multipleDamage();//all function calls happen here, timed so everything always works
        setTimeout(multipleDamage, 1000);
        setTimeout(multipleDamage, 2000);
        setTimeout(cooldownOff, 3000);
    
if (crab1Alive < 1 && crab2Alive < 1 && crab3Alive < 1) {//all crabs are dead end combat
        $("#crabCombatOverInstructions").text("The crabs are all dead! You feel stronger and more capable than ever! the knight comes over to you: 'Hey that was actually pretty good! Here, I make helmets out of their shells for people just like you, take it! It should protect you in fights or you can sell it doesn't matter to me'");
    
        $("#crabLoot").text("You recieved some crab juice and a crab helmet");
        $("#combatCard2").hide();
        $("#crabCard1").hide();
        $("#crabCard2").hide();
        $("#crabCard3").hide();
        $("#allCrabs").hide();
        $("#crabsCombatOver").show();

        if (ogreBeaten == true) {//this is kinda hardcoded but there's only 2 routes so saves me time doing calculations to just use my already existing variables - for a larger project this would be using existing values and adding the new %
            $("#progressBar").css("width", "66%");
            $("#progressBar").text("66%");
        } else {
            $("#progressBar").text("33%");
            $("#progressBar").css("width", "33%");   
        }
    }

    
})

$("#combatCrab2Attack").click(function() {
//repeat of the last block targeting the second crab - see combatCrab1Attack function to learn why I made choices
    var crab2HealthPer = parseInt($("#crab2HealthBar").css('width'));//value is an INT value of the HP bar width value
    var crab2HealthFull = parseInt($("#crab2HealthFullWidth").css('width'));//value is INT value of HP bar max width
    var hasSword = $("#inventory").hasClass("swordBought");
    var critChance = Math.round((Math.random() * 10) + 1);
    let randomHit = (min, max) => {
        if (critChance === 10) {//1 in 10 chance to deal 2x damage
            return damage = Math.floor(Math.random() * (max - min + 1) + min) * 2;
        } else {
            return damage = Math.floor(Math.random() * (max - min + 1) + min);
        }
        
    }

    if (hasSword) {
        var crab2DamageToTake = randomHit(20, 30); 
        crab2DamageToTake = Math.round(crab2DamageToTake);
    } else {
        var crab2DamageToTake = randomHit(10, 15);
        crab2DamageToTake = Math.round(crab2DamageToTake);
    }
    var crab2DamageTaken = (Math.round(crab2DamageToTake) / 100) * crab2HealthFull;//10% of max health taken                    
    crab2DamageTaken = (crab2DamageTaken / crab2HealthFull) *100;//converts raw number to % value of the max health

    let crab2CurrentHealth = (crab2HealthPer / crab2HealthFull) * 100;//% value of current health
   
    let crab2NewHealth = crab2CurrentHealth - crab2DamageTaken;//newhealth takes damage away from current hp value
    crab2NewHealth = Math.round(crab2NewHealth);//nice round number

    $("#crab2HealthBar").css("width", crab2NewHealth + '%');//changes width to newhealth value
    $("#crab2HealthBar").text(crab2NewHealth);//changes text value to match
    $("#crab2HealthLoss").text("-" + Math.round(crab2DamageTaken));
    let crab3Alive = parseInt($("#crab3HealthBar").css("width"));
    let crab1Alive = parseInt($("#crab1HealthBar").css("width"));
    let crab2Alive = parseInt($("#crab2HealthBar").css("width"));

    if (crab2Alive < 1) {
        $("#crabCombatText2").text("You strike the dead crab. That was stupid. And a bit disrespectful. You do 0 damage.");
        $("#crab2Status").text("(dead)");
    } else {
        $("#crabCombatText2").text("You strike the crab for " + Math.round(crab2DamageTaken) + " damage!");
    }

    //end of damage to crab start of damage recieved
    //calculating damage 3 times once for each crab

    $("#combatCrab1Attack, #combatCrab2Attack, #combatCrab3Attack").hide();
  
    $("#combatCrab1Cooldown, #combatCrab2Cooldown, #combatCrab3Cooldown").show();
    
    $("#crab1CombatText, #crab2CombatText, #crab3CombatText").text("-");

    let multipleDamage = () => {

        var healthPer = parseInt($("#healthBar").css('width'));//value is an INT value of the HP bar width value
        var healthFull = parseInt($("#healthFullWidth").css('width'));//value is INT value of HP bar max width

        var damageToTake = randomHit(0, 4);
        damageToTake = Math.round(damageToTake);//random value each time crab hits
        var hasArmor = $("#inventory").hasClass("armorBought");

        if (hasArmor && damageToTake != 0) {
            damageToTake = damageToTake - 1;
        }

        var damageTaken = (damageToTake / 100) * healthFull;//10% of max health taken                    
        damageTaken = (damageTaken / healthFull) *100;//converts raw number to % value of the max health

        let currentHealth = (healthPer / healthFull) * 100;//% value of current health
    
        let newHealth = currentHealth - damageTaken;//newhealth takes damage away from current hp value
        newHealth = Math.round(newHealth);//nice round number

        if (newHealth < 1) {//player death code very simple
            $("#deadCard").show();
            $("#combatCard2").hide();
            $("#crabsCard").hide();
            $("#crabsCombatOver").hide();//hides this in case of simultaious death - in this case the player still loses
    
        }
        

        if ($("#crab2CombatText").text().length > 1) {//block activates for crab 3 attacking
            $("#crab3CombatText").text("The crab claws you for " + Math.round(damageTaken) + " damage!");
            $("#combatCrab3Cooldown, #combatCrab2Cooldown, #combatCrab1Cooldown").text("COOLDOWN 1");

            if (crab3Alive < 1) {//checks if crab 3 is alive before attack goes through
                $("#crab3CombatText").text("Crab 3 is dead and does no damage");
                $("#crab3Status").text("(dead)");
            } else {
                $("#healthBar").css("width", newHealth + '%');//changes width to newhealth value
                $("#healthBar").text(newHealth);//changes text value to match
            }


        } else if ($("#crab1CombatText").text().length > 1) {//block activates for crab 2 attacking
            $("#crab2CombatText").text("The crab claws you for " + Math.round(damageTaken) + " damage!");
            $("#combatCrab3Cooldown, #combatCrab2Cooldown, #combatCrab1Cooldown").text("COOLDOWN 2");
            if (crab2NewHealth < 1) {//checks if crab 2 is alive before attack goes through
                $("#crab2CombatText").text("Crab 2 is dead and does no damage");
                $("#crab2Status").text("(dead)");
            } else {
                $("#healthBar").css("width", newHealth + '%');//changes width to newhealth value
                $("#healthBar").text(newHealth);//changes text value to match
            }


        } else {//block activates for crab 1 attacking
            $("#crab1CombatText").text("The crab claws you for " + Math.round(damageTaken) + " damage!");
            $("#combatCrab3Cooldown, #combatCrab2Cooldown, #combatCrab1Cooldown").text("COOLDOWN 3");

            if (crab1Alive < 1) {//checks if crab 1 is alive before attack goes through
                $("#crab1CombatText").text("Crab 1 is dead and does no damage");
                $("#crab1Status").text("(dead)");
            } else {
                $("#healthBar").css("width", newHealth + '%');//changes width to newhealth value
                $("#healthBar").text(newHealth);//changes text value to match
            }

        }
        
    }

    let cooldownOff = () => {
        $("#combatCrab1Cooldown, #combatCrab2Cooldown, #combatCrab3Cooldown").hide();
        $("#combatCrab1Attack, #combatCrab2Attack, #combatCrab3Attack").show();
    }

        multipleDamage();
        setTimeout(multipleDamage, 1000);
        setTimeout(multipleDamage, 2000);
        setTimeout(cooldownOff, 3000);
    
    if (crab2NewHealth < 1) {//loot
            $("#crabJuice").append("☕  Crab drink <br>");                
    }

    if (crab1Alive < 1 && crab2Alive < 1 && crab3Alive < 1) {//all crabs are dead end combat
        $("#crabCombatOverInstructions").text("The crabs are all dead! You feel stronger and more capable than ever! the knight comes over to you: 'Hey that was actually pretty good! Here, I make helmets out of their shells for people just like you, take it! It should protect you in fights or you can sell it doesn't matter to me'");
    
        $("#crabLoot").text("You recieved some crab juice and a crab helmet");
        $("#combatCard2").hide();
        $("#crabCard1").hide();
        $("#crabCard2").hide();
        $("#crabCard3").hide();
        $("#allCrabs").hide();
        $("#crabsCombatOver").show();
        


        if (crabsBeaten == true) {//this is kinda hardcoded but there's only 2 routes so saves me time doing calculations to just use my already existing variables - for a larger project this would be using existing values and adding the new %
            $("#progressBar").css("width", "66%");
            $("#progressBar").text("66%");
        } else {
            $("#progressBar").text("33%");
            $("#progressBar").css("width", "33%");   
        }
    }

    

})

$("#combatCrab3Attack").click(function() {
//repeat of the first block targeting now the third crab - see combatCrab1Attack function to learn why I made choices

    var crab3HealthPer = parseInt($("#crab3HealthBar").css('width'));//value is an INT value of the HP bar width value
    var crab3HealthFull = parseInt($("#crab3HealthFullWidth").css('width'));//value is INT value of HP bar max width
    var hasSword = $("#inventory").hasClass("swordBought");
    $("#potionInfo").text("");//clears the potion text one attack after it is used
    var critChance = Math.round((Math.random() * 10) + 1);
    let randomHit = (min, max) => {
        if (critChance === 10) {//1 in 10 chance to deal 2x damage
            return damage = Math.floor(Math.random() * (max - min + 1) + min) * 2;
        } else {
            return damage = Math.floor(Math.random() * (max - min + 1) + min);
        }
        
    }

    if (hasSword) {
        var crab3DamageToTake = randomHit(20, 30); 
        crab3DamageToTake = Math.round(crab3DamageToTake);
    } else {
        var crab3DamageToTake = randomHit(10, 15);
        crab3DamageToTake = Math.round(crab3DamageToTake);
    }
    var crab3DamageTaken = (Math.round(crab3DamageToTake) / 100) * crab3HealthFull;//10% of max health taken                    
    crab3DamageTaken = (crab3DamageTaken / crab3HealthFull) *100;//converts raw number to % value of the max health

    let crab3CurrentHealth = (crab3HealthPer / crab3HealthFull) * 100;//% value of current health
   
    let crab3NewHealth = crab3CurrentHealth - crab3DamageTaken;//newhealth takes damage away from current hp value
    crab3NewHealth = Math.round(crab3NewHealth);//nice round number

    $("#crab3HealthBar").css("width", crab3NewHealth + '%');//changes width to newhealth value
    $("#crab3HealthBar").text(crab3NewHealth);//changes text value to match
    $("#crab3HealthLoss").text("-" + Math.round(crab3DamageTaken));
    let crab3Alive = parseInt($("#crab3HealthBar").css("width"));
    let crab1Alive = parseInt($("#crab1HealthBar").css("width"));
    let crab2Alive = parseInt($("#crab2HealthBar").css("width"));

    if (crab3Alive < 1) {
        $("#crabCombatText2").text("You strike the dead crab. That was stupid. And a bit disrespectful. You do 0 damage.");
        $("#crab2Status").text("(dead)");
    } else {
        $("#crabCombatText2").text("You strike the crab for " + Math.round(crab3DamageTaken) + " damage!");
    }

    //end of damage to crab start of damage recieved
    //calculating damage 3 times once for each crab

    $("#combatCrab1Attack, #combatCrab2Attack, #combatCrab3Attack").hide();
  
    $("#combatCrab1Cooldown, #combatCrab2Cooldown, #combatCrab3Cooldown").show();
    
    $("#crab1CombatText, #crab2CombatText, #crab3CombatText").text("-");
    

    

    let multipleDamage = () => {

        var healthPer = parseInt($("#healthBar").css('width'));//value is an INT value of the HP bar width value
        var healthFull = parseInt($("#healthFullWidth").css('width'));//value is INT value of HP bar max width

        var damageToTake = randomHit(0, 4);
        damageToTake = Math.round(damageToTake);//random value each time crab hits
        var hasArmor = $("#inventory").hasClass("armorBought");

        if (hasArmor && damageToTake != 0) {
            damageToTake = damageToTake - 1;
        }

        var damageTaken = (damageToTake / 100) * healthFull;//10% of max health taken                    
        damageTaken = (damageTaken / healthFull) *100;//converts raw number to % value of the max health

        let currentHealth = (healthPer / healthFull) * 100;//% value of current health
    
        let newHealth = currentHealth - damageTaken;//newhealth takes damage away from current hp value
        newHealth = Math.round(newHealth);//nice round number

        if (newHealth < 1) {//player death code very simple
            $("#deadCard").show();
            $("#combatCard2").hide();
            $("#allCrabs").hide();
            $("#crabsCombatOver").hide();//hides this in case of simultaious death - in this case the player still loses
    
        }
        

        if ($("#crab2CombatText").text().length > 1) {//block activates for crab 3 attacking
            $("#crab3CombatText").text("The crab claws you for " + Math.round(damageTaken) + " damage!");
            $("#combatCrab3Cooldown, #combatCrab2Cooldown, #combatCrab1Cooldown").text("COOLDOWN 1");

            if (crab3NewHealth < 1) {//checks if crab 1 is alive before attack goes through
                $("#crab3CombatText").text("Crab 3 is dead and does no damage");
                $("#crab3Status").text("(dead)");
            } else {
                $("#healthBar").css("width", newHealth + '%');//changes width to newhealth value
                $("#healthBar").text(newHealth);//changes text value to match
            }


        } else if ($("#crab1CombatText").text().length > 1) {//block activates for crab 2 attacking
            $("#crab2CombatText").text("The crab claws you for " + Math.round(damageTaken) + " damage!");
            $("#combatCrab3Cooldown, #combatCrab2Cooldown, #combatCrab1Cooldown").text("COOLDOWN 2");

            if (crab2Alive < 1) {//checks if crab 1 is alive before attack goes through
                $("#crab2CombatText").text("Crab 2 is dead and does no damage");
                $("#crab2Status").text("(dead)");
            } else {
                $("#healthBar").css("width", newHealth + '%');//changes width to newhealth value
                $("#healthBar").text(newHealth);//changes text value to match
            }


        } else {//block activates for crab 1 attacking
            $("#crab1CombatText").text("The crab claws you for " + Math.round(damageTaken) + " damage!");
            $("#combatCrab3Cooldown, #combatCrab2Cooldown, #combatCrab1Cooldown").text("COOLDOWN 3");

            if (crab1Alive < 1) {//checks if crab 1 is alive before attack goes through
                $("#crab1CombatText").text("Crab 1 is dead and does no damage");
                $("#crab1Status").text("(dead)");
            } else {
                $("#healthBar").css("width", newHealth + '%');//changes width to newhealth value
                $("#healthBar").text(newHealth);//changes text value to match
            }

        }
        
    }

    let cooldownOff = () => {
        $("#combatCrab1Cooldown, #combatCrab2Cooldown, #combatCrab3Cooldown").hide();
        $("#combatCrab1Attack, #combatCrab2Attack, #combatCrab3Attack").show();
    }


        multipleDamage();
        setTimeout(multipleDamage, 1000);
        setTimeout(multipleDamage, 2000);
        setTimeout(cooldownOff, 3000);
    
        if (crab1Alive < 1 && crab2Alive < 1 && crab3Alive < 1) {//all crabs are dead end combat
            $("#crabCombatOverInstructions").text("The crabs are all dead! You feel stronger and more capable than ever! the knight comes over to you: 'Hey that was actually pretty good! Here, I make helmets out of their shells for people just like you, take it! It should protect you in fights or you can sell it doesn't matter to me'");
        
            $("#crabLoot").text("You recieved some crab juice and a crab helmet");
            $("#combatCard2").hide();
            $("#crabCard1").hide();
            $("#crabCard2").hide();
            $("#crabCard3").hide();
            $("#allCrabs").hide();
            $("#crabsCombatOver").show();

            if (ogreBeaten == true) {//this is kinda hardcoded but there's only 2 routes so saves me time doing calculations to just use my already existing variables - for a larger project this would be using existing values and adding the new %
                $("#progressBar").css("width", "66%");
                $("#progressBar").text("66%");
            } else {
                $("#progressBar").text("33%");
                $("#progressBar").css("width", "33%");   
            }
        }

        

})





$("#crabsBackToTownButton").click(function() {//post ogre fight return button
    $("#crabsCombatOver").hide();
    $("#crabsCard").hide();
    $("#cardWhichWay").show(); 
    $('#whichWay2').hide();
    $('#whichWay2completed').show();
    $("#crabHelmet").append("🦀  Crab Helmet");
    $("#inventory").addClass("crabHelmet");
    $("#shopSellCrabHelmet").show();

    crabsBeaten = true;

})
    
$(".eastChoices").on("click", "#east2", function() {//ignore the knight
    let eastRoot = data.which_way.choices.east.choices.ignore_them;
    var choiceNum = 6;//starts at 10 to ensure no overlap
    $("#eastInstructions").text(eastRoot.instructions);
    $("#eastScenario").text(eastRoot.choices.crab_attack + " You take 7 damage!");
    $("#eastDialogue").text("");
    $("#east1, #east2, #east3").hide();
    

    let replaceUnderscores = (str) => {//takes the JSON choice names and replaces the underscores with spaces
        str = str.replace(/_/g, " ");//replacement happens here with REGEX
        str = str.substr(0,1).toUpperCase()+str.substr(1);//found tyhis code online, used it to capitalize only the first letter of the string very clever looks better then all uppercase
        $(".eastChoices").append('<li id="east' + choiceNum +'" class="list-group-item option-select">'+ str +'</li>');
    }

    for (const i in eastRoot.choices) {//loop just sends in the data one at a time to be formatted and appended
        replaceUnderscores(i); 
        choiceNum++;
    }

    var healthPer = parseInt($("#healthBar").css('width'));//value is an INT value of the HP bar width value
    var healthFull = parseInt($("#healthFullWidth").css('width'));//value is INT value of HP bar max width
    var damageToTake = 7;


    var damageTaken = (damageToTake / 100) * healthFull;//10% of max health taken                    
    damageTaken = (damageTaken / healthFull) *100;//converts raw number to % value of the max health

    let currentHealth = (healthPer / healthFull) * 100;//% value of current health
   
    let newHealth = currentHealth - damageTaken;//newhealth takes damage away from current hp value
    newHealth = Math.round(newHealth);//nice round number

    $("#healthBar").css("width", newHealth + '%');//changes width to newhealth value
    $("#healthBar").text(newHealth);//changes text value to match

})


$(".eastChoices").on("click", "#east2", function(){

    let eastRoot = data.which_way.choices.east.choices.ask_for_help;
    var choiceNum = 12;//starts at 12 to ensure no overlap
    $("#eastInstructions").text(eastRoot.instructions);
    $("#eastScenario").text(eastRoot.choices.crab_attack + " You take 7 damage!");
    $("#eastDialogue").text("");
    $("#east1, #east2, #east3").hide();
    

    let replaceUnderscores = (str) => {//takes the JSON choice names and replaces the underscores with spaces
        str = str.replace(/_/g, " ");//replacement happens here with REGEX
        str = str.substr(0,1).toUpperCase()+str.substr(1);//found tyhis code online, used it to capitalize only the first letter of the string very clever looks better then all uppercase
        $(".eastChoices").append('<li id="east' + choiceNum +'" class="list-group-item option-select">'+ str +'</li>');
    }

    for (const i in eastRoot.choices) {//loop just sends in the data one at a time to be formatted and appended
        replaceUnderscores(i); 
        choiceNum++;
    }
})

$(".eastChoices").on("click", "#east5", function(){//click fight me

    let eastRoot = data.which_way.choices.east.choices.go_over_there.choices;
    var choiceNum = 14;//starts at 14 to ensure no overlap
    $("#eastInstructions").text("");
    $("#eastScenario").text("");
    $("#eastDialogue").text(eastRoot.fight_me.dialogue);
    $("#east4, #east5").hide();
    

    let replaceUnderscores = (str) => {//takes the JSON choice names and replaces the underscores with spaces
        str = str.replace(/_/g, " ");//replacement happens here with REGEX
        str = str.substr(0,1).toUpperCase()+str.substr(1);//found tyhis code online, used it to capitalize only the first letter of the string very clever looks better then all uppercase
        $(".eastChoices").append('<li id="east' + choiceNum +'" class="list-group-item option-select">'+ str +'</li>');
    }
    for (const i in eastRoot.fight_me.choices) {//loop just sends in the data one at a time to be formatted and appended
        replaceUnderscores(i); 
        choiceNum++;
    }
})

$(".eastChoices").on("click", "#east7", function(){//click fight me after you ask for help

    let eastRoot = data.which_way.choices.east.choices.go_over_there.choices.ask_for_help.choices.fight_me;
    var choiceNum = 14;//starts at 14 to ensure no overlap
    $("#eastInstructions").text("");
    $("#eastScenario").text("");
    $("#eastDialogue").text(eastRoot.dialogue);
    $("#east6, #east7").hide();
    

    let replaceUnderscores = (str) => {//takes the JSON choice names and replaces the underscores with spaces
        str = str.replace(/_/g, " ");//replacement happens here with REGEX
        str = str.substr(0,1).toUpperCase()+str.substr(1);//found tyhis code online, used it to capitalize only the first letter of the string very clever looks better then all uppercase
        $(".eastChoices").append('<li id="east' + choiceNum +'" class="list-group-item option-select">'+ str +'</li>');
    }
    for (const i in eastRoot.choices) {//loop just sends in the data one at a time to be formatted and appended
        replaceUnderscores(i); 
        choiceNum++;
    }
})

$(".eastChoices").on("click", "#east14", function(){//click yeah

    let eastRoot = data.which_way.choices.east.choices.go_over_there.choices.fight_me.choices.yeah;
    $("#eastInstructions").text("");
    $("#eastScenario").text("");
    $("#knightCombatText").text(eastRoot);

    $("#eastCard").hide();
    $("#combatCard3").show();
    $("#knightCard").show();
    
})

$(".eastChoices").on("click", "#east15", function(){//click actually no

    let eastRoot = data.which_way.choices.east.choices.go_over_there.choices.fight_me.choices.actually_no;
    var choiceNum = 16;//starts at 16 to ensure no overlap
    $("#eastInstructions").text("");
    $("#eastScenario").text("");
    $("#eastDialogue").text(eastRoot.dialogue);
    $("#east14, #east15").hide();
    

    let replaceUnderscores = (str) => {//takes the JSON choice names and replaces the underscores with spaces
        str = str.replace(/_/g, " ");//replacement happens here with REGEX
        str = str.substr(0,1).toUpperCase()+str.substr(1);//found tyhis code online, used it to capitalize only the first letter of the string very clever looks better then all uppercase
        $(".eastChoices").append('<li id="east' + choiceNum +'" class="list-group-item option-select">'+ str +'</li>');
    }
    for (const i in eastRoot.choices) {//loop just sends in the data one at a time to be formatted and appended
        replaceUnderscores(i); 
        choiceNum++;
    }
})

$(".eastChoices").on("click", "#east16", function(){//click yeah to fight CRABS
    $("#eastCard").hide();
    $("#combatCard2").show();
    $("#crabCard1").show();
    $("#crabCard2").show();
    $("#crabCard3").show();
    $("#allCrabs").show();

    $('#whichWay3').hide();
    $('#whichWay3completed').show();
})

$(".eastChoices").on("click", "#east17", function(){//click no i want to leave and retire
    $("#eastCard").hide();
    $("#retirementCard").show();
    $("#retireTitle").text("The Beach");
    $("#retirementText").text(data.which_way.choices.east.choices.go_over_there.choices.fight_me.choices.actually_no.choices.no_i_want_to_leave);
})

$("#combatKnight1Attack").click(function() {//knight fight area

var knightHealthPer = parseInt($("#knightHealthBar").css('width'));//value is an INT value of the HP bar width value
var knightHealthFull = parseInt($("#knightHealthFullWidth").css('width'));//value is INT value of HP bar max width
var hasSword = $("#inventory").hasClass("swordBought");
var critChance = Math.round((Math.random() * 10) + 1);
let randomHit = (min, max) => {
    if (critChance === 10) {//1 in 10 chance to deal 2x damage
        return damage = Math.floor(Math.random() * (max - min + 1) + min) * 2;

    } else {
        return damage = Math.floor(Math.random() * (max - min + 1) + min);

    }
    
}

if (hasSword) {
    var knightDamageToTake = randomHit(3, 5); 
    knightDamageToTake = Math.round(knightDamageToTake);
} else {
    var knightDamageToTake = randomHit(0, 2);
    knightDamageToTake = Math.round(knightDamageToTake);
}
var knightDamageTaken = (Math.round(knightDamageToTake) / 100) * knightHealthFull;//10% of max health taken                    
knightDamageTaken = (knightDamageTaken / knightHealthFull) *100;//converts raw number to % value of the max health

let knightCurrentHealth = (knightHealthPer / knightHealthFull) * 100;//% value of current health

let knightNewHealth = knightCurrentHealth - knightDamageTaken;//newhealth takes damage away from current hp value
knightNewHealth = Math.round(knightNewHealth);//nice round number

$("#knightHealthBar").css("width", knightNewHealth + '%');//changes width to newhealth value
$("#knightHealthBar").text(knightNewHealth);//changes text value to match
$("#knightHealthLoss").text("-" + Math.round(knightDamageTaken));
$("#knightCombatText2").text("You strike the knight for " + Math.round(knightDamageTaken) + " damage!");

//end of ogre health calculation, begining of player health calculation

var healthPer = parseInt($("#healthBar").css('width'));//value is an INT value of the HP bar width value
var healthFull = parseInt($("#healthFullWidth").css('width'));//value is INT value of HP bar max width
var damageToTake = randomHit(25, 30);
damageToTake = Math.round(damageToTake);//random value each time ogre hits
var hasArmor = $("#inventory").hasClass("armorBought");

if (hasArmor) {
    damageToTake = damageToTake / 2;
}

var damageTaken = (damageToTake / 100) * healthFull;//10% of max health taken                    
damageTaken = (damageTaken / healthFull) *100;//converts raw number to % value of the max health

let currentHealth = (healthPer / healthFull) * 100;//% value of current health

let newHealth = currentHealth - damageTaken;//newhealth takes damage away from current hp value
newHealth = Math.round(newHealth);//nice round number

if (newHealth < 1) {//player death code very simple
    $("#deadCard").show();
    $("#combatCard4").hide();
    $("#knightCard").hide();

}

$("#healthBar").css("width", newHealth + '%');//changes width to newhealth value
$("#healthBar").text(newHealth);//changes text value to match
$("#knightCombatText3").text("The knight bashes you for " + Math.round(damageTaken) + " damage!");

if (newHealth < 1) {//player death code very simple
    $("#deadCard").show();
    $("#combatCard3").hide();
    $("#knightCard").hide();
    $("#knightCombatOver").hide();//hides this in case of simultaious death - in this case the player still loses
}
})


$("#whichWay1").click(function() {//player goes north!
if (ogreBeaten == true && crabsBeaten == true) {
    $("#WhichWaySecondary").text("The guard looks you up and down: 'You're looking capable! Head on through there's some sort of dragon attack happening I'm sure they could use your help!'");

    let northRoot = data.which_way.choices.north;   
    var choiceNum = 1; 
        $("#northCard").show();
        $("#cardWhichWay").hide();
        $("#northInstructions").text(northRoot.instructions);
        $("#northScenario").text("");
        $("#northDialogue").text(northRoot.dialogue);

        let replaceUnderscores = (str) => {//takes the JSON choice names and replaces the underscores with spaces
            str = str.replace(/_/g, " ");//replacement happens here with REGEX
            str = str.substr(0,1).toUpperCase()+str.substr(1);//found tyhis code online, used it to capitalize only the first letter of the string very clever looks better then all uppercase
            $(".northChoices").append('<li id="north' + choiceNum +'" class="list-group-item option-select">'+ str +'</li>');
        }
    
        for (const i in northRoot.choices) {//loop just sends in the data one at a time to be formatted and appended
            replaceUnderscores(i); 
            choiceNum++;
        }

            } else {
                $("#WhichWaySecondary").text("There's a guard by the North gate, he takes a look at you: 'Dangerous stuff going on out there, you should be more experienced before I can let you through.'")
            }
    
    
    })
    
    $(".northChoices").on("click", "#north1", function(){//player attacks dragon

        let northRoot = data.which_way.choices.north.choices.yeah_get_me_in_there;   
        var choiceNum = 3; 
        $("#northCard").show();
        $("#cardWhichWay").hide();
        $("#north1").hide();
        $("#north2").hide();
        $("#northInstructions").text("");
        $("#northScenario").text("");
        $("#northDialogue").text(northRoot.dialogue)
        let replaceUnderscores = (str) => {//takes the JSON choice names and replaces the underscores with spaces
            str = str.replace(/_/g, " ");//replacement happens here with REGEX
            str = str.substr(0,1).toUpperCase()+str.substr(1);//found tyhis code online, used it to capitalize only the first letter of the string very clever looks better then all uppercase
            $(".northChoices").append('<li id="north' + choiceNum +'" class="list-group-item option-select">'+ str +'</li>');
        }
    
        for (const i in northRoot.choices) {//loop just sends in the data one at a time to be formatted and appended
            replaceUnderscores(i); 
            choiceNum++;
        }

    })       
     
    $(".northChoices").on("click", "#north3", function(){//take the potion
        
        $("#dragonPotion").append("🐉  Dragon Potion")
        $("#combatCard4").show();
        $("#dragonCard").show();
        $("#northCard").hide();
    })

    $(".northChoices").on("click", "#north4", function(){//no potion
        $("#inventory").addClass("dragonPotion");
        $("#combatCard4").show();
        $("#dragonCard").show();
        $("#northCard").hide();

    })

    $(".northChoices").on("click", "#north2", function(){//no potion
        
        $("#retireTitle").text("Northern Mountain Base");
        $("#retirementText").text("even after all you've been through? Suit yourself, retirement can bring joy too..");
        $("#retirementCard").show();
        $("#northCard").hide();

    })

    $("#combatDragonAttack").click(function() {//function for attacking the dragon

    var dragonHealthPer = parseInt($("#dragonHealthBar").css('width'));//value is an INT value of the HP bar width value
    var dragonHealthFull = parseInt($("#dragonHealthFullWidth").css('width'));//value is INT value of HP bar max width
    var hasSword = $("#inventory").hasClass("ogreSword");//if have ogre sword specifically you do more damage
    var critChance = Math.round((Math.random() * 10) + 1);
    let randomHit = (min, max) => {
        if (critChance === 10) {//1 in 10 chance to deal 2x damage
            return damage = Math.floor(Math.random() * (max - min + 1) + min) * 2;

        } else {
            return damage = Math.floor(Math.random() * (max - min + 1) + min);

        }
        
    }

    if (hasSword) {//this is for ogre sword
        var dragonDamageToTake = randomHit(5, 9); 
        dragonDamageToTake = Math.round(dragonDamageToTake);
    } else {
        var dragonDamageToTake = randomHit(2, 5);
        dragonDamageToTake = Math.round(dragonDamageToTake);
    }
    var dragonDamageTaken = (Math.round(dragonDamageToTake) / 100) * dragonHealthFull;//10% of max health taken                    
    dragonDamageTaken = (dragonDamageTaken / dragonHealthFull) *100;//converts raw number to % value of the max health

    let dragonCurrentHealth = (dragonHealthPer / dragonHealthFull) * 100;//% value of current health
   
    let dragonNewHealth = dragonCurrentHealth - dragonDamageTaken;//newhealth takes damage away from current hp value
    dragonNewHealth = Math.round(dragonNewHealth);//nice round number

    $("#dragonHealthBar").css("width", dragonNewHealth + '%');//changes width to newhealth value
    $("#dragonHealthBar").text(dragonNewHealth);//changes text value to match
    $("#dragonHealthLoss").text("-" + Math.round(dragonDamageTaken));
    $("#dragonCombatText1").text("You strike the dragon for " + Math.round(dragonDamageTaken) + " damage!");

    //damage to player starts here

    var healthPer = parseInt($("#healthBar").css('width'));//value is an INT value of the HP bar width value
    var healthFull = parseInt($("#healthFullWidth").css('width'));//value is INT value of HP bar max width
    var damageToTake = randomHit(8, 10);
    damageToTake = Math.round(damageToTake);//random value each time ogre hits
    var hasArmor = $("#inventory").hasClass("crabHelmet");//armor check for dragon is crab helmet

    if (hasArmor) {//crab helmet is very good
        damageToTake = damageToTake / 2;
    }

    var damageTaken = (damageToTake / 100) * healthFull;//10% of max health taken                    
    damageTaken = (damageTaken / healthFull) *100;//converts raw number to % value of the max health

    let currentHealth = (healthPer / healthFull) * 100;//% value of current health
   
    let newHealth = currentHealth - damageTaken;//newhealth takes damage away from current hp value
    newHealth = Math.round(newHealth);//nice round number

    $("#healthBar").css("width", newHealth + '%');//changes width to newhealth value
    $("#healthBar").text(newHealth);//changes text value to match
    $("#combatText3").text("The dragon bashes you for " + Math.round(damageTaken) + " damage!");

    if (newHealth < 1) {//player death code very simple
        $("#deadCard").show();
        $("#combatCard4").hide();
        $("#dragonCard").hide();
        $("#youWin").hide();//hides this in case of simultaious death - in this case the player still loses

    }

    let adventurorGroup = [//this serves to actual function to the encounter beyond flavour
        "SCLOOM the tester",
        "DOORSLAM the shadow",
        "DOMMEL the slow",
        "ARCHIBALD the fancy",
        "BRIAN the regular",
        "TRAIN the helpful",
        "FLORES the magic",
        "BRUTUS the soft-hearted"
    ]

    let chooseRandom = () => {//picks a random adventuror from the array - in the future i want player names to be added here
        var temp = adventurorGroup.slice(adventurorGroup);
        var ret = [];

        for (let i = 0; i < 1; i++) {
            var num = Math.floor(Math.random() * temp.length);
            var chosen = temp.splice(num, 1);

            ret.push(chosen[0]);
        }
        return ret;
    }

    let npcDamageCalc = () => {
        var damage = Math.floor(randomHit(3, 5));
        return damage;
    }
    
    $("#dragonCombatText2").text(chooseRandom() + " Attacks for " + npcDamageCalc() + " damage!");
    $("#dragonCombatText3").text(chooseRandom() + " Attacks for " + npcDamageCalc() + " damage!");
    $("#dragonCombatText4").text(chooseRandom() + " Attacks for " + npcDamageCalc() + " damage!");
    $("#dragonCombatText5").text(chooseRandom() + " Attacks for " + npcDamageCalc() + " damage!");
    $("#dragonCombatInstructions").text("Other people are fighting but the health bar doesn't move for them? Perhaps they each have their own health bar")
    //i know it picks the same person more than once often but i think its funny and don't want to fix it

    if (dragonNewHealth < 1) {//code for when dragon dies
        $("#dragonCard").hide();
        $("#combatCard4").hide();
        $("#youWin").show();
        $("#progressBar").text("100%");
        $("#progressBar").css("width", "100%");   

        var gold = parseInt($("#gold").text());
        var time = parseInt($("#timer").text());   
        
        var finalScore = Math.floor((gold*4)/(time/100));//arbitrary score should be higher with less score and more gold
        $("#score").text("Your score is: " + finalScore);
        
try{const endGame = async () => {//function POSTs all the data as soon as the dragon dies
    var enteredName = $("#inputName").val();
    var gold = $("#gold").text();
    var finalTime = $('#timer').text();
    var score = Math.floor((gold*4)/(finalTime/100));

    const testing = { //values to display to user upon finishing game
        username: enteredName, 
        score: score,
        gold: gold,
        finaltime: finalTime
    }
    
    let response = await fetch('https://cam.json.compsci.cc/foo', {//POST method for saving user data likely for end game stats
    method: 'POST',
    headers: {
        'Content-Type': "application/json" 
    },
    body: JSON.stringify(testing)
   }) 
}} catch(error) {
    $("#errorCard").show();
    $("#errorHere").text(error);
} finally {
    setTimeout(function(){//finally reloads the page after 10 seconds
        location.reload();
     }, 10000)
}
        endGame();//ends game!
    }
    })

    $("#winRestartGame, #deadRestartGame, #retireRestartGame").click(function() {//same function for dying and winning
        location.reload();
    })

})

.catch(error => {
    $("#errorCard").show();
    $("#errorHere").text(error);
})
//i think catch goes here test later
};



})




            