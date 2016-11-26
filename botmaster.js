const Botmaster = require('botmaster');
var recipes = require("kraft-recipe-api")


const telegramSettings = {
    credentials: {
        authToken: '247431355:AAG_RK1OKNzhJke53RD48IXtO0cumLEDTkQ',
    },
    webhookEndpoint: "/webhook83fjdEREWfjsdn3645gdwejjsamnfrt442/",
};


const botsSettings = [{
    telegram: telegramSettings
}];

const botmasterSettings = {
    botsSettings: botsSettings,

}

const botmaster = new Botmaster(botmasterSettings);


botmaster.on('update', (bot, update) => {
    var userMessage = update.message.text;

    var splitted = userMessage.match(/[\w]+|\"[\w\s]+\"/g);

    recipes.searchByIngredients(splitted[0], splitted[1], splitted[2], function(err, results) {

        var recipe_url = "www.kraftrecipes.com/recipes/" + results[0]['WebPageName']
        e
        bot.sendTextMessageTo(recipe_url, update.sender.id);
        console.log(recipe_url);
    });

});

botmaster.on('error', (bot, err) => {
    console.log(err.stack);
});
