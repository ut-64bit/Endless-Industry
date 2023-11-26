/*
// レリックのクールダウン
ItemEvents.rightClicked("botania:flugel_eye", event => {
	event.player.addItemCooldown("botania:flugel_eye", 12000)
})

ItemEvents.rightClicked("botania:king_key", event => {
	event.player.addItemCooldown("botania:king_key", 140)
})

ItemEvents.rightClicked("botania:infinite_fruit", event => {
	if (event.player.saturation != 20)
		event.exit()
	event.player.addItemCooldown("botania:infinite_fruit", 6000)
})
*/

// Listen to player login event
PlayerEvents.loggedIn(event => {
	// Check if player doesn't have "starting_items" stage yet
	if (!event.player.stages.has('starting_items')) {
		// Add the stage
		event.player.stages.add('starting_items')
		// Give some items to player
		event.player.give(Item.of('epicfight:skillbook', "{skill:\"epicfight:guard\"}"))
		event.player.give('16x minecraft:apple')
	}
})

ItemEvents.entityInteracted("glass_bottle", event => {
	if (event.target.type != "minecraft:cow") event.exit();
	event.item.count--
	event.player.giveInHand(Item.of("farmersdelight:milk_bottle"))
	event.target.playSound('entity.cow.milk')
})

BlockEvents.broken('biomesoplenty:burning_blossom', event => {
	let [mainhand, offhand] = event.entity.handSlots
	if (mainhand.id == "minecraft:shears") event.exit();

	let { x, y, z } = event.block;
	let explosion = event.level.createExplosion(x + 0.5, y + 0.5, z + 0.5);
	explosion.causesFire(true)
	explosion.damagesTerrain(false)
	explosion.strength(1)
	explosion.explode()
})