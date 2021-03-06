const {Command} = require("../../lib");
const Discord = require("discord.js");
module.exports = class clear extends Command {
    constructor() {
        super("kick", {
            userPermissions: ["KICK_MEMBERS", "BAN_MEMBERS"],
            botPermissions: ["KICK_MEMBERS"]
        });
    }

    async run(message, [member, ...reason]) {
        console.log(reason);
        if (!member) return message.sm("Please mention a user to kick!", {type: "error"});
        const kickMember = await message.findMember(args[0]);
        if (!kickMember) return message.sm("Couldn't find that member!", {type: "error"});
        if (!reason) return message.sm("Please provide the reason", {type: "error"});

    }
};